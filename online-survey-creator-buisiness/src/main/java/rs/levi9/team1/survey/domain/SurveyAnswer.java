package rs.levi9.team1.survey.domain;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class SurveyAnswer extends BaseEntity {

    @NotNull
    private String text;

    private Long result = 0L;

    public SurveyAnswer() {
    }

    public SurveyAnswer(String text, Long result) {
        this.text = text;
        this.result = result;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getResult() {
        return result;
    }

    public void setResult(Long result) {
        this.result = result;
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
