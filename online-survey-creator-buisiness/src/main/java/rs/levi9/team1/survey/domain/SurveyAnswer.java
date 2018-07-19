package rs.levi9.team1.survey.domain;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class SurveyAnswer extends BaseEntity {

    @NotNull
    private String text;

    @ManyToOne
    @JoinColumn(name = "fk_survey_question")
    private SurveyQuestion surveyQuestion;

    public SurveyAnswer() {
    }

    public SurveyAnswer(String text, SurveyQuestion surveyQuestion) {
        this.text = text;
        this.surveyQuestion = surveyQuestion;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public SurveyQuestion getSurveyQuestion() {
        return surveyQuestion;
    }

    public void setSurveyQuestion(SurveyQuestion surveyQuestion) {
        this.surveyQuestion = surveyQuestion;
    }
}
