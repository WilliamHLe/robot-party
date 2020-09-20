let j = 1;
let forward = true;
let speed = 30;
let utstilling = "bop";
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let disco = [
    //Head
    { x: 320, y: 175, w: 105, h: 125, rotate: 0 },
    //Rigth foot
    { x: 290, y: 400, w: 50, h: 125, rotate: 30 },
    { x: 270, y: 495, w: 50, h: 100, rotate: -10 },
    //Left foot
    { x: 410, y: 400, w: 50, h: 125, rotate: -30 },
    { x: 430, y: 495, w: 50, h: 100, rotate: 10 },
    //Body
    { x: 375, y: 325, w: 0, h: 0, rotate: 0 },
    { x: 375, y: 375, w: 0, h: 0, rotate: 0 },
    //Left arm
    { x: 430, y: 280, w: 50, h: 100, rotate: 135 },
    {
        x: 405,
        y: 360,
        w: 100,
        h: 50,
        rotate: -45
    },
    //Rigth arm
    { x: 275, y: 220, w: 50, h: 100, rotate: 160 },
    {
        x: 230,
        y: 160,
        w: 100,
        h: 50,
        rotate: 85
    },
];

function drawDancer(arr) {
    arr.forEach(r => {
        ctx.save();
        ctx.beginPath();
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
        } else if (r.name == "arm") {
            ctx.translate(r.x, r.y);
            ctx.rotate((r.rotate * Math.PI) / 180);
            ctx.rect(-r.w,-r.h/2,r.w,r.h);

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
function animate(){
    ctx.clearRect(0, 0, c.width, c.height);
    drawFloor();
    drawDancer(disco);
    if(forward){
        disco[9].x += 25/speed;
        disco[9].y += 80/speed;
        disco[9].rotate -= 180/speed;
        disco[10].x += 90/speed;
        disco[10].y += 240/speed;
        disco[10].rotate += 150/speed;
        j++;
    } else {
        disco[9].x -= 25/speed;
        disco[9].y -= 80/speed;
        disco[9].rotate += 180/speed;
        disco[10].x -= 90/speed;
        disco[10].y -= 240/speed;
        disco[10].rotate -= 150/speed;
        j--;
    }
    if(j > speed){
        forward = false;
    } else if (j<1) {
        forward = true;
    }
    requestAnimationFrame(animate);
}