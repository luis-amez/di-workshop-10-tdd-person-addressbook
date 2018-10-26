class Person {
  constructor(firstName, surname, dob) {
    this.firstName = this._capitalize(firstName);
    this.surname = surname;
    this.dob = dob;
    this.emails = [];
    this.phoneNumbers = [];
  }

  _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fullName() {
    return `${this.firstName} ${this.surname}`;
  }

  addEmail(email) {
    this.emails.push(email);
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }
}

module.exports = Person;