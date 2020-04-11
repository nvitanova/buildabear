package com.buildabear.buildabear.web;

import com.buildabear.buildabear.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/register")
public class UserController {
    private final UserService us;

    public UserController(UserService us) {
        this.us = us;
    }
    @PostMapping
    public void addUser(@RequestParam String username,
                        @RequestParam String name,
                        @RequestParam String last_name,
                        @RequestParam String password,
                        @RequestParam String address,
                        @RequestParam String Email){
        this.us.addUser(username, name, last_name, password, address, Email);

    }
}
