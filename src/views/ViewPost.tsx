import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import { useTheme } from "../hooks/useTheme";

function ViewPost() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}-viewpost`}>
      <div className="flexrow">
        <div className="left">
          <div className="imgwapper">
           {/* <Post comment={false} click={false}/> */}
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
