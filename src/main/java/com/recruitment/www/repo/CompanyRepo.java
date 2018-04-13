package com.recruitment.www.repo;

import com.recruitment.www.entity.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

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

}
