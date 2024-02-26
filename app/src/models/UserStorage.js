"use strict";

class UserStorage {
  static #users = {
    id: ["test", "ki", "noh"],
    psword: ["1234", "5678", "9000"],
    name: ["테스트", "기남후", "노상우"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
