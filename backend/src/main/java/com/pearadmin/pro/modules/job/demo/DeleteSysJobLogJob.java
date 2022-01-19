package com.pearadmin.pro.modules.job.demo;

import cn.hutool.core.date.DateUnit;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.date.LocalDateTimeUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.pearadmin.pro.common.quartz.base.BaseQuartz;
import com.pearadmin.pro.modules.job.domain.SysJobLog;
import com.pearadmin.pro.modules.job.service.SysJobLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("deleteSysJob")
public class DeleteSysJobLogJob implements BaseQuartz {

    @Autowired
    private SysJobLogService sysJobLogService;

    @Override
    public void run(String param) throws Exception {
        System.out.println("执行 定时删除任务 任务");
        QueryWrapper<SysJobLog> queryWrapper = new QueryWrapper<>();
        // 获取上周末的23:59:59
        String lastWeek = DateUtil.formatDateTime(DateUtil.endOfWeek(DateUtil.lastWeek()));
        queryWrapper.lt("create_time",lastWeek);
        sysJobLogService.remove(queryWrapper);
    }
}
