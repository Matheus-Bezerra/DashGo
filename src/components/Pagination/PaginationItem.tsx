import { Button } from '@chakra-ui/react';
import React from 'react';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export const PaginationItem = ({
  isCurrent = false,
  number,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
        _hover={{ bg: 'pink.500' }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
    >
      {number}
    </Button>
  );
};
