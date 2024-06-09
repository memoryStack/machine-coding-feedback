import { UserRepository } from "./userRepository";
import { User } from "../user/user";

describe('UserRepository', () => {
    const userRepo = new UserRepository();
    const userOne = new User('u1', 'user one', 'userone@gmail.com', '999999')
    const userTwo = new User('u2', 'user two', 'usertwo@gmail.com', '888888')
    userRepo.addUser(userOne)
    userRepo.addUser(userTwo)

    test('get users by their ID', () => {
        const firstUser = userRepo.findUserById('u1')
        expect(firstUser.getName()).toBe('user one')
    })
    
    test('returns null if user is not found in repo', () => {
        const firstUser = userRepo.findUserById('u3')
        expect(firstUser).toBe(null)
    })
})
