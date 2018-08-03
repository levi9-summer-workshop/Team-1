package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.service.EmailService;
import rs.levi9.team1.survey.service.SurveyUserService;

import javax.mail.MessagingException;

@RestController
@RequestMapping("email")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    private EmailService emailService;
    private SurveyUserService userService;

    @Autowired
    public EmailController(EmailService emailService, SurveyUserService userService) {
        this.emailService = emailService;
        this.userService = userService;
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity sendEmail(@RequestBody SurveyUser user) {
        String messageText = "Thank you for registering on Online Survey creator";
        String subject = "Registration";
        try {
            emailService.sendEmail(user.getEmail(), subject, messageText);
            return new ResponseEntity(HttpStatus.OK);
        } catch (MessagingException e) {
            System.err.println(e.getMessage());
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(path = "forgotten", method = RequestMethod.POST)
    public ResponseEntity sendForgottenPasswordEmail(@RequestBody String email) {
        SurveyUser user = userService.findByEmail(email);
        if (user == null) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        String messageText = "Username: "+user.getUsername()+"\nPassword: "+user.getPassword();
        String subject = "Forgotten username or password";
        try {
            emailService.sendEmail(user.getEmail(), subject, messageText);
            return new ResponseEntity(HttpStatus.OK);
        } catch (MessagingException e) {
            System.err.println(e.getMessage());
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }
}
