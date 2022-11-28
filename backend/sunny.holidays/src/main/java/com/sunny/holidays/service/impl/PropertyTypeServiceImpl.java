package com.sunny.holidays.service.impl;

import com.sunny.holidays.entity.PropertyType;
import com.sunny.holidays.repository.PropertyTypeRepository;
import com.sunny.holidays.service.PropertyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyTypeServiceImpl implements PropertyTypeService {

    @Autowired
    private PropertyTypeRepository propertyTypeRepository;

    @Override
    public List<PropertyType> getAll() {
        return this.propertyTypeRepository.findAll();
    }

    @Override
    public PropertyType getById(Long id) {
        Optional<PropertyType> propertyTypeOptional = this.propertyTypeRepository.findById(id);
        return propertyTypeOptional.get();
    }

    @Override
    public PropertyType save(PropertyType propertyType) {
        return this.propertyTypeRepository.save(propertyType);
    }

    @Override
    public PropertyType update(Long id, PropertyType propertyType) {
        Optional<PropertyType> propertyTypeOptional = this.propertyTypeRepository.findById(id);

        propertyType.setId(propertyTypeOptional.get().getId());
        return this.propertyTypeRepository.save(propertyType);
    }

    @Override
    public void delete(Long id) {
        this.propertyTypeRepository.deleteById(id);
    }
}
