package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Resume;
import com.recruitment.www.service.ResumeService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @Author: luanxin
 * @Description:
 * @Date: Create in 上午11:21 2018/4/25
 * @Modified By:
 */
@CrossOrigin
@RestController
@RequestMapping("/resume")
public class ResumeController {


    @Resource
    private ResumeService resumeService;


    @PostMapping("/add")
    public RestResp addResume(Resume resume){
        System.out.println(resume);
        return resumeService.addResume(resume);
    }

    @DeleteMapping("/delete/{id}")
    public RestResp deleteResume(@PathVariable("id") Long id){
        return resumeService.deleteResume(id);
    }

    @GetMapping("/find/{id}")
    public RestResp findResumeById(@PathVariable("id") Long id){
        return resumeService.findResumeById(id);
    }
}
