export default function bookReducer(state, action) {
  switch(action.type) {
    case "ADD_BOOK": 
      const id = state.length !== 0 ? state[state.length-1].id + 1 : 0;
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: id
      }]
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}