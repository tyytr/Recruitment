package com.recruitment.www.service;

import com.recruitment.www.common.Able;
import com.recruitment.www.common.RestResp;
import com.recruitment.www.common.Token;
import com.recruitment.www.entity.Company;
import com.recruitment.www.repo.CompanyRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午1:35 2018/4/13
 * @Modified By:
 */
@Service
public class CompanyService {

    @Resource
    private CompanyRepo companyRepo;


    /**
     * 注册公司
     * @param company 用户
     */
    public RestResp addUser(Company company) {

        Company currentCompany= companyRepo.findByUsername(company.getUsername());

        if (null == currentCompany){
            company.setToken(Token.COMPANY.getNumber());
            company.setAble(Able.DISABLE.getNumber());
            companyRepo.save(company);
            return RestResp.success("公司注册成功",company);
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

        Company currentCompany = companyRepo.findByUsername(username);

        if (null == currentCompany) {
            return RestResp.fail("公司用户名不存在，请注册公司",currentCompany);
        } else {
            if (currentCompany.getPassword().equals(password) && currentCompany.getAble().equals(Able.ENABLE.getNumber())){
                return RestResp.success("公司登录成功",currentCompany);
            }else {
                return RestResp.fail("密码错误或未认证",currentCompany);
            }
        }
    }


}
