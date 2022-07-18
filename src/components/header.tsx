import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
// @ts-ignore
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext';
import { Logo } from './Header/Logo';
import { NotificationsNav } from './Header/NotificationsNav';
import { Profile } from './Header/Profile';
import { SearchBox } from './Header/SearchBox';

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="show menu options"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
