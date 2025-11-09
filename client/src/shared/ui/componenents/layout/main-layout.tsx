import { Box, Flex } from '@chakra-ui/react';
import { appColors } from '@shared/ui';
import type { ReactNode } from 'react';
import { Header } from './header';

type Props = {
  children: ReactNode;
};
export const MainLayout = ({ children }: Props) => {
  return (
    <Flex direction="column" minH="100vh" bg={appColors.background.primary}>
      <Header />
      <Box as="main" flex="1" p={4} overflowY="auto">
        {children}
      </Box>
    </Flex>
  );
};
