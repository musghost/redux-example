const initialState = {
  personas: [],
  loading: false,
  error: ''
};

export default function catalogos(state = initialState, action) {
  switch (action.type) {
    case 'TRAER_PERSONAS_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'TRAER_PERSONAS_REJECTED':
      return {
        ...state,
        loading: false,
        error: 'Hubo un error'
      };
    case 'TRAER_PERSONAS_FULFILLED':
      return {
        ...state,
        personas: action.payload.data.results,
        loading: false
      };
    default:
      return state;
  }
}
