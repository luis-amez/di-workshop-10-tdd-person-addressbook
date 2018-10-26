const chai = require('chai');
const expect = chai.expect;

const AddressBook = require('../models/addressBook');
const Person = require('../models/person');

describe('AddressBook', () => {
  it('should initialize properly', () => {
    const book = new AddressBook();

    expect(book.entries).to.deep.equal([]);
  });

  it('should add a person to the book entries', () => {
    const book = new AddressBook();
    const person = new Person('luis', 'Amez', '03/08/1984');
    book.addEntry(person);
    
    expect(book.entries).to.deep.equal([person]);
  });
});
