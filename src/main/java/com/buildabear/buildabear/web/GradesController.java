package com.buildabear.buildabear.web;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.Grades;
import com.buildabear.buildabear.model.GradesPK;
import com.buildabear.buildabear.model.User;
import com.buildabear.buildabear.service.GradesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/opinions")
public class GradesController {
    private final GradesService gs;

    public GradesController(GradesService gs) {
        this.gs = gs;
    }
    @PostMapping("/{name}/rate")
    public void saveGrade(@PathVariable String name, @RequestParam User user, @RequestParam Bear bear, @RequestParam float grade){
        this.gs.saveGrade(user, bear, grade);
    }
    @GetMapping("")
    public List<Grades> findGradesByUser(@RequestParam User u){
        return this.gs.findByUser(u);

    }
    @PatchMapping("/{name}/editOpinion")
    public void editGrade(@PathVariable String name, @RequestParam User user, @RequestParam Bear bear, @RequestParam float grade){
        this.gs.editGrade(user, bear, grade);
    }
    @DeleteMapping("/{name}/delete")
    public void deleteOpinion(@PathVariable String name){
        this.gs.deleteGrade("natv", name);
    }
}
