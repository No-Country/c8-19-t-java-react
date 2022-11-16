package com.sunny.holidays.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/welcome")
public class WelcomeController {
    @GetMapping()
    public String helloWorld(){
        return "Bienvenido, proximamente tendremos los productos agregados";
    }
}
