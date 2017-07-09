import {expect} from 'chai';
import { getFilteredDepartureRows } from './reducer';

describe('filter departure rows', ()=> {

  it('should filter departure rows', () => {
    const departureRows = [
      {
        timeStamp: "1479247200",
        origin: "North Station",
        train: "123",
        destination: "Newburyport",
        departureTime: "5:00 PM",
        track: "5",
        status: "Now Boarding"
      },
      {
        timeStamp: "1479247200",
        origin: "North Station",
        train: "123",
        destination: "Rockport",
        departureTime: "5:00 PM",
        track: "5",
        status: "Now Boarding"
      }
    ];
    const destination = 'rock';
    const filteredRows = [
      {
        timeStamp: "1479247200",
        origin: "North Station",
        train: "123",
        destination: "Rockport",
        departureTime: "5:00 PM",
        track: "5",
        status: "Now Boarding"
      }
    ];
    expect(
      getFilteredDepartureRows(departureRows, destination)
    ).to.deep.equal(filteredRows)
  })

  it('should return original departure rows if destination is mepty', () => {
    const departureRows = [
      {
        timeStamp: "1479247200",
        origin: "North Station",
        train: "123",
        destination: "Newburyport",
        departureTime: "5:00 PM",
        track: "5",
        status: "Now Boarding"
      },
      {
        timeStamp: "1479247200",
        origin: "North Station",
        train: "123",
        destination: "Rockport",
        departureTime: "5:00 PM",
        track: "5",
        status: "Now Boarding"
      }
    ];
    const destination = null;
    expect(
      getFilteredDepartureRows(departureRows, destination)
    ).to.deep.equal(departureRows)
  })

})
