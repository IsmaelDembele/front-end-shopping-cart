import { totalQuantity, totalPrice, myPosition } from '../helper';

export const reducer = (state, action) => {
  if (action.type === 'TOTAL_PRICE') {
    const newTotal = totalPrice(state.listItem);
    return {
      ...state,
      total: newTotal,
    };
  }

  if (action.type === 'TOTAL_ITEM_NUMBER') {
    const newTotalItemNumber = totalQuantity(state.listItem);
    return {
      ...state,
      totalItemNumber: newTotalItemNumber,
    };
  }

  if (action.type === 'ADD_ONE_QTY') {
    const tempArray = [...state.listItem];
    const position = myPosition(tempArray, action.payload);
    tempArray[position].qty += 1;
    return {
      ...state,
      listItem: tempArray,
    };
  }

  if (action.type === 'REMOVE_ONE_FROM_QTY') {
    const tempArray = [...state.listItem];
    const position = myPosition(tempArray, action.payload);
    tempArray[position].qty -= 1;
    return {
      ...state,
      listItem: tempArray,
    };
  }

  if (action.type === 'DELETE_ITEM') {
    const newlistItem = state.listItem.filter(item => {
      return action.payload !== item.id;
    });
    return {
      ...state,
      listItem: newlistItem,
    };
  }

  throw new Error('no matching action type');
};
