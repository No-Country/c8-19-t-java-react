package com.sunny.holidays.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Getter
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private Double price;

    @OneToMany(mappedBy = "property", cascade = CascadeType.MERGE)
    private Set<Comment> comments = new HashSet<>();

    @OneToMany(mappedBy = "property", cascade = CascadeType.MERGE)
    private Set<Reservation> reservations = new HashSet<>();

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
        for (Comment comment : comments){
            comment.setProperty(this);
        }
    }

    public Set<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(Set<Reservation> reservations) {
        this.reservations = reservations;
        for (Reservation reservation : reservations){
            reservation.setProperty(this);
        }
    }
}
