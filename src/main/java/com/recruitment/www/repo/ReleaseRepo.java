package com.recruitment.www.repo;

import com.recruitment.www.entity.Release;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ReleaseRepo extends CrudRepository<Release,Long> {
    List<Release> findAll();

    @Query(value = "SELECT * FROM tbl_release WHERE education LIKE %?1% OR username LIKE %?1% OR position LIKE %?1% OR experience LIKE %?1% OR city LIKE %?1% OR salary LIKE %?1%",nativeQuery = true)
    List<Release> findByIdLikeAndAble(String id);
}
