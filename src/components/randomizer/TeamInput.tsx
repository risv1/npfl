"use client";

import React from 'react';
import {
    PlusCircle,
    Users,
} from 'lucide-react';

type TeamInputProps = {
    value: string;
    onChange: (value: string) => void;
    onAdd: () => void;
};

const TeamInput: React.FC<TeamInputProps> = ({ value, onChange, onAdd }) => (
    <div className="flex space-x-2 w-full">
        <div className="relative flex-grow">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter Team Name"
                className="
          w-full p-3 pl-10 
          bg-neutral-100 dark:bg-neutral-800 
          text-neutral-900 dark:text-neutral-100
          border border-neutral-300 dark:border-neutral-700
          rounded-lg 
          focus:ring-2 focus:ring-fuchsia-500
          transition-all duration-300
        "
            />
            <Users
                className="absolute left-3 top-1/2 -translate-y-1/2 
        text-neutral-500 dark:text-neutral-400"
                size={20}
            />
        </div>
        <button
            onClick={onAdd}
            className="
        bg-fuchsia-500 text-white p-3 rounded-lg 
        hover:bg-fuchsia-600 
        transition-all duration-300 
        transform hover:scale-105 
        flex items-center
      "
        >
            <PlusCircle size={24} />
        </button>
    </div>
);

export default TeamInput;