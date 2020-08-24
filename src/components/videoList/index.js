import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";
import reproduzVideoAction from "../../storage/actions/reproduzVideoAction";
import "./styles.css";

class VideoList extends Component {
  //recebe um video e renderiza
  renderVideo(video) {
    return (
      <List animated verticalAlign="middle" key={video.etag}>
        <List.Item onClick={() => this.props.reproduzVideoAction(video)}>
          <Image src={video.snippet.thumbnails.default.url}></Image>
          <List.Content>{video.snippet.title}</List.Content>
        </List.Item>
      </List>
    );
  }

  render() {
    return (
      <div className="video-list">
        {this.props.carregando && (
          <Dimmer active inverted>
            <Loader size="medium"></Loader>
          </Dimmer>
        )}
        {this.props.videos.map((v) => {
          return this.renderVideo(v);
        })}
      </div>
    );
  }
}
//recebe o vídeo clicado e chama a despatch para executar o vídeo
const mapDispatchToProps = (dispatch) => {
  return {
    reproduzVideoAction: (video) => dispatch(reproduzVideoAction(video)),
  };
};
//recebe um estado e captura os videos buscados no searchBar
const mapStateToProps = (state) => {
  return {
    videos: state.buscaVideosReducer.videos,
    carregando: state.buscaVideosReducer.carregando,
    erro: state.buscaVideosReducer.erro,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
