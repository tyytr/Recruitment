package com.recruitment.www.repo;

import com.recruitment.www.entity.Release;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReleaseRepo extends CrudRepository<Release,Long> {
    List<Release> findAll();
}
