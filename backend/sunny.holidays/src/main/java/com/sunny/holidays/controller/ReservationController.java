package com.sunny.holidays.controller;

import com.sunny.holidays.entity.Reservation;
import com.sunny.holidays.service.impl.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationServiceImpl reservationService;

    @GetMapping("/")
    public ResponseEntity<List<Reservation>> getAll(){
        List<Reservation> reservationList = this.reservationService.getAll();
        return ResponseEntity.ok().body(reservationList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getById(@PathVariable Long id){
        Reservation reservation = this.reservationService.getById(id);
        return ResponseEntity.ok().body(reservation);
    }

    @PostMapping("/")
    public ResponseEntity<Reservation> save(@RequestBody Reservation reservation){
        Reservation reservationSaved = this.reservationService.save(reservation);
        return ResponseEntity.status(HttpStatus.CREATED).body(reservationSaved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reservation> update(@PathVariable Long id, @RequestBody Reservation reservation){
        Reservation reservationUpdated = this.reservationService.update(id, reservation);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(reservationUpdated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Reservation> delete(@PathVariable Long id){
        this.reservationService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
