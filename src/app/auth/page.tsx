import AuthCard from "@/components/auth/AuthCard";
import Form from "@/components/auth/Form";

const Auth: React.FC = () => {
    return (
        <main className="h-screen w-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-8">
            <div className="w-full max-w-5xl animate-fade-in">
                <div className="gap-2 rounded-2xl flex flex-row overflow-hidden">
                    <div className="w-1/2 h-full lg:flex hidden">
                        <AuthCard />
                    </div>
                    <div className="lg:w-1/2 w-full h-full">
                        <Form />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Auth;