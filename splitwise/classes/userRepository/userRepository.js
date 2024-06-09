class UserRepository {
    #users
    constructor() {
        this.#users = {}
    }

    findUserById(userId) {
        return this.#users[userId] || null
    }

    addUser(user) {
        this.#users[user.getId()] = user
    }
}

module.exports = { UserRepository }
