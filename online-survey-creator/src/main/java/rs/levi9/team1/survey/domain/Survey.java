package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

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

    public Survey() {

    }

    public Survey(String description, SurveyUser surveyUser, Date expiryDate, List<SurveyOptions> surveyOptionsList) {
        this.description = description;
        this.surveyUser = surveyUser;
        this.privacyType = PrivacyType.PUBLIC;
        this.surveyStatus = SurveyStatus.OPEN;
        this.expiryDate = expiryDate;
        this.surveyOptionsList = surveyOptionsList;
    }

    @Future
    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date expiryDate;

    @OneToMany
    @JoinColumn(name = "survey_options_id")
    private List<SurveyOptions> surveyOptionsList;

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

    public SurveyStatus getSurveyStatus() {
        return surveyStatus;
    }

    public void setSurveyStatus(SurveyStatus surveyStatus) {
        this.surveyStatus = surveyStatus;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public List<SurveyOptions> getSurveyOptionsList() {
        return surveyOptionsList;
    }

    public void setSurveyOptionsList(List<SurveyOptions> surveyOptionsList) {
        this.surveyOptionsList = surveyOptionsList;
    }
}
