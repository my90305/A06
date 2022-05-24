import React from 'react';


const ChangeCameraScreen1=()=> {
    document.getElementById("Screen").src="https://www.youtube.com/embed/0qbvAt2di2M";
}

const ChangeCameraScreen2=()=> {
    document.getElementById("Screen").src="https://www.youtube.com/embed/aDKadRU3T80";
}




function Camera() {
    

    return(
        <div>
            
            
            <iframe title="影像遷入" id="Screen" width="560" height="315" src="https://www.pccu.edu.tw/" name="iframe_a" frameborder="0"  allowfullscreen></iframe>
            <br/>
            <button onClick={ChangeCameraScreen1}>StarFire</button>
            <button onClick={ChangeCameraScreen2}>機關試做</button>
            
        </div>
    );
} 

export default Camera;