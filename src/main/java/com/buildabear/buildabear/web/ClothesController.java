package com.buildabear.buildabear.web;

import com.buildabear.buildabear.model.Additions;
import com.buildabear.buildabear.model.Clothes;
import com.buildabear.buildabear.service.ClothesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/clothes")
public class ClothesController {
    private final ClothesService cs;

    public ClothesController(ClothesService cs) {
        this.cs = cs;
    }

    @GetMapping("/")
    public List<Clothes> findAll(){
        return this.cs.findAll();
    }
    @PostMapping("/add")
    public void saveAddition(@RequestParam String type, @RequestParam String color, @RequestParam String decoration){
        this.cs.saveClothes(type, color, decoration);
    }
}
