package com.buildabear.buildabear.service.serviceImpl;

import com.buildabear.buildabear.model.Clothes;
import com.buildabear.buildabear.repository.ClothesRepository;
import com.buildabear.buildabear.service.ClothesService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothesImplementation implements ClothesService {
    private final ClothesRepository cl;

    public ClothesImplementation(ClothesRepository cl) {
        this.cl = cl;
    }

    @Override
    public List<Clothes> findAll() {
        return cl.findAll();
    }

    @Override
    public void saveClothes(String type, String color, String decoration) {
        Clothes clothes = new Clothes(type, color, decoration);
        cl.save(clothes);
    }
}
