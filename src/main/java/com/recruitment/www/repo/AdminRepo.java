package com.recruitment.www.repo;

import com.recruitment.www.entity.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @Author: luanxin
 * @Description:
 * @Date: Create in 下午2:03 2018/4/13
 * @Modified By:
 */
@Repository
public interface AdminRepo extends CrudRepository<Admin,Long> {

    Admin findByUsername(String username);

}
