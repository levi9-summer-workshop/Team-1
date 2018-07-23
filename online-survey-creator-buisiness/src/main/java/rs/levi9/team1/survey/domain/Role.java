package rs.levi9.team1.survey.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "survey_user_role")
public class Role extends BaseEntity {

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleType type;

    public Role() {
        this.type = RoleType.ROLE_USER;
    }

    public Role(RoleType type) {
        this.type = type;
    }

    public RoleType getType() {
        return type;
    }

    public void setType(RoleType type) {
        this.type = type;
    }

    public enum RoleType {
        ROLE_USER, ROLE_ADMIN
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Role role = (Role) o;

        return type == role.type;
    }

    @Override
    public int hashCode() {
        return type.hashCode();
    }

    @Override
    public String toString() {
        return "Role{" +
                "type=" + type +
                '}';
    }
}
