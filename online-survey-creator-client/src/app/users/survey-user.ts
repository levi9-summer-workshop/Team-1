export class SurveyUser {
    public id: number;
    public username: string;
    public password: string;
    public blocked: boolean;

    constructor(id: number, username: string, password: string, blocked: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.blocked = false;
    }

    
}
