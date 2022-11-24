package com.sunny.holidays.service;

import com.sunny.holidays.entity.Reservation;

import java.util.List;

public interface ReservationService {

    List<Reservation> getAll();
    Reservation getById(Long id);
    Reservation save(Reservation reservation);
    Reservation update(Long id, Reservation reservation);
    void delete(Long id);

}
