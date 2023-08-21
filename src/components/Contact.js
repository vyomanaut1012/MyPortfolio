import Navigation from "../components/Navigation/Navigation"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactHeader from "../components/ContactHeader/ContactHeader"
import SocialIcon from "../components/SocialIcon";
import PowerButton from "../subComponent/PowerButton";
import { useState,useEffect } from "react";
// import LogoComponent from "../subComponent/LogoComponent";
import "../App.css"
import Tests from "./Tests";
const Contact = () => {
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
          <Tests/> :
    <>
      <PowerButton />
      <SocialIcon />
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main> 
      
      </>

}
</>
  );
}

export default Contact;