export class User {
    id: number;
    name: string;
    email: 'lol@gmail.com';

    getDisplayName() {
        return this.name + this.email;
    }
}
