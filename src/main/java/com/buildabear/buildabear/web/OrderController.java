package com.buildabear.buildabear.web;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.User;
import com.buildabear.buildabear.service.OrderService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/createOrder")
public class OrderController {
    private final OrderService os;

    public OrderController(OrderService os) {
        this.os = os;
    }
    @PostMapping({"/{name}", ""})
    public void placeOrder( @RequestParam User u, @RequestParam Bear b){
        this.os.placeOrder(u, b);
    }
}
