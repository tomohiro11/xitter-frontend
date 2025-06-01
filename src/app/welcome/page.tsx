import Button from '@/ui/button';

export default function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to Xitter
        </h1>
        
        <div className="flex flex-col gap-4 items-center"> 
          <Button>
            Create Account
          </Button>
          <Button>
            Login
          </Button>
        </div>
      </div>
    </main>
  );
}
