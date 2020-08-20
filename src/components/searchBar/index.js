import React, { Component } from "react";
import "./styles.css";
import { Segment, Input } from "semantic-ui-react";

export default class SearchBar extends Component {
  buscaVideo = (e) => {
    if(e.keyCode === 13){
      const nomeVideo = e.target.value;
      console.log(nomeVideo);
    }
  };
  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input
            icon="search"
            onKeyDown={(e) => this.buscaVideo(e)}
            size="large"
            placeholder="Procure por um vídeo"
          />
        </Segment>
      </div>
    );
  }
}
