package com.buildabear.buildabear.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = " grades")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Grades implements Serializable {
    @EmbeddedId
    private GradesPK id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("bear_name")
    @JoinColumn(name = "bear_id")
    private Bear bear;
    private float grade;
    public Grades(User user, Bear bear, float grade){
        this.id=new GradesPK(user.getUsername(), bear.getName());
        this.user=user;
        this.bear=bear;
        this.grade=grade;
    }


}
