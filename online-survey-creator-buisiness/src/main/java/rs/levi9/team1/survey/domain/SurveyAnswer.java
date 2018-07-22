package rs.levi9.team1.survey.domain;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class SurveyAnswer extends BaseEntity {

    @NotNull
    private String text;

    public SurveyAnswer() {
    }

    public SurveyAnswer(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SurveyAnswer that = (SurveyAnswer) o;

        return text.equals(that.text);
    }

    @Override
    public int hashCode() {
        return text.hashCode();
    }

    @Override
    public String toString() {
        return "SurveyAnswer{" +
                "text='" + text + '\'' +
                '}';
    }
}
