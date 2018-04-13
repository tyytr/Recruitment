package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Company;
import com.recruitment.www.service.CompanyService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午1:34 2018/4/13
 * @Modified By:
 */
@RestController
@CrossOrigin
@RequestMapping("/company")
public class CompanyController {

    @Resource
    private CompanyService companyService;


    @PostMapping("/add")
    public RestResp addCompany(Company company){
        return companyService.addUser(company);
    }

    @GetMapping("/login")
    public RestResp login(@RequestParam String username,
                          @RequestParam String password){
        return companyService.loginIn(username,password);
    }
}
