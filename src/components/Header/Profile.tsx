import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

type ProfileProps = {
  showName?: boolean;
};

// Só mostra o nome e e-mail se showName = true

export function Profile({ showName = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showName && (
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
        src="http://github.com/Matheus-Bezerra.png"
      />
    </Flex>
  );
}

// Flex é um container com display Flex
// Stack é um container que permite espaçamento igual entre os componentes
// HStack é um Stack com display inline-block
// Box é uma div vazia
// Avatar tem a vantagem de mostrar as iniciais, caso não tenha imagem
