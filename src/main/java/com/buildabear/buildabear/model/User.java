package com.buildabear.buildabear.model;

import lombok.*;

import javax.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "user")
public class User {


    @Id
    private String username;
    private String name;
    private String last_name;
    private String password;
    private String address;
    private String Email;



    @OneToMany(mappedBy = "bear", cascade = {CascadeType.PERSIST})
    private Set<Grades> bears_graded = new HashSet<Grades>();

    public User(String username, String name, String last_name, String password, String address, String email) {
        this.username = username;
        this.name = name;
        this.last_name = last_name;
        this.password = password;
        this.address = address;
        Email = email;
    }
}
