function roll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var images1 = "images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src", images1);



    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var images2 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src", images2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 WINS!🚩";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 2 WINS!";

    }

    else {
        document.querySelector("h1").innerHTML = "Too bad DRAW!";

    }
}

