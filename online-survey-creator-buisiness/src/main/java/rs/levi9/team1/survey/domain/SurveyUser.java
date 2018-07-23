package rs.levi9.team1.survey.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.*;

@Entity
public class SurveyUser extends BaseEntity {

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private Boolean blocked = false;

    @OneToMany(mappedBy = "surveyUser", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @Transient
    private List<Survey> surveys = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(joinColumns = @JoinColumn(name = "fk_survey_user"),
            inverseJoinColumns = @JoinColumn(name = "fk_survey_user_role"))
    private Set<Role> roles = new HashSet<>(Arrays.asList(new Role(Role.RoleType.ROLE_USER)));

    public SurveyUser() {
    }

    public SurveyUser(String username, String email, String password, Boolean blocked,List<Survey> surveys, Set<Role> roles) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.blocked = blocked;
        this.roles = roles;
        this.surveys = surveys;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getBlocked() {
        return blocked;
    }

    public void setBlocked(Boolean blocked) {
        this.blocked = blocked;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Survey> getSurveys() {
        return surveys;
    }

    public void setSurveys(List<Survey> surveys) {
        this.surveys = surveys;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SurveyUser that = (SurveyUser) o;

        if (!username.equals(that.username)) return false;
        if (!email.equals(that.email)) return false;
        return password.equals(that.password);
    }

    @Override
    public int hashCode() {
        int result = username.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + password.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "SurveyUser{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", blocked=" + blocked +
                ", roles=" + roles +
                '}';
    }
}