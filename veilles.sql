-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: nadirgk021220007.mysql.db
-- Generation Time: Apr 29, 2024 at 09:01 AM
-- Server version: 5.7.42-log
-- PHP Version: 8.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nadirgk021220007`
--

-- --------------------------------------------------------

--
-- Table structure for table `veilles`
--

CREATE TABLE `veilles` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date_publication` date DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `lien` varchar(255) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `veilles`
--

INSERT INTO `veilles` (`id`, `titre`, `description`, `date_publication`, `source`, `lien`, `image_url`, `category`) VALUES
(7, 'YouTube laisse tomber le changement de son interface sur le web', 'La tentative de redesign de l’interface de YouTube sur le web n’a pas remporté un franc succès. Google testait un nouvel agencement des différents blocs qui composent la page du lecteur vidéo depuis quelques semaines', '2024-04-25', '01Net', 'https://www.01net.com/actualites/youtube-laisse-tomber-le-changement-de-son-interface-sur-le-web.html', 'http://www.nadir-gharbi.fr/assets/youtube-redesign.jpeg', 'APPLICATION'),
(8, 'Moderna s\'appuie sur GPT-4 pour faire progresser la recherche de l\'ARN messager', 'Avec l\'ambition d\'exploiter tout le potentiel de sa plateforme de développement de médicaments à ARNm pour commercialiser jusqu\'à 15 produits au cours des cinq prochaines années', '2024-04-26', 'l\'Usine Digitale', 'https://www.usine-digitale.fr/article/moderna-s-appuie-sur-gpt-4-pour-faire-progresser-la-recherche-de-l-arn-messager.N2212278', 'http://www.nadir-gharbi.fr/assets/moderna.jpeg', 'IA'),
(9, 'Site professionnel : quel est le meilleur hébergement cloud qui convient ?', 'Aujourd’hui, il existe une véritable profusion concernant les offres d’hébergement web. Cependant, les sites professionnels sont de plus en', '2024-04-26', 'Futura Sciences', 'https://www.futura-sciences.com/tech/questions-reponses/internet-site-professionnel-meilleur-hebergement-cloud-convient-20421/', 'http://www.nadir-gharbi.fr/assets/futuristic-computer-lab.jpg', 'HEBERGEMENT'),
(10, 'Des hackers ont ciblé des équipements Cisco pour accéder à des réseaux gouvernementaux', 'Dès novembre dernier, des pirates informatiques ont exploité des failles 0-day dans certains équipements réseau Cisco pour déployer des logiciels malveillants. La', '2024-04-26', 'l\'Usine Digitale', 'https://www.usine-digitale.fr/article/des-hackers-ont-cible-des-peripheriques-cisco-pour-acceder-a-des-reseaux-gouvernementaux.N2212203', 'http://www.nadir-gharbi.fr/assets/cisco-cyberattack.jpg', 'CYBERSÉCURITÉ'),
(11, 'Function as a Service : Amazon impose sa marque face à Google et Microsoft', 'Comparé à Google et Microsoft, Amazon se détache sur le terrain de l\'orchestration des fonctions. Sa palette de possibilités reste particulièrement riche dans ce domaine.', '2024-04-26', 'Le Journal Du Net', 'https://www.journaldunet.com/cloud/1529371-function-as-a-service-amazon-impose-sa-marque-face-a-google-et-microsoft/', 'http://www.nadir-gharbi.fr/assets/saas-amazon.jpeg', 'CLOUD'),
(12, 'Europe : le marché unique des télécoms reste à construire', 'Dans un rapport sur l’état du marché unique de l’Union européenne, Enrico Letta dénonce la fragmentation du secteur des télécoms', '2024-04-18', 'ZDNet', 'https://www.zdnet.fr/actualites/europe-le-marche-unique-des-telecoms-reste-a-construire-390789.htm', 'http://www.nadir-gharbi.fr/assets/europefibre.jpeg', 'RÉSEAUX / TÉLÉCOM'),
(13, 'Android 15 intégrerait une option pour forcer le Dark Mode sur toutes les applications', 'La prochaine version d’Android embarquerait un nouveau réglage qui, lorsqu’il est activé, permettrait de forcer les applications à s’afficher avec un thème sombre, même si elles ne le proposent pas nativement.', '2024-04-26', '01Net', 'https://www.01net.com/actualites/android-15-integrerait-une-option-pour-forcer-le-dark-mode-sur-toutes-les-applications.html', 'http://www.nadir-gharbi.fr/assets/android-dark-mode.jpeg', 'OS'),
(14, 'La messagerie web Tuta porte plainte auprès des régulateurs européens pour déréférencement sur Google', 'Juste après l’entrée en vigueur du Digital Markets Act (DMA), le service de messagerie web chiffrée Tuta a constaté une baisse soudaine des résultats de recherche Google le', '2024-04-25', 'L\'Usine Digitale', 'https://www.usine-digitale.fr/article/la-messagerie-web-tuta-porte-plainte-aupres-des-regulateurs-europeens-pour-dereferencement-sur-google.N2212097', 'http://www.nadir-gharbi.fr/assets/google-tuta.jpg', 'JURIDIQUE'),
(15, 'OpenAI ajoute des fonctions de sécurité, de contrôle pour les entreprises', 'Pour séduire un peu plus les entreprises, OpenAI apporte des fonctions de sécurité et de contrôle supplémentaires dans ses', '2024-04-26', 'Le Monde Informatique', 'https://www.lemondeinformatique.fr/actualites/lire-openai-ajoute-des-fonctions-de-securite-de-controle-pour-les-entreprises-93610.html', 'http://www.nadir-gharbi.fr/assets/chatgpt-secure.png', 'IA'),
(16, 'Ubuntu 24.04 LTS “Noble Numbat” est disponible', 'La dernière version “Long Time Support”, du système d’exploitation de Canonical, qui bénéficiera d’un support de 12 ans dont 5 gratuits, optimise ses performances,', '2024-04-26', 'L\'Informaticien', 'https://www.linformaticien.com/magazine/infra/61976-ubuntu-24-04-lts-noble-numbat-est-disponible.html', 'http://www.nadir-gharbi.fr/assets/ubuntu-numbat.jpg', 'OS'),
(17, 'Albi immobilisée par une cyberattaque', 'La cité tarnaise est “revenue au crayon et au papier” depuis lundi suite à une cyberattaque qui immobilise l’ensemble de ses services. L’ANSSI a été appelée à,', '2024-04-24', 'L\'Informaticien', 'https://www.linformaticien.com/magazine/cybersecurite/972-hacks-menaces/61966-albi-immobilisee-par-une-cyberattaque.html', 'http://www.nadir-gharbi.fr/assets/hacker.jpeg', 'CYBERSÉCURITÉ'),
(18, 'Windows : ce logiciel malveillant est totalement invisible, soyez prudents', 'Une nouvelle version de Raspberry Robin a été repérée le mois dernier. Utilisant des fichiers WSF vérolés, ce malware est invisible auprès des solutions de sécurité les plus populaires.', '2024-04-16', 'Les Numériques', 'https://www.lesnumeriques.com/antivirus/windows-ce-logiciel-malveillant-est-totalement-invisible-soyez-prudents-n220793.html', 'http://www.nadir-gharbi.fr/assets/logiciel-virus.jpg', 'MALWARES'),
(19, 'ESG : comment le « datacenter vert » gagne du terrain', 'Pour combiner performances cloud et responsabilité environnementale, le datacenter évolue de fond en comble. Les directives de l’Union européenne, les hausses de prix de l’énergie et la demande « ESG » des clients sont les principaux', '2024-04-15', 'Silicon', 'https://www.silicon.fr/esg-comment-le-datacenter-vert-gagne-du-terrain-477614.html', 'http://www.nadir-gharbi.fr/assets/datacenter-vert.jpg', 'GREEN IT'),
(20, 'La Suède inflige une amende de 670 000 euros à Klarna pour violation du RGPD', 'Le spécialiste du paiement fractionné Klarna a été condamné à payer une amende de 7,5 millions de couronnes suédoises (670 000 euros) par une cour d’appel du pays scandinave. La fintech a enfreint le règlement général sur la protection des données, en', '2024-03-12', 'L\'Usine Digitale', 'https://www.usine-digitale.fr/article/la-suede-inflige-une-amende-de-670-000-euros-a-klarna-pour-violation-du-rgpd.N2209765', 'http://www.nadir-gharbi.fr/assets/klarna-amande.jpg', 'JURIDIQUE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `veilles`
--
ALTER TABLE `veilles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `veilles`
--
ALTER TABLE `veilles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
