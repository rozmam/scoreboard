let newGameBtn = document.getElementById("new-game")
let homeBtn1 = document.getElementById("home-score-btn-1")
let homeBtn2 = document.getElementById("home-score-btn-2")
let homeBtn3 = document.getElementById("home-score-btn-3")
let guestBtn1 = document.getElementById("guest-score-btn-1")
let guestBtn2 = document.getElementById("guest-score-btn-2")
let guestBtn3 = document.getElementById("guest-score-btn-3")
let rezultatHome = document.getElementById("rezultat-home")
let rezultatGuest = document.getElementById("rezultat-guest")
let homeScore = 0
let guesScore = 0


// Left side
function increaseHomeScoreByOne() {
   homeScore += 1
   rezultatHome.textContent = homeScore
}

function increaseHomeScoreByTwo() {
    homeScore += 2
    rezultatHome.textContent = homeScore
}

function increaseHomeScoreByThree() {
    homeScore += 3
    rezultatHome.textContent = homeScore
}

// Right side
function increaseGuestScoreByOne() {
    guesScore += 1
    rezultatGuest.textContent = guesScore
 }

 function increaseGuestScoreByTwo() {
    guesScore += 2
    rezultatGuest.textContent = guesScore
 }

 function increaseGuestScoreByThree() {
    guesScore += 3
    rezultatGuest.textContent = guesScore
 }

 function reset() {
    let restart = 0
    rezultatHome.textContent = restart
    rezultatGuest.textContent = restart
 }