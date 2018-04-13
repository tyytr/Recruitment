package com.recruitment.www.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午1:33 2018/4/13
 * @Modified By:
 */
@Entity
@Data
@Table(name = "tbl_company")
public class Company {


    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    private String createTime;
    private String phoneNumber;
    @Column(name = "c_key")
    private String key;
    private String agreement;
    private Integer token;

}
