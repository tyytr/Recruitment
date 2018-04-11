package com.recruitment.www.mapper;

import com.recruitment.www.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * @Author: Gaoyp
 * @Description: 实现注册demo
 * @Date: Create in 下午3:22 2018/3/15
 * @Modified By:
 */
@Mapper
public interface UserMapper {


    /**
     * 增加用户
     * @param username 用户名
     * @param password 密码
     * @return 返回改变行数
     */
    @Insert("insert into tbl_user(username,password) values(#{username},#{password})")
    Integer addUser(@Param("username") String username,
                    @Param("password") String password);


    /**
     * 根据用户名查找用户
     * @param  username 用户名
     * @return 返回一个用户
     */
    @Select("select * from tbl_user where username = #{username}")
    User findUserByUsername(String username);

}
