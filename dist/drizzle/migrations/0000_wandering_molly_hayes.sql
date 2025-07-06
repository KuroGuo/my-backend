CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text,
	`author_id` int,
	`deleted` boolean,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
