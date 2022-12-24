import React, { useEffect, useRef, useState } from "react";

function ImageEditor({ file }: { file: File }) {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;
  useEffect(() => {
    const cont = canvasRef.current.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvasRef.current.height = 390;
      cont?.drawImage(
        img,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    };
    img.src = URL.createObjectURL(file);
    console.log(img);
    setContext(cont);
  }, []);

  return (
    <>
      <div className="imageEditorContainer">
        <div className="overlayContainer">
          <div className="middlebox">
            <canvas ref={canvasRef} width={660} height={560}></canvas>
            <div className="editpanel"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageEditor;
