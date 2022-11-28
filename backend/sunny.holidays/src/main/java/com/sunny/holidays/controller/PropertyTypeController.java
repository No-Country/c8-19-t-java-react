package com.sunny.holidays.controller;

import com.sunny.holidays.entity.PropertyType;
import com.sunny.holidays.service.impl.PropertyTypeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/property/types")
public class PropertyTypeController {

    @Autowired
    private PropertyTypeServiceImpl propertyTypeService;

    @GetMapping("/")
    public ResponseEntity<List<PropertyType>> getAll(){
        List<PropertyType> propertyTypeList = this.propertyTypeService.getAll();
        return ResponseEntity.ok().body(propertyTypeList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PropertyType> getById(@PathVariable Long id){
        PropertyType propertyType = this.propertyTypeService.getById(id);
        return ResponseEntity.ok().body(propertyType);
    }

    @PostMapping("/")
    public ResponseEntity<PropertyType> save(@RequestBody PropertyType propertyType){
        PropertyType propertyTypeSaved = this.propertyTypeService.save(propertyType);
        return ResponseEntity.status(HttpStatus.CREATED).body(propertyTypeSaved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PropertyType> update(@PathVariable Long id, @RequestBody PropertyType propertyType){
        PropertyType propertyTypeUpdated = this.propertyTypeService.update(id, propertyType);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(propertyTypeUpdated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PropertyType> delete(@PathVariable Long id){
        this.propertyTypeService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
