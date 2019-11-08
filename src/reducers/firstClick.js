const firstClick = (state = false, action) => {
  switch(action.type){
    case 'CLICK':
      return true;
  }
};

export default firstClick;