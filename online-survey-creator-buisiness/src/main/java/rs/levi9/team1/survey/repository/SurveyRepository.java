package rs.levi9.team1.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.domain.SurveyPrivacy;
import rs.levi9.team1.survey.domain.SurveyStatus;

import java.util.List;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findAllBySurveyUserId(Long id);
    List<Survey> findAllBySurveyDescriptionContainingIgnoreCase(String searchQuery);
    List<Survey> findAllBySurveyPrivacyPrivacyType(SurveyPrivacy.PrivacyType privacyType);
    List<Survey> findAllBySurveyStatusSurveyStatusType(SurveyStatus.SurveyStatusType statusType);
    void deleteBySurveyUserId(Long id);
}