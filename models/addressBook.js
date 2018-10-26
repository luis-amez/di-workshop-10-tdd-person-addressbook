class AddressBook {
  constructor() {
    this.entries = [];
  }

  addEntry(person) {
    this.entries.push(person);
  }

  findByFirstName(name) {
    return this.entries.filter((entry) => {
      return entry.firstName === name;
    });
  }
}

module.exports = AddressBook;
