//Game Objects

const player = {
    name: "Hero",
    health: 100,
    attackPower: 20,
};

const monster = {
    name: "Goblin",
    health: 50,
    attackPower: 10,
};

//Attack handler function
function attack(attacker, defender) {
    const damage = Math.floor(Math.random() * attacker.attackPower);
    defender.health -= damage;
    return `${attacker.name} attacks ${defender.name} for ${damage} damage!`
};

//Function to check if the game is over, returns true if object health is <= 0.
function isGameOver() {
    return player.health <=0 || monster.health <= 0;
}

//Main game loop
function gameLoop() {
    //starts while loop that continues until isGameOver toggles to true (ending the game).
    while (!isGameOver()) {
        //calls and prints the attack function for player.
        console.log(attack(player, monster));
        //checks if game is over
        if (isGameOver()) break;
        //calls and prints the attach function for monster.
        console.log(attack(monster, player));
    }

    if (player.health > 0) {
        console.log(`${player.name} wins!`);
    } else {
        console.log(`${monster.name} wins!`)
    }
}

//Start the game
gameLoop();