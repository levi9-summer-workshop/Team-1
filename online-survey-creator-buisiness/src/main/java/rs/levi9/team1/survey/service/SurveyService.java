package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.team1.survey.domain.*;
import rs.levi9.team1.survey.repository.SurveyRepository;

import java.util.List;

@Transactional
@Service
public class SurveyService  {


    private SurveyRepository surveyRepository;

    @Autowired
    public SurveyService(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    public List<Survey> findAll() {
        return surveyRepository.findAll();
    }

    public Survey save(Survey survey) {
        return surveyRepository.save(survey);
    }

    public void delete(Long id) {
        surveyRepository.delete(id);
    }

    public Survey findOne(Long id) {
        return surveyRepository.findOne(id);
    }

    public List<Survey> findAllBySurveyUserId(Long id) {
        return surveyRepository.findAllBySurveyUserId(id);
    }

    public List<Survey> searchSurveysByDescription(String searchQuery) {
        return surveyRepository.findAllBySurveyDescriptionContainingIgnoreCase(searchQuery);
    }

    public List<Survey> findAllPublicSurveys() {
        return surveyRepository.findAllBySurveyPrivacyPrivacyType(SurveyPrivacy.PrivacyType.PUBLIC);
    }

    public List<Survey> findAllOpenedSurveys() {
        return surveyRepository.findAllBySurveyStatusSurveyStatusType(SurveyStatus.SurveyStatusType.OPEN);
    }

    public List<Survey> findAllClosedSurveys() {
        return surveyRepository.findAllBySurveyStatusSurveyStatusType(SurveyStatus.SurveyStatusType.CLOSED);
    }

    public void deleteBySurveyUserId(Long id) {
        surveyRepository.deleteBySurveyUserId(id);
    }


}