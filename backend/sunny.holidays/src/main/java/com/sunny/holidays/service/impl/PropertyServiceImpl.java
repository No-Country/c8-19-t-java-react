package com.sunny.holidays.service.impl;

import com.sunny.holidays.entity.Property;
import com.sunny.holidays.repository.PropertyRepository;
import com.sunny.holidays.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyServiceImpl implements PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Override
    public List<Property> getAll() {
        return this.propertyRepository.findAll();
    }

    @Override
    public Property getById(Long id) {
        Optional<Property> propertyOptional = this.propertyRepository.findById(id);
        return propertyOptional.get();
    }

    @Override
    public Property save(Property property) {
        return this.propertyRepository.save(property);
    }

    @Override
    public Property update(Long id, Property property) {
        Optional<Property> propertyOptional = this.propertyRepository.findById(id);

        property.setId(propertyOptional.get().getId());
        return this.propertyRepository.save(property);
    }

    @Override
    public void delete(Long id) {
        this.propertyRepository.deleteById(id);
    }
}
