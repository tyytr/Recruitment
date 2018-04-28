package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Offer;
import com.recruitment.www.entity.Release;
import com.recruitment.www.entity.ReleaseVO;
import com.recruitment.www.entity.User;
import com.recruitment.www.repo.OfferRepo;
import com.recruitment.www.repo.ReleaseRepo;
import com.recruitment.www.repo.UserRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ReleaseService {
    @Resource
    private ReleaseRepo releaseRepo;

    @Resource
    private OfferRepo offerRepo;

    @Resource
    private UserRepo userRepo;

    public RestResp addRelease(Release release){

        Release currentRelease = releaseRepo.findOne(release.getRelease_id());

        if (null != currentRelease){
            releaseRepo.save(release);
            return RestResp.success("发布招聘信息成功");
        }else {
            releaseRepo.save(release);
            return RestResp.success("发布招聘信息成功");
        }
    }

    public RestResp listAll(){
        List<Release> Release = releaseRepo.findAll();
        Release.forEach(release -> {
            if ( null == release.getKey() || release.getKey() != release.getId().toString() ){
                release.setKey(release.getId().toString());
                releaseRepo.save(release);
            }
        });
        return RestResp.success(1,"查询公司发布的招聘信息成功",Release);
    }

    /**
     * 查询招聘信息
     * @param
     * @return
     */
    public RestResp findRelease(String releaseId){

        List<Offer> offers = offerRepo.findByReleaseId(releaseId);
        offers.size();
        List<User> users = new ArrayList<>();

        offers.stream().forEach(offer -> {

            String userId = offer.getUserId();
            User user = userRepo.findOne(Long.valueOf(userId));
            users.add(user);
        });

        Release release = releaseRepo.findOne(Long.valueOf(releaseId));


        ReleaseVO releaseVO = new ReleaseVO(release.getId(),release.getPosition(),users);

        return RestResp.success("查询成功",releaseVO);
    }


}
