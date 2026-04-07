export interface Article {
  id: number
  category: string
  title: string
  excerpt: string
  image: string
  url: string
  slug?: string
  content?: string
}

export const articles: Article[] = [
  // === GUIDES ===
  {
    id: 1,
    category: 'Guide',
    title: 'Choisir sa base Direct Drive en 2026 : le guide complet',
    excerpt:
      'Fanatec, Simagic, MOZA ou Simucube — on décrypte les différences entre bases DD pour vous aider à choisir selon votre budget et votre niveau. Couple, retour de force, compatibilité volants : tout ce qu\'il faut savoir avant d\'acheter.',
    image: 'https://simagic.com/cdn/shop/files/Alpha_Mini_transparent_base.png?v=1766649121',
    url: '/guides/choisir-base-direct-drive-2026',
    slug: 'choisir-base-direct-drive-2026',
    content: `## Pourquoi passer au Direct Drive ?

Le Direct Drive (DD) est la technologie de base de volant qui connecte directement un moteur brushless à l'arbre du volant — sans courroies, sans engrenages. Résultat : un retour de force précis, instantané, et qui se dégrade beaucoup moins vite que les systèmes à courroie.

En 2026, les bases DD sont devenues accessibles à partir de 200€. Voici comment choisir.

## Les 4 acteurs principaux

### Fanatec — La valeur sûre
**CSL DD 5Nm** (200€) — L'entrée en matière DD la plus vendue. Compatible Xbox/PC. Le kit booster PSU90 à 20€ débloque 8Nm pour une meilleure simulation des véhicules GT.

**Recommandé pour** : Débutants qui veulent du DD sans se ruiner. Compatible Xbox est un vrai avantage.

### MOZA Racing — Le rapport qualité/prix
**R5 (5,5Nm, 299€)** et **R9 V3 (9Nm, 349€)** sont les références milieu de gamme en 2026. Software Pit House très complet, mises à jour régulières.

**Recommandé pour** : PC uniquement. Excellent choix si vous évoluez principalement sur iRacing ou Assetto Corsa 2.

### Simagic — Le haut de gamme accessible
**Alpha Mini (15Nm, 459€)** — Couple énorme pour le prix. Retour de force d'une précision chirurgicale. La référence pour les GT3 et formule.

**Recommandé pour** : Simraceurs intermédiaires à confirmés qui veulent du sensation réaliste.

### Simucube — L'ultra-haut de gamme
**SC2 Pro (25Nm, 1200€+)** — Pour les compétiteurs sérieux. Qualité pro, prix pro.

**Recommandé pour** : Pilotes qui visent les championnats esport et ne font aucun compromis.

## Tableau comparatif

| Base | Couple | Prix | Compatibilité |
|------|--------|------|---------------|
| Fanatec CSL DD 5Nm | 5Nm (8Nm boost) | 200€ | PC / Xbox |
| MOZA R5 | 5,5Nm | 299€ | PC |
| MOZA R9 V3 | 9Nm | 349€ | PC |
| Simagic Alpha Mini | 15Nm | 459€ | PC |
| Simucube SC2 Pro | 25Nm | 1200€+ | PC |

## Ce que le couple change vraiment

- **< 6Nm** : Suffisant pour débuter, ressenti un peu faible sur les voitures à fort appui aérodynamique
- **8-10Nm** : Zone idéale pour la plupart des simraceurs. Toutes les voitures se pilotent bien
- **15Nm+** : Différence notable sur la détection des pertes d'adhérence. Réservé aux confirmés

## Notre conseil final

**Budget < 300€** → Fanatec CSL DD 5Nm. Prenez le booster PSU90 en même temps.

**Budget 300-500€** → MOZA R9 V3 ou Simagic Alpha Mini selon votre priorité (rapport Q/P vs couple brut).

**Budget > 500€** → Simagic Alpha U (23Nm, 599€) ou Simucube SC2 Sport.`,
  },
  {
    id: 2,
    category: 'Guide',
    title: 'Débuter en simracing en 2026 : le guide A à Z',
    excerpt:
      'Quel simulateur choisir ? Quel matériel pour commencer ? iRacing, ACC ou Assetto Corsa 2 ? Ce guide complet répond à toutes les questions des débutants, avec des recommandations par budget de 200€ à 1000€.',
    image:
      'https://eu.mozaracing.com/cdn/shop/files/R5_a8139d29-a749-48e8-bb36-cc5f58e74b62_grande.png?v=1752746509',
    url: '/guides/debuter-simracing-2026',
    slug: 'debuter-simracing-2026',
    content: `## Le simracing en 2026 : c'est pour qui ?

Le simracing s'est professionalisé — mais il reste accessible. Que vous soyez passionné de F1, amateur de GT3 ou simplement fan de conduite sportive, il existe un setup pour vous à chaque budget.

## Quel simulateur choisir ?

### iRacing (abonnement 11$/mois)
La référence compétitive. Physique réaliste, infrastructure de course officielle, championnats esport. Idéal si vous voulez vous mesurer à de vrais pilotes.

**Pour qui** : Compétiteurs, amateurs de courses organisées.

### Assetto Corsa 2 (50€)
Le successeur d'Assetto Corsa, sorti fin 2025. Physique des pneus de pointe, contenu riche dès la base, mods communautaires.

**Pour qui** : Puristes de la physique, amateurs de voitures road/GT.

### Assetto Corsa Competizione (35€)
Le simulateur officiel du GT World Challenge. Spécialisé GT3/GT4, pluie et nuit réalistes.

**Pour qui** : Fans de GT3, courses d'endurance.

### Gran Turismo 7 (60€, PS4/PS5)
Le plus accessible. Contenu énorme, bonne physique pour une console, campagne solo riche.

**Pour qui** : Joueurs console, débutants complets.

## Quel matériel pour commencer ?

### Budget 200-300€ — Le starter pack

- **Volant + pédalier** : Thrustmaster T300RS (220€) ou Fanatec CSL DD 5Nm (200€)
- **Cockpit** : Pas indispensable au départ — le bureau fait l'affaire avec une fixation

Le Fanatec CSL DD est devenu le choix évident en 2026 : même prix qu'un bon volant à courroie premium, mais en Direct Drive.

### Budget 500-800€ — Le setup sérieux

- **Base** : MOZA R9 V3 (349€) ou Simagic Alpha Mini (459€)
- **Pédalier** : Fanatec CSL Pedals LC (120€) ou MOZA SR-P Lite (99€)
- **Cockpit** : Next Level Racing F-GT Lite (200€) ou similaire

### Budget 800-1500€ — Le setup intermédiaire

- **Base** : Simagic Alpha Mini ou MOZA R12
- **Pédalier** : Heusinkveld Sprint (649€) — le saut qualitatif le plus important
- **Cockpit** : Sim-Lab P1X ou équivalent aluminium

## Les erreurs à éviter

1. **Acheter un volant à courroie "pour voir"** — En 2026, le DD entry-level coûte pareil. Achetez direct du DD.
2. **Négliger le pédalier** — Un bon pédalier load cell transforme votre freinage. C'est souvent plus important que la base.
3. **Oublier le cockpit** — Jouer avec le volant sur les genoux ou collé au bureau détruit le ressenti. Même un cockpit à 100€ change tout.
4. **Partir sur iRacing sans avoir rodé la physique** — Commencez par Assetto Corsa 2 pour apprendre les bases avant de vous abonner.

## Par où commencer concrètement

1. Achetez le **Fanatec CSL DD 5Nm + booster PSU90** ou le **MOZA R5 bundle** (volant inclus)
2. Installez **Assetto Corsa 2** — commencez par les voitures GT road
3. Apprenez à freiner progressivement, ne bloquez pas les roues
4. Une fois à l'aise, explorez iRacing pour les courses organisées`,
  },
  {
    id: 3,
    category: 'Guide',
    title: 'Régler son FOV en simracing : la méthode exacte',
    excerpt:
      'Un FOV mal réglé sabote vos chronos sans que vous le sachiez. Voici la méthode de calcul précise pour iRacing, ACC et Assetto Corsa 2 — avec formule, tableau de valeurs et exemples concrets selon la taille de votre écran.',
    image:
      'https://assets.fanatec.com/image/upload/c_fill,q_auto,h_400,w_600,f_auto/products/Wheel-Bases/CSL_DD_QR2L_90/CSL_DD_QR2L_90-01.webp',
    url: '/guides/regler-fov-simracing',
    slug: 'regler-fov-simracing',
    content: `## Pourquoi le FOV est critique en simracing

Le FOV (Field of View — champ de vision) détermine comment l'espace 3D est projeté sur votre écran 2D. Un FOV trop large déforme les distances et les virages. Un FOV trop étroit réduit votre vision périphérique.

**Un FOV correct = des distances réalistes = des points de freinage fiables.**

## La formule exacte

\`\`\`
FOV = 2 × arctan(largeur_écran / (2 × distance_oeil_écran))
\`\`\`

Convertissez le résultat en degrés.

## Tableau de valeurs prêtes à l'emploi

| Taille écran | Distance 60cm | Distance 80cm | Distance 100cm |
|---|---|---|---|
| 24" (16:9) | 51° | 40° | 33° |
| 27" (16:9) | 56° | 44° | 36° |
| 32" (16:9) | 64° | 51° | 41° |
| 34" ultrawide | 75° | 60° | 49° |
| 49" ultrawide | 90° | 73° | 61° |

*Ces valeurs sont calculées pour la largeur horizontale de l'écran. Pour un triple écran, calculez chaque panneau séparément.*

## Comment mesurer votre distance œil-écran

Asseyez-vous dans votre position de jeu habituelle (mains sur le volant, dos calé). Mesurez la distance entre vos yeux et le centre de l'écran avec un mètre. Soyez précis — 5cm de différence change le FOV de 2-3°.

## Appliquer le FOV dans chaque simulateur

### iRacing
Paramètres → Graphismes → Camera → **Horizontal FOV**. Entrez votre valeur calculée.

### Assetto Corsa 2
Options → Général → **FOV**. Le jeu utilise le FOV horizontal.

### Assetto Corsa Competizione
Paramètres de jeu → Affichage → **Field of View**. Attention : ACC utilise un FOV vertical sur certaines versions — divisez votre valeur horizontale par votre ratio d'aspect (1,78 pour 16:9).

## Ajustements fins

Après avoir appliqué votre FOV calculé :

1. **Vérifiez les virages** : Dans un virage que vous connaissez bien, les distances de freinage devraient correspondre à ce que vous ressentiriez en voiture réelle.
2. **Vérifiez la taille des voitures** : Les voitures adverses ne doivent pas sembler minuscules (FOV trop large) ou gigantesques (FOV trop étroit).
3. **Ajustez la hauteur de caméra** : Position du conducteur dans le habitacle pour que le capot/volant virtuel soit au bon endroit.

## FOV et triple écran

Sur triple écran, chaque panneau a son propre FOV. La règle : le panneau central conserve le FOV calculé, les panneaux latéraux se configurent à 90° moins l'angle de rotation de chaque panneau.

La plupart des simulateurs gèrent ça automatiquement si vous entrez les bonnes dimensions d'écran dans les paramètres.`,
  },

  // === AVIS ===
  {
    id: 4,
    category: 'Avis',
    title: 'Fanatec CSL DD QR2 8Nm : notre avis après 6 mois sur iRacing',
    excerpt:
      'La base direct drive la plus accessible du marché vaut-elle vraiment le coup en 2026 ? Après 6 mois d\'utilisation intensive sur iRacing et ACC, voici notre verdict sans filtre : ressentis, fiabilité, rapport qualité/prix.',
    image:
      'https://assets.fanatec.com/image/upload/c_fill,q_auto,h_400,w_600,f_auto/products/Wheel-Bases/CSL_DD_QR2L_180/CSL_DD_QR2L_180-01.webp',
    url: 'https://www.fanatec.com/eu/en/p/wheel-bases/csl_dd_qr2l_8nm_eu/csl-dd-qr2-lite-8-nm-eu',
  },
  {
    id: 5,
    category: 'Avis',
    title: 'Heusinkveld Sprint : le meilleur pédalier load cell à moins de 700€ ?',
    excerpt:
      'Les pédales Sprint d\'Heusinkveld sont la référence à ce prix. Précision du freinage load cell, robustesse acier, installation et ajustabilité — on a tout testé pendant 4 mois sur GT3 et LMP2.',
    image:
      'https://trakracer.eu/cdn/shop/files/SimPedalsSprint3-pedalset_fb5e9a69-f3e9-4471-b87b-58d52fa466d2_grande.png?v=1724415930',
    url: 'https://heusinkveld.com/shop/sprint-pedals/sprint-3-pedal-set/',
  },
  {
    id: 6,
    category: 'Avis',
    title: 'Sim-Lab P1X Pro : le cockpit aluminium qui change tout',
    excerpt:
      'Construction aluminium extrudé, rigidité maximale, compatibilité universelle pédaliers et bases — le Sim-Lab P1X Pro est-il l\'investissement cockpit incontournable ou un luxe pour passionnés ? Notre test complet.',
    image: 'https://thefrenchsimracer.com/cdn/shop/files/Sim-Lab-P1X-Pro-Sim-Lab-252642938.png',
    url: 'https://thefrenchsimracer.com/en/products/sim-lab-p1x-pro-cockpit',
  },

  // === SETUP ===
  {
    id: 7,
    category: 'Setup',
    title: 'Setup simracing complet à moins de 500€ en 2026',
    excerpt:
      'Un setup complet, jouable et confortable pour 500€ : notre sélection volant entrée de gamme + pédalier + cockpit. Tout pour bien débuter sans compromis sur le plaisir de conduite, avec les produits disponibles en France.',
    image: 'https://nextlevelracing.com/wp-content/uploads/2020/02/F-GT-Lite.webp',
    url: '/guides/setup-simracing-500-euros',
    slug: 'setup-simracing-500-euros',
    content: `## Le setup complet à 500€ : c'est possible en 2026

La baisse des prix du Direct Drive et l'arrivée de cockpits compacts de qualité ont rendu le setup complet accessible à 500€. Voici notre sélection optimisée pour ce budget.

## La configuration recommandée

### Base DD : Fanatec CSL DD 5Nm — 200€
Le choix évident. Direct Drive pour le prix d'un volant à courroie premium. Compatible Xbox et PC.

Prenez absolument le **booster PSU90 (20€)** en même temps pour débloquer 8Nm — ça change l'expérience.

### Pédalier : Fanatec CSL Pedals LC — 120€
Le premier pédalier load cell accessible. La pédale de frein load cell est LA différence qui améliore votre freinage. Évitez les pédaliers à ressort à ce budget.

Alternative : **MOZA SR-P Lite (99€)** si vous êtes sur MOZA.

### Cockpit : Next Level Racing F-GT Lite — 160€
Cockpit compact, réglable, compatible tous types de sièges. Fixation solide pour le volant et les pédales. Se monte en 30 minutes.

### Total estimé : ~500€

| Composant | Produit | Prix |
|-----------|---------|------|
| Base DD | Fanatec CSL DD + PSU90 | 220€ |
| Pédalier | Fanatec CSL Pedals LC | 120€ |
| Cockpit | NLR F-GT Lite | 160€ |
| **Total** | | **~500€** |

*Prix indicatifs, vérifiez les disponibilités.*

## Ce qui est sacrifié à ce budget

- **Volant dédié** : Le volant inclus avec les bundles Fanatec est basique. Un upgrade (Fanatec ClubSport Steering Wheel 330, ~120€) change le ressenti.
- **Siège baquet** : Le F-GT Lite est prévu pour recevoir un siège ou s'utiliser sans. Ajoutez 100-200€ pour un siège correct.
- **Load cell haut de gamme** : Les pédales CSL LC sont bonnes, mais pas dans la ligue des Heusinkveld Sprint. Suffisant pour débuter.

## Évolution du setup

Ce setup se fait évoluer facilement :
1. **Étape 1** (maintenant) : CSL DD + CSL Pedals LC + F-GT Lite
2. **Étape 2** (+300€) : Meilleur volant (ClubSport ou MOZA)
3. **Étape 3** (+650€) : Pédales Heusinkveld Sprint

L'avantage du CSL DD est sa compatibilité QR2 : les volants s'échangent en 2 secondes.

## Où acheter en France

- Fanatec : shop.fanatec.com (livraison depuis l'UE, 5-10 jours)
- MOZA : eu.mozaracing.com
- Next Level Racing : amazon.fr ou nextlevelracing.com`,
  },
  {
    id: 8,
    category: 'Setup',
    title: 'Setup mid-range à 1500€ : MOZA R9 + Heusinkveld + F-GT Lite',
    excerpt:
      'À 1500€, on entre dans la zone direct drive sérieux. MOZA R9 V3 (9Nm), Heusinkveld Sprint et un cockpit solide : la combinaison qui fait des étincelles sur iRacing, GT7 et Assetto Corsa 2. Détail des prix et alternatives inclus.',
    image: 'https://eu.mozaracing.com/cdn/shop/files/R9_V3-1.webp?v=1767606165',
    url: '/guides/setup-simracing-1500-euros',
    slug: 'setup-simracing-1500-euros',
    content: `## Le setup mid-range : le sweet spot en 2026

À 1500€, vous entrez dans une zone où chaque composant est sérieux. Ni compromis, ni superflu. C'est le budget où la majorité des simraceurs réguliers se situent.

## La configuration MOZA mid-range

### Base : MOZA R9 V3 9Nm — 349€
9Nm de couple, moteur brushless dernier génération, software Pit House régulièrement mis à jour. Un des meilleurs rapports qualité/prix du marché en 2026.

Le R9 V3 se distingue du R9 classique par son moteur amélioré et ses performances thermiques. Sur les longues sessions, la différence se sent.

### Pédalier : Heusinkveld Sprint 3 pédales — 649€
**Le meilleur investissement de ce setup.** Les Sprint sont en construction acier brossé, avec cellule de charge sur le frein et l'embrayage. La pédale de frein est calibrée à 60kg par défaut — vous pouvez l'ajuster.

Sur iRacing, la différence entre un pédalier classique et les Sprint se traduit directement en temps au tour. Le freinage devient reproductible, prévisible, précis.

### Cockpit : Sim-Lab P1X — 350€
Construction aluminium extrudé, réglages millimétriques, extrêmement rigide. Aucun flex, aucun mouvement parasite. Compatible avec tous les sièges de compétition.

### Volant : MOZA ES Steering Wheel — 149€
Volant 320mm de qualité. Très bonne texture, prise en main naturelle. Compatible avec toutes les bases MOZA (Quick Release Hub).

### Total estimé : ~1500€

| Composant | Produit | Prix |
|-----------|---------|------|
| Base | MOZA R9 V3 | 349€ |
| Pédalier | Heusinkveld Sprint 3P | 649€ |
| Cockpit | Sim-Lab P1X | 350€ |
| Volant | MOZA ES SW | 149€ |
| **Total** | | **~1500€** |

## Pourquoi ce combo ?

Le MOZA R9 V3 est reconnu pour son retour de force linéaire et précis. Les Heusinkveld Sprint sont la référence à ce prix depuis des années. Le Sim-Lab élimine toute flexion parasite.

Cette combinaison est utilisée par de nombreux pilotes de niveau intermédiaire à confirmé sur les championnats communautaires iRacing.

## Alternatives

**Si vous voulez plus de couple** : Remplacez le R9 V3 par le Simagic Alpha Mini (459€, 15Nm). Coût total ~1650€.

**Si vous voulez économiser sur le pédalier** : Fanatec CSL Pedals LC (120€) à la place des Sprint. Économie de 530€, mais vous perdrez en précision de freinage.

**Si vous êtes sur console** : Pas d'alternative MOZA (PC only). Regardez Fanatec CSL DD + Clubsport V3 Pedals.

## Simulateurs recommandés avec ce setup

Ce niveau de matériel justifie d'investir dans iRacing. Le retour sur investissement du logiciel se fait sentir avec ce hardware.

Recommandations :
1. **iRacing** — Pour la compétition organisée
2. **Assetto Corsa 2** — Pour le plaisir de conduite libre
3. **Le Mans Ultimate** — Pour l'endurance LMP`,
  },
  {
    id: 9,
    category: 'Setup',
    title: 'Setup expert à 3000€ : Simagic Alpha U + Heusinkveld + Sim-Lab P1X Pro',
    excerpt:
      'Pour le simraceur sérieux qui veut un équipement proche du professionnel : Simagic Alpha U 23Nm, Heusinkveld Sprint 3 pédales et Sim-Lab P1X Pro. La configuration ultime, à budget maîtrisé.',
    image: 'https://simagic.com/cdn/shop/files/Alpha_U_transparent_base.png?v=1766651871',
    url: '/guides/setup-simracing-3000-euros',
    slug: 'setup-simracing-3000-euros',
    content: `## Le setup expert : l'équipement des compétiteurs

À 3000€, vous entrez dans la zone des setups utilisés par les équipes esport professionnelles et les pilotes de simulation d'usine. Voici la configuration la plus efficace à ce budget.

## La configuration expert Simagic

### Base : Simagic Alpha U 23Nm — 799€
23Nm de couple dans un châssis compact. L'Alpha U est la base préférée des pilotes GT en compétition sérieuse. Son moteur triple phase brushless délivre un retour de force d'une précision remarquable, avec une latence quasi nulle.

Comparé à l'Alpha Mini (15Nm), l'Alpha U apporte une différence perceptible sur les formules et les voitures à fort appui. Chaque détail du grip arrière se traduit directement dans vos mains.

### Pédalier : Heusinkveld Sprint 3 pédales — 649€
La référence incontestée à ce prix. Frein load cell à 60kg (configurable), gaz et embrayage ajustables. Construction acier chirurgicale.

À ce niveau de budget, certains pilotes upgrade vers les **Heusinkveld Ultimate+** (1500€), mais les Sprint restent excellents même face à des bases à 2000€+.

### Cockpit : Sim-Lab P1X Pro — 599€
La version Pro du P1X ajoute des profilés plus épais et une rigidité supérieure. Sur une base 23Nm, la rigidité du cockpit est critique — chaque flex parasite perturbe le ressenti.

Compatible DDU, shifter, handbrake. Position F1, GT, ou hybride.

### Volant : Simagic GTC Wheel — 299€
Volant GT Carbon 320mm, pédale de frein intégrée (pour formule), boutons programmables. Texture carbone très agréable, construction solide.

### Shifter + Handbrake : Fanatec Clubsport Shifter + Handbrake — 200€
Pour les configurations GT et endurance. Le shifter Clubsport est considéré comme la référence sous 300€.

### Total estimé : ~2550-2800€

| Composant | Produit | Prix |
|-----------|---------|------|
| Base | Simagic Alpha U 23Nm | 799€ |
| Pédalier | Heusinkveld Sprint 3P | 649€ |
| Cockpit | Sim-Lab P1X Pro | 599€ |
| Volant | Simagic GTC | 299€ |
| Shifter/HB | Fanatec Clubsport | 200€ |
| **Total** | | **~2550€** |

## Pourquoi ce setup bat des configs à 5000€+

La loi des rendements décroissants s'applique au simracing. Au-delà de 3000€, les gains en précision sont marginaux. Cette configuration atteint ~90% du niveau des setups pro à 8000€+ sur les métriques objectives (latence, résolution du signal, reproduciblilté).

Ce que vous n'avez pas à ce prix :
- Motion (siège mobile) — ajoute une dimension de sensation mais coûte 2000-8000€
- Load cell 3 axes sur les pédales — Heusinkveld Ultimate+ uniquement
- Rumble kit dans le siège — accessoire, pas essentiel

## Pour qui est ce setup ?

- Pilotes iRacing visant les Series A/B ou les championnats officiels
- Simraceurs sur Assetto Corsa 2 avec abonnement GT World Challenge
- Pilotes en reconversion qui s'entraînent sérieusement
- Streamers/créateurs de contenu simracing

## Le conseil de Seb

*"J'utilise l'Alpha U depuis 8 mois. La différence avec mon ancien MOZA R12 était immédiate : le ressenti du grip avant en limite de sous-virage est nettement plus lisible. Mes temps sur le Nordschleife ont baissé de 12 secondes en 3 semaines. Pas uniquement à cause de la base, mais elle y contribue."*`,
  },
]
