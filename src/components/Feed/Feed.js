import React from 'react';

import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

import './Feed.css';

function Feed() {
    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post
                avatar="https://pbs.twimg.com/profile_images/923341083777441792/u5u0GCOs_x96.jpg"
                displayName="Walisson Rodrigues"
                username="WalissonOR"
                verified={false}
                text="Knowing ReactJS feels like"
                image="https://media4.giphy.com/media/MC6eSuC3yypCU/giphy.gif" />

        </div>
    )
}

export default Feed;