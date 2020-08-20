import youtubeSearch from 'youtube-api-v3-search';
import { ytbApi } from '../../apiKey';

const API_KEY = ytbApi;

//----fluxo----
//busca video
//inicia busca
//  retorna lista de video
//  retorna o erro

export function iniciaBuscaDeVideo(){ //inicia a busca de vídeo
    return {
        type: 'INICIA_BUSCA_DE_VIDEO',
        carregando: true,
        erro: false
    }
}
export function buscaVideoSucesso(videos){ //se a busca deu certo, retorna os videos
    return {
        type: 'BUSCA_VIDEO_SUCESSO',
        videos: videos,
        carregando: false,
        erro: false
    }
}
export function buscaVideoError(){
    return {
        type: 'BUSCA_VIDEO_ERROR',
        carregando: false,
        erro: true
    }
}
export function buscaVideo(termo) { //busca um video pelo termo passado como parametro
    return dispatch => {
        dispatch(iniciaBuscaDeVideo())
        youtubeSearch(API_KEY, {q: termo})
        .then((v) => dispatch(buscaVideoSucesso(v.items))) //se houver algum resultado, chama a função de sucesso
        .catch(() => dispatch(buscaVideoError())) // se ocorreu um erro, chama a função que retorna o erro
    }
}