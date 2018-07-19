package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
public class SurveyUser extends BaseEntity {

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @NotNull
    private Boolean blocked = false;

    @OneToMany(mappedBy = "surveyUser", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Survey> surveys = new ArrayList<>();

    @ManyToMany
    @JoinTable(joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = Stream.of(new Role(Role.RoleType.ROLE_USER)).collect(Collectors.toSet());

    public SurveyUser() {
    }

    public SurveyUser(String username, String email, String password, Boolean blocked, List<Survey> surveys, Set<Role> roles) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.blocked = blocked;
        this.surveys = surveys;
        this.roles = roles;
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
}