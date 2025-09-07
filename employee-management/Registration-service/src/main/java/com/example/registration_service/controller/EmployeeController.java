package com.example.registration_service.controller;

import com.example.registration_service.entity.Employee;
import com.example.registration_service.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private final EmployeeRepository repo;
    public EmployeeController(EmployeeRepository repo){this.repo = repo;}

    @PostMapping
    public Employee create(@RequestBody Employee e){
        return repo.save(e);
    }

    @GetMapping
    public List<Employee> all(){ return repo.findAll(); }
}