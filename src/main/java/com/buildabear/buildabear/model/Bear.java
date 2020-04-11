package com.buildabear.buildabear.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "bear")
public class Bear {

    @Id
    private String name;
    private String animal;
    private String color;
    @Enumerated(EnumType.STRING)
    private BearSize size; //XS, S, L, XL
    @ManyToMany(fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Additions> additions;
    @ManyToOne
    private User creator;
    @ManyToOne
    private Clothes obleka;
    @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL}, fetch = FetchType.LAZY)
    private Set<Grades> users_graded = new HashSet<>();

    public Bear(String name, String animal, String color, BearSize size, User creator, List<Additions> additions, Clothes clothes) {
        this.name = name;
        this.animal = animal;
        this.color = color;
        this.size = size;
        this.creator = creator;
        this.additions = additions;
        this.obleka = clothes;
    }}