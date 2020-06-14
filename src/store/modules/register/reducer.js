const INITIAL_STATE = {
  data: [
    {
      id: 1,
      name: 'Hulkinho',
      tutor: 'Fernandinha',
    },
    {
      id: 2,
      name: 'Thor',
      tutor: 'Wanessa',
    },
    {
      id: 3,
      name: 'Pepita',
      tutor: 'Victor',
    },
  ],
};

export default function register(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@register/ADD_NEW_ANIMAL_SUCCESS':
      console.tron.warn(action);
      const data = action.payload;
      data.id = Math.random();
      return {
        ...state,
        data: [...state.data, { ...data }],
      };
    default:
      return state;
  }
}
