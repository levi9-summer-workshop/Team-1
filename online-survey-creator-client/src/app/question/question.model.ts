export class Question {
    public text: string;
    public answers: Answer[];
    public questionType: string;

    constructor (text: string, answers: Answer[], questionType: string) {
        this.text = text;
        this.answers = answers;
        questionType = questionType;
    }
}
