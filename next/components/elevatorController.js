

export default function ElevatorController() {
    

    return(
        <div>
            
            
            <iframe title="控制器" id="Controller" width="0" height="0" src="http://192.168.0.115/RELAY=OFF"  frameborder="0"  allowfullscreen></iframe>
            <br/>
            <iframe title="影像遷入" id="Screen1" width="560" height="315" src="http://192.168.88.87/" name="iframe_a" frameborder="0"  allowfullscreen></iframe>
            <iframe title="影像入" id="Screen2" width="560" height="315" src="http://192.168.88.87:81/stream" name="iframe_b" frameborder="0"  allowfullscreen></iframe>
            <p id="demo">開關狀態: OFF</p>
            <br/>
            <button onClick={ControllON}>ON</button>
            <button onClick={ControllOFF}>OFF</button>
            

           
            
        </div>
    );
} 
const ControllOFF=()=> {
    document.getElementById("Controller").src="http://192.168.88.140/RELAY=OFF";
    document.getElementById("demo").innerHTML="開關狀態: OFF";
}
const ControllON=()=> {
    document.getElementById("Controller").src="http://192.168.88.140/RELAY=ON";
    document.getElementById("demo").innerHTML="開關狀態: ON";
}