import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto px-5 sm:px-[30px] max-w-[1180px] ${className}`}>
      {children}
    </div>
  );
}
