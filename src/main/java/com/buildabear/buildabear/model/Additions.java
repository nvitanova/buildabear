package com.buildabear.buildabear.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "additions")
public class Additions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String type;
    @NotNull
    private String color;
    @ManyToMany(mappedBy = "additions", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST})
    @JsonBackReference
    private List<Bear> bears;

    public Additions(String type, String color) {
        this.type=type;
        this.color=color;
    }

}
