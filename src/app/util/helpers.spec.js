import {expect} from 'chai';
import {convertDate, convertParsedCSVToDepartureRowObjects, getFilteredDepartureRows} from './helpers';

describe('helpers', ()=> {

  it('should parse date', ()=> {
    expect(convertDate(1479247200)).to.equal('5:00 PM');
  });

  it('should convert parsed csv to objects', ()=> {
    const parsedCSV = [
      ["TimeStamp", "Origin", "Trip", "Destination", "ScheduledTime", "Lateness", "Track", "Status"],
      ["1479247200", "North Station", "123", "Rockport", "1479247200", "120", "5", "Now Boarding"],
      [""]
    ];
    const expectedObjects = [
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
    const result = convertParsedCSVToDepartureRowObjects(parsedCSV);
    expect(
      result
    ).to.deep.equal(expectedObjects);
  });

});