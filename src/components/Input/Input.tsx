import React from 'react';
import { Input as ChakraInput, FormControl, FormLabel } from '@chakra-ui/react';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, ...props }) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        {...props} 
      />
    </FormControl>
  );
};

export default React.memo(Input);
