$(document).ready(function() {
    //Endrer SVG elementenes farge når man trykker på de
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    //Data for alle figurene som skal tegner i canvas
    let dance = [
        //Head
        { x: 320, y: 175, w: 105, h: 125, rotate: 0 },
        //Left arm
        { x: 365, y: 290, w: 50, h: 100, rotate: -10 },
        {
            x: 385,
            y: 355,
            w: 100,
            h: 50,
            rotate: 10
        },
        //Left foot
        { x: 400, y: 400, w: 60, h: 125, rotate: -40 },
        { x: 425, y: 490, w: 50, h: 100, rotate: 10 },
        //Body
        { x: 375, y: 325, w: 0, h: 0, rotate: 0 },
        { x: 375, y: 375, w: 0, h: 0, rotate: 0 },
        //Right arm
        { x: 345, y: 300, w: 50, h: 100, rotate: -10 },
        {
            x: 365,
            y: 365,
            w: 100,
            h: 50,
            rotate: 10
        },
        //Right foot
        { x: 325, y: 415, w: 60, h: 125, rotate: 5 },
        { x: 315, y: 515, w: 50, h: 100, rotate: 20 }
    ];
    let bop = [
        //Head
        { x1: 375, x2: 450, x3: 300, y1: 275, y2: 150 },
        //Left arm
        { x: 450, y: 280, w: 50, h: 100, rotate: 90 },
        {
            x: 475,
            y: 275,
            w: 100,
            h: 50,
            rotate: -80
        },
        //Right arm
        { x: 255, y: 280, w: 50, h: 100, rotate: 90 },
        {
            x: 175,
            y: 275,
            w: 100,
            h: 50,
            rotate: 80
        },
        //Right foot
        { x: 290, y: 400, w: 60, h: 125, rotate: 40 },
        { x: 265, y: 490, w: 50, h: 100, rotate: -10 },
        //Left foot
        { x: 410, y: 400, w: 60, h: 125, rotate: -40 },
        { x: 435, y: 490, w: 50, h: 100, rotate: 10 },
        //Body
        { x: 375, y: 325, w: 0, h: 0, rotate: 0 },
        { x: 375, y: 375, w: 0, h: 0, rotate: 0 }

    ];
    let circles = [
        {x:375,y:275,r:150,sA:0.75*Math.PI,eA:0.25*Math.PI,color:"rgb(255,0,0)"},
        {x:375,y:450,r:200,sA:0,eA:2*Math.PI,color:"rgb(0,255,0)"},
        {x:450,y:475,r:75,sA:0,eA:2*Math.PI,color:"rgb(0,0,255)"},
        {x:375,y:75,r:25,sA:0,eA:2*Math.PI,color:"rgb(0,0,255)"}

    ]
    drawFloor();
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 5;
    //Tegner figurene
    function drawDancer(arr) {
        arr.forEach(r => {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            if (r.w == 0) {
                ctx.arc(r.x, r.y, 55, 0, 2 * Math.PI);
            } else if (typeof r.x1 !== "undefined") {
                ctx.beginPath();
                ctx.moveTo(r.x1, r.y1);
                ctx.lineTo(r.x2, r.y2);
                ctx.lineTo(r.x3, r.y2);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();
            } else {
                //Kode som gjør av rektangler roterer rundt midtpunket sitt. Koden er funnet her: https://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates/17126036
                ctx.translate(r.x + r.w / 2, r.y + r.h / 2);
                ctx.rotate((r.rotate * Math.PI) / 180);
                ctx.rect(-r.w / 2, -r.h / 2, r.w, r.h);
            }
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        });
    }
    function drawCircles() {
        ctx.beginPath();
        ctx.moveTo(375, 125);
        ctx.lineTo(375, 100);
        ctx.stroke();
        circles.forEach(c => {
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.arc(c.x,c.y,c.r,c.sA,c.eA);
            ctx.fill();
            ctx.stroke();
        })
    }
    //Tegner gulvet
    function drawFloor() {
        ctx.globalAlpha = 1;
        let gradient = ctx.createLinearGradient(0, 450, 0, 750);
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(1, "white");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 450, 750, 300);
        //ctx.globalAlpha = 0.5;
    }

    let j = 1;
    let forward = true;
    let speed = 30;
    let utstilling = "bop";
    requestAnimationFrame(animate);
    function animate(){
        ctx.clearRect(0, 0, c.width, c.height);
        drawFloor();
        if(utstilling == "dance") {
            drawDancer(dance);
        } else if(utstilling == "blink"){
            drawCircles();
            if(j > speed || j < 1) {
                circles.forEach(c => {
                    let r = Math.floor(Math.random() * 255);
                    let g = Math.floor(Math.random() * 255);
                    let b = Math.floor(Math.random() * 255);
                    c.color = "rgb("+r+","+g+","+b+")";
                })
            }
        } else if(utstilling == "bop") {
            drawDancer(bop);
        }
        if(forward){
            //Utstilling 1
            dance[2].x += 40/speed;
            dance[2].y -= 95/speed;
            dance[2].rotate -= 90/speed;
            dance[1].x += 35/speed;
            dance[1].y -= 15/speed;
            dance[1].rotate -= 75/speed;
            dance[8].x += 50/speed;
            dance[8].y -= 60/speed;
            dance[8].rotate -= 10/speed;
            dance[7].x += 20/speed;
            dance[7].y -= 25/speed;
            dance[7].rotate -= 70/speed;
            //Utstilling 2
            bop[0].y1 += 50/speed;
            bop[0].y2 += 50/speed;
            bop[1].y += 50/speed;
            bop[2].y += 50/speed;
            bop[3].y += 50/speed;
            bop[4].y += 50/speed;
            bop[9].y += 50/speed;
            bop[10].y += 50/speed;
            bop[6].rotate -= 20/speed;
            bop[8].rotate += 20/speed;
            bop[5].rotate += 20/speed;
            bop[7].rotate -= 20/speed;
            j++;
        } else {
            //Utstilling 1
            dance[2].x -= 40/speed;
            dance[2].y += 95/speed;
            dance[2].rotate += 90/speed;
            dance[1].x -= 35/speed;
            dance[1].y += 15/speed;
            dance[1].rotate += 75/speed;
            dance[8].x -= 50/speed;
            dance[8].y += 60/speed;
            dance[8].rotate += 10/speed;
            dance[7].x -= 20/speed;
            dance[7].y += 25/speed;
            dance[7].rotate += 70/speed;
            //Utstilling 2
            bop[0].y1 -= 50/speed;
            bop[0].y2 -= 50/speed;
            bop[1].y -= 50/speed;
            bop[2].y -= 50/speed;
            bop[3].y -= 50/speed;
            bop[4].y -= 50/speed;
            bop[9].y -= 50/speed;
            bop[10].y -= 50/speed;
            bop[6].rotate += 20/speed;
            bop[8].rotate -= 20/speed;
            bop[5].rotate -= 20/speed;
            bop[7].rotate += 20/speed;
            j--;
        }
        if(j > speed){
            forward = false;
        } else if (j<1) {
            forward = true;
        }
        requestAnimationFrame(animate);
    }
});

