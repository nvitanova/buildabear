package com.buildabear.buildabear.repository;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.Grades;
import com.buildabear.buildabear.model.GradesPK;
import com.buildabear.buildabear.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradesRepository extends JpaRepository<Grades, GradesPK> {


    List<Grades> findByUser(User user);
    @Modifying
    @Query(value = "UPDATE buildabear.grades b set bear_id = :bear , user_id = :user , grade = :grade where bear_id = :bear && user_id=:user", nativeQuery = true)
    void editGrade(String bear, String user, float grade);

}
