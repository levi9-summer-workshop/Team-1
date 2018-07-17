package rs.levi9.team1.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rs.levi9.team1.survey.domain.Role;
import rs.levi9.team1.survey.domain.SurveyUser;
import rs.levi9.team1.survey.repository.UserRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Transactional
@Service
public class SurveyUserService implements UserDetailsService {


    private UserRepository userRepository;

    @Autowired
    public SurveyUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            SurveyUser user = userRepository.findByUsername(username);
            if (user == null) {
                return null;
            } // end if

            return new User(user.getUsername(), user.getPassword(), getAuthorities(user) );
        } // end try
        catch (Exception e) {
            throw new UsernameNotFoundException("User not found");
        } // end catch
    } // end loadUserByUsername

    private Set<GrantedAuthority> getAuthorities(SurveyUser user) {
        Set<GrantedAuthority> authorities = new HashSet<>();
        for ( Role role : user.getRoles() ) {
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority( role.getType().toString() );
            authorities.add(grantedAuthority);
        } // end for loop
        return authorities;
    } // end getAuthorities

    public List<SurveyUser> findAll() {
        return userRepository.findAll();
    } // end findAll

    public SurveyUser findOne(Long id) {
        return userRepository.findOne(id);
    } // end findOne

    public SurveyUser save(SurveyUser surveyUser) {
        return userRepository.save(surveyUser);
    } // end save

    public void delete(Long id) {
        userRepository.delete(id);
    } // end delete

} // end class UserService
