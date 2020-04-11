package com.buildabear.buildabear.repository;

import com.buildabear.buildabear.model.Additions;
import com.buildabear.buildabear.model.Clothes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClothesRepository extends JpaRepository<Clothes, Long> {
    List<Clothes> findAll();
}
