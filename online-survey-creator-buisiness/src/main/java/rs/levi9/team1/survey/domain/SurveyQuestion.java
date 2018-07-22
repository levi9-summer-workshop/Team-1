package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class SurveyQuestion extends BaseEntity {

    @NotNull
    private String text;

    @Enumerated(EnumType.STRING)
    private QuestionType questionType = QuestionType.SINGLE_ANSWER;

    enum QuestionType {
        SINGLE_ANSWER, MULTIPLE_ANSWERS
    }

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "fk_survey_question")
    private List<SurveyAnswer> surveyAnswers;

    public SurveyQuestion() {
    }

    public SurveyQuestion(String text, QuestionType questionType, List<SurveyAnswer> surveyAnswers) {
        this.text = text;
        this.questionType = questionType;
        this.surveyAnswers = surveyAnswers;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public QuestionType getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType;
    }

    public List<SurveyAnswer> getSurveyAnswers() {
        return surveyAnswers;
    }

    public void setSurveyAnswers(List<SurveyAnswer> surveyAnswers) {
        this.surveyAnswers = surveyAnswers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SurveyQuestion that = (SurveyQuestion) o;

        if (!text.equals(that.text)) return false;
        return questionType == that.questionType;
    }

    @Override
    public int hashCode() {
        int result = text.hashCode();
        result = 31 * result + questionType.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "SurveyQuestion{" +
                "text='" + text + '\'' +
                ", questionType=" + questionType +
                ", surveyAnswers=" + surveyAnswers +
                '}';
    }
}
