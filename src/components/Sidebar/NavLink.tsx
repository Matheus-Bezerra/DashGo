import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkprops,
} from '@chakra-ui/react';
import React, { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkprops {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href}>
      <ChakraLink display="flex" alignItems={'center'} {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
