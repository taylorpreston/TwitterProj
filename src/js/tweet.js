import React, { PropTypes } from 'react'
import jQuery from 'jquery';

class Tweet extends React.Component {
  render () {
    return (
      <div className="tweetWrap">
        <span>{this.props.body}</span>
        <span className="created-at">Posted at:{this.props.time}</span>
      </div>
    )
  }
}

export default Tweet;
