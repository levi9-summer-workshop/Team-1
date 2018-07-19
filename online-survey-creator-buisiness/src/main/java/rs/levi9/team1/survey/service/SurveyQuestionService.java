package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.team1.survey.domain.SurveyQuestion;
import rs.levi9.team1.survey.repository.SurveyQuestionRepository;

import java.util.List;

@Transactional
@Service
public class SurveyQuestionService {

    private SurveyQuestionRepository surveyQuestionRepository;

    @Autowired
    public SurveyQuestionService(SurveyQuestionRepository surveyQuestionRepository) {
        this.surveyQuestionRepository = surveyQuestionRepository;
    }

    public List<SurveyQuestion> findAll() {
        return surveyQuestionRepository.findAll();
    }

    public SurveyQuestion save(SurveyQuestion surveyQuestion) {
        return surveyQuestionRepository.save(surveyQuestion);
    }

    public void delete(Long id) {
        surveyQuestionRepository.delete(id);
    }

    public SurveyQuestion findOne(Long id) {
        return surveyQuestionRepository.findOne(id);
    }


}