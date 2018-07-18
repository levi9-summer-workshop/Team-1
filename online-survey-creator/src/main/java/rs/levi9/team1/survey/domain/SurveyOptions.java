package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "survey_options")
public class SurveyOptions extends BaseEntity {

    @NotNull
    @Column(nullable = false)
    private String answer;

    @ManyToOne
    @JoinColumn(name = "survey_id")
    private rs.levi9.team1.survey.domain.Survey survey;

    private int result = 0;

    public SurveyOptions() {

    }

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

    public int getResult() {
        return result;
    }

    public void setResult(int result) {
        this.result = result;
    }
}
