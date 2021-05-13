package com.pearadmin.pro.modules.not.param;

import com.pearadmin.pro.common.web.base.page.PageRequest;
import lombok.Data;

/**
 * 私信列表 -- 参数实体
 * <p>
 * author: 就眠仪式
 * date: 2021-04-01
 */
@Data
public class SysInboxRequest extends PageRequest {

    private String content;
}
