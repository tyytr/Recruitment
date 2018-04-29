package com.recruitment.www.rest;

import com.recruitment.www.utils.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@Controller
public class FileController {
    private static final Logger logger = LoggerFactory.getLogger(FileController.class);
    private int i = 0;

    @PostMapping("/file")
    public @ResponseBody
    String uploadImage(@RequestParam("file")MultipartFile file, HttpServletRequest request){


        String contentType = file.getContentType();

        String fileName = file.getOriginalFilename();

//        String filePath = request.getSession().getServletContext().getRealPath("/file/" + i + "/");
        String filePath = "E:\\A-work\\work\\recruitment\\src\\main\\resources\\templates\\demo\\file\\"+i+"\\";
        String filePath1 ="/file/" + i + "/";
        System.out.println(contentType);
        System.out.println(filePath);
        System.out.println(fileName);


        try {
            FileUtils.uploadFile(file.getBytes(), filePath, fileName);
            i++;
        } catch (Exception e) {
            // TODO: handle exception
        }
        //返回json
        return filePath1+fileName;

    }
}
