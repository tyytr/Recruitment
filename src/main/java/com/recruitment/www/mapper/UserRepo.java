package com.recruitment.www.mapper;

import com.recruitment.www.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @Author: Gaoyp
 * @Description: 实现注册demo
 * @Date: Create in 下午3:22 2018/3/15
 * @Modified By:
 */
@Repository
public interface UserRepo extends CrudRepository<User,Long> {


    /**
     * 根据用户名查找用户
     * @param  username 用户名
     * @return 返回一个用户
     */
    User findByUsername(String username);

}
