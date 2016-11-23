import moment from 'moment';

// convert epoch time to human readable time
const convertDate = (epoch) => {
  return moment.unix(epoch).format('LT');
};

const convertParsedCSVToDepartureRowObjects = (parsedCSVArrRows) => {
  // convert array of array of array objects

  // slice here is for getting the all rows except the header row without mutating the existing array
  // trying to use functional programming principle
  // not including the last one too because the data inside it empty
  return parsedCSVArrRows.slice(1, parsedCSVArrRows.length-1).map((row) => {
    let [timeStamp, origin, train, destination, departureTime,, track, status] = row;
    return {
      timeStamp: timeStamp,
      origin: origin,
      train: train,
      destination: destination,
      departureTime: convertDate(departureTime),
      track: track ? track : 'TBD',
      status: status
    }
  });
};



export {
  convertDate,
  convertParsedCSVToDepartureRowObjects
}