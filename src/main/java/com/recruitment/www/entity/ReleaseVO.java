package com.recruitment.www.entity;

import lombok.Data;

import java.util.List;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午4:33 2018/4/28
 * @Modified By:
 */
@Data
public class ReleaseVO {

    private Long releaseId;

    private String position;

    private List<User> users;

    public ReleaseVO(Long releaseId, String position, List<User> users) {
        this.releaseId = releaseId;
        this.position = position;
        this.users = users;
    }


}
