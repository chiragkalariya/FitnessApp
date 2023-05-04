import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Box>
    </>
  );
}

export default App;
