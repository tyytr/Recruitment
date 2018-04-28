package com.recruitment.www.repo;

import com.recruitment.www.entity.Resume;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 上午10:26 2018/4/25
 * @Modified By:
 */
@Repository
public interface ResumeRepo extends CrudRepository<Resume,Long> {

    Resume findByResume(Long resume);
//    Resume deleteByResume(Long resume);
    @Modifying
    @Transactional
    @Query(value = "delete from tbl_resume where resume =?1",nativeQuery = true)
    int deleteByResume(Long resume);

}
