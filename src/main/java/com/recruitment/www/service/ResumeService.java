package com.recruitment.www.service;

import com.recruitment.www.common.RegexUtils;
import com.recruitment.www.common.RestResp;
import com.recruitment.www.entity.Resume;
import com.recruitment.www.repo.ResumeRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 上午10:28 2018/4/25
 * @Modified By:
 */
@Service
@Slf4j
public class ResumeService {

    @Resource
    private ResumeRepo resumeRepo;



    /**
     * 新增/更新简历
     * @param  resume 实体
     * @return rest
     */

    public RestResp addResume(Resume resume){

        if (null == resume.getUsername() || null == resume.getUsername().trim()){
            return RestResp.fail("用户名不能为空");
        }

        if (null == resume.getPhoneNumber() || null == resume.getPhoneNumber().trim() || RegexUtils.match(resume.getPhoneNumber(),RegexUtils.REGEX_PHONE)){
            return RestResp.fail("请输入正确的手机号");
        }


        Resume currentResume = resumeRepo.findOne(resume.getId());

        if (null != currentResume){
            resumeRepo.save(resume);
            return RestResp.success("成功修改简历");
        }

        resumeRepo.save(resume);
        return RestResp.success("新增简历成功");

    }

    /**
     * 删除简历
     * @param id
     * @return rest
     */

    public RestResp deleteResume(Long id){

        try {
            Resume currentResume = resumeRepo.findOne(id);
            if (null == currentResume){
                return RestResp.fail("简历不存在");
            }
            resumeRepo.delete(id);
            return RestResp.success("删除简历成功");
        }catch (Exception e){
            log.error("删除简历出错",e);
            return RestResp.fail("删除简历失败");
        }
    }

    /**
     *  根据id查询
     * @param
     * @return
     */
    public RestResp findResumeById(Long id){

        Resume currentResume = resumeRepo.findOne(id);

        if (null == currentResume.getKey()){
            currentResume.setKey(id.toString());
            resumeRepo.save(currentResume);
            return RestResp.success("查询简历成功",currentResume);
        }
        return RestResp.fail("查询简历失败");
    }
}
