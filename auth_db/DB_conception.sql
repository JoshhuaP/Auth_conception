-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.6.5-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour database_conception
CREATE DATABASE IF NOT EXISTS `database_conception` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `database_conception`;

-- Listage de la structure de la table database_conception. battle
CREATE TABLE IF NOT EXISTS `battle` (
  `id_battle` smallint(6) NOT NULL AUTO_INCREMENT,
  `id_joueur1` smallint(6) NOT NULL,
  `id_joueur2` smallint(6) NOT NULL,
  `score1` smallint(6) NOT NULL,
  `score2` smallint(6) NOT NULL,
  `date` datetime NOT NULL,
  `duree` time NOT NULL,
  PRIMARY KEY (`id_battle`),
  CONSTRAINT `FK1_battle_score` FOREIGN KEY (`id_joueur1`) REFERENCES `user` (`id_user`),
  CONSTRAINT `FK2_battle_score` FOREIGN KEY (`id_joueur2`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage de la structure de la table database_conception. user
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` smallint(6) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(50) UNIQUE NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
