package com.buildabear.buildabear.service.serviceImpl;

import com.buildabear.buildabear.model.User;

import com.buildabear.buildabear.repository.UserRepository;
import com.buildabear.buildabear.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserImplementation implements UserService {
    private final UserRepository us;

    public UserImplementation(UserRepository us) {
        this.us = us;
    }


    @Override
    public void addUser(String username, String name, String last_name, String password, String address, String Email) {
        User u = new User(username, name, last_name, password, address, Email);
        us.save(u);
    }
}
