package com.sunny.holidays.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Setter
@Getter
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate startDate;
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate endDate;
    private Boolean state;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinColumn(name = "property_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Property property;

}
