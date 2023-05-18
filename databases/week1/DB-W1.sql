USE `HYF_Lesson_1`;
SELECT * FROM `tbl_tasks`;
SELECT * FROM `tbl_users`;
SELECT * FROM `tbl_statuses`;

-- 1.Find out how many tasks are in the task table
SELECT COUNT(*) AS `number of tasks` FROM `tbl_tasks`;

-- 2.Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) AS 'invalid due date' FROM `tbl_tasks` WHERE `due_date` IS NULL;  

-- 3.Find all the tasks that are marked as done
SELECT `task_id`, `title`, `status_id` AS `list of completed tasks` FROM `tbl_tasks` WHERE `status_id`= 3;

-- 4.Find all the tasks that are not marked as done
SELECT `task_id`, `title`, `status_id` AS `list of uncompleted tasks` FROM `tbl_tasks` WHERE `status_id` <> 3;

-- 5.Get all the tasks, sorted with the most recently created first
SELECT `task_id`, `title`, `created_date` AS `sorted with the most recently created` FROM `tbl_tasks`  ORDER BY `created_date`  DESC;

-- 6.Get the single most recently created task
SELECT `task_id`, `title`, `created_date` AS `most recently created` FROM `tbl_tasks`  ORDER BY `created_date`  DESC LIMIT 1;

-- 7.Get the title and due date of all tasks where the title or description contains database
SELECT `title` AS `tasks include database`, `due_date` FROM `tbl_tasks` WHERE `title` LIKE '%database%' OR `description` LIKE '%database%';

-- 8.Get the title and status (as text) of all tasks
SELECT `tbl_tasks`.`title`, `tbl_tasks`.`status_id`, `tbl_statuses`.`name`
FROM `tbl_tasks`
INNER JOIN `tbl_statuses` ON `tbl_tasks`.`status_id` = `tbl_statuses`.`status_id`;

-- 9.Get the name of each status, along with a count of how many tasks have that status
SELECT COUNT(`tbl_tasks`.`status_id`) AS `Task Count`, `tbl_statuses`.`name` AS `Status Name` 
FROM `tbl_tasks`
INNER JOIN `tbl_statuses` ON `tbl_tasks`.`status_id` = `tbl_statuses`.`status_id`
GROUP BY `tbl_statuses`.`name`;

-- 10.Get the names of all statuses, sorted by the status with most tasks first
SELECT COUNT(`tbl_tasks`.`status_id`) AS `Task Count`, `tbl_statuses`.`name` AS `Status Name` 
FROM `tbl_tasks`
INNER JOIN `tbl_statuses` ON `tbl_tasks`.`status_id` = `tbl_statuses`.`status_id`
GROUP BY `tbl_statuses`.`name`
ORDER BY `Task Count` DESC;



