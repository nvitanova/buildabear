package com.buildabear.buildabear.service;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.User;

public interface OrderService {
    void placeOrder(User u, Bear b);
}
