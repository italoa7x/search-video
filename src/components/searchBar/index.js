import React, { Component } from "react";
import "./styles.css";
import { Segment, Input } from "semantic-ui-react";
import { connect } from 'react-redux';
import buscaVideo from '../../storage/actions/buscaVideoAction';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.props.buscaVideo("programação em javascript");
  }
  buscaVideo = (e) => {
    if(e.keyCode === 13){
      const termoVideo = e.target.value;
      //passa o termo para ser buscado
      this.props.buscaVideo(termoVideo);
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
//função que mapeia o component para receber o termo e buscar o video
const mapDispatchToProps = (dispatch) => {
  return {
    buscaVideo: (termo) => dispatch(buscaVideo(termo))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);