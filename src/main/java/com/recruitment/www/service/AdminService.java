package com.recruitment.www.service;

import com.recruitment.www.common.Able;
import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Admin;
import com.recruitment.www.entity.Company;
import com.recruitment.www.repo.AdminRepo;
import com.recruitment.www.repo.CompanyRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午2:04 2018/4/13
 * @Modified By:
 */
@Service
public class AdminService {

    @Resource
    private AdminRepo adminRepo;

    @Resource
    private CompanyRepo companyRepo;

    /**
     *  用户登录
     * @param username 用户名
     * @param password 密码
     * @return rest
     */
    public RestResp loginIn(String username, String password) {

        Admin currentAdmin = adminRepo.findByUsername(username);

        if (null == currentAdmin) {
            return RestResp.fail("用户名不存在，请插入数据库管理员");
        } else {
            if (currentAdmin.getPassword().equals(password)){
                return RestResp.success("管理员登录成功",currentAdmin);
            }else {
                return RestResp.fail("密码错误");
            }
        }
    }


    /**
     * 审核公司
     * @param
     * @return
     */

    public RestResp checkCompany(Company company){

        if (company.getAble().equals(Able.DISABLE.getNumber())){
            company.setAble(Able.ENABLE.getNumber());
            companyRepo.save(company);
            return RestResp.success("审核通过",company);
        }else {
            return RestResp.fail("已审核");
        }
    }

}
