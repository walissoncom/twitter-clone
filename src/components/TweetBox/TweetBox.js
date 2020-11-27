import React from 'react';

import { Avatar, Button } from '@material-ui/core';

import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/923341083777441792/u5u0GCOs_x96.jpg" />
                    <input placeholder="What's happening?" type="text" />
                    {/* <input placeholder="Place image URL" type="text" /> */}
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;