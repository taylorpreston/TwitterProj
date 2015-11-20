import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';


import TwitterFeed from './tweet_feed';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    }
  }


  componentDidMount() {
    jQuery.ajax('https://twitterapii.herokuapp.com/tweets.json')
      .then( response => {
        this.setState({
          tweets: response
        });
      })
  }

  render () {
    return (
      <div className="pageWrap">
        <TwitterFeed tweets={this.state.tweets}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

export default App;
