package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Survey extends BaseEntity {

    @NotNull
    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "survey_user_id")
    private SurveyUser surveyUser;

    @Enumerated(EnumType.STRING)
    private PrivacyType privacyType;

    public enum PrivacyType {
        PUBLIC, RESTRICTED
    }

    @Enumerated(EnumType.STRING)
    private SurveyStatus surveyStatus;

    public enum SurveyStatus {
        OPEN, CLOSED
    }

    @Future
    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date expiryDate;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SurveyUser getSurveyUser() {
        return surveyUser;
    }

    public void setSurveyUser(SurveyUser surveyUser) {
        this.surveyUser = surveyUser;
    }

    public PrivacyType getPrivacyType() {
        return privacyType;
    }

    public void setPrivacyType(PrivacyType privacyType) {
        this.privacyType = privacyType;
    }

    public SurveyStatus getStatusType() {
        return surveyStatus;
    }

    public void setStatusType(SurveyStatus surveyStatus) {
        this.surveyStatus = surveyStatus;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }
}
