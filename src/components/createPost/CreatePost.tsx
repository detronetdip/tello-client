import React, { useEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import InputWithRef from "../atoms/InputWithRef";
import ImageEditor from "../imageEditor/ImageEditor";
import ImagePost from "../postWithImage/ImagePost";

function CreatePost() {
  const [render, setRender] = useState(Date.now());
  const [openPostWithImage, setOpenPostWithImage] = useState(false);
  const [file, setFile] = useState<string>();
  const fileInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onLoadHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const file = URL.createObjectURL(
      (e.target as HTMLInputElement).files?.[0] as Blob
    );
    setFile(file);
    setOpenPostWithImage(true);
  };
  const closePopUp = (v: Boolean) => {
    setRender(Date.now());
    setOpenPostWithImage(false);
  };
  return (
    <>
      {openPostWithImage ? (
        <ImagePost
          file={file as string}
          closeEditor={closePopUp}
          setFile={setFile}
        />
      ) : null}
      <div className="postcrte">
        <p className="name">Create a Post</p>
        <hr />

        <div className="post1">
          <form className="postform">
            <Input
              Class="aa"
              type="text"
              view="TEXTAREA"
              placeholder="Express Your Thought"
            />
          </form>

          <div className="post2">
            <label className="imgicon" htmlFor="postIMG">
              <BiImageAdd />
            </label>
            <InputWithRef
              key={render}
              ref={fileInputRef}
              type="file"
              id="postIMG"
              placeholder=""
              styles={{ display: "none" }}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => onLoadHandler(e)}
            />
            <Button content="Post" Class="btn-1" ripple />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
