import { Box, Heading } from '@chakra-ui/react';
import Input from '../components/Input/Input';
import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Box p={5}>
      <Heading>Home Page</Heading>
      <p>Welcome to the Home Page!</p>
      <Input 
        label="Name" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter your name" 
      />
      <p>Your name is: {name}</p>
    </Box>
  );
};

export default Home;