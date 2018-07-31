package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.Comment;
import rs.levi9.team1.survey.domain.SurveyAnswer;
import rs.levi9.team1.survey.service.CommentService;
import rs.levi9.team1.survey.service.SurveyAnswerService;

import java.util.List;

@RestController
@RequestMapping("comments")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {

    private CommentService commentsService;

    @Autowired
    public CommentController(CommentService commentsService) {
        this.commentsService = commentsService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity findAllComments() {
        List<Comment> comments = this.commentsService.findAll();
        if(comments == null) {
            return new ResponseEntity(HttpStatus.SERVICE_UNAVAILABLE);
        }
        return new ResponseEntity(comments, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity save(@RequestBody Comment comment) {
      Comment result = commentsService.save(comment);
        if (result == null) {
        return new ResponseEntity(HttpStatus.SERVICE_UNAVAILABLE);
        }
        return new ResponseEntity(comment, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    public ResponseEntity findAllCommentsWithSurveyId(@PathVariable("id") Long id) {
        List<Comment> comments = this.commentsService.findAllWithSurveyId(id);
        if(comments == null) {
            return new ResponseEntity(HttpStatus.SERVICE_UNAVAILABLE);
        }
        return new ResponseEntity(comments, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(path = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        commentsService.delete(id);
    }

}