package com.buildabear.buildabear.web;

import com.buildabear.buildabear.model.*;

import com.buildabear.buildabear.service.BearService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/")
public class BearController {
    private final BearService bs;

    public BearController(BearService bs) {
        this.bs = bs;
    }
    @GetMapping("/explore")
    public List<Bear> getAll(){
        return this.bs.getAll();
    }
    @GetMapping("/mybears")
    public List<Bear> findBearsByCreator(@RequestParam User user){
        return this.bs.findByCreator(user);
    }
    @PostMapping("mybears/add")
    public void saveBear(@RequestParam String name,
                         @RequestParam String animal,
                         @RequestParam String color,
                         @RequestParam BearSize size,
                         @RequestParam User creator,
                         @RequestParam List<Additions> additions,
                        @RequestParam Clothes clothes) {
        this.bs.saveBear(name, animal, color, size, creator, additions, clothes);
    }
    @GetMapping("/mybears/get/bear")
    public Bear findByName( @RequestParam String bear){
        return this.bs.findByName(bear);
    }
    @PatchMapping("/mybears/{name}/edit")
    public void editBear(@PathVariable String name, @RequestParam String animal, @RequestParam String color, @RequestParam BearSize size, Clothes clothes) {
        this.bs.editBear(name, animal,color,size , clothes);
    }
    @DeleteMapping("/mybears/{name}/delete")
    public void deleteBear(@PathVariable String name){
        this.bs.deleteBear(name);
    }
}
