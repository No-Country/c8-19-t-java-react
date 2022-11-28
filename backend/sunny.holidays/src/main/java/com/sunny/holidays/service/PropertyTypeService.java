package com.sunny.holidays.service;

import com.sunny.holidays.entity.PropertyType;

import java.util.List;

public interface PropertyTypeService {

    List<PropertyType> getAll();
    PropertyType getById(Long id);
    PropertyType save(PropertyType propertyType);
    PropertyType update(Long id, PropertyType propertyType);
    void delete(Long id);
}
