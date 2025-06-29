import { useState, useEffect } from 'react';
import './App.css';
// import ProjectCard from './components/projectCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './pages/signup/signup';
import LoginForm from './pages/login/login';
import Home from './pages/home/home';

function App() {
  const [count, setCount] = useState(0);

const data = {
  title: 'Weeding Contribution',
  description: 'Nonso and Joyful - NoJoy2025',
  targetAmount: '500',
  currentAmount: '150'
}

useEffect(() => {
  fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(data => console.log(data));
}, []);


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProjectCard project={data} />} /> */}
        <Route path='/home' element={<Home/>}/>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App






// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/project/:id" element={<ProjectDetail />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
