const squares = document.querySelectorAll('.square')
const mole = document.querySelector('mole')
const timeleft = document.querySelector('#time-left')
const yourscore = document.querySelector('#score')

const whackedmole = document.querySelector('whackedmole')

let result = 0
let moleIsIn
let currentTime = 20
let timerID = null

// function to select a random square from the grid
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
        square.classList.remove('whackedmole')
    })

    let randomLoc = squares[Math.floor(Math.random() * 9)]

    randomLoc.classList.add('mole')

    moleIsIn = randomLoc.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == moleIsIn) {
            result++
            score.textContent = result
            
            squares.forEach(square => {
                square.classList.remove('mole')
                if (square.id == moleIsIn){
                    square.classList.add('whackedmole')
                }
            })

            moleIsIn = null
        }
    })
})

function moveMole() {
    timerID = setInterval(randomSquare, 625)
}

moveMole()

function timer() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownID)
        clearInterval(timerID)

        squares.forEach(square => {
            square.classList.remove('mole')
            if (square.id == 5){
                square.classList.add('whackedmole')
            }
        })

        alert('GAME OVER. You whacked ' + result + ' Mikes.')
    }
}

let countDownID = setInterval(timer, 1000)