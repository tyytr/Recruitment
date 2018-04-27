package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Release;
import com.recruitment.www.repo.ReleaseRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@Slf4j
public class ReleaseService {
    @Resource ReleaseRepo releaseRepo;

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
}
