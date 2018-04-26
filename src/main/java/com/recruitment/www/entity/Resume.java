package com.recruitment.www.entity;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午5:30 2018/4/24
 * @Modified By:
 */
@Entity
@Data
@Table(name = "tbl_resume")
public class Resume {

    @Id
    @GeneratedValue
    private Long id;
    private Long resume;
    private String username;
    private String phoneNumber;
    private String university;
    //专业
    private String major;
    private String date;
    private String city;
    private String experience;
    //期待薪资
    private String salary;

    private String createTime;
    @Column(name = "r_key")
    private String key;

}
