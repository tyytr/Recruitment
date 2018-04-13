package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.service.AdminService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午2:03 2018/4/13
 * @Modified By:
 */
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Resource
    private AdminService adminService;


    @GetMapping("/login")
    private RestResp loginIn(@RequestParam String username,
                             @RequestParam String password){
        return adminService.loginIn(username,password);
    }

}
