import React, { useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import ImageEditor from "../imageEditor/ImageEditor";

function ImagePost({
  file,
  closeEditor,
  setFile,
}: {
  file: string;
  closeEditor: Function;
  setFile: Function;
}) {
  const { theme } = useTheme();
  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;
  const [openImageEditor, setOpenImageEditor] = useState(false);

  return (
    <>
      <div className={`${theme}-postImageContainer`}>
        <div className="overlayContainer">
          {openImageEditor ? (
            <ImageEditor
              file={file}
              closeEditor={setOpenImageEditor}
              setFile={setFile}
            />
          ) : null}
          <div className="middlebox">
            <img src={file} ref={imageRef}></img>
            <div className="btn">
              <Button content="Edit" onclick={() => setOpenImageEditor(true)} />
              <Button content="Discard" onclick={() => closeEditor(false,true)} />
              <Button content="Ok" onclick={() => closeEditor(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImagePost;
