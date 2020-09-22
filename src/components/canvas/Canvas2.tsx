import React, {useRef, useEffect, useContext} from 'react'
import RadioContext from "../context/RadioContext";


const Canvas2 = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

    const canvasRef = useRef(null)
    const {speed, color} = useContext(RadioContext);

    let j = 1;
    let forward = true;
    let utstilling = "bop";

    let bop: any = [
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

    const drawFloor = (ctx:any) => {
        ctx.globalAlpha = 1;
        let gradient = ctx.createLinearGradient(0, 450, 0, 750);
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(1, "white");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 800, 800);
        //ctx.globalAlpha = 0.5;
    }

    const drawDancer = (arr:any, ctx:any) => {
        arr.forEach((r: { w: number; x: number; y: number; x1: any; y1: any; x2: any; y2: any; x3: any; h: number; rotate: number; }) => {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = color;
            if (r.w === 0) {
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

    useEffect(() => {
        const canvas:any = canvasRef.current
        const context = canvas.getContext('2d')

        const animate = () => {
            context.clearRect(0, 0, 800, 800);
            drawFloor(context);
            if(utstilling === "dance") {

            } else if(utstilling === "blink"){

            } else if(utstilling === "bop") {
                drawDancer(bop, context);
            }
            if(forward){
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
        requestAnimationFrame(animate);
    }, [speed, color])

    return <canvas ref={canvasRef} width={800} height={800} {...props}/>
}

export default Canvas2

