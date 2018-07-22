import { Answer } from "../answer/answer.model";

export class Question {
    public id: number;
    public text: string;
    public answers: Answer[];
    public questionType: string;

    constructor (id: number, text: string, answers: Answer[], questionType: string) {
        this.text = text;
        this.answers = answers;
        questionType = questionType;
    }
}
