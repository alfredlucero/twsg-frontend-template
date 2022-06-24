import React from 'react';
import { Box } from '@twilio-paste/core/box';

interface LayoutProps {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      as="main"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
};
