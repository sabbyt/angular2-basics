export class UsersService {
    private registeredUsers=['Sab', 'Chloe', 'Angie'];
    
    getUsers () {
        return this.registeredUsers;
    }
}