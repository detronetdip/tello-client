import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import ImageEditor from "../imageEditor/ImageEditor";

function CreatePost() {
  const [openImageEditor, setOpenImageEditor] = useState(false);
  const [file, setFile] = useState<string>();
  const onLoadHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const file = URL.createObjectURL((e.target as HTMLInputElement).files?.[0] as Blob);
    setFile(file);
    setOpenImageEditor(true);
  };
  return (
    <>
      {openImageEditor ? <ImageEditor file={file as string} closeEditor={setOpenImageEditor} /> : null}
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
            <Input
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
