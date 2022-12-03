import moment from 'moment'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { MdComment } from 'react-icons/md'
import { useTheme } from '../../hooks/useTheme'

function Post () {
    const {theme} = useTheme();
  return (
    <>
       <div className={`${theme}-postwrapper`}>
       <div className="mypost">
          <div className="head">
            <div className="aa">
              <div className="imgicon">
                <img src="/assets/icons/fakeuser.jpg" alt="" />
              </div>

              <div className="username">
                <p>User_name</p>
                <p className="date">{moment().format("MMM Do YY")}</p>
              </div>
            </div>

            <div className="dropdown">
              <BiDotsVerticalRounded />

              <div className="dropmenu"></div>
            </div>
          </div>

          <hr className="hr2" />

          <div className="postimg">
            <div>
              <img
                src="https://osnabruegge.github.io/images/demo/demo-landscape.jpg"
                alt="slow internet...."
              />
            </div>
          </div>

          <div className="option1">
            <div className="aa">
              <div className="like">
                <AiOutlineHeart />
              </div>
              &nbsp; &nbsp;
              <div className="cmnt">
                <MdComment />
              </div>
            </div>
            <div className="bookmark">
              <BsBookmarkHeartFill />
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Post