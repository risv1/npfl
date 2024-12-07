"use client";

import React from 'react';
import { Mail, Lock } from 'lucide-react';
import Input from '../misc/Input';
import Button from '../misc/Button';
import { z } from 'zod';
import toast from 'react-hot-toast';

const Form: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [formDetails, setFormDetails] = React.useState({
        email: '',
        password: '',
    });

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            formSchema.parse({
                email: formDetails.email,
                password: formDetails.password,
            });

            const res = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formDetails.email,
                    password: formDetails.password,
                }),
            })

            if (res.ok) {
                toast('Login successful', { icon: '🎉', style: { backgroundColor: '#34D399', color: '#fff' } });
            } else {
                toast('Login failed', { icon: '❌', style: { backgroundColor: '#F87171', color: '#fff' } });
                console.error(await res.json());
                setLoading(false);
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
            toast('Login failed', { icon: '❌', style: { backgroundColor: '#F87171', color: '#fff' } });
            console.error(_error);
            setLoading(false);
        }

    };

    return (
        <div className="w-full h-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-2 text-neutral-900 dark:text-white">
                Welcome Back
            </h2>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
                Sign in to continue to NPFL
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    icon={<Mail size={20} />}
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
                    value={formDetails.email}
                />
                <Input
                    icon={<Lock size={20} />}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
                    value={formDetails.password}
                />
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-neutral-300 text-fuchsia-500 focus:ring-fuchsia-500"
                        />
                        <span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">
                            Remember me
                        </span>
                    </label>
                    <a
                        href="#"
                        className="text-sm text-fuchsia-500 hover:text-fuchsia-600 transition-colors duration-300"
                    >
                        Forgot password?
                    </a>
                </div>

                <Button loading={loading}>
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export default Form;