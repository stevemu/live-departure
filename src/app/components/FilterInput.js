import React, {Component} from 'react';
import {connect} from 'react-redux';

const changeFilter = (filter) => ({
  type: 'SET_DESTINATION_FILTER',
  filter
});

let FilterInput = ({onFilterChange}) => {
  return (
    <input placeholder="Filter by destination"
           onChange={(e) => onFilterChange(e.target.value)}
           className="filter-input"
    />
  )
};

const mapDispatchToFilterInputProps = (dispatch, ownProps) => {
  return {
    onFilterChange: (filter) => {
      dispatch(changeFilter(filter))
    }
  }
};

FilterInput = connect(
  null,
  mapDispatchToFilterInputProps
)(FilterInput);


export default FilterInput;