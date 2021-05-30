import uuid from 'uuid/v1';

//state represent the project object
export const projectReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          title: action.project.title,
          description: action.project.description,
          id: uuid(),
        },
      ];
    case 'REMOVE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
};
