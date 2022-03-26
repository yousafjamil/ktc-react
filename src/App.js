
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
// import AmazonCourses from './components/AmazonCourses';
import Contact from './components/Contact';
import CoursesHeader from './components/CoursesHeader';
import EngineerDetail from './components/EngineerDetail';
import EnginrCourses from './components/EnginrCourses';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SafetyCourseDeatil from './components/SafetyCourseDeatil';
import SafetyCourses from './components/SafetyCourses';
import SkillDetail from './components/SkillDetail';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
     <Navbar  />
      <Routes>
        <Route path='/'  exact element={ <Home  />} />
        <Route path='/about'  exact element={<About  />} />
        <Route path='/contact'  exact element={ <Contact  />} />
        <Route path='/majercourses'  exact element={ <CoursesHeader  /> } />
        <Route path='/coursesdetil/:id'  exact element={<SafetyCourseDeatil  /> } />
        <Route path='/engineerDetail/:id'  exact element={    <EngineerDetail  />} />
        <Route path='/skill'  exact element={  <Skills  />  } />
        <Route path='/engineerCourses'  exact element={    <EnginrCourses  /> } />
        <Route path='/safetycourses'  exact element={   <SafetyCourses  /> } />
        <Route path='/skillDetail/:id'  exact element={<SkillDetail  />  } />
      </Routes>

     <Footer  />

    </div>
  );
}

export default App;
