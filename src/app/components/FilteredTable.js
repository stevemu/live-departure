import React, {Component} from 'react';

import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import 'fixed-data-table/dist/fixed-data-table-style.css';
import {connect} from 'react-redux';
import {getFilteredDepartureRows} from '../reducers/reducer';

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);


let FilteredTable = ({filteredDataList}) => {
  return (
    <div>
      {filteredDataList.length > 0 ?
      <Table
        rowHeight={50}
        rowsCount={filteredDataList ? filteredDataList.length : 0}
        width={680}
        maxHeight={2000}
        headerHeight={50}>
        <Column
          header={<Cell>Origin</Cell>}
          cell={<TextCell data={filteredDataList} col="origin"/>}
          fixed={true}
          width={120}
        />
        <Column
          header={<Cell>Train#</Cell>}
          cell={<TextCell data={filteredDataList} col="train"/>}
          fixed={true}
          width={80}
        />
        <Column
          header={<Cell>Destination</Cell>}
          cell={<TextCell data={filteredDataList} col="destination"/>}
          fixed={true}
          width={160}
        />
        <Column
          header={<Cell>Depature Time</Cell>}
          cell={<TextCell data={filteredDataList} col="departureTime"/>}
          fixed={true}
          width={140}
        />
        <Column
          header={<Cell>Track#</Cell>}
          cell={<TextCell data={filteredDataList} col="track"/>}
          fixed={true}
          width={60}
        />
        <Column
          header={<Cell>Status</Cell>}
          cell={<TextCell data={filteredDataList} col="status"/>}
          fixed={true}
          width={120}
        />
      </Table> :
        <h3 className="loading">Loading</h3>
      }
    </div>

  )
};

const mapStateToFilteredTableProps = (state) => {
  return {
    filteredDataList: getFilteredDepartureRows(state.departureRows, state.destinationFilter)
  }
};

FilteredTable = connect(
  mapStateToFilteredTableProps
)(FilteredTable);


export default FilteredTable;