package com.example.myclubapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AddcollegeRepository extends CrudRepository<Addcollege, Long> {
   List<Addcollege> findByCollegeName(@Param("collegename") String collegename);
}