# Nox — Commerce Demo

Prototype professionnel d'une plateforme white-label pour épicerie / night shop.

## Stack

- Nuxt 3 / Vue 3 / TypeScript
- Tailwind CSS
- Pinia
- SSR pour les pages publiques
- Pages admin en mode applicatif
- Données mockées et repositories simples à remplacer par une API

## Prérequis

- Node.js 20.10+
- npm 10+

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Démo admin

`/admin/login`

Mot de passe des comptes : `nox2026`

Comptes :
- gerant@nox.demo — Gérant
- julie@nox.demo — Responsable
- thomas@nox.demo — Employé

Le menu et les pages changent selon les permissions de la session mockée.

## Architecture

Les données sont regroupées dans `data/`. Les stores Pinia représentent la couche applicative locale.

Pour brancher un backend :
1. Conserver les types et contrats.
2. Remplacer les sources mockées par des repositories API.
3. Récupérer l'utilisateur et ses permissions depuis le backend.
4. Faire respecter les permissions côté backend ; le frontend ne sert qu'à adapter l'UX.
5. Remplacer le scanner mocké par une implémentation caméra (BarcodeDetector ou librairie dédiée).
6. Brancher le paiement et la facturation selon le prestataire choisi.

## White-label / instances

La configuration de marque est centralisée dans `data/config.ts` et `app.config.ts`. Le projet est conçu comme une base pouvant être déployée en instances indépendantes par client.

Les données métier doivent rester isolées dans la base de chaque instance lorsqu'un backend sera ajouté.

## Important

Les images produits actuelles sont des URLs de démonstration externes. Pour une livraison réelle, les assets devront être hébergés/localisés et les droits d'utilisation vérifiés.

Les identifiants de connexion sont volontairement hardcodés uniquement pour la démonstration. Ne pas conserver cette logique en production.
