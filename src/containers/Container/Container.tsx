import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container flex flex-col mx-auto gap-9 px-4 sm:px-6 lg:px-8 max-w-full md:max-w-3xl lg:max-w-5xl">
      {children}
    </div>
  );
};

