package com.recruitment.www.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * @Author: luanxin
 * @Description: 用户
 * @Date: Create in 下午3:32 2018/3/15
 * @Modified By:
 */

@Entity
@Data
@Table(name = "tbl_user")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private String createTime;
    private String phoneNumber;
    @Column(name = "u_key")
    private String key;
    private String agreement;
    private Integer token;
}
