import React, { useRef, useEffect } from 'react'
import "../container.css"

interface CanvasProps {
    speedValue: number;
    colorValue: string;
}
const Canvas4 = ({speedValue, colorValue}: CanvasProps, props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

    const canvasRef = useRef(null)

    let j = 1;
    let forward = true;
    let speed = 30;
    let utstilling = "bop";
    let robot = [
        //Head
        { x: 280, y: 155, w: 105, h: 125, rotate: -10 },
        //Rigth foot
        { x: 310, y: 400, w: 50, h: 125, rotate: 10 },
        { x: 295, y: 495, w: 50, h: 100, rotate: 10 },
        //Left foot
        { x: 390, y: 400, w: 50, h: 125, rotate: -10 },
        { x: 405, y: 495, w: 50, h: 100, rotate: -10 },
        //Body
        { x: 360, y: 325, w: 0, h: 0, rotate: 0 },
        { x: 375, y: 375, w: 0, h: 0, rotate: 0 },
        //Left arm
        { x: 400, y: 280, w: 50, h: 100, rotate: 150 },
        {
            x: 405,
            y: 390,
            w: 100,
            h: 50,
            rotate: -90
        },
        //Rigth arm
        { x: 245, y: 260, w: 50, h: 100, rotate: 90 },
        {
            x: 230,
            y: 310,
            w: 100,
            h: 50,
            rotate: 240,
            name: "arm"
        },
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
        arr.forEach((r: { w: number; x: number; y: number; x1: any; y1: any; x2: any; y2: any; x3: any; name: string; rotate: number; h: number; }) => {
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



    useEffect(() => {
        const canvas:any = canvasRef.current
        const context = canvas.getContext('2d')

        const animate = () => {
            context.clearRect(0, 0, 800, 800);
            drawFloor(context);
            drawDancer(robot, context);
            if(forward){
                robot[10].rotate += 60/speed;
                j++;
            } else {
                robot[10].rotate -= 60/speed;
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

    return <canvas ref={canvasRef} width={800} height={800} className="canvas" {...props}/>
}

export default Canvas4