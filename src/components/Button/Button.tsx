import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ label, onClick, colorScheme = 'blue', ...props }) => {
    console.log('Button')
  return (
    <ChakraButton colorScheme={colorScheme} onClick={onClick} {...props}>
      {label}
    </ChakraButton>
  );
};

export default Button;