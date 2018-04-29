package com.recruitment.www.repo;

import com.recruitment.www.entity.Offer;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface OfferRepo extends CrudRepository<Offer,Long> {

    Offer findByReleaseIdAndUserId(String releaseId,String userId);

//    List<Offer> findById(Long id);
    @Modifying
    @Transactional
    @Query(value = "SELECT * FROM tbl_offer WHERE release_id = ?1",nativeQuery = true)
    List<Offer> findByReleaseId(String releaseId);

//    List<Offer> findByReleaseId(String release_id);

}
