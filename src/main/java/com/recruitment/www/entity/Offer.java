package com.recruitment.www.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "tbl_offer")
public class Offer {

    @Id
    @GeneratedValue
    private Long id;

    private String releaseId;
    private String userId;

    @Column(name = "r_key")
    private String key;
}

