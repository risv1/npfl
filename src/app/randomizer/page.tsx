"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw, Trophy } from 'lucide-react';
import toast from 'react-hot-toast';
import PlayerList from '@/components/randomizer/PlayerList';
import PlayerInput from '@/components/randomizer/PlayerInput';
import TeamList from '@/components/randomizer/TeamList';
import TeamInput from '@/components/randomizer/TeamInput';

const TeamSelectorWheel: React.FC = () => {
  const [teams, setTeams] = useState<string[]>([]);
  const [players, setPlayers] = useState<string[]>([]);
  const [newTeamName, setNewTeamName] = useState('');
  const [newPlayerName, setNewPlayerName] = useState('');
  const [teamAssignments, setTeamAssignments] = useState<{ [key: string]: string }>({});
  const [spinning, setSpinning] = useState(false);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [remainingTeams, setRemainingTeams] = useState<string[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const addTeam = () => {
    if (!newTeamName.trim()) {
      toast.error('Team name cannot be empty', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      });
      return;
    }

    if (teams.includes(newTeamName.trim())) {
      toast.error('Team already exists', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      });
      return;
    }

    setTeams([...teams, newTeamName.trim()]);
    setRemainingTeams([...teams, newTeamName.trim()]);
    setNewTeamName('');
    toast.success('Team added successfully', {
      icon: '🏏',
      style: {
        backgroundColor: '#34D399',
        color: '#fff'
      }
    });
  };

  const addPlayer = () => {
    if (!newPlayerName.trim()) {
      toast.error('Player name cannot be empty', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      });
      return;
    }

    if (players.includes(newPlayerName.trim())) {
      toast.error('Player already exists', {
        style: {
          backgroundColor: '#F87171',
          color: '#fff'
        }
      });
      return;
    }

    setPlayers([...players, newPlayerName.trim()]);
    setNewPlayerName('');
    toast.success('Player added successfully', {
      icon: '🏏',
      style: {
        backgroundColor: '#34D399',
        color: '#fff'
      }
    });
  };

  const randomizePlayerOrder = () => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    setPlayers(shuffledPlayers);
    setCurrentPlayerIndex(0);
    toast.success('Players order randomized', {
      icon: '🔀',
      style: {
        backgroundColor: '#34D399',
        color: '#fff'
      }
    });
  };

  const drawWheel = useCallback((rotation = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fill();

    const segmentCount = remainingTeams.length;
    const anglePerSegment = (Math.PI * 2) / segmentCount;

    remainingTeams.forEach((team, index) => {
      const startAngle = (index * anglePerSegment) + rotation;
      const endAngle = ((index + 1) * anglePerSegment) + rotation;

      const hue = (index * 360) / segmentCount;
      const color = `hsl(${hue}, 70%, 80%)`;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = color;
      ctx.fill();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerSegment / 2);
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(team, radius * 0.6, 0);
      ctx.restore();
    });
  }, [remainingTeams]);

  const animateSpin = () => {
    let rotation = currentRotation;
    const totalRotation = Math.random() * (Math.PI * 10) + (Math.PI * 10);
    const duration = 3000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      const easedProgress = 1 - Math.pow(1 - progress, 5);

      rotation = currentRotation + (totalRotation * easedProgress);
      setCurrentRotation(rotation);
      drawWheel(rotation);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        const segmentCount = remainingTeams.length;
        const anglePerSegment = (Math.PI * 2) / segmentCount;
        const normalizedRotation = rotation % (Math.PI * 2);
        const winnerIndex = Math.floor((Math.PI * 2 - normalizedRotation) / anglePerSegment);

        const winner = remainingTeams[winnerIndex];
        setWinner(winner);

        const updatedTeamAssignments = { ...teamAssignments };
        const currentPlayer = players[currentPlayerIndex];

        if (currentPlayer) {
          updatedTeamAssignments[currentPlayer] = winner;
          setTeamAssignments(updatedTeamAssignments);

          const updatedRemainingTeams = remainingTeams.filter(team => team !== winner);
          setRemainingTeams(updatedRemainingTeams);

          const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
          setCurrentPlayerIndex(nextPlayerIndex);
        }

        setSpinning(false);
        toast.success(`${currentPlayer} selected ${winner}!`, {
          icon: '🏆',
          style: {
            backgroundColor: '#34D399',
            color: '#fff'
          }
        });
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const spinWheel = () => {
    if (spinning || remainingTeams.length === 0 || players.length === 0) return;

    setSpinning(true);
    animateSpin();
  };

  const resetGame = () => {
    setTeams([]);
    setPlayers([]);
    setTeamAssignments({});
    setRemainingTeams([]);
    setCurrentPlayerIndex(0);
    setWinner(null);
    toast.success('Game reset', {
      icon: <RotateCcw size={20} />,
      style: {
        backgroundColor: '#34D399',
        color: '#fff'
      }
    });
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    drawWheel(currentRotation);
  }, [remainingTeams, currentRotation, drawWheel]);

  return (
    <div className="
      w-full max-w-2xl mx-auto 
      bg-white dark:bg-neutral-950 
      border border-neutral-200 dark:border-neutral-700 
      rounded-2xl p-8 shadow-2xl 
      space-y-6
    ">
      <div className="flex justify-between items-center">
        <h2 className="
          text-3xl font-bold 
          text-neutral-900 dark:text-neutral-100
        ">
          IPL Team Selector
        </h2>
        <button
          onClick={resetGame}
          className="
            bg-neutral-100 dark:bg-neutral-800 
            text-neutral-700 dark:text-neutral-300
            p-2 rounded-lg 
            hover:bg-neutral-200 dark:hover:bg-neutral-700
            transition-all duration-300
          "
        >
          <RotateCcw size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="
          text-xl font-semibold 
          text-neutral-800 dark:text-neutral-200
        ">
          Add Teams
        </h3>
        <TeamInput
          value={newTeamName}
          onChange={setNewTeamName}
          onAdd={addTeam}
        />
        <TeamList teams={remainingTeams} />
      </div>

      <div className="space-y-4">
        <h3 className="
          text-xl font-semibold 
          text-neutral-800 dark:text-neutral-200
        ">
          Add Players
        </h3>
        <PlayerInput
          value={newPlayerName}
          onChange={setNewPlayerName}
          onAdd={addPlayer}
          onRandomize={randomizePlayerOrder}
        />
        <PlayerList
          players={players}
          teamAssignments={teamAssignments}
          currentPlayerIndex={currentPlayerIndex}
        />
      </div>

      <div className="flex justify-center mb-6">
        <canvas
          ref={canvasRef}
          width={350}
          height={350}
          className="
            border-4 border-neutral-200 dark:border-neutral-700 
            rounded-full shadow-2xl
          "
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={spinWheel}
          disabled={remainingTeams.length === 0 || players.length === 0 || spinning}
          className={`
            bg-fuchsia-500 text-white 
            px-8 py-4 rounded-xl 
            hover:bg-fuchsia-600 
            transition-all duration-300 
            transform hover:scale-105 
            flex items-center space-x-3
            text-lg font-semibold
            ${(remainingTeams.length === 0 || players.length === 0 || spinning)
              ? 'opacity-50 cursor-not-allowed'
              : ''}
          `}
        >
          <Trophy size={24} />
          <span>Spin Wheel</span>
        </button>
      </div>
      
      {winner && (
        <div className="
          mt-4 text-center 
          bg-emerald-100 dark:bg-emerald-900 
          p-4 rounded-xl
        ">
          <p className="
            text-2xl font-bold 
            text-emerald-700 dark:text-emerald-300
          ">
            {players[currentPlayerIndex - 1] || players[players.length - 1]}
            {' '}selected{' '}
            {winner}
          </p>
        </div>
      )}
    </div>
  );
};

export default TeamSelectorWheel;