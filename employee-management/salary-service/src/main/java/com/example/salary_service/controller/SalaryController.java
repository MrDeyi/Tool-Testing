package com.example.salary_service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/salary")
public class SalaryController {
    private final RestTemplate rest = new RestTemplate();
    private final String registrationBase = System.getenv().getOrDefault("REGISTRATION_BASE_URL","http://registration-service:8080");

    @GetMapping("/calculate")
    public List<Map> calculate(){
        String url = registrationBase + "/api/employees";
        List<Map> employees = rest.getForObject(url, List.class);
        for(Map e : employees){
            double base = ((Number)e.get("baseSalary")).doubleValue();
            e.put("calculatedSalary", base * 1.2); // e.g. add 20% bonus
        }
        return employees;
    }
}
