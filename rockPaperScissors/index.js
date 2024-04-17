console.log("Welcome to Rock, Paper, Scissors!!!")
        const options = ["Rock", "Paper", "Scissors"]

        function getComputerChoice(){
            const choice = options[Math.floor(Math.random() * options.length)];
            return choice;
        }

        function getPlayerChoice(){
            let validatedInput = false;
            while (validatedInput == false){
                const choice = prompt("Choose Your Fate: Rock, Paper, or Scissors?");
                if (choice == null){
                    continue;
                }
                const choiceCaps = (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
                if (options.includes(choiceCaps)){
                    validatedInput = true;
                    return choiceCaps;
                }
            }
        }

        function checkWinner(playerSelection, computerSelection){
            if (playerSelection == computerSelection){
                return "Tie"
            }

            else if (
                (playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")
            ){
                return "Player"
            }

            else {
                return "Computer"
            }

        }

        function playRound(playerSelection, computerSelection){
            const result = checkWinner(playerSelection, computerSelection);
            if (result == "Tie"){
                return "It's a Tie Monkey!"
            }
            else if (result == "Player"){
                return `You Win Monkey! ${playerSelection} beats ${computerSelection}!`
            }
            else{
                return  `You Lose Monkey! ${computerSelection} beats ${playerSelection}!`
            }
           
        }

        function playGame(){
            let scorePlayer = 0;
            let scoreComputer = 0;
            for (let i = 0; i < 5; i++){
                const playerSelection = getPlayerChoice();
                const computerSelection = getComputerChoice();
                console.log(playRound(playerSelection, computerSelection))
                console.log("------")
                if (checkWinner(playerSelection, computerSelection) == "Player"){
                    scorePlayer++;
                }
                else if(checkWinner(playerSelection,computerSelection) == "Computer"){
                    scoreComputer++;
                }
            }

            console.log("Game Over")

            if (scorePlayer > scoreComputer){
                console.log("Monkey beats Computer! Congratulations!")
            }
            else if (scoreComputer > scorePlayer){
                console.log("Computer wins! As expected!")
            }
            else{
                console.log("It's a tie Monkey! Try again!")
            }
        }

        playGame()