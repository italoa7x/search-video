import React, { Component } from "react";
import { connect } from "react-redux";
import { Advertisement, Embed } from "semantic-ui-react";

import "./styles.css";

class VideoPlayer extends Component {
  render() {
    return (
      <div className="video-player">
        {!this.props && (
          <Advertisement
            style={{ height: "433px" }}
            unit="top banner"
            test="Escolha um vídeo."
          />
        )}

        {this.props.video.id && (
          <div>
            <Embed id={this.props.video.id.videoId} source="youtube" />
            <p className="video-title">{this.props.video.snippet.title}</p>
            <p className="video-description">{this.props.video.snippet.description}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.reproduzVideoReducer.video,
  };
};

export default connect(mapStateToProps, null)(VideoPlayer);
