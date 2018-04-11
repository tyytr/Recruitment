package com.recruitment.www.service;

import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.User;
import com.recruitment.www.mapper.UserMapper;
import org.apache.ibatis.annotations.Insert;
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

    @Resource
    private UserMapper userMapper;


    /**
     * 注册用户
     * @param user 用户
     */
    public RestResp addUser(User user){

        User editUser = userMapper.findUserByUsername(user.getUsername());

        if (null != editUser){
            return RestResp.fail("用户名已存在");
        }

        Integer row = userMapper.addUser(user.getUsername(), user.getPassword());

        if (0 == row){
            return RestResp.fail("注册失败");
        }

        return RestResp.success("注册成功",user);

    }


}
