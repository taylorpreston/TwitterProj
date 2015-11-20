import React, { PropTypes } from 'react'

import Tweet from './tweet';

class TweetFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: {}
    }
  }

  render () {
    let tweets = this.props.tweets.map(tweet =>{
      return (
        <Tweet key={tweet.id}
             body={tweet.body}
             tim={tweet.created_at}/>
      )
    });

    return (
      <ul className="tweetFeed">
        {tweets}
      </ul>
    )
  }
}

export default TweetFeed;
