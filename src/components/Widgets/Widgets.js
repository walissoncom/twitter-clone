import React from 'react';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"923347472784564225"}></TwitterTweetEmbed>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="WalissonOR"
                    options={{ heigiht: 400 }}
                />

                <TwitterShareButton
                    url={"http://walisson.com/"}
                    options={{ text: '#ReactJS is awesome', via: 'WalissonOR' }}
                />
            </div>
        </div>
    )
}

export default Widgets;