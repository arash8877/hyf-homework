-- Get all meals
USE `meal-sharing`;
SELECT `id`, `title`, `price` FROM `meal`;
SELECT * FROM `meal`;

-- Add a new meal
INSERT INTO `meal` (`id`, `title`, `description`, `location`, `when`, `max-reservations`, `price`, `created-date`)
            VALUES (1, 'Omelette', 'eggs and tomato', 'Lyngby', '2023-05-29', 4, 12.4, '2023-05-30');

-- Get a meal with any id, fx 1
SELECT * FROM `meal`
WHERE `id` = 1;

-- Update a meal with any id, fx 1
UPDATE `meal`
SET `title` = 'American Omelette',
    `price` = 22.2
WHERE `id` = 1;

-- Delete a meal with any id, fx 1
DELETE FROM `meal`
WHERE `id` = 1;

-- ---------------------------------------------

-- Get all reservations
SELECT * FROM `reservation`;

-- Add a new reservation
INSERT INTO `reservation` (`id`, `number-of-guests`, `meal_id`, `created-date`, `contact-phonenumber`, `contact-email`)
            VALUES (1, '2', 1, '2023-05-29', 4533333333, 'alex@email.com');
            
-- Get a reservation with any id, fx 1
SELECT * FROM `reservation`
WHERE `id` = 1;

-- Update a reservation with any id, fx 1
UPDATE `reservation`
SET `number-of-guests` = 6
WHERE `id` = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM `reservation`
WHERE `id` = 1;

-- ---------------------------------------------------------

-- Get all reviews
SELECT * FROM `review`;

-- Add a new review
INSERT INTO `review` (`id`, `title`, `description`,`meal_id` ,`stars`, `created_date`)
            VALUES (1, 'Perfect', 'very tasty', 1, 5, CURDATE());

-- Get a review with any id, fx 1
SELECT * FROM `review`
WHERE `id` = 1;

-- Update a review with any id, fx 1
UPDATE`review`
SET `description` = 'tasty and looks good'
WHERE `id` = 1;

-- Delete a review with any id, fx 1
DELETE FROM `review`
WHERE `id` = 1;




