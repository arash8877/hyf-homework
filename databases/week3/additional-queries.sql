
-- add a couple of different meals
INSERT INTO `meal` (`id`, `title`, `description`, `location`, `when`, `max-reservations`, `price`, `created-date`) 
VALUES (2, 'Sandwich', 'Burger with souce', 'Copenhagen', CURDATE(), 2, 66.6, CURDATE()), 
       (3, 'Pitzza', 'Salami', 'Virum', CURDATE(), 3, 22.2, CURDATE()),
	   (4, 'Rice', 'white rice', 'Aarhus', CURDATE(), 4, 99.5, CURDATE());
	   
INSERT INTO `reservation` (`id`, `number-of-guests`, `meal_id`, `created-date`, `contact-phonenumber`, `contact-email`)
VALUES (2, 1, 2, CURDATE(), '4566666666', 'emai1@gmail.com'),
	   (3, 2, 3, CURDATE(), '4577777777', 'emai2@gmail.com'),
       (4, 3, 4, CURDATE(), '4588888888', 'emai3@gmail.com');       
     
INSERT INTO `review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES (2, 'Good', 'I like it', 1, 3, CURDATE()),
	   (3, 'very good', 'I like it too', 2, 4, CURDATE()),
       (4, 'not bad', 'I dont like it', 3, 2, CURDATE());
       
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM `meal`
WHERE `price` <= 89;

-- Get meals that still has available reservations
SELECT `meal`.`id`, `meal`.`title`, `meal`.`max-reservations` - `reservation`.`number-of-guests` AS Availbel_rezervation
FROM `meal`
INNER JOIN `reservation`
ON `meal`.`id` = `reservation`.`meal_id`
HAVING Availbel_rezervation > 0;

-- Get meals that partially match a title. 
SELECT * FROM `meal`
WHERE `title` LIKE '%Pit%';

-- Get meals that has been created between two dates
SELECT `id`, `title`, `created-date` from `meal` 
WHERE (`created-date` BETWEEN '2023-05-31' AND '2023-06-02');

-- Get only specific number of meals fx return only 5 meals
SELECT `id`, `title`from `meal`
LIMIT 2;

-- Get the meals that have good reviews
SELECT `meal`.`id`, `meal`.`title` AS 'Good meal', `review`.`stars` 
FROM `meal`
INNER JOIN `review`
ON `meal`.`id` = `review`.`meal_id`
WHERE `review`.`stars` = 3;

-- Get reservations for a specific meal sorted by created_date
SELECT `reservation`.`id` AS 'reservation-id', 
`reservation`.`meal_id`, `reservation`.`created-date` 
FROM `reservation`
INNER JOIN `meal`
ON `reservation`.`meal_id` = `meal`.`id`
WHERE `meal`.`title` = 'Sandwich' 
ORDER BY `created-date`DESC;

-- Sort all meals by average number of stars in the reviews
SELECT `meal`.`title`, 
AVG(`review`.`stars`) AS 'average-score'
FROM `meal`	
INNER JOIN `review`  
ON `meal`.`id` = `review`.`meal_id` 
GROUP BY `meal`.`title`
ORDER BY 'average-score' DESC;






