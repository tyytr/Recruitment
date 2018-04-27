package com.recruitment.www.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table( name = "tbl_release")
public class Release {
    @Id
    @GeneratedValue
    private Long id;
    private Long release_id;
    private String username;
    private String phoneNumber;
    private String position;
    private String education;
    private String city;
    private String number;

    private String salary;
    private String age;
    private String experience;
    private String english;

    private String details;
    private String person;
    private String phone;

    private String createTime;
    @Column(name = "r_key")
    private String key;
}
