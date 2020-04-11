package com.buildabear.buildabear.web;

import com.buildabear.buildabear.model.Additions;
import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.BearSize;
import com.buildabear.buildabear.model.User;
import com.buildabear.buildabear.service.AdditionsService;
import net.bytebuddy.implementation.bytecode.Addition;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/additions")
public class AdditionsController {
    private final AdditionsService as;

    public AdditionsController(AdditionsService as) {
        this.as = as;
    }


    @GetMapping("/")
    public List<Additions> findAll(){
        return this.as.findAll();
    }
    @PostMapping("/add")
    public void saveAddition(@RequestParam String type, @RequestParam String color){
        this.as.saveAddition(type, color);
    }

}
