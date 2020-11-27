import React from 'react';

import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './Post.css';

function Post({
    diplayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/923341083777441792/u5u0GCOs_x96.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Walisson Rodrigues{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" />
                                @walisson
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Making a Twitter clone feels like</p>
                    </div>
                </div>
                <img src="https://media4.giphy.com/media/MC6eSuC3yypCU/giphy.gif" alt="Post Image" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;