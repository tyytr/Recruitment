package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.User;
import com.recruitment.www.mapper.UserRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

/**
 * @Author: Gaoyp
 * @Description: 实现注册demo
 * @Date: Create in 下午3:23 2018/3/15
 * @Modified By:
 */
@Service
public class UserService {

//    private static String AGREEMENT = "true";

    @Resource
    private UserRepo userRepo;


    /**
     * 注册用户
     * @param user 用户
     */
    public RestResp addUser(User user) {

        User currentUser = userRepo.findByUsername(user.getUsername());

        if (null == currentUser){
            userRepo.save(user);
            return RestResp.success("注册成功");
        }else {
            return RestResp.fail("用户名已存在");
        }
    }
}
