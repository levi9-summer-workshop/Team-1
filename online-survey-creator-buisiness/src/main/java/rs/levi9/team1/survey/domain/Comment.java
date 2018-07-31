package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Objects;

@Entity
public class Comment extends BaseEntity {

    @NotNull
    private String message;

    @ManyToOne(optional = false)
    @JoinColumn(name = "fk_survey_user")
    private SurveyUser surveyUser;

    @ManyToOne(optional = false)
    @JoinColumn(name = "fk_survey")
    private Survey survey;

    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private Date commentPostDate = new Date();

    public Comment(){
    }

    public Comment(String message, SurveyUser surveyUser, Survey survey, Date commentPostDate) {
        this.message = message;
        this.surveyUser = surveyUser;
        this.survey = survey;
        this.commentPostDate = commentPostDate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCommentPostDate() {
        return commentPostDate;
    }

    public void setCommentPostDate(Date commentPostDate) {
        this.commentPostDate = commentPostDate;
    }

    public SurveyUser getSurveyUser() {
        return surveyUser;
    }

    public void setSurveyUser(SurveyUser surveyUser) {
        this.surveyUser = surveyUser;
    }

    public Survey getSurvey() {
        return survey;
    }

    public void setSurvey(Survey survey) {
        this.survey = survey;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return Objects.equals(message, comment.message) &&
                Objects.equals(commentPostDate, comment.commentPostDate);
    }

    @Override
    public int hashCode() {

        return Objects.hash(message, commentPostDate);
    }

    @Override
    public String toString() {
        return "Comment{" +
                "message='" + message + '\'' +
                ", commentPostDate=" + commentPostDate +
                '}';
    }
}
