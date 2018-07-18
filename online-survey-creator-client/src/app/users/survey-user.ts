export class SurveyUser {
    public id: number;
    public username: string;
    public password: string;
    public userStatus: string[];

    constructor(id: number, username: string, password: string, userStatus: string[]) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.userStatus = userStatus;
    }
}
