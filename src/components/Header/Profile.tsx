import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Bezerra</Text>
          <Text color="gray.300" fontSize="small">
            matheusbwzerra002@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Bezerra"
        src="https://github.com/Matheus-Bezerra.png"
      />
    </Flex>
  );
};
