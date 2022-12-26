import React, { useEffect, useRef, useState } from "react";
import Button from "../atoms/Button";
import { editorOptions } from "../data/imageEditorOptions";

function ImageEditor({
  file,
  closeEditor,
}: {
  file: string;
  closeEditor: Function;
}) {
  const [isCan, setIscan] = useState(false);
  const [editProperties, setEditProperties] = useState({
    Brightness: "100",
    Contrast: "100",
    Blur: "0",
    Greyscale: "0",
    Hue: "0",
    Invert: "0",
    Opacity: "100",
    Saturation: "100",
    Sepia: "0",
  });
  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    imageRef.current.style.filter = `brightness(${editProperties.Brightness}%) contrast(${editProperties.Contrast}%) blur(${editProperties.Blur}px) grayscale(${editProperties.Greyscale}%) hue-rotate(${editProperties.Hue}deg) invert(${editProperties.Invert}%) opacity(${editProperties.Opacity}%) saturate(${editProperties.Saturation}%) sepia(${editProperties.Sepia}%)`;
    console.log(imageRef.current.style.filter,editProperties)
  }, [editProperties]);
  const [metadata, setMetadata] = useState({
    option: "Brightness",
    unit: "%",
    step: 1,
    range: {
      start: 0,
      default: 100,
      end: 200,
    },
  });
  const handelSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (metadata.option) {
      case "Brightness":
        setEditProperties((old) => {
          return {
            ...old,
            Brightness: e.target.value,
          };
        });
        break;
      case "Contrast":
        setEditProperties((old) => {
          return {
            ...old,
            Contrast: e.target.value,
          };
        });
        break;
      case "Blur":
        setEditProperties((old) => {
          return {
            ...old,
            Blur: e.target.value,
          };
        });
        break;
      case "Greyscale":
        setEditProperties((old) => {
          return {
            ...old,
            Greyscale: e.target.value,
          };
        });
        break;
      case "Hue":
        setEditProperties((old) => {
          return {
            ...old,
            Hue: e.target.value,
          };
        });
        break;
      case "Invert":
        setEditProperties((old) => {
          return {
            ...old,
            Invert: e.target.value,
          };
        });
        break;
      case "Opacity":
        setEditProperties((old) => {
          return {
            ...old,
            Opacity: e.target.value,
          };
        });
        break;
      case "Saturation":
        setEditProperties((old) => {
          return {
            ...old,
            Saturation: e.target.value,
          };
        });
        break;
      case "Sepia":
        setEditProperties((old) => {
          return {
            ...old,
            Sepia: e.target.value,
          };
        });
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
  const finishEdit = () => {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    c.height = imageRef.current.naturalHeight;
    c.width = imageRef.current.naturalWidth;
    (
      ctx as CanvasRenderingContext2D
    ).filter = `brightness(${editProperties.Brightness}%) contrast(${editProperties.Contrast}%) blur(${editProperties.Blur}px) grayscale(${editProperties.Greyscale}%) hue-rotate(${editProperties.Hue}deg) invert(${editProperties.Invert}%) opacity(${editProperties.Opacity}%) saturate(${editProperties.Saturation}%) sepia(${editProperties.Sepia}%)`;
    ctx?.drawImage(imageRef.current, 0, 0, c.width, c.height);
    console.log(c.toDataURL());
  };

  return (
    <>
      <div className="imageEditorContainer">
        <div className="overlayContainer">
          <div className="middlebox">
            <img src={file} ref={imageRef}></img>
            <div className="editpanel">
              <div className="slider">
                <span>{metadata.range.start}</span>
                <input
                  type="range"
                  id="cowbell"
                  name="cowbell"
                  min={metadata.range.start}
                  max={metadata.range.end}
                  value={+metadata.range.default}
                  step={metadata.step}
                  onChange={handelSlide}
                />
                <span>{metadata.range.end}</span>
              </div>
              <div className="optionpanel">
                {editorOptions.map((each) => (
                  <div
                    key={each.option}
                    className={`editoptions ${each.option===metadata.option?"active":null}`}
                    onClick={() => {
                      setMetadata((old) => {
                        return {
                          ...old,
                          option: each.option,
                          unit: each.unit,
                          step: each.step,
                          range: {
                            start: each.range.start,
                            default: editProperties[
                              each.option as keyof typeof editProperties
                            ] as unknown as number,
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
              <Button content="Next" onclick={finishEdit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageEditor;
