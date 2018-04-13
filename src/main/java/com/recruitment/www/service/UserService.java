package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.common.Token;
import com.recruitment.www.entity.User;
import com.recruitment.www.repo.UserRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

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
            user.setToken(Token.USER.getNumber());
            userRepo.save(user);
            return RestResp.success("用户注册成功",user);
        }else {
            return RestResp.fail("用户名已存在");
        }
    }

    /**
     *  用户登录
     * @param username 用户名
     * @param password 密码
     * @return rest
     */
    public RestResp loginIn(String username,String password) {

        User currentUser = userRepo.findByUsername(username);

        if (null == currentUser) {
            return RestResp.fail("用户名不存在，请注册");
        } else {
            if (currentUser.getPassword().equals(password)){
                return RestResp.success("登录成功",currentUser);
            }else {
                return RestResp.fail("密码错误");
            }
        }
    }

}
