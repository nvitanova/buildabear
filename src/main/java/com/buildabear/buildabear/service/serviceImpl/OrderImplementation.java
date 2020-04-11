package com.buildabear.buildabear.service.serviceImpl;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.Order;
import com.buildabear.buildabear.model.User;
import com.buildabear.buildabear.repository.OrderRepository;
import com.buildabear.buildabear.service.OrderService;
import org.springframework.stereotype.Service;

@Service
public class OrderImplementation implements OrderService {
    private final OrderRepository orep;

    public OrderImplementation(OrderRepository orep) {
        this.orep = orep;
    }

    @Override
    public void placeOrder(User u, Bear b) {
        Order o = new Order(u, b);
        orep.save(o);
    }
}
