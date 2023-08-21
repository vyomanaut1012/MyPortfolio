import styled, {ThemeProvider } from 'styled-components';

import LogoComponent from "../subComponent/LogoComponent";
import PowerButton from "../subComponent/PowerButton";
import SocialIcon from "../components/SocialIcon";
import ParticleComponent from '../subComponent/ParticleComponent';
import BigTitle from '../subComponent/BigTitle';

import { DarkTheme } from './Theme';
import { Design, Develope} from './AllSVG';
// import SoundBar from "../subComponent/SoundBar"
import { useState,useEffect } from 'react';
// import {Vortex} from "react-loader-spinner";
import Tests from './Tests';
const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`


const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`


const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

function MySkill(){
    const [loading, setloading]=useState(false);
    useEffect(()=>{
          setloading(true);
          setTimeout(()=>{
             setloading(false);
          },1500)
    },[])
   
    return(
        <>
        {loading ? 
           <Tests/>:
       <ThemeProvider theme={DarkTheme}>
       <Box>
            <LogoComponent/>
            <PowerButton/>
            <SocialIcon/>
            <ParticleComponent theme="light"/>


         <Main>
            <Title>
                     <Design  width={40} height={40}> FullStack Developer</Design>
            </Title>

            <Description>
                    I am FullStack Developer and Conmpetitive Programmer
            </Description>

            <Description>
                    <strong>I like to Design</strong>
                    <ul>
                        <li>Websites</li>
                        <li>Backend</li>
                        <li>Frontend</li>
                    </ul>
            </Description>

            <Description>
                     <strong>Tools</strong>
                     <ul>
                        <li>Git GitHub</li>
                        <li>Vs Code</li>
                     </ul>
            </Description>
        </Main>




          <Main>
                <Title>
                    <Develope  width={40} height={40}>Backend Developer </Develope>
                </Title>
                
                <Description>
                    I love to do a backend Devlopment and love to play with database and api.
                </Description>

                <Description>
                    <strong>Skills</strong>
                    <p> HTML 5, CSS, JaavScript, Node.js, React.js, Express.js, MongoDB, Mongoose</p>
                </Description>

                <Description>
                    <strong>Tools</strong>
                    <p>
                    VScode, Github, Codepen etc.
                    </p>
                </Description>

          </Main>
               
                <BigTitle text="SKILLS" top="80%" right="30%" />
       </Box>

       </ThemeProvider>
      
        }
        </>
    )

}

export default MySkill;