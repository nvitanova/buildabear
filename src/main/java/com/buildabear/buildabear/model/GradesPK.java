package com.buildabear.buildabear.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class GradesPK implements Serializable {
    @Column(name = "user_id")
    private String user_id;
    @Column(name = "bear_id")
    private String bear_name;


}
