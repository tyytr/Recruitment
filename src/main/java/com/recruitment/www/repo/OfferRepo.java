package com.recruitment.www.repo;

import com.recruitment.www.entity.Offer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OfferRepo extends CrudRepository<Offer,Long> {

    Offer findByReleaseIdAndUserId(String releaseId,String userId);

    List<Offer> findById(Long id);


    List<Offer> findByReleaseId(String releaseId);

}
