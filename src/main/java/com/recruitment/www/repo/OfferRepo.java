package com.recruitment.www.repo;

import com.recruitment.www.entity.Offer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OfferRepo extends CrudRepository<Offer,Long> {

    Offer findByReleaseIdAndUserId(String releaseId,String userId);

    Offer findById(Long id);

}
