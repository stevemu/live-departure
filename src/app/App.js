import React, {Component} from 'react';
import Papa from './util/papaparse';
import {convertParsedCSVToDepartureRowObjects} from './util/helpers';
import {Provider} from 'react-redux';

// create redux store
import {createStore} from 'redux';
import {liveDepartureApp} from './reducers/reducer';
const store = createStore(liveDepartureApp);

const host = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/' : 'http://stevemu.com:3000/';
const url = `${host}api/csv`;

class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.interval = setInterval(this.getNewCSV, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getNewCSV = () => {
    Papa.parse(url, {
      download: true,
      complete: (results) => {
        const dataList = convertParsedCSVToDepartureRowObjects(results.data);
        store.dispatch({
          type: 'UPDATE',
          data: dataList
        });
      }
    });
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          { this.props.children }
        </div>
      </Provider>
    );
  }
}

export default App;
