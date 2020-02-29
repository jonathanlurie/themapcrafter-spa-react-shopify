import React from 'react'
import './style.css'


class SocialBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render(){
    let socialButtons = []
    let iconOpacity = this.props.opacity ?? 0.5

    if(process.env.REACT_APP_TWITTER_URL.startsWith('http')){
      socialButtons.push(
        (
          <a
            key="twitter"
            className="social-link"
            href={process.env.REACT_APP_TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="images/twitter-square.svg"
              alt={process.env.REACT_APP_TWITTER_URL}
              style={{
                opacity: iconOpacity
              }}
            />
          </a>
        )
      )
    }

    if(process.env.REACT_APP_INSTAGRAM_URL.startsWith('http')){
      socialButtons.push(
        (
          <a
            key="instagram"
            className="social-link"
            href={process.env.REACT_APP_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="images/instagram.svg"
              alt={process.env.REACT_APP_INSTAGRAM_URL}
              style={{
                opacity: iconOpacity
              }}
            />
          </a>
        )
      )
    }

    if(process.env.REACT_APP_FACEBOOK_URL.startsWith('http')){
      socialButtons.push(
        (
          <a
            key="facebook"
            className="social-link"
            href={process.env.REACT_APP_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="images/facebook.svg"
              alt={process.env.REACT_APP_FACEBOOK_URL}
              style={{
                opacity: iconOpacity
              }}
            />
          </a>
        )
      )
    }

    if(process.env.REACT_APP_GITHUB_URL.startsWith('http')){
      socialButtons.push(
        (
          <a
            key="github"
            className="social-link"
            href={process.env.REACT_APP_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-icon"
              src="images/github.svg"
              alt={process.env.REACT_APP_GITHUB_URL}
              style={{
                opacity: iconOpacity
              }}
            />
          </a>
        )
      )
    }

    return (
      <div
        className="social-bar"
        style={this.props.style}
      >
        {socialButtons}
      </div>
    )


  }

}

export default SocialBar
