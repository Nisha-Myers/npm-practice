const readline = require('readline-sync');

console.log("You wake up in a dark & dismal land. Creatures crawling across the ground & peppering the sky. You look to your left & find a sword, shield, & pack. You feel something in your pocket. It's a note that reads: 'In order to get back home, you must fight your way through this treaturous kingdom to the portal in the cave'");

var playerName = readline.question("Please, tell me your name... ");


const welcomeMessage = `Elated to meet you ${playerName}... Welcome to my RPG!!!`;
console.log(welcomeMessage);

const walkMessage = "Press 1 to walk";
console.log(walkMessage);

let playerHealth = 30;
let enemyHealth = 15;

let loot =[];
const awards = ['a gem', 'a potion', 'herbs', 'spell'];
const enemies = ['Wraith', 'Harpee', 'Griffin', 'Siren'];
const actions = ['walk', 'print', 'exit'];

let inventory = [];

function rpgInfo(){
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const enemyStrength = Math.floor(Math.random() * (10-1) + 1);
    const strength = Math.floor(Math.random() * (20-1) +1);

    const choices = readline.keyInSelect(actions, "What's your next move? Choose wisely...");

    if (actions[choices] == 'walk') {
      let index = Math.random();

        if (index <= 0.6) {
            console.log(`OH NO! You've run into an ${enemy}!!!`);
        
            while (enemyHealth > 0 && playerHealth > 0) {
                const player = readline.question("Will you fight or flee? If you choose to fight, & you win the battle you shall recieve an award!!! ENTER: 'r' to run OR 'a' attack");

                if (player == 'a') {
                    
                    enemyHealth = enemyHealth - strength;
                    console.log(`${playerName} delt ${strength} to the ${enemy}!!!`)
                    
                    playerHealth = playerHealth - enemyStrength;
                    console.log(`Enemy delt ${enemyStrength} damaged to ${playerName}!!!`);

                    if (enemyHealth <= 0) {
                        let item = Math.random();
                        let inventory = awards[Math.floor(Math.random() * awards.length)];

                        if (item) {
                            loot.push(inventory);
                            playerHealth += 6
                            console.log(`Great job ${playerName}!!! You have slain the ${enemy}, recieved ${loot}, & gained a little health too!`);
                        }
                    console.log("Press 2 to check out your loot pack...");
                    rpgInfo();
                    
                    } else if (playerHealth <= 0) {
                        console.log(`${playerName} has met their demise!!!`);
                    }
                } else if (player == 'r') {
                    const runAway = Math.random();

                    if (runAway < 0.6) {
                        console.log(`${enemy} attacked you & delt ${enemyStrength}!!!`);
                    } else {
                        console.log(`${playerName} managed to successfully escape!!!`);
                        rpgInfo();
                    }
                }
            }
        } else {
            console.log(`${playerName} is walking...`);
            rpgInfo();
            }   
                } else if (actions[choices] == 'print') {

                    if (loot.length == 0) {
                        console.log("Your inventory is void of items...");
                    } else {
                        console.log(`${playerName} WINS!!! You wound up with ${playerHealth} health points & have ${loot} in your pack. You made it to the portal back home!!!`);
                        return playerHealth = 0;
                    }
                } else if (actions[choices] == 'exit'){
                    console.log("GAME OVER");
                    return playerHealth = 0;
                }
            }
        while (playerHealth > 0) {
            rpgInfo();
    }
      
