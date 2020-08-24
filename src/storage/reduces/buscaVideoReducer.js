//cria um estado inicial vazio
const INITIAL_STATE = {
  type: "",
  videos: [],
  carregando: false,
  erro: false,
};
//verifica qual foi o tipo de action que foi passada na busca
export default function buscar (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INICIA_BUSCA_DE_VIDEO": // se a busca do video for iniciada, é retornado uma action de inicio
      return {
        type: "INICIA_BUSCA_DE_VIDEO",
        videos: [],
        carregando: true,
        erro: false,
      };
    case "BUSCA_VIDEO_SUCESSO": // se a busca foi bem sucedidade, é retornado uma action contendo os videos
      return {
        type: "BUSCA_VIDEO_SUCESSO",
        carregando: false,
        videos: action.videos,
        erro: false,
      };
    case "BUSCA_VIDEO_ERROR": // se ocorreu um erro na busca, é retornado uma action de erro
        return {
            type: 'BUSCA_VIDEO_ERROR',
            videos: [],
            carregando: false,
            erro: true
        }
    default:
        return state;
  }
}
