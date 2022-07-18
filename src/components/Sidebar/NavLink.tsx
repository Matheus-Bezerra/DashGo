import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkprops,
} from '@chakra-ui/react';
import React, { ElementType } from 'react';
import { RiDashboardLine } from 'react-icons/ri';

interface NavLinkProps extends ChakraLinkprops {
  icon: ElementType;
  children: string;
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" alignItems={'center'} {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};
