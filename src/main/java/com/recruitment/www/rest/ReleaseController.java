package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Release;
import com.recruitment.www.service.ReleaseService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin
@RestController
@RequestMapping("/release")
public class ReleaseController {
    @Resource
    private ReleaseService releaseService;

    @PostMapping("/add")
    public RestResp addRelease(Release release){
        System.out.println(release);
        return releaseService.addRelease(release);
    }

    @GetMapping("/list")
    public RestResp listAll(){
        return releaseService.listAll();
    }

    @GetMapping("/listOne/{id}")
    public RestResp findRelease1(@PathVariable("id") String releaseId){
        return releaseService.findRelease1(releaseId);
    }
    @GetMapping("/find/{id}")
    public RestResp findRelease(@PathVariable("id") String id){
        return releaseService.findRelease(id);
    }
}
