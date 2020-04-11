package com.buildabear.buildabear.service.serviceImpl;

import com.buildabear.buildabear.model.Additions;
import com.buildabear.buildabear.repository.AdditionsRepository;
import com.buildabear.buildabear.service.AdditionsService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdditionsImplementation implements AdditionsService {
    private final AdditionsRepository ar;

    public AdditionsImplementation(AdditionsRepository ar) {
        this.ar = ar;
    }

    @Override
    public List<Additions> findAll() {
        return ar.findAll();
    }

    @Override
    public void saveAddition(String type, String color) {
        Additions ad = new Additions(type, color);
        ar.save(ad);
    }
}
