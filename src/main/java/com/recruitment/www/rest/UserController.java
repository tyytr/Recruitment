package com.recruitment.www.rest;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.User;
import com.recruitment.www.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: Gaoyp
 * @Description: 实现注册demo
 * @Date: Create in 下午3:22 2018/3/15
 * @Modified By:
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    /**
     * 注册用户
     * @param user 用户
     */
    @PostMapping("/add")
    public RestResp addUser(@RequestBody User user){
        return userService.addUser(user);
    }

}
