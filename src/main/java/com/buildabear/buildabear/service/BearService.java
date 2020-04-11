package com.buildabear.buildabear.service;

import com.buildabear.buildabear.model.*;


import java.util.List;

public interface BearService {
    void saveBear(String name, String animal, String color, BearSize size, User creator, List<Additions> additions, Clothes clothes);

    List<Bear> findByCreator(User creator);
    Bear findByName(String name);

    List<Bear> getAll();

    void editBear(String name, String animal, String color, BearSize size, Clothes clothes);

    void deleteBear(String name);

}
