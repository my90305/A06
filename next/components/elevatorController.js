import styles from './elevatorController.module.css'

export default function ElevatorController() {
    

    return(
        
        <div>
            
            
            
            <iframe title="影像遷入" id="Screen1" width="560" height="315" src="http://192.168.88.87/" name="iframe_a" frameborder="0"  allowfullscreen></iframe>
            <iframe title="影像入" id="Screen2" width="560" height="315" src="http://192.168.88.87:81/stream" name="iframe_b" frameborder="0"  allowfullscreen></iframe>
            <br/>
            <nav className={styles.nav}>
                <iframe title="控制器" id="Controller" width="0" height="0" src="http://192.168.0.115/RELAY=OFF"  frameborder="0"  allowfullscreen></iframe>
                <br/>
                <center>
                    <p>電梯控制器</p>
                    <button id="buttonON" onClick={ControllON} className={styles.button} >ON</button>
                    <button id="buttonOFF" onClick={ControllOFF} className={styles.disabled} >OFF</button>
                </center>
                
            </nav>
            
            

           
            
        </div>
    );
    
} 
const ControllOFF=()=> {
    document.getElementById("Controller").src="http://192.168.88.140/RELAY=OFF";

    if(document.getElementById("Controller").src=="http://192.168.88.140/RELAY=OFF"){
        document.getElementById("buttonOFF").className=styles.disabled;
        document.getElementById("buttonON").className=styles.button;
    }
    else{
        document.getElementById("buttonON").className=styles.disabled;
        document.getElementById("buttonOFF").className=styles.button;
    }

}
const ControllON=()=> {
    document.getElementById("Controller").src="http://192.168.88.140/RELAY=ON";

    if(document.getElementById("Controller").src=="http://192.168.88.140/RELAY=OFF"){
        document.getElementById("buttonOFF").className=styles.disabled;
        document.getElementById("buttonON").className=styles.button;
    }
    else{
        document.getElementById("buttonON").className=styles.disabled;
        document.getElementById("buttonOFF").className=styles.button;
    }

}