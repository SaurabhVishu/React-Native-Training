const initialstate = {
  counter: 5,
  isShow: true,
};

const ChangeValue = (state = initialstate, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: action.payload};
    case 'ChangeState':
      return {...state, isShow: action.payload};
    default:
      return state;
  }
};

export default ChangeValue;
