import { NavLink } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin } from "./AllSVG";
import styled from "styled-components";
import {DarkTheme} from "./Theme"

// import {motion} from 'framer-motion'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  cursor: pointer;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcon=(props)=>{
    return(
       <Icons>
          <div>
            <NavLink style={{color:"inherit"}} to="https://www.facebook.com/profile.php?id=100028392704726">
                <Facebook
                  width={25}
                  height={25}
                  target="_blank"
                  fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
                  
                />
            </NavLink>
          </div>

          <div>
            <NavLink style={{color:"inherit"}} to="https://github.com/vyomanaut1012">
               <Github
                width={25}
                height={25}
                target="_blank"
                fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}

               />
            </NavLink>
          </div>

          <div>
            <NavLink style={{color:"inherit"}} to="https://www.linkedin.com/in/akash-singh1012/">
               <Linkedin
                width={25}
                height={25}
                target="_blank"
                fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
               />
            </NavLink>
          </div>

          <div>
             <NavLink style={{color:"inherit"}} to="https://www.instagram.com/the_sky_2928/">
                 <Instagram
                  width={25}
                  height={25}
                  target="_blank"
                  fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
                 />
             </NavLink>
          </div>
           <Line color={props.theme}/>
       </Icons>
    )
}

export default SocialIcon;
