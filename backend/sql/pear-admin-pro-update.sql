-- 修改Simple 任务和 Failure 任务的定时任务表达式 每小时执行2次
UPDATE `sys_job` SET  `cron_expression`='0 0 0/2 * * ?', `update_time`='2022-01-19 21:50:18' WHERE (`id`='1391457610156937218');
UPDATE `sys_job` SET  `cron_expression`='0 0 0/2 * * ?', `update_time`='2022-01-19 21:50:23' WHERE (`id`='1422975874129162242');

-- 新增删除操作日志和删除任务日志的定时任务
INSERT INTO `sys_job` (`id`, `name`, `bean_name`, `param`, `cron_expression`, `enable`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`, `deleted`) VALUES ('1483800751796281346', '删除任务日志', 'deleteSysJob', '', '59 59 23 ? * 1 *', b'1', '1', '2022-01-19 21:57:22', '1', '2022-01-19 22:30:13', '定时删除sysJobLog的任务，每周执行一次周日23:59:59执行 59 59 23 ? * 1 *', b'0'),
('1483817996467548162', '删除操作日志', 'deleteSysLog', NULL, '59 59 23 L * ? *', b'1', '1', '2022-01-19 23:05:53', '1', '2022-01-19 23:05:53', '每月最后一天23:59:59 清除上个月的操作日志   59 59 23 L * ? *', b'0');
