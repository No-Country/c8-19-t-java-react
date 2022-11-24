package com.sunny.holidays.service.impl;

import com.sunny.holidays.entity.Property;
import com.sunny.holidays.entity.Reservation;
import com.sunny.holidays.repository.PropertyRepository;
import com.sunny.holidays.repository.ReservationRepository;
import com.sunny.holidays.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public List<Reservation> getAll() {
        return this.reservationRepository.findAll();
    }

    @Override
    public Reservation getById(Long id) {
        Optional<Reservation> reservationOptional = this.reservationRepository.findById(id);
        return reservationOptional.get();
    }

    @Override
    public Reservation save(Reservation reservation) {
        return this.reservationRepository.save(reservation);
    }

    @Override
    public Reservation update(Long id, Reservation reservation) {
        Optional<Reservation> reservationOptional = this.reservationRepository.findById(id);

        reservation.setId(reservationOptional.get().getId());
        return this.reservationRepository.save(reservation);
    }

    @Override
    public void delete(Long id) {
        this.reservationRepository.deleteById(id);
    }
}
