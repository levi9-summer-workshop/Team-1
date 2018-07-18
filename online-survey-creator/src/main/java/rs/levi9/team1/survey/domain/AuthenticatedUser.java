package rs.levi9.team1.survey.domain;

import java.util.List;

public class AuthenticatedUser {
    private String username;
    private List<String> roles;

    public AuthenticatedUser() {

    } // end constructor

    public AuthenticatedUser(String username, List<String> roles) {
        this.username = username;
        this.roles = roles;
    } // end constructor

    public String getUsername() {
        return username;
    } // end getUsername

    public void setUsername(String username) {
        this.username = username;
    } // end setUsername

    public List<String> getRoles() {
        return roles;
    } // end getRoles

    public void setRoles(List<String> roles) {
        this.roles = roles;
    } // end setRoles

} // end class AuthenticatedUser
