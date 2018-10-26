const chai = require('chai');
const expect = chai.expect;

const Person = require('../models/person');

describe('Person', () => {
  it('should initialize properly', () => {
    const person = new Person('Luis', 'Amez', '03/08/1984');

    expect(person.firstName).to.equal('Luis');
    expect(person.surname).to.equal('Amez');
    expect(person.dob).to.equal('03/08/1984');
    expect(person.emails).to.deep.equal([]);
  });

  it('should capitalize firstName', () => {
    const person = new Person('luis', 'Amez', '03/08/1984');

    expect(person.firstName).to.equal('Luis');
  });

  it('should return a full name', () => {
    const person = new Person('Luis', 'Amez', '03/08/1984');

    expect(person.fullName()).to.equal('Luis Amez');
  });
});