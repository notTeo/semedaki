var PRODUCTS = [
  {
    "name": "Χυμός Pinky Blenders",
    "category": "Χυμοί",
    "price": "3,40 €",
    "description": "Με μπνανάνα, βύσσινο & νιφάδες βρώμηςΧυμός Red Rum",
    "image": "assets/images/χυμός-pinky-blenders.webp"
  },
  {
    "name": "Χυμός Pop Eye",
    "category": "Χυμοί",
    "price": "3,40 €",
    "description": "Με σπανάκι, μπρόκολο, μήλο & μέντα",
    "image": "assets/images/χυμός-pop-eye.webp"
  },
  {
    "name": "Χυμός Mind Blow",
    "category": "Χυμοί",
    "price": "3,40 €",
    "description": "Με καρότο, ροδάκινο, mango & κανέλα",
    "image": "assets/images/χυμός-mind-blow.webp"
  },
  {
    "name": "Χυμός Ginger Purple",
    "category": "Χυμοί",
    "price": "3,40 €",
    "description": "Με βατόμουρο, μπανάνα, αρώνια & ginger",
    "image": "assets/images/χυμός-ginger-purple.webp"
  },
  {
    "name": "Τσάι Πράσινο",
    "category": "Τσάι",
    "price": "1,90 €",
    "description": "Relax, πιες το αγαπημένο σου αφέψημα και αναζοωγόνησε σώμα και πνεύμα.",
    "image": "assets/images/τσάι-πράσινο.webp"
  },
  {
    "name": "Τσάι Μήλο & Κανέλα",
    "category": "Τσάι",
    "price": "1,90 €",
    "description": "Relax, πιες το αγαπημένο σου αφέψημα και αναζοωγόνησε σώμα και πνεύμα.",
    "image": "assets/images/τσάι-μήλο-and-κανέλα.webp"
  },
  {
    "name": "Χαμομήλι",
    "category": "Τσάι",
    "price": "1,90 €",
    "description": "Relax, πιες το αγαπημένο σου αφέψημα και αναζοωγόνησε σώμα και πνεύμα.",
    "image": "assets/images/χαμομήλι.webp"
  },
  {
    "name": "Τσάι Φρούτα Του Δάσους",
    "category": "Τσάι",
    "price": "1,90 €",
    "description": "Relax, πιες το αγαπημένο σου αφέψημα και αναζοωγόνησε σώμα και πνεύμα.",
    "image": "assets/images/τσάι-φρούτα-του-δάσους.webp"
  },
  {
    "name": "Τσάι Μαύρο",
    "category": "Τσάι",
    "price": "1,90 €",
    "description": "Relax, πιες το αγαπημένο σου αφέψημα και αναζοωγόνησε σώμα και πνεύμα.",
    "image": "assets/images/τσάι-μαύρο.webp"
  },
  {
    "name": "Τσάι Βουνού",
    "category": "Τσάι",
    "price": "1,90 €",
    "description": "Relax, πιες το αγαπημένο σου αφέψημα και αναζοωγόνησε σώμα και πνεύμα.",
    "image": "assets/images/τσάι-βουνού.webp"
  },
  {
    "name": "Cake Red Velvet",
    "category": "Γλυκά",
    "price": "5,40 €",
    "description": "",
    "image": "assets/images/cake-red-velvet.webp"
  },
  {
    "name": "Carrot Cake",
    "category": "Γλυκά",
    "price": "5,40 €",
    "description": "",
    "image": "assets/images/carrot-cake.webp"
  },
  {
    "name": "Cake Παντζαριού Με Κακάο",
    "category": "Γλυκά",
    "price": "4,00 €",
    "description": "",
    "image": "assets/images/cake-παντζαριού-με-κακάο.webp"
  },
  {
    "name": "Κρουασάν Βουτύρου",
    "category": "Snacks Γλυκά",
    "price": "2,50 €",
    "description": "Όπου κι αν βρίσκεσαι αυτή τη στιγμή, θα είσαι πιο κοντά στην ευτυχία, με ένα κρουασάν βουτύρου. Δεν το πιστεύεις; Δοκίμασέ το, πιάνει!",
    "image": "assets/images/κρουασάν-βουτύρου.webp"
  },
  {
    "name": "Cake Πορτοκάλι",
    "category": "Snacks Γλυκά",
    "price": "2,00 €",
    "description": "",
    "image": "assets/images/cake-πορτοκάλι.webp"
  },
  {
    "name": "Κρουασάν Vegan Blueberry",
    "category": "Snacks Γλυκά",
    "price": "2,80 €",
    "description": "",
    "image": "assets/images/κρουασάν-vegan-blueberry.webp"
  },
  {
    "name": "Banana Bread",
    "category": "Snacks Γλυκά",
    "price": "4,50 €",
    "description": "Κομμάτι",
    "image": "assets/images/banana-bread.webp"
  },
  {
    "name": "Cake Ανάμεικτο",
    "category": "Snacks Γλυκά",
    "price": "2,50 €",
    "description": "Κομμάτι",
    "image": "assets/images/cake-ανάμεικτο.webp"
  },
  {
    "name": "Κρουασάν Πραλίνα",
    "category": "Snacks Γλυκά",
    "price": "3,00 €",
    "description": "Τι είναι καλύτερο από ένα κρουασάν; Ένα κρουασάν σοκολάτας! Απόλαυσε κάθε μπουκιά, από αυτό το αγαπημένο σνακ.",
    "image": "assets/images/κρουασάν-πραλίνα.webp"
  },
  {
    "name": "Negroni",
    "category": "Cocktails",
    "price": "6,00 €",
    "description": "Gin, Campari & Martini Rosso",
    "image": "assets/images/negroni.webp"
  },
  {
    "name": "Margarita",
    "category": "Cocktails",
    "price": "7,00 €",
    "description": "Cazadores bianco, lime & triple sec",
    "image": "assets/images/margarita.webp"
  },
  {
    "name": "Mojito",
    "category": "Cocktails",
    "price": "7,00 €",
    "description": "Bacardi carta blanca, lime, sugar & mint",
    "image": "assets/images/mojito.webp"
  },
  {
    "name": "Σπιτική Λεμονάδα",
    "category": "Φυσικοί Χυμοί",
    "price": "3,00 €",
    "description": "Κάθε γουλιά σε ταξιδεύει σε μέρη με ήλιο, αρώματα και καλή ενέργεια. Παράγγειλε και απόλαυσε δροσιά και φρεσκάδα, στο ποτήρι!",
    "image": "assets/images/σπιτική-λεμονάδα.webp"
  },
  {
    "name": "Φυσικός Χυμός Σεμεδάκι",
    "category": "Φυσικοί Χυμοί",
    "price": "3,30 €",
    "description": "Με 4 φρούτα εποχής, μέλι & ginger",
    "image": "assets/images/φυσικός-χυμός-σεμεδάκι.webp"
  },
  {
    "name": "Σπιτική Λεμονάδα Σεμεδάκι",
    "category": "Φυσικοί Χυμοί",
    "price": "4,00 €",
    "description": "Με λεμόνι, φράουλα, ginger & Mastiqua",
    "image": "assets/images/σπιτική-λεμονάδα-σεμεδάκι.webp"
  },
  {
    "name": "Φυσικός Χυμός Ανάμεικτος",
    "category": "Φυσικοί Χυμοί",
    "price": "3,30 €",
    "description": "Τα φρούτα της ημέρας σε ένα ρόφημα! Παράγγειλε ανάμεικτο φυσικό χυμό και πάρε τα απαραίτητα θρεπτικά συστατικά, με τον πιο φυσικό τρόπο.",
    "image": "assets/images/φυσικός-χυμός-ανάμεικτος.webp"
  },
  {
    "name": "Φυσικός Χυμός Detox",
    "category": "Φυσικοί Χυμοί",
    "price": "3,30 €",
    "description": "Με πορτοκάλι, ρόδι & ginger",
    "image": "assets/images/φυσικός-χυμός-detox.webp"
  },
  {
    "name": "Σπιτική Λεμονάδα Με Mastiqua",
    "category": "Φυσικοί Χυμοί",
    "price": "4,00 €",
    "description": "Κάθε γουλιά σε ταξιδεύει σε μέρη με ήλιο, αρώματα και καλή ενέργεια. Παράγγειλε και απόλαυσε δροσιά και φρεσκάδα, στο ποτήρι!",
    "image": "assets/images/σπιτική-λεμονάδα-με-mastiqua.webp"
  },
  {
    "name": "Φυσικός Χυμός Πορτοκάλι",
    "category": "Φυσικοί Χυμοί",
    "price": "2,80 €",
    "description": "Φήμες λένε πως όταν πίνεις έναν φυσικό χυμό πορτοκάλι, στα αυτιά σου ακούγεται \"πιες τον γρήγορα, θα χάσει τις βιταμίνες του\". Παράγγειλε γρήγορα, απόλαυσε γρήγορα και πάρε όλες τις βιταμίνες.",
    "image": "assets/images/φυσικός-χυμός-πορτοκάλι.webp"
  },
  {
    "name": "Espresso Ristretto",
    "category": "Καφέδες",
    "price": "1,80 €",
    "description": "Ristretto σημαίνει περιορισμός, αλλά εσύ μπορείς να απολαμβάνεις χωρίς περιορισμό τον espresso που εκχυλίζεται με τη μισή ποσότητα νερού.",
    "image": "assets/images/espresso-ristretto.webp"
  },
  {
    "name": "Cappuccino Latte",
    "category": "Καφέδες",
    "price": "2,60 €",
    "description": "Ένας απαλός espresso με ζεστό γάλα & μια διακριτική στρώση αφρού.",
    "image": "assets/images/cappuccino-latte.webp"
  },
  {
    "name": "Freddo Cappuccino Latte",
    "category": "Καφέδες",
    "price": "3,00 €",
    "description": "Never too late for a latte. Παγωμένος και γεμάτος γεύση, αυτός ο καφές καταναλώνεται κάθε εποχή του χρόνου, κάθε μέρα της εβδομάδας, κάθε ώρα της μέρας.",
    "image": "assets/images/freddo-cappuccino-latte.webp"
  },
  {
    "name": "Flat White",
    "category": "Καφέδες",
    "price": "2,50 €",
    "description": "Διπλός",
    "image": "assets/images/flat-white.webp"
  },
  {
    "name": "Cappuccino",
    "category": "Καφέδες",
    "price": "2,30 €",
    "description": "Ένας δυνατός espresso με πλούσιο, βελούδινο αφρόγαλα, σε έναν κλασικό συνδυασμό γεύσης & υφής.",
    "image": "assets/images/cappuccino.webp"
  },
  {
    "name": "Espresso Lungo",
    "category": "Καφέδες",
    "price": "1,80 €",
    "description": "Ένας δυνατός & πλούσιος καφές γεμάτος ένταση & άρωμα.",
    "image": "assets/images/espresso-lungo.webp"
  },
  {
    "name": "Frappe",
    "category": "Καφέδες",
    "price": "2,10 €",
    "description": "Ο κλασικός ελληνικός στιγμιαίος καφές που αγαπάς, ιδανικός για να σε τονώσει κάθε στιγμή.",
    "image": "assets/images/frappe.webp"
  },
  {
    "name": "Freddo Cappuccino",
    "category": "Καφέδες",
    "price": "2,50 €",
    "description": "Παγωμένος espresso με κρύο αφρόγαλα. H Ευρωπαϊκή εκδοχή του κρύου καφέ, που σε δροσίζει και σε ξυπνάει με κάθε γουλιά.",
    "image": "assets/images/freddo-cappuccino.webp"
  },
  {
    "name": "Ελληνικός",
    "category": "Καφέδες",
    "price": "1,70 €",
    "description": "Αν εσύ ψήνεσαι για καφέ, ο ελληνικός, ψήνεται σίγουρα! Η ξεχωριστή του πικράδα, τα γλυκά αρώματα και το έντονο άρωμά του, κάνουν τον ελληνικό, τον καφέ που πίνεται κάθε στιγμή της ημέρας.",
    "image": "assets/images/ελληνικός.webp"
  },
  {
    "name": "Freddo Espresso",
    "category": "Καφέδες",
    "price": "2,30 €",
    "description": "Η ένταση του espresso σε μια δροσερή, βελούδινη εκδοχή, ιδανική για να σε τονώσει.",
    "image": "assets/images/freddo-espresso.webp"
  },
  {
    "name": "Espresso Macchiato",
    "category": "Καφέδες",
    "price": "2,10 €",
    "description": "Macchiato στα ιταλικά σημαίνει «σημαδεμένος» και κάτι μας λέει ότι αυτός ο espresso με λίγο γάλα, θα σε σημαδέψει!",
    "image": "assets/images/espresso-macchiato.webp"
  },
  {
    "name": "Freddo Espresso Macchiato",
    "category": "Καφέδες",
    "price": "2,40 €",
    "description": "Macchiato στα ιταλικά σημαίνει «σημαδεμένος» και κάτι μας λέει ότι αυτός ο espresso με λίγο γάλα, θα σε σημαδέψει!",
    "image": "assets/images/freddo-espresso-macchiato.webp"
  },
  {
    "name": "Espresso",
    "category": "Καφέδες",
    "price": "1,80 €",
    "description": "Ένας δυνατός & πλούσιος καφές γεμάτος ένταση & άρωμα.",
    "image": "assets/images/espresso.webp"
  },
  {
    "name": "Espresso Americano",
    "category": "Καφέδες",
    "price": "1,80 €",
    "description": "Ένας δυνατός espresso με απαλή γεύση, αραιωμένος με ζεστό νερό.",
    "image": "assets/images/espresso-americano.webp"
  },
  {
    "name": "Nes",
    "category": "Καφέδες",
    "price": "2,10 €",
    "description": "Πες ναι σε έναν Nes! Αυτός ο στιγμιαίος καφές θα σε ζεστάνει στη στιγμή, ενώ η γεύση του θα σε συνοδεύει για όλη την ημέρα.",
    "image": "assets/images/nes.webp"
  },
  {
    "name": "Milkshake French Vanilla",
    "category": "Milkshakes",
    "price": "4,50 €",
    "description": "Milkshake ή αλλιώς \"παγωτό να το πιεις στο ποτήρι\". Το συνώνυμο καλοκαιριού έρχεται στην πόρτα σου και μαζί φέρνει λίγη από την ανεμελιά των διακοπών!",
    "image": "assets/images/milkshake-french-vanilla.webp"
  },
  {
    "name": "Milkshake Banana & Pineapple",
    "category": "Milkshakes",
    "price": "4,50 €",
    "description": "Milkshake ή αλλιώς \"παγωτό να το πιεις στο ποτήρι\". Το συνώνυμο καλοκαιριού έρχεται στην πόρτα σου και μαζί φέρνει λίγη από την ανεμελιά των διακοπών!",
    "image": "assets/images/milkshake-banana-and-pineapple.webp"
  },
  {
    "name": "Milkshake Toffee Caramel",
    "category": "Milkshakes",
    "price": "4,50 €",
    "description": "Milkshake ή αλλιώς \"παγωτό να το πιεις στο ποτήρι\". Το συνώνυμο καλοκαιριού έρχεται στην πόρτα σου και μαζί φέρνει λίγη από την ανεμελιά των διακοπών!",
    "image": "assets/images/milkshake-toffee-caramel.webp"
  },
  {
    "name": "Milkshake Real Strawberry",
    "category": "Milkshakes",
    "price": "4,50 €",
    "description": "Milkshake ή αλλιώς \"παγωτό να το πιεις στο ποτήρι\". Το συνώνυμο καλοκαιριού έρχεται στην πόρτα σου και μαζί φέρνει λίγη από την ανεμελιά των διακοπών!",
    "image": "assets/images/milkshake-real-strawberry.webp"
  },
  {
    "name": "Milkshake Black Forest",
    "category": "Milkshakes",
    "price": "5,00 €",
    "description": "Milkshake ή αλλιώς \"παγωτό να το πιεις στο ποτήρι\". Το συνώνυμο καλοκαιριού έρχεται στην πόρτα σου και μαζί φέρνει λίγη από την ανεμελιά των διακοπών!",
    "image": "assets/images/milkshake-black-forest.webp"
  },
  {
    "name": "Panini Chicken Parm",
    "category": "Sandwiches",
    "price": "7,50 €",
    "description": "Με κοτόπουλο πανέ, flakes παρμεζάνας, iceberg & sauce γιαουρτιού",
    "image": "assets/images/panini-chicken-parm.webp"
  },
  {
    "name": "Panini Prosciutto",
    "category": "Sandwiches",
    "price": "7,50 €",
    "description": "Με prosciutto, flakes παρμεζάνας, ντοματίνια, ρόκα, μαγιονέζα & κρέμα βαλσάμικο",
    "image": "assets/images/panini-prosciutto.webp"
  },
  {
    "name": "Panini Γαλοπούλα",
    "category": "Sandwiches",
    "price": "6,00 €",
    "description": "Με γαλοπούλα, gouda, iceberg & μαγιονέζα",
    "image": "assets/images/panini-γαλοπούλα.webp"
  },
  {
    "name": "Κουλούρι Θεσσαλονίκης Philadelphia & Γαλοπούλα",
    "category": "Snacks Αλμυρά",
    "price": "2,50 €",
    "description": "",
    "image": "assets/images/κουλούρι-θεσσαλονίκης-philadelphia-and-γαλοπούλα.webp"
  },
  {
    "name": "Τυρόπιτα Κουρού Με Φέτα",
    "category": "Snacks Αλμυρά",
    "price": "2,00 €",
    "description": "Τραγανή & νόστιμη σε κάθε μπουκιάΚουλούρι Θεσσαλονίκης",
    "image": "assets/images/τυρόπιτα-κουρού-με-φέτα.webp"
  },
  {
    "name": "Τοστ Γαλοπούλα",
    "category": "Snacks Αλμυρά",
    "price": "2,50 €",
    "description": "Με γαλοπούλα & edam",
    "image": "assets/images/τοστ-γαλοπούλα.webp"
  },
  {
    "name": "Τορτίγια Κοτόπουλο",
    "category": "Snacks Αλμυρά",
    "price": "6,00 €",
    "description": "Με κοτόπουλο, καλαμπόκι, cheddar, iceberg & μαγιονέζα",
    "image": "assets/images/τορτίγια-κοτόπουλο.webp"
  },
  {
    "name": "Pretzel",
    "category": "Snacks Αλμυρά",
    "price": "1,80 €",
    "description": "",
    "image": "assets/images/pretzel.webp"
  },
  {
    "name": "Τυροκούλουρο",
    "category": "Snacks Αλμυρά",
    "price": "1,80 €",
    "description": "Κλασική επιλογή για κάθε στιγμή",
    "image": "assets/images/τυροκούλουρο.webp"
  },
  {
    "name": "Κοτόπιτα Ταψιού",
    "category": "Snacks Αλμυρά",
    "price": "3,00 €",
    "description": "Αν η γιαγιά μαγείρευε σήμερα, θα έφτιαχνε, τι άλλο; Πίτα! Απόλαυσε ένα χορταστικό κομμάτι αυτής της αγαπημένης παρασοδιακής πίτας, κάθε ώρα της ημέρας.",
    "image": "assets/images/κοτόπιτα-ταψιού.webp"
  },
  {
    "name": "Τυρόπιτα Ταψιού",
    "category": "Snacks Αλμυρά",
    "price": "2,50 €",
    "description": "Say cheeeeeese! Χαμογέλασε, μια πεντανόστιμη τυρόπιτα έρχεται στην πόρτα σου. Παράγγειλε το πιο νόστιμο γεύμα/σνακ της ημέρας.",
    "image": "assets/images/τυρόπιτα-ταψιού.webp"
  },
  {
    "name": "Νερό 500ml",
    "category": "Αναψυκτικά",
    "price": "0,50 €",
    "description": "Το νερό είναι ιδανικό για να σε κρατά ενυδατωμένο & δροσερό οποιαδήποτε στιγμή της ημέρας.",
    "image": "assets/images/νερό-500ml.webp"
  },
  {
    "name": "Ανθαρκούχο Νερό 250ml",
    "category": "Αναψυκτικά",
    "price": "1,50 €",
    "description": "",
    "image": "assets/images/ανθαρκούχο-νερό-250ml.webp"
  },
  {
    "name": "Three Cents Pink Grapefruit Soda 200ml",
    "category": "Αναψυκτικά",
    "price": "3,00 €",
    "description": "Η ανάλαφρη φρεσκάδα που ξεχωρίζει, με γεύση ροζ grapefruit.",
    "image": "assets/images/three-cents-pink-grapefruit-soda-200ml.webp"
  },
  {
    "name": "Mastiqua 330ml",
    "category": "Αναψυκτικά",
    "price": "3,00 €",
    "description": "",
    "image": "assets/images/mastiqua-330ml.webp"
  },
  {
    "name": "Σοκολάτα Λευκή",
    "category": "Ροφήματα Σοκολάτας",
    "price": "2,80 €",
    "description": "Απολαυστικό ρόφημα σοκολάτας, γεμάτο γεύση & αρώματα.",
    "image": "assets/images/σοκολάτα-λευκή.webp"
  },
  {
    "name": "Σοκολάτα Snickers",
    "category": "Ροφήματα Σοκολάτας",
    "price": "3,00 €",
    "description": "Απολαυστικό ρόφημα σοκολάτας, γεμάτο γεύση & αρώματα.",
    "image": "assets/images/σοκολάτα-snickers.webp"
  },
  {
    "name": "Σοκολάτα Φράουλα",
    "category": "Ροφήματα Σοκολάτας",
    "price": "3,00 €",
    "description": "Απολαυστικό ρόφημα σοκολάτας, γεμάτο γεύση & αρώματα.",
    "image": "assets/images/σοκολάτα-φράουλα.webp"
  },
  {
    "name": "Σοκολάτα",
    "category": "Ροφήματα Σοκολάτας",
    "price": "2,80 €",
    "description": "Απολαυστικό ρόφημα σοκολάτας, γεμάτο γεύση & αρώματα.",
    "image": "assets/images/σοκολάτα.webp"
  },
  {
    "name": "Σοκολάτα Bitter",
    "category": "Ροφήματα Σοκολάτας",
    "price": "2,70 €",
    "description": "Απολαυστικό ρόφημα σοκολάτας, γεμάτο γεύση & αρώματα.",
    "image": "assets/images/σοκολάτα-bitter.webp"
  },
  {
    "name": "Σοκολάτα Bueno",
    "category": "Ροφήματα Σοκολάτας",
    "price": "3,00 €",
    "description": "Απολαυστικό ρόφημα σοκολάτας, γεμάτο γεύση & αρώματα.",
    "image": "assets/images/σοκολάτα-bueno.webp"
  },
  {
    "name": "Σοκολάτα Red Velvet",
    "category": "Ροφήματα Σοκολάτας",
    "price": "3,00 €",
    "description": "Η σοκολάτα είναι η απάντηση, όποια κι αν είναι η ερώτηση. Απόλαυσε κάθε ώρα της ημέρας ή και της νύχτας, σοκολάτα είναι, δεν έχει do's and don'ts.",
    "image": "assets/images/σοκολάτα-red-velvet.webp"
  },
  {
    "name": "Smoothie Ginger Purple",
    "category": "Smoothies",
    "price": "3,40 €",
    "description": "Με γιαούρτι, βατόμουρο, μπανάνα, αρώνια & ginger",
    "image": "assets/images/smoothie-ginger-purple.webp"
  },
  {
    "name": "Smoothie Pop Eye",
    "category": "Smoothies",
    "price": "3,40 €",
    "description": "Με γιαούρτι, σπανάκι, μπρόκολο, μήλο & μέντα",
    "image": "assets/images/smoothie-pop-eye.webp"
  },
  {
    "name": "Smoothie Red Rum",
    "category": "Smoothies",
    "price": "3,40 €",
    "description": "Με γιαούρτι, φράουλα, κεράσι & σπόρους chia",
    "image": "assets/images/smoothie-red-rum.webp"
  },
  {
    "name": "Smoothie Pinky Blenders",
    "category": "Smoothies",
    "price": "3,40 €",
    "description": "Με γιαούρτι, μπνανάνα, βύσσινο & νιφάδες βρώμης",
    "image": "assets/images/smoothie-pinky-blenders.webp"
  },
  {
    "name": "Smoothie Detox",
    "category": "Smoothies",
    "price": "3,40 €",
    "description": "Με γιαούρτι, ανανά, mango, μήλο & μένταSmoothie Mind Blow",
    "image": "assets/images/smoothie-detox.webp"
  }
];