import { SurveyUser } from "../users/survey-user.model";
import { Question } from "../question/question.model";
import { SurveyPrivacy } from "./survey-privacy";
import { SurveyStatus } from "./survey-status";

export class Survey {
    public id: number;
    public surveyUser: SurveyUser;
    public surveyQuestions: Question[];
    public surveyDescription: string;
    public surveyPrivacy: SurveyPrivacy;
    public surveyStatus: SurveyStatus;
    public surveyExpireDate: Date;

    constructor (surveyDescription: string, surveyUser: SurveyUser, surveyQuestions: Question[], surveyExpireDate?: Date, surveyPrivacy?: SurveyPrivacy, surveyStatus?: SurveyStatus, id?: number) {
        this.id = id;
        this.surveyUser = surveyUser;
        this.surveyQuestions = surveyQuestions;
        this.surveyDescription = surveyDescription;
        this.surveyPrivacy = surveyPrivacy;
        this.surveyStatus = surveyStatus;
        this.surveyExpireDate = surveyExpireDate;
    }
}
