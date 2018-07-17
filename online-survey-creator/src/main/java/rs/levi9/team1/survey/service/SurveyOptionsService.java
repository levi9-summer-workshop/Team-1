package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.team1.survey.domain.SurveyOptions;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.repository.SurveyOptionsRepository;

import java.util.List;

@Service
public class SurveyOptionsService {

    private SurveyOptionsRepository surveyOptionsRepository;

    @Autowired
    public SurveyOptionsService(SurveyOptionsRepository surveyOptionsRepository) {
        this.surveyOptionsRepository = surveyOptionsRepository;
    }

    public List<SurveyOptions> findAll() {
        return surveyOptionsRepository.findAll();
    } // end findAll


    public SurveyOptions save(SurveyOptions surveyOption) {
        return surveyOptionsRepository.save(surveyOption);
    } // end save

}
