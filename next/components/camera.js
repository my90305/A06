

const ChangeArduinoYoutube=()=> {
    document.getElementById("Screen1").src="https://www.youtube.com/embed/N4r9tQGmAaY";
    document.getElementById("Screen2").src="https://www.youtube.com/embed/aDKadRU3T80";
}

const ChangeCameraScreen=()=> {
    document.getElementById("Screen1").src="http://192.168.31.57";
    document.getElementById("Screen2").src="http://192.168.31.57:81/stream";
}




export default function Camera() {
    

    return(
        <div>
            
            
            <iframe title="影像遷入" id="Screen1" width="560" height="315" src="http://192.168.31.57" name="iframe_a" frameborder="0"  allowfullscreen></iframe>
            <iframe title="影像入" id="Screen2" width="560" height="315" src="http://192.168.31.57:81/stream" name="iframe_b" frameborder="0"  allowfullscreen></iframe>
            <br/>
            <button onClick={ChangeArduinoYoutube}>機關試做</button>
            <button onClick={ChangeCameraScreen}>畫面串流</button>
            
        </div>
    );
} 

