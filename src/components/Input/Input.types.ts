import { InputProps as ChakraInputProps } from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}