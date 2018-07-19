package rs.levi9.team1.survey.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class SurveyPrivacy extends BaseEntity {

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PrivacyType privacyType;

    public SurveyPrivacy() {
        this.privacyType = PrivacyType.PUBLIC;
    }

    public SurveyPrivacy(PrivacyType privacyType) {
        this.privacyType = privacyType;
    }

    public PrivacyType getPrivacyType() {
        return privacyType;
    }

    public void setPrivacyType(PrivacyType privacyType) {
        this.privacyType = privacyType;
    }

    static enum PrivacyType {
        PUBLIC, RESTRICTED
    }
}
