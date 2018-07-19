package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.service.SurveyService;

import javax.validation.Valid;
import java.util.List;

@RestController
public class SurveyController {

    private SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @RequestMapping(path = "surveys", method = RequestMethod.GET)
    public List<Survey> findAllSurveys() {
        return this.surveyService.findAll();
    }

    @RequestMapping(path = "surveys", method = RequestMethod.POST)
    public Survey save(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }

    @RequestMapping(path = "surveys", method = RequestMethod.PUT)
    public Survey update(@Valid @RequestBody Survey survey) {
        return surveyService.save(survey);
    }

    @RequestMapping(path = "surveys/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        surveyService.delete(id);
    }

    @RequestMapping(path = "surveys/{id}", method = RequestMethod.GET)
    public ResponseEntity findById(@PathVariable("id") Long id) {
        Survey survey = surveyService.findOne(id);
        if (survey == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(survey, HttpStatus.OK);
    }

    @RequestMapping(path = "surveys/user/{id}", method = RequestMethod.GET)
    public List<Survey> findAllBySurveyUserId(@PathVariable("id") Long id) {
        return surveyService.findAllBySurveyUserId(id);
    }
}