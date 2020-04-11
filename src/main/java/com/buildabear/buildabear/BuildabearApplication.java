package com.buildabear.buildabear;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EnableJpaRepositories
public class BuildabearApplication {

    public static void main(String[] args) {
        SpringApplication.run(BuildabearApplication.class, args);
    }

}
