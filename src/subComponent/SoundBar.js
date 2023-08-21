import {useState, useRef } from "react";
import styled, {keyframes}from "styled-components";
// import { DarkTheme } from "../components/Theme";

import music from "../assets/audio/u-said-it-v13-1167.mp3"
const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:6rem;
top:6rem;
z-index:10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`
const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`

const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem
`
const Music=styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:3rem;
top:8rem;
z-index:10;


`

const Tag=styled.h3`
color:white;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
-webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: black;
`
const SoundBar=(props)=>{

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const clickHandler=()=>{
        setClick(!click);
    
        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

    return(
        <div>
        <Box onClick={clickHandler}>

            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/><br></br>
            
          
            <audio src={music} ref={ref}  loop />
            
        </Box>

        <Music onClick={clickHandler} >
             <Tag click={click} color={props.theme}>Enjoy with Music</Tag>
             <audio src={music} ref={ref}  loop />
        </Music>
    </div>
    );
}

export default SoundBar;