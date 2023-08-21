import styled from "styled-components";
import { useEffect, useState } from "react";

import SocialIcon from "../components/SocialIcon";
import PowerButton from "../subComponent/PowerButton";
import LogoComponent from "../subComponent/LogoComponent";

import { motion } from "framer-motion";

import img from "../assets/Images/banner-bg.png";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponent/Anchor";
import Tests from "./Tests";
const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.1)`};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`


const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`



const BlogPage=()=>{

  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
      let num = (window.innerHeight - 70)/30;
      setNumbers(parseInt(num));
  }, [])

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
          <Tests/> :
         <MainContainer>
            <Container>
                
              <LogoComponent />
              <PowerButton/>
              <SocialIcon/>
              <AnchorComponent  number={numbers}/>
              <Center>
                <Grid>
                     {
                       Blogs.map(blog=>{
                            return <BlogComponent key={blog.id} blog={blog}/>
                       })
                     }
                </Grid>
              </Center>

            </Container>

         </MainContainer>
}
         </>
    );
}

export default BlogPage;