import React, { useRef, useEffect} from 'react'
import "../container.css"

interface CanvasProps {
    speedValue: number;
    colorValue: string;
}

const Canvas1 = ({speedValue, colorValue}: CanvasProps, props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

    const canvasRef = useRef(null)

    let j = 1;
    let forward = true;
    //speedValue oppdateres til riktig verdi, men vises ikke i bildet?
    //problem med render?
    let speed = speedValue;
    //let utstilling = "bop";
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
            ctx.fillStyle = "yellow";
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
            drawFloor(context)
            drawDancer(dance, context);
            if(forward){
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
                j++;
            } else {
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
    }, [])

    return <canvas ref={canvasRef} width={800} height={800} className="canvas"  {...props}/>
}

export default Canvas1