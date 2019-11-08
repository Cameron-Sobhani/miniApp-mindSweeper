const bombCheck = (state = 10, action) => {
  switch(action.type) {
    case 'BOMBCHECK':
      return state - 1;
  }
};

export default bombCheck;