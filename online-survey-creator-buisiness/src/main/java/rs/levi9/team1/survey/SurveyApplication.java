package rs.levi9.team1.survey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SurveyApplication {
    public static void main(String[] args) {
            SpringApplication.run(SurveyApplication.class, args);
    }
}
