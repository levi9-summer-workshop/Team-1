package rs.levi9.team1.survey.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Survey extends BaseEntity {

    @NotNull
    private String surveyDescription;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "fk_survey")
    private List<SurveyQuestion> surveyQuestions = new ArrayList<>();

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_survey_user")
    private SurveyUser surveyUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_survey_privacy")
    private SurveyPrivacy surveyPrivacy = new SurveyPrivacy(SurveyPrivacy.PrivacyType.PUBLIC);

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_survey_status")
    private SurveyStatus surveyStatus = new SurveyStatus(SurveyStatus.SurveyStatusType.OPEN);

    @Temporal(TemporalType.DATE)
    private Date surveyExpireDate;
    
    public Survey() {
    }

    public Survey(String surveyDescription, List<SurveyQuestion> surveyQuestions, SurveyUser surveyUser, SurveyPrivacy surveyPrivacy, SurveyStatus surveyStatus, Date surveyExpireDate) {
        this.surveyDescription = surveyDescription;
        this.surveyQuestions = surveyQuestions;
        this.surveyUser = surveyUser;
        this.surveyPrivacy = surveyPrivacy;
        this.surveyStatus = surveyStatus;
        this.surveyExpireDate = surveyExpireDate;
    }

    public String getSurveyDescription() {
        return surveyDescription;
    }

    public void setSurveyDescription(String surveyDescription) {
        this.surveyDescription = surveyDescription;
    }

    public List<SurveyQuestion> getSurveyQuestions() {
        return surveyQuestions;
    }

    public void setSurveyQuestions(List<SurveyQuestion> surveyQuestions) {
        this.surveyQuestions = surveyQuestions;
    }

    public SurveyUser getSurveyUser() {
        return surveyUser;
    }

    public void setSurveyUser(SurveyUser surveyUser) {
        this.surveyUser = surveyUser;
    }

    public SurveyPrivacy getSurveyPrivacy() {
        return surveyPrivacy;
    }

    public void setSurveyPrivacy(SurveyPrivacy surveyPrivacy) {
        this.surveyPrivacy = surveyPrivacy;
    }

    public SurveyStatus getSurveyStatus() {
        return surveyStatus;
    }

    public void setSurveyStatus(SurveyStatus surveyStatus) {
        this.surveyStatus = surveyStatus;
    }

    public Date getSurveyExpireDate() {
        return surveyExpireDate;
    }

    public void setSurveyExpireDate(Date surveyExpireDate) {
        this.surveyExpireDate = surveyExpireDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Survey survey = (Survey) o;

        if (!surveyDescription.equals(survey.surveyDescription)) return false;
        if (!surveyUser.equals(survey.surveyUser)) return false;
        if (!surveyPrivacy.equals(survey.surveyPrivacy)) return false;
        if (!surveyStatus.equals(survey.surveyStatus)) return false;
        return surveyExpireDate.equals(survey.surveyExpireDate);
    }

    @Override
    public int hashCode() {
        int result = surveyDescription.hashCode();
        result = 31 * result + surveyUser.hashCode();
        result = 31 * result + surveyPrivacy.hashCode();
        result = 31 * result + surveyStatus.hashCode();
        result = 31 * result + surveyExpireDate.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "Survey{" +
                "surveyDescription='" + surveyDescription + '\'' +
                ", surveyQuestions=" + surveyQuestions +
                ", surveyUser=" + surveyUser +
                ", surveyPrivacy=" + surveyPrivacy +
                ", surveyStatus=" + surveyStatus +
                ", surveyExpireDate=" + surveyExpireDate +
                '}';
    }
}