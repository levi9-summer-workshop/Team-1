package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.AuthenticatedUser;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.service.SurveyUserService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private SurveyUserService surveyUserService;

    @RequestMapping("user")
    public AuthenticatedUser getUser(Authentication authentication) {
        List<String> roles = new ArrayList<>();
        for (GrantedAuthority authority : authentication.getAuthorities() ) {
            roles.add(authority.getAuthority() );
        } // end for
        AuthenticatedUser user = new AuthenticatedUser( authentication.getName(), roles );
        return user;
    } // end getUser

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<SurveyUser> findAll() {
            return surveyUserService.findAll();
    } // end findAll

    @RequestMapping(path = "/users/{id}", method = RequestMethod.GET)
    public ResponseEntity findOne(@PathVariable("id") Long id) {
        SurveyUser surveyUser = surveyUserService.findOne(id);
        if (surveyUser == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } // end if

        return new ResponseEntity(surveyUser, HttpStatus.OK);
    } // end findOne

    @RequestMapping(method = RequestMethod.POST)
    public SurveyUser save(@Valid @RequestBody SurveyUser surveyUser) {
        return surveyUserService.save(surveyUser);
    } // end save

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "/users/{id}", method = RequestMethod.DELETE)
    public ResponseEntity delete(@PathVariable("id") Long id) {
        surveyUserService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    } // end delete

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    @RequestMapping(method = RequestMethod.PUT)
    public SurveyUser update(@Valid @RequestBody SurveyUser surveyUser) {
        return surveyUserService.save(surveyUser);
    } // end update

} // end UserController
