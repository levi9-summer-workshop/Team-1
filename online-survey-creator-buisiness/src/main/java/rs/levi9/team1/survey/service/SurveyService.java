package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.team1.survey.domain.Role;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.repository.SurveyRepository;
import rs.levi9.team1.survey.repository.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

}