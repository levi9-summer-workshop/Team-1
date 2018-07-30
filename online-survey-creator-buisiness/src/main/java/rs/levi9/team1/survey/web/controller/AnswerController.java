package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.domain.SurveyAnswer;
import rs.levi9.team1.survey.service.SurveyAnswerService;
import rs.levi9.team1.survey.service.SurveyService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("answers")
@CrossOrigin(origins = "http://localhost:4200")
public class AnswerController {

    private SurveyAnswerService answersService;

    @Autowired
    public AnswerController(SurveyAnswerService answersService) {
        this.answersService = answersService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity findAllAnswers() {
        List<SurveyAnswer> answers = this.answersService.findAll();
        if(answers == null) {
            return new ResponseEntity(HttpStatus.SERVICE_UNAVAILABLE);
        }
        return new ResponseEntity(answers, HttpStatus.OK);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity submitResult(@RequestBody List<Long> ids) {
        System.err.println(ids);
       ids.forEach(id -> {
          SurveyAnswer answer = answersService.findOne(id);
          answer.setResult(answer.getResult()+1);
          answersService.save(answer);
       });
        return new ResponseEntity(HttpStatus.OK);
    }

}