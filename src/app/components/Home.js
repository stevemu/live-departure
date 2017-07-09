import React, {Component} from 'react';
import FilteredTable from './FilteredTable';
import FilterInput from './FilterInput';

class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <h1>Live Train Departure</h1>
        <FilterInput />
        <FilteredTable />
      </div>
    );
  }
}

export default Home;
