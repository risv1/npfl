import React from "react";
import { ChevronsRight } from "lucide-react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
            {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
                <>
                    {children}
                    <ChevronsRight className="transition-all duration-300 group-hover:translate-x-1" />
                </>
            )}
        </button>
    );
};

export default Button;