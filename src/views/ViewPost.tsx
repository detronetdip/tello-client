import { useEffect, useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import { useTheme } from "../hooks/useTheme";
import Post from "../components/singlepost/Post";

function ViewPost() {
  const { theme } = useTheme();
  const [post, setPost] = useState<any>();
  useEffect(()=>{
    const fetchPost=async()=>{
      
    }
    fetchPost()
  },[])
  return (
    <div className={`${theme}-viewpost`}>
      <div className="flexrow">
        <div className="left">
          <div className="imgwapper">
            <Post
              post={post}
              comment={false}
              click={false}
              onDelete={() => {}}
            />
          </div>
        </div>
        <div className="right">
          <div className="cmntsc">
            <form>
              <div className="inputrow">
                <Input
                  placeholder="Enter your comment"
                  type="text"
                  Class="cmont"
                />
                <Button content="Post" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
