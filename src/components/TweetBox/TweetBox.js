import React, { useState } from 'react';

import storage from '../../firebase';

import { Avatar, Button } from '@material-ui/core';

import './TweetBox.css';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        storage.child('posts').push(
            {
                displayName: 'Walisson Rodrigues',
                username: 'WalissonOR',
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar: "https://pbs.twimg.com/profile_images/923341083777441792/u5u0GCOs_x96.jpg"
            },
            err => {
                if (err)
                    console.log(err);
                else {
                    setInitialValues();
                }
            }
        )
        setInitialValues();
    }

    const setInitialValues = () => {
        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/923341083777441792/u5u0GCOs_x96.jpg" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button
                    onClick={sendTweet}
                    className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
