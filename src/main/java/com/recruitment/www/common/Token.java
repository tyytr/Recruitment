package com.recruitment.www.common;

/**
 * @Author: luanxin
 * @Description:
 * @Date: Create in 下午1:20 2018/4/13
 * @Modified By:
 */
public enum Token {

    USER(2),
    COMPANY(3),
    ADMIN(4);


    private Integer number;

    Token(Integer number) {
        this.number = number;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
