import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";


export default defineConfig({
 plugins: [tailwindcss()],
 base: "/SAE30.1/",
 build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       detail: resolve(__dirname, "page-detail.html"),
       panier: resolve(__dirname, "page-panier.html"),
       panier_vide: resolve(__dirname, "page-panier_vide.html"),
       information_commande: resolve(__dirname, "page-information_commande.html"),
       validation_historique: resolve(__dirname, "validation_historique.html"),
       historique_commande: resolve(__dirname, "historique_commande.html"),
       inscription: resolve(__dirname, "inscription.html"),
       connexion: resolve(__dirname, "page-connexion.html"),
       invité_connexion: resolve(__dirname, "page-invité_connexion.html"),
       // ajoutez d'autres pages si nécessaire
     },
   },
 },
});
