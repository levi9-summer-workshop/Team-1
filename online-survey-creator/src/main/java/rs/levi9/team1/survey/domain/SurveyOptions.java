package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "survey_option")
public class SurveyOptions extends BaseEntity {

    @NotNull
    @Column(nullable = false)
    private String answer;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private Survey survey;

    private int result = 0;

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Survey getSurvey() {
        return survey;
    }

    public void setSurvey(Survey survey) {
        this.survey = survey;
    }
}
