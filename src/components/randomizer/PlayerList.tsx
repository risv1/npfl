import React from 'react';
import { Trophy } from 'lucide-react';

type PlayerListProps = {
    players: string[];
    teamAssignments: { [key: string]: string };
    currentPlayerIndex: number;
};

const PlayerList: React.FC<PlayerListProps> = ({ players, teamAssignments, currentPlayerIndex }) => (
    <div className="space-y-2">
      {players.map((player, index) => (
        <div 
          key={player} 
          className={`
            flex items-center justify-between p-3 rounded-lg 
            transition-all duration-300
            ${index === currentPlayerIndex 
              ? 'bg-fuchsia-100 dark:bg-fuchsia-900 border-fuchsia-300' 
              : 'bg-neutral-100 dark:bg-neutral-800'}
            border
          `}
        >
          <div className="flex items-center space-x-3">
            <span className="font-medium text-neutral-900 dark:text-neutral-100">
              {player}
            </span>
            {teamAssignments[player] && (
              <span className="
                text-sm text-emerald-600 dark:text-emerald-400 
                flex items-center bg-emerald-100 dark:bg-emerald-900 
                px-2 py-1 rounded-full
              ">
                <Trophy size={16} className="mr-1" />
                {teamAssignments[player]}
              </span>
            )}
          </div>
          {index === currentPlayerIndex && (
            <span className="
              text-xs font-semibold 
              text-fuchsia-600 dark:text-fuchsia-400 
              bg-fuchsia-100 dark:bg-fuchsia-900 
              px-2 py-1 rounded-full
            ">
              Your Turn
            </span>
          )}
        </div>
      ))}
    </div>
  );

export default PlayerList;