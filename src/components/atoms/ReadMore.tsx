import React, { useState } from "react";

function ReadMore({ text }: { text: String }) {
  const [viewMore,setViewMore]=useState(false);
  const showArr: String[] = [];
  text.split("").forEach((e: String, i: number) => {
    if (i < 600) {
      showArr.push(e);
    }
  });

  const ar: boolean = text.length >= 600;
  return (
    <>
      <div className="readmore">
        {!viewMore?showArr.join(""):text}
        {ar && !viewMore ? <span className="rm" onClick={()=>setViewMore(true)}>...Read More</span> : null}
        {ar && viewMore ? <span className="rm" onClick={()=>setViewMore(false)}>...Read Less</span> : null}
      </div>
      {/* <div className="readmore">{ar.join("")}</div> */}
    </>
  );
}

export default ReadMore;
