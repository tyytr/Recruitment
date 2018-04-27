package com.recruitment.www.repo;

import com.recruitment.www.entity.JobOffers;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JobOffersRepo extends CrudRepository<JobOffers,Long> {


    JobOffers findByReleaseAndAndUser(String release, String user);

}
