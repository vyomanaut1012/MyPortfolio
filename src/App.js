import GlobalStyle from "./globalStyle"
import {ThemeProvider} from "styled-components"
import {lightTheme} from "./components/Theme.js"
import {Routes , Route} from 'react-router-dom';
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import MySkill from "./components/MySkill";
import WorkPage from "./components/WorkPage"
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponent/SoundBar"
import { useState, useEffect } from 'react'
import Tests from './components/Tests'
import Contact from "./components/Contact";

function App() {
  const [click,setClick]=useState(false);
  const clickHandler=()=>{setClick(!click)}


  const [loading, setloading]=useState(false);
  useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
           setloading(false);
        },1000)
  },[])
 
  return ( 
<>
    <GlobalStyle/>
    {loading ? 
       <Tests/>:
     <ThemeProvider theme={lightTheme}>
          <SoundBar onclick={clickHandler} theme={click? 'dark':'light'}/>
          <AnimatePresence mode='wait'>
          <Routes>
             <Route  path="/" element={<Main/>}/>
          
             <Route  path="/about" element={<AboutPage/>}/>
             <Route  path="/blog" element={<BlogPage/>}/>
             <Route  path="/skill" element={<MySkill/>}/>
             <Route  path="/work" element={<WorkPage/>}/>
             <Route  path="/test" element={<Tests/>}/>
             <Route  path="/contact" element={<Contact/>}/>

             <Route path="*" element={<Main />} />             
          </Routes>

          </AnimatePresence>
     </ThemeProvider>
}
     </>
  )
}

export default App

