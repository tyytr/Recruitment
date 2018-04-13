package com.recruitment.www.repo;

import com.recruitment.www.entity.Company;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午1:34 2018/4/13
 * @Modified By:
 */
@Repository
public interface CompanyRepo extends CrudRepository<Company,Long>{

    /**
     * 根据用户名查找企业
     * @param  username 用户名
     * @return Company
     */

    Company findByUsername(String username);


    /**
     * 查询所有没审核的公司
     * @param
     * @return
     */
    List<Company> findByAble(Integer able);


    /**
     * 模糊查询
     * @param
     * @return
     */
    List<Company> findByUsernameLikeAndAble(String username, Integer able);

}
