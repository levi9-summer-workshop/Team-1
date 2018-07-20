import { Answer } from "../answer/answer.model";

export class Question {
    public id: number;
    public questionText: string;
    public answers: Answer[];
    public questionType: string;

    constructor (id: number, questionText: string, answers: Answer[], questionType: string) {
        this.questionText = questionText;
        this.answers = answers;
        questionType = questionType;
    }
}
