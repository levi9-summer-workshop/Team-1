package rs.levi9.team1.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.team1.survey.domain.Comment;
import rs.levi9.team1.survey.domain.SurveyAnswer;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllBySurveyIdOrderByCommentPostDateDesc(Long id);
}
