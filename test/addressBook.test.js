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
    const person = new Person('Luis', 'Amez', '03/08/1984');
    book.addEntry(person);
    
    expect(book.entries).to.deep.equal([person]);
  });

  it('should find persons by firstName', () => {
    const book = new AddressBook();
    const person1 = new Person('Luis', 'Amez', '03/08/1984');
    const person2 = new Person('Fatima', 'Amez', '14/02/1988');
    const person3 = new Person('Luis', 'Vitoria', '13/05/1994');
    const person4 = new Person('Teresa', 'Romero', '08/12/1956');
    book.addEntry(person1);
    book.addEntry(person2);
    book.addEntry(person3);
    book.addEntry(person4);

    expect(book.findByFirstName('Luis')).to.deep.equal([person1, person3]);
  });
});
