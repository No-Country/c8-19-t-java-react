package com.sunny.holidays.service;


import com.sunny.holidays.entity.Property;

import java.util.List;

public interface PropertyService  {

    List<Property> getAll();
    Property getById(Long id);
    Property save(Property property);
    Property update(Long id, Property property);
    void delete(Long id);

}
