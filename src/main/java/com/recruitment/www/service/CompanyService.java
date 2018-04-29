package com.recruitment.www.service;

import com.recruitment.www.common.Able;
import com.recruitment.www.common.RestResp;
import com.recruitment.www.common.Token;
import com.recruitment.www.entity.Company;
import com.recruitment.www.entity.Offer;
import com.recruitment.www.repo.CompanyRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Stream;

/**
 * @Author: luanxin
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

        if (null == currentCompany && null != company.getUsername() && null != company.getPassword() && null != company.getUsername().trim() && "true".equals(company.getAgreement())){
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


    /**
     *  查询所有没审核的公司
     * @param
     * @return
     */
    public RestResp findAllDisable(){

        List<Company> allCompany = companyRepo.findByAble(Able.DISABLE.getNumber());

        allCompany.forEach(company -> {
            if (null == company.getKey() || company.getKey() != company.getId().toString()){
                company.setKey(company.getId().toString());
                companyRepo.save(company);
            }
        });

        return RestResp.success("查询全部未审核公司成功",allCompany);

    }

    /**
     * 模糊查询未通过的公司
     * @param
     * @return
     */
    public RestResp findDisableCompany(String username){

        List<Company> allCompany = companyRepo.findByUsernameLikeAndAble(username);

        allCompany.forEach(company -> {
            if (null == company.getKey() || company.getKey() != company.getId().toString()){
                company.setKey(company.getId().toString());
                companyRepo.save(company);
            }
        });

        return RestResp.success("模糊查询未审核公司成功",allCompany);

    }


//    public RestResp searchById(Long ids){
//        List<Offer> offer = findById(Long.valueOf(ids));
//        return RestResp.success("模糊查询未审核公司成功");
//    }


}
