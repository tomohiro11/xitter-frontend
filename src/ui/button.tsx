import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className="group rounded-lg border-2 border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-48 text-center"
      {...props}
    >
      {children}
    </button>
  );
}
