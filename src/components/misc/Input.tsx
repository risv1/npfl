import React from 'react';

type InputProps = {
    icon: React.ReactNode;
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input: React.FC<InputProps> = ({ icon, placeholder, type, value, onChange, error }) => {
    return (
        <div className="w-full">
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                    {icon}
                </div>
                <input
                    type={type}
                    className="w-full dark:text-white text-black bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-12 py-3 rounded-lg focus:outline-none focus:border-fuchsia-500 dark:focus:border-fuchsia-500 transition-all duration-300"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
