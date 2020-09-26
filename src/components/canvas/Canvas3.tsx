import "../Container.css"
import React, {useRef, useEffect, useContext} from 'react'
import RadioContext from "../context/RadioContext";


const Canvas3 = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

    const canvasRef = useRef(null)
    const {speed, color} = useContext(RadioContext);

    let j = 1;
    let forward = true;

    let circles: any = [
        {x:375,y:275,r:150,sA:0.75*Math.PI,eA:0.25*Math.PI,color:color},
        {x:375,y:450,r:200,sA:0,eA:2*Math.PI,color:color},
        {x:450,y:475,r:75,sA:0,eA:2*Math.PI,color:color},
        {x:375,y:75,r:25,sA:0,eA:2*Math.PI,color:color}
    ]

    const drawFloor = (ctx:any) => {
        ctx.globalAlpha = 1;
        let gradient = ctx.createLinearGradient(0, 450, 0, 750);
        gradient.addColorStop(0, "grey");
        gradient.addColorStop(1, "white");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 800, 800);
        //ctx.globalAlpha = 0.5;
    }



    const drawCircles = (ctx:any) => {
        ctx.beginPath();
        ctx.moveTo(375, 125);
        ctx.lineTo(375, 100);
        ctx.stroke();
        circles.forEach((c: { color: any; x: any; y: any; r: any; sA: any; eA: any; }) => {
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.arc(c.x,c.y,c.r,c.sA,c.eA);
            ctx.fill();
            ctx.stroke();
        })
    }

    useEffect(() => {
        const canvas:any = canvasRef.current
        const context = canvas.getContext('2d')

        const animate = () => {
            context.clearRect(0, 0, 800, 800);
            drawFloor(context);
            drawCircles(context);
            if(j > speed || j < 1) {
                circles.forEach((c: any) => {

                    let r:number = 0;
                    let g:number = 0;
                    let b:number = 0;

                    if (color === "#FF0000") {
                        r = Math.floor(Math.random() * 255); //only red values
                        g = 0;
                        b = 0;
                    }
                    else if (color === "#0000FF") {
                        r = 0;
                        g = 0;
                        b = Math.floor(Math.random() * 255); //only blue values
                    }
                    else if (color === "#00FF00") {
                        r = 0;
                        g = Math.floor(Math.random() * 255); //only green values;
                        b = 0;
                    }

                    c.color = "rgb("+r+","+g+","+b+")";
                })
            }
            if(forward){
                j++;
            } else {
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

    return <canvas ref={canvasRef} width={800} height={800} className="canvas" {...props}/>
}

export default Canvas3


