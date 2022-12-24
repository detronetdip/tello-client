import React, { useRef, useState } from "react";
import Button from "../atoms/Button";
import { editorOptions } from "../data/imageEditorOptions";

function ImageEditor({
  file,
  closeEditor,
}: {
  file: File;
  closeEditor: Function;
}) {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [metadata, setMetadata] = useState({
    option: "Brightness",
    unit: "%",
    step: 1,
    range: {
      start: -100,
      default: 1,
      end: 100,
    },
  });
  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  // useEffect(() => {
  //   const cont = canvasRef.current.getContext("2d");
  //   const img = new Image();
  //   img.onload = () => {
  //     canvasRef.current.height = 390;
  //     cont?.drawImage(
  //       img,
  //       0,
  //       0,
  //       canvasRef.current.width,
  //       canvasRef.current.height
  //     );
  //   };
  //   img.src = URL.createObjectURL(file);
  //   img.style.filter="brightness(200%)"
  //   console.log(img);
  //   setContext(cont);
  // }, []);
  // useEffect(()=>{

  //    if(context){
  //     alert(9)
  //     const cont = canvasRef.current.getContext("2d");
  //     cont.filter = 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)';
  //     console.log(cont)
  //   }

  // },[context])
  const handelSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (metadata.option) {
      case "Brightness":
        imageRef.current.style.filter = `brightness(${e.target.value}${metadata.unit})`;
        break;
      case "Contrast":
        imageRef.current.style.filter = `contrast(${e.target.value}${metadata.unit})`;
        break;
      case "Blur":
        imageRef.current.style.filter = `blur(${e.target.value}${metadata.unit})`;
        break;
      case "Greyscale":
        imageRef.current.style.filter = `grayscale(${e.target.value}${metadata.unit})`;
        break;
      case "Hue":
        imageRef.current.style.filter = `hue-rotate(${e.target.value}${metadata.unit})`;
        break;
      case "Invert":
        imageRef.current.style.filter = `invert(${e.target.value}${metadata.unit})`;
        break;
      case "Opacity":
        imageRef.current.style.filter = `opacity(${e.target.value}${metadata.unit})`;
        break;
      case "Saturation":
        imageRef.current.style.filter = `saturate(${e.target.value}${metadata.unit})`;
        break;
      case "Sepia":
        imageRef.current.style.filter = `sepia(${e.target.value}${metadata.unit})`;
        break;
    }
    setMetadata((old) => {
      return {
        ...old,
        range: {
          ...old.range,
          default: +e.target.value,
        },
      };
    });
  };
  const test = () => {};

  return (
    <>
      <div className="imageEditorContainer">
        <canvas hidden></canvas>
        <div className="overlayContainer">
          <div className="middlebox">
            <img src={URL.createObjectURL(file)} ref={imageRef}></img>
            <div className="editpanel">
              <div className="slider">
                <span>{metadata.range.start}</span>
                <input
                  type="range"
                  id="cowbell"
                  name="cowbell"
                  min={metadata.range.start}
                  max={metadata.range.end}
                  value={metadata.range.default}
                  step={metadata.step}
                  onChange={handelSlide}
                />
                <span>{metadata.range.end}</span>
                <Button content="Save" />
              </div>
              <div className="optionpanel">
                {editorOptions.map((each) => (
                  <div
                    key={each.option}
                    className="editoptions"
                    onClick={() => {
                      setMetadata((old) => {
                        return {
                          ...old,
                          option: each.option,
                          unit: each.unit,
                          step: each.step,
                          range: {
                            start: each.range.start,
                            default: each.range.default,
                            end: each.range.end,
                          },
                        };
                      });
                    }}
                  >
                    <div className="option">
                      <div className="icn">
                        <each.icon />
                      </div>
                      <span>{each.option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="btn">
              <Button content="Discard" onclick={() => closeEditor(false)} />
              <Button content="Next" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageEditor;
