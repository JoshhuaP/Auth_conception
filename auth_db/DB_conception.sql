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
  `id_joueur1` smallint(6) NOT NULL DEFAULT,
  `id_joueur2` smallint(6) NOT NULL DEFAULT,
  `score1` smallint(6) NOT NULL DEFAULT,
  `score2` smallint(6) NOT NULL DEFAULT,
  `date` datetime NOT NULL,
  `duree` time NOT NULL,
  PRIMARY KEY (`id_battle`) USING BTREE,
  KEY `FK1_battle_user` (`id_joueur1`),
  CONSTRAINT `FK1_battle_score` FOREIGN KEY (`id_joueur1`) REFERENCES `user` (`id_user`)
  KEY `FK1_battle_user` (`id_joueur2`),
  CONSTRAINT `FK1_battle_score` FOREIGN KEY (`id_joueur2`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table database_conception.score : ~0 rows (environ)
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
/*!40000 ALTER TABLE `score` ENABLE KEYS */;

-- Listage de la structure de la table database_conception. user
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` smallint(6) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(50) UNIQUE NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table database_conception.user : ~0 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;