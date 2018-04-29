package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.common.Token;
import com.recruitment.www.entity.*;
import com.recruitment.www.repo.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ReleaseService {
    @Resource
    private ResumeRepo resumeRepo;
    @Resource
    private ReleaseRepo releaseRepo;

    @Resource
    private OfferRepo offerRepo;

    @Resource
    private UserRepo userRepo;

    @Resource
    private CompanyRepo companyRepo;

    public RestResp addRelease(Release release){

//        Release currentRelease = releaseRepo.findOne(release.getRelease_id());

//        if (null != currentRelease){
//            releaseRepo.save(release);
//            return RestResp.success("发布招聘信息成功");
//        }else {
            releaseRepo.save(release);
            return RestResp.success("发布招聘信息成功");
//        }
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
    public RestResp findRelease(String id){
        List<Release> allRelease = releaseRepo.findByIdLikeAndAble(id);
        allRelease.forEach(release -> {
            if (null == release.getKey() || release.getKey() != release.getId().toString()){
                release.setKey(release.getId().toString());
                releaseRepo.save(release);
            }
        });
        return RestResp.success(1,allRelease);
    }
    public RestResp findRelease1(String releaseId){
        System.out.println(releaseId);//3
        String release_id = releaseId;
        List<Release> releases = releaseRepo.findByReleaseId(Long.valueOf(release_id));
        releases.size();

        List<Resume> resumes = new ArrayList<>();
        System.out.println(releases+" xxx");


        releases.stream().forEach(release1 -> {
            System.out.println("11 1");

            Long userId = release1.getId();
            System.out.println(userId+"       1");//2 1
            List<Offer> offers = offerRepo.findByReleaseId(userId.toString());
            System.out.println(offers+"       111");
            offers.stream().forEach(result ->{
                System.out.println(result+"       111");

                Resume resume1 = resumeRepo.findByResume(Long.valueOf(result.getUserId()));
                resume1.setKey(resume1.getId().toString());
                System.out.println(resume1+"        2");
                resumes.add(resume1);
                System.out.println(resumes+"        3");
                Release release = releaseRepo.findOne(Long.valueOf(release_id));
                System.out.println("11"+release);
                System.out.println("11"+resumes);

//                ReleaseVO releaseVO = new ReleaseVO(release.getId(),release.getPosition(),resumes);
            });


//            String resume = release.getId().toString();


//            System.out.println(offer1+"       111");
//
//            Resume resume1 = resumeRepo.findByResume(Long.valueOf(offer1.getUserId()));
//            System.out.println(resume1+"        2");
//            resumes.add(resume1);
//            System.out.println(resumes+"        3");
        });

//        Release release = releaseRepo.findOne(Long.valueOf(release_id));
//        System.out.println("11"+release);
//        System.out.println("11"+resumes);
//
        ReleaseVO releaseVO = new ReleaseVO(resumes);

        return RestResp.success("查询成功",releaseVO);

//        List<Offer> offers = offerRepo.findByReleaseId(releaseId);
//        offers.size();
//        List<User> users = new ArrayList<>();
//
//        offers.stream().forEach(offer -> {
//
//            String userId = offer.getUserId();
//            User user = userRepo.findOne(Long.valueOf(userId));
//            users.add(user);
//        });
//
//        Release release = releaseRepo.findOne(Long.valueOf(releaseId));
//
//
//        ReleaseVO releaseVO = new ReleaseVO(release.getId(),release.getPosition(),users);
//
//        return RestResp.success("查询成功",releaseVO);
    }


}
