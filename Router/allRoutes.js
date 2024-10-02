import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/evenements", "Evènements", "/pages/evenements.html"),
    new Route("/rdv", "RDV", "/pages/rdv.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/login", "Login", "/pages/login.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Amicale des Pompiers";