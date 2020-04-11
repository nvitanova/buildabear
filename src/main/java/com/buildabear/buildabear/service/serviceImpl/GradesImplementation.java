package com.buildabear.buildabear.service.serviceImpl;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.Grades;
import com.buildabear.buildabear.model.GradesPK;
import com.buildabear.buildabear.model.User;
import com.buildabear.buildabear.repository.GradesRepository;
import com.buildabear.buildabear.service.GradesService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
public class GradesImplementation implements GradesService {
    private GradesRepository gr;
    public GradesImplementation(GradesRepository gr){
        this.gr = gr;
    }

    @Override
    public void saveGrade(User user, Bear bear, float grade) {
        Grades grades = new Grades(user, bear, grade);
        gr.save(grades);
    }

    @Override
    public List<Grades> findByUser(User user) {
        return gr.findByUser(user);
    }


    @Transactional
    @Override
    public void editGrade(User user, Bear bear, float grade) {


        gr.editGrade(bear.getName(), user.getUsername(), grade);
    }

    @Override
    public void deleteGrade(String username, String name) {

        GradesPK id = new GradesPK(username, name);
        gr.deleteById(id);
    }
}
