package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Company;
import com.recruitment.www.entity.Offer;
import com.recruitment.www.entity.Release;
import com.recruitment.www.entity.User;
import com.recruitment.www.repo.CompanyRepo;
import com.recruitment.www.repo.OfferRepo;
import com.recruitment.www.repo.ReleaseRepo;
import com.recruitment.www.repo.UserRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@Slf4j
public class OfferService {
    @Resource
    private OfferRepo offerRepo;
    @Resource
    private UserRepo userRepo;
    @Resource
    private ReleaseRepo releaseRepo;


    public RestResp sendJob(Offer offer){
        Offer news = offerRepo.findByReleaseIdAndUserId(offer.getReleaseId(),offer.getUserId());
        if (null != news){
            return RestResp.success(1,"这条招聘信息已经投递",news);
        }else {
            offerRepo.save(offer);
            return RestResp.success(1,"投递成功");
        }
    }


//    public RestResp searchById(String ids){
//        List<Offer> result = offerRepo.findById(Long.valueOf(ids));
//        result.forEach(offer ->{
//            User user = userRepo.findOne(Long.parseLong(offer.getUserId()));
//            System.out.println(user+"1");
//
//            Release release = releaseRepo.findOne(Long.parseLong(offer.getReleaseId()));
//            System.out.println(release+"2");
//        });
//        return RestResp.success(1,"查询简历成功");
//    }

}
