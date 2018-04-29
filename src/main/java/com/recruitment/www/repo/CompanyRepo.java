package com.recruitment.www.repo;

import com.recruitment.www.entity.Company;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.nio.file.OpenOption;
import java.util.List;
import java.util.Optional;

/**
 * @Author: luanxin
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
     * 模糊查询 查询未审核的公司
     * @param username 公司模糊名
     * @return 公司列表
     */
    @Query(value = "SELECT * FROM tbl_company WHERE username LIKE %?1% AND able=0",nativeQuery = true)
    List<Company> findByUsernameLikeAndAble(String username);

    Optional<Company> findById (Long id);

//    Company findById1(Long id);

}
