//Game Objects

const player = {
    name: "Hero",
    health: 100,
    attackPower: 20,
    stamina: 50,
    defense: 20,
};

const monster = {
    name: "Goblin",
    health: 50,
    attackPower: 10,
    stamina: 10,
    defense: 10,
};

//Attack handler function
function attack(attacker, defender) {
    const damage = Math.floor(Math.random() * attacker.attackPower);
    console.log(`attack handler ran: generated damage value: ${damage} points`);
    defender.health -= damage;
    console.log(`Attack chosen, no damage reduction applied to defender. `);
    return `${attacker.name} attacks ${defender.name} for ${damage} damage!`
};

//Defend handler function
function defend(defender, attacker) {
    const damage = Math.floor(Math.random() * attacker.attackPower);
    const damageReduction = Math.floor(Math.random() * defender.defense);
    console.log("defend handler ran, generated defenseReduction value "+damageReduction);
    defender.health -= damage - damageReduction;
    console.log(`Attacker damage: ${damage}\nDefender reduction applied: ${damageReduction}\nTotal damage applied: ${damage-damageReduction}`)
    return `${attacker.name} attacks ${defender.name} for ${damage} damage.\n${defender.name} blocked ${damageReduction} damage!`
}

//Run handler function
function run(escapee, threat) {
    const runSuccessChance = Math.floor(Math.random() * escapee.stamina);
    const counterChance = Math.floor(Math.random() * threat.stamina);
    
    if(runSuccessChance > counterChance){ // returns true or false randomly based on math.random method and the stamina property.
        console.log(`${player.name} successfully escaped!`);
        return "ran";
    } else {
        console.log(`${monster.name} resisted!`);
        return false;
    }; 

}

//Function to check if the game is over, returns true if object health is <= 0.
function isGameOver() {
    return player.health <=0 || monster.health <= 0;
}

// Add choices for player as a function that prompts the user to choose your action and then returns those criteria in an else if criteria.
function playerTurn() {
    const action = prompt('Choose your action: (attack, defend, run, talk)');

    if (action == 'attack') {
        //calls and prints the attack function.
        console.log(attack(player, monster));
    } else if (action == 'defend'){
        //calls and prints the defend fuction.
        console.log(defend(player, monster));
    } else if (action == "run") {
        console.log(`${player.name} tries to run!`);
        return run(player, monster);
    } else if (action == 'talk') {
        console.log(`${player.name} offers to use the torch to light the ${monster.name}'s fire and they both have bat soup.`);
        return true;
    }
}



//Main game loop
function gameLoop() {
    let playerChoice = false;
    //starts while loop that continues until isGameOver toggles to true (ending the game).
    console.log(`- You creep along the dark cave wall -\nYou decide to light up a torch. The bright flame errupts in your hand temporarily blinding you.\nAs your eyes adjuct to the light, you quickly scan the hollow walls to find a massive Goblin the size of 2 Shaquille O'Neals stacked on top of each other. The Goblin is holding a club the size of a tree trunk.`);
    while (!isGameOver() && !playerChoice) {
        //checks if game is over
        if (playerTurn()) break;
        if (isGameOver()) break;
        playerChoice = playerTurn();
    }

    // conditional end state response
    if (playerChoice==="ran") {
        console.log(`${player.name} ran away!`);   
    } else if (player.health > 0) {
        console.log(`${player.name} wins!`);
    } else if (playerChoice) {
        console.log(`${monster.name} joined your party!`)
    } else {
        console.log(`${monster.name} wins!`);
    }
}

//Start the game
gameLoop();