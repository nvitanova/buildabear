package com.buildabear.buildabear.repository;

import com.buildabear.buildabear.model.Additions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdditionsRepository extends JpaRepository<Additions, Long> {
        List<Additions> findAll();

}
