package rs.levi9.team1.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.team1.survey.domain.SurveyUser;

@Repository
public interface UserRepository extends JpaRepository<SurveyUser, Long> {

    SurveyUser findByUsername(String username);

    SurveyUser findByUsernameOrEmail(String username, String email);

    SurveyUser findByEmail(String email);

} // end interface UserRepository
