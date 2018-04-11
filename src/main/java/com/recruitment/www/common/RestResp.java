package com.recruitment.www.common;

import lombok.Data;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午1:21 2018/3/15
 * @Modified By:
 */
@Data
public class RestResp {

    // 状态码
    private Integer status;
    // 信息
    private String message;
    // 数据
    private Object data;

    public RestResp(Integer status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    private RestResp(Integer status,String message){
        this(status,message,null);
    }

    public static RestResp success(Integer status){
        return new RestResp(status,"操作成功");
    }

    public static RestResp success(String message){
        return new RestResp(1,message);
    }

    public static RestResp success(Object data){
        return new RestResp(1,"操作成功",data);
    }

    public static RestResp success(Integer status,String message){
        return new RestResp(status,message);
    }

    public static RestResp success(Integer status,Object data){
        return new RestResp(status,"操作成功",data);
    }

    public static RestResp success(String message,Object data){
        return new RestResp(1,message,data);
    }

    public static RestResp success(Integer status,String message,Object data){
        return new RestResp(status,message,data);
    }

    public static RestResp fail(Integer status){
        return new RestResp(status,"操作失败");
    }

    public static RestResp fail(String message){
        return new RestResp(0,message);
    }

    public static RestResp fail(Object data){
        return new RestResp(0,"操作失败",data);
    }

    public static RestResp fail(Integer status,String message){
        return new RestResp(status,message);
    }

    public static RestResp fail(Integer status,Object data){
        return new RestResp(status,"操作失败",data);
    }

    public static RestResp fail(String message,Object data){
        return new RestResp(0,message,data);
    }

    public static RestResp fail(Integer status,String message,Object data){
        return new RestResp(status,message,data);
    }
}
