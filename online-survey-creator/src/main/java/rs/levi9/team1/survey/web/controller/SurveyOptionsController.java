package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.SurveyOptions;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.service.SurveyOptionsService;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SurveyOptionsController {

    private SurveyOptionsService surveyOptionService;

    @Autowired
    public SurveyOptionsController (SurveyOptionsService surveyOptionsService) {
        this.surveyOptionService = surveyOptionsService;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/options", method = RequestMethod.GET)
    public List<SurveyOptions> findAll() {
        return surveyOptionService.findAll();
    } // end findAll

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(path = "/options", method = RequestMethod.POST)
    public SurveyOptions save(@Valid @RequestBody SurveyOptions surveyOption) {
        return surveyOptionService.save(surveyOption);
    } // end save

}
