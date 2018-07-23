import { Survey } from "../survey/survey.model";

export class SurveyUser {
    public id: number;
    public username: string;
    public password: string;
    public email: string;
    public surveys: Survey[];
    public blocked: boolean;

    constructor(username: string, password: string, email: string, blocked?: boolean, id?: number, surveys?: Survey[]) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.blocked = blocked;
        this.surveys = surveys;
    }
    
    
}
