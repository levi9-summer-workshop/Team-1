package rs.levi9.team1.survey.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import rs.levi9.team1.survey.domain.Survey;
import rs.levi9.team1.survey.domain.SurveyStatus;
import rs.levi9.team1.survey.service.SurveyService;

import java.util.Date;
import java.util.List;

@Component
public class ScheduledTasks {

    private SurveyService surveyService;

    @Autowired
    public ScheduledTasks(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @Scheduled(cron = "0 0 12 * * ?")
    public void closeExpiredSurveys() {
        // every day at 12PM check all surveys expire time and close surveys that are expired
        Date now = new Date();
        SurveyStatus statusClosed = new SurveyStatus(SurveyStatus.SurveyStatusType.CLOSED);
        statusClosed.setId(2L);
        List<Survey> surveys =  this.surveyService.findAllOpenedSurveys();
        surveys.forEach(survey -> {
            if (survey.getSurveyExpireDate() != null) {
                if (survey.getSurveyExpireDate().before(now)) {
                    Survey update = survey;
                    update.setSurveyStatus(statusClosed);
                    surveyService.saveAndFlush(update);
                }
              }});
    }

    @Scheduled(fixedRate = 60000)
    public void testCloseExpiredSurveys() {
        // every second check all surveys expire time and close surveys that are expired
        Date now = new Date();
        SurveyStatus statusClosed = new SurveyStatus(SurveyStatus.SurveyStatusType.CLOSED);
        statusClosed.setId(2L);
        surveyService.findAllOpenedSurveys().forEach(survey -> {
            if (survey.getSurveyExpireDate() != null) {
                if (survey.getSurveyExpireDate().before(now)) {
                    Survey update = survey;
                    update.setSurveyStatus(statusClosed);
                    surveyService.saveAndFlush(update);
                }
            }});

    }
}
