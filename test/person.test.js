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

  it('should add an email account', () => {
    const person = new Person('Luis', 'Amez', '03/08/1984');
    person.addEmail('luis@mail.com');
    person.addEmail('amez@mail.com');

    expect(person.emails).to.deep.equal(['luis@mail.com', 'amez@mail.com']);
  });

  it('should add a phone number', () => {
    const person = new Person('Luis', 'Amez', '03/08/1984');
    person.addPhoneNumber('0123456789');
    person.addPhoneNumber('9876543210');

    expect(person.phoneNumbers).to.deep.equal(['0123456789', '9876543210']);
  });

  it('should return a resume with all details from user', () => {
    const person = new Person('Luis', 'Amez', '03/08/1984');
    person.addEmail('luis@mail.com');
    person.addEmail('amez@mail.com');
    person.addPhoneNumber('0123456789');
    person.addPhoneNumber('9876543210');

    expect(person.returnFormattedDetails()).to.equal(
      "Luis Amez\n" +
      "----------\n" +
      "DOB: 03/08/1984\n" +
      "\n" +
      "Email Addresses:\n" +
      "- luis@mail.com\n" +
      "- amez@mail.com\n" +
      "\n" +
      "Phone Numbers:\n" +
      "- 0123456789\n" +
      "- 9876543210\n"
    )
  });
});
