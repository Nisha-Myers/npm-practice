const readlineSync = require('readline-sync');

let isAlive = true; 
let foundKey = false; 

const playerName = readlineSync.question("What is your name?: "); 

const welcomeMessage = `Pleased to meet you ${playerName}... Welcome to my Escape Room of possible self-inflicted doom!`;
console.log(welcomeMessage);


while (isAlive) {
    actions = readlineSync.keyInSelect(["Peer into the hole", "Look around for the key", "Try to open the door"], `What will you choose to do ${playerName}?`);
    
    switch (actions) {
        
        case -1: //playerName pressed 0
            console.log(`Thank you for playing my game ${playerName}!!!`);
            isAlive = false; 
        break;
        
        case 0: //playerName pressed 1
            console.log(`Oh NO ${playerName}! You were so tempted to see if the key were in the hole in the plaster wall & something reached out, grabbed you & pulled you into the dark abyss!!!`);
            isAlive = false;
            console.log(`Sorry ${playerName}, you are now deceased...`);
        break;
        
        case 1: //playerName pressed 2
            if(!foundKey) {
                console.log(`Great work ${playerName}! You looked around the room & found the key under a blood stained piece of carpet in the corner.`);
                foundKey = true;
            } else {
                //playerName already found the key 
                console.log(`Come on ${playerName}... You've already found the key... Head towards the door!!!`);
            }
        break;
        
        case 2: //playerName pressed 3
            if(foundKey) {
                console.log(`CONGRATULATIONS ${playerName}!!! You have resisted temptation by staying away from the mysterious hole in the wall, found the key under the stained carpet, & escaped the damp room!`);
                isAlive = false;
            } else {
                console.log(`Sorry ${playerName}... You tried opening the door, but you can't unlock the padlock without the key...`);
            }
        break;
        
        default:
            console.log("Invalid Choice! Try again!");
    }
    
}
