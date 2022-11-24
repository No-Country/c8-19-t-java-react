package com.sunny.holidays.controller;

import com.sunny.holidays.entity.Property;
import com.sunny.holidays.service.impl.PropertyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class PropertyController {

    @Autowired
    private PropertyServiceImpl propertyService;

    @GetMapping
    public ResponseEntity<List<Property>> getAll() {
        List<Property> propertyList = this.propertyService.getAll();
        return ResponseEntity.ok().body(propertyList);
    }

    @GetMapping("{id}")
    public ResponseEntity<Property> getById(@PathVariable Long id){
        Property property = this.propertyService.getById(id);
        return ResponseEntity.ok().body(property);
    }

    @PostMapping
    public ResponseEntity<Property> save(@RequestBody Property property){
        Property propertySaved = this.propertyService.save(property);
        return ResponseEntity.status(HttpStatus.CREATED).body(propertySaved);
    }

    @PutMapping("{id}")
    public ResponseEntity<Property> update(@PathVariable Long id, @RequestBody Property property){
        Property propertyUpdated = this.propertyService.update(id, property);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(propertyUpdated);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Property> delete(@PathVariable Long id){
        this.propertyService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
