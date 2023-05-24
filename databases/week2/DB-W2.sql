use HYF_W2_part3;
SELECT * FROM `user`;
SELECT * FROM `status`;
SELECT * FROM `task`;
SELECT * FROM `user_task`;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT `title` AS 'list of the tasks assigned to the user'
FROM `task`
INNER JOIN `user_task`
ON `task`.`id` = `user_task`.`task_id`
INNER JOIN `user`
ON `user`.id = `user_task`.`user_id`
WHERE `user`.`email` LIKE '%@spotify.com%'
group by `task`.`title`;

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT `title` AS 'list of the not-started tasks assigned to Donald Duck'
FROM `task`
INNER JOIN `user_task`
ON `task`.`id` = `user_task`.`task_id`
INNER JOIN `user`
ON `user`.id = `user_task`.`user_id`
INNER JOIN `status`
ON `task`.`status_id` = `status`.`id`
WHERE `user`.`name` = 'Donald Duck' 
AND `status`.`name` = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september 
SELECT `title` AS 'tasks for Maryrose Meadows that were created in september'
FROM `task`
INNER JOIN `user_task`
ON `task`.`id` = `user_task`.`task_id`
INNER JOIN `user`
ON `user_task`.`user_id` = `user`.`id`
WHERE `user`.`name` = 'Maryrose Meadows'
AND month(`task`.`created`) = 9;

-- Find how many tasks where created in each month
SELECT COUNT(*) AS 'number of tasks created', DATE_FORMAT(`created`, '%Y-%m') AS 'month'
FROM `task`
GROUP BY DATE_FORMAT(`created`, '%Y-%m')


