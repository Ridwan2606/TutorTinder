CREATE DATABASE  IF NOT EXISTS `tutortinderdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tutortinderdb`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tutortinderdb
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credentials` (
  `Username` varchar(15) NOT NULL,
  `Password` varchar(15) NOT NULL,
  `Userid` int NOT NULL AUTO_INCREMENT,
  `Role` varchar(15) NOT NULL,
  PRIMARY KEY (`Userid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credentials`
--

LOCK TABLES `credentials` WRITE;
/*!40000 ALTER TABLE `credentials` DISABLE KEYS */;
INSERT INTO `credentials` VALUES ('rid@','123',1,'Student'),('lala@','123',2,'Teacher'),('a@','123',3,'Teacher'),('b@','123',4,'Teacher'),('pat@','123',5,'Teacher'),('waz@mail','123',6,'Student'),('sha@mail','123',7,'Student'),('jack@mail','123',8,'Student'),('mat@mail','123',9,'Student'),('grace@mail','123',10,'Student'),('jhon@mail','123',11,'Student'),('jess@mail','123',12,'Student'),('ron@mail','123',13,'Student'),('terry@mail','123',14,'Student'),('step','123',15,'Student'),('danny@','123',16,'Student'),('and@','123',17,'Student');
/*!40000 ALTER TABLE `credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentdetails`
--

DROP TABLE IF EXISTS `studentdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentdetails` (
  `Userid` int NOT NULL,
  `Name` varchar(45) DEFAULT '',
  `Budget` varchar(45) DEFAULT '',
  `isSpecialNeed` varchar(45) DEFAULT '',
  `Location` varchar(45) DEFAULT '',
  `Phone_number` varchar(45) DEFAULT '',
  `education1` varchar(45) DEFAULT '',
  `education2` varchar(45) DEFAULT '',
  `education3` varchar(45) DEFAULT '',
  `year1` varchar(45) DEFAULT '',
  `year2` varchar(45) DEFAULT '',
  `year3` varchar(45) DEFAULT '',
  PRIMARY KEY (`Userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentdetails`
--

LOCK TABLES `studentdetails` WRITE;
/*!40000 ALTER TABLE `studentdetails` DISABLE KEYS */;
INSERT INTO `studentdetails` VALUES (1,'Ridwan','10000','specialNeeds','ldd','45678','A level','McGill University','Dunno','2019','2020','2021'),(6,'Wazeerah','','','Montreal','34568909876','','','','','',''),(7,'Shania','','','Montreal','3456784565','','','','','',''),(8,'Jack','','','Montreal','345678987','','','','','',''),(9,'Maneth','','','Montreal','234567','','','','','',''),(10,'grace','','','Montreal','34456','','','','','',''),(11,'john','','','Montreal','567523233','','','','','',''),(12,'jessica','','','ss','3456787','','','','','',''),(13,'ron','','','mtl','3456543','','','','','',''),(14,'terry','','','mtl','34587654','','','','','',''),(15,'stephen','','','mtl','3433454','','','','','',''),(16,'danny','','','mtl','345678','','','','','',''),(17,'andrew','','','mtl','354457333','','','','','','');
/*!40000 ALTER TABLE `studentdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacherdetails`
--

DROP TABLE IF EXISTS `teacherdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacherdetails` (
  `Userid` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT '',
  `Location` varchar(45) DEFAULT '',
  `CanTakeSpecialNeed` varchar(5) DEFAULT '',
  `Phone_number` varchar(45) DEFAULT '',
  `skill1` varchar(45) DEFAULT '',
  `price1` varchar(45) DEFAULT '',
  `skill2` varchar(45) DEFAULT '',
  `price2` varchar(45) DEFAULT '',
  `skill3` varchar(45) DEFAULT '',
  `price3` varchar(45) DEFAULT '',
  `work1` varchar(45) DEFAULT '',
  `work2` varchar(45) DEFAULT '',
  `work3` varchar(45) DEFAULT '',
  `year1` varchar(45) DEFAULT '',
  `year2` varchar(45) DEFAULT '',
  `year3` varchar(45) DEFAULT '',
  PRIMARY KEY (`Userid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacherdetails`
--

LOCK TABLES `teacherdetails` WRITE;
/*!40000 ALTER TABLE `teacherdetails` DISABLE KEYS */;
INSERT INTO `teacherdetails` VALUES (2,'lala','llss','','56uio','Physics','100','Chemistry','200','Maths','300','','','','','',''),(3,'5678','llss','','56789','Sex','','SOSs','','SS','','','','','','',''),(4,'9039103','llss','','5678','GG','','WW','','FF','','','','','','',''),(5,'pather','Coromondel','','4567890','','','','','','','','','','','','');
/*!40000 ALTER TABLE `teacherdetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-02 22:41:43
