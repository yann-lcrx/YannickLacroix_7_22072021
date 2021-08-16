/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ groupomania /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE groupomania;

DROP TABLE IF EXISTS post;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `id_user` int DEFAULT NULL,
  `content` text,
  `title` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_user` (`id_user`),
  CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS reply;
CREATE TABLE `reply` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `id_user` int DEFAULT NULL,
  `id_post` int DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`),
  KEY `fk_reply_id_post` (`id_post`),
  KEY `fk_reply_id_user` (`id_user`),
  CONSTRAINT `fk_reply_id_post` FOREIGN KEY (`id_post`) REFERENCES `post` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_reply_id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS user;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(32) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `role` tinyint(1) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb3;