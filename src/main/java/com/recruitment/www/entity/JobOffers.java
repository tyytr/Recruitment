package com.recruitment.www.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table( name = "tbl_jobOffers")
public class JobOffers {

    @Id
    @GeneratedValue
    private Long id;

    private String release;
    private String user;

    @Column(name = "r_key")
    private String key;


}
