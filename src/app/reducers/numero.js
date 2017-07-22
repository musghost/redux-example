const initialState = 0;

export default function numero(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    default:
      return state;
  }
}
