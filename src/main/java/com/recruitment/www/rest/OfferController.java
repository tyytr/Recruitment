package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Offer;
import com.recruitment.www.service.OfferService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin
@RestController
@RequestMapping("/offer")
public class OfferController {
    @Resource
    private OfferService offerService;



    @PostMapping("/send")
    public RestResp sendJob(Offer offer){
        return offerService.sendJob(offer);
    }

//    @GetMapping("/list/{ids}")
//    public RestResp searchById(@PathVariable("ids") String  ids){
//        return offerService.searchById(ids);
//    }


}
