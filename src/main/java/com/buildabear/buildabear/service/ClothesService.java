package com.buildabear.buildabear.service;

import com.buildabear.buildabear.model.Additions;
import com.buildabear.buildabear.model.Clothes;

import java.util.List;

public interface ClothesService {
    List<Clothes> findAll();
    void saveClothes(String type, String color, String decoration);
}
