package com.buildabear.buildabear.service.serviceImpl;

import com.buildabear.buildabear.model.*;

import com.buildabear.buildabear.repository.BearRepository;
import com.buildabear.buildabear.service.BearService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BearImplementation implements BearService {
    private BearRepository bearRepository;
    public BearImplementation(BearRepository br){
        this.bearRepository = br;
    }
    @Override
    public void saveBear(String name, String animal, String color, BearSize size, User creator, List<Additions> additions, Clothes clothes) {

        Bear bear = new Bear(name, animal, color, size, creator, additions, clothes);
        bearRepository.save(bear);


    }

    @Override
    public List<Bear> findByCreator(User creator) {
        return bearRepository.findByCreator(creator);
    }

    @Override
    public Bear findByName(String name) {

        return bearRepository.findByName(name);
    }

    @Override
    public List<Bear> getAll() {
        return bearRepository.findAll();
    }
    @Transactional
    @Override
    public void editBear(String name, String animal, String color, BearSize size, Clothes clothes) {
        bearRepository.editBear(name, animal, color, size.name(), clothes.getId());
    }

    @Override
    public void deleteBear(String name) {
        bearRepository.deleteById(name);

    }
}
