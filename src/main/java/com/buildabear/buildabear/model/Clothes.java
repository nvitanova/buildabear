package com.buildabear.buildabear.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "clothes")
public class Clothes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String color;
    private String decoration;


    public Clothes(String type, String color, String decoration) {
        this.type=type;
        this.color=color;
        this.decoration=decoration;
    }
}
