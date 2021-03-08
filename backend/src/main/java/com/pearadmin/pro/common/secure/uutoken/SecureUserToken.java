package com.pearadmin.pro.common.secure.uutoken;

import com.pearadmin.pro.common.secure.services.SecureUser;
import lombok.Data;
import java.time.LocalDateTime;

/**
 * Describe: 用户 Token 封装实体
 * Author: 就 眠 仪 式
 * CreateTime: 2019/10/23
 * */
@Data
public class SecureUserToken {

    /**
     * Token
     * */
    private String token;

    /**
     * 基本信息
     * */
    private SecureUser secureUser;

    /**
     * 创建时间
     * */
    private LocalDateTime createTime = LocalDateTime.now();
}
