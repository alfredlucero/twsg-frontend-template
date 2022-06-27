import React from 'react';
import { Example } from '../../../store/rtkQuery/endpoints/examplesApi';
import { Table, THead, Tr, Th, TBody, Td } from '@twilio-paste/core/table';

export interface ExampleTableProps {
  examples: Example[];
}

export const ExampleTable = ({ examples }: ExampleTableProps) => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>ID</Th>
          <Th>Message</Th>
        </Tr>
      </THead>
      <TBody>
        {examples.map((example, key) => (
          <Tr key={key}>
            <Td>{example.id}</Td>
            <Td>{example.message}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};
