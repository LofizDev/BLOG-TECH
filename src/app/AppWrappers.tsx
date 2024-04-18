'use client';
import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/MiniCalendar.css';

import React, { ReactNode } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme/theme';

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>{' '}
    </CacheProvider>
  );
}
