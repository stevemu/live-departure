import { combineReducers } from 'redux';

const destinationFilter = (
  state = null, action
) => {
  switch (action.type) {
    case 'SET_DESTINATION_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const departureRows = (
  state = [], action
) => {
  switch (action.type) {
    case 'UPDATE':
      return action.data;
    default:
      return state;
  }
};

const liveDepartureApp = combineReducers({
  departureRows,
  destinationFilter
});

const getFilteredDepartureRows = (state, destinationFilter) => {
  if (!destinationFilter) return state;
  return state.filter((departureRow)=> {
    return (departureRow['destination'].toLowerCase().indexOf(destinationFilter) != -1)
  });
};

export {
  liveDepartureApp,
  getFilteredDepartureRows
};

