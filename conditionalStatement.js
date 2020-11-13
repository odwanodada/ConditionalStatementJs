//If else statement
/*let speed = parseInt(prompt("Enter your Speed"));

if(speed >= 120){
      document.write("too fast");
    
}
else if(speed >= 80){
      document.write("fast");
}
else{
     document.write("Ok");
}
*/

let myspeed = parseInt(prompt("Enter your speed"));

switch(true){
    case(myspeed>0 && myspeed<80):
        result = 'Speed is Ok';
        break;
     
    case (myspeed>=80 && myspeed <= 120):
        result = 'Fast';
        break;
        
    default:
        result = 'Very fast';  
        
}

document.write(result);
