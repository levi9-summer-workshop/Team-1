package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.team1.survey.domain.Comment;
import rs.levi9.team1.survey.domain.SurveyAnswer;
import rs.levi9.team1.survey.repository.CommentRepository;
import rs.levi9.team1.survey.repository.SurveyAnswerRepository;

import java.util.List;

@Transactional
@Service
public class CommentService {

    private CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    public Comment save(Comment comment) {
        return commentRepository.save(comment);
    }

    public void delete(Long id) {
        commentRepository.delete(id);
    }

    public Comment findOne(Long id) {
        return commentRepository.findOne(id);
    }

    public Comment update(Comment comment) {
        return commentRepository.save(comment);
    }

    public List<Comment> findAllWithIds(List<Long> ids) {
        return commentRepository.findAll(ids);
    }

    public List<Comment> findAllWithSurveyId(Long id) {
        return commentRepository.findAllBySurveyIdOrderByCommentPostDateDesc(id);
    }

    public void deleteAllCommentsBySurveyUserId(Long id) {
        commentRepository.deleteAllBySurveyUserId(id);
    }



}