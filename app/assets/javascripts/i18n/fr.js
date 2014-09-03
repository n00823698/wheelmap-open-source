var I18n = I18n || {};
I18n.translations = {"fr":{"devise":{"confirmations":{"confirmed":"Votre adresse mail a \u00e9t\u00e9 confirm\u00e9.","link":"Vous n'avez pas re\u00e7u de mail de confirmation?\n","send_instructions":"Dans quelques minutes vous allez recevoir un mail avec un lien pour confirmer votre compte.","send_paranoid_instructions":"Si nous poss\u00e9dons votre adresse mail, vous recevrez dans quelques minutes un mail avec des instructions pour confirmer votre compte."},"destroy":{"confirm":"Vous \u00eates s\u00fbr?","headline":"Annuler le compte","link":"Effacer maintenant"},"edit":{"form":{"labels":{"current_password":"Mot de passe actuel <i>(nous en avons besoin pour confirmer votre modification)</i> ","email":"E-mail","password":"Mot de passe <i>(ne pas remplir si vous ne voulez pas le changer)</i> ","password_confirmation":"R\u00e9p\u00e9ter mot de passe"},"submit":"Sauvegarder les modifications"},"headline":"G\u00e9rer votre compte"},"failure":{"already_authenticated":"Vous \u00eates d\u00e9j\u00e0 enregistr\u00e9.","inactive":"Votre compte n'\u00e9tait pas encore activ\u00e9.","invalid":"email ou mot de passe non valide.","invalid_token":"signe de v\u00e9rification non valide","locked":"Votre compte est ferm\u00e9.","timeout":"Votre session a expir\u00e9, veuillez vous reconnecter pour continuer.","unauthenticated":"Merci de vous connecter ou de vous identifier avant de continuer.","unconfirmed":"Nouveau: merci de confirmer votre compte avant de continuer en cliquant sur le lien que nous vous avons envoy\u00e9 par mail. Si vous n'avez pas re\u00e7u de mail, merci de cliquer \u00e0 la fin de la page sur \"pas re\u00e7u de mail de confirmation\""},"mailer":{"confirmation_instructions":{"landing_page":"Merci de cliquer sur le lien que nous venons de vous envoyer \u00e0 votre adresse mail. Si vous n'avez pas re\u00e7u de mail, merci de v\u00e9rifier parmi les spams. Si le mail ne s'y trouve pas non plus, demandez l'envoie d'un nouveau mail.","subject":"Encore une petite \u00e9tape pour activer votre compte d'utilisateur."},"reset_password_instructions":{"subject":"R\u00e9initialiser les instructions de mot de passe"},"unlock_instructions":{"subject":"Instructions pour d\u00e9bloquer votre compte d'utilisateur"}},"mandatory":"* champ obligatoire","omniauth_callbacks":{"failure":"Erreur d'autorisation avec %{kind} parce que \"%{reason}\". ","permission_missing":"Vous ne nous avez pas accord\u00e9 les droits n\u00e9cessaires.","success":"V\u00e9rifi\u00e9 avec succ\u00e8s du compte %{kind}"},"password_recovery":{"form":{"labels":{"email":"E-mail"},"submit":"R\u00e9initialiser le mot de passe"},"headline":"Mot de passe oubli\u00e9?"},"password_reset":{"email":{"comment":"Si vous n'avez pas demand\u00e9 de changer votre mot de passe, ignorez cet e-mail s.v.p. <br/>Votre mot de passe ne sera pas chang\u00e9 sauf si vous cliquez sur ce lien et que vous le remplacez par un nouveau mot de passe.","headline":"Bienvenue %{email} ","link":"Changer le mot de passe","text":"Quelqu'un a demand\u00e9 de changer votre mot passe, s'il s'agissait de vous-m\u00eame, vous pouvez le changer en cliquant sur le lien suivant:\nDans le cas contraire merci de l'ignorer."},"form":{"labels":{"password":"Nouveau mot de passe","password_confirmation":"R\u00e9p\u00e9ter le mot de passe"},"submit":"R\u00e9initialiser le mot de passe"},"headline":"R\u00e9initialiser le mot de passe"},"passwords":{"link":"Mot de passe oubli\u00e9?","send_instructions":"Dans quelques minutes, vous allez recevoir un e-mail avec des instructions pour r\u00e9initialiser votre mot de passe.","send_paranoid_instructions":"Si nous poss\u00e9dons votre adresse mail, nous vous enverrons un mail avec un lien pour la r\u00e9cup\u00e9ration du mot de passe","updated":"Votre mot de passe a \u00e9t\u00e9 modifi\u00e9 avec succ\u00e8s. Maintenant vous \u00eates connect\u00e9.","updated_not_active":"Votre mot de passe a \u00e9t\u00e9 modifi\u00e9 avec succ\u00e8s."},"registrations":{"destroyed":"Votre compte a \u00e9t\u00e9 supprim\u00e9 avec succ\u00e8s. Nous esp\u00e9rons vous revoir bient\u00f4t.","inactive_signed_up":"Vous vous \u00eates enregistr\u00e9 avec succ\u00e8s mais nous ne pouvons pas vous connecter. Raison: \"%{reason}\"","link":"Enregistrer","reasons":{"inactive":"non actif","locked":"bloqu\u00e9","unconfirmed":"non confirm\u00e9"},"signed_up":"Votre inscription \u00e9tait couronn\u00e9e de succ\u00e8s. D\u00e8s l'activation de votre compte vous recevrez un mail de confirmation \u00e0 votre adresse mail. ","updated":"Vous avez actualis\u00e9 votre compte utilisateur avec succ\u00e8s."},"sessions":{"inactive":"Votre compte n'\u00e9tait pas encore activ\u00e9. Pour l'activation, merci de cliquer sur le lien que nous avons envoy\u00e9 par mail. ","invalid":"L'adresse mail ou le mot de passe ne sont pas valides.","invalid_token":"Jeton d'authentification incorrect. Merci de supprimer les cookies dans votre navigateur et essayez encore une fois.","link":"S'identifier","locked":"Votre compte est ferm\u00e9.","new":{"no_osm_account":"Pas chez OpenStreetMap?","osm_promo_text":"La Wheelmap est bas\u00e9e sur la cartographie de OpenStreetMap (OSM). L'OSM est une mappemonde libre de droits, d\u00e9velopp\u00e9e par des personnes comme vous. Une Wikipedia pour cartes g\u00e9ographiques. Pour pouvoir traiter des lieux ou d'ajouter de nouveaux lieux, il est n\u00e9cessaire de poss\u00e9der un compte utilisateur OSM et d'\u00eatre connect\u00e9 avec celui-ci ici.","promo_text_thank_you":"Merci pour votre aide!","sign_in_with":"se connecter avec","sign_up_with_osm":"enregistrez-vous ici","wheelmap_promo_text":"Gr\u00e2ce \u00e0 vos connaissances des endroits accessibles en fauteuil, vous permettez aux personnes \u00e0 mobilit\u00e9 r\u00e9duite de pouvoir mieux organisez leur vie de tous les jours. De plus, les informations concernant les diff\u00e9rents endroits sur l'OSM (OpenStreetMap) augmentent."},"signed_in":"Connect\u00e9 avec succ\u00e8s.","signed_out":"D\u00e9connect\u00e9 avec succ\u00e8s.","timeout":"Votre session a expir\u00e9, reconnecter s.v.p.","unauthenticated":"Avant de continuer, merci de vous inscrire ou de vous connecter. ","unconfirmed":"Il faut d'abord confirmer votre compte d'utilisateur avant de continuer. Pour confirmer, merci de cliquer sur le lien que nous vous avons envoy\u00e9 par mail. "},"sign_in":{"form":{"labels":{"email":"E-mail","password":"Mot de passe","remember_me":"Rester connect\u00e9?"},"submit":"Connecter"},"headline":"Connexion"},"sign_out":{"headline":"D\u00e9connexion"},"sign_up":{"email":{"confirm_my_account":"Confirmer mon compte","please_confirm":"Vous pouvez confirmer votre adresse mail en cliquant sur le lien suivant:","welcome":"Bienvenue %{email}! "},"form":{"labels":{"email":"E-mail","password":"Mot de passe","password_confirmation":"R\u00e9p\u00e9ter le mot de passe","wants_newsletter":"Oui, tenez-moi au courant des nouveaut\u00e9s sur Wheelmap. (Pas plus d'une fois par mois.)"},"submit":"S'inscrire"},"headline":"S'inscrire"},"unlocks":{"link":"Vous n'avez pas re\u00e7u les instructions pour d\u00e9bloquer votre compte?","send_instructions":"Dans quelques minutes vous allez recevoir un mail avec des instructions pour d\u00e9verrouiller votre compte.","send_paranoid_instructions":"Si votre compte existe, vous recevrez un mail indiquant comment le d\u00e9bloquer.","unlocked":"Votre compte a \u00e9t\u00e9 d\u00e9verrouill\u00e9 avec succ\u00e8s. Maintenant vous \u00eates connect\u00e9."}},"poi":{"category":{"accommodation":"h\u00e9bergement","education":"Education","food":"Repas","government":"Administrations & ambassades","health":"Sant\u00e9","leisure":"Loisirs","misc":"Autres","money_post":"Banque & Poste ","public_transfer":"Circulation","shopping":"Shopping","sport":"Sports","tourism":"Tourisme","unknown":"Inconnu"},"name":{"accommodation":{"beach_resort":"H\u00f4tel pr\u00e8s de la plage","bed_and_breakfast":"Chambre d'h\u00f4tes","camp_site":"Camping","caravan_site":"Camping","chalet":"g\u00eete de vacances","dormitory":"Dortoir","guest_house":"Auberge","hostel":"Auberge","hotel":"H\u00f4tel","motel":"Motel"},"education":{"college":"Facult\u00e9","driving_school":"\u00e9cole de conduite","kindergarten":"halte-garderie","library":"Biblioth\u00e8que","museum":"Mus\u00e9e","school":"Ecole","university":"Universit\u00e9"},"food":{"bar":"Bar","biergarten":"Brasserie en plein air","cafe":"salon de th\u00e9","drinking_water":"Eau potable","fast_food":"Restauration rapide","ice_cream":"salon de th\u00e9/marchand de glace","pub":"Bistro","restaurant":"Restaurant"},"government":{"courthouse":"Palais de Justice","embassy":"Ambassade","government":"administration","police":"Police","public_building":"Edifice public","townhall":"mairie"},"health":{"dentist":"dentiste","doctors":"M\u00e9decin","hearing_aids":"Audioproth\u00e9siste ","hospital":"H\u00f4pital","medical_supply":"Magasin de mat\u00e9riel m\u00e9dical","pharmacy":"Pharmacie","social_facility":"centre social","veterinary":"V\u00e9t\u00e9rinaire"},"leisure":{"arena":"Stade","brothel":"Maison close","casino":"casino","cinema":"Cin\u00e9ma","community_center":"Centre municipal","gallery":"Galerie","nightclub":"Bo\u00eete de nuit","playground":"aire de jeux","sauna":"Sauna","stripclub":"Club de striptease","theatre":"Th\u00e9\u00e2tre","zoo":"Zoo"},"misc":{"company":"Entreprise","estate_agent":"agence immobili\u00e8re","insurance":"assurance","lawyer":"Avocat","place_of_worship":"Lieu de culte","toilets":"Toilettes publics"},"money_post":{"atm":"Distributeur automatique","bank":"Banque","bureau_de_change":"Bureau de change ","post_box":"Bo\u00eete aux lettres","post_office":"Bureau de poste"},"public_transfer":{"aerodrome":"A\u00e9roport","bicycle_parking":"Stationnement v\u00e9los","bicycle_rental":"Location de bicyclettes","boatyard":"Port","bus_station":"arr\u00eat de bus","bus_stop":"Arr\u00eat de bus ","cable_car":"T\u00e9l\u00e9cabine","car_rental":"Location de voitures","car_sharing":"Covoiturage","chair_lift":"T\u00e9l\u00e9si\u00e8ge","ferry":"Ferry/Bac","ferry_terminal":"Gare maritime;","fuel":"Station service","halt":"Arr\u00eat","light_rail":"Transport urbain sur rail","parking":"Stationnement/parking","parking_aisle":"voie de circulation sur parking","platform":"Quai de gare","station":"Gare f\u00e9roviaire","subway_entrance":"Entr\u00e9e du m\u00e9tro","terminal":"A\u00e9roport","tram_stop":"Arr\u00eat de tram"},"shopping":{"alcohol":"Cave \u00e0 vins et spiritueux","bakery":"Boulangerie/P\u00e2tisserie","beauty":"institut de beaut\u00e9","beverages":"Boissons","bicycle":"magasin de v\u00e9los","books":"Librairie","butcher":"Boucherie","car_repair":"Garage","car_shop":"Concessionaire","chemist":"droguerie","clothes":"V\u00eatements","computer":"Ordinateur","confectionery":"magasin de bonbons","convenience":"magasin avec ouverture tardive","deli":"\u00e9picerie fine","department_store":"Grand magasin","doityourself":"Magasin de bricolage","dry_cleaning":"Nettoyage \u00e0 sec","electronics":"\u00c9lectronique","fabric":"magasin de tissus","farm_shop":"vente directe \u00e0 la ferme","florist":"Fleuriste","furniture":"Magasin de meubles","garden_centre":"Jardinerie","gift":"magasin de souvenirs","hairdresser":"Coiffeur","hardware":"Quincaillerie","jewelry":"bijoutier","kiosk":"Kiosque","laundry":"Blanchisserie","mall":"Centre Commercial","optician":"Opticien","organic":"magasin bio","outdoor":"Magasin pour des activit\u00e9s de plein air","pet":"animalerie","photo":"Photo","second_hand":"Friperie","shoes":"Magasin de chaussures","sports":"Magasin de sports","stationery":"Papeterie","supermarket":"Supermarch\u00e9","toys":"magasin de jouets","travel_agency":"agence de voyage","video":"vid\u00e9oth\u00e8que"},"sport":{"pitch":"terrain de sport","sports_centre":"salle de fitness","stadium":"Stade","swimming":"Piscine en plein air","swimming_pool":"Piscine"},"tourism":{"archaeological_site":"Site arch\u00e9ologique","arts_centre":"Centre des arts","artwork":"\u0153uvre d'art ","attraction":"Attraction","battlefield":"Champ de bataille","beach":"Plage","beacon":"Phare","castle":"Ch\u00e2teau","cave_entrance":"Entr\u00e9e d'une grotte","information":"Office du tourisme","memorial":"M\u00e9morial","theme_park":"Parc d'attractions ","tower":"Tour","viewpoint":"Point de vue"},"unknown":{"unknown":"Inconnu"}}},"date":{"abbr_day_names":["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],"abbr_month_names":[null,"Janv","F\u00e9v","Mars","Avr","Mai","Juin","Juill","Ao\u00fbt","Sept","Oct","Nov","D\u00e9c"],"day_names":["dimanche","lundi","mardi","mercredi","jeudi","ventredi","samedi"],"formats":{"default":"%d-%m-%Y ","long":"%e %B %Y","short":"%e %b"},"month_names":[null,"janvier","f\u00e9vrier","mars","avril","mai","juin","juillet","ao\u00fbt","septembre","octobre","novembre","d\u00e9cembre"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"une heure environ","other":"%{count} heures environ"},"about_x_months":{"one":"un mois environ","other":"%{count} mois environ"},"about_x_years":{"one":"un an environ","other":"%{count} ans environ"},"almost_x_years":{"one":"presque 1 an","other":"presque %{count} ans"},"half_a_minute":"une demi-minute","less_than_x_minutes":{"one":"moins d'une minute","other":"moinds de %{count} minutes"},"less_than_x_seconds":{"one":"moins d'une seconde","other":"moins de %{count} secondes"},"over_x_years":{"one":"plus d'un an","other":"plus de %{count} ans"},"x_days":{"one":"un jour","other":"%{count} jours"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"un mois","other":"%{count} mois"},"x_seconds":{"one":"1 seconde","other":"%{count} secondes"}},"prompts":{"day":"Jour","hour":"Heure","minute":"Minute","month":"Mois","second":"Secondes","year":"An"}},"activerecord":{"attributes":{"user":{"first_name":"Pr\u00e9nom","last_name":"nom de famille","privacy_policy":"r\u00e8glementation de la protection de donn\u00e9es","terms":"conditions d'utilisation"},"poi":{"name":"Nom","type":"Type","website":"Site web","phone":"T\u00e9l\u00e9phone","address_street":"Rue","address_housenumber":"Num\u00e9ro","address_postcode":"Code postal","address_city":"Ville"}},"errors":{"full_messages":{"format":"%{attribute} %{message}"},"messages":{"accepted":"doit \u00eatre accept\u00e9","blank":"champ obligatoire","confirmation":"ne correspond pas \u00e0 la confirmation","empty":"champ obligatoire","equal_to":"doit \u00eatre \u00e9gal \u00e0 %{count}","even":"doit \u00eatre pair","exclusion":"pas disponible","greater_than":"doit \u00eatre sup\u00e9rieur \u00e0 %{count}","greater_than_or_equal_to":"doit \u00eatre sup\u00e9rieur ou \u00e9gal \u00e0 %{count}","inclusion":"n'est pas dans la liste","invalid":"est non valide","less_than":"doit \u00eatre plus petit que %{count}","less_than_or_equal_to":"doit \u00eatre inf\u00e9rieur ou \u00e9gal \u00e0 %{count}","not_a_number":"n'est pas un nombre","odd":"doit \u00eatre impair","record_invalid":"La validation a \u00e9chou\u00e9: %{errors}","taken":"est d\u00e9j\u00e0 donn\u00e9","too_long":"est trop long (le maximum est %{count} caract\u00e8res)","too_short":"est trop court ( minimum %{count} caract\u00e8res)","wrong_length":"n'a pas la bonne longueur (doit comporter %{count} caract\u00e8res)"},"models":{"user":{"attributes":{"email":{"blank":"doit \u00eatre compl\u00e9t\u00e9 en cas de ........ mot de pass"},"privacy_policy":{"accepted":"acceptation obligatoire"},"terms":{"accepted":"acceptation obligatoire"}}},"user_session":{"email":"Adresse mail","password":"Mot de passe","remember_me":"Rester connect\u00e9"}},"template":{"body":"Merci de v\u00e9rifier les champs suivants:","header":{"one":"Impossible d'enregistrer ce %{model} :  erreur","other":"Impossible d'enregistrer ce %{model} : %{count} erreurs"}}},"models":{"user":"utilisateur"}},"faq":{"answers":{"0":"Vous pouvez toujours modifier le marquage d'un endroit vous-m\u00eame. Il vous suffit de choisir le bon marquage et enregistrez - voil\u00e0 !","1":"En tant qu'utilisateur connect\u00e9, vous pouvez ajouter/corriger toutes les informations d'un endroit. Cliquez sur \u00ab Modifier \u00bb pour corriger ou ajouter des informations dans le masque.","2":"Vous pouvez ajouter d'autres informations (ex. : Cet endroit poss\u00e8de une rampe dans la rubrique commentaire. Cliquez sur \u00ab Modifier \u00bb et \u00ab Ajouter un commentaire \u00bb."},"headline":"Y a-t-il un probl\u00e8me avec cet endroit ?","questions":{"0":"Le marquage est erron\u00e9.","1":"Les d\u00e9tails de cet endroit sont incorrects ou incomplets.","2":"J'ai d'autres informations sur cet endroit."}},"header":{"navigation":{"about_wheelmap":"concernant Wheelmap","choose_language":"choix de la langue","contact":"contact","map":"carte","projects":"Projets","blog":"Blog","feedback":"Commentaire","home":"Accueuil","how_to_add_a_place":"Comment peut-on ajouter des lieux?","imprint":"Mentions l\u00e9gales","logged_in_as":"Connect\u00e9 sous le nom de","login":"Connecter","logout":"D\u00e9connecter","newsletter":"bulletin","press":"Presse","profile":"Profil","suggestions":"Suggestions","what_is_barrier_free":"Que veut dire \"accessible en fauteuil roulant\"","what_is_wheelmap":"Qu' est-ce que 'wheelmap'?"},"toolbar":{"categories":"cat\u00e9gories"},"meta":{"description":"Des marches, des escaliers ou pas de WC handicap\u00e9 - gr\u00e2ce \u00e0 Wheelmap vous saurez \u00e0 l'avance si un mus\u00e9e, un cin\u00e9ma ou le restaurant le plus proche sont accessibles en fauteuil roulant. ","homepage":"Page d'accueil","keywords":"lieux accessibles en fauteuil roulant trouver chercher marquer","search":"R\u00e9cherche"},"searchbar":{"add_place":"Ajouter un lieu","find":"trouver","label":null,"placeholder":"Chercher un endroit","title_add_place":"Ajoutez un nouveau lieu \u00e0 cet endroit"},"tagline":"Wheelmap logo","title":"O\u00f9 aller en  fauteuil roulant? "},"home":{"index":{"overlay":{"button":"Ok, on y va!","categories":"filtrer selon cat\u00e9gories","filter":"filtrer les r\u00e9sultats sur la carte selon l'accessibilit\u00e9 en fauteuil","headline":"Gr\u00e2ce \u00e0 Wheelmap.org tu peux trouver et marquer des lieux accessibles en fauteuil - \u00e0 travers le monde et gratuitement. C'est facile:","lookup":"trouver directement un lieu","secondary_headline":"le syst\u00e8me \"feu rouge\" pour marquer l'accessibilit\u00e9"},"filter":{"category":"Cat\u00e9gorie:","deselect_all":"D\u00e9s\u00e9lectionner tout","select_all":"S\u00e9lectionnez tous les","wheelchair":"Accessible en fauteuil roulant?"},"ie":{"action":{"ignore":"ignorer","upgrade":"actualiser le navigateur"},"warning":{"headline":"Avec toutes nos excuses! ","message":"Apparemment , tu utilises Internet Explorer. Wheelmap n\u00e9cessite un navigateur ............. pour fonctionner correctement. Merci d'utiliser Firefox, Chrome, Safari ou Opera."}},"link":{"node":{"create":"Ajouter un nouveau lieu"}},"popup":{"form":{"limited":"partiellement accessible","no":"non-accessible","save":"Sauvegarder","unknown":"statut inconnu","yes":"enti\u00e8rement accessible"},"help":"Accessible en fauteuil roulant? (Aide)","more":"davantage ..."}}},"nodes":{"new":{"form":{"legend":"Emplacement de l'endroit","location":"Veuillez cliquer sur la carte et placer le marqueur \u00e0 l'emplacement exact."},"header":{"title":"Nouveau lieu | wheelmap.org "},"link":{"large_map":"&laquo; Annuler"}},"node_data":{"address":"Adresse :","contact_details":"Coordonn\u00e9es :"},"node_edit":{"details":"D\u00e9tails","edit":"Traiter"},"node_map":{"map":"Carte :"},"node_note":{"comment":"Commentaire :"},"node_photos":{"add":"Ajouter","photos_of_this_place":"Photos de cet endroit :","upload":"Charger"},"node_similar":{"similar":"Endroits similaires : %{name}"},"node_status":{"accessible_toilet":"Toilettes accessibles en fauteuil roulant :","premium":"%{name} dit : cet endroit est","wheelchair_accessibility":"Accessibilit\u00e9 en fauteuil roulant :"},"node_streetview":{"streetview":"Streetview :"},"show":{"header":{"meta":{"description":"D\u00e9couvrez si cet endroit est accessible en fauteuil roulant sur Wheelmap.org. Ou ajoutez des informations et des photos \u00e0 cet endroit.","title":"Cet endroit se trouve sur Wheelmap.org : %{name}"},"title":"Lieu: %{node} | wheelmap.org "},"share":{"email":"E-mail :","facebook":"Facebook","text":"J'ai trouv\u00e9 cet endroit sur Wheelmap.org : %{name}","twitter":"Twitter"},"link":{"back":"retour","large_map":"Agrandir","listing":"Tous les endroits du type %{type} dans %{city}","upload":"t\u00e9l\u00e9charger la photo"},"more_data_from":"Il existe d'autres donn\u00e9es concernant ce lieu, confirme\u00e9s par","show-in-osm":"indiquer sur Openstreetpmap"},"create":{"flash":{"not_successfull":"Oups, votre entr\u00e9e \u00e9tait incorrecte ou incompl\u00e8te.","successfull":"Merci beaucoup, votre entr\u00e9e a \u00e9t\u00e9 sauvegard\u00e9e et sera publi\u00e9e bient\u00f4t."}},"edit":{"header":{"title":"traiter lieu: %{node} | wheelmap.org "},"link":{"large_map":"&laquo; Annuler"}},"errors":{"default":"Oups, il y a eu une erreur. Nous l'avons remarqu\u00e9.  ","not_authorized":"D\u00e9sol\u00e9, \u00e9chec de l'authentification.","not_available":"D\u00e9sol\u00e9, cette page est temporairement indisponible.","not_existent":"D\u00e9sol\u00e9, ce lieu n'est plus disponible.","not_found":"D\u00e9sol\u00e9, page introuvable.","param_missing":"Entrez une recherche"},"flash":{"authorize_wheelmap":"Vous avez besoin d'un compte sur OpenStreetMap pour modifier des donn\u00e9es."},"node":{"link":{"claim":"Vous travaillez ici?","edit_node":"Editer lieu","report_bug":"Signaler un probl\u00e8me"}},"update":{"flash":{"not_successfull":"Oups, votre entr\u00e9e \u00e9tait incorrecte ou incompl\u00e8te.","successfull":"Merci, votre entr\u00e9e a \u00e9t\u00e9 sauvegard\u00e9e avec succ\u00e8s et sera publi\u00e9e bient\u00f4t."}},"update_wheelchair":{"successfull":"Le statut du lieu \"%{name} a \u00e9t\u00e9 modifi\u00e9 en : %{status} et sera actualis\u00e9 prochainement"}},"search":{"index":{"no-results":{"headline":"D\u00e9sol\u00e9s, nous n'avons pas trouv\u00e9 d'endroit appel\u00e9 \u00ab %{query} \u00bb.","hint":{"example":"<strong>Exemple :</strong> Londres, au Royaume-Uni","info":"Notre service de recherche fonctionne uniquement \u00e0 partir d'un nom et/ou d'une adresse. Veuillez donc rechercher le nom de l'endroit ou une adresse (ex. : nom de la rue et/ou ville). La recherche d'un type d'endroit (ex. : restaurant ou cin\u00e9ma) ne fonctionne pas !","work_in_progress":"Nous travaillons d'arrache-pied pour chercher des endroits plus faciles et plus intuitifs dans le futur."},"try_this":{"address":"Veuillez fournir plus d'<strong>informations concernant l'adresse</strong>.","intro":"Essayez \u00e7a :","spell_check":"V\u00e9rifiez l'<strong>orthographe</strong> de ce que vous avez entr\u00e9."}},"results":{"ticker":{"one":"%{count} r\u00e9sultat :","other":"%{count} r\u00e9sultats :"}},"search":{"for":"Rechercher \"%{q}\" ","not_found":"Aucun r\u00e9sultat!"}},"timeout":{"headline":"Oh, au temps pour nous","info":"Notre service de recherche \u00e9tait temporairement indisponible.","repeat_search":"R\u00e9essayer la recherche"}},"application":{"require_no_user":{"notice":"Vous \u00eates d\u00e9j\u00e0 connect\u00e9."},"require_user":{"notice":"Il faut \u00eatre connect\u00e9 pour regarder cette page."}},"breadcrumbs":{"node":{"create":"Ajouter nouveau lieu","edit":"Modifier lieu"},"root":"wheelmap"},"common":{"close":"fermer","skip":"passer"},"errors":{"dynamic_format":"%{message} ","format":"%{attribute} %{message} ","messages":{"accepted":"doit \u00eatre accept\u00e9","already_confirmed":"\u00e9tait d\u00e9j\u00e0 confirm\u00e9, veuillez essayer de vous connecter","blank":"champ obligatoire","confirmation":"ne correspond pas \u00e0 la confirmation","empty":"doit \u00eatre rempli","equal_to":"doit \u00eatre exactement %{count}","even":"doit \u00eatre pair","exclusion":"n'est pas disponible","expired":"expir\u00e9, merci de redemander","greater_than":"doit \u00eatre plus que %{count} ","greater_than_or_equal_to":"doit \u00eatre sup\u00e9rieur ou \u00e9gal \u00e0 %{count}","inclusion":"valeur non-valide","invalid":"non-valide","less_than":"doit \u00eatre plus petit que %{count} ","less_than_or_equal_to":"doit \u00eatre inf\u00e9rieur ou \u00e9gal \u00e0 %{count}","not_a_number":"n' est pas un nombre","not_an_integer":"doit \u00eatre un nombre entier","not_found":"pas trouv\u00e9","not_locked":"n'\u00e9tait pas ferm\u00e9","not_saved":{"one":"Une erreur a emp\u00each\u00e9 la sauvegarde de %{resource} ","other":"%{count} erreur: %{resource} sauvegarde refus\u00e9e"},"odd":"doit \u00eatre impair","taken":"est d\u00e9j\u00e0 utilis\u00e9","too_long":"est trop long (pas plus de %{count} caract\u00e8res) ","too_short":"est trop court (pas moins de %{count} caract\u00e8res)","wrong_length":"ne fait pas la bonne longueur (doit comporter %{count} caract\u00e8res)"},"template":{"body":"Merci de v\u00e9rifier les champs suivants:","header":{"one":"Erreur, impossible de sauvegarder l'objet %{model}","other":"Ne pouvait pas sauvegarder cet objet %{model} suite \u00e0 des erreurs %{count}"}}},"flash":{"actions":{"create":{"notice":"%{resource_name} \u00e9tait cr\u00e9\u00e9 avec succ\u00e8s. "},"destroy":{"alert":"%{resource_name} ne pouvait pas \u00eatre d\u00e9truit.","notice":"%{resource_name} \u00e9tait d\u00e9truit avec succ\u00e8s."},"update":{"notice":"%{resource_name} \u00e9tait actualis\u00e9 avec succ\u00e8s."}},"photos":{"destroy":{"notice":"La photo a \u00e9t\u00e9 supprim\u00e9e avec succ\u00e8s."}}},"form":{"show_fully_accessible_places":"oui, accessible en fauteuil roulant","show_limited_accessible_places":"partiellement accessible en fauteuil roulant","show_places_without_status":"statut inconnu","show_unaccessible_places":"pas accessible en fauteuil roulant"},"formtastic":{"hints":{"email":"Nous vous certifions de ne pas divulguer votre adresse, pas de spam. Promis!","lat":"Pointez le marqueur \u00e0 la position correcte sur le plan","osm_username":"Vous n'\u00eates pas encore membre?  <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Vous pouvez vous inscrire sur Openstreetmap ici</a> ","password":"(ne pas remplir, si vous ne voulez pas le modifier)","phone":"Par exemple:  +49 30 123456-78      ","website":"Par exemple: http://www.example.com "},"labels":{"category":"Cat\u00e9gorie:","centralkey":"cl\u00e9 centrale","city":"Ville:","create":"Cr\u00e9er un lieu","email":"E-mail","finish":"terminer","housenumber":"Num\u00e9ro:","lat":"Latitude","lon":"Longitude","name":"Nom:","osm_password":"Mot de passe sur OSM","osm_username":"Nom d'utilisateur sur OSM","password":"Mot de passe","password_confirmation":"R\u00e9p\u00e9ter le mot de passe","phone":"T\u00e9l\u00e9phone:","postcode":"Code postal:","privacy_policy":"J'accepte l'alin\u00e9a 1 et 2 de la r\u00e8glementation de protection de donn\u00e9es","reset":"Reset","save":"Sauvegarder","street":"Rue:","terms":"J'accepte les conditions d'utilisation","type":"Type:","website":"Site web:","wheelchair":"Accessible en fauteuil roulant?","wheelchair_description":"Commentaire d'accessibilit\u00e9:"},"titles":{"basic":"Donn\u00e9es \u00e9l\u00e9mentaires ","optional":"Plus d' informations <span class=\"addition\">(tous les champs sont optionnels)</span>"}},"global":{"form_validation_error":"Voir les erreurs indiqu\u00e9es ci-dessous."},"helpers":{"select":{"prompt":"Veuillez choisir"},"submit":{"create":"Cr\u00e9er %{model} ","submit":"Sauvegarder %{model} ","update":"Actualiser %{model} "}},"how?":"Comment?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Tous (ou toutes)  les %{type} accessible en fauteuil roulant \u00e0 %{city} (%{count})"},"no":{"headline":"Tous (ou toutes) %{type}  non accessibles en fauteuil roulant \u00e0 %{city} (%{count})"},"unknown":{"headline":"Tous (ou toutes) %{type} \u00e0  %{city}  avec statut d'accessibilit\u00e9 inconnu"},"yes":{"headline":"Tous (ou toutes) les %{type} accessible en fauteuil \u00e0 %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Un projet de Sozialhelden.de"}}},"node":{"address":{"city":"%{postcode} %{city} ","street":"%{housenumber} %{street} "},"tags":{"phone":"T\u00e9l\u00e9phone: ","website":"Site web:"}},"number":{"currency":{"format":{"delimiter":",","format":"%n %u","precision":2,"separator":".","significant":0,"strip_insignificant_zeros":0,"unit":"\u20ac"}},"format":{"delimiter":",","precision":3,"separator":".","significant":0,"strip_insignificant_zeros":0},"human":{"decimal_units":{"format":"%n %u ","units":{"billion":"milliard","million":"million","quadrillion":"quadrillion","thousand":"mille","trillion":"trillion","unit":null}},"format":{"delimiter":null,"precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"octet","other":"octets"},"gb":"GB ","kb":"KB ","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}}},"oauth":{"application":{"connect":{"headline":"Vous devez connecter votre compte \u00e0 votre compte d'OpenStreetMap si vous voulez ajouter ou modifier des lieux sur wheelmap.org."}},"callback":{"notice":"Votre compte de wheelmap est maintenant connect\u00e9 \u00e0 votre compte d'OpenStreetMap %{user}."}},"or":"ou","place":{"one":"%{count} lieu","other":"%{count} lieux"},"profile":{"edit":{"application":{"oauth":{"connected":"Statut: connect\u00e9","grant":"Connecter","not_connected":"Statut: Non-connect\u00e9","revoke":"D\u00e9connecter"}},"headline":"Modifier votre profil"}},"splash":{"countline":"Les %{count} lieux ont d\u00e9j\u00e0 \u00e9t\u00e9 marqu\u00e9.","headline":"Tout le monde peut ajouter des endroits accessibles en fauteuil roulant!","start":"start","step1":"Cliquez sur un lieu que vous connaissez.","step2":"Indiquez le et cliquez sur \"sauvegarder\"","step3":"Termin\u00e9. Inutile d'enregistrer!","what_is_wheelmap":"Qu'est-ce que Wheelmap?"},"statistics":"Statistique","support":{"array":{"last_word_connector":", et","sentence_connector":"et","skip_last_comma":true,"two_words_connector":"et","words_connector":","},"select":{"prompt":"Choisissez s.v.p."}},"time":{"am":"du matin","formats":{"default":"%d %B %Y %H:%M:%S montre / heure ","long":"%A %d %B %Y %H:%M","short":"%d %b %H:%M"},"pm":"dans l'apr\u00e8s-midi"},"user_sessions":{"create":{"activation":{"notice":"Votre compte est maintenant activ\u00e9!"},"error":{"notice":"L'adresse mail et le mot de passe ne correspondent pas."},"notice":"Connect\u00e9!"},"destroy":{"notice":"Au revoir, \u00e0 bient\u00f4t!"},"new":{"email":"Adresse e-mail","login":"Connecter","login_with_twitter":"Connecter sur Twitter","password":"Mot de passe","remember_me":"Rester connect\u00e9"}},"users":{"after_signup_edit":{"welcome":{"headline":"C'est presque fini! Reste \u00e0 compl\u00e9ter le compte Wheelmap","set_password_for_mobile":"Tu t'es enrestr\u00e9 avecsucc\u00e8s chez OpenStreetMap.Choisis encore l'adresse mail et le mot de pass pour ton compte Wheelmap. Tu as besoin de cette adresse mail et du mot de pass pour te connecter sur l'application Wheelmap pour iPhone et Androide.","text":"Vous vous \u00eates connectez avec succ\u00e8s. A l'avenir, comment pouvons nous vous informer des nouveaut\u00e9s de Wheelmap?"}},"edit":{"headline":{"your_images":"vos photos t\u00e9l\u00e9charg\u00e9es"}}},"wheelchairstatus":{"limited":"partiellement accessible en  fauteuil roulant","no":"pas accessible en fauteuil roulant","unknown":"statut de l'accessibilit\u00e9 inconnu","yes":"Enti\u00e8rement accessible en fauteuil roulant."},"wheelmap":{"footer":{"a_project_of":"Un projet de","based_on":"Bas\u00e9 sur","become_a_supporter":"Devenir sponsor","main_supporter":"Sponsor principal"},"itunes":{"alt":"AppStore Logo ","title":"Vous pouvez t\u00e9l\u00e9charger maintenant l'application pour l'iPhone!"},"logo":{"alt":"Wheelmap Logo - o\u00f9 aller en fauteuil roulant?","title":"Wheelmap - o\u00f9 aller en fauteuil roulant?"},"what_is":{"fully_accessible":"Entr\u00e9e de plain pied; tous les endroits sont accessibles en fauteuil roulant, toilettes handicap\u00e9s disponibles en fonction de l'endroit.","limited_accessible":"La hauteur de la marche \u00e0  l'entr\u00e9e ne d\u00e9passe pas 7cm; les endroits les plus importants sont accessibles en fauteuil roulant, WC sans importance.","not_accessible":"La hauteur de la marche \u00e0 l'entr\u00e9e est sup\u00e9rieur \u00e0  7cm ; ou il y a plusieurs marches \u00e0  l'entr\u00e9e; ou les endroits les plus importants ne sont pas accessibles en fauteuil roulant","unknown_accessible":"aide nous \u00e0 classer ce lieu"}},"will_paginate":{"next_label":"avant &#8594; Zeit\ndevant &#8594; Ort","page_entries_info":{"multi_page":"Indique %{model} %{from} -%{to} de %{count} total","multi_page_html":"Indique  %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> von <b>%{count}</b> total","single_page":{"one":"Indique 1 %{model}","other":"Indique tous %{count} %{model}","zero":"%{model} introuvable"},"single_page_html":{"one":"montre <b>1</b>%{model}","other":"Indique <b>all&nbsp;%{count}</b> %{model}","zero":"%{model} pas trouv\u00e9"}},"page_gap":"&hellip;","previous_label":"retour"},"active_admin":{"dashboard":"Tableau de Bord","dashboard_welcome":{"welcome":"Bienvenue dans Active Admin. Ceci est la page par d\u00e9faut.","call_to_action":"Pour ajouter des sections au tableau de bord, consultez 'app/admin/dashboard.rb'"},"view":"Voir","edit":"Modifier","delete":"Supprimer","delete_confirmation":"\u00cates-vous certain de vouloir supprimer ceci ?","new_model":"Nouveau %{model}","create_model":"Nouveau %{model}","edit_model":"Modifier %{model}","update_model":"Modifier %{model}","delete_model":"Supprimer %{model}","details":"D\u00e9tails de %{model}","cancel":"Annuler","empty":"Vide","previous":"Pr\u00e9c\u00e9dent","next":"Suivant","download":"T\u00e9l\u00e9charger:","has_many_new":"Ajouter un nouveau %{model}","has_many_delete":"Supprimer","has_many_remove":"Enlever","filters":{"buttons":{"filter":"Filtrer","clear":"Supprimer les filtres"},"predicates":{"contains":"Contient","equals":"Egal \u00e0","starts_with":"Commence par","ends_with":"Se termine par","greater_than":"Plus grand que","less_than":"Plus petit que"}},"main_content":"Veuillez impl\u00e9menter %{model}#main_content pour afficher le contenu.","logout":"D\u00e9connexion","powered_by":"Propuls\u00e9 par %{active_admin} %{version}","sidebars":{"filters":"Filtres"},"pagination":{"empty":"Aucun %{model} trouv\u00e9","one":"Affichage de <b>1</b> %{model}","one_page":"Affichage de <b>tous les %{n}</b> %{model}","multiple":"Affichage de %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> sur un total de <b>%{total}</b>","multiple_without_total":"Affichage de %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>","entry":{"one":"entr\u00e9e","other":"entr\u00e9es"}},"any":"N'importe lequel","blank_slate":{"content":"Il n'y a pas encore de %{resource_name}.","link":"Cr\u00e9ez en un"},"batch_actions":{"button_label":"Actions group\u00e9es","delete_confirmation":"\u00cates-vous sur de vouloir supprimer ces %{plural_model}? Cette action est irr\u00e9versible.","succesfully_destroyed":{"one":"1 %{model} supprim\u00e9","other":"%{count} %{plural_model} supprim\u00e9s"},"selection_toggle_explanation":"(Inverser la s\u00e9lection)","link":"Cr\u00e9er un","action_label":"%{title} les \u00e9l\u00e9ments s\u00e9lectionn\u00e9s","labels":{"destroy":"Supprimer"}},"comments":{"body":"Corps","author":"Auteur","title":"Commentaire","add":"Ajouter un commentaire","resource":"Ressource","no_comments_yet":"Aucun commentaire actuellement","title_content":"Commentaires (%{count})","errors":{"empty_text":"Le commentaire n'a pas \u00e9t\u00e9 enregistr\u00e9 puisque le texte \u00e9tait vide."}},"devise":{"login":{"title":"login","remember_me":"Se souvenir de moi","submit":"login"},"reset_password":{"title":"Vous avez oubli\u00e9 votre mot de passe?","submit":"R\u00e9initialiser mon mot de passe"},"change_password":{"title":"Changez votre mot de passe","submit":"Changer mon mot de passe"},"links":{"sign_in":"Connectez-vous","forgot_your_password":"Vous avez oubli\u00e9 votre mot de passe?","sign_in_with_omniauth_provider":"Connectez-vous avec %{provider}"}}}}};