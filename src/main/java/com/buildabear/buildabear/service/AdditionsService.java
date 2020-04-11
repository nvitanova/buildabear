package com.buildabear.buildabear.service;

import com.buildabear.buildabear.model.Additions;
import org.springframework.stereotype.Service;

import java.util.List;

public interface AdditionsService {
    List<Additions> findAll();
    void saveAddition(String type, String color);
}
