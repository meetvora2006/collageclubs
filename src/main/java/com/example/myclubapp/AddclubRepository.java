package com.example.myclubapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AddclubRepository extends CrudRepository<Addclub, Long> {
   List<Addclub> findByUserId(@Param("userid") Long userid);
   //List<Addclub> findById(@Param("id") Long id);
} 