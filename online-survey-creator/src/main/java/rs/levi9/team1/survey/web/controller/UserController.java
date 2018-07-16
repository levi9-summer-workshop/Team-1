package rs.levi9.team1.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import rs.levi9.team1.survey.domain.AuthenticatedUser;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.repository.UserRepository;
import rs.levi9.team1.survey.service.SurveyUserService;

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

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<SurveyUser> findAll() {
            return surveyUserService.findAll();
    } // end findAll

} // end UserController
