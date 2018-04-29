package com.recruitment.www.service;

import com.recruitment.www.common.Able;
import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Admin;
import com.recruitment.www.entity.Company;
import com.recruitment.www.repo.AdminRepo;
import com.recruitment.www.repo.CompanyRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * @Author: luanxin
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

    public RestResp checkCompany(String[] companyIds){

        for (String ids:
                companyIds) {
            Optional<Company> company = companyRepo.findById(Long.valueOf(ids));
            company.get().setAble(Able.ENABLE.getNumber());
            companyRepo.save(company.get());
        }
//        companyIds.forEach(companyId -> {

//            Optional<Company> company = companyRepo.findById(Long.valueOf(companyId));
//            company.get().setAble(Able.ENABLE.getNumber());

//        });
        return RestResp.success("审核通过",companyIds);
//    }
    }
    public RestResp destroyCompany(String[] companyIds){

        for (String ids:
                companyIds) {
            Optional<Company> company = companyRepo.findById(Long.valueOf(ids));
            company.get().setAble(Able.DISTROY.getNumber());
            companyRepo.save(company.get());
        }
//        companyIds.forEach(companyId -> {
//
//            Optional<Company> company = companyRepo.findById(Long.valueOf(companyId));
//            company.get().setAble(Able.DISTROY.getNumber());
//            companyRepo.save(company.get());
//        });
        return RestResp.success("审核拒绝",companyIds);

    }

}
