package com.buildabear.buildabear.service;

import com.buildabear.buildabear.model.*;

import java.util.List;

public interface GradesService {
    void saveGrade(User user, Bear bear, float grade);


    List<Grades> findByUser(User user);



    void editGrade(User user, Bear bear, float grade);

    void deleteGrade(String username, String name);
}
