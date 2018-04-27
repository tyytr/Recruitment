package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.JobOffers;
import com.recruitment.www.repo.JobOffersRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@Slf4j
public class JobOffersService {
    @Resource
    private JobOffersRepo jobOffersRepo;



    public RestResp sendJob(JobOffers jobOffers){
        JobOffers news = jobOffersRepo.findByReleaseAndAndUser(jobOffers.getRelease(),jobOffers.getUser());
        if (null != news){
            return RestResp.success(1,"这条招聘信息已经投递",news);
        }else {
            jobOffersRepo.save(jobOffers);
            return RestResp.success(1,"投递成功");
        }

    }

}
