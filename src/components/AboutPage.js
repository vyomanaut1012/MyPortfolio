import styled, { keyframes, ThemeProvider } from "styled-components";

import LogoComponent from "../subComponent/LogoComponent";
import SocialIcon from "./SocialIcon";
import PowerButton from "../subComponent/PowerButton";
import ParticleComponent from "../subComponent/ParticleComponent";
import { DarkTheme } from "./Theme";
import astronaut from "../assets/Images/header-img.svg";
import BigTitle from "../subComponent/BigTitle";
import { useState, useEffect } from 'react';
// import {Vortex} from "react-loader-spinner";
import Tests from "./Tests";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
position: absolute;
top: 26%;
right: 13%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 150%;
    height: auto;
}
`


const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`



function Aboutpage() {
    
    const [loading, setloading]=useState(false);
    useEffect(()=>{
          setloading(true);
          setTimeout(()=>{
             setloading(false);
          },1500)
    },[])


    return (
        <>
         {loading ? 
          <Tests/>:
        <ThemeProvider theme={DarkTheme}>


            <Box>
                <LogoComponent theme='dark' />
                <SocialIcon theme='dark' />
                <PowerButton />
                <ParticleComponent />

                <Spaceman>
                    <img src={astronaut} alt="spacemen" />
                </Spaceman>

                <Main>
                    Hi!! I'm a B.Tech ECE student
                    <br /> <br />
                    I am a Competitive Programmer and also a FullStack Developer

                    <br /> <br />
                    I am also Robotics and Space Enthusiast  
                    <br /> <br />
                    Loves to expolore ways to upgrade my skills and learn something new
                    and looks forward to do my best to prove my worth
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />

            </Box>


        </ThemeProvider>
}
        </>

    )
}

export default Aboutpage;