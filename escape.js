const readline = require('readline-sync');

var playerName = readline.question("Please, tell me your name... ");


const welcomeMessage = `Pleased to meet you ${playerName}... Welcome to my Escape Room of possible self-inflicted doom!`;
console.log(welcomeMessage);


let isAlive = true;
let hasKey = false;


var menuChoice = readline.keyIn(' PRESS 1 to: Peer into the hole, PRESS 2 to: Look around for the key, or, PRESS 3 to: Try to open the door', { limit: '$<1-3>' });
    

while (isAlive == true) {
    
    let menuChoice = 3 && hasKey == true; {
    
     switch (menuChoice) {
        
        case 1: //reach into hole
            console.log(`Oh NO ${playerName}! You were so tempted to see if the key were in the hole in the plaster wall & something reached out, grabbed you & pulled you into the dark abyss!!!`)
            isAlive = false;
            break;
        
        case 2: //look for the key
            if (hasKey == false) {
                console.log(`Great work ${playerName}! You looked around the room & found the key under a blood stained piece of carpet in the corner.`);
                hasKey = true;
            }
            else (hasKey == true){//you already have the key ALERT
                console.log(`Come on ${playerName}... You've already found the key... Head towards the door!!!`);
                break;
            }
            
        case 3: //try opening the door
            if (hasKey == false) {
                console.log(`Sorry ${playerName}... You tried opening the door, but you can't unlock the padlock without the key...`)
            
            } else (hasKey == true){ //congratulatory message for winning
                console.log(`CONGRATULATIONS ${playerName}!!! You have resisted temptation by staying away from the mysterious hole in the wall, found the key under the stained carpet, & escaped the damp room!`);
                isAlive = false;
            }
            break;
        
        default:
            console.log(`What's your next move ${playerName}?`)
    }
}
return menuChoice
}