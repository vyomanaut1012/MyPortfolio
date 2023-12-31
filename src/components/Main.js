// import react from 'react'
import styled,{keyframes} from 'styled-components'
import PowerButton from "../subComponent/PowerButton"
import LogoComponent from '../subComponent/LogoComponent'
import SocialIcon from "../components/SocialIcon"
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSVG'
import { useState, useEffect} from 'react'
import Intro from './Intro'
import Tests from './Tests'


// import {Ripple} from 'react-preloaders';




const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
    padding: 2rem;
`


const Contact=styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index:1;
` 

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -200%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`


const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`



const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;


&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}


&>:last-child{
  display: ${props => props.click ? 'none' :'inline-block'  };
  padding-top: 1rem;
}

`


const DarkDiv=styled.div`
   position:absolute;
   top:0;
   bottom:0;
   background-color:#000;
   right:50%;
   width:${props=>props.click? '50%': '0%'};
   height:${props=>props.click? '100%' : '0%'};
   z-index:1;
   transition: height 0.5s ease, width 1s ease 0.5s;

`







function Main(){

  const [click,setClick]=useState(false);
  const clickHandler=()=>{setClick(!click)}
 
  const [loading, setloading]=useState(false);
  useEffect(()=>{
        setloading(true);
        setTimeout(()=>{
           setloading(false);
        },1500)
  },[])
 
 
    return(
        <div>
          {loading ? 
       <Tests/>:
        <MainContainer>
        
          <DarkDiv click={click}/>

          <Container>

          
          <Center click={click}>
         
             <YinYang 
               width={click? 120:200}
               height={click? 120:200}
               fill='currentColor'
               onClick={clickHandler}
             />
    
             <span>Click Here</span>
           </Center>


           <PowerButton/>
           <LogoComponent theme={click? 'dark':'light'}/>

           <SocialIcon theme={click? 'dark':'light'}/>

         
          

           
           <Contact  to={"/contact"}>
              <h2>
                Say hi...
              </h2>
           </Contact>
          
          


               
           <BLOG to= "/blog" >
              <h2>
                Blog
              </h2>
           </BLOG>
        

           <WORK to="/work" click={click}>
              <h2>
                Work
              </h2>        
           </WORK>
           

           <BottomBar>
               
               <ABOUT to="/about" click={click}>
                  <h2>
                    About
                  </h2>
               </ABOUT>

               <SKILLS to="/skill">
                  <h2>
                    Skills
                  </h2>
               </SKILLS>
               
               
           </BottomBar>
          </Container>

           {click ? <Intro click={click}/>:null}
        </MainContainer>
}
        </div>
  
   );
}
 export default Main; 