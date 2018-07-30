import { SurveyUser } from "../../users/survey-user.model";
import { Survey } from "../survey.model";

export class SurveyComment {
    public id: number;
    public message: string;
    public surveyUser: SurveyUser;
    public survey: Survey;
    public commentPostDate: Date;

    constructor(message: string, surveyUser?: SurveyUser, survey?: Survey, commentPostDate?: Date, id?:number){
        this.message = message;
        this.surveyUser = surveyUser;
        this.survey = survey;
        this.commentPostDate = commentPostDate;
        this.id = id;
    }
}
