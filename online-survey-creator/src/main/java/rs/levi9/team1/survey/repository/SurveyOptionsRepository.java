package rs.levi9.team1.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.team1.survey.domain.SurveyOptions;

@Repository
public interface SurveyOptionsRepository extends JpaRepository<SurveyOptions, Long> {
}
