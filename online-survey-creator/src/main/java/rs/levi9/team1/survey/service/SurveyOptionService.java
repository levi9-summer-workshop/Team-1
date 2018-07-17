package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.team1.survey.repository.SurveyOptionRepository;

@Service
public class SurveyOptionService {

    private SurveyOptionRepository surveyOptionRepository;

    @Autowired
    public SurveyOptionService(SurveyOptionRepository surveyOptionRepository) {
        this.surveyOptionRepository = surveyOptionRepository;
    }

}
