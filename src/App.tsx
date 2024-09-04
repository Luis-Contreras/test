import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from './components/Button/Button';
import { Box } from '@chakra-ui/react';


const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));

const App: React.FC = () => {
  return (
    <Router>
      <Box p={5}>
        <nav>
          <Button as={Link} to="/" label="Home" mr={3} />
          <Button as={Link} label='About' to="/about" />
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Box>
    </Router>
  );
};

export default App;
