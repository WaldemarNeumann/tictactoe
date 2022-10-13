let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circel';
            document.getElementById('gamer-1').classList.remove('inactive-player');
            document.getElementById('gamer-2').classList.add('inactive-player');
        } else {
            currentShape = 'cross';
            document.getElementById('gamer-1').classList.add('inactive-player');
            document.getElementById('gamer-2').classList.remove('inactive-player');
        }

        fields[id] = currentShape;
        console.log(fields);

        draw();
        checkForWin();
    }
}

function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restart').classList.add('d-none');

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');

        setTimeout(function() {
            document.getElementById('line-' + i).classList.remove('d-none');
            document.getElementById('line-' + i).style.transform = 'scaleX(0)';
        }, 1)
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circel-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }

}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circel') {
            document.getElementById('circel-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {

    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1.2)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1.2)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1.2)';
    }


    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }



    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(40deg) scaleX(1.5)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-40deg) scaleX(1.5)';
    }

    if (winner) {
        console.log('Gewonnen:', winner);
        gameOver = true;
        setTimeout(function() {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('restart').classList.remove('d-none');
        }, 1500)

    }

}