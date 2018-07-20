import { SurveyUser } from "../users/survey-user.model";
import { Question } from "../question/question.model";
import { SurveyPrivacy } from "./survey-privacy";
import { SurveyStatus } from "./survey-status";

export class Survey {
    public id: number;
    public surveyDescription: string;
    public surveyPrivacy: SurveyPrivacy;
    public surveyStatus: SurveyStatus;
    public surveyExpiryDate: Date;

    constructor (surveyDescription: string, surveyUser: SurveyUser, surveyExpiryDate: Date, surveyPrivacy?: SurveyPrivacy, surveyStatus?: SurveyStatus, id?: number) {
        this.id = id;
        this.surveyDescription = surveyDescription;
        this.surveyPrivacy = surveyPrivacy;
        this.surveyStatus = surveyStatus;
        this.surveyExpiryDate = surveyExpiryDate;
    }
}
