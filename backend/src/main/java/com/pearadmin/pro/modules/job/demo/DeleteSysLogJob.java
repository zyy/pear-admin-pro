package com.pearadmin.pro.modules.job.demo;

import cn.hutool.core.date.DateUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.pearadmin.pro.common.quartz.base.BaseQuartz;
import com.pearadmin.pro.modules.sys.domain.SysLog;
import com.pearadmin.pro.modules.sys.service.SysLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("deleteSysLog")
public class DeleteSysLogJob implements BaseQuartz {

    @Autowired
    private SysLogService logService;

    @Override
    public void run(String param) throws Exception {
        // 获取上个月最后一天的23:59:59
        String lastMonth = DateUtil.formatDateTime(DateUtil.endOfMonth(DateUtil.lastMonth()));
        logService.remove(new QueryWrapper<SysLog>().lt("create_time",lastMonth));
    }

}
