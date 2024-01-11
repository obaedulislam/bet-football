const footballPlayers = [
    {
        playerName: "cristiano ronaldo",
        imgUrl: "../images/cr-7.jpg",
        goal: 120,
        assist: 250,
    },
    {
        playerName: "Marcelo Vieira",
        imgUrl: "../images/marcelo.jpg",
        goal: 80,
        assist: 200,
    },
    {
        playerName: "Vinicius Junior",
        imgUrl: "../images/Vinicius-Jr.jpg",
        goal: 34,
        assist: 90,
    },
    {
        playerName: "Casemiro",
        imgUrl: "../images/casimero.jpg",
        goal: 45,
        assist: 134,
    },
    {
        playerName: "Gareth Bale",
        imgUrl: "../images/g-bale.jpg",
        goal: 132,
        assist: 232,
    },
    {
        playerName: "Karim Benzema",
        imgUrl: "../images/karim-benzema.jpg",
        goal: 182,
        assist: 228,
    },
    {
        playerName: "Luka Modrić",
        imgUrl: "../images/Luka.jpg",
        goal: 120,
        assist: 230,
    },
    {
        playerName: "Thibaut Courtois",
        imgUrl: "../images/cortouis.jpg",
        goal: 8,
        assist: 37,
    },
    {
        playerName: "Toni Kroos",
        imgUrl: "../images/tony-kross.jpg",
        goal: 79,
        assist: 198,
    },
]

//Show Player data Start
const playerList = document.getElementById("player-list");

footballPlayers.forEach(player => {
    const singlePlayerDiv= document.createElement("div");
    singlePlayerDiv.classList.add("col-lg-4", "col-md-6", "col-sm-6", "col-12");

    singlePlayerDiv.innerHTML = `
                <div class="single-player common-height">
                    <div class="player-img">
                        <img src=${player.imgUrl} alt="${player.playerName}" class="img-fluid">
                    </div>
                    <div class="player-description p-4">
                        <h3 class="text-white text-center">${player.playerName}</h3>
                        <p class="text-center m-0">${player.goal} Goal <span class="fs-3 fw-bold mx-1">.</span> ${player.assist}
                            Assist</p>
                        <div class="select-btn text-center mt-3">
                            <button 
                                class="btn btn-success w-100 rounded-0 "  onclick="addPlayer(this)">SELECT</button>
                        </div>
                    </div>
                </div>
    `;
     playerList.appendChild(singlePlayerDiv);
})

//Show Player data end


/* === Common Function Code Start ==== */
// All Input Field Value
function inputExpenseAmount(inputId){
    const inputBudgetField = document.getElementById(inputId);
    const inputBudgetText = inputBudgetField.value;
    const inputBudget = parseFloat(inputBudgetText);
    return inputBudget;        
}
// Player List Length
function playerListLength(elementId){
    const playerList = document.getElementById(elementId);
    const playersOnlist = playerList.getElementsByTagName('li');
    const players = playersOnlist.length;
    return players;
}
/* === Common Function Code End ==== */


/* === Player Selected on field === */
//Add player on Selected field
function addPlayer(element){
    const playerList = playerListLength("add-player")
    const addPlayerList = document.querySelector("#add-player");
    if(playerList < 5){
        const li = document.createElement("li");
        const playerName = element.parentNode.parentNode.children[0].innerText;
        li.innerText = playerName;
        addPlayerList.appendChild(li);
        element.disabled = "true";
    }
}

/** === Player Expense Calculation  === **/
function playersExpense(){
    const singlePlayerExpense = inputExpenseAmount("per-player-expense");
    const playerList = playerListLength("add-player")
    const playerExpenseText =  document.querySelector("#players-expense");

    const playersExpense = playerList * singlePlayerExpense;
    playerExpenseText.innerText = playersExpense;
    return playersExpense;
}