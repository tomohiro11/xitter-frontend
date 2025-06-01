import Button from '@/ui/button';

export default function CreateAccount() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-96 font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Create Account
        </h1>
        
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-medium text-[rgb(237,237,237)]">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-[rgb(237,237,237)]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-[rgb(237,237,237)]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-[rgb(237,237,237)]">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="mt-8 border-2 border-gray-300 rounded-full p-2">
            <Button type="submit" className="w-full text-[rgb(237,237,237)] hover:text-[rgb(255,255,255)] h-10 rounded-full font-medium">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
