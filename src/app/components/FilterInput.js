import React, {Component} from 'react';
import {connect} from 'react-redux';

let FilterInput = ({onFilterChange}) => {
  return (
    <input placeholder="Filter by destination" onChange={(e) => onFilterChange(e.target.value)}/>
  )
};

const mapDispatchToFilterInputProps = (dispatch, ownProps) => {
  return {
    onFilterChange: (filter) => {
      dispatch({
        type: 'SET_DESTINATION_FILTER',
        filter
      })
    }
  }
};

FilterInput = connect(
  null,
  mapDispatchToFilterInputProps
)(FilterInput);


export default FilterInput;