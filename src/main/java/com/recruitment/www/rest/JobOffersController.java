package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.JobOffers;
import com.recruitment.www.service.JobOffersService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin
@RestController
@RequestMapping("/jobOffers")
public class JobOffersController {
    @Resource
    private JobOffersService jobOffersService;


    @PostMapping("/send")
    public RestResp sendJob(JobOffers jobOffers){
        return jobOffersService.sendJob(jobOffers);
    }

}
