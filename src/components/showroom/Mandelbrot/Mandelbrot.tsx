import React ,{useEffect}from "react";

interface mandelProps {
    width:number,
    height:number,
    iterations:number
}
const MandelbrotCanvas=({width=300,height=120,iterations=1000}:mandelProps)=>{
    const canvasRef : React.RefObject<HTMLCanvasElement> = React.createRef();    
useEffect(() => {
  drawmandelBrot(canvasRef,width,height,iterations) 
},)
    return (
        <canvas ref={canvasRef} width={width} height={height} />
    )
}
function drawmandelBrot(canvasRef:React.RefObject<HTMLCanvasElement> ,width:number,height:number,iterations:number=1000){
const canvas = canvasRef.current;
const ctx = canvas!.getContext("2d");
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Convert canvas coordinates to Mandelbrot coordinates
      const cRe = (x - width / 2) * 4 / width;
      const cIm = (y - height / 2) * 4 /width;

      let zRe = 0;
      let zIm = 0;
      let isInside = true;
      let iterationcounter = 0;
      // Iterate the equation until z escapes or we reach the maximum number of iterations
      for (let i = 0; i < iterations; i++) {
        const zReSquared = zRe * zRe;
        const zImSquared = zIm * zIm;

        if (zReSquared + zImSquared > 4) {
          isInside = false;
          iterationcounter=i;
          break;
        }

        zIm = 2 * zRe * zIm + cIm;
        zRe = zReSquared - zImSquared + cRe;
      }

      // Set the pixel color based on whether it is inside or outside the set
      if (isInside) {
        ctx!.fillStyle="black"
      } else {
        ctx!.fillStyle = `rgb(${zIm+50*zRe},${zIm+100*Math.random()*zIm*zRe},${zIm*zRe+100})`
      }
      ctx!.fillRect(x, y, 1, 1);
    }
  }
}

export default MandelbrotCanvas;