package rs.levi9.team1.survey.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import rs.levi9.team1.survey.domain.SurveyStatus;
import rs.levi9.team1.survey.service.SurveyService;

import java.util.Date;

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
        this.surveyService.findAll()
                          .forEach(survey -> {
                              if (survey.getSurveyExpireDate() != null) {
                                  if (survey.getSurveyExpireDate().before(now)) {
                                      survey.setSurveyStatus(new SurveyStatus(SurveyStatus.SurveyStatusType.CLOSED));
                                      this.surveyService.save(survey);
                                  }
                              }});
    }

    @Scheduled(fixedRate = 60000)
    public void testCloseExpiredSurveys() {
        // every second at 12PM check all surveys expire time and close surveys that are expired
        Date now = new Date();
        this.surveyService.findAll()
                .forEach(survey -> {
                    if (survey.getSurveyExpireDate() != null) {
                        if (survey.getSurveyExpireDate().before(now)) {
                            survey.setSurveyStatus(new SurveyStatus(SurveyStatus.SurveyStatusType.CLOSED));
                            this.surveyService.save(survey);
                        }
                    }});
    }
}
