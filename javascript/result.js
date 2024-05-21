function calculate() {
    var totalres = 0
    var n = document.getElementById("happycanvas");
    var a = document.getElementById("sadcanvas");
    var r1 = localStorage.getItem("q1");
    var r2 = localStorage.getItem("q2");
    var r3 = localStorage.getItem("q3");
    var r4 = localStorage.getItem("q4");
    var r5 = localStorage.getItem("q5");
    // console.log(r1, r2, totalres);
    if (r1 == "CascadingStyleSheets")
    totalres++;
    if (r2 == "Selector")
    totalres++;
    if (r3 == "style")
    totalres++;
    if (r4 == "css")
    totalres++;
    if (r5 == "Space")
    totalres++;
    // console.log(r1, r2, totalres);
    if (totalres >= 3) {
        document.getElementById("h").innerHTML = "Congratulations!! You have Passed";
        document.getElementById("score").innerHTML = "You Scored: " + totalres;
        draw();
    }
    else {
        document.getElementById("h").innerHTML ="Try Again";
        document.getElementById("score").innerHTML = "You Scored: " + totalres;
        emoji();
    }
    }

    function draw() {
    var canvas = document.getElementById("sadcanvas");
    canvas.style.display = "none";
    var canvas = document.getElementById("happycanvas");
    var ctx = canvas.getContext('2d');

    //circle
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.arc(200, 200, 150, 0, 2 * (Math.PI));
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    //eye1
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.arc(150, 170, 30, 0, 2 * (Math.PI));
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //eye2
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.arc(250, 170, 30, 0, 2 * (Math.PI));
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //month
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.moveTo(150, 240);
    ctx.arc(200, 240, 50, 0, (Math.PI));
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //teeth
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.moveTo(155, 260);
    ctx.lineTo(245, 260);    
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    }

    function emoji() {
    var canvas = document.getElementById("happycanvas");
    canvas.style.display = "none";
    var canvas = document.getElementById("sadcanvas");
    var ctx = canvas.getContext('2d');

    //circle
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.arc(200, 200, 150, 0, 2 * (Math.PI));
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    //eye1
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.arc(150, 170, 30, 0, 2 * (Math.PI));
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //eye2
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.arc(250, 170, 35, 0, 2 * (Math.PI));
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //month
    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.strokeStyle = "black";
    ctx.arc(200, 290, 40, 0, (Math.PI), 1);
    ctx.stroke();
    ctx.closePath();

    //tear
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.moveTo(270, 210);
    ctx.arc(270, 250, 20, 0, (Math.PI));
    ctx.lineTo(270, 207);    
    ctx.fillStyle = "skyblue";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    }