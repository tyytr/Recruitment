package com.recruitment.www.repo;

import com.recruitment.www.entity.Resume;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 上午10:26 2018/4/25
 * @Modified By:
 */
@Repository
public interface ResumeRepo extends CrudRepository<Resume,Long> {



}
