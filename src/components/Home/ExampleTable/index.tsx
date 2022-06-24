import React from 'react';

interface Example {
  id: number;
  message: string;
}

interface ExampleTableProps {
  examples: Example[];
}

export const ExampleTable = ({ examples }: ExampleTableProps) => {
  return <div>hellos</div>;
};
