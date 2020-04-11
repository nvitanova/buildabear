package com.buildabear.buildabear.repository;

import com.buildabear.buildabear.model.Bear;
import com.buildabear.buildabear.model.BearSize;
import com.buildabear.buildabear.model.Clothes;
import com.buildabear.buildabear.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BearRepository extends JpaRepository<Bear, String> {
    List<Bear> findAll();
    Bear findByName(String name);
    List<Bear> findByCreator(User creator);
    @Modifying
    @Query(value = "UPDATE buildabear.bear b set name = :name , animal = :animal , color = :color, size= :size, obleka_id =:clothes where name = :name", nativeQuery = true)
    void editBear(String name, String animal, String color, String size, Long clothes);



}
