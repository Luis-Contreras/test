import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export interface ButtonProps extends ChakraButtonProps {
  label: string;
  onClick?: () => void;
  to?: string
}