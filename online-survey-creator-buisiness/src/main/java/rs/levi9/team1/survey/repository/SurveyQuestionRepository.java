package rs.levi9.team1.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.domain.SurveyQuestion;

import java.util.List;

@Repository
public interface SurveyQuestionRepository extends JpaRepository<SurveyQuestion, Long> {
}