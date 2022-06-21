import styles from './camera.module.css'

const buttonTransform=(btn)=> {
    document.getElementById("Youtube").className=styles.button;
    document.getElementById("32Cam").className=styles.button;
    //document.getElementById("Youtube").onClick=ChangeArduinoYoutube;
    //document.getElementById("32Cam").onClick=ChangeCameraScreen;
    switch(btn){
        case "Youtube":
            document.getElementById("Youtube").className=styles.disabled;
            //document.getElementById("Youtube").onClick=Nothing;
            break;
        case "32Cam":
            document.getElementById("32Cam").className=styles.disabled;
            //document.getElementById("32Cam").onClick=Nothing;
            break;
    }
}

const ChangeArduinoYoutube=()=> {
    document.getElementById("Screen1").src="https://www.youtube.com/embed/N4r9tQGmAaY";
    document.getElementById("Screen2").src="https://www.youtube.com/embed/aDKadRU3T80";
    buttonTransform("Youtube");
}

const ChangeCameraScreen=()=> {
    document.getElementById("Screen1").src="http://192.168.88.87/";
    document.getElementById("Screen2").src="http://192.168.88.87:81/stream";
    //document.getElementById("Screen1").src="https://www.youtube.com/embed/N4r9tQGmAaY";
    //document.getElementById("Screen2").src="https://www.youtube.com/embed/aDKadRU3T80";
    buttonTransform("32Cam");
}

const Nothing=()=> {

}




export default function Camera() {
    

    return(
        <div>
            
            
            <iframe title="影像遷入" id="Screen1" width="560" height="315" src="http://192.168.88.87/" name="iframe_a" frameborder="0"  allowfullscreen></iframe>
            <iframe title="影像入" id="Screen2" width="560" height="315" src="http://192.168.88.87:81/stream" name="iframe_b" frameborder="0"  allowfullscreen></iframe>
            <br/>
            <button onClick={ChangeArduinoYoutube} className={styles.button} id="Youtube">機關試做</button>
            <button onClick={ChangeCameraScreen} className={styles.disabled} id="32Cam">畫面串流</button>
            
        </div>
    );
} 

