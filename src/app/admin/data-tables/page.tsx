'use client';
import React from 'react';

import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';

export default function DataTables() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >

      </SimpleGrid>
    </Box>
  );
}
