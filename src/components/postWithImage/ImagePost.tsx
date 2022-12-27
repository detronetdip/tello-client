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
            <div className="postwrite">
              <Input type="" placeholder="Write something..." view="TEXTAREA" />
            </div>
            <img src={file} ref={imageRef}></img>
            <div className="btn">
              <Button content="Edit" onclick={() => setOpenImageEditor(true)} />
              <Button content="Discard" onclick={() => closeEditor(false)} />
              <Button content="Post" onclick={() => closeEditor(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImagePost;
