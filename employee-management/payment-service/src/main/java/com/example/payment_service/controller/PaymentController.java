package com.example.payment_service.controller;

import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    private final PaymentRepository repo;
    public PaymentController(PaymentRepository repo){this.repo = repo;}

    @PostMapping
    public Payment pay(@RequestBody Payment p){
        p.setTimestamp(Instant.now());
        return repo.save(p);
    }

    @GetMapping
    public List<Payment> all(){ return repo.findAll(); }
}