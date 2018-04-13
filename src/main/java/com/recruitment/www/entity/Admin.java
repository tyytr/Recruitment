package com.recruitment.www.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午2:03 2018/4/13
 * @Modified By:
 */
@Entity
@Data
@Table(name = "tbl_admin")
public class Admin {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    @Column(name = "a_key")
    private String key;
    private Integer token;
}
