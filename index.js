var btn = document.getElementById('btn');
btn.addEventListener("click", refresh)
 function refresh(){

    var x = Math.random();
    var y = Math.floor((x * 6) + 1);
    var randomImage = "dice" + y + ".png";
    var randomImageSource = "images" + '\\' + randomImage
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var a = Math.random();
    var b = Math.floor((a * 6) + 1);
    var randomImage2 = "dice" + b + ".png";
    var randomImageSource2 = "images" + '\\' + randomImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);

    if (b < y) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    }
    else if (b > y) {
        document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "🚩DRAW🚩";
    }

};
