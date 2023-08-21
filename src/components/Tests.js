import {Vortex} from "react-loader-spinner";
import styled from "styled-components";
const Preloader= styled.div`
     display: grid;
     justify-content: center;
     align-items: center;
     height: 650px;
     background:black;
`
function Tests(){
    return(
        <Preloader>
        <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'white', 'blue', 'yellow', 'orange', 'purple']}
      />
      </Preloader>
    )
}

export default Tests;