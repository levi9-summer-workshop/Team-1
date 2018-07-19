package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.domain.SurveyAnswer;
import rs.levi9.team1.survey.repository.SurveyAnswerRepository;
import rs.levi9.team1.survey.repository.SurveyRepository;

import java.util.List;

@Transactional
@Service
public class SurveyAnswerService {

    private SurveyAnswerRepository surveyAnswerRepository;

    @Autowired
    public SurveyAnswerService(SurveyAnswerRepository surveyAnswerRepository) {
        this.surveyAnswerRepository = surveyAnswerRepository;
    }

    public List<SurveyAnswer> findAll() {
        return surveyAnswerRepository.findAll();
    }

    public SurveyAnswer save(SurveyAnswer surveyAnswer) {
        return surveyAnswerRepository.save(surveyAnswer);
    }

    public void delete(Long id) {
        surveyAnswerRepository.delete(id);
    }

    public SurveyAnswer findOne(Long id) {
        return surveyAnswerRepository.findOne(id);
    }


}