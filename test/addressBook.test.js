const chai = require('chai');
const expect = chai.expect;

const AddressBook = require('../models/addressBook');

describe('AddressBook', () => {
  it('should initialize properly', () => {
    const book = new AddressBook();

    expect(book.entries).to.deep.equal([]);
  });
});