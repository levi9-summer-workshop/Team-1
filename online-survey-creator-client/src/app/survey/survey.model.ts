import { SurveyUser } from "../users/survey-user.model";
import { Question } from "../question/question.model";

export class Survey {
    public surveyDescription: string;
    public surveyUser: SurveyUser;
    public surveyQuestions: Question[];
    public surveyPrivacy: string;
    public surveyStatus: string;
    public surveyExpiryDate: Date;

    constructor ( surveyDescription: string, surveyUser: SurveyUser, surveyQuestions: Question[], surveyPrivacy: string, surveyStatus: string, surveyExpiryDate: Date) {
        this.surveyDescription = surveyDescription;
        this.surveyUser = surveyUser;
        this.surveyQuestions = surveyQuestions;
        this.surveyPrivacy = surveyPrivacy;
        this.surveyStatus = surveyStatus;
        this.surveyExpiryDate = surveyExpiryDate;
    }
}
