package com.recruitment.www.common;

/**
 * @Author: Gaoyp
 * @Description:
 * @Date: Create in 下午2:27 2018/4/13
 * @Modified By:
 */
public enum Able {
    ENABLE(1),DISABLE(0);


    private Integer number;

    Able(Integer number) {
        this.number = number;
    }


    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
