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
@CrossOrigin
@RestController
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

    @GetMapping("/list")
    public RestResp findAll(){
        return companyService.findAllDisable();
    }

    @GetMapping("/find/{username}")
    public RestResp findDisableCompany(@PathVariable("username") String username){
        return companyService.findDisableCompany(username);
    }

//    @GetMapping("/linstOne")
//    public RestResp searchById(Long ids){
//        return companyService.searchById(ids);
//    }
}
