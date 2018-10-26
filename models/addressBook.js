class AddressBook {
  constructor() {
    this.entries = [];
  }

  addEntry(person) {
    this.entries.push(person);
  }
}

module.exports = AddressBook;
