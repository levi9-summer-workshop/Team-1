package rs.levi9.team1.survey.domain;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class Role extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private RoleType type;

    public RoleType getType() {
        return type;
    } // end getType

    public void setType(RoleType type) {
        this.type = type;
    } // end setType

    public enum RoleType {
        ROLE_USER, ROLE_ADMIN
    }

} // end class Role
