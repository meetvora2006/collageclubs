package com.example.myclubapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AddreviewRepository extends CrudRepository<Addreview, Long> {
   List<Addreview> findByClbId(@Param("clbid") Long clbid);
   //List<Addclub> findById(@Param("id") Long id);
} 