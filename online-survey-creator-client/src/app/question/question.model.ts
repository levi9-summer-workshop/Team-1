import { Answer } from "../answer/answer.model";

export class Question {
    public id: number;
    public text: string;
    public surveyAnswers: Answer[];
    public questionType: string;

    constructor (id: number, text: string, surveyAnswers: Answer[], questionType: string) {
        this.text = text;
        this.surveyAnswers = surveyAnswers;
        questionType = questionType;
    }
}
