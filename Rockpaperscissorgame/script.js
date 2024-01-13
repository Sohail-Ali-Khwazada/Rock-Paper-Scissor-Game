//For player,0=>draw,1=>win,-1=>lost
const mat = [[0,-1,1],
            [1,0,-1],
            [-1,1,0]]

let playerscore = 0
let compscore = 0


let computerchoice = 0
let playerchoice = 0
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")

let playerdisplay = document.querySelector(".playerdisplay")
let computerdisplay = document.querySelector(".computerdisplay")
let resulttext = document.querySelector("#winner")
   


const generatecompimg = () => {
    let comimg = document.createElement("img")

    if (computerchoice == 1) {
        comimg.src = "images/rock.png"
    } else if (computerchoice == 2) {
        comimg.src = "images/paper.jpeg"
        comimg.height = 200
    } else {
        comimg.src = "images/scissor.png"
    }
    computerdisplay.innerHTML = "";
    computerdisplay.append(comimg);
    computerdisplay.style.display = "flex";
    computerdisplay.style.alignItems = "center";
    computerdisplay.style.justifyContent = "center";
}

const calcWinner = (plchoice,compchoice) => {
    resulttext.innerText = ""
    let plnewscore = document.querySelector("#playerscore")
    let cmpnewscore = document.querySelector("#computerscore")

    if(mat[plchoice-1][compchoice-1] == 0) {
        resulttext.innerText = "It's a draw"
    } else if (mat[plchoice-1][compchoice-1] == 1) {
        playerscore++
        plnewscore.innerText = ""
        plnewscore.innerText = `${playerscore}`
        resulttext.innerText = "You Won this round!!"
    } else{
        compscore++
        cmpnewscore.innerText = ""
        cmpnewscore.innerText = `${compscore}`
        resulttext.innerText = "Computer Won this round!!"
    }
}

const calcfinalWinner = () => {
    if(playerscore == 10) {
        resulttext.innerText = ""
        resulttext.innerText = "Congratulation You Won Game over!!"
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    } else if (compscore == 10) {
        resulttext.innerText = ""
        resulttext.innerText = "Sorry You Lost Game over!!"
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
}

rock.addEventListener("click",() => {
    playerchoice = 1
    computerchoice = Math.floor(Math.random() * 3) + 1
    let plimg = document.createElement("img")
    plimg.src = "images/rock.png"
    playerdisplay.innerHTML = "";
    playerdisplay.append(plimg);
    playerdisplay.style.display = "flex";
    playerdisplay.style.alignItems = "center";
    playerdisplay.style.justifyContent = "center";

    generatecompimg()
    calcWinner(playerchoice,computerchoice)
    calcfinalWinner()

});

paper.addEventListener("click",() => {
    playerchoice = 2
    computerchoice = Math.floor(Math.random() * 3) + 1
    let plimg = document.createElement("img")
    plimg.src = "images/paper.jpeg"
    plimg.height = 200
    playerdisplay.innerHTML = "";
    playerdisplay.append(plimg);
    playerdisplay.style.display = "flex";
    playerdisplay.style.alignItems = "center";
    playerdisplay.style.justifyContent = "center";

    generatecompimg()
    calcWinner(playerchoice,computerchoice)
    calcfinalWinner()
});

scissor.addEventListener("click",() => {
    playerchoice = 3
    computerchoice = Math.floor(Math.random() * 3) + 1
    let plimg = document.createElement("img")
    plimg.src = "images/scissor.png"
    playerdisplay.innerHTML = "";
    playerdisplay.append(plimg);
    playerdisplay.style.display = "flex";
    playerdisplay.style.alignItems = "center";
    playerdisplay.style.justifyContent = "center";
    generatecompimg()
    calcWinner(playerchoice,computerchoice)
    calcfinalWinner()
});




