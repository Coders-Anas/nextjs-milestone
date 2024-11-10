import React, { ReactNode } from 'react';

interface ContentWrapperProps {
  children: ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <section className="p-4 md:px-16 lg:px-[380px]">{children}</section>
  );
}
