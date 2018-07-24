package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.service.EmailService;

import javax.mail.MessagingException;

@RestController
@RequestMapping("email")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    private EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity sendEmail(@RequestBody SurveyUser user) {
        String text = "Thank you for registering on Online Survey creator";
        try {
            emailService.sendEmail(user.getEmail(),"Registration", text);
        } catch (MessagingException e) {
            System.err.println(e.getMessage());
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity("Message sent!", HttpStatus.OK);
    }
}
