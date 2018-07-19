package rs.levi9.team1.survey.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class SurveyStatus extends BaseEntity {

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SurveyStatusType surveyStatusType;

    public SurveyStatus() {
        this.surveyStatusType = SurveyStatusType.OPEN;
    }

    public SurveyStatus(SurveyStatusType surveyStatusType) {
        this.surveyStatusType = surveyStatusType;
    }

    public SurveyStatusType getSurveyStatusType() {
        return surveyStatusType;
    }

    public void setSurveyStatusType(SurveyStatusType surveyStatusType) {
        this.surveyStatusType = surveyStatusType;
    }

    public enum SurveyStatusType {
        OPEN, CLOSED
    }
}
