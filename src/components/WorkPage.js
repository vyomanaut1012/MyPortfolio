import styled ,{ThemeProvider} from "styled-components";
import { useEffect, useRef } from "react";

import LogoComponent from "../subComponent/LogoComponent";
import SocialIcon from "./SocialIcon";
import PowerButton from "../subComponent/PowerButton";
import Card from "../subComponent/Card";
import { motion } from "framer-motion";
import { DarkTheme } from "./Theme";
import { Work} from "../data/WorkData";
import BigTitle from "../subComponent/BigTitle";
// import {Vortex} from "react-loader-spinner";
// import Tests from "./Tests";
import { YinYang } from "./AllSVG";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;


const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
  
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };


function WorkPage(){
 
    const ref = useRef('');
    const yinyang = useRef('');

    useEffect(() => {
        let element = ref.current;
    
        const rotate = () => {
          element.style.transform = `translateX(${-window.scrollY}px)`;
    
        return (yinyang.current.style.transform =
            "rotate(" + -window.scrollY + "deg)");
        };
    
        window.addEventListener("scroll", rotate);
        return () => {
          window.removeEventListener("scroll", rotate);
        };
      }, []);   


      // const [loading, setloading]=useState(false);
      // useEffect(()=>{
      //       setloading(true);
      //       setTimeout(()=>{
      //          setloading(false);
      //       },1500)
      // },[])
     
    return(
      <ThemeProvider theme={DarkTheme}>
      {/* {loading ? 
       <Tests/> : */}
   
        <Box>
            <LogoComponent theme="dark"/>
            <SocialIcon theme="dark"/>
            <PowerButton/>

            <Main ref={ref} variants={container} initial="hidden" animate="show">
                   {Work.map((d) => (
                   <Card key={d.id} data={d} />
                   ))}
            </Main>


            <Rotate ref={yinyang}> 
                  <YinYang width={80} height={80} fill={DarkTheme.text} />
            </Rotate>

            <BigTitle text="WORK" top="10%" right="20%" />

        </Box>
    
{/* }  */}
</ThemeProvider>
    );
};

export default WorkPage;


