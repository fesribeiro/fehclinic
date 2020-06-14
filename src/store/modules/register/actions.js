export function registerAnimal(data) {
  return {
    type: '@register/ADD_NEW_ANIMAL',
    payload: {
      ...data,
    },
  };
}

export function registerAnimalSucess(data) {
  return {
    type: '@register/ADD_NEW_ANIMAL_SUCCESS',
    payload: { ...data },
  };
}
