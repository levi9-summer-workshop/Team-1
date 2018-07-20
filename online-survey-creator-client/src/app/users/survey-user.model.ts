export class SurveyUser {
    public id: number;
    public username: string;
    public password: string;
    public email: string;
    public blocked: boolean;

    constructor(id: number, username: string, password: string, email: string, blocked: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.blocked = blocked;
    }
    
    
}
