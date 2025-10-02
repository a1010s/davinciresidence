/*
 * ============================================
 * SPECIAL OFFERS CONFIGURATION
 * ============================================
 * 
 * HOW TO EDIT THIS FILE (SUPER EASY!):
 * 
 * 1. Find the offer you want to change (Offer 1, 2, or 3)
 * 2. Edit the text between the quotes "like this"
 * 3. Save the file
 * 4. Run: git add . && git commit -m "Updated offers" && git push
 * 5. Wait 2 minutes - your site is updated!
 * 
 * IMPORTANT: 
 * - Keep the quotes " around text
 * - Keep the commas , at the end of each line
 * - Don't delete any { or }
 * 
 * ============================================
 */

const SPECIAL_OFFERS = {
  
  // ========== OFFER 1 (Featured Offer) ==========
  offer1: {
    featured: true,                    // true = shows "FEATURED" badge
    icon: "fa-sun",                    // Icon: fa-sun, fa-heart, fa-snowflake, fa-umbrella-beach, fa-gift
    
    title_en: "Summer 2025 Early Bird",
    title_de: "Sommer 2025 Frühbucher",
    title_it: "Estate 2025 Early Bird",
    title_ro: "Vară 2025 Early Bird",
    title_fr: "Été 2025 Réservation Anticipée",
    
    discount: "15% OFF",               // e.g., "15% OFF", "20% DISCOUNT", "€50 OFF"
    
    description_en: "Book your summer vacation now and save 15% on stays of 7+ nights!",
    description_de: "Buchen Sie jetzt Ihren Sommerurlaub und sparen Sie 15% bei Aufenthalten von 7+ Nächten!",
    description_it: "Prenota ora la tua vacanza estiva e risparmia il 15% su soggiorni di 7+ notti!",
    description_ro: "Rezervați-vă acum vacanța de vară și economisiți 15% la sejururi de 7+ nopți!",
    description_fr: "Réservez vos vacances d'été maintenant et économisez 15% sur les séjours de 7+ nuits!",
    
    validity_en: "Valid: January - March 2025",
    validity_de: "Gültig: Januar - März 2025",
    validity_it: "Valido: Gennaio - Marzo 2025",
    validity_ro: "Valabil: Ianuarie - Martie 2025",
    validity_fr: "Valable: Janvier - Mars 2025",
  },
  
  // ========== OFFER 2 ==========
  offer2: {
    featured: false,
    icon: "fa-calendar-week",
    
    title_en: "Weekly Stay Discount",
    title_de: "Wochenaufenthalt Rabatt",
    title_it: "Sconto Soggiorno Settimanale",
    title_ro: "Discount Sejur Săptămânal",
    title_fr: "Réduction Séjour Hebdomadaire",
    
    discount: "10% OFF",
    
    description_en: "Stay 7 nights or more and enjoy 10% off your booking!",
    description_de: "Bleiben Sie 7 Nächte oder länger und genießen Sie 10% Rabatt auf Ihre Buchung!",
    description_it: "Soggiorna 7 notti o più e goditi il 10% di sconto sulla tua prenotazione!",
    description_ro: "Stați 7 nopți sau mai mult și bucurați-vă de 10% reducere la rezervare!",
    description_fr: "Séjournez 7 nuits ou plus et profitez de 10% de réduction sur votre réservation!",
    
    validity_en: "Valid: Year-round",
    validity_de: "Gültig: Ganzjährig",
    validity_it: "Valido: Tutto l'anno",
    validity_ro: "Valabil: Tot anul",
    validity_fr: "Valable: Toute l'année",
  },
  
  // ========== OFFER 3 ==========
  offer3: {
    featured: false,
    icon: "fa-heart",
    
    title_en: "Last Minute Deal",
    title_de: "Last-Minute-Angebot",
    title_it: "Offerta Last Minute",
    title_ro: "Ofertă Last Minute",
    title_fr: "Offre de Dernière Minute",
    
    discount: "20% OFF",
    
    description_en: "Book within 7 days of arrival and save 20%! Subject to availability.",
    description_de: "Buchen Sie innerhalb von 7 Tagen vor Ankunft und sparen Sie 20%! Vorbehaltlich Verfügbarkeit.",
    description_it: "Prenota entro 7 giorni dall'arrivo e risparmia il 20%! Soggetto a disponibilità.",
    description_ro: "Rezervați în 7 zile de la sosire și economisiți 20%! Sub rezerva disponibilității.",
    description_fr: "Réservez dans les 7 jours suivant l'arrivée et économisez 20%! Sous réserve de disponibilité.",
    
    validity_en: "Valid: Year-round",
    validity_de: "Gültig: Ganzjährig",
    validity_it: "Valido: Tutto l'anno",
    validity_ro: "Valabil: Tot anul",
    validity_fr: "Valable: Toute l'année",
  }
  
};

/*
 * ============================================
 * EXAMPLE: How to Change an Offer
 * ============================================
 * 
 * Let's say you want to change Offer 1 to a Christmas special:
 * 
 * 1. Change icon: "fa-snowflake" (winter theme)
 * 2. Change title_en: "Christmas Special 2025"
 * 3. Change discount: "25% OFF"
 * 4. Change description_en: "Book for Christmas and New Year - save 25%!"
 * 5. Change validity_en: "Valid: December 15 - January 15"
 * 
 * Then repeat for other languages (de, it, ro, fr)
 * 
 * Save, commit, push - DONE!
 * 
 * ============================================
 * AVAILABLE ICONS:
 * ============================================
 * 
 * fa-sun           → Summer offers
 * fa-snowflake     → Winter offers
 * fa-heart         → Valentine's, romantic
 * fa-gift          → Special gifts
 * fa-umbrella-beach → Beach vacations
 * fa-calendar-week → Weekly stays
 * fa-bolt          → Flash sales, urgent
 * fa-star          → Premium offers
 * 
 * ============================================
 */

