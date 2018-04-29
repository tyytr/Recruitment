package com.recruitment.www.entity;

import lombok.Data;

import java.util.List;

/**
 * @Author: luanxin
 * @Description:
 * @Date: Create in 下午4:33 2018/4/28
 * @Modified By:
 */
@Data
public class ReleaseVO {

    private Long releaseId;

    private String position;

//    private List<User> users;
    private List<Resume> resumes;

//    public ReleaseVO(Long releaseId, String position, List<User> users) {
//        this.releaseId = releaseId;
//        this.position = position;
//        this.users = users;
//    }
    public ReleaseVO( List<Resume> resumes) {
//        this.releaseId = releaseId;
//        this.position = position;
        this.resumes = resumes;
    }


}
