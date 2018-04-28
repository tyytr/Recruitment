package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Offer;
import com.recruitment.www.repo.OfferRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@Slf4j
public class OfferService {
    @Resource
    private OfferRepo offerRepo;


    public RestResp sendJob(Offer offer){
        Offer news = offerRepo.findByReleaseIdAndUserId(offer.getReleaseId(),offer.getUserId());
        if (null != news){
            return RestResp.success(1,"这条招聘信息已经投递",news);
        }else {
            offerRepo.save(offer);
            return RestResp.success(1,"投递成功");
        }
//        return RestResp.success(1,"投递成功");
    }


//    public RestResp searchById(Offer offer){
//        return offerRepo.findById(offer.getId());
//    }

}
