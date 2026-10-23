/* ================= LANGUAGES & REGIONS ================= */
const LANGS={en:"English",es:"Español",fr:"Français",hi:"हिन्दी"};
/* consent = age below which a parent must set up the account. Working values for the prototype; confirm with counsel before launch. */
const REGIONS=[
  {id:"US",name:"United States",lang:"en",consent:13},
  {id:"CA",name:"Canada",lang:"en",consent:13},
  {id:"MX",name:"México",lang:"es",consent:13},
  {id:"GB",name:"United Kingdom",lang:"en",consent:13},
  {id:"IE",name:"Ireland",lang:"en",consent:16},
  {id:"FR",name:"France",lang:"fr",consent:15},
  {id:"ES",name:"España",lang:"es",consent:14},
  {id:"DE",name:"Deutschland",lang:"en",consent:16},
  {id:"IN",name:"India / भारत",lang:"hi",consent:18},
  {id:"AU",name:"Australia",lang:"en",consent:13},
  {id:"XX",name:"Other",lang:"en",consent:16}
];
const REGION=Object.fromEntries(REGIONS.map(r=>[r.id,r]));
const NICK_ADJ=["Brave","Clever","Quiet","Swift","Curious","Sharp","Lucky","Bright","Sly","Bold","Keen","Nimble"];
const NICK_ANI=["Owl","Fox","Otter","Badger","Hawk","Lynx","Raven","Hare","Panda","Heron","Wolf","Beetle"];

const I18N={
en:{
  picked:"Picked for your age", more_play:"More you can play",
  tagline:"Walk the scene, question the suspects, and prove who did it. Each solved case opens the next folder.",
  credit:"A Hushlantern game",
  choose_world:"Choose a world", how_play:"How do you want to play?",
  mode_solo:"Solo", mode_solo_d:"Work the cases alone, at your own pace.",
  mode_coop:"Co-op", mode_coop_d:"Up to 4 detectives in one scene with a shared notebook. Everyone signs off on the accusation.",
  mode_race:"Race", mode_race_d:"Same case, private notebooks. Fastest correct accusation tops the board.",
  start_w:"Start {w}", continue_w:"Continue {w}", reset_w:"Reset {w} progress", reset_confirm:"Tap again to erase {w} progress", erased:"Progress erased.",
  checking_mp:"Checking whether multiplayer is available…",
  mp_unavail:"Playing with others needs you signed in with permission to use this game. Solo is ready to play.",
  mp_off_kid:"Playing with friends is turned off for this player. A parent can turn it on in Parent settings.",
  new_table_coop:"Start a new co-op table", new_table_race:"Start a new race table", or_join:"or join one:", join:"Join", rejoin:"Rejoin table {c}",
  table_note:"A table gets a 4-letter code. Send the code to friends so they can join. There's no chat, just the case.",
  code_ph:"CODE", err_codes:"Table codes are 4 letters.", err_notable:"No table found with code {c}. Check the letters with whoever started it.",
  err_create:"Couldn't create a table. You need permission to use this game.", err_badtable:"That table can't be opened.", err_agetable:"This table's cases aren't available for this player.",
  solved_of:"{n} of {t} solved", ages:"Ages {n}+",
  menu:"← Menu", table:"Table", copy:"Copy", copied:"Code {c} copied", code_is:"Table code: {c}", you:"You", partner:"Partner",
  sealed:"Sealed folder", st_solved:"Solved", st_locked:"Locked", st_open:"Open",
  notebook:"Notebook", accuse:"Accuse", make_acc:"Make the accusation", hint:"Ask for a hint", hint_shared:"Ask for a hint (shared)", no_hints:"No more hints",
  show_clues:"Show clues", hide_clues:"Hide clues", tap_hint:"Tap objects to examine them. Tap people to question them.", click_hint:"Click objects to examine them. Click people to question them.",
  nb_empty:"Nothing yet. Examine objects and question people in the scene.", evidence:"Evidence", testimony:"Testimony", found_by:"Found by {n}",
  req1:"Choose a suspect and tick 1 clue in the notebook as proof ({n}/1 ticked).", reqN:"Choose a suspect and tick exactly {k} clues in the notebook as proof ({n}/{k} ticked).",
  req_closed:"Case closed.", req_wait:"Your partners haven't agreed yet. Everyone at this case has to pick the same suspect and proof.",
  partners_empty:"When partners open this case, their picks show up here. Once everyone agrees, anyone can make the accusation.",
  p_waiting:"Waiting", p_agrees:"Agrees", p_diff:"Different", p_none:"Hasn't chosen yet",
  stats:"{f}/{t} clues · {w} wrong · {h} hints",
  not_enough:"Not enough, Inspector.", not_enough_pl:"Not enough, Inspectors.",
  wrong_person:"{n} has a reasonable answer for everything you've put on the table. Look again at whose story fails against the record.",
  wrong_proof:"You may have the right person, but this proof won't hold up.", no_connect:"That clue doesn't connect them to the crime.",
  solved_stamp:"SOLVED", did_it:"{n} did it.", solved_stats:"{w} wrong · {h} hints", solved_in:" · solved in {t}", open_case:"Open {c}",
  all_done:"Every folder in {w} is closed. Try another world from the menu.",
  case_file:"Case file", case_closed:"Case closed", new_clue:"New clue: {c}",
  tip_solo:"Tap or click objects in the scene to examine them, and people to question them.", tip_coop:"Split up: anything a partner finds lands in the shared notebook.",
  accused:"accused", examining:"examining {p}", questioning:"questioning {p}",
  race_board:"Race board · {c}", race_note:"Time plus 1:00 for each wrong accusation and 0:30 for each hint.", race_none:"No one has cracked this case yet.", cracked:"{n} cracked {c} in {t}",
  scene:"Scene", en_only:"Case stories are in English for now. More languages are coming.",
  live_off:"Live view unavailable. The shared notebook still works.", save_fail:"Couldn't save that move. Check your connection.",
  ob_title:"Welcome to Hushlantern", ob_sub:"Fair mysteries for curious minds. Let's get you set up.", ob_lang:"Language", ob_region:"Country or region", ob_start:"Get started",
  ob_proto:"Free, no ads. Progress saves automatically.",
  dob_title:"When were you born?", dob_sub:"We use this to show cases that suit your age.", month:"Month", year:"Year", next:"Continue", back:"Back",
  months:["January","February","March","April","May","June","July","August","September","October","November","December"],
  too_young:"Our cases are made for detectives aged 8 and up. We'll be here when you're ready!",
  grown_title:"Time to grab a grown-up", grown_sub:"Players your age need a parent or guardian to set things up. Hand the device to them for a moment.", grown_go:"I'm the parent or guardian",
  par_title:"For parents and guardians", par_sub:"You're creating a profile for a child. We keep only a made-up nickname, birth month and year, and your settings. No real names, no photos, no chat.",
  par_email:"Your email", par_pin:"Create a 4-digit parent PIN", par_consent:"I'm this child's parent or guardian and I agree to create this profile.",
  par_mp:"Allow playing with friends using private table codes (no chat)", par_go:"Continue",
  err_email:"Enter a valid email address.", err_pin:"The PIN needs exactly 4 digits.", err_consent:"Please confirm you're the parent or guardian.",
  nick_title:"Pick a detective name", nick_kid:"Names are made up, so you stay anonymous.", nick_self:"This is how other players will see you.",
  shuffle:"Shuffle", nick_type:"Or type your own", nick_go:"Start playing", err_nick:"Pick a name between 2 and 16 characters.",
  who:"Who's playing?", add_player:"Add player", parent_settings:"Parent settings", pin_title:"Enter parent PIN", pin_wrong:"That PIN doesn't match.", pin_go:"Unlock",
  done:"Done", del:"Delete profile", del_confirm:"Tap again to delete", allow_mp:"Playing with friends", cap:"Highest age range", cap_all:"Everything they're old enough for",
  lang_label:"Language", age_years:"{n} years old", managed:"Managed by a parent", close:"Close", switch_pin:"A parent PIN is needed to switch to this player."
},
es:{
  picked:"Elegidos para tu edad", more_play:"Más para jugar",
  tagline:"Recorre la escena, interroga a los sospechosos y demuestra quién fue. Cada caso resuelto abre la siguiente carpeta.",
  credit:"Un juego de Hushlantern",
  choose_world:"Elige un mundo", how_play:"¿Cómo quieres jugar?",
  mode_solo:"Solo", mode_solo_d:"Resuelve los casos a tu ritmo.",
  mode_coop:"Cooperativo", mode_coop_d:"Hasta 4 detectives en la misma escena con un cuaderno compartido. Todos firman la acusación.",
  mode_race:"Carrera", mode_race_d:"El mismo caso, cuadernos privados. La acusación correcta más rápida gana.",
  start_w:"Empezar {w}", continue_w:"Continuar {w}", reset_w:"Reiniciar {w}", reset_confirm:"Toca otra vez para borrar el progreso de {w}", erased:"Progreso borrado.",
  checking_mp:"Comprobando si el modo multijugador está disponible…",
  mp_unavail:"Para jugar con otros necesitas iniciar sesión con permiso para usar este juego. El modo solo está listo.",
  mp_off_kid:"Jugar con amigos está desactivado para este jugador. Un adulto puede activarlo en Ajustes para padres.",
  new_table_coop:"Crear una mesa cooperativa", new_table_race:"Crear una mesa de carrera", or_join:"o únete a una:", join:"Unirse", rejoin:"Volver a la mesa {c}",
  table_note:"Cada mesa tiene un código de 4 letras. Envíalo a tus amigos para que se unan. No hay chat, solo el caso.",
  code_ph:"CÓDIGO", err_codes:"Los códigos tienen 4 letras.", err_notable:"No hay ninguna mesa con el código {c}.",
  err_create:"No se pudo crear la mesa. Necesitas permiso para usar este juego.", err_badtable:"Esa mesa no se puede abrir.", err_agetable:"Los casos de esta mesa no están disponibles para este jugador.",
  solved_of:"{n} de {t} resueltos", ages:"Edad {n}+",
  menu:"← Menú", table:"Mesa", copy:"Copiar", copied:"Código {c} copiado", code_is:"Código de mesa: {c}", you:"Tú", partner:"Compañero",
  sealed:"Carpeta sellada", st_solved:"Resuelto", st_locked:"Bloqueado", st_open:"Abierto",
  notebook:"Cuaderno", accuse:"Acusar", make_acc:"Hacer la acusación", hint:"Pedir una pista", hint_shared:"Pedir una pista (compartida)", no_hints:"No quedan pistas",
  show_clues:"Ver pistas", hide_clues:"Ocultar pistas", tap_hint:"Toca objetos para examinarlos y personas para interrogarlas.", click_hint:"Haz clic en objetos para examinarlos y en personas para interrogarlas.",
  nb_empty:"Nada todavía. Examina objetos e interroga a la gente de la escena.", evidence:"Prueba", testimony:"Testimonio", found_by:"Encontrado por {n}",
  req1:"Elige un sospechoso y marca 1 pista del cuaderno como prueba ({n}/1).", reqN:"Elige un sospechoso y marca {k} pistas del cuaderno como prueba ({n}/{k}).",
  req_closed:"Caso cerrado.", req_wait:"Tus compañeros aún no están de acuerdo. Todos deben elegir el mismo sospechoso y las mismas pruebas.",
  partners_empty:"Cuando tus compañeros abran este caso, verás aquí sus elecciones. Cuando todos coincidan, cualquiera puede acusar.",
  p_waiting:"Esperando", p_agrees:"De acuerdo", p_diff:"Distinto", p_none:"Aún no ha elegido",
  stats:"{f}/{t} pistas · {w} fallos · {h} ayudas",
  not_enough:"No basta, inspector.", not_enough_pl:"No basta, inspectores.",
  wrong_person:"{n} tiene una explicación razonable para todo lo que has presentado. Revisa qué historia no encaja con los registros.",
  wrong_proof:"Puede que sea la persona correcta, pero esta prueba no se sostiene.", no_connect:"Esa pista no lo relaciona con el delito.",
  solved_stamp:"RESUELTO", did_it:"Fue {n}.", solved_stats:"{w} fallos · {h} ayudas", solved_in:" · resuelto en {t}", open_case:"Abrir {c}",
  all_done:"Todas las carpetas de {w} están cerradas. Prueba otro mundo desde el menú.",
  case_file:"Expediente", case_closed:"Caso cerrado", new_clue:"Nueva pista: {c}",
  tip_solo:"Toca objetos para examinarlos y personas para interrogarlas.", tip_coop:"Separaos: todo lo que encuentre un compañero aparece en el cuaderno compartido.",
  accused:"acusado", examining:"examinando {p}", questioning:"interrogando a {p}",
  race_board:"Clasificación · {c}", race_note:"Tiempo más 1:00 por cada acusación fallida y 0:30 por cada pista.", race_none:"Nadie ha resuelto este caso todavía.", cracked:"{n} resolvió {c} en {t}",
  scene:"Escena", en_only:"Por ahora las historias están en inglés. Pronto habrá más idiomas.",
  live_off:"La vista en vivo no está disponible. El cuaderno compartido sigue funcionando.", save_fail:"No se pudo guardar. Revisa tu conexión.",
  ob_title:"Bienvenido a Hushlantern", ob_sub:"Misterios justos para mentes curiosas. Vamos a configurarlo.", ob_lang:"Idioma", ob_region:"País o región", ob_start:"Empezar",
  ob_proto:"Gratis y sin anuncios. El progreso se guarda solo.",
  dob_title:"¿Cuándo naciste?", dob_sub:"Lo usamos para mostrarte casos adecuados para tu edad.", month:"Mes", year:"Año", next:"Continuar", back:"Atrás",
  months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
  too_young:"Nuestros casos son para detectives de 8 años en adelante. ¡Te esperamos!",
  grown_title:"Llama a un adulto", grown_sub:"A tu edad, un padre, madre o tutor tiene que configurar la cuenta. Pásale el dispositivo un momento.", grown_go:"Soy el padre, madre o tutor",
  par_title:"Para padres y tutores", par_sub:"Vas a crear un perfil para un menor. Solo guardamos un apodo inventado, el mes y año de nacimiento y tus ajustes. Sin nombres reales, sin fotos, sin chat.",
  par_email:"Tu correo electrónico", par_pin:"Crea un PIN de 4 dígitos", par_consent:"Soy el padre, madre o tutor de este menor y acepto crear este perfil.",
  par_mp:"Permitir jugar con amigos mediante códigos de mesa privados (sin chat)", par_go:"Continuar",
  err_email:"Introduce un correo válido.", err_pin:"El PIN debe tener 4 dígitos.", err_consent:"Confirma que eres el padre, madre o tutor.",
  nick_title:"Elige un nombre de detective", nick_kid:"Los nombres son inventados para que sigas siendo anónimo.", nick_self:"Así te verán los demás jugadores.",
  shuffle:"Cambiar", nick_type:"O escribe el tuyo", nick_go:"Empezar a jugar", err_nick:"Elige un nombre de 2 a 16 caracteres.",
  who:"¿Quién juega?", add_player:"Añadir jugador", parent_settings:"Ajustes para padres", pin_title:"Introduce el PIN", pin_wrong:"El PIN no coincide.", pin_go:"Desbloquear",
  done:"Listo", del:"Eliminar perfil", del_confirm:"Toca otra vez para eliminar", allow_mp:"Jugar con amigos", cap:"Edad máxima permitida", cap_all:"Todo lo adecuado para su edad",
  lang_label:"Idioma", age_years:"{n} años", managed:"Gestionado por un adulto", close:"Cerrar", switch_pin:"Se necesita el PIN para cambiar a este jugador."
},
fr:{
  picked:"Choisis pour ton âge", more_play:"Encore plus à jouer",
  tagline:"Parcourez la scène, interrogez les suspects et prouvez qui est coupable. Chaque affaire résolue ouvre le dossier suivant.",
  credit:"Un jeu Hushlantern",
  choose_world:"Choisissez un monde", how_play:"Comment voulez-vous jouer ?",
  mode_solo:"Solo", mode_solo_d:"Résolvez les affaires seul, à votre rythme.",
  mode_coop:"Coopération", mode_coop_d:"Jusqu'à 4 détectives dans la même scène avec un carnet partagé. Tout le monde valide l'accusation.",
  mode_race:"Course", mode_race_d:"La même affaire, des carnets privés. L'accusation juste la plus rapide l'emporte.",
  start_w:"Commencer {w}", continue_w:"Continuer {w}", reset_w:"Réinitialiser {w}", reset_confirm:"Touchez à nouveau pour effacer {w}", erased:"Progression effacée.",
  checking_mp:"Vérification du mode multijoueur…",
  mp_unavail:"Pour jouer à plusieurs, connectez-vous avec l'autorisation d'utiliser ce jeu. Le mode solo est prêt.",
  mp_off_kid:"Le jeu entre amis est désactivé pour ce joueur. Un parent peut l'activer dans les réglages parentaux.",
  new_table_coop:"Créer une table coopérative", new_table_race:"Créer une table de course", or_join:"ou rejoindre :", join:"Rejoindre", rejoin:"Retourner à la table {c}",
  table_note:"Chaque table a un code de 4 lettres. Envoyez-le à vos amis. Pas de chat, juste l'affaire.",
  code_ph:"CODE", err_codes:"Les codes font 4 lettres.", err_notable:"Aucune table avec le code {c}.",
  err_create:"Impossible de créer la table. Vous devez avoir l'autorisation d'utiliser ce jeu.", err_badtable:"Cette table ne peut pas être ouverte.", err_agetable:"Les affaires de cette table ne sont pas disponibles pour ce joueur.",
  solved_of:"{n} sur {t} résolues", ages:"Dès {n} ans",
  menu:"← Menu", table:"Table", copy:"Copier", copied:"Code {c} copié", code_is:"Code de la table : {c}", you:"Vous", partner:"Partenaire",
  sealed:"Dossier scellé", st_solved:"Résolue", st_locked:"Verrouillée", st_open:"Ouverte",
  notebook:"Carnet", accuse:"Accuser", make_acc:"Porter l'accusation", hint:"Demander un indice", hint_shared:"Demander un indice (partagé)", no_hints:"Plus d'indices",
  show_clues:"Voir les indices", hide_clues:"Masquer", tap_hint:"Touchez les objets pour les examiner et les personnes pour les interroger.", click_hint:"Cliquez sur les objets pour les examiner et sur les personnes pour les interroger.",
  nb_empty:"Rien pour l'instant. Examinez les objets et interrogez les personnes.", evidence:"Preuve", testimony:"Témoignage", found_by:"Trouvé par {n}",
  req1:"Choisissez un suspect et cochez 1 indice comme preuve ({n}/1).", reqN:"Choisissez un suspect et cochez {k} indices comme preuves ({n}/{k}).",
  req_closed:"Affaire classée.", req_wait:"Vos partenaires ne sont pas encore d'accord. Tout le monde doit choisir le même suspect et les mêmes preuves.",
  partners_empty:"Quand vos partenaires ouvriront cette affaire, leurs choix apparaîtront ici. Une fois d'accord, n'importe qui peut accuser.",
  p_waiting:"En attente", p_agrees:"D'accord", p_diff:"Différent", p_none:"Pas encore choisi",
  stats:"{f}/{t} indices · {w} erreurs · {h} aides",
  not_enough:"Insuffisant, inspecteur.", not_enough_pl:"Insuffisant, inspecteurs.",
  wrong_person:"{n} a une réponse raisonnable à tout ce que vous avancez. Cherchez quel récit ne colle pas aux faits.",
  wrong_proof:"C'est peut-être la bonne personne, mais cette preuve ne tiendra pas.", no_connect:"Cet indice ne relie pas cette personne au crime.",
  solved_stamp:"RÉSOLU", did_it:"C'était {n}.", solved_stats:"{w} erreurs · {h} aides", solved_in:" · résolue en {t}", open_case:"Ouvrir {c}",
  all_done:"Tous les dossiers de {w} sont classés. Essayez un autre monde depuis le menu.",
  case_file:"Dossier", case_closed:"Affaire classée", new_clue:"Nouvel indice : {c}",
  tip_solo:"Touchez ou cliquez sur les objets pour les examiner et sur les personnes pour les interroger.", tip_coop:"Séparez-vous : tout ce qu'un partenaire trouve arrive dans le carnet partagé.",
  accused:"accusé", examining:"examine {p}", questioning:"interroge {p}",
  race_board:"Classement · {c}", race_note:"Temps plus 1:00 par accusation fausse et 0:30 par indice.", race_none:"Personne n'a encore résolu cette affaire.", cracked:"{n} a résolu {c} en {t}",
  scene:"Scène", en_only:"Les histoires sont en anglais pour l'instant. D'autres langues arrivent.",
  live_off:"Vue en direct indisponible. Le carnet partagé fonctionne toujours.", save_fail:"Échec de l'enregistrement. Vérifiez votre connexion.",
  ob_title:"Bienvenue chez Hushlantern", ob_sub:"Des mystères équitables pour les esprits curieux. Configurons votre profil.", ob_lang:"Langue", ob_region:"Pays ou région", ob_start:"Commencer",
  ob_proto:"Gratuit, sans publicité. La progression s'enregistre automatiquement.",
  dob_title:"Quelle est ta date de naissance ?", dob_sub:"Elle sert à afficher les affaires adaptées à ton âge.", month:"Mois", year:"Année", next:"Continuer", back:"Retour",
  months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
  too_young:"Nos affaires sont faites pour les détectives de 8 ans et plus. À très bientôt !",
  grown_title:"Va chercher un adulte", grown_sub:"À ton âge, un parent ou tuteur doit créer le compte. Passe-lui l'appareil un instant.", grown_go:"Je suis le parent ou tuteur",
  par_title:"Pour les parents et tuteurs", par_sub:"Vous créez un profil pour un enfant. Nous gardons seulement un pseudonyme inventé, le mois et l'année de naissance et vos réglages. Pas de vrai nom, pas de photo, pas de chat.",
  par_email:"Votre e-mail", par_pin:"Créez un code parent à 4 chiffres", par_consent:"Je suis le parent ou tuteur de cet enfant et j'accepte de créer ce profil.",
  par_mp:"Autoriser le jeu entre amis avec des codes de table privés (sans chat)", par_go:"Continuer",
  err_email:"Saisissez une adresse e-mail valide.", err_pin:"Le code doit comporter 4 chiffres.", err_consent:"Confirmez que vous êtes le parent ou tuteur.",
  nick_title:"Choisis un nom de détective", nick_kid:"Les noms sont inventés pour que tu restes anonyme.", nick_self:"C'est ainsi que les autres joueurs te verront.",
  shuffle:"Changer", nick_type:"Ou écris le tien", nick_go:"Jouer", err_nick:"Choisis un nom de 2 à 16 caractères.",
  who:"Qui joue ?", add_player:"Ajouter un joueur", parent_settings:"Réglages parentaux", pin_title:"Saisissez le code parent", pin_wrong:"Ce code ne correspond pas.", pin_go:"Déverrouiller",
  done:"Terminé", del:"Supprimer le profil", del_confirm:"Touchez à nouveau pour supprimer", allow_mp:"Jouer avec des amis", cap:"Tranche d'âge maximale", cap_all:"Tout ce qui correspond à son âge",
  lang_label:"Langue", age_years:"{n} ans", managed:"Géré par un parent", close:"Fermer", switch_pin:"Le code parent est nécessaire pour passer à ce joueur."
},
hi:{
  picked:"आपकी उम्र के लिए चुने गए", more_play:"और भी खेलें",
  tagline:"घटनास्थल देखें, संदिग्धों से पूछताछ करें और साबित करें कि अपराधी कौन है। हर सुलझा केस अगली फ़ाइल खोलता है।",
  credit:"एक Hushlantern गेम",
  choose_world:"एक दुनिया चुनें", how_play:"आप कैसे खेलना चाहते हैं?",
  mode_solo:"अकेले", mode_solo_d:"अपनी रफ़्तार से अकेले केस सुलझाएँ।",
  mode_coop:"साथ मिलकर", mode_coop_d:"एक ही दृश्य में 4 तक जासूस और एक साझा नोटबुक। आरोप पर सबकी सहमति ज़रूरी।",
  mode_race:"रेस", mode_race_d:"एक ही केस, अपनी-अपनी नोटबुक। सबसे तेज़ सही आरोप जीतता है।",
  start_w:"{w} शुरू करें", continue_w:"{w} जारी रखें", reset_w:"{w} की प्रगति रीसेट करें", reset_confirm:"{w} की प्रगति मिटाने के लिए फिर से दबाएँ", erased:"प्रगति मिटा दी गई।",
  checking_mp:"जाँच रहे हैं कि मल्टीप्लेयर उपलब्ध है या नहीं…",
  mp_unavail:"दूसरों के साथ खेलने के लिए इस गेम की अनुमति के साथ साइन इन करना ज़रूरी है। अकेले खेलना तैयार है।",
  mp_off_kid:"इस खिलाड़ी के लिए दोस्तों के साथ खेलना बंद है। माता-पिता इसे पैरेंट सेटिंग्स में चालू कर सकते हैं।",
  new_table_coop:"नई साझा टेबल शुरू करें", new_table_race:"नई रेस टेबल शुरू करें", or_join:"या किसी से जुड़ें:", join:"जुड़ें", rejoin:"टेबल {c} पर लौटें",
  table_note:"हर टेबल का 4 अक्षरों का कोड होता है। दोस्तों को कोड भेजें। कोई चैट नहीं, सिर्फ़ केस।",
  code_ph:"कोड", err_codes:"टेबल कोड 4 अक्षरों का होता है।", err_notable:"{c} कोड वाली कोई टेबल नहीं मिली।",
  err_create:"टेबल नहीं बन सकी। इस गेम की अनुमति ज़रूरी है।", err_badtable:"यह टेबल नहीं खोली जा सकती।", err_agetable:"इस टेबल के केस इस खिलाड़ी के लिए उपलब्ध नहीं हैं।",
  solved_of:"{t} में से {n} सुलझे", ages:"{n}+ उम्र",
  menu:"← मेन्यू", table:"टेबल", copy:"कॉपी", copied:"कोड {c} कॉपी हो गया", code_is:"टेबल कोड: {c}", you:"आप", partner:"साथी",
  sealed:"बंद फ़ाइल", st_solved:"सुलझा", st_locked:"लॉक", st_open:"खुला",
  notebook:"नोटबुक", accuse:"आरोप", make_acc:"आरोप लगाएँ", hint:"संकेत माँगें", hint_shared:"संकेत माँगें (साझा)", no_hints:"और संकेत नहीं",
  show_clues:"सुराग दिखाएँ", hide_clues:"सुराग छिपाएँ", tap_hint:"जाँचने के लिए चीज़ों पर और पूछताछ के लिए लोगों पर टैप करें।", click_hint:"जाँचने के लिए चीज़ों पर और पूछताछ के लिए लोगों पर क्लिक करें।",
  nb_empty:"अभी कुछ नहीं। दृश्य में चीज़ें जाँचें और लोगों से पूछताछ करें।", evidence:"सबूत", testimony:"बयान", found_by:"{n} ने ढूँढा",
  req1:"एक संदिग्ध चुनें और सबूत के तौर पर नोटबुक में 1 सुराग चुनें ({n}/1)।", reqN:"एक संदिग्ध चुनें और सबूत के तौर पर नोटबुक में {k} सुराग चुनें ({n}/{k})।",
  req_closed:"केस बंद।", req_wait:"आपके साथी अभी सहमत नहीं हैं। सबको एक ही संदिग्ध और सबूत चुनना होगा।",
  partners_empty:"जब साथी यह केस खोलेंगे, उनकी पसंद यहाँ दिखेगी। सबके सहमत होने पर कोई भी आरोप लगा सकता है।",
  p_waiting:"इंतज़ार", p_agrees:"सहमत", p_diff:"अलग", p_none:"अभी नहीं चुना",
  stats:"{f}/{t} सुराग · {w} गलत · {h} संकेत",
  not_enough:"काफ़ी नहीं, इंस्पेक्टर।", not_enough_pl:"काफ़ी नहीं, इंस्पेक्टर्स।",
  wrong_person:"{n} के पास आपकी हर बात का ठीक जवाब है। फिर देखें कि किसकी कहानी रिकॉर्ड से मेल नहीं खाती।",
  wrong_proof:"शायद व्यक्ति सही है, पर यह सबूत टिकेगा नहीं।", no_connect:"यह सुराग उन्हें अपराध से नहीं जोड़ता।",
  solved_stamp:"सुलझा", did_it:"यह {n} ने किया।", solved_stats:"{w} गलत · {h} संकेत", solved_in:" · {t} में सुलझा", open_case:"{c} खोलें",
  all_done:"{w} की सारी फ़ाइलें बंद हो गईं। मेन्यू से कोई और दुनिया आज़माएँ।",
  case_file:"केस फ़ाइल", case_closed:"केस बंद", new_clue:"नया सुराग: {c}",
  tip_solo:"चीज़ों को जाँचने के लिए और लोगों से पूछताछ के लिए टैप या क्लिक करें।", tip_coop:"बँट जाइए: साथी जो भी ढूँढेगा, वह साझा नोटबुक में आ जाएगा।",
  accused:"आरोपी", examining:"{p} जाँच रहे हैं", questioning:"{p} से पूछताछ",
  race_board:"रेस बोर्ड · {c}", race_note:"समय, और हर गलत आरोप पर 1:00 व हर संकेत पर 0:30 जुड़ता है।", race_none:"अभी तक किसी ने यह केस नहीं सुलझाया।", cracked:"{n} ने {c} को {t} में सुलझाया",
  scene:"दृश्य", en_only:"फ़िलहाल केस की कहानियाँ अंग्रेज़ी में हैं। और भाषाएँ जल्द आएँगी।",
  live_off:"लाइव व्यू उपलब्ध नहीं। साझा नोटबुक फिर भी काम करती है।", save_fail:"सेव नहीं हो सका। कनेक्शन जाँचें।",
  ob_title:"Hushlantern में आपका स्वागत है", ob_sub:"जिज्ञासु दिमागों के लिए ईमानदार रहस्य। चलिए शुरू करते हैं।", ob_lang:"भाषा", ob_region:"देश या क्षेत्र", ob_start:"शुरू करें",
  ob_proto:"मुफ़्त, कोई विज्ञापन नहीं। प्रगति अपने आप सेव होती है।",
  dob_title:"आपका जन्म कब हुआ?", dob_sub:"इससे हम आपकी उम्र के हिसाब से केस दिखाते हैं।", month:"महीना", year:"साल", next:"आगे", back:"वापस",
  months:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"],
  too_young:"हमारे केस 8 साल और उससे बड़े जासूसों के लिए हैं। हम आपका इंतज़ार करेंगे!",
  grown_title:"किसी बड़े को बुलाइए", grown_sub:"आपकी उम्र के खिलाड़ियों के लिए माता-पिता या अभिभावक को सेटअप करना होता है। डिवाइस थोड़ी देर उन्हें दें।", grown_go:"मैं माता-पिता या अभिभावक हूँ",
  par_title:"माता-पिता और अभिभावकों के लिए", par_sub:"आप एक बच्चे की प्रोफ़ाइल बना रहे हैं। हम सिर्फ़ एक काल्पनिक उपनाम, जन्म का महीना और साल, और आपकी सेटिंग्स रखते हैं। कोई असली नाम, फ़ोटो या चैट नहीं।",
  par_email:"आपका ईमेल", par_pin:"4 अंकों का पैरेंट पिन बनाएँ", par_consent:"मैं इस बच्चे का माता-पिता या अभिभावक हूँ और प्रोफ़ाइल बनाने की सहमति देता/देती हूँ।",
  par_mp:"निजी टेबल कोड से दोस्तों के साथ खेलने दें (कोई चैट नहीं)", par_go:"आगे",
  err_email:"सही ईमेल पता लिखें।", err_pin:"पिन में ठीक 4 अंक होने चाहिए।", err_consent:"कृपया पुष्टि करें कि आप माता-पिता या अभिभावक हैं।",
  nick_title:"जासूसी नाम चुनें", nick_kid:"नाम काल्पनिक हैं, ताकि आपकी पहचान छिपी रहे।", nick_self:"दूसरे खिलाड़ी आपको इसी नाम से देखेंगे।",
  shuffle:"बदलें", nick_type:"या अपना नाम लिखें", nick_go:"खेलना शुरू करें", err_nick:"2 से 16 अक्षरों का नाम चुनें।",
  who:"कौन खेल रहा है?", add_player:"खिलाड़ी जोड़ें", parent_settings:"पैरेंट सेटिंग्स", pin_title:"पैरेंट पिन डालें", pin_wrong:"पिन मेल नहीं खाता।", pin_go:"खोलें",
  done:"हो गया", del:"प्रोफ़ाइल हटाएँ", del_confirm:"हटाने के लिए फिर दबाएँ", allow_mp:"दोस्तों के साथ खेलना", cap:"अधिकतम उम्र सीमा", cap_all:"उम्र के हिसाब से सब कुछ",
  lang_label:"भाषा", age_years:"{n} साल", managed:"माता-पिता द्वारा प्रबंधित", close:"बंद करें", switch_pin:"इस खिलाड़ी पर जाने के लिए पैरेंट पिन ज़रूरी है।"
}};
let LANG="en";
function t(k,v){let s=(I18N[LANG]&&I18N[LANG][k]);if(s==null)s=I18N.en[k];if(s==null)return k;if(v&&typeof s==="string")s=s.replace(/\{(\w+)\}/g,(m,n)=>v[n]!=null?v[n]:m);return s}
/* ================= STRINGS: help, points, nightly cases, resume ================= */
Object.assign(I18N.en,{
  help_btn:"How to play", help_title:"How to play", help_kid_title:"How to play",
  h:[["Read the case file","It tells you what happened. Tap the dialogue box to skip ahead."],
     ["Examine the scene","Tap objects to look at them. Stuck? Use Show clues to light up everything you can tap."],
     ["Question people","Tap a person to hear their side. Some of them aren't telling the truth."],
     ["Collect clues","Anything useful goes into your notebook automatically."],
     ["Make your accusation","Step 1: tap who did it. Step 2: pick the clue cards that prove it. The case tells you how many you need."],
     ["Earn points","Solve to score. Fewer wrong guesses and hints means more points. A new case drops every night at 7 pm."]],
  hk:[["Read what happened","The case file tells you the mystery."],
      ["Look around","Tap things in the picture. Tap Show clues if you're stuck."],
      ["Ask people","Tap a person to hear what they say."],
      ["Find clues","Clues go into your notebook all by themselves."],
      ["Say who did it","Pick who did it and the clue that shows it."],
      ["Get points","Every solved case gives you points. A new case comes every night at 7!"]],
  help_coop:"Playing together: clues anyone finds go into the shared notebook, and everyone has to agree before the accusation.",
  help_race:"Racing: your notebook is private. The fastest correct accusation wins.",
  got_it:"Got it",
  pts:"{n} pts", plus_pts:"+{n} points", pts_base:"Case solved", pts_first:"First try, no hints", pts_pen:"Wrong guesses and hints", pts_daily:"Solved on the night",
  ranks:["Rookie","Junior Detective","Detective","Senior Detective","Inspector","Chief Inspector"],
  to_next:"{n} pts to {r}", top_rank:"Top rank reached",
  daily_title:"Tonight's case", daily_world:"Nightly case", daily_new:"New tonight", daily_play:"Play tonight's case", daily_replay:"Open tonight's case",
  daily_next:"Next case drops at 7:00 pm", daily_in:"in {t}", daily_none:"The first nightly case drops at 7:00 pm.", daily_recent:"Recent nights",
  daily_done:"Solved. See you tomorrow at 7.", streak:"{n}-night streak",
  cont_title:"Continue where you left off", cont_btn:"Continue", welcome_back:"Welcome back! Picking up where you left off.",
  synced:"Progress saved to your account"
});
Object.assign(I18N.es,{
  help_btn:"Cómo jugar", help_title:"Cómo jugar", help_kid_title:"Cómo jugar",
  h:[["Lee el expediente","Te cuenta lo que pasó. Toca el cuadro de diálogo para avanzar."],
     ["Examina la escena","Toca los objetos para mirarlos. ¿Atascado? Usa Ver pistas para iluminar todo lo que puedes tocar."],
     ["Interroga a la gente","Toca a una persona para oír su versión. Algunos no dicen la verdad."],
     ["Reúne pistas","Todo lo útil va a tu cuaderno automáticamente."],
     ["Haz tu acusación","Paso 1: toca a quien lo hizo. Paso 2: elige las pistas que lo demuestran. El caso te dice cuántas necesitas."],
     ["Gana puntos","Resuelve para puntuar. Menos fallos y pistas, más puntos. Cada noche a las 7 pm llega un caso nuevo."]],
  hk:[["Lee qué pasó","El expediente te cuenta el misterio."],
      ["Mira alrededor","Toca cosas del dibujo. Toca Ver pistas si te atascas."],
      ["Pregunta","Toca a una persona para oír lo que dice."],
      ["Encuentra pistas","Las pistas van solas a tu cuaderno."],
      ["Di quién fue","Elige quién fue y la pista que lo demuestra."],
      ["Gana puntos","Cada caso resuelto te da puntos. ¡Cada noche a las 7 hay un caso nuevo!"]],
  help_coop:"En equipo: las pistas que encuentre cualquiera van al cuaderno compartido, y todos deben estar de acuerdo antes de acusar.",
  help_race:"Carrera: tu cuaderno es privado. Gana la acusación correcta más rápida.",
  got_it:"Entendido",
  pts:"{n} pts", plus_pts:"+{n} puntos", pts_base:"Caso resuelto", pts_first:"A la primera, sin pistas", pts_pen:"Fallos y pistas", pts_daily:"Resuelto esa misma noche",
  ranks:["Novato","Detective junior","Detective","Detective sénior","Inspector","Inspector jefe"],
  to_next:"{n} pts para {r}", top_rank:"Rango máximo",
  daily_title:"El caso de esta noche", daily_world:"Caso nocturno", daily_new:"Nuevo esta noche", daily_play:"Jugar el caso de esta noche", daily_replay:"Abrir el caso de esta noche",
  daily_next:"El próximo caso llega a las 7:00 pm", daily_in:"en {t}", daily_none:"El primer caso nocturno llega a las 7:00 pm.", daily_recent:"Noches anteriores",
  daily_done:"Resuelto. Hasta mañana a las 7.", streak:"Racha de {n} noches",
  cont_title:"Continúa donde lo dejaste", cont_btn:"Continuar", welcome_back:"¡Hola de nuevo! Seguimos donde lo dejaste.",
  synced:"Progreso guardado en tu cuenta"
});
Object.assign(I18N.fr,{
  help_btn:"Comment jouer", help_title:"Comment jouer", help_kid_title:"Comment jouer",
  h:[["Lisez le dossier","Il raconte ce qui s'est passé. Touchez la boîte de dialogue pour avancer."],
     ["Examinez la scène","Touchez les objets pour les regarder. Bloqué ? Voir les indices éclaire tout ce qui est touchable."],
     ["Interrogez","Touchez une personne pour entendre sa version. Certains mentent."],
     ["Collectez les indices","Tout ce qui est utile va automatiquement dans votre carnet."],
     ["Accusez","Étape 1 : touchez le coupable. Étape 2 : choisissez les indices qui le prouvent. L'affaire indique combien il en faut."],
     ["Gagnez des points","Résolvez pour marquer. Moins d'erreurs et d'aides, plus de points. Une nouvelle affaire arrive chaque soir à 19 h."]],
  hk:[["Lis ce qui s'est passé","Le dossier te raconte le mystère."],
      ["Regarde partout","Touche les choses sur l'image. Touche Voir les indices si tu bloques."],
      ["Pose des questions","Touche une personne pour entendre ce qu'elle dit."],
      ["Trouve des indices","Les indices vont tout seuls dans ton carnet."],
      ["Dis qui c'est","Choisis qui l'a fait et l'indice qui le montre."],
      ["Gagne des points","Chaque affaire résolue te donne des points. Une nouvelle affaire chaque soir à 19 h !"]],
  help_coop:"En équipe : les indices trouvés par n'importe qui vont dans le carnet partagé, et tout le monde doit être d'accord avant d'accuser.",
  help_race:"Course : votre carnet est privé. L'accusation juste la plus rapide gagne.",
  got_it:"Compris",
  pts:"{n} pts", plus_pts:"+{n} points", pts_base:"Affaire résolue", pts_first:"Du premier coup, sans aide", pts_pen:"Erreurs et aides", pts_daily:"Résolue le soir même",
  ranks:["Recrue","Détective junior","Détective","Détective confirmé","Inspecteur","Inspecteur en chef"],
  to_next:"{n} pts avant {r}", top_rank:"Rang maximal atteint",
  daily_title:"L'affaire du soir", daily_world:"Affaire du soir", daily_new:"Nouveau ce soir", daily_play:"Jouer l'affaire du soir", daily_replay:"Ouvrir l'affaire du soir",
  daily_next:"Prochaine affaire à 19 h", daily_in:"dans {t}", daily_none:"La première affaire du soir arrive à 19 h.", daily_recent:"Soirs précédents",
  daily_done:"Résolue. À demain, 19 h.", streak:"Série de {n} soirs",
  cont_title:"Reprendre là où vous étiez", cont_btn:"Reprendre", welcome_back:"Bon retour ! On reprend là où vous en étiez.",
  synced:"Progression enregistrée sur votre compte"
});
Object.assign(I18N.hi,{
  help_btn:"कैसे खेलें", help_title:"कैसे खेलें", help_kid_title:"कैसे खेलें",
  h:[["केस फ़ाइल पढ़ें","इसमें लिखा है कि क्या हुआ। आगे बढ़ने के लिए संवाद बॉक्स पर टैप करें।"],
     ["दृश्य जाँचें","चीज़ों को देखने के लिए उन पर टैप करें। अटक गए? सुराग दिखाएँ दबाकर सब टैप करने लायक चीज़ें देखें।"],
     ["पूछताछ करें","किसी व्यक्ति पर टैप करके उसकी बात सुनें। कुछ लोग सच नहीं बोल रहे।"],
     ["सुराग इकट्ठा करें","काम की हर चीज़ अपने आप आपकी नोटबुक में चली जाती है।"],
     ["आरोप लगाएँ","कदम 1: टैप करें किसने किया। कदम 2: उसे साबित करने वाले सुराग कार्ड चुनें। केस बताता है कि कितने चाहिए।"],
     ["अंक कमाएँ","केस सुलझाकर अंक पाएँ। कम गलतियाँ और कम संकेत, ज़्यादा अंक। हर रात 7 बजे नया केस आता है।"]],
  hk:[["पढ़ो क्या हुआ","केस फ़ाइल रहस्य बताती है।"],
      ["चारों ओर देखो","तस्वीर में चीज़ों पर टैप करो। अटक जाओ तो सुराग दिखाएँ दबाओ।"],
      ["लोगों से पूछो","किसी पर टैप करके सुनो वे क्या कहते हैं।"],
      ["सुराग ढूँढो","सुराग अपने आप तुम्हारी नोटबुक में चले जाते हैं।"],
      ["बताओ किसने किया","चुनो किसने किया और कौन सा सुराग यह दिखाता है।"],
      ["अंक पाओ","हर सुलझे केस पर अंक मिलते हैं। हर रात 7 बजे नया केस!"]],
  help_coop:"साथ खेलते समय: कोई भी जो सुराग ढूँढे, वह साझा नोटबुक में जाता है, और आरोप से पहले सबकी सहमति ज़रूरी है।",
  help_race:"रेस में: आपकी नोटबुक निजी है। सबसे तेज़ सही आरोप जीतता है।",
  got_it:"समझ गया",
  pts:"{n} अंक", plus_pts:"+{n} अंक", pts_base:"केस सुलझा", pts_first:"पहली बार में, बिना संकेत", pts_pen:"गलतियाँ और संकेत", pts_daily:"उसी रात सुलझाया",
  ranks:["नौसिखिया","जूनियर जासूस","जासूस","सीनियर जासूस","इंस्पेक्टर","चीफ़ इंस्पेक्टर"],
  to_next:"{r} तक {n} अंक", top_rank:"सबसे ऊँची रैंक",
  daily_title:"आज रात का केस", daily_world:"रात का केस", daily_new:"आज रात नया", daily_play:"आज रात का केस खेलें", daily_replay:"आज रात का केस खोलें",
  daily_next:"अगला केस शाम 7:00 बजे", daily_in:"{t} में", daily_none:"पहला रात का केस शाम 7:00 बजे आएगा।", daily_recent:"पिछली रातें",
  daily_done:"सुलझ गया। कल शाम 7 बजे मिलते हैं।", streak:"{n} रातों की लगातार जीत",
  cont_title:"जहाँ छोड़ा था वहीं से जारी रखें", cont_btn:"जारी रखें", welcome_back:"फिर से स्वागत है! जहाँ छोड़ा था वहीं से शुरू।",
  synced:"प्रगति आपके खाते में सेव हो गई"
});
/* ================= STRINGS: guided accusation + learning ================= */
Object.assign(I18N.en,{
  age_later:"{c} opens when you turn {a}. Until then, there are more cases in the other worlds.",
  case_no:"Case {n}", meta_1:"Ages {a}+ · find 1 clue", meta_n:"Ages {a}+ · prove it with {k} clues",
  music_on:"Music on", music_off:"Music off",
  step_who:"Who did it?", step_proof:"Which clue proves it?",
  pick_first:"Start with step 1: pick who you think did it.",
  proof_q1:"Which clue proves {n} did it? Pick 1.", proof_qN:"Which {k} clues together prove {n} did it? ({c} of {k} picked)",
  accuse_n:"Accuse {n}", from_src:"from {s}", no_proofs:"No clues yet. Explore the scene to fill your notebook.",
  think_title:"Think like a detective",
  think:["Does it show they had the chance, like being there at the right time?","Does it catch a lie in someone's story?","Could it point at someone else just as easily? Then it isn't proof yet."],
  think_kid:["Does it show they were there?","Does it show someone's story isn't true?","Could it be about someone else too? Then keep looking!"],
  one_good:"One of your clues is solid. The other one isn't:",
  auto_hint_c:"Look closely at this clue: {c}.", auto_hint_p:"Go back and check the {p}.",
  edu_title:"Good for growing brains", edu_sub:"Every case is a workout for the skills kids use in school and life.",
  edu_line:"Every case builds observation, reading and reasoning skills.",
  skills_used:"Skills you used",
  sk:{observe:["Observation","Notice the small details others miss."],read:["Reading closely","Work out what each clue really says."],reason:["Logical reasoning","Connect facts to reach a conclusion."],lie:["Checking stories","Test what people say against the evidence."],time:["Timelines","Put events in order and spot the gaps."],mistakes:["Learning from mistakes","Wrong guesses explain why, so you try again smarter."],team:["Teamwork","Share clues and agree on an answer together."]}
});
Object.assign(I18N.es,{
  age_later:"El {c} se abre cuando cumplas {a}. Mientras tanto, hay más casos en los otros mundos.",
  case_no:"Caso {n}", meta_1:"Desde {a} años · encuentra 1 pista", meta_n:"Desde {a} años · demuéstralo con {k} pistas",
  music_on:"Música sí", music_off:"Música no",
  step_who:"¿Quién fue?", step_proof:"¿Qué pista lo demuestra?",
  pick_first:"Empieza por el paso 1: elige quién crees que fue.",
  proof_q1:"¿Qué pista demuestra que fue {n}? Elige 1.", proof_qN:"¿Qué {k} pistas juntas demuestran que fue {n}? ({c} de {k})",
  accuse_n:"Acusar a {n}", from_src:"de {s}", no_proofs:"Aún no hay pistas. Explora la escena para llenar tu cuaderno.",
  think_title:"Piensa como un detective",
  think:["¿Muestra que tuvo la oportunidad, por ejemplo estar allí a la hora justa?","¿Pilla una mentira en la historia de alguien?","¿Podría señalar a otra persona igual de bien? Entonces todavía no es prueba."],
  think_kid:["¿Muestra que estuvo allí?","¿Muestra que la historia de alguien no es verdad?","¿Podría tratarse de otra persona? ¡Sigue buscando!"],
  one_good:"Una de tus pistas es buena. La otra no:",
  auto_hint_c:"Mira con atención esta pista: {c}.", auto_hint_p:"Vuelve a revisar: {p}.",
  edu_title:"Bueno para mentes en crecimiento", edu_sub:"Cada caso entrena las habilidades que los niños usan en la escuela y en la vida.",
  edu_line:"Cada caso desarrolla la observación, la lectura y el razonamiento.",
  skills_used:"Habilidades que usaste",
  sk:{observe:["Observación","Fíjate en los detalles que otros pasan por alto."],read:["Lectura atenta","Entiende lo que dice de verdad cada pista."],reason:["Razonamiento lógico","Une los hechos para llegar a una conclusión."],lie:["Comprobar historias","Contrasta lo que dice la gente con las pruebas."],time:["Líneas de tiempo","Ordena los hechos y encuentra los huecos."],mistakes:["Aprender de los errores","Cada fallo explica por qué, para intentarlo mejor."],team:["Trabajo en equipo","Compartid pistas y poneos de acuerdo."]}
});
Object.assign(I18N.fr,{
  age_later:"L'{c} s'ouvre quand tu auras {a} ans. En attendant, d'autres affaires t'attendent dans les autres mondes.",
  case_no:"Affaire {n}", meta_1:"Dès {a} ans · trouve 1 indice", meta_n:"Dès {a} ans · prouve-le avec {k} indices",
  music_on:"Musique oui", music_off:"Musique non",
  step_who:"Qui l'a fait ?", step_proof:"Quel indice le prouve ?",
  pick_first:"Commence par l'étape 1 : choisis qui, selon toi, l'a fait.",
  proof_q1:"Quel indice prouve que c'est {n} ? Choisis-en 1.", proof_qN:"Quels {k} indices ensemble prouvent que c'est {n} ? ({c} sur {k})",
  accuse_n:"Accuser {n}", from_src:"de : {s}", no_proofs:"Pas encore d'indices. Explore la scène pour remplir ton carnet.",
  think_title:"Pense comme un détective",
  think:["Montre-t-il que la personne en a eu l'occasion, par exemple qu'elle était là au bon moment ?","Révèle-t-il un mensonge dans l'histoire de quelqu'un ?","Pourrait-il désigner quelqu'un d'autre aussi bien ? Alors ce n'est pas encore une preuve."],
  think_kid:["Montre-t-il qu'elle était là ?","Montre-t-il que l'histoire de quelqu'un est fausse ?","Pourrait-il parler de quelqu'un d'autre ? Continue de chercher !"],
  one_good:"Un de tes indices est solide. L'autre non :",
  auto_hint_c:"Regarde bien cet indice : {c}.", auto_hint_p:"Retourne voir : {p}.",
  edu_title:"Bon pour les esprits en croissance", edu_sub:"Chaque affaire entraîne les compétences dont les enfants se servent à l'école et dans la vie.",
  edu_line:"Chaque affaire développe l'observation, la lecture et le raisonnement.",
  skills_used:"Compétences utilisées",
  sk:{observe:["Observation","Repérer les petits détails que les autres ratent."],read:["Lecture attentive","Comprendre ce que dit vraiment chaque indice."],reason:["Raisonnement logique","Relier les faits pour arriver à une conclusion."],lie:["Vérifier les récits","Confronter ce que disent les gens aux preuves."],time:["Chronologies","Remettre les faits dans l'ordre et repérer les trous."],mistakes:["Apprendre de ses erreurs","Chaque erreur explique pourquoi, pour mieux réessayer."],team:["Travail d'équipe","Partager les indices et se mettre d'accord."]}
});
Object.assign(I18N.hi,{
  age_later:"{c} तब खुलेगा जब आप {a} साल के होंगे। तब तक दूसरी दुनियाओं में और केस हैं।",
  case_no:"केस {n}", meta_1:"{a}+ उम्र · 1 सुराग ढूँढें", meta_n:"{a}+ उम्र · {k} सुरागों से साबित करें",
  music_on:"संगीत चालू", music_off:"संगीत बंद",
  step_who:"किसने किया?", step_proof:"कौन सा सुराग इसे साबित करता है?",
  pick_first:"पहले कदम 1: चुनें कि आपके हिसाब से किसने किया।",
  proof_q1:"कौन सा सुराग साबित करता है कि {n} ने किया? 1 चुनें।", proof_qN:"कौन से {k} सुराग मिलकर साबित करते हैं कि {n} ने किया? ({k} में से {c})",
  accuse_n:"{n} पर आरोप लगाएँ", from_src:"{s} से", no_proofs:"अभी कोई सुराग नहीं। नोटबुक भरने के लिए दृश्य जाँचें।",
  think_title:"जासूस की तरह सोचें",
  think:["क्या यह दिखाता है कि उनके पास मौका था, जैसे सही समय पर वहाँ होना?","क्या यह किसी की कहानी में झूठ पकड़ता है?","क्या यह उतनी ही आसानी से किसी और की ओर इशारा कर सकता है? तो यह अभी सबूत नहीं है।"],
  think_kid:["क्या यह दिखाता है कि वे वहाँ थे?","क्या यह दिखाता है कि किसी की कहानी सच नहीं है?","क्या यह किसी और के बारे में भी हो सकता है? तो ढूँढते रहो!"],
  one_good:"आपका एक सुराग पक्का है। दूसरा नहीं:",
  auto_hint_c:"इस सुराग को ध्यान से देखें: {c}।", auto_hint_p:"फिर से जाँचें: {p}।",
  edu_title:"बढ़ते दिमाग़ के लिए अच्छा", edu_sub:"हर केस उन कौशलों का अभ्यास है जो बच्चे स्कूल और ज़िंदगी में इस्तेमाल करते हैं।",
  edu_line:"हर केस अवलोकन, पढ़ने और तर्क की क्षमता बढ़ाता है।",
  skills_used:"आपने ये कौशल इस्तेमाल किए",
  sk:{observe:["अवलोकन","वे छोटी बातें देखें जो दूसरे चूक जाते हैं।"],read:["ध्यान से पढ़ना","समझें कि हर सुराग असल में क्या कहता है।"],reason:["तार्किक सोच","तथ्यों को जोड़कर नतीजे तक पहुँचें।"],lie:["कहानी जाँचना","लोगों की बातों को सबूतों से मिलाएँ।"],time:["समय-रेखा","घटनाओं को क्रम में रखें और कमियाँ पकड़ें।"],mistakes:["गलतियों से सीखना","हर गलत अनुमान बताता है क्यों, ताकि बेहतर कोशिश करें।"],team:["टीमवर्क","सुराग बाँटें और मिलकर जवाब तय करें।"]}
});
/* ================= CHARACTER ART ================= */
function hatSVG(h,c){
  switch(h){
    case "fedora": return `<path d="M-13 -140 Q-12 -160 0 -160 Q12 -160 13 -140 Z" fill="${c}"/><rect x="-13" y="-146" width="26" height="5" fill="#8C3A2E"/><ellipse cx="0" cy="-140" rx="25" ry="5" fill="${c}"/>`;
    case "chef": return `<rect x="-13" y="-150" width="26" height="12" fill="#F7F5EF"/><circle cx="-9" cy="-155" r="9" fill="#F7F5EF"/><circle cx="4" cy="-160" r="10" fill="#F7F5EF"/><circle cx="11" cy="-152" r="7" fill="#F7F5EF"/>`;
    case "cap": return `<path d="M-15 -134 Q-15 -152 0 -152 Q15 -152 15 -134 Z" fill="${c}"/><path d="M8 -136 L28 -134 L26 -130 L6 -132Z" fill="${c}"/>`;
    case "guard": return `<path d="M-16 -138 L-14 -150 L14 -150 L16 -138 Z" fill="${c}"/><rect x="-17" y="-140" width="34" height="5" fill="#111"/><path d="M-12 -136 L14 -136 L18 -132 L-10 -132Z" fill="#111"/><circle cx="0" cy="-145" r="3" fill="#E5C25A"/>`;
    case "bun": return `<path d="M-16 -128 Q-16 -146 0 -146 Q16 -146 16 -128 Q10 -138 0 -138 Q-10 -138 -16 -128Z" fill="${c}"/><circle cx="0" cy="-150" r="8" fill="${c}"/>`;
    case "beanie": return `<path d="M-16 -132 Q-16 -154 0 -154 Q16 -154 16 -132 Z" fill="${c}"/><rect x="-17" y="-136" width="34" height="7" rx="2" fill="${c}" opacity=".8"/><circle cx="0" cy="-156" r="4" fill="${c}"/>`;
    case "long": return `<path d="M-17 -110 Q-20 -146 0 -146 Q20 -146 17 -110 L12 -110 Q14 -134 0 -136 Q-14 -134 -12 -110Z" fill="${c}"/>`;
    case "short": return `<path d="M-16 -128 Q-16 -146 0 -146 Q16 -146 16 -128 Q8 -136 -4 -134 Q-12 -132 -16 -128Z" fill="${c}"/>`;
    case "tophat": return `<rect x="-12" y="-172" width="24" height="30" fill="${c}"/><rect x="-12" y="-150" width="24" height="4" fill="#6A2424"/><ellipse cx="0" cy="-142" rx="22" ry="4.5" fill="${c}"/>`;
    case "maid": return `<path d="M-16 -126 Q-16 -146 0 -146 Q16 -146 16 -126 Q8 -136 0 -136 Q-8 -136 -16 -126Z" fill="${c}"/><path d="M-15 -138 Q-10 -150 0 -147 Q10 -150 15 -138 Q8 -142 0 -141 Q-8 -142 -15 -138Z" fill="#F7F5EF"/>`;
    case "bonnet": return `<ellipse cx="0" cy="-141" rx="19" ry="11" fill="#F7F5EF"/><path d="M-19 -137 Q0 -129 19 -137" stroke="#CFC8B8" stroke-width="2" fill="none"/>`;
    case "deerstalker": return `<path d="M-15 -134 Q-15 -155 0 -155 Q15 -155 15 -134Z" fill="${c}"/><path d="M12 -137 L26 -132 L12 -130Z M-12 -137 L-26 -132 L-12 -130Z" fill="${c}"/><path d="M-8 -150 L8 -150" stroke="rgba(0,0,0,.25)" stroke-width="2"/>`;
    case "hood": return `<path d="M-21 -110 Q-25 -152 0 -154 Q25 -152 21 -110 L14 -110 Q16 -138 0 -140 Q-16 -138 -14 -110Z" fill="${c}"/>`;
    case "helmet": return `<path d="M-17 -127 Q-17 -153 0 -153 Q17 -153 17 -127 Z" fill="#9AA0A8"/><rect x="-18" y="-131" width="36" height="5" fill="#7C828A"/><rect x="-1.5" y="-131" width="3" height="16" fill="#7C828A"/>`;
    case "tonsure": return `<path d="M-16 -122 Q-17 -138 -9 -141 L-9 -137 Q-13 -134 -12 -122Z M16 -122 Q17 -138 9 -141 L9 -137 Q13 -134 12 -122Z" fill="${c}"/>`;
    case "wizard": return `<path d="M-20 -137 L6 -200 L20 -137Z" fill="${c}"/><ellipse cx="0" cy="-137" rx="27" ry="5" fill="${c}"/><circle cx="4" cy="-170" r="3" fill="#F2D06B"/><circle cx="-5" cy="-152" r="2" fill="#F2D06B"/><circle cx="10" cy="-148" r="1.6" fill="#F2D06B"/>`;
    case "feather": return `<path d="M-15 -134 Q-14 -151 0 -151 Q14 -151 15 -134Z" fill="${c}"/><path d="M6 -146 Q30 -176 24 -142 Q18 -146 6 -146Z" fill="#E8C15A" stroke="#B98A2E" stroke-width="1.2"/>`;
    case "bald": return `<path d="M-16 -126 Q-16 -134 -12 -136 L-12 -122Z M16 -126 Q16 -134 12 -136 L12 -122Z" fill="${c}"/>`;
    case "pony": return `<path d="M-16 -126 Q-16 -146 0 -146 Q16 -146 16 -126 Q8 -136 0 -136 Q-8 -136 -16 -126Z" fill="${c}"/><path d="M13 -138 Q32 -130 24 -102 Q20 -118 11 -128Z" fill="${c}"/>`;
    case "puffs": return `<path d="M-16 -126 Q-16 -146 0 -146 Q16 -146 16 -126 Q8 -136 0 -136 Q-8 -136 -16 -126Z" fill="${c}"/><circle cx="-15" cy="-144" r="9" fill="${c}"/><circle cx="15" cy="-144" r="9" fill="${c}"/>`;
    case "curly": return `<g fill="${c}"><circle cx="-12" cy="-138" r="8"/><circle cx="0" cy="-144" r="9"/><circle cx="12" cy="-138" r="8"/><circle cx="-15" cy="-128" r="5"/><circle cx="15" cy="-128" r="5"/></g>`;
    case "buzz": return `<path d="M-15 -130 Q-15 -144 0 -144 Q15 -144 15 -130 Q8 -136 0 -136 Q-8 -136 -15 -130Z" fill="${c}"/>`;
    default: return "";
  }
}
function faceSVG(f,c){
  switch(f){
    case "beard": return `<path d="M-14 -126 Q-15 -104 0 -100 Q15 -104 14 -126 Q8 -120 0 -120 Q-8 -120 -14 -126Z" fill="${c}"/>`;
    case "longbeard": return `<path d="M-14 -126 Q-16 -92 2 -82 Q16 -96 14 -126 Q8 -120 0 -120 Q-8 -120 -14 -126Z" fill="${c}"/>`;
    case "moustache": return `<path d="M-6 -121 Q0 -125 6 -121 Q12 -121 14 -124 Q10 -116 4 -118 Q0 -117 -4 -118 Q-10 -116 -14 -124 Q-12 -121 -6 -121Z" fill="${c}"/>`;
    case "whiskers": return `<path d="M-15 -132 L-15 -118 Q-11 -114 -9 -120 L-11 -132Z M15 -132 L15 -118 Q11 -114 9 -120 L11 -132Z" fill="${c}"/>`;
    default: return "";
  }
}
function shade(hex,f){const m=/^#?([0-9a-f]{6})$/i.exec(hex||"");if(!m)return "rgba(0,0,0,.35)";const n=parseInt(m[1],16);const c=k=>Math.max(0,Math.min(255,Math.round(((n>>k)&255)*f)));return `rgb(${c(16)},${c(8)},${c(0)})`}
let FIGN=0;
function figure(o,coat){
  const C=coat||o.coat,L=o.legs||"#2A2A2A",ol=shade(C,.6),lo=shade(L,.55),so=shade(o.skin,.7),br=o.browc||(["short","curly","pony","puffs","bun","buzz","long","tonsure","bald"].includes(o.hat)?shade(o.hatc||"#3A2A1E",.85):"#3A2A1E");
  const w=o.wide?27:23,hem=o.long?34:46,armEnd=o.long||o.gown?50:60,n=FIGN++,dl=-((n*1.37)%5).toFixed(2);
  const body=o.gown
    ?`<path d="M-15 -110 Q0 -118 15 -110 Q27 -52 34 -8 Q0 2 -34 -8 Q-27 -52 -15 -110Z" fill="${C}" stroke="${ol}" stroke-width="2" stroke-linejoin="round"/>`
    :`<path d="M-18 -110 Q0 -119 18 -110 Q${w} -84 ${w} -${hem+6} Q${w} -${hem-2} ${w-7} -${hem-2} L-${w-7} -${hem-2} Q-${w} -${hem-2} -${w} -${hem+6} Q-${w} -84 -18 -110Z" fill="${C}" stroke="${ol}" stroke-width="2" stroke-linejoin="round"/>`;
  const arm=(cls,sx)=>`<g class="arm ${cls}"><path d="M${17*sx} -104 Q${27*sx} -82 ${28*sx} -${armEnd}" stroke="${ol}" stroke-width="12.5" fill="none" stroke-linecap="round"/><path d="M${17*sx} -104 Q${27*sx} -82 ${28*sx} -${armEnd}" stroke="${C}" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="${28*sx}" cy="-${armEnd-3}" r="6" fill="${o.skin}" stroke="${so}" stroke-width="1.2"/></g>`;
  const leg=(cls,x,sx)=>`<g class="leg ${cls}"><rect x="${x}" y="-52" width="10.5" height="48" rx="5" fill="${L}" stroke="${lo}" stroke-width="1.5"/><path d="M${x-1} -3 Q${x-1} -9 ${x+5} -9 Q${x+12+sx*3} -9 ${x+13+sx*3} -3 Q${x+13+sx*3} 1 ${x+6} 1 L${x} 1 Q${x-1} 1 ${x-1} -3Z" fill="#2A2420"/></g>`;
  return `${o.s?`<g transform="scale(${o.s})">`:""}<g class="bob" style="--d:${dl}s">
    <ellipse class="shadow" cx="0" cy="2" rx="24" ry="5" fill="rgba(0,0,0,.22)"/>
    <g class="rig">
    ${leg("l",-12.5,-1)}${leg("r",2,1)}
    <g class="torso">
    ${arm("l",-1)}${arm("r",1)}
    ${body}
    <path d="M-12 -104 Q-16 -84 -15 -${hem+8}" stroke="#FFFFFF" stroke-opacity=".14" stroke-width="5" fill="none" stroke-linecap="round"/>
    ${o.extra||""}
    <rect x="-5" y="-118" width="10" height="10" rx="3" fill="${o.skin}"/>
    <g class="head"><g transform="translate(0 -131) scale(1.42) translate(0 128)">
      <circle cx="-14.5" cy="-127" r="3.2" fill="${o.skin}" stroke="${so}" stroke-width=".9"/><circle cx="14.5" cy="-127" r="3.2" fill="${o.skin}" stroke="${so}" stroke-width=".9"/>
      <circle cx="0" cy="-128" r="15" fill="${o.skin}" stroke="${so}" stroke-width="1"/>
      <g fill="#FF7A7A" opacity=".32"><circle cx="-9.5" cy="-122.5" r="2.6"/><circle cx="9.5" cy="-122.5" r="2.6"/></g>
      <g class="eyes"><ellipse cx="-5.5" cy="-129" rx="3.6" ry="4.1" fill="#FFFFFF"/><ellipse cx="5.5" cy="-129" rx="3.6" ry="4.1" fill="#FFFFFF"/><g class="pupils"><circle cx="-4.8" cy="-128.6" r="2.2" fill="#1E1A1A"/><circle cx="6.2" cy="-128.6" r="2.2" fill="#1E1A1A"/><circle cx="-4" cy="-129.6" r=".8" fill="#FFFFFF"/><circle cx="7" cy="-129.6" r=".8" fill="#FFFFFF"/></g></g>
      <path class="brows" d="M-8.5 -134.6 Q-5.5 -136.4 -2.5 -134.8 M2.5 -134.8 Q5.5 -136.4 8.5 -134.6" stroke="${br}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path class="m-smile" d="M-3.8 -121.8 Q0 -118.4 3.8 -121.8" stroke="#7A2E2E" stroke-width="1.3" fill="none" stroke-linecap="round"/>
      <path class="m-open" d="M-3.6 -122.2 Q0 -122.8 3.6 -122.2 Q3 -117.6 0 -117.4 Q-3 -117.6 -3.6 -122.2Z" fill="#7A2E2E" opacity="0"/>
      <ellipse class="m-o" cx="0" cy="-120" rx="2.2" ry="2.8" fill="#7A2E2E" opacity="0"/>
      ${faceSVG(o.face,o.facec)}
      <g stroke="${shade(o.hatc||"#3A2A1E",.6)}" stroke-width=".9" stroke-linejoin="round">${hatSVG(o.hat,o.hatc)}</g>
      ${o.top||""}
      <path class="sweat" d="M17 -140 C20 -135 21 -132 18.5 -130 C16 -132 15.5 -135 17 -140Z" fill="#8FD3FF" stroke="#3A8FC4" stroke-width=".6" opacity="0"/>
    </g></g>
    </g></g>
    <g class="emote" opacity="0"><circle cx="0" cy="-${o.long||o.gown?196:200}" r="13" fill="#FFC24B" stroke="#1E1B3A" stroke-width="2.5"/><text x="0" y="-${o.long||o.gown?190:194}" text-anchor="middle" font-family="Poppins,system-ui,sans-serif" font-weight="800" font-size="18" fill="#1E1B3A">!</text></g>
  </g>${o.s?"</g>":""}`;
}
const APRON=`<rect x="-15" y="-104" width="30" height="58" rx="3" fill="#F2EEE4"/>`;
const LOOKS={
  /* detectives */
  wren_noir:{coat:"#B48A56",legs:"#3A3530",skin:"#E3B48E",hat:"fedora",hatc:"#3B3631",long:true,extra:`<path d="M-12 -112 L12 -112 L8 -102 L-8 -102Z" fill="#A23B2E"/><path d="M6 -104 L10 -84" stroke="#A23B2E" stroke-width="5"/><line x1="0" y1="-108" x2="0" y2="-40" stroke="rgba(0,0,0,.2)" stroke-width="2"/><rect x="-23" y="-74" width="46" height="5" fill="rgba(0,0,0,.22)"/>`},
  wren_manor:{coat:"#7D6B4E",legs:"#3A3530",skin:"#E3B48E",hat:"deerstalker",hatc:"#8A7A5C",long:true,extra:`<path d="M-24 -110 Q0 -122 24 -110 L28 -82 Q0 -74 -28 -82Z" fill="rgba(0,0,0,.18)"/><circle cx="24" cy="-60" r="7" fill="none" stroke="#C9A24A" stroke-width="2.5"/>`},
  wren_fantasy:{coat:"#3F5A48",legs:"#3A3024",skin:"#E3B48E",hat:"hood",hatc:"#2E4436",long:true,extra:`<rect x="-23" y="-72" width="46" height="5" fill="#5A4026"/><rect x="8" y="-70" width="10" height="12" rx="2" fill="#7A5A36"/>`},
  /* noir */
  marta:{coat:"#7A5C8C",legs:"#2E2A35",skin:"#C98F6A",hat:"chef",extra:APRON},
  dev:{coat:"#2F6E78",legs:"#22262D",skin:"#9C6B4A",hat:"short",hatc:"#1B1714",extra:`<rect x="6" y="-100" width="10" height="12" fill="#F2EEE4"/>`},
  owen:{coat:"#3D4A5E",legs:"#1F232B",skin:"#E0B08C",hat:"cap",hatc:"#C2512E",extra:`<circle cx="-8" cy="-80" r="5" fill="#1E1B18" opacity=".7"/><circle cx="10" cy="-66" r="4" fill="#1E1B18" opacity=".6"/>`},
  iris:{coat:"#1F2633",legs:"#151A22",skin:"#E5BC9C",hat:"bun",hatc:"#6A3B26",long:true,extra:`<path d="M-4 -110 L0 -96 L4 -110" fill="#C8A44A"/>`,top:`<circle cx="-6" cy="-129" r="5" fill="none" stroke="#111" stroke-width="1.5"/><circle cx="6" cy="-129" r="5" fill="none" stroke="#111" stroke-width="1.5"/>`},
  noor:{coat:"#2A3A57",legs:"#1A2133",skin:"#B07A55",hat:"guard",hatc:"#2A3A57",extra:`<rect x="6" y="-100" width="9" height="11" fill="#E5C25A"/><rect x="-22" y="-56" width="44" height="5" fill="#111"/>`},
  felix:{coat:"#EDEAE2",legs:"#2A2A2A",skin:"#D9A27C",hat:"short",hatc:"#A76B33",extra:`<path d="M-7 -112 L0 -106 L-7 -100Z M7 -112 L0 -106 L7 -100Z" fill="#A23B2E"/><circle cx="0" cy="-90" r="2" fill="#555"/><circle cx="0" cy="-78" r="2" fill="#555"/>`},
  bram:{coat:"#C9A229",legs:"#2E3A3A",skin:"#D7A07E",hat:"beanie",hatc:"#3F5F6E",wide:true},
  cass:{coat:"#6A7F5E",legs:"#3A3326",skin:"#EAC2A0",hat:"long",hatc:"#C56A3A"},
  edda:{coat:"#8A4E5E",legs:"#2C2629",skin:"#C79070",hat:"short",hatc:"#D5D2CC",long:true,extra:`<rect x="18" y="-80" width="16" height="22" rx="2" fill="#E8E1CC" stroke="#6B5B3F" stroke-width="2"/>`},
  /* manor */
  pell:{coat:"#5B5F7A",legs:"#2A2A30",skin:"#E8B896",hat:"bonnet",wide:true,extra:APRON},
  thomas:{coat:"#2B3550",legs:"#1E2234",skin:"#E0B08C",hat:"short",hatc:"#5A3A22",extra:`<path d="M-5 -112 L5 -112 L0 -100Z" fill="#F7F5EF"/><circle cx="-6" cy="-92" r="2" fill="#D4B064"/><circle cx="-6" cy="-80" r="2" fill="#D4B064"/><circle cx="-6" cy="-68" r="2" fill="#D4B064"/>`},
  hale:{coat:"#A85C6E",gown:true,skin:"#F0C8A8",hat:"long",hatc:"#8A5A2E",extra:`<path d="M-15 -110 Q0 -100 15 -110" stroke="#F2EEE4" stroke-width="3" fill="none"/>`},
  rupert:{coat:"#4A3A5A",legs:"#1E1A22",skin:"#EAC2A0",hat:"tophat",hatc:"#1E1A22",extra:`<path d="M-8 -108 L8 -108 L6 -70 L-6 -70Z" fill="#C9A24A"/>`},
  greaves:{coat:"#22252B",legs:"#16181C",skin:"#E3BFA0",hat:"tophat",hatc:"#111214",long:true,face:"whiskers",facec:"#B8B4AC",extra:`<path d="M-6 -112 L6 -112 L4 -104 L-4 -104Z" fill="#F7F5EF"/>`},
  agnes:{coat:"#3E4250",gown:true,skin:"#D9A27C",hat:"maid",hatc:"#3A2A1E",extra:`<path d="M-13 -100 L13 -100 L22 -6 L-22 -6Z" fill="#F2EEE4"/>`},
  colonel:{coat:"#A3322E",legs:"#22262D",skin:"#E3B48E",hat:"short",hatc:"#E0E0E0",face:"moustache",facec:"#EDEDED",extra:`<circle cx="-8" cy="-92" r="3" fill="#D4B064"/><circle cx="0" cy="-92" r="3" fill="#C0C0C0"/><rect x="-20" y="-58" width="40" height="4" fill="#E5D9B6"/>`},
  hobbs:{coat:"#1C1C22",legs:"#141418",skin:"#E8C3A4",hat:"bald",hatc:"#A8A8A8",long:true,extra:`<path d="M-6 -112 L6 -112 L4 -76 L-4 -76Z" fill="#F7F5EF"/>`},
  vera:{coat:"#5E3D78",gown:true,skin:"#F0CDB0",hat:"bun",hatc:"#2A1E1A",extra:`<path d="M-9 -112 Q0 -104 9 -112" stroke="#F4F1E8" stroke-width="2.5" fill="none" stroke-dasharray="1 2.5"/>`},
  /* fantasy */
  aldo:{coat:"#6B4E33",legs:"#4A3624",skin:"#E3B48E",hat:"tonsure",hatc:"#3A2A1E",long:true,extra:`<rect x="-22" y="-70" width="44" height="4" fill="#C9B07A"/><path d="M14 -68 L16 -46" stroke="#C9B07A" stroke-width="3"/>`},
  garran:{coat:"#7C838C",legs:"#5A5F66",skin:"#D7A07E",hat:"helmet",wide:true,extra:`<path d="M-12 -108 L12 -108 L12 -52 L0 -46 L-12 -52Z" fill="#2E4A7A"/><path d="M-5 -88 L-3 -82 L0 -88 L3 -82 L5 -88 L5 -78 L-5 -78Z" fill="#E5C25A"/>`},
  mira:{coat:"#4F7A3E",legs:"#3A2A1E",skin:"#F0C8A8",hat:"long",hatc:"#B5652E",extra:`<rect x="-22" y="-64" width="44" height="4" fill="#5A4026"/>`},
  tamsin:{coat:"#8A5A3E",legs:"#3A2A1E",skin:"#E8B896",hat:"bun",hatc:"#C9A24A",wide:true,extra:APRON},
  corvin:{coat:"#5A4A3A",legs:"#2A2420",skin:"#C98F6A",hat:"short",hatc:"#2A2420",wide:true,face:"beard",facec:"#2A2420",extra:`<path d="M-16 -100 L16 -100 L20 -40 L-20 -40Z" fill="#3A2C20"/>`},
  lisel:{coat:"#9E2F3A",legs:"#2F3A5E",skin:"#F0CDB0",hat:"feather",hatc:"#2F3A5E",extra:`<path d="M-18 -104 L18 -60" stroke="#C9A24A" stroke-width="3"/>`},
  malric:{coat:"#2F3F7A",legs:"#1E2850",skin:"#E3BFA0",hat:"wizard",hatc:"#2F3F7A",long:true,face:"longbeard",facec:"#D8D4CC",extra:`<circle cx="-8" cy="-80" r="2" fill="#F2D06B"/><circle cx="8" cy="-60" r="2" fill="#F2D06B"/>`},
  odette:{coat:"#5A6E8A",legs:"#2E3A4A",skin:"#F0C8A8",hat:"hood",hatc:"#4A5C78",long:true},
  brannoc:{coat:"#EDEAE2",legs:"#3A3A3A",skin:"#D9A27C",hat:"chef",wide:true,face:"moustache",facec:"#6A4A2E",extra:`<rect x="-18" y="-60" width="36" height="5" fill="#A23B2E"/>`}
};
const PARTNER_COATS=[null,"#5E7FA8","#8E5E9E","#4F8A6A"];

/* ================= SCENES ================= */
function books(x,y,w,h,seed){
  const cols=["#7A2430","#2E4A7A","#4F6B3A","#8A6A2E","#5E3D78","#2F5F5A","#9E5A2E"];
  let out="",cx=x,s=seed||1;
  while(cx<x+w-6){s=(s*9301+49297)%233280;const bw=6+(s%7),bh=h-4-(s%9);
    out+=`<rect x="${cx}" y="${y+h-bh}" width="${bw}" height="${bh}" fill="${cols[s%cols.length]}"/>`;cx+=bw+1}
  return out;
}
function shelf(x,y,w,h,rows,seed){
  let out=`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#3A2618"/>`;
  const rh=h/rows;
  for(let r=0;r<rows;r++){out+=books(x+6,y+r*rh+6,w-12,rh-12,seed+r*7)+`<rect x="${x}" y="${y+(r+1)*rh-6}" width="${w}" height="6" fill="#2A1A10"/>`}
  return out;
}

const SCENES={
/* ---------- NOIR ---------- */
till:{start:110,floor:510,people:{marta:[210,470],dev:[470,470],owen:[690,470]},
hot:{till:[562,238,76,54],drawer:[552,292,96,22],door:[818,138,104,244],log:[714,162,58,74],rota:[84,224,132,90]},
stand:{till:600,drawer:600,door:780,log:742,rota:150},
bg:`<defs><pattern id="tiles" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#7A5A43"/><rect width="20" height="20" fill="#6A4C38"/><rect x="20" y="20" width="20" height="20" fill="#6A4C38"/></pattern>
<linearGradient id="glow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE3A0" stop-opacity=".45"/><stop offset="1" stop-color="#FFE3A0" stop-opacity="0"/></linearGradient></defs>
<rect width="960" height="380" fill="#E3CFAC"/><rect width="960" height="34" fill="#D2B98F"/><rect y="300" width="960" height="80" fill="#C29F72"/><rect y="296" width="960" height="6" fill="#A9845A"/>
<rect y="380" width="960" height="160" fill="url(#tiles)"/>
<text x="480" y="24" text-anchor="middle" font-family="Special Elite,monospace" font-size="18" fill="#6B4A35" letter-spacing="4">HOLLIS BAKERY</text>
<rect x="60" y="64" width="170" height="138" fill="#4A3628"/><rect x="68" y="72" width="154" height="122" fill="#1B2742"/><circle cx="192" cy="102" r="14" fill="#EDE6CF"/><circle cx="96" cy="90" r="1.5" fill="#fff"/><circle cx="120" cy="150" r="1.2" fill="#fff"/><line x1="145" y1="72" x2="145" y2="194" stroke="#4A3628" stroke-width="6"/><line x1="68" y1="133" x2="222" y2="133" stroke="#4A3628" stroke-width="6"/>
<rect x="84" y="224" width="132" height="90" fill="#B98E5E" stroke="#6B4A35" stroke-width="5"/><rect x="96" y="236" width="34" height="42" fill="#F4F1E8" transform="rotate(-4 113 257)"/><rect x="138" y="234" width="34" height="46" fill="#F4F1E8"/><rect x="180" y="240" width="26" height="36" fill="#FCE79A" transform="rotate(5 193 258)"/><circle cx="113" cy="238" r="3" fill="#B03A2E"/><circle cx="155" cy="236" r="3" fill="#B03A2E"/><circle cx="193" cy="242" r="3" fill="#2F6E78"/><g stroke="#9AA3AD" stroke-width="2"><line x1="142" y1="246" x2="168" y2="246"/><line x1="142" y1="254" x2="164" y2="254"/><line x1="142" y1="262" x2="168" y2="262"/></g>
<g><rect x="280" y="108" width="210" height="8" fill="#6B4A35"/><rect x="280" y="170" width="210" height="8" fill="#6B4A35"/><rect x="280" y="232" width="210" height="8" fill="#6B4A35"/>
<g fill="#C98B4A" stroke="#93602F" stroke-width="2"><ellipse cx="310" cy="96" rx="24" ry="12"/><ellipse cx="364" cy="96" rx="24" ry="12"/><ellipse cx="418" cy="96" rx="24" ry="12"/><ellipse cx="468" cy="98" rx="18" ry="10"/><circle cx="304" cy="156" r="14"/><circle cx="338" cy="156" r="14"/><circle cx="372" cy="156" r="14"/><ellipse cx="430" cy="158" rx="34" ry="12"/><ellipse cx="318" cy="220" rx="30" ry="11"/><ellipse cx="390" cy="220" rx="30" ry="11"/><ellipse cx="458" cy="222" rx="22" ry="9"/></g></g>
<line x1="600" y1="0" x2="600" y2="70" stroke="#3A2A20" stroke-width="2"/><path d="M580 70 L620 70 L612 58 L588 58Z" fill="#2E3B2F"/><path class="flicker" d="M584 72 L616 72 L690 290 L510 290Z" fill="url(#glow)"/>
<rect x="290" y="290" width="380" height="12" fill="#3A2A20"/><rect x="296" y="302" width="368" height="118" fill="#6B4A35"/><rect x="310" y="314" width="170" height="80" fill="#BFD8E0" opacity=".5"/><g fill="#D99A5B"><circle cx="336" cy="372" r="11"/><circle cx="366" cy="374" r="11"/><circle cx="396" cy="372" r="11"/><circle cx="440" cy="374" r="13"/></g>
<rect x="566" y="242" width="68" height="50" rx="4" fill="#9AA3AD"/><rect x="574" y="248" width="52" height="16" fill="#28433A"/><text x="600" y="261" text-anchor="middle" font-family="Courier Prime,monospace" font-size="12" fill="#7CE0A8">$0.00</text><g fill="#E8ECEF"><rect x="576" y="270" width="10" height="6"/><rect x="590" y="270" width="10" height="6"/><rect x="604" y="270" width="10" height="6"/><rect x="576" y="280" width="10" height="6"/><rect x="590" y="280" width="10" height="6"/><rect x="604" y="280" width="10" height="6"/></g><rect x="618" y="270" width="10" height="16" fill="#C2512E"/>
<rect x="556" y="292" width="88" height="18" fill="#7F8892"/><rect x="590" y="298" width="20" height="4" fill="#5A626B"/><ellipse cx="630" cy="301" rx="9" ry="4" fill="#24201C" opacity=".85"/>
<rect x="720" y="170" width="44" height="60" rx="3" fill="#A07A4E"/><rect x="725" y="180" width="34" height="46" fill="#F4F1E8"/><rect x="734" y="165" width="16" height="9" rx="2" fill="#8D959E"/><g stroke="#9AA3AD" stroke-width="2"><line x1="729" y1="190" x2="755" y2="190"/><line x1="729" y1="198" x2="751" y2="198"/><line x1="729" y1="206" x2="755" y2="206"/></g><text x="742" y="157" text-anchor="middle" font-family="Courier Prime,monospace" font-size="11" fill="#6B4A35">VAN LOG</text>
<rect x="820" y="140" width="100" height="240" fill="#5B4636"/><rect x="830" y="150" width="80" height="100" fill="#4E3B2D"/><rect x="830" y="262" width="80" height="108" fill="#4E3B2D"/><circle cx="902" cy="262" r="6" fill="#D4B064"/><rect x="840" y="112" width="60" height="20" fill="#2E2A26"/><text x="870" y="127" text-anchor="middle" font-family="Courier Prime,monospace" font-size="12" fill="#E3CFAC">STAFF</text>`},

gallery:{start:110,floor:515,people:{felix:[200,480],iris:[650,480],noor:[820,480]},
hot:{painting:[434,84,192,152],camera:[850,14,90,50],keypad:[384,260,42,54],breaker:[834,244,68,88],program:[492,322,86,118],van:[18,168,96,214]},
stand:{painting:530,camera:860,keypad:405,breaker:868,program:470,van:100},
bg:`<defs><linearGradient id="spot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF4D0" stop-opacity=".6"/><stop offset="1" stop-color="#FFF4D0" stop-opacity="0"/></linearGradient></defs>
<rect width="960" height="390" fill="#E9E6DF"/><rect width="960" height="22" fill="#D5D0C5"/><rect y="378" width="960" height="12" fill="#C9C2B4"/><rect y="390" width="960" height="150" fill="#9C7E5E"/>
<g stroke="#87694B" stroke-width="2"><line x1="0" y1="430" x2="960" y2="430"/><line x1="0" y1="475" x2="960" y2="475"/><line x1="0" y1="520" x2="960" y2="520"/><line x1="120" y1="390" x2="120" y2="430"/><line x1="380" y1="390" x2="380" y2="430"/><line x1="660" y1="390" x2="660" y2="430"/><line x1="240" y1="430" x2="240" y2="475"/><line x1="520" y1="430" x2="520" y2="475"/><line x1="820" y1="430" x2="820" y2="475"/><line x1="90" y1="475" x2="90" y2="520"/><line x1="440" y1="475" x2="440" y2="520"/><line x1="760" y1="475" x2="760" y2="520"/></g>
<rect x="20" y="170" width="92" height="210" fill="#1F2733"/><rect x="26" y="262" width="86" height="88" rx="6" fill="#F2F0EA"/><rect x="74" y="272" width="30" height="24" fill="#8FB3C7"/><circle cx="44" cy="352" r="12" fill="#222"/><circle cx="96" cy="352" r="12" fill="#222"/><text x="50" y="320" font-family="Courier Prime,monospace" font-size="10" fill="#A23B2E">FELIX</text><text x="46" y="332" font-family="Courier Prime,monospace" font-size="9" fill="#555">CATERING</text><rect x="16" y="164" width="100" height="8" fill="#B9B2A4"/>
<rect x="140" y="106" width="134" height="104" fill="#B48A3C"/><rect x="150" y="116" width="114" height="84" fill="#C9D9E2"/><path d="M150 200 L180 160 L210 186 L240 150 L264 200Z" fill="#7A8F6A"/>
<rect x="300" y="190" width="80" height="190" fill="#6C7480"/><rect x="316" y="206" width="48" height="34" fill="#9EB2C2"/><circle cx="368" cy="290" r="4" fill="#D8DCE0"/><rect x="306" y="170" width="68" height="16" fill="#2B2F36"/><text x="340" y="182" text-anchor="middle" font-family="Courier Prime,monospace" font-size="10" fill="#E8ECEF">CONTROL</text>
<rect x="390" y="266" width="30" height="42" rx="3" fill="#2B2F36"/><g fill="#C9CFD6"><rect x="395" y="278" width="5" height="4"/><rect x="403" y="278" width="5" height="4"/><rect x="411" y="278" width="5" height="4"/><rect x="395" y="286" width="5" height="4"/><rect x="403" y="286" width="5" height="4"/><rect x="411" y="286" width="5" height="4"/><rect x="395" y="294" width="5" height="4"/><rect x="403" y="294" width="5" height="4"/><rect x="411" y="294" width="5" height="4"/></g><circle cx="405" cy="271" r="2.5" fill="#5DBB86"/>
<circle cx="530" cy="26" r="7" fill="#444"/><path d="M522 30 L538 30 L640 250 L420 250Z" fill="url(#spot)"/>
<rect x="440" y="90" width="180" height="140" fill="#B48A3C"/><rect x="452" y="102" width="156" height="116" fill="#9EC1D9"/><circle cx="580" cy="128" r="12" fill="#E8C15A"/><path d="M452 218 L452 180 Q500 150 540 176 Q580 160 608 182 L608 218Z" fill="#6E8F55"/><rect x="486" y="160" width="5" height="26" fill="#5B4636"/><circle cx="488" cy="156" r="12" fill="#4C6E3E"/><rect x="510" y="236" width="40" height="10" fill="#F2F0EA"/>
<path d="M500 330 L570 330 L562 440 L508 440Z" fill="#4B3A2E"/><rect x="496" y="324" width="78" height="10" fill="#3A2C22"/><rect x="510" y="314" width="34" height="12" fill="#F7F5EF" transform="rotate(-6 527 320)"/><line x1="560" y1="324" x2="566" y2="290" stroke="#222" stroke-width="3"/><ellipse cx="567" cy="287" rx="5" ry="7" fill="#333"/>
<rect x="680" y="110" width="110" height="150" fill="#3A3A3A"/><rect x="690" y="120" width="90" height="130" fill="#7A5548"/><circle cx="735" cy="168" r="18" fill="#D7B08A"/><path d="M705 250 Q735 196 765 250Z" fill="#2E3A4A"/>
<rect x="840" y="250" width="56" height="76" rx="3" fill="#A7ADB4"/><rect x="846" y="258" width="44" height="60" fill="#8B929A"/><g fill="#2B2F36"><rect x="851" y="264" width="8" height="12"/><rect x="863" y="264" width="8" height="12"/><rect x="875" y="264" width="8" height="12"/><rect x="851" y="282" width="8" height="12"/><rect x="863" y="282" width="8" height="12"/><rect x="875" y="282" width="8" height="12"/></g>
<rect x="896" y="22" width="8" height="18" fill="#555"/><path d="M862 34 L906 30 L908 50 L866 54Z" fill="#2E3238"/><circle cx="868" cy="44" r="5" fill="#111"/><circle cx="900" cy="36" r="2.5" fill="#E26A5B"/>`},

lighthouse:{start:170,floor:505,people:{cass:[90,470],bram:[330,472],edda:[440,476]},
hot:{tide:[616,316,78,56],stairs:[798,350,68,40],prints:[470,466,200,46],rack:[704,318,82,56],pub:[26,196,150,186],shed:[180,288,98,94]},
stand:{tide:655,stairs:820,prints:560,rack:745,pub:150,shed:245},
bg:`<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1630"/><stop offset="1" stop-color="#2B3D5C"/></linearGradient></defs>
<rect width="960" height="540" fill="url(#sky)"/>
<g fill="#E9EEF7"><circle cx="60" cy="40" r="1.4"/><circle cx="240" cy="60" r="1.2"/><circle cx="330" cy="28" r="1.6"/><circle cx="420" cy="90" r="1.1"/><circle cx="520" cy="40" r="1.4"/><circle cx="610" cy="110" r="1"/><circle cx="690" cy="34" r="1.5"/><circle cx="930" cy="70" r="1.2"/><circle cx="160" cy="130" r="1"/></g>
<circle cx="140" cy="76" r="26" fill="#EEE8D2"/><circle cx="130" cy="70" r="5" fill="#D8D1B8"/>
<rect y="296" width="960" height="54" fill="#173A47"/><g stroke="#2E6170" stroke-width="2"><line x1="380" y1="312" x2="440" y2="312"/><line x1="560" y1="326" x2="620" y2="326"/><line x1="460" y1="338" x2="500" y2="338"/></g>
<path d="M0 340 H960 V540 H0Z" fill="#5A5648"/><g fill="#67634F"><ellipse cx="460" cy="390" rx="70" ry="6"/><ellipse cx="620" cy="420" rx="50" ry="5"/><ellipse cx="520" cy="530" rx="90" ry="6"/></g>
<path d="M0 352 Q180 348 380 376 L392 540 L0 540Z" fill="#33392A"/>
<path d="M360 468 L726 462 L730 512 L360 516Z" fill="#8C8470"/><g fill="#76705E"><circle cx="372" cy="470" r="4"/><circle cx="420" cy="514" r="4"/><circle cx="520" cy="466" r="4"/><circle cx="610" cy="512" r="4"/><circle cx="690" cy="465" r="4"/></g>
<g fill="#4A453A"><ellipse cx="480" cy="482" rx="6" ry="3.2"/><ellipse cx="502" cy="494" rx="6" ry="3.2"/><ellipse cx="526" cy="480" rx="6" ry="3.2"/><ellipse cx="550" cy="492" rx="6" ry="3.2"/><ellipse cx="574" cy="478" rx="6" ry="3.2"/><ellipse cx="598" cy="490" rx="6" ry="3.2"/><ellipse cx="622" cy="477" rx="6" ry="3.2"/><ellipse cx="646" cy="489" rx="6" ry="3.2"/></g>
<rect x="30" y="232" width="140" height="150" fill="#6A4B3A"/><path d="M20 236 L100 186 L180 236Z" fill="#3B2A22"/><rect x="48" y="258" width="34" height="30" fill="#F2C46B" class="flicker"/><rect x="118" y="258" width="34" height="30" fill="#F2C46B" class="flicker"/><rect x="84" y="314" width="32" height="68" fill="#3B2A22"/><line x1="170" y1="250" x2="198" y2="250" stroke="#222" stroke-width="3"/><rect x="176" y="254" width="40" height="26" fill="#2E2A26" stroke="#B9821F" stroke-width="1.5"/><text x="196" y="271" text-anchor="middle" font-family="Courier Prime,monospace" font-size="8" fill="#E8B54E">ANCHOR</text>
<rect x="186" y="304" width="86" height="78" fill="#545A4C"/><path d="M180 306 L278 292 L278 306Z" fill="#30352B"/><rect x="214" y="330" width="28" height="52" fill="#3A3F34"/><line x1="258" y1="320" x2="262" y2="376" stroke="#8A7A5C" stroke-width="3"/>
<path d="M690 540 Q694 380 760 352 L960 330 L960 540Z" fill="#3B3733"/>
<rect x="652" y="330" width="6" height="140" fill="#5B4636"/><rect x="620" y="320" width="70" height="46" fill="#E8E1CC" stroke="#5B4636" stroke-width="2"/><path d="M628 352 Q638 344 648 352 Q658 360 668 352 Q676 346 682 352" stroke="#2F6E78" stroke-width="2.5" fill="none"/><text x="655" y="336" text-anchor="middle" font-family="Courier Prime,monospace" font-size="9" fill="#333">TIDES</text>
<rect x="704" y="296" width="84" height="66" fill="#CFC6B4"/><path d="M698 300 L746 268 L794 300Z" fill="#4A3A30"/><rect x="722" y="318" width="20" height="16" fill="#F2C46B" class="flicker"/><rect x="708" y="346" width="76" height="5" fill="#5B4636"/><g fill="#3B2E24"><path d="M712 351 l10 0 l0 14 l6 3 l-16 0Z"/><path d="M730 351 l10 0 l0 14 l6 3 l-16 0Z"/><path d="M766 351 l10 0 l0 14 l6 3 l-16 0Z"/></g><circle cx="755" cy="355" r="2" fill="#B9821F"/>
<path d="M800 362 L812 112 L848 112 L860 362Z" fill="#F0EEE8"/><path d="M806 240 L854 240 L856 280 L804 280Z" fill="#B03A2E"/><path d="M810 150 L850 150 L851 180 L809 180Z" fill="#B03A2E"/><rect x="804" y="84" width="52" height="28" fill="#262A31"/><circle cx="830" cy="98" r="10" fill="#FFE9A0"/><path d="M800 84 L830 62 L860 84Z" fill="#B03A2E"/><rect x="798" y="110" width="64" height="5" fill="#262A31"/>
<polygon class="beam" points="830,97 1060,40 1060,150" fill="#FFF2B8" opacity=".16"/>
<g fill="#8D9096"><rect x="806" y="362" width="48" height="8"/><rect x="802" y="370" width="56" height="8"/><rect x="798" y="378" width="64" height="8"/></g><g fill="#CFC5A8"><ellipse cx="820" cy="374" rx="6" ry="2"/><ellipse cx="840" cy="382" rx="7" ry="2"/></g>`},

/* ---------- MANOR ---------- */
tea:{start:110,floor:512,people:{pell:[200,476],thomas:[520,476],hale:[720,476]},
hot:{teacup:[350,286,120,50],tray:[586,268,112,36],window:[60,58,200,234],basket:[784,318,74,74],bells:[728,96,124,98]},
stand:{teacup:410,tray:642,window:160,basket:800,bells:790},
bg:`<defs><pattern id="m1wall" width="36" height="20" patternUnits="userSpaceOnUse"><rect width="36" height="20" fill="#3E5B4A"/><rect width="16" height="20" fill="#47664F"/><circle cx="26" cy="10" r="2" fill="#5E7E62"/></pattern></defs>
<rect width="960" height="390" fill="url(#m1wall)"/><rect width="960" height="26" fill="#E7DCC4"/><rect y="26" width="960" height="5" fill="#C9B994"/>
<rect y="300" width="960" height="90" fill="#6B4630"/><rect y="296" width="960" height="8" fill="#4E3222"/>
<g fill="none" stroke="#835A3E" stroke-width="3"><rect x="20" y="314" width="100" height="60"/><rect x="140" y="314" width="100" height="60"/><rect x="260" y="314" width="100" height="60"/><rect x="380" y="314" width="100" height="60"/><rect x="500" y="314" width="100" height="60"/><rect x="620" y="314" width="100" height="60"/><rect x="740" y="314" width="100" height="60"/><rect x="860" y="314" width="100" height="60"/></g>
<rect y="390" width="960" height="150" fill="#7A2E2A"/><rect x="40" y="410" width="880" height="118" fill="none" stroke="#C9A24A" stroke-width="4"/><rect x="58" y="424" width="844" height="90" fill="none" stroke="#9E4A3A" stroke-width="2"/>
<rect x="60" y="60" width="200" height="230" fill="#E7DCC4"/><rect x="72" y="72" width="176" height="206" fill="#CFE3EA"/><rect x="72" y="200" width="176" height="78" fill="#7FA35A"/><path d="M72 200 Q120 186 160 196 Q210 184 248 198 L248 210 L72 210Z" fill="#6E9450"/>
<g stroke="#4E7A3A" stroke-width="3"><line x1="96" y1="232" x2="96" y2="170"/><line x1="122" y1="236" x2="122" y2="160"/><line x1="150" y1="236" x2="150" y2="176"/><line x1="176" y1="238" x2="176" y2="226"/><line x1="200" y1="236" x2="200" y2="224"/><line x1="226" y1="234" x2="226" y2="168"/></g>
<g fill="#9B59A8"><ellipse cx="96" cy="176" rx="6" ry="8"/><ellipse cx="96" cy="192" rx="7" ry="8"/><ellipse cx="96" cy="208" rx="7" ry="8"/><ellipse cx="122" cy="166" rx="6" ry="8"/><ellipse cx="122" cy="182" rx="7" ry="8"/><ellipse cx="122" cy="198" rx="7" ry="8"/><ellipse cx="122" cy="214" rx="7" ry="8"/><ellipse cx="150" cy="182" rx="6" ry="8"/><ellipse cx="150" cy="198" rx="7" ry="8"/><ellipse cx="226" cy="174" rx="6" ry="8"/><ellipse cx="226" cy="190" rx="7" ry="8"/><ellipse cx="226" cy="206" rx="7" ry="8"/></g>
<line x1="160" y1="72" x2="160" y2="278" stroke="#E7DCC4" stroke-width="6"/><line x1="72" y1="150" x2="248" y2="150" stroke="#E7DCC4" stroke-width="6"/>
<path d="M44 40 Q70 160 54 300 L40 300 L40 40Z" fill="#8E2C2C"/><path d="M276 40 Q250 160 266 300 L280 300 L280 40Z" fill="#8E2C2C"/><rect x="34" y="36" width="252" height="8" fill="#C9A24A"/>
<rect x="590" y="90" width="110" height="140" fill="#B48A3C"/><rect x="600" y="100" width="90" height="120" fill="#3D2E2A"/><circle cx="645" cy="146" r="18" fill="#E8C7A6"/><path d="M627 132 Q645 112 663 132 Q660 124 645 122 Q630 124 627 132Z" fill="#6A6A6A"/><path d="M615 220 Q645 166 675 220Z" fill="#5E3D78"/>
<rect x="732" y="100" width="116" height="90" fill="#4E3222"/><g fill="#D4B064"><circle cx="752" cy="128" r="7"/><circle cx="774" cy="128" r="7"/><circle cx="796" cy="128" r="7"/><circle cx="818" cy="128" r="7"/><circle cx="840" cy="128" r="7" transform="translate(-4 0)"/></g><g font-family="Courier Prime,monospace" font-size="7" fill="#E7DCC4" text-anchor="middle"><text x="752" y="150">DRAW</text><text x="774" y="150">STUDY</text><text x="796" y="150">DINE</text><text x="818" y="150">LIB</text><text x="836" y="150">HALL</text></g><text x="790" y="178" text-anchor="middle" font-family="Courier Prime,monospace" font-size="8" fill="#C9B994">BELLS</text>
<ellipse cx="410" cy="334" rx="84" ry="14" fill="#5A3A26"/><rect x="402" y="336" width="16" height="80" fill="#4A2E1E"/><path d="M380 420 L440 420 L430 412 L390 412Z" fill="#4A2E1E"/>
<path d="M364 330 Q362 302 380 298 L396 298 Q412 302 410 330Z" fill="#F4F1E8" stroke="#2E4A7A" stroke-width="2"/><path d="M410 312 Q424 308 426 300" stroke="#F4F1E8" stroke-width="4" fill="none"/><path d="M362 312 Q352 314 352 324" stroke="#F4F1E8" stroke-width="4" fill="none"/><circle cx="388" cy="296" r="4" fill="#2E4A7A"/>
<ellipse cx="446" cy="330" rx="18" ry="4" fill="#F4F1E8" stroke="#2E4A7A" stroke-width="1.5"/><path d="M434 316 L458 316 L455 328 L437 328Z" fill="#F4F1E8" stroke="#2E4A7A" stroke-width="1.5"/><ellipse cx="446" cy="317" rx="11" ry="2.5" fill="#6B4A2E"/><circle cx="449" cy="317" r="2" fill="#9B59A8"/>
<rect x="560" y="300" width="180" height="88" fill="#5A3A26"/><rect x="570" y="312" width="74" height="66" fill="#4A2E1E"/><rect x="656" y="312" width="74" height="66" fill="#4A2E1E"/><ellipse cx="642" cy="296" rx="52" ry="8" fill="#B8BCC2"/><path d="M604 294 Q606 280 618 280 Q630 280 632 294Z" fill="#F4F1E8" stroke="#8A8F96"/><rect x="652" y="284" width="22" height="12" fill="#F4F1E8" transform="rotate(-8 663 290)"/>
<rect x="860" y="140" width="80" height="250" fill="#4E3222"/><rect x="870" y="152" width="60" height="100" fill="#5A3A26"/><rect x="870" y="266" width="60" height="110" fill="#5A3A26"/><circle cx="868" cy="270" r="5" fill="#D4B064"/>
<path d="M790 340 L852 340 L846 390 L796 390Z" fill="#B08A4E"/><g stroke="#8A6A3A" stroke-width="2"><line x1="792" y1="352" x2="850" y2="352"/><line x1="794" y1="366" x2="848" y2="366"/><line x1="795" y1="380" x2="847" y2="380"/></g><path d="M800 338 Q808 320 818 330 L822 340Z" fill="#7A6A44"/><path d="M820 338 Q830 318 840 328 L842 340Z" fill="#7A6A44"/><circle cx="834" cy="328" r="3" fill="#9B59A8"/><circle cx="812" cy="330" r="2.5" fill="#9B59A8"/>`},

will:{start:200,floor:515,people:{rupert:[100,486],agnes:[330,486],greaves:[650,486]},
hot:{drawer:[436,338,104,36],diary:[390,284,74,28],watch:[556,286,52,26],fireplace:[716,316,128,72],case:[172,350,108,72]},
stand:{drawer:490,diary:430,watch:582,fireplace:780,case:226},
bg:`<rect width="960" height="390" fill="#4A3324"/><g stroke="#3A2618" stroke-width="3"><line x1="290" y1="30" x2="290" y2="390"/><line x1="380" y1="30" x2="380" y2="390"/><line x1="660" y1="30" x2="660" y2="390"/><line x1="890" y1="30" x2="890" y2="390"/></g><rect width="960" height="30" fill="#3A2618"/><rect y="380" width="960" height="10" fill="#2A1A10"/>
<rect y="390" width="960" height="150" fill="#5A3A26"/><g stroke="#4A2E1E" stroke-width="2"><line x1="0" y1="430" x2="960" y2="430"/><line x1="0" y1="475" x2="960" y2="475"/><line x1="0" y1="520" x2="960" y2="520"/></g><ellipse cx="500" cy="470" rx="320" ry="44" fill="#3D4A6A"/><ellipse cx="500" cy="470" rx="290" ry="36" fill="none" stroke="#C9A24A" stroke-width="3"/>
${shelf(30,50,240,250,4,3)}
<path d="M430 220 L430 110 Q490 50 550 110 L550 220Z" fill="#2A2018"/><path d="M440 212 L440 114 Q490 64 540 114 L540 212Z" fill="#14203A"/><g stroke="#6A88B0" stroke-width="1.2" opacity=".7"><line x1="458" y1="120" x2="452" y2="136"/><line x1="490" y1="104" x2="484" y2="120"/><line x1="520" y1="130" x2="514" y2="146"/><line x1="470" y1="160" x2="464" y2="176"/><line x1="510" y1="178" x2="504" y2="194"/></g><line x1="490" y1="70" x2="490" y2="212" stroke="#2A2018" stroke-width="5"/>
<rect x="370" y="306" width="260" height="14" fill="#2E1E14"/><rect x="380" y="320" width="240" height="94" fill="#5A3A26"/><rect x="440" y="342" width="96" height="28" fill="#4A2E1E" stroke="#3A2416" stroke-width="2"/><circle cx="488" cy="356" r="4" fill="#C9A24A"/><rect x="392" y="380" width="44" height="30" fill="#4A2E1E"/><rect x="580" y="380" width="30" height="30" fill="#4A2E1E"/>
<rect x="396" y="290" width="62" height="16" fill="#8E2C2C" transform="rotate(-3 427 298)"/><rect x="398" y="292" width="58" height="3" fill="#E8DFC8" transform="rotate(-3 427 298)"/>
<path d="M562 302 Q580 290 600 300" stroke="#E5C25A" stroke-width="2.5" fill="none"/><circle cx="566" cy="302" r="7" fill="#E5C25A"/><circle cx="566" cy="302" r="5" fill="#F7F0D8"/><path d="M598 300 L606 300 L606 304 L602 304 L602 308 L598 308Z" fill="#C9A24A"/>
<rect x="610" y="270" width="6" height="36" fill="#C9A24A"/><path d="M596 270 Q613 252 630 270Z" fill="#2E6A4A"/>
<rect x="700" y="210" width="160" height="12" fill="#8E8576"/><rect x="708" y="222" width="144" height="168" fill="#A39A8A"/><path d="M730 390 L730 300 Q780 260 830 300 L830 390Z" fill="#1A1410"/><g fill="#E8823A" class="flicker"><path d="M760 390 Q766 360 776 380 Q784 350 794 382 Q800 366 806 390Z"/></g><g fill="#9DB4D0"><rect x="744" y="374" width="12" height="7" transform="rotate(12 750 377)"/><rect x="808" y="378" width="10" height="6" transform="rotate(-18 813 381)"/><rect x="784" y="380" width="8" height="5"/></g><g fill="#6E6A66"><ellipse cx="780" cy="388" rx="44" ry="4"/></g>
<rect x="756" y="176" width="48" height="34" rx="4" fill="#5A3A26"/><circle cx="780" cy="192" r="11" fill="#F4F1E8"/><line x1="780" y1="192" x2="780" y2="185" stroke="#222" stroke-width="2"/><line x1="780" y1="192" x2="785" y2="194" stroke="#222" stroke-width="2"/>
<path d="M160 420 L180 360 L280 360 L290 420Z" fill="#6A2424"/><rect x="170" y="330" width="110" height="34" rx="6" fill="#7A2E2A"/><rect x="186" y="372" width="84" height="44" rx="3" fill="#7A5434"/><rect x="216" y="362" width="24" height="12" rx="4" fill="none" stroke="#5A3A20" stroke-width="3"/><circle cx="200" cy="394" r="2.5" fill="#C9A24A"/><circle cx="256" cy="394" r="2.5" fill="#C9A24A"/>`},

brooch:{start:220,floor:516,people:{colonel:[110,490],hobbs:[460,490],vera:[650,490]},
hot:{clock:[266,170,78,58],bellpull:[380,28,32,234],scorecard:[586,250,64,34],bench:[506,364,116,56],bookcase:[698,78,146,314],ashtray:[844,298,74,94]},
stand:{clock:305,bellpull:396,scorecard:612,bench:565,bookcase:770,ashtray:870},
bg:`<defs><pattern id="m3wall" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#363150"/><path d="M20 8 Q24 16 20 22 Q16 16 20 8Z" fill="#4A4470"/></pattern></defs>
<rect width="960" height="390" fill="url(#m3wall)"/><rect width="960" height="24" fill="#D9D2C2"/><rect y="310" width="960" height="80" fill="#5A3A26"/><rect y="306" width="960" height="6" fill="#3E2618"/>
<rect y="390" width="960" height="150" fill="#8A6040"/><g stroke="#76502F" stroke-width="2"><path d="M0 420 L60 390 M60 450 L180 390 M120 480 L300 390 M200 510 L420 390 M300 540 L540 390 M420 540 L660 390 M540 540 L780 390 M660 540 L900 390 M780 540 L960 420 M900 540 L960 510"/></g>
<rect x="40" y="60" width="160" height="222" fill="#E7DCC4"/><rect x="52" y="72" width="136" height="198" fill="#1A2034"/><polygon class="lightning" points="120,78 100,150 118,150 96,230 140,136 122,136 140,78" fill="#F4F0D0"/><g stroke="#5A6A8A" stroke-width="1.2"><line x1="64" y1="96" x2="58" y2="112"/><line x1="160" y1="120" x2="154" y2="136"/><line x1="70" y1="190" x2="64" y2="206"/><line x1="170" y1="210" x2="164" y2="226"/></g><line x1="120" y1="72" x2="120" y2="270" stroke="#E7DCC4" stroke-width="5" opacity=".9"/><path d="M28 44 Q50 160 36 300 L24 300 L24 44Z" fill="#5E2A4A"/><path d="M212 44 Q190 160 204 300 L216 300 L216 44Z" fill="#5E2A4A"/>
<rect x="222" y="226" width="156" height="10" fill="#E8E2D4"/><rect x="232" y="236" width="136" height="154" fill="#D9D2C2"/><path d="M256 390 L256 300 Q300 270 344 300 L344 390Z" fill="#14100E"/><g fill="#5A5048"><ellipse cx="300" cy="386" rx="34" ry="4"/></g>
<rect x="276" y="186" width="58" height="40" rx="6" fill="#5A3A26"/><circle cx="305" cy="204" r="14" fill="#F4F1E8"/><line x1="305" y1="204" x2="302" y2="196" stroke="#222" stroke-width="2.4"/><line x1="305" y1="204" x2="295" y2="210" stroke="#222" stroke-width="1.6"/>
<line x1="396" y1="24" x2="396" y2="248" stroke="#8E2C2C" stroke-width="5"/><path d="M392 248 L400 248 L398 256 L394 256Z" fill="#8E2C2C"/><path d="M400 386 Q408 372 414 386Z" fill="#C9A24A"/><line x1="407" y1="386" x2="407" y2="376" stroke="#C9A24A" stroke-width="2"/>
<path d="M430 300 Q430 270 470 270 L640 270 Q690 270 690 310 L690 340 L430 340Z" fill="#141418"/><path d="M440 270 L600 210 L606 216 L470 270Z" fill="#1E1E24"/><rect x="430" y="334" width="260" height="10" fill="#0E0E12"/><rect x="440" y="344" width="10" height="64" fill="#141418"/><rect x="670" y="344" width="10" height="64" fill="#141418"/><rect x="560" y="344" width="10" height="56" fill="#141418"/><rect x="452" y="326" width="120" height="8" fill="#F4F1E8"/><g fill="#141418"><rect x="458" y="326" width="4" height="5"/><rect x="470" y="326" width="4" height="5"/><rect x="488" y="326" width="4" height="5"/><rect x="500" y="326" width="4" height="5"/><rect x="512" y="326" width="4" height="5"/><rect x="530" y="326" width="4" height="5"/><rect x="542" y="326" width="4" height="5"/><rect x="560" y="326" width="4" height="5"/></g>
<rect x="592" y="258" width="48" height="16" fill="#F4F1E8" transform="rotate(-6 616 266)"/><g stroke="#2E4A7A" stroke-width="1"><line x1="598" y1="264" x2="632" y2="260"/><line x1="598" y1="269" x2="626" y2="266"/></g>
<rect x="516" y="384" width="96" height="14" rx="3" fill="#141418"/><rect x="522" y="398" width="8" height="20" fill="#141418"/><rect x="598" y="398" width="8" height="20" fill="#141418"/><path d="M548 384 Q560 372 576 378 Q586 382 580 386Z" fill="#B79AD6"/>
${shelf(700,80,130,310,5,11)}<rect x="830" y="80" width="12" height="310" fill="#0B080C"/><rect x="826" y="80" width="4" height="310" fill="#2A1A10"/>
<line x1="880" y1="320" x2="880" y2="390" stroke="#3A3A40" stroke-width="5"/><path d="M856 382 L904 382 L896 390 L864 390Z" fill="#3A3A40"/><ellipse cx="880" cy="320" rx="26" ry="7" fill="#5A5A62"/><ellipse cx="880" cy="318" rx="18" ry="4" fill="#9A9AA0"/><rect x="872" y="312" width="18" height="5" rx="2" fill="#6A4A2E" transform="rotate(-10 881 314)"/>`},

/* ---------- FANTASY ---------- */
seal:{start:220,floor:514,people:{mira:[120,484],aldo:[380,484],garran:[880,484]},
hot:{tapestry:[46,56,148,218],window:[240,52,140,216],sealbox:[446,284,74,50],wax:[554,288,74,46],ledger:[688,276,74,116]},
stand:{tapestry:180,window:310,sealbox:482,wax:590,ledger:725},
bg:`<defs><pattern id="f1stone" width="64" height="32" patternUnits="userSpaceOnUse"><rect width="64" height="32" fill="#706B66"/><path d="M0 0 H64 M0 16 H64 M0 0 V16 M32 16 V32" stroke="#5E5954" stroke-width="2"/></pattern></defs>
<rect width="960" height="392" fill="url(#f1stone)"/><rect y="392" width="960" height="148" fill="#4E4A46"/><g stroke="#3E3A36" stroke-width="2"><line x1="0" y1="440" x2="960" y2="440"/><line x1="0" y1="492" x2="960" y2="492"/><line x1="140" y1="392" x2="120" y2="440"/><line x1="400" y1="392" x2="390" y2="440"/><line x1="680" y1="392" x2="690" y2="440"/><line x1="260" y1="440" x2="240" y2="492"/><line x1="560" y1="440" x2="560" y2="492"/><line x1="820" y1="440" x2="840" y2="492"/></g>
<rect x="50" y="60" width="140" height="210" fill="#7A2430"/><rect x="58" y="68" width="124" height="194" fill="none" stroke="#C9A24A" stroke-width="3"/><path d="M70 120 Q100 150 90 190 Q110 230 160 240" stroke="#5A8AB8" stroke-width="4" fill="none"/><path d="M130 110 L140 96 L150 110 L150 130 L130 130Z" fill="#E5D9B6"/><circle cx="86" cy="220" r="5" fill="#E5D9B6"/><circle cx="160" cy="170" r="5" fill="#E5D9B6"/><rect x="44" y="54" width="152" height="8" fill="#5A4026"/>
<path d="M250 260 L250 120 Q310 46 370 120 L370 260Z" fill="#3E3A36"/><path d="M262 252 L262 124 Q310 64 358 124 L358 252Z" fill="#9FC3E0"/><path d="M262 220 Q300 206 358 214 L358 252 L262 252Z" fill="#7A9A62"/><line x1="310" y1="70" x2="310" y2="252" stroke="#3E3A36" stroke-width="5"/>
<g fill="#3E6E3A"><circle cx="252" cy="140" r="9"/><circle cx="246" cy="164" r="8"/><circle cx="254" cy="190" r="9"/><circle cx="370" cy="130" r="8"/><circle cx="374" cy="156" r="9"/><circle cx="266" cy="110" r="8"/></g><path d="M368 176 Q380 200 372 236" stroke="#3E6E3A" stroke-width="3" fill="none"/><g fill="#3E6E3A"><circle cx="372" cy="210" r="5"/><circle cx="374" cy="234" r="5"/></g>
<rect x="410" y="40" width="52" height="150" fill="#2E4A7A"/><path d="M410 190 L436 172 L462 190Z" fill="#706B66"/><path d="M424 90 L428 100 L436 88 L444 100 L448 90 L448 110 L424 110Z" fill="#E5C25A"/><rect x="404" y="36" width="64" height="6" fill="#5A4026"/>
<rect x="420" y="326" width="236" height="12" fill="#3A2618"/><rect x="430" y="338" width="216" height="76" fill="#5A3A26"/><rect x="440" y="414" width="16" height="10" fill="#3A2618"/><rect x="620" y="414" width="16" height="10" fill="#3A2618"/>
<rect x="456" y="300" width="56" height="26" rx="3" fill="#8A5A2E"/><path d="M456 300 L462 284 L518 284 L512 300Z" fill="#A06A36"/><rect x="462" y="304" width="44" height="14" fill="#7A1E2A"/><rect x="480" y="298" width="8" height="6" fill="#E5C25A"/>
<rect x="590" y="300" width="10" height="26" fill="#4E9A5C"/><path d="M595 300 Q598 292 595 288 Q592 292 595 300Z" fill="#F2C45A" class="flicker"/><g fill="#4E9A5C"><ellipse cx="578" cy="326" rx="7" ry="2.5"/><ellipse cx="612" cy="326" rx="5" ry="2"/><path d="M600 326 Q602 336 600 340" stroke="#4E9A5C" stroke-width="3"/></g>
<rect x="526" y="312" width="40" height="14" fill="#E8DFC8" transform="rotate(4 546 319)"/><ellipse cx="540" cy="327" rx="10" ry="2.5" fill="#1A1A2A"/>
<path d="M780 392 L780 200 Q840 130 900 200 L900 392Z" fill="#4A3020"/><g stroke="#2A2A2E" stroke-width="5"><line x1="780" y1="250" x2="900" y2="250"/><line x1="780" y1="330" x2="900" y2="330"/></g><circle cx="880" cy="300" r="6" fill="#2A2A2E"/>
<path d="M704 392 L716 316 L734 316 L746 392Z" fill="#5A3A26"/><path d="M696 316 L754 300 L758 312 L700 328Z" fill="#E8DFC8"/><path d="M696 316 L726 308 L728 320 L700 328Z" fill="#D8CDB2"/><g stroke="#8A7A5C" stroke-width="1"><line x1="732" y1="308" x2="752" y2="303"/><line x1="733" y1="312" x2="753" y2="307"/></g>`},

lute:{start:120,floor:514,people:{corvin:[250,484],lisel:[570,484],tamsin:[780,484]},
hot:{hook:[100,118,90,66],lore:[264,114,102,152],window:[394,64,132,142],lutecase:[366,334,168,72],slip:[628,272,74,34]},
stand:{hook:150,lore:315,window:460,lutecase:450,slip:665},
bg:`<rect width="960" height="392" fill="#D8C7A4"/><g fill="#4A3324"><rect width="960" height="28"/><rect y="296" width="960" height="14"/><rect x="0" y="0" width="18" height="392"/><rect x="236" y="0" width="18" height="300"/><rect x="540" y="0" width="18" height="300"/><rect x="942" y="0" width="18" height="392"/></g><path d="M18 28 L120 296" stroke="#4A3324" stroke-width="10" opacity=".5"/>
<rect y="392" width="960" height="148" fill="#6B4A30"/><g stroke="#5A3C24" stroke-width="2"><line x1="0" y1="430" x2="960" y2="430"/><line x1="0" y1="470" x2="960" y2="470"/><line x1="0" y1="510" x2="960" y2="510"/></g>
<rect x="56" y="182" width="190" height="14" fill="#4A3324"/><path d="M66 392 L66 196 L236 196 L236 392Z" fill="#7C736A"/><path d="M96 392 L96 280 Q151 230 206 280 L206 392Z" fill="#1E1410"/><g class="flicker"><path d="M118 392 Q126 340 142 372 Q150 320 164 370 Q172 344 184 392Z" fill="#E8823A"/><path d="M134 392 Q140 362 150 380 Q158 356 168 392Z" fill="#F2C45A"/></g><g stroke="#5E564E" stroke-width="2" fill="none"><path d="M66 230 H236 M66 270 H96 M206 270 H236 M66 320 H96 M206 320 H236"/></g>
<path d="M142 146 L142 166 Q142 174 150 174 Q158 174 158 166" stroke="#2A2A2E" stroke-width="4" fill="none"/><rect x="132" y="138" width="20" height="10" fill="#2A2A2E"/><path d="M118 176 Q150 160 182 176" stroke="rgba(0,0,0,.18)" stroke-width="10" fill="none"/>
${shelf(268,118,94,144,3,21)}<rect x="300" y="128" width="10" height="38" fill="#3A6AB8"/><rect x="300" y="128" width="10" height="38" fill="#9FC3FF" opacity=".35" class="flicker"/>
<rect x="398" y="68" width="124" height="134" fill="#4A3324"/><rect x="406" y="76" width="108" height="118" fill="#1E2A44"/><g stroke="#4A3324" stroke-width="3"><path d="M406 76 L514 194 M460 76 L514 135 M406 135 L460 194 M514 76 L406 194 M460 76 L406 135 M514 135 L460 194"/></g><circle cx="490" cy="100" r="8" fill="#EDE6CF"/><rect x="452" y="128" width="16" height="8" fill="#8A8F96"/>
<rect x="370" y="390" width="160" height="12" fill="#5A3A26"/><rect x="380" y="402" width="12" height="20" fill="#4A2E1E"/><rect x="508" y="402" width="12" height="20" fill="#4A2E1E"/><path d="M384 390 Q384 360 410 356 L470 352 Q500 340 520 360 Q528 376 516 390Z" fill="#7A4E2E"/><path d="M394 386 Q396 368 414 364 L470 362 Q494 352 508 366 Q514 378 506 386Z" fill="#8E2C2C"/><g fill="#9AA0A8"><circle cx="430" cy="376" r="1.6"/><circle cx="446" cy="380" r="1.4"/><circle cx="470" cy="374" r="1.6"/><circle cx="488" cy="378" r="1.4"/><circle cx="458" cy="370" r="1.2"/></g>
<g>${shelf(590,120,300,140,2,33)}</g>
<rect x="560" y="304" width="350" height="14" fill="#3A2618"/><rect x="570" y="318" width="330" height="96" fill="#5A3A26"/><g stroke="#4A2E1E" stroke-width="3"><line x1="650" y1="318" x2="650" y2="414"/><line x1="740" y1="318" x2="740" y2="414"/><line x1="830" y1="318" x2="830" y2="414"/></g>
<rect x="634" y="290" width="46" height="14" fill="#E8DFC8" transform="rotate(-5 657 297)"/><g stroke="#6B5B3F" stroke-width="1"><line x1="639" y1="296" x2="672" y2="293"/><line x1="639" y1="300" x2="664" y2="298"/></g>
<path d="M760 304 L760 282 Q770 278 780 282 L780 304Z" fill="#8A6A3A"/><path d="M800 304 L800 284 Q810 280 820 284 L820 304Z" fill="#8A6A3A"/>
<ellipse cx="930" cy="420" rx="26" ry="40" fill="#7A5434"/><g stroke="#4A3324" stroke-width="3"><line x1="906" y1="400" x2="954" y2="400"/><line x1="906" y1="440" x2="954" y2="440"/></g>`},

sunstone:{start:200,floor:514,people:{brannoc:[96,484],malric:[380,484],odette:[690,484]},
hot:{telescope:[148,188,124,152],pedestal:[436,268,108,144],hourglass:[586,144,90,106],chart:[700,66,184,140],satchel:[746,316,108,88]},
stand:{telescope:212,pedestal:490,hourglass:630,chart:780,satchel:800},
bg:`<defs><pattern id="f3stone" width="70" height="34" patternUnits="userSpaceOnUse"><rect width="70" height="34" fill="#3A3F55"/><path d="M0 0 H70 M0 17 H70 M0 0 V17 M35 17 V34" stroke="#2E3246" stroke-width="2"/></pattern><radialGradient id="amber"><stop offset="0" stop-color="#FFC66A" stop-opacity=".7"/><stop offset="1" stop-color="#FFC66A" stop-opacity="0"/></radialGradient></defs>
<rect width="960" height="392" fill="url(#f3stone)"/><rect y="392" width="960" height="148" fill="#2C2F40"/><ellipse cx="490" cy="456" rx="300" ry="50" fill="none" stroke="#6C7BB8" stroke-width="3" opacity=".7"/><ellipse cx="490" cy="456" rx="260" ry="40" fill="none" stroke="#6C7BB8" stroke-width="1.5" opacity=".5"/><g fill="#6C7BB8" opacity=".7"><circle cx="190" cy="456" r="5"/><circle cx="790" cy="456" r="5"/><circle cx="490" cy="406" r="5"/><circle cx="490" cy="506" r="5"/></g>
<circle cx="130" cy="146" r="74" fill="#565C78"/><circle cx="130" cy="146" r="62" fill="#0C1230"/><g fill="#E9EEF7"><circle cx="96" cy="120" r="1.4"/><circle cx="160" cy="180" r="1.2"/><circle cx="104" cy="186" r="1"/><circle cx="170" cy="112" r="1.2"/></g><circle cx="140" cy="132" r="20" fill="#FFE9A0" opacity=".35"/><circle cx="140" cy="132" r="16" fill="#0C1230" stroke="#FFE9A0" stroke-width="2"/><line x1="68" y1="146" x2="192" y2="146" stroke="#565C78" stroke-width="4"/><line x1="130" y1="84" x2="130" y2="208" stroke="#565C78" stroke-width="4"/>
<g><line x1="214" y1="270" x2="190" y2="338" stroke="#6A4A2E" stroke-width="4"/><line x1="214" y1="270" x2="238" y2="338" stroke="#6A4A2E" stroke-width="4"/><line x1="214" y1="270" x2="214" y2="340" stroke="#6A4A2E" stroke-width="4"/><path d="M168 232 L256 270 L250 284 L162 246Z" fill="#C9A24A"/><rect x="156" y="230" width="16" height="22" rx="3" fill="#A88536" transform="rotate(23 164 241)"/></g>
${shelf(280,92,120,210,4,47)}
<rect x="470" y="330" width="40" height="80" fill="#6E6A80"/><rect x="456" y="404" width="68" height="10" fill="#5A566C"/><rect x="452" y="318" width="76" height="14" rx="4" fill="#7E7A92"/><circle cx="490" cy="316" r="46" fill="url(#amber)"/><g fill="#F2A33A"><path d="M476 318 L482 304 L488 318Z"/><path d="M492 318 L500 300 L506 318Z"/><path d="M464 330 L468 322 L474 330Z"/><path d="M500 410 L504 402 L508 410Z"/><path d="M520 404 L524 396 L528 404Z"/></g>
<rect x="584" y="244" width="96" height="8" fill="#5A4026"/><rect x="606" y="160" width="48" height="8" fill="#C9A24A"/><rect x="606" y="236" width="48" height="8" fill="#C9A24A"/><path d="M612 168 L648 168 L632 202 L648 236 L612 236 L628 202Z" fill="#9FC3FF" opacity=".55"/><path d="M620 230 Q630 216 640 230Z" fill="#6FA0F0"/><rect x="608" y="168" width="4" height="68" fill="#C9A24A"/><rect x="648" y="168" width="4" height="68" fill="#C9A24A"/><g fill="#9FC3FF" class="flicker"><circle cx="600" cy="190" r="2"/><circle cx="662" cy="212" r="2"/><circle cx="596" cy="224" r="1.6"/></g>
<rect x="704" y="70" width="176" height="132" fill="#E2D6B6"/><path d="M704 70 Q716 76 704 82 M880 70 Q868 76 880 82" stroke="#B8A880" fill="none"/><circle cx="792" cy="132" r="40" fill="none" stroke="#6B5B3F" stroke-width="1.5"/><circle cx="792" cy="132" r="14" fill="#2C2F40"/><circle cx="792" cy="132" r="22" fill="none" stroke="#A23B2E" stroke-width="3"/><g fill="#6B5B3F"><circle cx="740" cy="92" r="2"/><circle cx="846" cy="100" r="2"/><circle cx="760" cy="180" r="2"/><circle cx="836" cy="176" r="2"/></g><g stroke="#6B5B3F" stroke-width="1"><line x1="716" y1="190" x2="770" y2="190"/><line x1="816" y1="190" x2="868" y2="190"/></g>
<rect x="770" y="370" width="64" height="10" fill="#5A4026"/><rect x="778" y="380" width="8" height="34" fill="#5A4026"/><rect x="818" y="380" width="8" height="34" fill="#5A4026"/><path d="M772 370 Q770 334 800 330 Q830 334 830 370Z" fill="#7A5A36"/><path d="M780 340 Q800 326 822 340 L818 352 Q800 344 784 352Z" fill="#6A4A2A"/><rect x="796" y="342" width="10" height="8" fill="#C9A24A"/><rect x="814" y="352" width="22" height="16" fill="#E8DFC8" transform="rotate(14 825 360)"/>`}
};
/* ================= AGE-MATCHED CAST ================= */
Object.assign(LOOKS,{
  /* heroes */
  pip:{s:.8,coat:"#E8B53A",legs:"#2E3A5A",skin:"#E3B48E",hat:"cap",hatc:"#B03A2E",extra:`<circle cx="26" cy="-62" r="8" fill="none" stroke="#5A4026" stroke-width="3"/><path d="M-10 -108 L-10 -60 M10 -108 L10 -60" stroke="#C9952A" stroke-width="2"/>`},
  scout:{s:.9,coat:"#4F7A3E",legs:"#6A5436",skin:"#D7A07E",hat:"short",hatc:"#3A2A1E",extra:`<path d="M-12 -112 L12 -112 L0 -96Z" fill="#B03A2E"/><rect x="-20" y="-104" width="10" height="26" rx="3" fill="#8A6A3A"/>`},
  rio:{s:.97,coat:"#5E3D78",legs:"#22262D",skin:"#C98F6A",hat:"curly",hatc:"#2A1E1A",extra:`<path d="M-18 -110 Q0 -100 18 -110" stroke="#4A2E62" stroke-width="5" fill="none"/><path d="M-4 -104 L-5 -86 M4 -104 L5 -86" stroke="#EDEAE2" stroke-width="2"/><rect x="-12" y="-80" width="24" height="10" rx="3" fill="#4A2E62"/>`},
  /* Maple Street */
  okafor:{coat:"#C2512E",legs:"#2E2A35",skin:"#7A4A30",hat:"bun",hatc:"#1A1410",long:true,extra:`<path d="M-8 -110 L0 -84 L8 -110" stroke="#2E4A7A" stroke-width="2" fill="none"/><rect x="-5" y="-86" width="10" height="12" fill="#F7F5EF"/>`,top:`<rect x="-11" y="-133" width="9" height="6" rx="2" fill="none" stroke="#111" stroke-width="1.5"/><rect x="2" y="-133" width="9" height="6" rx="2" fill="none" stroke="#111" stroke-width="1.5"/>`},
  theo:{s:.76,coat:"#2F6E78",legs:"#3A4A6A",skin:"#E8B896",hat:"short",hatc:"#C27A3A",extra:`<rect x="-20" y="-104" width="9" height="30" rx="3" fill="#E39A3A"/>`},
  lily:{s:.74,coat:"#D96A8A",legs:"#5A3A5A",skin:"#C98F6A",hat:"pony",hatc:"#2A1E1A",extra:`<circle cx="0" cy="-88" r="4" fill="#F7F5EF"/>`},
  zara:{s:.78,coat:"#F2F0EA",legs:"#2E4A7A",skin:"#8A5A3A",hat:"puffs",hatc:"#1A1410",extra:`<rect x="-4" y="-104" width="8" height="40" fill="#5A8AB8"/>`,top:`<rect x="-13" y="-138" width="26" height="8" rx="4" fill="#9FD0E8" stroke="#2E4A7A" stroke-width="1.5"/>`},
  leo:{s:.76,coat:"#E39A3A",legs:"#3A3530",skin:"#F0C8A8",hat:"short",hatc:"#E0B060",extra:`<g fill="#F2D06B"><circle cx="-28" cy="-60" r="2"/><circle cx="-24" cy="-56" r="1.6"/><circle cx="28" cy="-60" r="2"/><circle cx="25" cy="-55" r="1.6"/><circle cx="-6" cy="-90" r="1.4"/><circle cx="8" cy="-76" r="1.4"/></g>`},
  patel:{coat:"#3D4A5E",legs:"#22262D",skin:"#B07A55",hat:"bald",hatc:"#2A2A2A",face:"beard",facec:"#3A3A3A",extra:`<rect x="14" y="-80" width="18" height="24" rx="2" fill="#F4F1E8" stroke="#6B5B3F" stroke-width="2"/>`},
  ruby:{s:.8,coat:"#B03A2E",legs:"#2E4A7A",skin:"#F0C8A8",hat:"pony",hatc:"#C56A3A",extra:`<rect x="-14" y="-100" width="28" height="40" rx="3" fill="#2E4A7A"/><circle cx="-8" cy="-96" r="2" fill="#E5C25A"/><circle cx="8" cy="-96" r="2" fill="#E5C25A"/>`},
  jay:{s:.8,coat:"#3E6E5A",legs:"#3A3530",skin:"#9C6B4A",hat:"cap",hatc:"#2E4A7A"},
  mo:{s:.62,coat:"#9B59A8",legs:"#3A3A5A",skin:"#E3B48E",hat:"curly",hatc:"#6A4A2E",extra:`<g fill="#F4F1E8"><circle cx="-28" cy="-46" r="4"/><circle cx="28" cy="-46" r="4"/></g>`},
  /* Camp Pinecrest */
  jonah:{s:.88,coat:"#2E5A9E",legs:"#3A3530",skin:"#C98F6A",hat:"short",hatc:"#2A1E1A"},
  priya:{s:.86,coat:"#B03A2E",legs:"#2A2A30",skin:"#B07A55",hat:"pony",hatc:"#1A1410",extra:`<path d="M-8 -100 L0 -90 L8 -100" stroke="#F7F5EF" stroke-width="2" fill="none"/>`},
  dana:{coat:"#E39A3A",legs:"#2E3A3A",skin:"#E8B896",hat:"cap",hatc:"#2F4F3A",extra:`<path d="M-6 -112 L0 -84 L6 -112" stroke="#2F4F3A" stroke-width="2" fill="none"/><circle cx="0" cy="-82" r="4" fill="#C9CFD6"/>`},
  mateo:{s:.88,coat:"#F2C45A",legs:"#4A3A2E",skin:"#B07A55",hat:"curly",hatc:"#1A1410",extra:`<rect x="-14" y="-104" width="28" height="44" rx="3" fill="#F7F5EF" opacity=".9"/>`},
  hana:{s:.86,coat:"#4F9A8A",legs:"#2E3A4A",skin:"#EAC2A0",hat:"long",hatc:"#1A1410",extra:`<g fill="#9FC9E8"><circle cx="-16" cy="-104" r="2"/><circle cx="16" cy="-102" r="2"/><circle cx="-13" cy="-96" r="1.6"/></g>`},
  ben:{coat:"#3E6E5A",legs:"#3A3530",skin:"#D7A07E",hat:"beanie",hatc:"#B03A2E",face:"beard",facec:"#6A4A2E",extra:`<rect x="14" y="-80" width="18" height="24" rx="2" fill="#C9A26A"/>`},
  ollie:{s:.86,coat:"#7A5C8C",legs:"#2E2A35",skin:"#F0C8A8",hat:"short",hatc:"#C27A3A",extra:`<rect x="16" y="-60" width="10" height="14" rx="2" fill="none" stroke="#1A1A1A" stroke-width="2"/>`},
  grace:{s:.86,coat:"#5A8AB8",legs:"#2E3A4A",skin:"#7A4A30",hat:"puffs",hatc:"#1A1410",extra:`<rect x="20" y="-70" width="10" height="16" rx="2" fill="#F2C45A"/>`},
  campsam:{coat:"#5A4A36",legs:"#2A2420",skin:"#E3B48E",hat:"beanie",hatc:"#E39A3A",face:"moustache",facec:"#6A4A2E",extra:`<rect x="14" y="-82" width="20" height="26" rx="2" fill="#4A2E62"/>`},
  /* Westbrook High */
  maya:{s:.96,coat:"#2A2A30",legs:"#3A2A4A",skin:"#C98F6A",hat:"long",hatc:"#5E2A4A",extra:`<path d="M-8 -96 L0 -84 L8 -96 L0 -78Z" fill="#E8B54E"/>`},
  kai:{s:.97,coat:"#3A3A3A",legs:"#1E1E22",skin:"#E8C3A4",hat:"buzz",hatc:"#E0B060",extra:`<path d="M-12 -110 L-4 -76 M12 -110 L4 -76" stroke="#5A5A5A" stroke-width="3"/>`},
  duarte:{coat:"#6A4A2E",legs:"#22262D",skin:"#B07A55",hat:"short",hatc:"#8A8A8A",face:"moustache",facec:"#5A5A5A",extra:`<path d="M-5 -112 L5 -112 L0 -98Z" fill="#2E4A7A"/>`},
  devon:{s:.98,coat:"#2E4A7A",legs:"#1E2234",skin:"#9C6B4A",hat:"short",hatc:"#1A1410",extra:`<path d="M-6 -112 L0 -100 L6 -112" fill="#F7F5EF"/><circle cx="-12" cy="-96" r="4" fill="#B03A2E"/>`},
  ines:{s:.95,coat:"#E36A3A",legs:"#2E2E3A",skin:"#D7A07E",hat:"pony",hatc:"#3A2A1E",extra:`<path d="M-18 -104 L-18 -50 M18 -104 L18 -50" stroke="#F7F5EF" stroke-width="3"/>`},
  hart:{coat:"#4F6B3A",gown:true,skin:"#F0C8A8",hat:"bun",hatc:"#B8B4AC",extra:`<path d="M-9 -112 Q0 -104 9 -112" stroke="#C9A24A" stroke-width="2" fill="none"/>`,top:`<circle cx="-6" cy="-129" r="5" fill="none" stroke="#5A3A26" stroke-width="1.5"/><circle cx="6" cy="-129" r="5" fill="none" stroke="#5A3A26" stroke-width="1.5"/>`},
  jordan:{s:.97,coat:"#C9A229",legs:"#22262D",skin:"#7A4A30",hat:"buzz",hatc:"#1A1410",extra:`<text x="0" y="-80" text-anchor="middle" font-size="16" font-weight="700" font-family="sans-serif" fill="#1E2A44">7</text>`},
  sky:{s:.95,coat:"#5A8AB8",legs:"#3A3530",skin:"#EAC2A0",hat:"long",hatc:"#D96A8A",extra:`<rect x="-10" y="-96" width="20" height="14" rx="3" fill="#1E1E22"/><circle cx="0" cy="-89" r="4" fill="#5A6A8A"/>`},
  reyes:{coat:"#4A5A6A",legs:"#3A4A5A",skin:"#B07A55",hat:"cap",hatc:"#2A3A57",extra:`<circle cx="22" cy="-62" r="7" fill="none" stroke="#C9A24A" stroke-width="2.5"/><rect x="-10" y="-100" width="20" height="10" fill="#3A4A5A"/>`}
});

/* ================= AGE-MATCHED SCENES ================= */
Object.assign(SCENES,{
/* ---- Maple Street: classroom ---- */
nibbles:{start:150,floor:512,people:{okafor:[250,482],theo:[600,486],lily:[720,486]},
hot:{cage:[408,270,144,72],chart:[630,82,84,98],window:[34,54,194,184],cubbies:[698,244,206,140],beanbag:[786,408,158,96],board:[324,54,294,152]},
stand:{cage:480,chart:670,window:140,cubbies:800,beanbag:860,board:470},
bg:`<defs><pattern id="ctile" width="48" height="48" patternUnits="userSpaceOnUse"><rect width="48" height="48" fill="#C9B48A"/><path d="M0 0 H48 M0 0 V48" stroke="#B49C70" stroke-width="2"/></pattern></defs>
<rect width="960" height="392" fill="#F2E2B4"/><rect y="392" width="960" height="148" fill="url(#ctile)"/><rect y="386" width="960" height="8" fill="#8A6A3A"/>
<g font-family="Baloo 2,sans-serif" font-size="14" font-weight="700" text-anchor="middle">${["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"].map((l,i)=>`<rect x="${10+i*47}" y="8" width="40" height="30" rx="4" fill="${["#E36A3A","#5A8AB8","#7CB55A","#E8B53A","#9B59A8"][i%5]}"/><text x="${30+i*47}" y="29" fill="#FFFFFF">${l}${l.toLowerCase()}</text>`).join("")}</g>
<rect x="40" y="60" width="182" height="172" rx="4" fill="#FFFFFF"/><rect x="50" y="70" width="162" height="152" fill="#9FC9E8"/><circle cx="180" cy="104" r="18" fill="#FFE07A"/><ellipse cx="96" cy="120" rx="30" ry="12" fill="#FFFFFF"/><ellipse cx="118" cy="112" rx="20" ry="10" fill="#FFFFFF"/><rect x="50" y="186" width="162" height="36" fill="#7CB55A"/><line x1="131" y1="70" x2="131" y2="222" stroke="#FFFFFF" stroke-width="6"/><line x1="50" y1="146" x2="212" y2="146" stroke="#FFFFFF" stroke-width="6"/><rect x="34" y="230" width="194" height="8" fill="#E8DFC8"/>
<rect x="330" y="60" width="282" height="140" rx="4" fill="#FDFDFB" stroke="#9AA0A8" stroke-width="5"/><g font-family="Baloo 2,sans-serif" font-weight="600" font-size="20" fill="#2E5A9E"><text x="352" y="100">Tuesday</text><text x="352" y="134">Recess 10:30</text><text x="352" y="166">Lunch 12:00</text></g><path d="M520 150 q12 -20 24 0 q12 20 24 0" stroke="#E36A3A" stroke-width="4" fill="none"/><rect x="390" y="200" width="160" height="7" fill="#9AA0A8"/><rect x="420" y="194" width="22" height="6" rx="2" fill="#B03A2E"/><rect x="450" y="194" width="22" height="6" rx="2" fill="#2E5A9E"/>
<rect x="638" y="90" width="68" height="84" fill="#FFFFFF" stroke="#C9B48A" stroke-width="2"/><text x="672" y="106" text-anchor="middle" font-family="Baloo 2,sans-serif" font-size="9" font-weight="700" fill="#2E5A9E">HAMSTER HELPERS</text><g stroke="#C9CFD6" stroke-width="1.5"><line x1="644" y1="120" x2="700" y2="120"/><line x1="644" y1="136" x2="700" y2="136"/><line x1="644" y1="152" x2="700" y2="152"/></g><g font-family="Baloo 2,sans-serif" font-size="9" fill="#3A3A3A"><text x="646" y="117">Mon  Lily</text><text x="646" y="133">Tue  Theo</text><text x="646" y="149">Wed  Sam</text></g><circle cx="696" cy="129" r="5" fill="#E8B53A"/>
<rect x="400" y="334" width="164" height="12" fill="#A0703A"/><rect x="410" y="346" width="8" height="46" fill="#8A5A2E"/><rect x="546" y="346" width="8" height="46" fill="#8A5A2E"/>
<rect x="420" y="276" width="124" height="58" rx="6" fill="rgba(255,255,255,.25)" stroke="#8A8F96" stroke-width="3"/><g stroke="#8A8F96" stroke-width="1.5">${[440,456,472,488,504,520].map(x=>`<line x1="${x}" y1="278" x2="${x}" y2="332"/>`).join("")}</g><path d="M420 290 L400 276 L400 314 L420 322Z" fill="rgba(255,255,255,.3)" stroke="#8A8F96" stroke-width="3"/><circle cx="512" cy="310" r="16" fill="none" stroke="#C2512E" stroke-width="3"/><rect x="430" y="324" width="104" height="8" fill="#E8D59A"/><g fill="#5A4A36"><ellipse cx="404" cy="330" rx="3" ry="2"/><ellipse cx="452" cy="420" rx="3" ry="2"/><ellipse cx="560" cy="440" rx="3" ry="2"/><ellipse cx="660" cy="460" rx="3" ry="2"/><ellipse cx="760" cy="470" rx="3" ry="2"/></g>
<rect x="700" y="250" width="202" height="134" fill="#C98B4A"/>${[0,1,2].map(c=>[0,1].map(r=>`<rect x="${708+c*66}" y="${258+r*62}" width="58" height="54" fill="${["#E36A3A","#5A8AB8","#7CB55A","#E8B53A","#9B59A8","#E39A3A"][c*2+r]}"/>`).join("")).join("")}<rect x="716" y="248" width="30" height="20" fill="#FFFFFF" transform="rotate(-8 731 258)"/><circle cx="860" cy="226" r="20" fill="#5A8AB8"/><path d="M846 220 q8 -10 16 0 q6 8 14 2" stroke="#7CB55A" stroke-width="5" fill="none"/><rect x="856" y="244" width="8" height="8" fill="#5A4026"/>
<ellipse cx="866" cy="492" rx="86" ry="14" fill="#E36A3A" opacity=".5"/><path d="M800 486 Q790 430 840 420 Q880 404 920 428 Q946 450 934 488Z" fill="#3E8A6A"/><path d="M826 446 Q860 432 900 444" stroke="#2E6A52" stroke-width="3" fill="none"/>`},

/* ---- Maple Street: science fair gym ---- */
ribbon:{start:150,floor:514,people:{zara:[255,488],leo:[668,488],patel:[882,488]},
hot:{robot:[290,262,160,100],volcano:[490,236,104,124],ribbon:[598,300,50,64],plant:[690,262,160,100],clipboard:[140,248,84,100],sheet:[874,176,72,92]},
stand:{robot:370,volcano:545,ribbon:620,plant:770,clipboard:185,sheet:900},
bg:`<rect width="960" height="380" fill="#B9C8DA"/><rect y="380" width="960" height="160" fill="#D9A866"/><g stroke="#C4935A" stroke-width="2">${[410,440,470,500,530].map(y=>`<line x1="0" y1="${y}" x2="960" y2="${y}"/>`).join("")}</g><path d="M320 540 Q480 440 640 540" stroke="#F2F0EA" stroke-width="4" fill="none"/>
<rect x="300" y="24" width="360" height="44" rx="6" fill="#2E4A7A"/><text x="480" y="55" text-anchor="middle" font-family="Baloo 2,sans-serif" font-size="26" font-weight="700" fill="#FFFFFF" letter-spacing="3">SCIENCE FAIR</text>
<g fill="#8A8F96">${[0,1,2,3,4].map(i=>`<rect x="0" y="${200+i*36}" width="${130-i*0}" height="10"/><rect x="0" y="${210+i*36}" width="130" height="26" fill="#9AA0A8"/>`).join("")}</g>
<rect x="846" y="70" width="80" height="56" fill="#FFFFFF" stroke="#9AA0A8" stroke-width="3"/><rect x="872" y="96" width="28" height="20" fill="none" stroke="#C2512E" stroke-width="2"/><ellipse cx="886" cy="130" rx="18" ry="4" fill="none" stroke="#E36A3A" stroke-width="3"/><path d="M870 132 L876 156 M886 134 L886 158 M902 132 L896 156" stroke="#F2F0EA" stroke-width="1.5"/>
<g><rect x="290" y="356" width="160" height="10" fill="#E8DFC8"/><path d="M294 366 L446 366 L440 410 L300 410Z" fill="#5A8AB8"/>
<rect x="340" y="300" width="60" height="52" rx="6" fill="#C9CFD6"/><rect x="350" y="274" width="40" height="28" rx="4" fill="#DDE2E8"/><circle cx="362" cy="288" r="4" fill="#2E4A7A"/><circle cx="378" cy="288" r="4" fill="#2E4A7A"/><line x1="370" y1="274" x2="370" y2="262" stroke="#8A8F96" stroke-width="2"/><circle cx="370" cy="260" r="4" fill="#E36A3A"/><rect x="310" y="340" width="20" height="12" fill="#E36A3A"/><rect x="410" y="340" width="20" height="12" fill="#5A8AB8"/><rect x="410" y="328" width="20" height="12" fill="#7CB55A"/></g>
<g><rect x="490" y="356" width="160" height="10" fill="#E8DFC8"/><path d="M494 366 L646 366 L640 410 L500 410Z" fill="#E39A3A"/>
<path d="M506 356 L556 248 L580 248 L612 356Z" fill="#8A5A3A"/><path d="M556 248 Q568 236 580 248 L574 262 Q568 256 562 262Z" fill="#E36A3A"/><g fill="#F2D06B">${[[530,330],[546,300],[574,320],[590,340],[560,280],[598,300],[520,348],[584,276]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.4"/>`).join("")}</g></g>
<g><path d="M622 330 m-14 0 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0" fill="#2E6AC2"/><circle cx="622" cy="330" r="7" fill="#FFFFFF"/><path d="M614 342 L608 362 L616 358 L620 364 L622 344Z M630 342 L636 362 L628 358 L624 364 L622 344Z" fill="#2E6AC2"/><circle cx="616" cy="324" r="1.8" fill="#F2D06B"/><circle cx="630" cy="336" r="1.6" fill="#F2D06B"/></g>
<g><rect x="690" y="356" width="160" height="10" fill="#E8DFC8"/><path d="M694 366 L846 366 L840 410 L700 410Z" fill="#4F9A5A"/><path d="M752 352 L788 352 L782 330 L758 330Z" fill="#C2512E"/><path d="M770 330 Q766 300 750 290 M770 330 Q776 296 794 286 M770 330 L770 280" stroke="#4E8A3E" stroke-width="3" fill="none"/><ellipse cx="750" cy="290" rx="9" ry="5" fill="#7CB55A"/><ellipse cx="794" cy="286" rx="9" ry="5" fill="#7CB55A"/><ellipse cx="770" cy="278" rx="7" ry="5" fill="#7CB55A"/></g>
<line x1="182" y1="300" x2="182" y2="392" stroke="#5A5A62" stroke-width="4"/><path d="M164 392 L200 392" stroke="#5A5A62" stroke-width="4"/><rect x="152" y="256" width="60" height="70" rx="4" fill="#A07A4E"/><rect x="158" y="266" width="48" height="56" fill="#FFFFFF"/><rect x="172" y="250" width="20" height="10" rx="2" fill="#8D959E"/><g stroke="#9AA3AD" stroke-width="2"><line x1="164" y1="280" x2="198" y2="280"/><line x1="164" y1="292" x2="192" y2="292"/><line x1="164" y1="304" x2="198" y2="304"/></g><circle cx="196" cy="280" r="3" fill="#2E6AC2"/>
<rect x="880" y="184" width="60" height="78" fill="#FFFFFF" stroke="#C9CFD6" stroke-width="2"/><circle cx="910" cy="186" r="3" fill="#B03A2E"/><text x="910" y="202" text-anchor="middle" font-family="Baloo 2,sans-serif" font-size="9" font-weight="700" fill="#2E4A7A">CLEAN-UP</text><g stroke="#C9CFD6"><line x1="886" y1="216" x2="934" y2="216"/><line x1="886" y1="232" x2="934" y2="232"/></g><text x="888" y="228" font-family="Baloo 2,sans-serif" font-size="9" fill="#3A3A3A">3:00 Leo</text>`},

/* ---- Maple Street: backyard treehouse ---- */
treehouse:{start:220,floor:514,people:{ruby:[110,490],jay:[560,490],mo:[900,496]},
hot:{treehouse:[286,84,220,112],ladder:[438,196,44,204],sign:[366,226,70,48],wagon:[636,402,130,74],sandbox:[214,404,152,70],doghouse:[756,326,108,90]},
stand:{treehouse:420,ladder:460,sign:400,wagon:700,sandbox:290,doghouse:810},
bg:`<defs><linearGradient id="bsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CCBEA"/><stop offset="1" stop-color="#E2F2F8"/></linearGradient></defs>
<rect width="960" height="540" fill="url(#bsky)"/><ellipse cx="700" cy="70" rx="50" ry="16" fill="#FFFFFF"/><ellipse cx="740" cy="60" rx="34" ry="14" fill="#FFFFFF"/><circle cx="880" cy="60" r="26" fill="#FFE07A"/>
<g fill="#E8D9B8">${Array.from({length:40},(_,i)=>`<path d="M${i*24} 360 L${i*24} 304 L${i*24+10} 294 L${i*24+20} 304 L${i*24+20} 360Z"/>`).join("")}</g><rect y="318" width="960" height="6" fill="#D4C29C"/>
<rect y="350" width="960" height="190" fill="#7CB55A"/><g fill="#8CC56A"><ellipse cx="160" cy="420" rx="90" ry="12"/><ellipse cx="620" cy="500" rx="120" ry="14"/><ellipse cx="840" cy="440" rx="70" ry="10"/></g>
<rect x="380" y="150" width="50" height="252" fill="#7A5434"/><path d="M380 400 Q360 410 350 404 M430 400 Q452 410 462 404" stroke="#7A5434" stroke-width="10" fill="none"/>
<g fill="#4E8A3E"><circle cx="330" cy="70" r="60"/><circle cx="420" cy="40" r="66"/><circle cx="510" cy="74" r="58"/><circle cx="560" cy="130" r="40"/><circle cx="270" cy="130" r="40"/></g><g fill="#5E9A4A"><circle cx="380" cy="50" r="30"/><circle cx="480" cy="60" r="28"/></g>
<rect x="290" y="110" width="210" height="82" fill="#B07A44"/><path d="M280 114 L395 70 L510 114Z" fill="#8A3A2E"/><rect x="310" y="128" width="40" height="34" fill="#3A2A1E"/><rect x="420" y="132" width="50" height="60" fill="#5A3A26"/><circle cx="445" cy="150" r="4" fill="#E8DFC8"/><g stroke="#8A5A2E" stroke-width="2"><line x1="290" y1="140" x2="500" y2="140"/><line x1="290" y1="166" x2="500" y2="166"/></g><line x1="500" y1="80" x2="500" y2="112" stroke="#5A3A26" stroke-width="3"/><path d="M500 80 L530 88 L500 96Z" fill="#E8B53A"/>
<g stroke="#C9A26A" stroke-width="6"><line x1="446" y1="192" x2="446" y2="400"/><line x1="474" y1="192" x2="474" y2="400"/></g><g stroke="#C9A26A" stroke-width="5">${[214,244,274,304,334,364,392].map(y=>`<line x1="446" y1="${y}" x2="474" y2="${y}"/>`).join("")}</g><g fill="#FFFFFF" opacity=".85"><circle cx="452" cy="242" r="3"/><circle cx="468" cy="272" r="3"/><circle cx="454" cy="302" r="3"/><circle cx="466" cy="332" r="3"/></g>
<rect x="372" y="232" width="62" height="38" rx="3" fill="#F4EAD0" stroke="#8A5A2E" stroke-width="2"/><text x="403" y="248" text-anchor="middle" font-family="Baloo 2,sans-serif" font-size="9" font-weight="700" fill="#B03A2E">CLUB RULES</text><text x="403" y="262" text-anchor="middle" font-family="Baloo 2,sans-serif" font-size="7" fill="#3A3A3A">members only · 10+</text>
<rect x="220" y="414" width="140" height="54" fill="#B07A44"/><rect x="228" y="420" width="124" height="42" fill="#E8D59A"/><g><rect x="250" y="440" width="18" height="6" rx="3" fill="#E36A3A"/><rect x="280" y="446" width="18" height="6" rx="3" fill="#5A8AB8"/><rect x="316" y="436" width="18" height="6" rx="3" fill="#9B59A8"/></g>
<rect x="644" y="420" width="114" height="40" rx="6" fill="#C2312E"/><circle cx="668" cy="466" r="12" fill="#222"/><circle cx="734" cy="466" r="12" fill="#222"/><path d="M644 432 L610 412" stroke="#8A2A22" stroke-width="5"/><rect x="664" y="404" width="56" height="18" rx="9" fill="#F4EAD0" stroke="#C9B48A" stroke-width="2"/><circle cx="734" cy="410" r="12" fill="#B07A44"/><circle cx="726" cy="400" r="5" fill="#B07A44"/><circle cx="742" cy="400" r="5" fill="#B07A44"/>
<path d="M762 410 L762 360 L810 330 L858 360 L858 410Z" fill="#C2512E"/><path d="M754 362 L810 326 L866 362" stroke="#6A3A2E" stroke-width="8" fill="none"/><path d="M790 410 L790 380 Q810 362 830 380 L830 410Z" fill="#3A2A1E"/><ellipse cx="810" cy="404" rx="22" ry="10" fill="#E0B060"/><circle cx="798" cy="398" r="9" fill="#E0B060"/><text x="830" y="350" font-family="Baloo 2,sans-serif" font-size="12" font-weight="700" fill="#5A6A8A">z z</text>`},

/* ---- Camp Pinecrest: cabin clearing ---- */
flag:{start:260,floor:512,people:{priya:[120,486],dana:[420,490],jonah:[680,486]},
hot:{flagpole:[478,64,48,340],reddoor:[190,256,82,136],tracks:[180,486,170,40],clipboard:[306,294,62,78],lostfound:[546,396,98,70],bluecabin:[770,250,90,142]},
stand:{flagpole:470,reddoor:230,tracks:260,clipboard:340,lostfound:600,bluecabin:800},
bg:`<rect width="960" height="540" fill="#9FD0F0"/><path d="M0 250 Q160 190 320 230 Q500 170 680 220 Q840 180 960 230 L960 380 L0 380Z" fill="#7FA89A"/>
<g fill="#2E5A3E">${[20,90,160,600,660,940,880].map((x,i)=>`<path d="M${x} 360 L${x+32} ${200+(i%3)*20} L${x+64} 360Z"/>`).join("")}</g><g fill="#3E6E4A">${[300,370,420,560,760,820].map((x,i)=>`<path d="M${x} 360 L${x+28} ${220+(i%2)*24} L${x+56} 360Z"/>`).join("")}</g>
<rect y="372" width="960" height="168" fill="#9A8A5A"/><g fill="#7FA060"><ellipse cx="80" cy="380" rx="90" ry="10"/><ellipse cx="900" cy="384" rx="80" ry="10"/></g>
<g><rect x="40" y="230" width="232" height="162" fill="#8A5A36"/><g stroke="#6A4226" stroke-width="3">${[252,276,300,324,348,372].map(y=>`<line x1="40" y1="${y}" x2="272" y2="${y}"/>`).join("")}</g><path d="M26 236 L156 168 L286 236Z" fill="#5A3A26"/><rect x="70" y="270" width="56" height="44" fill="#F2D9A0"/><line x1="98" y1="270" x2="98" y2="314" stroke="#5A3A26" stroke-width="3"/><rect x="198" y="264" width="66" height="128" fill="#B03A2E"/><circle cx="252" cy="330" r="4" fill="#E5C25A"/><rect x="136" y="196" width="40" height="22" fill="#F4EAD0"/><text x="156" y="212" text-anchor="middle" font-family="Bree Serif,serif" font-size="12" fill="#B03A2E">RED</text></g>
<path d="M150 470 L144 438 L180 438 L174 470Z" fill="#8D959E" transform="rotate(-70 162 454)"/><g fill="#E8DFC8"><circle cx="196" cy="474" r="6"/><rect x="190" y="480" width="10" height="4"/></g>
<g fill="#4A3A2A">${[[196,500],[214,492],[232,504],[250,494],[268,506],[288,496],[306,506],[324,498]].map(([x,y])=>`<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="4" ry="3"/><circle cx="-4" cy="-5" r="1.4"/><circle cx="0" cy="-6" r="1.4"/><circle cx="4" cy="-5" r="1.4"/></g>`).join("")}</g>
<rect x="330" y="296" width="8" height="104" fill="#6A4A2E"/><rect x="312" y="300" width="44" height="62" rx="3" fill="#A07A4E"/><rect x="317" y="308" width="34" height="50" fill="#FFFFFF"/><rect x="326" y="296" width="16" height="8" rx="2" fill="#8D959E"/><g stroke="#9AA3AD" stroke-width="2"><line x1="321" y1="320" x2="347" y2="320"/><line x1="321" y1="330" x2="343" y2="330"/><line x1="321" y1="340" x2="347" y2="340"/></g>
<rect x="498" y="70" width="8" height="330" fill="#C9CFD6"/><circle cx="502" cy="68" r="7" fill="#E5C25A"/><path d="M506 80 Q520 200 506 380" stroke="#F4F1E8" stroke-width="2" fill="none"/><rect x="506" y="84" width="10" height="8" fill="#8D959E"/><rect x="484" y="394" width="36" height="10" fill="#8D959E"/>
<rect x="550" y="404" width="90" height="58" fill="#C9A26A"/><path d="M550 404 L560 392 L630 392 L640 404Z" fill="#B08A52"/><text x="595" y="438" text-anchor="middle" font-family="Bree Serif,serif" font-size="11" fill="#5A3A26">LOST &amp; FOUND</text><path d="M620 404 Q636 418 628 440" stroke="#2E5A9E" stroke-width="10" fill="none"/>
<g><rect x="700" y="230" width="232" height="162" fill="#8A5A36"/><g stroke="#6A4226" stroke-width="3">${[252,276,300,324,348,372].map(y=>`<line x1="700" y1="${y}" x2="932" y2="${y}"/>`).join("")}</g><path d="M686 236 L816 168 L946 236Z" fill="#5A3A26"/><rect x="860" y="270" width="56" height="44" fill="#F2D9A0"/><rect x="778" y="264" width="66" height="128" fill="#2E5A9E"/><circle cx="790" cy="330" r="4" fill="#E5C25A"/><rect x="796" y="196" width="40" height="22" fill="#F4EAD0"/><text x="816" y="212" text-anchor="middle" font-family="Bree Serif,serif" font-size="12" fill="#2E5A9E">BLUE</text><line x1="856" y1="250" x2="856" y2="300" stroke="#6A4A2E" stroke-width="3"/><path d="M858 252 L900 262 L858 274Z" fill="#2E6AC2"/></g>`},

/* ---- Camp Pinecrest: sunrise dock ---- */
canoe:{start:380,floor:512,people:{mateo:[210,488],hana:[520,488],ben:[880,488]},
hot:{vests:[36,284,128,88],badges:[168,210,70,82],rack:[252,340,158,64],cleat:[584,374,62,30],canoe:[690,290,140,40]},
stand:{vests:120,badges:200,rack:330,cleat:610,canoe:760},
bg:`<defs><linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3A66B"/><stop offset=".55" stop-color="#F7D9A0"/><stop offset="1" stop-color="#C9DCEA"/></linearGradient></defs>
<rect width="960" height="300" fill="url(#dawn)"/><circle cx="640" cy="292" r="44" fill="#FFD27A"/><path d="M0 300 L0 270 Q60 250 120 266 Q200 246 300 268 Q420 248 520 266 Q640 244 760 264 Q880 248 960 266 L960 300Z" fill="#3E5A4A"/>
<rect y="296" width="960" height="122" fill="#4F86A8"/><g stroke="#F7D9A0" stroke-width="3" opacity=".6"><line x1="600" y1="306" x2="680" y2="306"/><line x1="610" y1="322" x2="670" y2="322"/><line x1="620" y1="338" x2="660" y2="338"/><line x1="300" y1="350" x2="360" y2="350"/></g>
<rect y="410" width="960" height="130" fill="#D9C49A"/><g fill="#C9B48A"><ellipse cx="300" cy="470" rx="80" ry="8"/><ellipse cx="760" cy="500" rx="100" ry="8"/></g>
<rect x="20" y="190" width="220" height="222" fill="#8A5A36"/><path d="M8 196 L130 140 L252 196Z" fill="#5A3A26"/><rect x="34" y="252" width="134" height="160" fill="#4A3020"/><rect x="40" y="290" width="120" height="6" fill="#6A4A2E"/>
<g>${[52,80,108,136].map((x,i)=>`<path d="M${x} 298 L${x+20} 298 L${x+22} 352 L${x-2} 352Z" fill="${i===2?"#C2552A":"#E87A2E"}"/><rect x="${x+4}" y="314" width="12" height="4" fill="#1E1E22"/>`).join("")}<g fill="#9FC9E8"><circle cx="118" cy="358" r="2"/><circle cx="122" cy="366" r="1.8"/><circle cx="116" cy="372" r="1.5"/></g></g>
<rect x="172" y="216" width="62" height="72" fill="#B08A52" stroke="#6A4A2E" stroke-width="3"/><g>${[[184,232,"#E5C25A"],[204,232,"#5A8AB8"],[222,232,"#B03A2E"],[184,256,"#7CB55A"],[204,256,"#E5C25A"]].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="7" fill="${c}"/>`).join("")}</g><text x="203" y="282" text-anchor="middle" font-family="Bree Serif,serif" font-size="8" fill="#3A2A1E">KNOTS</text>
<rect x="258" y="356" width="148" height="6" fill="#6A4A2E"/><rect x="258" y="386" width="148" height="6" fill="#6A4A2E"/><rect x="262" y="356" width="6" height="56" fill="#6A4A2E"/><rect x="398" y="356" width="6" height="56" fill="#6A4A2E"/><path d="M262 352 Q332 340 404 352 Q332 360 262 352Z" fill="#4F7A3E"/><path d="M262 382 Q332 370 404 382 Q332 390 262 382Z" fill="#E8B53A"/>
<rect x="420" y="396" width="540" height="20" fill="#A07A4E"/><g stroke="#8A643C" stroke-width="2">${[460,500,540,580,620,660,700,740,780,820,860,900,940].map(x=>`<line x1="${x}" y1="396" x2="${x}" y2="416"/>`).join("")}</g>${[440,640,840].map(x=>`<rect x="${x}" y="416" width="10" height="30" fill="#6A4A2E"/>`).join("")}
<rect x="596" y="384" width="38" height="8" rx="3" fill="#5A5A62"/><path d="M614 388 Q600 392 606 398 Q620 404 612 388 Q640 400 680 380" stroke="#C9A26A" stroke-width="3" fill="none"/>
<path d="M700 302 Q760 322 820 302 Q760 312 700 302Z" fill="#B03A2E"/><text x="760" y="312" text-anchor="middle" font-family="Bree Serif,serif" font-size="10" fill="#F4EAD0">3</text><path d="M680 318 Q700 314 720 318 M800 318 Q820 314 840 318" stroke="#F7D9A0" stroke-width="2" fill="none"/>`},

/* ---- Camp Pinecrest: campfire at night ---- */
ghost:{start:260,floor:512,people:{campsam:[130,488],ollie:[370,488],grace:[640,488]},
hot:{laundry:[198,224,146,64],fire:[420,388,100,96],book:[506,436,64,32],hollow:[724,240,60,66],owl:[740,104,56,52],shed:[846,282,96,118]},
stand:{laundry:270,fire:470,book:540,hollow:750,owl:760,shed:880},
bg:`<defs><linearGradient id="nsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1430"/><stop offset="1" stop-color="#28305A"/></linearGradient><radialGradient id="fglow"><stop offset="0" stop-color="#FFB24A" stop-opacity=".55"/><stop offset="1" stop-color="#FFB24A" stop-opacity="0"/></radialGradient></defs>
<rect width="960" height="540" fill="url(#nsky)"/><g fill="#E9EEF7">${[[60,40],[200,70],[320,30],[460,90],[560,40],[640,110],[900,50],[860,150],[420,160]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.4"/>`).join("")}</g><circle cx="150" cy="80" r="26" fill="#EEE8D2"/><circle cx="162" cy="74" r="22" fill="#0E1430" opacity=".25"/>
<g fill="#121A28">${[0,70,130,260,330,560,620,900].map((x,i)=>`<path d="M${x} 390 L${x+40} ${150+(i%3)*30} L${x+80} 390Z"/>`).join("")}</g>
<rect y="380" width="960" height="160" fill="#2E3A2A"/><ellipse cx="470" cy="440" rx="220" ry="80" fill="url(#fglow)"/>
<path d="M20 400 L80 300 L140 400Z" fill="#8A3A2E"/><path d="M64 400 L80 360 L96 400Z" fill="#1A1410"/><path d="M110 400 L170 310 L230 400Z" fill="#3E5A3A"/><path d="M156 400 L170 366 L184 400Z" fill="#FFB24A" opacity=".5"/>
<line x1="206" y1="236" x2="206" y2="400" stroke="#5A4A36" stroke-width="5"/><line x1="338" y1="236" x2="338" y2="400" stroke="#5A4A36" stroke-width="5"/><path d="M206 244 Q272 262 338 244" stroke="#C9B48A" stroke-width="2" fill="none"/><rect x="220" y="250" width="34" height="34" fill="#5A8AB8"/><rect x="236" y="246" width="6" height="8" fill="#C9A26A"/><rect x="290" y="252" width="6" height="8" fill="#C9A26A"/><rect x="310" y="248" width="22" height="30" fill="#E8B53A"/>
<g><path d="M430 470 L512 446 M436 446 L506 472" stroke="#5A3A26" stroke-width="10" stroke-linecap="round"/><g class="flicker"><path d="M446 450 Q452 410 470 430 Q476 390 492 432 Q500 418 504 452Z" fill="#E8823A"/><path d="M458 452 Q464 424 474 440 Q480 418 490 452Z" fill="#F2C45A"/></g></g>
<rect x="500" y="456" width="110" height="18" rx="9" fill="#6A4A2E"/><rect x="514" y="444" width="44" height="12" rx="2" fill="#4A2E62"/><rect x="514" y="444" width="44" height="3" fill="#E8DFC8"/>
<path d="M700 400 L712 120 L790 120 L806 400Z" fill="#2A2018"/><path d="M712 120 L690 90 M790 120 L820 96 M760 120 L770 80" stroke="#2A2018" stroke-width="10" stroke-linecap="round"/><ellipse cx="752" cy="274" rx="20" ry="26" fill="#0B0A08"/><circle cx="756" cy="282" r="2.2" fill="#5DE08A"/>
<g transform="translate(768 132)"><ellipse cx="0" cy="0" rx="16" ry="20" fill="#6A5A46"/><circle cx="-6" cy="-6" r="5" fill="#F2D06B"/><circle cx="6" cy="-6" r="5" fill="#F2D06B"/><circle cx="-6" cy="-6" r="2" fill="#111"/><circle cx="6" cy="-6" r="2" fill="#111"/><path d="M-2 0 L2 0 L0 4Z" fill="#C9A24A"/><path d="M-14 -16 L-10 -24 L-6 -18 M14 -16 L10 -24 L6 -18" stroke="#6A5A46" stroke-width="3" fill="none"/></g>
<rect x="850" y="290" width="96" height="110" fill="#5A4A36"/><path d="M842 294 L898 262 L954 294Z" fill="#3A2E22"/><rect x="876" y="330" width="44" height="70" fill="#3A2E22"/><rect x="868" y="300" width="60" height="16" fill="#C9B48A"/><text x="898" y="312" text-anchor="middle" font-family="Bree Serif,serif" font-size="9" fill="#3A2E22">SUPPLIES</text><circle cx="862" cy="330" r="6" fill="#F2C45A" class="flicker"/>`},

/* ---- Westbrook: music room ---- */
band:{start:260,floor:512,people:{maya:[210,486],kai:[610,486],duarte:[870,486]},
hot:{signin:[126,236,54,68],amp:[296,290,112,114],pick:[398,478,44,32],board:[276,56,248,138],case:[676,246,72,160],poster:[776,76,128,138]},
stand:{signin:150,amp:350,pick:420,board:400,case:710,poster:840},
bg:`<rect width="960" height="392" fill="#234B52"/><g fill="#2E5A62">${Array.from({length:16},(_,i)=>`<rect x="${10+i*60}" y="10" width="50" height="34" rx="3"/>`).join("")}</g>
<rect y="392" width="960" height="148" fill="#6A4A36"/><g stroke="#5A3C2A" stroke-width="2">${[420,460,500].map(y=>`<line x1="0" y1="${y}" x2="960" y2="${y}"/>`).join("")}</g><ellipse cx="480" cy="470" rx="300" ry="40" fill="#8E2C3A"/>
<rect x="20" y="180" width="100" height="212" fill="#4A3A2E"/><rect x="40" y="200" width="60" height="50" fill="#9FC3D9" opacity=".6"/><circle cx="106" cy="300" r="5" fill="#C9A24A"/>
<rect x="130" y="240" width="46" height="60" rx="3" fill="#A07A4E"/><rect x="135" y="248" width="36" height="48" fill="#FFFFFF"/><g stroke="#9AA3AD" stroke-width="2"><line x1="139" y1="258" x2="167" y2="258"/><line x1="139" y1="268" x2="163" y2="268"/><line x1="139" y1="278" x2="167" y2="278"/><line x1="139" y1="288" x2="160" y2="288"/></g>
<rect x="280" y="60" width="240" height="130" rx="4" fill="#F6F7F4" stroke="#8A8F96" stroke-width="4"/><g font-family="Rubik,sans-serif" font-weight="600" font-size="14" fill="#2E3A4A"><text x="296" y="86">BATTLE OF THE BANDS · 7PM</text><text x="296" y="116">1. Static Owls</text><text x="296" y="140">2. Neon Static</text><text x="296" y="164">3. Lost &amp; Found</text></g>
<rect x="300" y="296" width="104" height="104" rx="6" fill="#1E1E22"/><rect x="310" y="306" width="84" height="56" fill="#3A3A40"/><g stroke="#2A2A2E" stroke-width="2">${[314,322,330,338,346,354].map(y=>`<line x1="310" y1="${y}" x2="394" y2="${y}"/>`).join("")}</g><g fill="#C9CFD6">${[320,338,356,374].map(x=>`<circle cx="${x}" cy="378" r="5"/>`).join("")}</g><rect x="384" y="386" width="12" height="6" fill="#0E0E10" stroke="#5A5A62"/>
<g><ellipse cx="500" cy="378" rx="44" ry="34" fill="#B03A2E"/><ellipse cx="500" cy="378" rx="34" ry="26" fill="#F4F1E8"/><ellipse cx="456" cy="332" rx="20" ry="10" fill="#B03A2E"/><ellipse cx="540" cy="330" rx="20" ry="10" fill="#B03A2E"/><line x1="440" y1="290" x2="440" y2="400" stroke="#8D959E" stroke-width="3"/><ellipse cx="440" cy="290" rx="26" ry="5" fill="#E5C25A"/><line x1="566" y1="300" x2="566" y2="404" stroke="#8D959E" stroke-width="3"/><ellipse cx="566" cy="300" rx="24" ry="5" fill="#E5C25A"/></g>
<path d="M698 404 Q680 380 690 340 Q684 300 698 270 Q712 250 726 270 Q740 300 734 340 Q744 380 726 404Z" fill="#141418"/><rect x="700" y="320" width="22" height="18" rx="3" fill="#2A2A30"/><circle cx="712" cy="300" r="7" fill="#9B59A8"/>
<rect x="780" y="80" width="120" height="130" fill="#E8B54E"/><text x="840" y="116" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="700" font-size="16" fill="#1E1E22">BATTLE</text><text x="840" y="136" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="700" font-size="12" fill="#1E1E22">OF THE BANDS</text><path d="M820 150 L840 176 L860 150" stroke="#B03A2E" stroke-width="4" fill="none"/><text x="840" y="200" text-anchor="middle" font-family="Rubik,sans-serif" font-size="9" fill="#1E1E22">PRIZE: STUDIO TIME</text>
<path d="M410 482 L432 482 L421 500Z" fill="#9B59A8"/>`},

/* ---- Westbrook: library ---- */
post:{start:150,floor:512,people:{hart:[330,488],devon:[640,488],ines:[930,488]},
hot:{post:[384,256,72,48],signin:[296,276,70,32],board:[496,86,208,128],window:[736,66,188,148],pc4:[812,270,86,62]},
stand:{post:420,signin:330,board:600,window:830,pc4:850},
bg:`<rect width="960" height="392" fill="#E9E2D0"/><rect y="392" width="960" height="148" fill="#5E7FA8"/><g fill="#5576A0">${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${i*120}" y="392" width="60" height="148"/>`).join("")}</g>
${shelf(20,80,240,312,5,61)}
<rect x="280" y="300" width="190" height="16" fill="#5A3A26"/><rect x="288" y="316" width="174" height="84" fill="#7A5434"/>
<rect x="300" y="284" width="60" height="18" fill="#F4F1E8" transform="rotate(-3 330 293)"/><g stroke="#9AA3AD" stroke-width="1.2"><line x1="306" y1="290" x2="352" y2="288"/><line x1="306" y1="296" x2="348" y2="294"/></g>
<rect x="388" y="262" width="64" height="40" rx="4" fill="#1E2A44"/><rect x="394" y="268" width="52" height="28" fill="#2E3E64"/><rect x="398" y="272" width="30" height="4" fill="#9FC3FF"/><rect x="398" y="280" width="42" height="7" fill="#E26A5B"/><rect x="398" y="290" width="24" height="3" fill="#9FC3FF"/>
<rect x="500" y="90" width="200" height="120" fill="#B08A52" stroke="#6A4A2E" stroke-width="4"/><rect x="510" y="100" width="88" height="100" fill="#2E4A7A"/><text x="554" y="126" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">VOTE DEVON</text><text x="554" y="146" text-anchor="middle" font-family="Rubik,sans-serif" font-size="8" fill="#E8B54E">I'LL GET ALOT DONE!</text><circle cx="554" cy="176" r="12" fill="#9C6B4A"/><rect x="606" y="104" width="86" height="92" fill="#E36A3A"/><text x="649" y="130" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">INES</text><text x="649" y="148" text-anchor="middle" font-family="Rubik,sans-serif" font-size="8" fill="#FFFFFF">RE-ELECT · PRESIDENT</text>
<rect x="740" y="70" width="180" height="140" fill="#FFFFFF"/><rect x="750" y="80" width="160" height="120" fill="#9FC9E8"/><rect x="750" y="150" width="160" height="50" fill="#7CB55A"/><ellipse cx="830" cy="170" rx="60" ry="16" fill="none" stroke="#C2512E" stroke-width="5"/><line x1="830" y1="80" x2="830" y2="200" stroke="#FFFFFF" stroke-width="5"/>
<rect x="500" y="332" width="440" height="14" fill="#8A643C"/><rect x="510" y="346" width="8" height="54" fill="#6A4A2E"/><rect x="922" y="346" width="8" height="54" fill="#6A4A2E"/>${[520,620,720,820].map((x,i)=>`<rect x="${x}" y="276" width="70" height="48" rx="3" fill="#1E1E22"/><rect x="${x+5}" y="281" width="60" height="36" fill="${i===3?"#2E3E64":"#3A4A5A"}"/><rect x="${x+30}" y="324" width="10" height="8" fill="#1E1E22"/><text x="${x+35}" y="304" text-anchor="middle" font-family="Rubik,sans-serif" font-size="12" font-weight="700" fill="#C9D6F2">#${i+1}</text>`).join("")}`},

/* ---- Westbrook: trophy hallway ---- */
trophy:{start:290,floor:512,people:{jordan:[110,486],sky:[620,486],reyes:[770,486]},
hot:{case:[326,106,238,234],locker:[198,174,56,210],board:[676,96,148,128],cart:[852,342,100,100]},
stand:{case:445,locker:225,board:750,cart:880},
bg:`<rect width="960" height="300" fill="#D9DCE2"/><rect y="300" width="960" height="92" fill="#2E4A7A"/><rect y="296" width="960" height="6" fill="#C9A229"/>
<defs><pattern id="htile" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#C9CDD4"/><rect width="30" height="30" fill="#B8BCC2"/><rect x="30" y="30" width="30" height="30" fill="#B8BCC2"/></pattern></defs><rect y="392" width="960" height="148" fill="url(#htile)"/>
<rect x="320" y="18" width="320" height="44" rx="4" fill="#C9A229"/><text x="480" y="49" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="700" font-size="24" fill="#1E2A44" letter-spacing="4">GO WOLVES</text>
${[0,1,2,3,4,5].map(i=>`<rect x="${20+i*46}" y="150" width="44" height="242" fill="${i%2?"#3E6AA8":"#4A76B4"}" stroke="#2E5A9E" stroke-width="2"/><g stroke="#2E5A9E" stroke-width="2"><line x1="${28+i*46}" y1="166" x2="${56+i*46}" y2="166"/><line x1="${28+i*46}" y1="172" x2="${56+i*46}" y2="172"/><line x1="${28+i*46}" y1="178" x2="${56+i*46}" y2="178"/></g><rect x="${52+i*46}" y="260" width="4" height="16" fill="#C9CFD6"/><text x="${42+i*46}" y="200" text-anchor="middle" font-family="Rubik,sans-serif" font-size="9" fill="#C9D6F2">${210+i}</text>`).join("")}<path d="M210 168 Q222 158 236 170 Q228 176 214 174Z" fill="#F4F8FC" opacity=".9"/>
<rect x="330" y="110" width="230" height="226" fill="#8A6A3A"/><rect x="340" y="120" width="210" height="206" fill="#CFE3EA"/><rect x="340" y="188" width="210" height="6" fill="#8A6A3A"/><rect x="340" y="258" width="210" height="6" fill="#8A6A3A"/>
<g fill="#E5C25A"><path d="M360 186 L360 160 Q370 150 380 160 L380 186Z"/><rect x="364" y="180" width="12" height="6"/><path d="M500 186 L500 150 Q514 136 528 150 L528 186Z"/><path d="M380 256 L380 226 Q392 214 404 226 L404 256Z"/><path d="M480 256 L480 236 Q488 228 496 236 L496 256Z"/></g><ellipse cx="445" cy="186" rx="26" ry="5" fill="#E9F4F8"/><path d="M342 122 L380 122 L346 160Z" fill="#FFFFFF" opacity=".35"/>
<rect x="596" y="280" width="54" height="80" fill="#B8BCC2"/><rect x="600" y="270" width="46" height="14" rx="4" fill="#8D959E"/>
<rect x="680" y="100" width="140" height="120" fill="#B08A52" stroke="#6A4A2E" stroke-width="4"/><rect x="692" y="112" width="60" height="44" fill="#FFFFFF"/><text x="722" y="128" text-anchor="middle" font-family="Rubik,sans-serif" font-size="7" font-weight="700" fill="#2E4A7A">YEARBOOK</text><text x="722" y="140" text-anchor="middle" font-family="Rubik,sans-serif" font-size="7" fill="#2E4A7A">ESPORTS 8:30</text><rect x="762" y="116" width="48" height="60" fill="#F2C45A"/><rect x="700" y="166" width="54" height="40" fill="#E36A3A"/>
<rect x="840" y="150" width="100" height="242" fill="#8A6A4A"/><rect x="860" y="170" width="60" height="70" fill="#CFE3EA"/><text x="890" y="264" text-anchor="middle" font-family="Rubik,sans-serif" font-size="11" fill="#F4F1E8">Rm 108</text>
<rect x="858" y="360" width="90" height="62" rx="4" fill="#8D959E"/><circle cx="872" cy="430" r="8" fill="#2A2A2E"/><circle cx="934" cy="430" r="8" fill="#2A2A2E"/><rect x="918" y="300" width="6" height="64" fill="#C9A24A"/><path d="M906 300 L936 300 L930 290 L912 290Z" fill="#7CB55A"/><circle cx="880" cy="370" r="7" fill="none" stroke="#C9A24A" stroke-width="2.5"/><rect x="872" y="384" width="30" height="24" fill="#F4F1E8"/>`}
});
/* ================= GENRES & CASES ================= */
const GENRES=[
{
  id:"junior", name:"Junior Casebook", place:"Harbor town, any day", font:"'Special Elite','Courier New',monospace",
  blurb:"Short, friendly mysteries for new detectives. Spot the clue, find who did it.",
  det:"wren_noir", examine:"Wren looks at", thumb:"lighthouse", minAge:8,
  retorts:["Hey! It wasn't me, Inspector!","Nope! Look at the clues again."],
  cases:[
{
  id:"cupcakes", scene:"till", minAge:8, no:"Case 01", title:"The Missing Cupcakes", meta:"Ages 8+ · find 1 clue",
  brief:"Hollis Bakery baked 12 pink cupcakes for a birthday party. Now there are only 9! Who took the other 3?",
  places:[
    {id:"till",name:"The till",text:"A note on the till: “Party order: 12 pink cupcakes.” The tray next to it only has 9."},
    {id:"drawer",name:"Till drawer",text:"Just coins and receipts. Nothing sticky here."},
    {id:"door",name:"Back door",text:"The back door is locked. Nobody came in from outside, so it was someone in the bakery.",clue:{id:"inside",t:"Locked door",d:"Nobody came in from outside."}},
    {id:"log",name:"Van log",text:"“Owen: back from deliveries at 3:30.” So Owen was here this afternoon after all.",clue:{id:"back",t:"Owen came back",d:"Owen was back at the bakery at 3:30."}},
    {id:"rota",name:"Staff board",text:"A sign: “Cupcakes frosted at 3:00 by Marta.”"}
  ],
  people:[
    {id:"marta",name:"Marta",role:"Baker",says:"I frosted them all pink at three, then I washed every bowl. My apron is spotless!",clue:{id:"martasays",t:"Marta's story",d:"Frosted at 3:00, then washed up."}},
    {id:"dev",name:"Dev",role:"Cashier",says:"I've been at the till all day. Look, my hands are clean!",clue:{id:"devsays",t:"Dev's story",d:"At the till all day, clean hands."}},
    {id:"owen",name:"Owen",role:"Driver",says:"Cupcakes? I wasn't even here! I was out driving all afternoon. (There's pink frosting on his sleeve.)",clue:{id:"sleeve",t:"Pink sleeve",d:"Owen has pink frosting on his sleeve."}}
  ],
  culprit:"owen", need:1, proof:["sleeve","back"],
  herrings:{inside:"Good thinking! It was someone inside. Now, who has frosting on them?",martasays:"Marta made the frosting, but her apron is clean. Who else has pink on them?",devsays:"Dev's hands are clean. Keep looking!"},
  hints:["The cupcakes have pink frosting. Look closely at everyone you talk to.","Someone says they weren't here. Is there anything that shows they were?"],
  wrap:"Owen took 3 cupcakes for his little brother's birthday. He said sorry and paid for them. The pink frosting on his sleeve gave him away!"
},
{
  id:"googly", scene:"gallery", minAge:8, no:"Case 02", title:"The Googly-Eyed Painting", meta:"Ages 8+ · find 1 clue",
  brief:"Someone stuck big googly eyes all over the gallery's famous painting! The glue is still wet. Who did the silly prank?",
  places:[
    {id:"painting",name:"The painting",text:"Twelve googly eyes stuck on the trees and the sun. The glue is still wet, so it just happened."},
    {id:"camera",name:"Camera",text:"The camera shows an empty room, then an arm in a white sleeve reaches in for a moment.",clue:{id:"white",t:"White sleeve",d:"The prankster wore a white sleeve."}},
    {id:"keypad",name:"Keypad",text:"Nobody used the keypad tonight."},
    {id:"breaker",name:"Breaker panel",text:"All the switches are on. Nothing to see here."},
    {id:"program",name:"Podium",text:"Tonight's helpers: Felix in a white jacket, Noor in a blue uniform, and Iris in a black dress.",clue:{id:"helpers",t:"Who wore what",d:"Felix: white. Noor: blue. Iris: black."}},
    {id:"van",name:"Caterer's van",text:"A half-empty bag of googly eyes, tucked under the napkins!",clue:{id:"bag",t:"Bag of googly eyes",d:"Googly eyes hidden in Felix's van."}}
  ],
  people:[
    {id:"iris",name:"Iris",role:"Curator",says:"Googly eyes on my painting? I'm horrified! I've been greeting guests at the door all night."},
    {id:"noor",name:"Noor",role:"Guard",says:"I walk my rounds every ten minutes. I didn't see anyone near the painting."},
    {id:"felix",name:"Felix",role:"Caterer",says:"Me? I've been busy with the snacks! Ha... ha. (He is trying very hard not to laugh.)",clue:{id:"giggle",t:"Felix giggles",d:"Felix can't stop smiling."}}
  ],
  culprit:"felix", need:1, proof:["bag","white"],
  herrings:{helpers:"That helps you match the sleeve to a person. Now, which clue shows the prank itself?",giggle:"Giggling isn't proof! Find something that shows what he did."},
  hints:["The camera caught part of the prankster. What color was their sleeve?","Where would someone hide a bag of googly eyes? Check the van."],
  wrap:"Felix wanted to make the guests laugh. He promised to carefully take off every googly eye. The bag in his van and his white sleeve solved it!"
},
{
  id:"lantern", scene:"lighthouse", minAge:8, no:"Case 03", title:"The Borrowed Lantern", meta:"Ages 8+ · find 1 clue",
  brief:"The lighthouse keeper's favorite lantern is gone from its hook! Someone took it after dark. Who borrowed it without asking?",
  places:[
    {id:"tide",name:"Tide sign",text:"Low tide tonight. Perfect for looking for crabs in the rock pools!",clue:{id:"crabs",t:"Crab night",d:"Low tide: good for finding crabs."}},
    {id:"stairs",name:"Lighthouse stairs",text:"Sandy footprints go up the stairs and back down again."},
    {id:"prints",name:"Footprints",text:"Big boot prints, and little round circles in the sand where a lantern was set down again and again."},
    {id:"rack",name:"Boot rack",text:"All the keeper's boots are here. Whoever came in wasn't the keeper."},
    {id:"pub",name:"The Anchor",text:"Cass and Edda had cocoa here all evening. The owner says they never left their table.",clue:{id:"cocoa",t:"Cocoa all evening",d:"Cass and Edda stayed at the Anchor."}},
    {id:"shed",name:"Bram's shed",text:"There's the keeper's lantern, sitting on a bucket full of crabs!",clue:{id:"found",t:"Lantern in the shed",d:"The lantern is in Bram's shed, next to his crabs."}}
  ],
  people:[
    {id:"cass",name:"Cass",role:"Keeper's helper",says:"Edda and I had cocoa at the Anchor all evening. It was lovely!"},
    {id:"bram",name:"Bram",role:"Fisherman",says:"Lantern? Haven't seen it. I was asleep on my boat all night.",clue:{id:"bramsays",t:"Bram's story",d:"Says he slept on his boat all night."}},
    {id:"edda",name:"Edda",role:"Harbor clerk",says:"I saw a light bobbing down by the rock pools after dark. Someone was hunting for something!"}
  ],
  culprit:"bram", need:1, proof:["found"],
  herrings:{crabs:"That's a good reason to want a lantern. Now find the lantern itself!",cocoa:"That shows Cass and Edda didn't do it. Who's left?",bramsays:"That's what Bram says. Is there anything that shows otherwise?"},
  hints:["Someone went looking for crabs in the dark. Who likes catching crabs?","Check the shed by the water."],
  wrap:"Bram borrowed the lantern to catch crabs at low tide. He brought it back, said sorry to the keeper, and shared his crabs. Always ask first!"
}]},

{
  id:"noir", name:"Classic Noir", place:"Harbor town, 1948", font:"'Special Elite','Courier New',monospace",
  blurb:"Rain on the windows, alibis that don't add up, and a detective in a trench coat.",
  det:"wren_noir", examine:"Wren examines", thumb:"till", minAge:10,
  retorts:["That's absurd, Inspector. You've got nothing on me.","Is that all you've got? My lawyer will love this."],
  cases:[
{
  id:"till", minAge:10, no:"Case 01", title:"The Empty Till", meta:"Rookie · prove it with 1 clue",
  brief:"Hollis Bakery closed at 6:00 pm with $412 in the till. When the owner opened at 4:00 am, the drawer was empty and the back door was locked.",
  places:[
    {id:"till",name:"The till",text:"Dev's closing slip is taped inside the lid: “Counted $412 at 6:05 pm.” Signed and dated.",clue:{id:"slip",t:"Closing slip",d:"The till held $412 at 6:05 pm."}},
    {id:"drawer",name:"Till drawer",text:"A dark smudge of grease along the drawer's edge. Not flour. Not butter.",clue:{id:"grease",t:"Grease smudge",d:"Dark grease on the edge of the till drawer."}},
    {id:"door",name:"Back door",text:"No scratches or pry marks on the lock. Whoever came in had a key, and only staff carry keys.",clue:{id:"keys",t:"Unforced lock",d:"The back door was opened with a staff key."}},
    {id:"log",name:"Van log",text:"The clipboard by the loading bay reads: “Van 2 (Owen) — checked in 6:40 pm.”",clue:{id:"vanlog",t:"Van check-in",d:"Owen's van came back to the bakery at 6:40 pm."}},
    {id:"rota",name:"Staff rota",text:"Marta: 4 am to noon. Dev: noon to close. Owen: deliveries, 1 pm to 5 pm."}
  ],
  people:[
    {id:"marta",name:"Marta",role:"Baker",says:"I left at noon and spent the evening at my sister's. She'll tell you."},
    {id:"dev",name:"Dev",role:"Cashier",says:"I counted the till at 6:05 and locked up at 6:15. Every dollar was there.",clue:{id:"devsays",t:"Dev's account",d:"Counted at 6:05, locked up at 6:15."}},
    {id:"owen",name:"Owen",role:"Delivery driver",says:"Last drop was done by five. I went straight home after that.",clue:{id:"owensays",t:"Owen's account",d:"Says he went straight home after 5 pm."}}
  ],
  culprit:"owen", need:1, proof:["vanlog"],
  herrings:{grease:"Grease points at someone who works on vans, but a smudge won't convince a judge. What puts Owen at the bakery after the till was counted?",owensays:"That's Owen's story, not evidence against him. What contradicts it?",keys:"All three staff have keys. This doesn't narrow it down.",slip:"The slip tells you the money was still there at 6:05. Now, who came back to the bakery after that?",devsays:"Dev's account sets the timeline, but it doesn't point at anyone. Who was at the bakery after he locked up?"},
  hints:["Two people say they left before closing. Can you check either story against something written down?","Owen says he went straight home after five. The bakery keeps a record of when the vans come back."],
  wrap:"Owen came back to drop off the van, used his key, and emptied the till. The van log put him at the bakery 35 minutes after Dev counted the money, and well after he claimed he'd gone home."
},
{
  id:"gallery", minAge:10, no:"Case 02", title:"The Gallery Swap", meta:"Detective · prove it with 2 clues",
  brief:"During the Calder Gallery's evening reception, someone replaced a small oil landscape with a forgery. The east wing camera went dark for fifteen minutes.",
  places:[
    {id:"painting",name:"The forgery",text:"Press a fingernail to the corner: the paint is still faintly tacky. This copy was finished within the last day or two.",clue:{id:"tacky",t:"Tacky paint",d:"The forgery was painted very recently."}},
    {id:"camera",name:"East wing camera",text:"The recording stops at 8:10 pm and resumes at 8:25 pm. Fifteen minutes of nothing.",clue:{id:"gap",t:"Camera gap",d:"East wing camera off from 8:10 to 8:25 pm."}},
    {id:"keypad",name:"Control room keypad",text:"The keypad log shows the east camera was switched off manually at 8:10 pm with code IR-07, then switched back on at 8:25 pm with the same code. A sheet beside it lists IR-07 as Iris Vale.",clue:{id:"code",t:"Keypad log",d:"Camera switched off at 8:10 pm with Iris's code, IR-07."}},
    {id:"breaker",name:"Breaker panel",text:"The building's power log shows no interruptions all evening.",clue:{id:"power",t:"Power log",d:"No power cuts during the reception."}},
    {id:"program",name:"Podium",text:"The printed program on the podium: “8:00 pm — Welcome remarks from Curator Iris Vale (30 min).” The microphone's switch is stuck halfway."},
    {id:"van",name:"Caterer's van",text:"Stacks of padded moving blankets. Felix says he uses them to protect chafing dishes. They smell of garlic.",clue:{id:"blankets",t:"Padded blankets",d:"Moving blankets in the caterer's van."}}
  ],
  people:[
    {id:"iris",name:"Iris",role:"Curator",says:"I was at the podium giving my remarks from 8:00 to 8:30. Two hundred people watched me.",clue:{id:"irissays",t:"Iris's alibi",d:"Says she spoke from 8:00 to 8:30 pm."}},
    {id:"noor",name:"Noor",role:"Security guard",says:"There must have been a power flicker. I was walking the west wing and didn't see the monitors go out.",clue:{id:"noorsays",t:"Noor's account",d:"Blamed a power flicker; was in the west wing."}},
    {id:"felix",name:"Felix",role:"Caterer",says:"The speech? It ended early. Her microphone died around 8:05, so she cut it short and slipped out. I put the canapés out early because of it.",clue:{id:"felixsays",t:"Felix's account",d:"The speech ended around 8:05 pm when the mic failed."}}
  ],
  culprit:"iris", need:2, proof:["code","felixsays"],
  herrings:{power:"The power log proves Noor guessed wrong about a flicker. Guessing wrong isn't a crime.",noorsays:"Noor's explanation is mistaken, but she never touched the keypad.",blankets:"A caterer with padded blankets is ordinary. Felix has no code for the cameras.",tacky:"It tells you the swap was planned, not who did it.",gap:"You know when it happened. Now: who switched the camera off, and could they have been there?",irissays:"That's the alibi you need to break, not the proof."},
  hints:["Cameras don't switch themselves off. Somewhere the building recorded who did it.","The curator has an alibi with two hundred witnesses. Did anyone notice the speech run differently than planned?"],
  wrap:"Iris switched off the camera with her own code and made the swap during the gap. Her alibi depended on a 30-minute speech, but Felix saw it end at 8:05 when the microphone failed, which left her free when the camera went dark."
},
{
  id:"lighthouse", minAge:10, no:"Case 03", title:"The Kell Island Strongbox", meta:"Inspector · prove it with 2 clues",
  brief:"The harbor fund strongbox vanished from Kell Island lighthouse on Tuesday night. The keeper locked it in at 9:00 pm and found it gone at 6:00 am. The island can be reached on foot across the causeway at low tide, or by boat at high tide.",
  places:[
    {id:"tide",name:"Tide table",text:"Tuesday: low tide 10:15 pm. The causeway is walkable from 9:30 to 11:00 pm. High tide 4:20 am. At low tide the bay drains to mudflats.",clue:{id:"tides",t:"Tide table",d:"Causeway open 9:30–11:00 pm. Bay is mudflat at low tide."}},
    {id:"stairs",name:"Lighthouse stairs",text:"Wet sand and strands of wrack on the bottom steps. Whoever came in walked across the causeway.",clue:{id:"sand",t:"Sand on the stairs",d:"The thief arrived on foot by the causeway."}},
    {id:"prints",name:"Causeway footprints",text:"One set of prints in the firm sand, heading to the island and back. Small boots, about a women's size 6, with a chevron tread.",clue:{id:"prints",t:"Small boot prints",d:"Size 6 chevron-tread boots, to the island and back."}},
    {id:"rack",name:"Keeper's boot rack",text:"Each peg is labelled. Cass's peg is empty; her spare size 6 chevron boots are missing. Abel's size 11s are still there.",clue:{id:"boots",t:"Missing boots",d:"Cass's spare size 6 chevron boots are gone from the rack."}},
    {id:"pub",name:"The Anchor pub",text:"The landlord shows you Tuesday's tabs. Cass's was settled at 9:20 pm.",clue:{id:"tab",t:"Pub tab",d:"Cass paid her tab and left the Anchor at 9:20 pm."}},
    {id:"shed",name:"Bram's shed",text:"An oyster rake caked in fresh grey mud. The flats have been closed to harvesting since August.",clue:{id:"rake",t:"Muddy oyster rake",d:"Bram was on the closed oyster flats recently."}}
  ],
  people:[
    {id:"bram",name:"Bram",role:"Fisherman",says:"I rowed out around ten to check my pots off the island. Never landed. Rowed straight back.",clue:{id:"bramsays",t:"Bram's account",d:"Says he rowed near the island around 10 pm."}},
    {id:"cass",name:"Cass",role:"Keeper's assistant",says:"I was at the Anchor on the mainland until closing at eleven. Ask anyone.",clue:{id:"casssays",t:"Cass's alibi",d:"Says she was at the Anchor until 11 pm."}},
    {id:"edda",name:"Edda",role:"Harbor clerk",says:"I walked home on the shore road about half ten. There was a lantern out on the causeway, moving toward the island. Couldn't see who.",clue:{id:"lantern",t:"Lantern on the causeway",d:"Someone crossed toward the island around 10:30 pm."}}
  ],
  culprit:"cass", need:2, proof:["tab","prints","boots"],
  herrings:{bramsays:"Bram lied: nobody rows across a mudflat at 10 pm. But the oyster rake explains the lie. He was poaching on the flats, not robbing the lighthouse.",rake:"This explains Bram's lie. It doesn't tie him to the strongbox, and his feet are far bigger than the prints.",tides:"The tide table tells you how the thief got there. It doesn't say who.",sand:"Good, the thief walked. Now who walked?",lantern:"Edda confirms someone crossed, but couldn't see who.",casssays:"That's the alibi to break, not the proof."},
  hints:["Someone's story doesn't fit the tide. Find out why they'd lie before you accuse them. A liar isn't always a thief.","The prints are small. Check who in this case owns boots that size, and whether her alibi actually holds until eleven."],
  wrap:"Cass left the Anchor at 9:20 pm, not at closing, and took her spare boots from the lighthouse rack to cross the causeway at low tide. Bram's lie was a distraction: he was poaching oysters on the flats that night, which is a different problem for a different day."
}]},

{
  id:"manor", name:"Victorian Manor", place:"Ashcombe Hall, 1891", font:"'IM Fell English',Georgia,serif",
  blurb:"Gaslight, servants' bells and a family with too many secrets. Inspector Wren is summoned to the Hall.",
  det:"wren_manor", examine:"Wren examines", thumb:"tea", minAge:12,
  retorts:["How dare you, Inspector! In this house?","You'll regret this impertinence, sir."],
  cases:[
{
  id:"tea", minAge:12, no:"Case 01", title:"The Bitter Tea", meta:"Rookie · prove it with 1 clue",
  brief:"Lady Ashcombe fell violently ill after her four o'clock tea and complained it tasted bitter. The doctor says foxglove. She will recover, but someone in the house meant her harm.",
  places:[
    {id:"teacup",name:"The teacup",text:"Bitter dregs at the bottom of Lady Ashcombe's cup, and a crushed purple petal stuck to the rim. The pot itself smells only of tea.",clue:{id:"petal",t:"Foxglove in the cup",d:"The poison went into her cup, not the pot."}},
    {id:"tray",name:"Tea tray",text:"A card in Mrs. Pell's hand: “Tea brewed 3:45.” The sugar bowl and milk are untouched by anything but sugar and milk."},
    {id:"window",name:"Garden window",text:"In the bed below, two foxglove stems have been freshly snapped. The cut ends are still green and wet.",clue:{id:"stems",t:"Snapped foxgloves",d:"Foxglove was picked from the garden today."}},
    {id:"basket",name:"Hall basket",text:"A pair of ladies' gardening gloves, embroidered “E.H.”, with fresh soil in the fingers and purple stains on the palms.",clue:{id:"gloves",t:"Stained gloves",d:"Gloves marked E.H., purple-stained, with fresh soil."}},
    {id:"bells",name:"Bell board",text:"The drawing room bell rang at 3:50 for tea. Nothing unusual."}
  ],
  people:[
    {id:"pell",name:"Mrs. Pell",role:"Cook",says:"I brewed it at a quarter to four in the same pot as always, and I tasted it myself. There was nothing wrong with my tea.",clue:{id:"pellsays",t:"Mrs. Pell's account",d:"Brewed at 3:45 and tasted it herself."}},
    {id:"thomas",name:"Thomas",role:"Footman",says:"I carried the tray up and set it down. Miss Hale said she'd pour for her ladyship herself, so I went back downstairs.",clue:{id:"thomassays",t:"Thomas's account",d:"Says Miss Hale insisted on pouring."}},
    {id:"hale",name:"Miss Hale",role:"Companion",says:"I haven't set foot in the garden for a week, Inspector. My hay fever simply won't allow it.",clue:{id:"halesays",t:"Miss Hale's account",d:"Says she hasn't been in the garden for a week."}}
  ],
  culprit:"hale", need:1, proof:["gloves"],
  herrings:{petal:"It tells you how she was poisoned, not who did it.",stems:"Anyone could reach that flowerbed. Who handled the plant?",thomassays:"It puts the teapot in her hands, but it's the footman's word against hers. Find something that can't argue back.",halesays:"That's her story. What contradicts it?",pellsays:"The cook's tea was fine. The poison went in afterwards."},
  hints:["The poison was in the cup, not the pot. Who was near the cup, and who handled the plant?","Someone says they haven't been in the garden. Is there anything in the house that remembers the garden?"],
  wrap:"Miss Edith Hale picked the foxglove in her own gloves, sent the footman away, and slipped the leaves into Lady Ashcombe's cup as she poured. Her hay-fever story fell apart the moment her stained gloves turned up in the hall basket."
},
{
  id:"will", minAge:12, no:"Case 02", title:"The Missing Will", meta:"Detective · prove it with 2 clues",
  brief:"Old Mr. Ashcombe signed a new will on Monday leaving the estate to the village hospital. He died peacefully that night. By morning the new will was gone from his locked desk, and the old one names his nephew Rupert as sole heir.",
  places:[
    {id:"drawer",name:"Desk drawer",text:"The lock is unscratched. It was opened with one of its two keys: one lives on Mr. Ashcombe's watch chain, the other with his solicitor, Mr. Greaves.",clue:{id:"lock",t:"Unforced drawer",d:"Opened with one of two keys: the master's or Mr. Greaves's."}},
    {id:"diary",name:"Appointment diary",text:"Monday: “Greaves, 9 pm. Sign the new will.” The ink is firm and the hand is steady.",clue:{id:"appt",t:"Monday appointment",d:"Mr. Greaves came at 9 pm to witness the new will."}},
    {id:"watch",name:"Watch chain",text:"Mr. Ashcombe's watch and chain lie on the desk where the doctor left them. His drawer key is still on the chain, and it has dust in its teeth.",clue:{id:"watchkey",t:"Master's key unused",d:"Mr. Ashcombe's own key hasn't been used. That leaves Greaves's."}},
    {id:"fireplace",name:"Fireplace",text:"Among the ashes, scraps of heavy blue legal paper. One fragment still reads “…to St. Bartholomew's Hospital…”",clue:{id:"ashes",t:"Burned will",d:"The new will was burned in the study fire."}},
    {id:"case",name:"Mr. Greaves's case",text:"Inside his leather case, tucked behind the deeds: a receipt for £500, paid by Rupert Ashcombe last Friday, marked “for services.”",clue:{id:"receipt",t:"£500 receipt",d:"Rupert paid Mr. Greaves £500 last Friday."}}
  ],
  people:[
    {id:"rupert",name:"Rupert",role:"Nephew",says:"Uncle and I had patched things up. I didn't even know there was a new will until this morning.",clue:{id:"rupertsays",t:"Rupert's account",d:"Claims he knew nothing of a new will."}},
    {id:"agnes",name:"Agnes",role:"Housemaid",says:"Mr. Greaves rang for me at ten and asked me to light the study fire. Odd, sir, it was a warm night. He waited in there till it caught.",clue:{id:"agnessays",t:"Agnes's account",d:"Mr. Greaves had her light the study fire at 10 pm."}},
    {id:"greaves",name:"Mr. Greaves",role:"Solicitor",says:"I witnessed the will, left at half past nine, and never came back. My key never left my waistcoat.",clue:{id:"greavessays",t:"Mr. Greaves's account",d:"Says he left at 9:30 and never returned."}}
  ],
  culprit:"greaves", need:2, proof:["agnessays","receipt","watchkey"],
  herrings:{rupertsays:"Rupert is lying about something, but he never had a key to that drawer.",ashes:"You know what happened to the will. Who could open the drawer and use that fire?",lock:"Good, only two keys. Now which one was used?",appt:"That's when the will was signed, not when it was taken.",greavessays:"That's the alibi you need to break, not the proof."},
  hints:["The drawer wasn't forced. Of its two keys, which one hasn't been touched?","Someone says they left at half past nine. Ask the servants who was still in the study at ten."],
  wrap:"Mr. Greaves came back to the study at ten, opened the drawer with his own key, and fed the new will to a fire he'd ordered on a warm night. Rupert's £500 paid for the job. Both will be answering to a magistrate."
},
{
  id:"brooch", minAge:12, no:"Case 03", title:"The Storm Sapphire", meta:"Inspector · prove it with 2 clues",
  brief:"During the midsummer ball a thunderstorm blew out the music room lamps at 11:40. When they were relit, the Ashcombe sapphire brooch was gone from its case on the piano. The music room door was in plain view of the ballroom the whole time.",
  places:[
    {id:"clock",name:"Mantel clock",text:"The clock stopped at 11:40, when the lightning struck the chimney. The lamps went out at the same moment.",clue:{id:"stopped",t:"Stopped clock",d:"The storm blew out the lamps at 11:40."}},
    {id:"bellpull",name:"Bell-pull",text:"Its tassel is torn off and lies by the hearth. Downstairs, the bell board shows the music room rang at 11:45: someone was in here in the dark and stumbled against it.",clue:{id:"bell",t:"Bell at 11:45",d:"Someone was inside the dark music room at 11:45."}},
    {id:"scorecard",name:"Billiards card",text:"A billiards score card, left on the piano: Colonel Marsh against Hobbs, frame after frame, the last entry marked 11:58.",clue:{id:"score",t:"Billiards card",d:"The Colonel and Hobbs played billiards until 11:58."}},
    {id:"bench",name:"Piano bench",text:"A lady's handkerchief lies on the bench, scented strongly with lavender water.",clue:{id:"kerchief",t:"Lavender handkerchief",d:"A lavender-scented handkerchief on the piano bench."}},
    {id:"bookcase",name:"Bookcase",text:"It swings outward on a hinge: a servants' passage leading up to the guest bedrooms. On a nail just inside hangs a small pearl cuff button.",clue:{id:"button",t:"Pearl button",d:"A pearl cuff button snagged inside the secret passage."}},
    {id:"ashtray",name:"Ash stand",text:"Fresh cigar ash and a half-smoked cigar. The Colonel's brand.",clue:{id:"cigar",t:"Cigar ash",d:"The Colonel smoked by the music room door tonight."}}
  ],
  people:[
    {id:"colonel",name:"Colonel Marsh",role:"Guest",says:"I stepped by for a smoke at eleven, then spent the rest of the night at billiards with Hobbs. Beat him soundly, too.",clue:{id:"colonelsays",t:"The Colonel's account",d:"Smoked here at eleven, then billiards until midnight."}},
    {id:"hobbs",name:"Hobbs",role:"Butler",says:"The Colonel and I played until nearly midnight, sir. I never left the billiard room until the lamps were relit.",clue:{id:"hobbssays",t:"Hobbs's account",d:"Played billiards with the Colonel until nearly midnight."}},
    {id:"vera",name:"Lady Vera",role:"Guest",says:"I retired at half past eleven with a dreadful headache and didn't stir till morning. I wear lavender water every day; half the county knows it.",clue:{id:"verasays",t:"Lady Vera's account",d:"Retired at 11:30. Wears lavender water. One pearl cuff button is missing."}}
  ],
  culprit:"vera", need:2, proof:["button","verasays","kerchief"],
  herrings:{cigar:"The Colonel smoked here at eleven, but the billiards card accounts for him at 11:45.",colonelsays:"The billiards card backs up his story.",score:"This clears the Colonel and Hobbs. Who isn't accounted for?",stopped:"You know when the dark began. Who was moving around in it?",bell:"Someone was in the room at 11:45. How did they get in without using the door?",hobbssays:"The butler's alibi holds."},
  hints:["The door was watched the whole time. Is there another way into the music room?","Two men have an alibi on paper. The third guest says she was upstairs. What connects upstairs to this room, and what did she leave behind?"],
  wrap:"Lady Vera went up at 11:30, came down through the servants' passage behind the bookcase when the storm blew the lamps out, and lifted the brooch in the dark. She knocked the bell-pull on her way, dropped her handkerchief, and snagged a cuff button on the passage door."
}]},

{
  id:"fantasy", name:"Fantasy Kingdom", place:"The Kingdom of Thornvale", font:"'Cinzel',Georgia,serif",
  blurb:"Enchanted locks, a stolen royal seal and a court wizard with a very convenient alibi.",
  det:"wren_fantasy", examine:"Wren examines", thumb:"seal", minAge:10,
  retorts:["By the crown, you wrong me, Investigator!","Bring me before the queen, then. You'll see."],
  cases:[
{
  id:"seal", minAge:10, no:"Case 01", title:"The Stolen Seal", meta:"Rookie · prove it with 1 clue",
  brief:"The Royal Seal of Thornvale has vanished from the chancellor's tower. With it, anyone could forge the queen's commands. The tower door is guarded day and night.",
  places:[
    {id:"tapestry",name:"Tapestry map",text:"A woven map of Thornvale. From this tower you can see straight across the courtyard into the scriptorium windows."},
    {id:"window",name:"Arched window",text:"Ivy hangs torn beside the window. But the flowerbed beneath is smooth and undisturbed, and last night's storm tore ivy all along this wall.",clue:{id:"ivy",t:"Torn ivy",d:"Torn ivy by the window, but no marks in the flowerbed."}},
    {id:"sealbox",name:"Seal box",text:"The velvet-lined box lies open and empty. The clasp was undone carefully, not broken.",clue:{id:"empty",t:"Empty seal box",d:"Opened carefully, by someone who wasn't rushed."}},
    {id:"wax",name:"Green wax",text:"Drips of green wax on the desk. Royal wax is red; green candles are used only in the scriptorium.",clue:{id:"wax",t:"Green wax drips",d:"Scriptorium wax on the chancellor's desk."}},
    {id:"ledger",name:"Guard's ledger",text:"Sir Garran's ledger: “Third bell — Brother Aldo, to deliver copied scrolls. Left at fourth bell.” No one else is listed all day.",clue:{id:"guardlog",t:"Guard's ledger",d:"Brother Aldo entered at the third bell and left at the fourth."}}
  ],
  people:[
    {id:"aldo",name:"Brother Aldo",role:"Royal scribe",says:"I spent the whole day at my copying desk in the scriptorium. I never set foot in the tower.",clue:{id:"aldosays",t:"Brother Aldo's account",d:"Says he never left the scriptorium all day."}},
    {id:"garran",name:"Sir Garran",role:"Tower guard",says:"Nobody passes my door without going in the ledger. Nobody.",clue:{id:"garransays",t:"Sir Garran's account",d:"Everyone who enters is written in the ledger."}},
    {id:"mira",name:"Mira",role:"Squire",says:"All right, I climbed that wall once for a dare. Last summer! I've been at the stables all day.",clue:{id:"mirasays",t:"Mira's account",d:"Climbed the wall once, last summer."}}
  ],
  culprit:"aldo", need:1, proof:["guardlog"],
  herrings:{ivy:"The storm tore that ivy, and nobody landed in the flowerbed. No one climbed in.",mirasays:"A dare last summer isn't a theft today.",wax:"Suggestive, but anyone can carry a candle. What proves Aldo was in the room?",empty:"It tells you the thief had time, not who it was.",aldosays:"That's his story. What contradicts it?",garransays:"Sir Garran says everyone is written down. So read what he wrote. Who does the ledger name?"},
  hints:["The window looks tempting, but check the ground beneath it before you believe anyone climbed in.","The guard writes down everyone who passes. Does anyone's story disagree with his ledger?"],
  wrap:"Brother Aldo came up at the third bell with a bundle of scrolls and left with the Royal Seal tucked among them, meaning to forge a grant of land for his abbey. Sir Garran's ledger caught him in his lie."
},
{
  id:"lute", minAge:10, no:"Case 02", title:"The Silent Lute", meta:"Detective · prove it with 2 clues",
  brief:"Old Fennick, the most famous bard in Thornvale, owns an enchanted lute that sings out loud whenever a stranger touches it. Last night it vanished from above the hearth at the Crooked Kettle inn, and nobody heard a single note.",
  places:[
    {id:"hook",name:"Hearth hook",text:"The empty hook where Fennick's lute hung. The soot on the wall shows its outline clearly.",clue:{id:"hung",t:"Empty hook",d:"The lute hung above the hearth all evening."}},
    {id:"lore",name:"Book of lore",text:"“Enchanted instruments cry out at a stranger's touch, save when they are handled in cold iron, which deadens all such charms.”",clue:{id:"lore",t:"Iron silences charms",d:"An enchanted lute stays silent if handled in iron."}},
    {id:"window",name:"Window",text:"Latched from the inside, with dust undisturbed on the sill. Nobody came or went this way."},
    {id:"lutecase",name:"Lute case",text:"Fennick's open case on the bench. Caught in the red velvet: fine grey filings of iron.",clue:{id:"filings",t:"Iron filings",d:"Iron filings in the velvet of the lute case."}},
    {id:"slip",name:"Smithy slip",text:"A slip under a tankard on the bar: “One pair iron gauntlets lent to L. — return by Sunday. Corvin, smith.”",clue:{id:"slip",t:"Gauntlet slip",d:"Corvin lent iron gauntlets to someone called “L.”"}}
  ],
  people:[
    {id:"corvin",name:"Corvin",role:"Blacksmith",says:"Aye, I lent a pair of gauntlets this week. Wrote it on a slip and left it here at the bar for the borrower.",clue:{id:"corvinsays",t:"Corvin's account",d:"Lent gauntlets this week; left the slip at the bar."}},
    {id:"lisel",name:"Lisel",role:"Bard",says:"Iron gloves? I'm a musician, Investigator. I've never worn iron in my life, and I'd never touch Fennick's lute.",clue:{id:"liselsays",t:"Lisel's account",d:"Says she has never worn iron."}},
    {id:"tamsin",name:"Tamsin",role:"Innkeeper",says:"The lute hung over the hearth all night. Not a note out of it, and I'd have heard. I sleep right above the bar.",clue:{id:"silence",t:"Tamsin's account",d:"The lute made no sound all night."}}
  ],
  culprit:"lisel", need:2, proof:["slip","filings"],
  herrings:{lore:"Now you know how it was done. Who had iron gloves, and were they used?",silence:"The silence is the puzzle, not the proof.",corvinsays:"Corvin only lent the gauntlets. Who borrowed them?",hung:"You know where it was. Now, who could lift it quietly?",liselsays:"That's her denial. What contradicts it?"},
  hints:["An enchanted lute should have sung out. Find out what would keep it quiet.","Iron silences charms. Who borrowed iron, and is there proof it touched the lute?"],
  wrap:"Lisel borrowed Corvin's iron gauntlets, lifted the lute in silence after closing, and left a trail of iron filings in its velvet case. Jealousy of Old Fennick's music did the rest."
},
{
  id:"sunstone", minAge:10, no:"Case 03", title:"The Shattered Sunstone", meta:"Inspector · prove it with 2 clues",
  brief:"During the eclipse banquet, the Sunstone that lights Thornvale's winter vanished from Court Wizard Malric's tower. Malric swears he sat at the queen's table the entire time and demands the culprit be found.",
  places:[
    {id:"telescope",name:"Telescope",text:"Aimed at the eclipse. A note on the eyepiece: “Totality at the ninth bell.”",clue:{id:"eclipse",t:"Eclipse at ninth bell",d:"The eclipse peaked at the ninth bell."}},
    {id:"pedestal",name:"Pedestal",text:"Glittering amber shards lie in the cracks around the pedestal. The Sunstone wasn't stolen at all. It was dropped and shattered.",clue:{id:"shards",t:"Sunstone shards",d:"The stone was shattered here, then the theft was staged."}},
    {id:"hourglass",name:"Warding hourglass",text:"The ward on the tower door answers only to Malric's own rune, and its glass turns each time the door opens. Tonight it turned once, at the ninth bell.",clue:{id:"ward",t:"Ward opened at ninth bell",d:"Only Malric's rune opens the ward. It opened once, during the eclipse."}},
    {id:"chart",name:"Star chart",text:"Malric's star chart. The eclipse is circled in red, with a note in his hand: “Ninth bell — everyone will be at table.”",clue:{id:"note",t:"Malric's note",d:"Malric noted that everyone would be at the banquet at the ninth bell."}},
    {id:"satchel",name:"Apprentice's satchel",text:"Odette's satchel holds bundles of moonwort and a receipt from the village herbalist stamped at the ninth bell.",clue:{id:"receipt",t:"Herbalist receipt",d:"Odette was in the village at the ninth bell."}}
  ],
  people:[
    {id:"malric",name:"Malric",role:"Court wizard",says:"I sat at Her Majesty's table through the entire eclipse. Some thief has robbed the kingdom, and you waste time questioning me?",clue:{id:"malricsays",t:"Malric's alibi",d:"Says he sat at the banquet through the whole eclipse."}},
    {id:"odette",name:"Odette",role:"Apprentice",says:"Master sent me down to the village for moonwort before the banquet. I didn't get back until the tenth bell.",clue:{id:"odettesays",t:"Odette's account",d:"Sent to the village; back at the tenth bell."}},
    {id:"brannoc",name:"Brannoc",role:"Castle cook",says:"The wizard's eclipse soup came back to my kitchen untouched. He slipped out just as the sky went dark, and came back looking pale.",clue:{id:"brannocsays",t:"Brannoc's account",d:"Malric left the banquet as the eclipse began."}}
  ],
  culprit:"malric", need:2, proof:["ward","brannocsays","note"],
  herrings:{receipt:"Odette was in the village at the ninth bell. The herbalist's stamp proves it.",odettesays:"Her receipt backs her up.",shards:"The stone was broken, not stolen. Who would need to hide that?",eclipse:"You know when it happened. Who was free at the ninth bell?",malricsays:"That's the alibi you need to break, not the proof."},
  hints:["Look closely at the pedestal. Was the Sunstone really stolen?","Only one rune opens the tower door. And the kitchen knows who ate their soup."],
  wrap:"Malric dropped the Sunstone during his own experiments and shattered it. Afraid of the queen's anger, he slipped away from the banquet during the eclipse, opened his own ward, and staged a theft. His rune and his untouched soup gave him away."
}]}
];
const GENRE=Object.fromEntries(GENRES.map(g=>[g.id,g]));
/* ================= AGE-MATCHED WORLDS ================= */
const KID_RETORTS=["It wasn't me! Look at the clues again.","Hmm, that clue doesn't prove it. Try another one!"];
GENRES.push(
{
  id:"maple", name:"Maple Street School", place:"Room 3B and beyond", font:"'Baloo 2','Comic Sans MS',sans-serif",
  blurb:"A class hamster on the loose, a mixed-up science fair and a missing treasure map. Mysteries from your own world.",
  det:"pip", hero:"Pip", examine:"Pip looks at", thumb:"nibbles", minAge:8, fit:[8,10], retorts:KID_RETORTS,
  cases:[
{
  id:"nibbles", minAge:8, no:"Case 01", title:"Where's Nibbles?", meta:"Ages 8+ · find 1 clue",
  brief:"Nibbles, the Room 3B hamster, isn't in his cage! The cage door is open. Who left it open, and where did Nibbles go?",
  places:[
    {id:"cage",name:"Hamster cage",text:"The cage door is wide open and the latch is up. There's a sunflower seed on the edge.",clue:{id:"latch",t:"Open latch",d:"Someone opened the cage and didn't close it."}},
    {id:"chart",name:"Helper chart",text:"Hamster Helpers. Monday: Lily. Tuesday: Theo. Today is Tuesday, and Theo's name has a sticker: “Fed at recess!”",clue:{id:"chart",t:"Hamster Helper chart",d:"Theo fed Nibbles at recess today."}},
    {id:"window",name:"Window",text:"Closed and locked. Nibbles didn't go outside."},
    {id:"cubbies",name:"Cubbies",text:"Lily's cubby has a drawing of Nibbles with lots of hearts around him.",clue:{id:"drawing",t:"Nibbles drawing",d:"Lily drew a picture of Nibbles."}},
    {id:"beanbag",name:"Reading nook",text:"Shh! Nibbles is curled up asleep in the beanbag, next to a little pile of sunflower seeds. He's safe!",clue:{id:"found",t:"Nibbles is safe",d:"He followed a seed trail to the beanbag."}},
    {id:"board",name:"Whiteboard",text:"Tuesday. Recess 10:30. Lunch 12:00."}
  ],
  people:[
    {id:"okafor",name:"Ms. Okafor",role:"Teacher",says:"I lock our classroom at lunch. Only our class has been in here today.",clue:{id:"onlyclass",t:"Only our class",d:"Nobody else came into the room."}},
    {id:"theo",name:"Theo",role:"Classmate",says:"I fed Nibbles at recess. I closed the cage... I'm pretty sure I did.",clue:{id:"theosays",t:"Theo's story",d:"Fed Nibbles at recess, thinks he closed the cage."}},
    {id:"lily",name:"Lily",role:"Classmate",says:"I love Nibbles! I drew him in art. But it's Theo's turn to feed him this week."}
  ],
  culprit:"theo", need:1, proof:["chart"],
  herrings:{latch:"That shows how Nibbles got out. Who opened the cage last?",drawing:"Lily loves Nibbles, but drawing him isn't proof!",onlyclass:"Good, it was someone in the class. Who opened the cage today?",found:"Hooray, Nibbles is safe! Now, who left the cage open?",theosays:"That's what Theo remembers. Is anything written down?"},
  hints:["Who was the last person to open the cage today?","Check the chart on the wall."],
  wrap:"Theo fed Nibbles at recess and forgot to click the latch shut. Nibbles followed a trail of seeds to the comfy beanbag and fell asleep. Now the cage has a big sign: “Click the latch!”"
},
{
  id:"ribbon", minAge:8, no:"Case 02", title:"The Science Fair Mix-Up", meta:"Ages 8+ · find 1 clue",
  brief:"The judge gave the blue ribbon to Zara's sock-sorting robot. But at pickup time, the ribbon was pinned to a different project! Who moved it?",
  places:[
    {id:"robot",name:"Zara's robot",text:"Beep-o the robot sorts socks by color. There's a pin hole in the tablecloth where a ribbon used to be."},
    {id:"volcano",name:"Leo's volcano",text:"Leo's volcano is covered in gold glitter glue. Very sparkly!",clue:{id:"glitter",t:"Glitter volcano",d:"Leo's volcano is covered in gold glitter."}},
    {id:"ribbon",name:"Blue ribbon",text:"The blue ribbon is pinned to Leo's volcano now. Its pin has fresh gold glitter glue stuck to it!",clue:{id:"pin",t:"Glittery pin",d:"The ribbon's pin has gold glitter glue on it."}},
    {id:"plant",name:"Bean plant",text:"Sam's bean plant. No glitter, no ribbons, just beans."},
    {id:"clipboard",name:"Judge's clipboard",text:"1st place, blue ribbon: Zara, sock robot. 2nd place: Leo, volcano.",clue:{id:"card",t:"Judge's scores",d:"Zara won the blue ribbon."}},
    {id:"sheet",name:"Clean-up sheet",text:"Clean-up helpers at 3:00: Leo.",clue:{id:"cleanup",t:"Clean-up helper",d:"Leo stayed to help clean up."}}
  ],
  people:[
    {id:"zara",name:"Zara",role:"Robot builder",says:"The judge gave me the blue ribbon, I promise! I went to get my mom, and when I came back it was gone."},
    {id:"leo",name:"Leo",role:"Volcano builder",says:"I didn't touch it! Maybe the judge changed her mind? (His fingers sparkle with gold glitter.)",clue:{id:"hands",t:"Sparkly fingers",d:"Leo has gold glitter on his fingers."}},
    {id:"patel",name:"Mr. Patel",role:"Judge",says:"I pinned the blue ribbon on the robot myself, at 2:30. I never moved it."}
  ],
  culprit:"leo", need:1, proof:["pin"],
  herrings:{hands:"Leo made a glitter volcano, so glitter on his hands makes sense. What else has glitter on it?",glitter:"Pretty sparkly! Did any of that glitter end up somewhere it shouldn't?",card:"That shows Zara won. Now find out who moved the ribbon.",cleanup:"Leo was there. Look for something the ribbon itself can tell you!"},
  hints:["The ribbon was moved after judging. Look at the ribbon up close.","Glitter gets on everything it touches."],
  wrap:"Leo wished so much that his volcano had won that he moved the ribbon while cleaning up. The glitter on the pin gave him away. He gave the ribbon back to Zara, and she invited him to help build next year's robot!"
},
{
  id:"treehouse", minAge:8, no:"Case 03", title:"The Treehouse Map", meta:"Ages 8+ · find 1 clue",
  brief:"The Oak Tree Club's secret treasure map is missing from the treehouse! Ruby and Jay left it there at lunch. Who took it?",
  places:[
    {id:"treehouse",name:"Treehouse",text:"The map's hook is empty. Someone left a little purple crayon on the floor."},
    {id:"ladder",name:"Ladder",text:"Tiny chalky handprints on the rungs. They're much smaller than Ruby's or Jay's hands.",clue:{id:"prints",t:"Tiny handprints",d:"Small, chalky hands climbed the ladder."}},
    {id:"sign",name:"Club rules",text:"CLUB RULES: 1. Members only. 2. You must be 10 to join.",clue:{id:"rules",t:"Club rules",d:"You have to be 10 to join the club."}},
    {id:"wagon",name:"Red wagon",text:"Mo's red wagon. Rolled up inside, next to a teddy bear: the treasure map! Someone wrote “MO” in purple crayon on the corner.",clue:{id:"map",t:"Map in the wagon",d:"The map is in Mo's wagon, with “MO” written on it."}},
    {id:"sandbox",name:"Sandbox",text:"Sidewalk chalk everywhere. Mo was drawing here this morning."},
    {id:"doghouse",name:"Doghouse",text:"Biscuit the dog is snoring. He has a muddy paw, but no map."}
  ],
  people:[
    {id:"ruby",name:"Ruby",role:"Club leader",says:"We left the map up there at lunch. When we came back, it was gone!"},
    {id:"jay",name:"Jay",role:"Club member",says:"Biscuit takes stuff sometimes. Maybe he chewed it up?",clue:{id:"jaysays",t:"Jay blames Biscuit",d:"Jay thinks the dog took it."}},
    {id:"mo",name:"Mo",role:"Ruby's little sibling",says:"I didn't climb anything! I'm too little. (Mo has chalk on both hands.)",clue:{id:"chalk",t:"Chalky hands",d:"Mo has chalk on both hands."}}
  ],
  culprit:"mo", need:1, proof:["map"],
  herrings:{prints:"Small hands climbed the ladder. Whose hands are that small? Find the map to be sure!",chalk:"Chalky hands match the ladder, but can you find the map itself?",rules:"Hmm, someone might feel left out by rule 2...",jaysays:"Biscuit is asleep, and there's no map in his doghouse. Keep looking!"},
  hints:["Look at the ladder. Whose hands are that small?","Where would a little kid keep their treasures?"],
  wrap:"Mo just wanted to be in the club, so they borrowed the map for their own adventure. Ruby and Jay made Mo the club's very first Junior Member, with a special purple badge!"
}]},

{
  id:"camp", name:"Camp Pinecrest", place:"Lake Pinecrest, summer session", font:"'Bree Serif',Georgia,serif",
  blurb:"Capture the flag, a canoe gone adrift and a ghost in the pines. Summer camp has secrets.",
  det:"scout", hero:"Scout", examine:"Scout checks out", thumb:"flag", minAge:10, fit:[11,13],
  retorts:["No way! You've got the wrong camper.","That's not proof. Ask anyone in my cabin!"],
  cases:[
{
  id:"flag", minAge:10, no:"Case 01", title:"The Vanished Flag", meta:"Ages 10+ · prove it with 2 clues",
  brief:"The night before the big capture-the-flag game, Red team's flag disappeared from their cabin. No flag, no game. Who took it?",
  places:[
    {id:"flagpole",name:"Flagpole",text:"The camp flag is up, but Red team's flag was never kept here. The rope is neatly coiled."},
    {id:"reddoor",name:"Red cabin",text:"Red team's flag hung by this door overnight. The door doesn't lock, but it creaks loudly when it opens."},
    {id:"tracks",name:"Paw prints",text:"Raccoon tracks lead to a tipped-over trash can. Raccoons love snacks, not flags.",clue:{id:"raccoon",t:"Raccoon tracks",d:"A raccoon raided the trash last night."}},
    {id:"clipboard",name:"Sign-out log",text:"Night sign-out: “Jonah (Blue), bathroom. Out 10:40, back 11:05.” That's a long bathroom trip.",clue:{id:"signout",t:"Night sign-out",d:"Jonah was out of his cabin from 10:40 to 11:05."}},
    {id:"lostfound",name:"Lost & found",text:"A blue camp jacket labeled “J. RUIZ.” A red thread is snagged in the zipper.",clue:{id:"thread",t:"Red thread",d:"A red thread is caught on Jonah's jacket."}},
    {id:"bluecabin",name:"Blue cabin",text:"Blue team's cabin. Their flag is still hanging by the door. There's a gap under the porch."}
  ],
  people:[
    {id:"priya",name:"Priya",role:"Red team captain",says:"I hung our flag by the door at lights-out. Blue team's been talking trash all week!",clue:{id:"priyasays",t:"Priya's story",d:"Hung the flag at lights-out."}},
    {id:"dana",name:"Coach Dana",role:"Counselor",says:"Everyone signs out if they leave a cabin at night. And I heard Red cabin's door creak at about ten to eleven.",clue:{id:"creak",t:"Creak at 10:50",d:"Red cabin's door opened around 10:50."}},
    {id:"jonah",name:"Jonah",role:"Blue team",says:"I went to the bathroom, that's it. Why would I need a red flag?",clue:{id:"jonahsays",t:"Jonah's story",d:"Says he only went to the bathroom."}}
  ],
  culprit:"jonah", need:2, proof:["signout","thread","creak"],
  herrings:{raccoon:"The raccoon was after snacks. No animal left with a flag.",priyasays:"Priya is upset, but that's not evidence.",jonahsays:"That's his story. What contradicts it?"},
  hints:["The flag vanished at night. Who wasn't in bed, and when?","Check the lost and found. Things get snagged on zippers."],
  wrap:"Jonah slipped out at 10:40 and hid Red team's flag under Blue cabin's porch, hoping to win before the game even started. The sign-out log and the thread on his jacket gave him away. Coach Dana moved the game to lunch and made Jonah the official flag guard."
},
{
  id:"canoe", minAge:10, no:"Case 02", title:"The Drifting Canoe", meta:"Ages 10+ · prove it with 2 clues",
  brief:"At breakfast, canoe 3 was spotted drifting in the middle of the lake. Nobody's allowed on the water before 8 without a counselor. Who took it out?",
  places:[
    {id:"vests",name:"Life vests",text:"Every vest on the rack is dry except one, still dripping. Its tag says “HANA.”",clue:{id:"vest",t:"Wet life vest",d:"Hana's vest is still wet."}},
    {id:"badges",name:"Knot badges",text:"Knot badge board. Cleat hitch: Mateo ✓, Ben ✓. Hana: not yet.",clue:{id:"badges",t:"Knot badges",d:"Hana hasn't earned her knot badge."}},
    {id:"rack",name:"Canoe rack",text:"Canoes 1, 2 and 4 are on the rack. Canoe 3 is missing."},
    {id:"cleat",name:"Dock cleat",text:"Canoe 3's rope was tied with a sloppy granny knot, and it slipped loose. Anyone with a knot badge would use a cleat hitch.",clue:{id:"knot",t:"Granny knot",d:"Canoe 3 was tied with the wrong knot."}},
    {id:"canoe",name:"Canoe 3",text:"Canoe 3 is drifting in the middle of the lake. A paddle is still inside."}
  ],
  people:[
    {id:"mateo",name:"Mateo",role:"Camper",says:"I was on breakfast duty from six. Ask the cooks, I flipped like a hundred pancakes.",clue:{id:"mateosays",t:"Mateo's alibi",d:"On breakfast duty from 6 am."}},
    {id:"hana",name:"Hana",role:"Camper",says:"I've been asleep in my cabin all morning. I just woke up! (Her hair is wet.)",clue:{id:"hair",t:"Wet hair",d:"Hana's hair is wet."}},
    {id:"ben",name:"Ben",role:"Waterfront counselor",says:"The lake's off-limits before eight without me. I didn't open the boathouse till 7:45."}
  ],
  culprit:"hana", need:2, proof:["vest","knot","badges"],
  herrings:{hair:"Wet hair is suspicious, but people shower! Find something that ties her to the canoe.",mateosays:"Mateo's pancake alibi checks out."},
  hints:["Whoever was on the lake wore something that's still wet.","Look at how the canoe was tied, and who knows how to tie it properly."],
  wrap:"Hana snuck out at sunrise to photograph the mist on the lake. When she came back, she tied the canoe with a knot she didn't really know, and it drifted away. She owned up, earned her knot badge that afternoon, and Ben showed her the best sunrise spot, with a counselor this time."
},
{
  id:"ghost", minAge:10, no:"Case 03", title:"The Ghost of the Pines", meta:"Ages 10+ · prove it with 2 clues",
  brief:"Every night this week, a spooky “Wooooo” has drifted out of the trees at campfire. Half the camp won't go to the bathroom alone. Time to unmask the ghost.",
  places:[
    {id:"laundry",name:"Laundry line",text:"Cabin 4's laundry line. One white sheet is missing; its clip is still hanging there.",clue:{id:"sheet",t:"Missing sheet",d:"A white sheet is gone from Cabin 4's line."}},
    {id:"fire",name:"Campfire",text:"Crackling logs and s'more crumbs. No ghosts in here."},
    {id:"book",name:"Story book",text:"Counselor Sam's book: “Spooky Stories for the Campfire.” The bookmark is on “The Moaning Pines.”",clue:{id:"book",t:"Spooky story book",d:"Sam reads a story about moaning pines."}},
    {id:"hollow",name:"Hollow tree",text:"Inside the hollow tree: a walkie-talkie with the volume turned all the way up. It crackles: “Wooooo...”",clue:{id:"walkie",t:"Walkie in the tree",d:"The ghost is a walkie-talkie hidden in a tree."}},
    {id:"owl",name:"Owl",text:"A big owl blinks at you. “Hoo-hoo.” Spooky, but owls don't say “wooo.”"},
    {id:"shed",name:"Supply shed",text:"Equipment log: “Walkie-talkie set B, checked out by Ollie, for night hike.” There's been no night hike this week.",clue:{id:"shedlog",t:"Equipment log",d:"Ollie checked out the walkie-talkies."}}
  ],
  people:[
    {id:"campsam",name:"Counselor Sam",role:"Counselor",says:"I tell spooky stories, sure. But I've been right here by the fire every night, in front of everyone.",clue:{id:"samsays",t:"Sam's alibi",d:"Sam is at the fire, in plain sight, every night."}},
    {id:"ollie",name:"Ollie",role:"Camper, Cabin 4",says:"Ghosts are real, I'm telling you! (A walkie-talkie clip hangs from his belt, with nothing in it.)",clue:{id:"clip",t:"Empty walkie clip",d:"Ollie's belt clip is empty."}},
    {id:"grace",name:"Grace",role:"Camper",says:"The moaning always starts when the fire goes quiet. It comes from those trees, right by Cabin 4."}
  ],
  culprit:"ollie", need:2, proof:["shedlog","walkie","clip"],
  herrings:{sheet:"A sheet makes a great ghost costume, but six campers sleep in Cabin 4.",book:"A spooky story can't moan by itself. And Sam was at the fire.",samsays:"Sam's alibi holds: everyone saw him at the fire."},
  hints:["Ghosts don't need batteries. Find out what's really making the noise.","Who checked out equipment they had no reason to use?"],
  wrap:"Ollie hid one walkie-talkie in the hollow tree and moaned into the other from behind his tent, wearing a sheet for extra effect. Everyone laughed once the ghost was unmasked, and Counselor Sam made Ollie tell the next spooky story."
}]},

{
  id:"westbrook", name:"Westbrook High", place:"Westbrook High School", font:"'Rubik',system-ui,sans-serif",
  blurb:"A sabotaged band, a fake post that went viral and a trophy that walked off before photo day.",
  det:"rio", hero:"Rio", examine:"Rio checks", thumb:"band", minAge:13, fit:[14,17],
  retorts:["Seriously? You've got nothing on me.","That's not proof. Screenshot or it didn't happen."],
  cases:[
{
  id:"band", minAge:13, no:"Case 01", title:"Battle of the Bands", meta:"Ages 13+ · prove it with 2 clues",
  brief:"Two hours before Battle of the Bands, the Static Owls' backing-track USB stick vanished from their amp in the music room. Without it, their first song is dead.",
  places:[
    {id:"signin",name:"Sign-in sheet",text:"Music room sign-in. 3:30 Maya + band. 3:40 Kai (alone). 3:55 Mr. Duarte.",clue:{id:"signin",t:"Sign-in sheet",d:"Kai signed in alone at 3:40."}},
    {id:"amp",name:"Amp",text:"The Static Owls' amp. The USB port is empty. Maya says the stick was plugged in when they left at 3:35."},
    {id:"pick",name:"Guitar pick",text:"A purple guitar pick by the amp, printed “KAI ⚡”.",clue:{id:"pick",t:"Kai's pick",d:"Kai's custom pick was right by the amp."}},
    {id:"board",name:"Whiteboard",text:"Tonight's line-up: 1. Static Owls. 2. Neon Static. 3. Lost & Found.",clue:{id:"order",t:"Line-up",d:"The Owls play first; Kai's band is next."}},
    {id:"case",name:"Guitar case",text:"Kai's guitar case, Neon Static sticker. In the front pocket: a USB stick shaped like a little owl.",clue:{id:"usb",t:"Owl USB in Kai's case",d:"The missing stick is in Kai's case pocket."}},
    {id:"poster",name:"Poster",text:"Battle of the Bands. Prize: a day of recording time at Riverside Studio.",clue:{id:"prize",t:"Big prize",d:"The winner gets free studio time."}}
  ],
  people:[
    {id:"maya",name:"Maya",role:"Static Owls, bass",says:"Our track was plugged in when we left at 3:35. If it doesn't turn up, we'll have to cut our opener.",clue:{id:"mayasays",t:"Maya's account",d:"The stick was in the amp at 3:35."}},
    {id:"kai",name:"Kai",role:"Neon Static, guitar",says:"I just came in to tune up. Didn't see any USB. Good luck tonight, I guess.",clue:{id:"kaisays",t:"Kai's story",d:"Says he only came in to tune up."}},
    {id:"duarte",name:"Mr. Duarte",role:"Music teacher",says:"I was in a staff meeting until 3:55, then I locked up. I've got the only other key."}
  ],
  culprit:"kai", need:2, proof:["signin","pick","usb"],
  herrings:{order:"Going first matters, but who was actually in the room?",prize:"A big prize is a motive, not proof.",mayasays:"That sets the time window. Now who was there in it?",kaisays:"That's his story. What contradicts it?"},
  hints:["When did the stick disappear, and who was in the room then?","Look around the amp, and check what people carried in."],
  wrap:"Kai pocketed the Static Owls' backing track, hoping Neon Static would win by default. His pick by the amp, the sign-in sheet and the stick in his case gave him away. He handed it back and apologized, and both bands played. The Owls won."
},
{
  id:"post", minAge:13, no:"Case 02", title:"The Fake Post", meta:"Ages 13+ · prove it with 2 clues",
  brief:"At 3:12 pm, the student council's account posted: “Spring Formal is CANCELLED.” It went everywhere in minutes. It's fake, and it's the week of the council election.",
  places:[
    {id:"post",name:"The post",text:"“Spring Formal is CANCELLED. Deal with it. Its alot of work anyway.” Posted 3:12 pm.",clue:{id:"post",t:"The fake post",d:"Posted at 3:12 pm. It spells “alot.”"}},
    {id:"signin",name:"Computer sign-in",text:"Library computer sign-in. PC #2: Ines, 2:30 to 2:55. PC #4: Devon, 3:05 to 3:30.",clue:{id:"signin",t:"Computer sign-in",d:"Devon was on PC #4 from 3:05 to 3:30."}},
    {id:"board",name:"Election posters",text:"“VOTE DEVON: I'll get alot done!” Next to it: “INES: Re-elect for President.”",clue:{id:"alot",t:"“alot” on Devon's poster",d:"Devon's poster spells it “alot” too."}},
    {id:"window",name:"Window",text:"Out on the field, track practice runs from 3 to 5. You can spot the bright orange team jackets."},
    {id:"pc4",name:"Computer #4",text:"PC #4's login history: council account, signed in 3:11 pm, signed out 3:14 pm.",clue:{id:"pc4",t:"PC #4 login",d:"The council account was used on PC #4 at 3:11."}}
  ],
  people:[
    {id:"hart",name:"Ms. Hart",role:"Librarian",says:"Every student signs in to use a computer. I check the sheet on the hour, every hour."},
    {id:"devon",name:"Devon",role:"Running for president",says:"I'm running against Ines, sure. But I'd never do something like that. I want people to like me.",clue:{id:"devonsays",t:"Devon's denial",d:"Devon is running against Ines."}},
    {id:"ines",name:"Ines",role:"Council president",says:"I run the council account, but I was at track practice from three. Coach can confirm. Someone must have seen my password.",clue:{id:"inessays",t:"Ines's alibi",d:"At track practice from 3 pm."}}
  ],
  culprit:"devon", need:2, proof:["pc4","signin"],
  herrings:{alot:"A spelling habit is a hint, not proof. Plenty of people write “alot.”",post:"You know when it was posted. Which computer, and who was sitting there?",inessays:"Her story checks out with the track schedule.",devonsays:"A rival has a motive, but motive isn't proof."},
  hints:["Every login leaves a trail. Which computer was used at 3:12?","Then find out who was sitting at that computer."],
  wrap:"Devon had watched Ines type her password at a council meeting. He posted the fake cancellation from library PC #4 to make her look bad before the vote. The login history and the sign-in sheet proved it. The Formal is back on, and so is the election, minus one candidate."
},
{
  id:"trophy", minAge:13, no:"Case 03", title:"The Missing Trophy", meta:"Ages 13+ · prove it with 2 clues",
  brief:"Westbrook's State Esports trophy vanished from the hallway case on yearbook photo morning. The glass isn't broken. Photos are at 8:30.",
  places:[
    {id:"case",name:"Trophy case",text:"A clean, dust-free circle where the trophy stood. The lock isn't broken, so someone used a key.",clue:{id:"dust",t:"Clean circle",d:"The case was opened with a key."}},
    {id:"locker",name:"Locker 214",text:"Jordan's locker. A scrap of bubble wrap is poking out of the vent.",clue:{id:"bubble",t:"Bubble wrap",d:"Bubble wrap in Jordan's locker."}},
    {id:"board",name:"Bulletin board",text:"Yearbook photos today. Esports team at the trophy case, 8:30 am."},
    {id:"cart",name:"Custodian's cart",text:"Mr. Reyes's key log: “Trophy case key, lent to Jordan P. at 7:50 am, returned 8:00.”",clue:{id:"keylog",t:"Key log",d:"Jordan had the case key from 7:50 to 8:00."}}
  ],
  people:[
    {id:"jordan",name:"Jordan",role:"Esports captain",says:"I borrowed the key to dust the shelf for the photo, that's all. I gave it straight back.",clue:{id:"jordansays",t:"Jordan's story",d:"Says he only dusted the shelf."}},
    {id:"sky",name:"Sky",role:"Yearbook photographer",says:"I took a test shot at 7:45, and the trophy was there. At 8:10 it was gone. I have both photos.",clue:{id:"skysays",t:"Sky's photos",d:"The trophy vanished between 7:45 and 8:10."}},
    {id:"reyes",name:"Mr. Reyes",role:"Custodian",says:"I only lend that key to people on the list, and I write it down every time."}
  ],
  culprit:"jordan", need:2, proof:["keylog","bubble","skysays"],
  herrings:{dust:"Someone used a key. Who had it this morning?",jordansays:"That's his story. What contradicts it?"},
  hints:["The case wasn't forced. Who had the key this morning?","Did anyone pack something carefully? Check the lockers."],
  wrap:"Jordan wrapped the trophy in bubble wrap to take it to his grandpa, who taught him to play and couldn't make it to the finals. He meant to bring it back before photos. Instead, the whole team took the yearbook photo at Grandpa's house."
}]}
);
GENRES.slice(-3).forEach(g=>GENRE[g.id]=g);
Object.assign(GENRE.junior,{fit:[8,10],hero:"Inspector Wren"});
Object.assign(GENRE.noir,{fit:[14,99],hero:"Inspector Wren"});
Object.assign(GENRE.manor,{fit:[14,99],hero:"Inspector Wren"});
Object.assign(GENRE.fantasy,{fit:[11,99],hero:"Investigator Wren"});
(()=>{const order=["maple","junior","camp","westbrook","fantasy","noir","manor"];GENRES.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id))})();
/* ================= SECURITY: parent PIN + encrypted parent email =================
   The PIN is never stored. PBKDF2-SHA256 (310,000 iterations, random 16-byte salt) turns it into
   512 bits: the first half is kept as a verifier, the second half becomes an AES-256-GCM key that
   encrypts the parent's email. A 4-digit PIN is a convenience lock, not strong encryption on its own;
   production adds server-side encryption at rest (see the production plan). */
const SEC={
  ITER:310000,
  enc:new TextEncoder(),dec:new TextDecoder(),
  b64(u8){let s="";u8.forEach(b=>s+=String.fromCharCode(b));return btoa(s)},
  unb64(s){const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u},
  rand(n){const u=new Uint8Array(n);crypto.getRandomValues(u);return u},
  ok(){return !!(window.crypto&&crypto.subtle)},
  async derive(pin,salt,iter){
    const base=await crypto.subtle.importKey("raw",SEC.enc.encode(String(pin)),"PBKDF2",false,["deriveBits"]);
    return new Uint8Array(await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt,iterations:iter},base,512));
  },
  async aes(raw){return crypto.subtle.importKey("raw",raw,{name:"AES-GCM"},false,["encrypt","decrypt"])},
  same(a,b){if(a.length!==b.length)return false;let d=0;for(let i=0;i<a.length;i++)d|=a[i]^b[i];return d===0},
  async makeParent(email,pin){
    const salt=SEC.rand(16),bits=await SEC.derive(pin,salt,SEC.ITER),iv=SEC.rand(12);
    const key=await SEC.aes(bits.slice(32));
    const ct=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv},key,SEC.enc.encode(email)));
    return {v:2,salt:SEC.b64(salt),iter:SEC.ITER,ver:SEC.b64(bits.slice(0,32)),iv:SEC.b64(iv),ct:SEC.b64(ct),at:Date.now()};
  },
  async check(parent,pin){
    if(!parent)return false;
    if(parent.v!==2)return parent.pin===legacyPin(pin);
    try{const bits=await SEC.derive(pin,SEC.unb64(parent.salt),parent.iter||SEC.ITER);return SEC.same(bits.slice(0,32),SEC.unb64(parent.ver))}catch(e){return false}
  },
  async email(parent,pin){
    if(!parent)return "";if(parent.v!==2)return parent.email||"";
    const bits=await SEC.derive(pin,SEC.unb64(parent.salt),parent.iter||SEC.ITER),key=await SEC.aes(bits.slice(32));
    return SEC.dec.decode(await crypto.subtle.decrypt({name:"AES-GCM",iv:SEC.unb64(parent.iv)},key,SEC.unb64(parent.ct)));
  }
};
function legacyPin(pin){let h=2166136261;for(const ch of "hl:"+pin){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)>>>0}return h.toString(36)}
/* ================= POINTS & RANKS ================= */
const RANKS=[0,500,1500,3000,6000,10000];
function casePts(need,st,daily){
  const base=need>1?200:100,pen=(+st.attempts||0)*25+(+st.hints||0)*15;
  const solved=Math.max(Math.round(base*.4),base-pen),first=(!st.attempts&&!st.hints)?50:0,night=daily&&st.onTime?100:0;
  return {base,pen:base-solved,first,night,total:solved+first+night};
}
function totalPts(pid){
  const pg=prog(pid);let n=0;
  GENRES.forEach(g=>g.cases.forEach((c,i)=>{const st=pg.solo[g.id].cases[i];if(st&&st.solved)n+=casePts(c.need,st).total}));
  Object.values(pg.race||{}).forEach(r=>{const g=GENRE[r.genre];if(!g||!Array.isArray(r.cases))return;r.cases.forEach((st,i)=>{if(st&&st.solved&&g.cases[i])n+=casePts(g.cases[i].need,st).total})});
  Object.values(pg.coop||{}).forEach(x=>{n+=casePts(x.need,x).total});
  Object.values(pg.daily||{}).forEach(st=>{if(st&&st.solved)n+=casePts(st.need||1,st,true).total});
  return n;
}
const rankOf=n=>{let r=0;RANKS.forEach((v,i)=>{if(n>=v)r=i});return r};
const fmtN=n=>Number(n).toLocaleString(LANG==="hi"?"hi-IN":LANG);
function renderRank(){
  const p=P();if(!p)return;
  const n=totalPts(p.id),r=rankOf(n),names=t("ranks"),next=RANKS[r+1];
  const pct=next?Math.round((n-RANKS[r])/(next-RANKS[r])*100):100,sk=streakOf(p.id);
  $("rankrow").innerHTML=`<span class="rkname">${esc(names[r])}</span><span class="rkpts">${esc(t("pts",{n:fmtN(n)}))}</span>
    <span class="rkbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></span>
    <span class="rknext">${esc(next?t("to_next",{n:fmtN(next-n),r:names[r+1]}):t("top_rank"))}</span>${sk?`<span class="rkstreak">${esc(t("streak",{n:sk}))}</span>`:""}`;
}
let lastPts=null;
function ptsToast(gain){
  const p=P();if(!p)return;const after=totalPts(p.id),before=after-gain;
  toast(t("plus_pts",{n:gain})+(rankOf(after)>rankOf(before)?" · "+t("ranks")[rankOf(after)]+"!":""));
}

/* ================= NIGHTLY CASES (7 pm local) ================= */
const DAILY={docs:{},subbed:false};
const pad2=n=>String(n).padStart(2,"0");
const dstr=d=>`${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
function releaseAt(date){const [y,m,d]=String(date).split("-").map(Number);return new Date(y,m-1,d,19,0,0).getTime()}
const dailyTier=p=>ageOf(p)<12?"junior":"detective";
function nextDrop(){const n=new Date(),t7=new Date(n.getFullYear(),n.getMonth(),n.getDate(),19,0,0);if(n>=t7)t7.setDate(t7.getDate()+1);return t7.getTime()}
function strOK(s,max){return typeof s==="string"&&s.length>0&&s.length<=max}
function validDaily(id,d){
  try{
    if(!d||!/^\d{4}-\d{2}-\d{2}$/.test(d.date)||(d.tier!=="junior"&&d.tier!=="detective"))return null;
    const c=d.case,sc=c&&SCENES[c.scene];if(!sc)return null;
    if(!LOOKS[c.det]||!strOK(c.title,80)||!strOK(c.brief,600)||!strOK(c.wrap,700)||!strOK(c.hero,30))return null;
    const clues=new Set();
    if(!Array.isArray(c.places)||!c.places.length||!c.places.every(p=>sc.hot[p.id]&&sc.stand[p.id]!=null&&strOK(p.name,40)&&strOK(p.text,400)))return null;
    if(!Array.isArray(c.people)||c.people.length!==3||!c.people.every(p=>sc.people[p.id]&&LOOKS[p.id]&&strOK(p.name,30)&&strOK(p.says,400)))return null;
    [...c.places,...c.people].forEach(p=>{if(p.clue&&strOK(p.clue.id,30)&&strOK(p.clue.t,60)&&strOK(p.clue.d,200))clues.add(p.clue.id);else delete p.clue});
    const need=c.need===2?2:1;
    if(!c.people.some(p=>p.id===c.culprit)||!Array.isArray(c.proof)||c.proof.length<need||!c.proof.every(x=>clues.has(x)))return null;
    const herrings={};Object.entries(c.herrings||{}).forEach(([k,v])=>{if(clues.has(k)&&strOK(v,300))herrings[k]=v});
    const hints=(Array.isArray(c.hints)?c.hints:[]).filter(h=>strOK(h,300)).slice(0,3);
    const minAge=Math.max(8,Math.min(18,+c.minAge||(d.tier==="junior"?8:12)));
    const [y,m,dd]=d.date.split("-").map(Number),label=new Date(y,m-1,dd).toLocaleDateString(LANG==="hi"?"hi-IN":LANG,{weekday:"short",day:"numeric",month:"short"});
    return {id:"d-"+id,date:d.date,tier:d.tier,scene:c.scene,det:c.det,hero:c.hero,examine:strOK(c.examine,40)?c.examine:c.hero,
      font:strOK(c.font,80)?c.font:null,world:strOK(c.world,40)?c.world:"",minAge,no:label,title:c.title,
      meta:strOK(c.meta,60)?c.meta:(need>1?"prove it with 2 clues":"find 1 clue"),brief:c.brief,places:c.places,people:c.people,
      culprit:c.culprit,need,proof:c.proof,herrings,hints,wrap:c.wrap,
      retorts:Array.isArray(c.retorts)&&c.retorts.length===2&&c.retorts.every(r=>strOK(r,120))?c.retorts:["That's not proof!","Look at the clues again."]};
  }catch(e){return null}
}
function dailySubscribe(){
  if(DAILY.subbed||!CAP.db)return;DAILY.subbed=true;
  CAP.db.collection("daily").onSnapshot(s=>{
    const m={};s.docs.forEach(doc=>{const v=validDaily(doc.id,doc.data());if(v)m[doc.id]=v});DAILY.docs=m;
    if(!$("home").hidden)renderHome();
  },()=>{});
}
function dailyList(p){
  const tier=dailyTier(p),now=Date.now();
  return Object.values(DAILY.docs).filter(c=>c.tier===tier&&releaseAt(c.date)<=now&&caseOKfor(p,c)).sort((a,b)=>a.date<b.date?1:-1);
}
function caseOKfor(p,c){const a=ageOf(p);return a>=c.minAge&&(p.cap==null||c.minAge<=p.cap)}
function buildDaily(){
  const p=P(),list=p?dailyList(p).slice(0,6):[];
  const f=list[0]||{};
  GENRE.daily={id:"daily",name:t("daily_world"),place:"",font:f.font||"'Special Elite','Courier New',monospace",det:f.det||"wren_noir",hero:f.hero||"Inspector Wren",
    examine:f.examine||"Wren examines",retorts:f.retorts||["That's not proof!","Look again."],minAge:8,cases:list,isDaily:true};
  return GENRE.daily;
}
function dailyState(c){
  const pg=prog(P().id);pg.daily=pg.daily||{};
  let st=pg.daily[c.id];if(!st)st=pg.daily[c.id]={found:[],visited:[],attempts:0,hints:0,solved:false,need:c.need,date:c.date};
  return st;
}
function streakOf(pid){
  const pg=prog(pid),days=new Set(Object.values(pg.daily||{}).filter(s=>s&&s.solved&&s.onTime).map(s=>s.date));
  if(!days.size)return 0;
  const d=new Date();if(!days.has(dstr(d)))d.setDate(d.getDate()-1);
  let n=0;while(days.has(dstr(d))){n++;d.setDate(d.getDate()-1)}
  return n;
}
function fmtLeft(ms){const m=Math.max(0,Math.round(ms/60000)),h=Math.floor(m/60);return h?`${h}h ${pad2(m%60)}m`:`${m}m`}
function renderDaily(){
  const p=P(),el=$("daily");if(!p||!el)return;
  if(!CAP.db){el.hidden=true;return}
  el.hidden=false;
  const list=dailyList(p),today=dstr(new Date()),tonight=list.find(c=>c.date===today),latest=list[0];
  const sk=streakOf(p.id),tl=t("daily_in",{t:fmtLeft(nextDrop()-Date.now())});
  let h=`<div class="dtop"><span class="dlbl">${esc(t("daily_title"))}</span>${sk?`<span class="dstreak">${esc(t("streak",{n:sk}))}</span>`:""}</div>`;
  if(tonight){
    const st=dailyState(tonight);
    h+=`<div class="dbody"><div class="dtx"><b class="dname">${esc(tonight.title)}</b><span class="dsub">${esc(tonight.world)}${tonight.world?" · ":""}${esc(caseMeta(tonight))}</span>
      <span class="dsub">${st.solved?esc(t("daily_done")):""}</span></div>
      ${st.solved?`<span class="dchip done">${esc(t("st_solved"))}</span>`:`<span class="dchip">${esc(t("daily_new"))}</span>`}
      <button class="primary" data-act="daily" data-cid="${esc(tonight.id)}">${esc(t(st.solved?"daily_replay":"daily_play"))}</button></div>`;
    if(st.solved)h+=`<p class="dnext">${esc(t("daily_next"))} · ${esc(tl)}</p>`;
  } else {
    h+=`<div class="dbody"><div class="dtx"><b class="dname">${esc(t(latest?"daily_next":"daily_none"))}</b><span class="dsub">${esc(tl)}</span></div>
      ${latest?`<button class="secondary" data-act="daily" data-cid="${esc(latest.id)}">${esc(caseNo(latest))}: ${esc(latest.title)}</button>`:""}</div>`;
  }
  el.innerHTML=h;
}
setInterval(()=>{if(!$("home").hidden)renderDaily()},30000);

/* ================= CLOUD SAVE (private to each signed-in player) ================= */
const CLOUD={pulled:false,t:null,busy:false,again:false};
function cloudRef(){try{return CAP.db&&CAP.uid?CAP.db.collection("data/users/"+CAP.uid).doc("save"):null}catch(e){return null}}
async function cloudPull(){
  const r=cloudRef();
  if(r){try{const s=await r.get();
    if(s.exists){const d=s.data();
      if(d&&typeof d.blob==="string"&&(+d.at||0)>(STORE.savedAt||0)){
        const remote=JSON.parse(d.blob);
        if(remote&&remote.acct&&Array.isArray(remote.acct.profiles)){
          STORE=Object.assign({acct:{profiles:[],current:null,parent:null,lang:null,region:null},prog:{},app:null},remote);
          try{localStorage.setItem(LS3,JSON.stringify(STORE))}catch(e){}
          if(STORE.acct.lang)LANG=STORE.acct.lang;
          CLOUD.pulled=true;
          if($("game").hidden){applyStatic();resumeOrHome(true)}
          return;
        }}}
  }catch(e){}}
  CLOUD.pulled=true;
  if(STORE.acct.profiles.length)cloudPush();
}
function cloudPush(){
  if(!CLOUD.pulled)return;
  clearTimeout(CLOUD.t);
  CLOUD.t=setTimeout(async()=>{
    const r=cloudRef();if(!r)return;
    if(CLOUD.busy){CLOUD.again=true;return}
    CLOUD.busy=true;
    try{await r.set({v:3,at:STORE.savedAt||Date.now(),blob:JSON.stringify(STORE)})}catch(e){}
    CLOUD.busy=false;if(CLOUD.again){CLOUD.again=false;cloudPush()}
  },1500);
}

/* ================= RESUME ================= */
function lastSpot(){
  const p=P(),a=STORE.app;if(!p||!a||a.pid!==p.id||!a.cid)return null;
  let g=a.genre==="daily"?buildDaily():GENRE[a.genre];if(!g)return null;
  const i=g.cases.findIndex(c=>c.id===a.cid);if(i<0)return null;
  return {g,i,c:g.cases[i],a};
}
function resumeOrHome(fromCloud){
  if(!P()){startOnboarding(false);return}
  const s=lastSpot();
  if(s&&s.a.inGame&&s.a.mode==="solo"){
    A={genre:s.g.id,mode:"solo",code:null,ci:s.i};
    if(unlocked(s.i)){enterGame();toast(t("welcome_back"));return}
  }
  goHome();
}
function renderContinue(){
  const el=$("cont");if(!el)return;
  const s=lastSpot();
  if(!s||(s.a.mode==="solo"&&(()=>{const pA=A;A={genre:s.g.id,mode:"solo",code:null,ci:s.i};const v=cs(s.i).solved;A=pA;return v})())){el.hidden=true;return}
  el.hidden=false;
  const label=s.a.mode==="solo"?`${s.g.name} · ${caseNo(s.c)}: ${s.c.title}`:`${t(s.a.mode==="coop"?"mode_coop":"mode_race")} · ${t("table")} ${s.a.code} · ${s.c.title}`;
  el.innerHTML=`<span class="ctx"><span class="clbl">${esc(t("cont_title"))}</span><b>${esc(label)}</b></span><button class="primary" data-act="resume">${esc(t("cont_btn"))}</button>`;
}

/* ================= HOW TO PLAY ================= */
function renderHelp(){
  const p=P(),kid=p&&ageOf(p)<11,steps=t(kid?"hk":"h");
  const tip=!$("game").hidden&&A.mode!=="solo"?`<p class="htip">${esc(t(A.mode==="coop"?"help_coop":"help_race"))}</p>`:"";
  $("helpcard").innerHTML=`<h2 class="sh">${esc(t("help_title"))}</h2><ol class="hsteps">${steps.map(([a,b])=>`<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ol>${tip}
    <div class="shrow end"><button class="primary" data-help="close">${esc(t("got_it"))}</button></div>`;
}
function openHelp(){renderHelp();$("help").hidden=false;const b=$("helpcard").querySelector("button");b&&b.focus()}
function closeHelp(){$("help").hidden=true;const p=P();if(p&&!p.seenHelp){p.seenHelp=true;save()}}
/* ================= MUSIC: the Spy Pop theme, in game =================
   A soft looping version of the teaser's Spy Pop track plays while exploring, plus short stingers
   for a new clue, a wrong accusation and a solved case. Synthesised with WebAudio (no files),
   started only after a tap, paused when the tab is hidden. On by default for 12+, off for under-12s. */
const MUSIC=(()=>{
  let ac=null,out=null,mus=null,padB=null,dl=null,nb=null,timer=null,on=false,step=0,next=0,vol=.32;
  const N=m=>440*Math.pow(2,(m-69)/12),B=.5,S=B/4;  // 120 bpm, 16th-note steps
  const DM=[[62,65,69],[58,62,65],[60,64,67],[57,61,64]];
  const riffA=[38,null,50,38,41,43,44,45],riffB=[38,null,50,38,48,45,41,40];
  const hookA=[[0,74],[3,77],[6,81],[8,79],[10,77],[12,74],[14,72]],hookB=[[0,74],[3,77],[6,81],[8,84],[11,81],[14,79]];
  function ctx(){
    if(ac)return ac;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
    ac=new AC();out=ac.createGain();out.gain.value=0;out.connect(ac.destination);
    const comp=ac.createDynamicsCompressor();comp.threshold.value=-18;comp.ratio.value=4;comp.connect(out);
    mus=ac.createGain();mus.gain.value=1;mus.connect(comp);padB=ac.createGain();padB.connect(mus);
    dl=ac.createDelay(1);dl.delayTime.value=.25;const fb=ac.createGain();fb.gain.value=.25;const wet=ac.createGain();wet.gain.value=.16;dl.connect(fb);fb.connect(dl);dl.connect(wet);wet.connect(mus);
    nb=ac.createBuffer(1,ac.sampleRate,ac.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
    document.addEventListener("visibilitychange",()=>{if(!ac)return;if(document.hidden)ac.suspend();else if(on)ac.resume()});
    return ac;
  }
  const env=(g,t,a,p,d)=>{g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(p,t+a);g.gain.exponentialRampToValueAtTime(.0001,t+a+d)};
  function tone(type,f,t,a,d,p,cut,send){const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=f;let n=o;if(cut){const fl=ac.createBiquadFilter();fl.type="lowpass";fl.frequency.value=cut;o.connect(fl);n=fl}n.connect(g);g.connect(mus);if(send)g.connect(dl);env(g,t,a,p,d);o.start(t);o.stop(t+a+d+.05)}
  function noise(t,d,p,type,f,q){const s=ac.createBufferSource();s.buffer=nb;const fl=ac.createBiquadFilter();fl.type=type;fl.frequency.value=f;fl.Q.value=q||1;const g=ac.createGain();s.connect(fl);fl.connect(g);g.connect(mus);env(g,t,.004,p,d);s.start(t,Math.random()*.5);s.stop(t+d+.05)}
  function kick(t,p){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(140,t);o.frequency.exponentialRampToValueAtTime(44,t+.14);o.connect(g);g.connect(mus);env(g,t,.003,p,.3);o.start(t);o.stop(t+.4);padB.gain.setValueAtTime(.45,t);padB.gain.linearRampToValueAtTime(1,t+.22)}
  const hat=(t,p)=>noise(t,.04,p,"highpass",8000),snare=(t,p)=>{noise(t,.13,p,"bandpass",1900,.9);tone("triangle",190,t,.002,.08,p*.5)};
  const snap=(t,p)=>noise(t,.035,p,"bandpass",2600,5);
  const marimba=(m,t,p)=>{tone("sine",N(m),t,.002,.4,p,0,true);tone("sine",N(m)*4,t,.001,.05,p*.3)};
  const pizz=(m,t,p)=>tone("triangle",N(m),t,.003,.15,p,2400,true);
  function sbass(m,t,d,p,open){const o=ac.createOscillator(),fl=ac.createBiquadFilter(),g=ac.createGain();o.type="sawtooth";o.frequency.value=N(m);fl.type="lowpass";fl.Q.value=5;fl.frequency.setValueAtTime(open,t);fl.frequency.exponentialRampToValueAtTime(220,t+Math.min(d,.16));o.connect(fl);fl.connect(g);g.connect(mus);env(g,t,.004,p,d);o.start(t);o.stop(t+d+.05)}
  function pad(ns,t,d,p){ns.forEach(m=>[-8,8].forEach(dt=>{const o=ac.createOscillator(),fl=ac.createBiquadFilter(),g=ac.createGain();o.type="sawtooth";o.frequency.value=N(m);o.detune.value=dt;fl.type="lowpass";fl.frequency.value=1100;o.connect(fl);fl.connect(g);g.connect(padB);
    g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(p,t+.4);g.gain.setValueAtTime(p,t+d-.3);g.gain.linearRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05)}))}
  function stab(ns,t,p,d){ns.forEach(m=>[-12,0,12].forEach(dt=>{const o=ac.createOscillator(),fl=ac.createBiquadFilter(),g=ac.createGain();o.type="sawtooth";o.frequency.value=N(m);o.detune.value=dt;fl.type="lowpass";fl.Q.value=2;fl.frequency.setValueAtTime(400,t);fl.frequency.linearRampToValueAtTime(3400,t+.04);fl.frequency.exponentialRampToValueAtTime(700,t+d);o.connect(fl);fl.connect(g);g.connect(mus);g.connect(dl);env(g,t,.008,p,d);o.start(t);o.stop(t+d+.05)}))}
  /* one 16th step of the explore loop: 8 bars, calm verse with the hook every other phrase */
  function play(i,t){
    const s=i%16,bar=Math.floor(i/16),b8=bar%8,ch=DM[bar%4],hookOn=b8>=4;
    if(s===0)pad(ch,t,2,.012);
    if(s%2===0){const m=(bar%2?riffB:riffA)[s/2];if(m!=null)sbass(m,t,S*1.6,.13,hookOn?1500:900)}
    if(s===0)kick(t,.42);if(s===6)kick(t,.28);if(s===8)snare(t,.13);if(s===14&&bar%2)kick(t,.25);
    if(s%2===0)hat(t,s%4===2?.04:.022);
    if(!hookOn&&s%4===0)pizz(ch[(s/4)%3]+12,t,.04);
    if(hookOn){const h=(bar%2?hookB:hookA).find(x=>x[0]===s);if(h)marimba(h[1],t,.07)}
    if(b8===3&&s>=12)snap(t,.08);
  }
  function tick(){if(!on||!ac)return;while(next<ac.currentTime+.25){play(step,next);step++;next+=S}}
  function enabled(){const p=typeof P==="function"&&P();if(!p)return false;if(typeof p.music==="boolean")return p.music;return ageOf(p)>=12}
  function setBtn(){const b=document.getElementById("musicBtn");if(!b)return;const e=enabled();b.setAttribute("aria-pressed",String(e));b.innerHTML=`<span aria-hidden="true">${e?"🔊":"🔇"}</span><span class="ml"> ${t(e?"music_on":"music_off")}</span>`;b.setAttribute("aria-label",t(e?"music_on":"music_off"));b.title=t(e?"music_on":"music_off")}
  return {
    start(){setBtn();if(!enabled()||on)return;if(!ctx())return;ac.resume();on=true;step=0;next=ac.currentTime+.1;
      out.gain.cancelScheduledValues(ac.currentTime);out.gain.setValueAtTime(out.gain.value,ac.currentTime);out.gain.linearRampToValueAtTime(vol,ac.currentTime+1.2);
      clearInterval(timer);timer=setInterval(tick,90);tick()},
    stop(){if(!on||!ac){setBtn();return}on=false;clearInterval(timer);const n=ac.currentTime;out.gain.cancelScheduledValues(n);out.gain.setValueAtTime(out.gain.value,n);out.gain.linearRampToValueAtTime(0,n+.6);setTimeout(()=>{if(!on&&ac)ac.suspend()},700);setBtn()},
    toggle(){const p=P();if(!p)return;p.music=!enabled();save();if(p.music)this.start();else this.stop();setBtn()},
    sting(kind){if(!on||!ac)return;const t=ac.currentTime+.03;
      mus.gain.cancelScheduledValues(t);mus.gain.setValueAtTime(1,t);
      if(kind==="clue"){[[0,74],[.07,78],[.14,81],[.21,86]].forEach(([d,m])=>marimba(m,t+d,.14))}
      if(kind==="wrong"){[[0,62],[.16,61],[.32,60]].forEach(([d,m])=>pizz(m,t+d,.1));tone("triangle",N(56),t+.48,.01,.5,.08,900)}
      if(kind==="solved"){stab([65,69,72,77],t,.06,.8);kick(t,.6);[[.3,77],[.42,81],[.54,84],[.66,89]].forEach(([d,m])=>marimba(m,t+d,.13));noise(t,1.2,.06,"highpass",4500)}
    },
    setBtn
  };
})();
/* ================= BASICS ================= */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const COARSE=matchMedia("(pointer: coarse)").matches;
const SVGNS="http://www.w3.org/2000/svg";
const LS3="hushlantern-v3",LS2="wren-casebook-v2";
const freshCases=n=>Array.from({length:n},()=>({found:[],visited:[],attempts:0,hints:0,solved:false}));
const fmt=ms=>{const s=Math.max(0,Math.round(ms/1000));return `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`};
const sceneOf=c=>SCENES[c.scene||c.id];

/* ================= STORE + PROFILES ================= */
let STORE={acct:{profiles:[],current:null,parent:null,lang:null,region:null},prog:{},app:null,legacy:null};
try{const r=localStorage.getItem(LS3);if(r){const p=JSON.parse(r);if(p&&p.acct)STORE=Object.assign(STORE,p)}
  else{const o=JSON.parse(localStorage.getItem(LS2)||"null");if(o&&o.solo)STORE.legacy=o.solo}}catch(e){}
function save(){STORE.savedAt=Date.now();try{localStorage.setItem(LS3,JSON.stringify(STORE))}catch(e){}cloudPush()}
function prog(pid){
  let p=STORE.prog[pid];if(!p)p=STORE.prog[pid]={solo:{},race:{}};p.daily=p.daily||{};p.coop=p.coop||{};p.race=p.race||{};
  GENRES.forEach(g=>{const s=p.solo[g.id];if(!s||!Array.isArray(s.cases)||s.cases.length!==g.cases.length)p.solo[g.id]={cases:freshCases(g.cases.length)}});
  return p;
}
const P=()=>STORE.acct.profiles.find(p=>p.id===STORE.acct.current)||null;
function ageFromYM(ym){const [y,m]=String(ym).split("-").map(Number);const n=new Date();let a=n.getFullYear()-y;if(n.getMonth()+1<m)a--;return a}
const ageOf=p=>ageFromYM(p.ym);
const regionOf=p=>REGION[p&&p.region]||REGION.XX;
const isMinor=p=>ageOf(p)<regionOf(p).consent;
function caseOK(c){const p=P();if(!p)return false;const a=ageOf(p);return a>=c.minAge&&(p.cap==null||c.minAge<=p.cap)}
const worldOK=g=>g.cases.some(caseOK);
function hashPin(pin){let h=2166136261;for(const ch of "hl:"+pin){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)>>>0}return h.toString(36)}

function detectLang(){const n=(navigator.language||"en").toLowerCase().slice(0,2);return LANGS[n]?n:"en"}
function detectRegion(){const m=(navigator.language||"").match(/-([A-Z]{2})$/i);const r=m&&m[1].toUpperCase();return REGION[r]?r:(LANG==="hi"?"IN":"US")}
LANG=STORE.acct.lang||detectLang();

let A={genre:"noir",mode:"solo",code:null,ci:0};
const home={genre:null,mode:"solo",err:"",busy:false,armed:false};
const CAP={db:null,room:null,user:null,uid:null,ready:false};
const MP={nroom:null,peers:[],nicks:{},subs:[],caseSub:null,cases:{},players:{},results:[],resultsReady:false,peerEls:{},writeQ:{}};
let ui={suspect:null,picked:[],verdict:null,justSolved:false,freshClue:null,wasSolved:false};
const G=()=>GENRE[A.genre], C=()=>G().cases[A.ci];
const KIDSPARK=()=>{const p=P();return !!p&&ageOf(p)<12};
const DET=()=>(C()&&C().det)||G().det, HERO=()=>(C()&&C().hero)||G().hero||"Inspector Wren";
const mpReady=()=>!!(CAP.db&&CAP.room&&CAP.uid);
const mpAllowed=()=>{const p=P();return !!p&&(!isMinor(p)||!!p.mp)};

/* ================= TOAST ================= */
let toastT=null;
function toast(msg){const el=$("toast");el.textContent=msg;el.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>el.hidden=true,3600)}

/* ================= CAPABILITIES ================= */
(async()=>{
  try{
    if(window.claude&&typeof claude.use==="function"){
      const [db,room,user]=await Promise.all([claude.use("db"),claude.use("room"),claude.use("user")]);
      CAP.db=db;CAP.room=room;CAP.user=user;
      CAP.uid=user?await user.id():null;
    }
  }catch(e){}
  CAP.ready=true;
  dailySubscribe();
  await cloudPull();
  if(!$("home").hidden)renderHome();
})();

/* ================= STATIC TEXT ================= */
function applyStatic(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-i18n]").forEach(n=>{n.textContent=t(n.dataset.i18n)});
  const h=$("scenehint");if(h)h.textContent=t(COARSE?"tap_hint":"click_hint");
  const lb=$("lookbtn");if(lb)lb.textContent=t(reveal?"hide_clues":"show_clues");
  $("codehint")&&($("codehint").textContent="");
}

/* ================= SCREENS ================= */
function show(which){
  ["onb","home","game"].forEach(id=>$(id).hidden=id!==which);
  $("mbar").hidden=which!=="game";
  $("helpfab").hidden=which==="onb";$("helpfab").classList.toggle("ingame",which==="game");
  if(which!=="home"){$("genres").innerHTML="";$("genres2").innerHTML=""}
  window.scrollTo({top:0});
}

/* ================= ONBOARDING ================= */
const OB={step:"welcome",lang:LANG,region:STORE.acct.region||detectRegion(),m:"",y:"",err:"",par:{email:"",pin:"",consent:false,mp:false},nick:"",opts:[],adding:false,minor:false};
function nickOpts(){const out=new Set();while(out.size<3)out.add(NICK_ADJ[Math.floor(Math.random()*NICK_ADJ.length)]+" "+NICK_ANI[Math.floor(Math.random()*NICK_ANI.length)]);return [...out]}
function startOnboarding(adding){
  Object.assign(OB,{step:adding?"dob":"welcome",m:"",y:"",err:"",par:{email:"",pin:"",consent:false,mp:false},nick:"",opts:nickOpts(),adding:!!adding,minor:false});
  OB.lang=LANG;OB.region=STORE.acct.region||OB.region;
  show("onb");renderOnb();
}
function lantern(sz){return `<svg width="${sz}" height="${sz}" viewBox="0 0 34 34" aria-hidden="true"><path d="M13 7 Q17 1 21 7" fill="none" stroke="currentColor" stroke-width="2.2"/><rect x="11" y="7" width="12" height="3" rx="1" fill="currentColor"/><path d="M11.5 10 L22.5 10 L24 27 L10 27Z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M17 13.5 Q20.5 18 17 23.5 Q13.5 18 17 13.5Z" fill="var(--tag)"/><rect x="9" y="27" width="16" height="3" rx="1" fill="currentColor"/></svg>`}
function renderOnb(){
  const s=OB.step,yNow=new Date().getFullYear();let h="";
  const err=OB.err?`<p class="err" role="alert">${esc(OB.err)}</p>`:"";
  const backBtn=(to)=>`<button class="secondary" data-ob="back" data-to="${to}">${esc(t("back"))}</button>`;
  if(s==="welcome"){
    h=`<div class="obmark">${lantern(44)}</div><h1 class="obh">${esc(t("ob_title"))}</h1><p class="obp">${esc(t("ob_sub"))} ${esc(t("edu_line"))}</p>
      <label class="field"><span>${esc(t("ob_lang"))}</span><select id="ob-lang">${Object.entries(LANGS).map(([k,v])=>`<option value="${k}" ${k===OB.lang?"selected":""}>${v}</option>`).join("")}</select></label>
      <label class="field"><span>${esc(t("ob_region"))}</span><select id="ob-region">${REGIONS.map(r=>`<option value="${r.id}" ${r.id===OB.region?"selected":""}>${esc(r.name)}</option>`).join("")}</select></label>
      <div class="obact"><button class="primary big" data-ob="start">${esc(t("ob_start"))}</button></div>
      <p class="fine">${esc(t("ob_proto"))}</p>`;
  } else if(s==="dob"){
    const ms=t("months");
    h=`<h1 class="obh">${esc(t("dob_title"))}</h1><p class="obp">${esc(t("dob_sub"))}</p>
      <div class="frow"><label class="field"><span>${esc(t("month"))}</span><select id="ob-m"><option value=""></option>${ms.map((n,i)=>`<option value="${i+1}" ${String(i+1)===String(OB.m)?"selected":""}>${esc(n)}</option>`).join("")}</select></label>
      <label class="field"><span>${esc(t("year"))}</span><select id="ob-y"><option value=""></option>${Array.from({length:yNow-1919-3},(_,k)=>yNow-3-k).map(y=>`<option value="${y}" ${String(y)===String(OB.y)?"selected":""}>${y}</option>`).join("")}</select></label></div>
      ${err}<div class="obact">${OB.adding?`<button class="secondary" data-ob="cancel">${esc(t("close"))}</button>`:backBtn("welcome")}<button class="primary big" data-ob="dob">${esc(t("next"))}</button></div>`;
  } else if(s==="young"){
    h=`<div class="obmark">${lantern(44)}</div><h1 class="obh">${esc(t("too_young"))}</h1><div class="obact">${backBtn("dob")}</div>`;
  } else if(s==="grown"){
    h=`<div class="obmark">${lantern(44)}</div><h1 class="obh">${esc(t("grown_title"))}</h1><p class="obp">${esc(t("grown_sub"))}</p>
      <div class="obact">${backBtn("dob")}<button class="primary big" data-ob="grown">${esc(t("grown_go"))}</button></div>`;
  } else if(s==="parent"){
    const p=OB.par;
    h=`<h1 class="obh">${esc(t("par_title"))}</h1><p class="obp">${esc(t("par_sub"))}</p>
      <label class="field"><span>${esc(t("par_email"))}</span><input id="ob-email" type="email" autocomplete="email" value="${esc(p.email)}"></label>
      <label class="field"><span>${esc(t("par_pin"))}</span><input id="ob-pin" type="password" inputmode="numeric" maxlength="4" autocomplete="new-password" value="${esc(p.pin)}"></label>
      <label class="check"><input id="ob-mp" type="checkbox" ${p.mp?"checked":""}><span>${esc(t("par_mp"))}</span></label>
      <label class="check"><input id="ob-consent" type="checkbox" ${p.consent?"checked":""}><span>${esc(t("par_consent"))}</span></label>
      ${err}<div class="obact">${backBtn("grown")}<button class="primary big" data-ob="parent">${esc(t("par_go"))}</button></div>`;
  } else if(s==="nick"){
    h=`<h1 class="obh">${esc(t("nick_title"))}</h1><p class="obp">${esc(t(OB.minor?"nick_kid":"nick_self"))}</p>
      <div class="nicks">${OB.opts.map(n=>`<button class="nick ${OB.nick===n?"sel":""}" data-nick="${esc(n)}" aria-pressed="${OB.nick===n}">${esc(n)}</button>`).join("")}<button class="nick shuffle" data-ob="shuffle">↻ ${esc(t("shuffle"))}</button></div>
      ${OB.minor?"":`<label class="field"><span>${esc(t("nick_type"))}</span><input id="ob-nick" maxlength="16" autocomplete="off" value="${OB.opts.includes(OB.nick)?"":esc(OB.nick)}"></label>`}
      ${err}<div class="obact">${backBtn(OB.minor&&!STORE.acct.parent?"parent":"dob")}<button class="primary big" data-ob="nick">${esc(t("nick_go"))}</button></div>`;
  }
  $("obcard").innerHTML=h;
}
function obNext(act,el){
  OB.err="";
  if(act==="start"){OB.lang=$("ob-lang").value;OB.region=$("ob-region").value;LANG=OB.lang;STORE.acct.lang=LANG;STORE.acct.region=OB.region;save();applyStatic();OB.step="dob"}
  else if(act==="back"){OB.step=el.dataset.to}
  else if(act==="cancel"){goHome();return}
  else if(act==="dob"){
    OB.m=$("ob-m").value;OB.y=$("ob-y").value;
    if(!OB.m||!OB.y){OB.err=t("dob_title");renderOnb();return}
    const ym=`${OB.y}-${String(OB.m).padStart(2,"0")}`,age=ageFromYM(ym);
    if(age<8){OB.step="young"}
    else{OB.minor=age<(REGION[OB.region]||REGION.XX).consent;OB.opts=nickOpts();OB.nick=OB.opts[0];
      OB.step=OB.minor&&!STORE.acct.parent?"grown":"nick";}
  }
  else if(act==="grown"){OB.step="parent"}
  else if(act==="parent"){
    const p=OB.par;p.email=$("ob-email").value.trim();p.pin=$("ob-pin").value.trim();p.mp=$("ob-mp").checked;p.consent=$("ob-consent").checked;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))OB.err=t("err_email");
    else if(!/^\d{4}$/.test(p.pin))OB.err=t("err_pin");
    else if(!p.consent)OB.err=t("err_consent");
    else OB.step="nick";
  }
  else if(act==="shuffle"){OB.opts=nickOpts();OB.nick=OB.opts[0]}
  else if(act==="nick"){
    const typed=$("ob-nick")&&$("ob-nick").value.trim();
    const nick=typed||OB.nick;
    if(!nick||nick.length<2||nick.length>16){OB.err=t("err_nick");renderOnb();return}
    createProfile(nick);return;
  }
  renderOnb();
}
async function createProfile(nick){
  const ym=`${OB.y}-${String(OB.m).padStart(2,"0")}`;
  if(OB.minor&&!STORE.acct.parent){STORE.acct.parent=SEC.ok()?await SEC.makeParent(OB.par.email,OB.par.pin):{pin:legacyPin(OB.par.pin),at:Date.now()};OB.par.pin=""}
  const prof={id:"p"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),nick,ym,region:OB.region,managed:OB.minor,mp:OB.minor?!!OB.par.mp:true,cap:null,at:Date.now()};
  STORE.acct.profiles.push(prof);STORE.acct.current=prof.id;
  const pg=prog(prof.id);
  if(STORE.legacy&&STORE.acct.profiles.length===1){Object.entries(STORE.legacy).forEach(([g,v])=>{if(pg.solo[g]&&v&&Array.isArray(v.cases)&&v.cases.length===pg.solo[g].cases.length)pg.solo[g]=v});STORE.legacy=null}
  save();home.genre=null;goHome();
}

/* ================= PROFILE SHEET ================= */
const SH={view:null,pending:null,err:"",del:null};
function openSheet(view){SH.view=view;SH.err="";SH.del=null;renderSheet();$("sheet").hidden=false;const f=$("sheet").querySelector("button,input,select");f&&f.focus()}
function closeSheet(){$("sheet").hidden=true;SH.view=null;SH.pending=null}
function needPin(action){if(!STORE.acct.parent){action();return}SH.pending=action;openSheet("pin")}
function renderSheet(){
  const cur=P();let h="";
  if(SH.view==="profiles"){
    h=`<h2 class="sh">${esc(t("who"))}</h2><div class="plist">${STORE.acct.profiles.map(p=>`<button class="prow ${p.id===STORE.acct.current?"sel":""}" data-prof="${p.id}">
        <i style="background:${PARTNER_COATS[(p.at%3)+1]}"></i><span><b>${esc(p.nick)}</b><small>${esc(t("age_years",{n:ageOf(p)}))}${p.managed?" · "+esc(t("managed")):""}</small></span></button>`).join("")}</div>
      <div class="shrow"><button class="secondary" data-sh="add">+ ${esc(t("add_player"))}</button>${STORE.acct.parent?`<button class="secondary" data-sh="parent">${esc(t("parent_settings"))}</button>`:""}</div>
      <label class="field"><span>${esc(t("lang_label"))}</span><select id="sh-lang">${Object.entries(LANGS).map(([k,v])=>`<option value="${k}" ${k===LANG?"selected":""}>${v}</option>`).join("")}</select></label>
      <div class="shrow end"><button class="primary" data-sh="close">${esc(t("close"))}</button></div>`;
  } else if(SH.view==="pin"){
    h=`<h2 class="sh">${esc(t("pin_title"))}</h2><label class="field"><span class="sr">${esc(t("pin_title"))}</span><input id="sh-pin" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></label>
      ${SH.err?`<p class="err" role="alert">${esc(SH.err)}</p>`:""}<div class="shrow end"><button class="secondary" data-sh="close">${esc(t("close"))}</button><button class="primary" data-sh="pin">${esc(t("pin_go"))}</button></div>`;
  } else if(SH.view==="parent"){
    const kids=STORE.acct.profiles.filter(p=>p.managed);
    const caps=[null,8,10,11,12];
    h=`<h2 class="sh">${esc(t("parent_settings"))}</h2>${kids.map(p=>`<div class="kid">
        <b>${esc(p.nick)}</b> <small>${esc(t("age_years",{n:ageOf(p)}))}</small>
        <label class="check"><input type="checkbox" data-kmp="${p.id}" ${p.mp?"checked":""}><span>${esc(t("allow_mp"))}</span></label>
        <label class="field"><span>${esc(t("cap"))}</span><select data-kcap="${p.id}">${caps.map(c=>`<option value="${c==null?"":c}" ${p.cap===c?"selected":""}>${c==null?esc(t("cap_all")):esc(t("ages",{n:c}))}</option>`).join("")}</select></label>
        <button class="link" data-kdel="${p.id}">${esc(SH.del===p.id?t("del_confirm"):t("del"))}</button></div>`).join("")||`<p class="note">—</p>`}
      <div class="shrow end"><button class="primary" data-sh="done">${esc(t("done"))}</button></div>`;
  }
  $("sheetcard").innerHTML=h;
}
function switchProfile(id){
  const target=STORE.acct.profiles.find(p=>p.id===id),cur=P();if(!target||id===STORE.acct.current){closeSheet();return}
  const go=()=>{STORE.acct.current=id;save();closeSheet();home.genre=null;goHome()};
  if(!target.managed&&cur&&cur.managed&&STORE.acct.parent){SH.err="";needPin(go)}else go();
}

/* ================= HOME ================= */
function goHome(){
  MUSIC.stop();
  if(!P()){startOnboarding(false);return}
  detachMP(false);clearTimeout(walkTimer);walking=false;
  A={genre:A.genre,mode:"solo",code:null,ci:0};home.err="";home.armed=false;
  applyStatic();show("home");renderHome();
}
function soloSolved(gid){return prog(P().id).solo[gid].cases.filter(c=>c.solved).length}
function renderEdu(){const el=$("edu");if(!el)return;const sk=t("sk"),keys=["observe","read","reason","lie","time","mistakes"];
  el.innerHTML=`<div class="eduh"><b>${esc(t("edu_title"))}</b><span>${esc(t("edu_sub"))}</span></div><div class="edug">${keys.map((k,i)=>`<div class="edut"><span class="edui" aria-hidden="true">${["👁","📖","🧩","🗣","⏱","🔁"][i]}</span><b>${esc(sk[k][0])}</b><small>${esc(sk[k][1])}</small></div>`).join("")}</div>`}
function renderHome(){
  const p=P();if(!p)return;
  renderRank();renderContinue();renderDaily();renderEdu();
  const worlds=GENRES.filter(worldOK);
  if(!home.genre||!worlds.some(g=>g.id===home.genre)){const a0=ageOf(p),pk=worlds.find(g=>g.fit&&a0>=g.fit[0]&&a0<=g.fit[1]);home.genre=(STORE.app&&STORE.app.pid===p.id&&worlds.some(g=>g.id===STORE.app.genre)?STORE.app.genre:(pk||worlds[0]||GENRES[0]).id)}
  $("pchip").innerHTML=`<i style="background:${PARTNER_COATS[(p.at%3)+1]}"></i>${esc(p.nick)} <span aria-hidden="true">▾</span>`;
  const age=ageOf(p),fits=g=>g.fit&&age>=g.fit[0]&&age<=g.fit[1];
  const picked=worlds.filter(fits),more=worlds.filter(g=>!fits(g));
  const card=g=>{const n=soloSolved(g.id),tot=g.cases.filter(caseOK).length;return `<button class="gcard ${home.genre===g.id?"sel":""}" data-genre="${g.id}" aria-pressed="${home.genre===g.id}">
    <svg viewBox="0 0 960 540" aria-hidden="true">${SCENES[g.thumb].bg}</svg>
    <span class="gb"><span class="gtop"><span class="gn" style="font-family:${g.font}">${esc(g.name)}</span><span class="agechip">${esc(t("ages",{n:g.minAge}))}</span></span><span class="gp">${esc(g.place)}</span><span class="gd">${esc(g.blurb)}</span>
    ${n?`<span class="gprog">${esc(t("solved_of",{n,t:tot}))}</span>`:""}</span></button>`};
  const first=picked.length?picked:more,rest=picked.length?more:[];
  $("pickedh").textContent=t(picked.length?"picked":"choose_world");
  $("genres").innerHTML=first.map(card).join("");
  $("moreh").hidden=!rest.length;$("moreh").textContent=t("more_play");
  $("genres2").innerHTML=rest.map(card).join("");
  $("ennote").hidden=LANG==="en";
  const mpOK=mpReady()&&mpAllowed();
  const modes=[["solo","mode_solo","mode_solo_d"],["coop","mode_coop","mode_coop_d"],["race","mode_race","mode_race_d"]];
  if(home.mode!=="solo"&&CAP.ready&&!mpOK)home.mode="solo";
  $("modes").innerHTML=modes.map(([id,n,d])=>`<button class="mode ${home.mode===id?"sel":""}" data-mode="${id}" ${id!=="solo"&&CAP.ready&&!mpOK?"disabled":""} aria-pressed="${home.mode===id}"><b>${esc(t(n))}</b><span>${esc(t(d))}</span></button>`).join("");
  const g=GENRE[home.genre];let h="";
  if(home.mode==="solo"){
    const n=soloSolved(g.id);
    h=`<button class="primary" data-act="solo">${esc(t(n?"continue_w":"start_w",{w:g.name}))}</button>
      ${n?`<button class="secondary" data-act="resetsolo">${esc(t(home.armed?"reset_confirm":"reset_w",{w:g.name}))}</button>`:""}`;
    if(CAP.ready&&mpReady()&&!mpAllowed())h+=`<p class="note" style="flex-basis:100%">${esc(t("mp_off_kid"))}</p>`;
  } else if(!CAP.ready){
    h=`<p class="note">${esc(t("checking_mp"))}</p>`;
  } else {
    const rj=STORE.app&&STORE.app.code&&STORE.app.mode===home.mode&&STORE.app.pid===p.id?STORE.app:null;
    h=`<button class="primary" data-act="create" ${home.busy?"disabled":""}>${esc(t(home.mode==="coop"?"new_table_coop":"new_table_race"))}</button>
      <span class="note">${esc(t("or_join"))}</span>
      <input class="codein" id="codein" maxlength="4" placeholder="${esc(t("code_ph"))}" aria-label="${esc(t("code_ph"))}" autocomplete="off">
      <button class="secondary" data-act="join" ${home.busy?"disabled":""}>${esc(t("join"))}</button>
      ${rj?`<button class="secondary" data-act="rejoin" data-code="${esc(rj.code)}">${esc(t("rejoin",{c:rj.code}))}</button>`:""}
      <p class="note" style="flex-basis:100%">${esc(t("table_note"))}</p>`;
  }
  if(CAP.ready&&!mpReady()&&home.mode==="solo"&&!(mpReady()&&!mpAllowed()))h+=`<p class="note" style="flex-basis:100%">${esc(t("mp_unavail"))}</p>`;
  if(home.err)h+=`<p class="err" style="flex-basis:100%">${esc(home.err)}</p>`;
  $("launch").innerHTML=h;
}

function genCode(){const L="BCDFGHJKLMNPQRSTVWXZ";let s="";for(let i=0;i<4;i++)s+=L[Math.floor(Math.random()*L.length)];return s}
async function createTable(){
  if(!mpAllowed())return;
  home.busy=true;home.err="";renderHome();
  const code=genCode();
  try{await CAP.db.doc("tables/"+code).set({genre:home.genre,mode:home.mode,at:Date.now(),by:CAP.uid})}
  catch(e){home.busy=false;home.err=t("err_create");renderHome();return}
  home.busy=false;await joinTable(code,home.genre,home.mode);
}
async function joinByCode(raw){
  if(!mpAllowed())return;
  const code=String(raw||"").toUpperCase().replace(/[^A-Z]/g,"");
  if(code.length!==4){home.err=t("err_codes");renderHome();return}
  home.busy=true;home.err="";renderHome();
  let snap=null;try{snap=await CAP.db.doc("tables/"+code).get()}catch(e){}
  home.busy=false;
  if(!snap||!snap.exists){home.err=t("err_notable",{c:code});renderHome();return}
  const d=snap.data()||{};
  if(!GENRE[d.genre]||(d.mode!=="coop"&&d.mode!=="race")){home.err=t("err_badtable");renderHome();return}
  if(!worldOK(GENRE[d.genre])){home.err=t("err_agetable");renderHome();return}
  await joinTable(code,d.genre,d.mode);
}
async function joinTable(code,genre,mode){
  A={genre,mode,code,ci:0};STORE.app={genre,mode,code,pid:P().id};save();
  try{MP.nroom=await CAP.room.join("t-"+code.toLowerCase())}catch(e){MP.nroom=null;toast(t("live_off"))}
  attachMP();
  if(mode==="race"){const r=raceStore();let i=r.cases.findIndex((c,j)=>!c.solved&&caseOK(G().cases[j]));A.ci=Math.max(0,i)}
  enterGame();
}
function startSolo(){
  const g=GENRE[home.genre],cs0=prog(P().id).solo[g.id].cases;
  let i=cs0.findIndex((c,j)=>!c.solved&&caseOK(g.cases[j]));
  if(i<0){i=0;g.cases.forEach((c,j)=>{if(caseOK(c))i=j})}
  A={genre:g.id,mode:"solo",code:null,ci:i};STORE.app={genre:g.id,mode:"solo",code:null,pid:P().id};save();enterGame();
}

/* ================= MULTIPLAYER WIRING ================= */
function noteNick(uid,nick){if(typeof uid==="string"&&typeof nick==="string"&&nick.trim())MP.nicks[uid]=nick.trim().slice(0,16)}
function attachMP(){
  detachMP(true);
  const db=CAP.db,code=A.code;
  if(MP.nroom){
    MP.subs.push(MP.nroom.onPeers(ch=>{
      MP.peers=ch.peers.filter(p=>p.kind==="viewer"&&!p.isMe);
      MP.peers.forEach(p=>p.presence&&noteNick(p.presence.uid,p.presence.nick));
      drawPeers();renderTop();renderAccuseState();
    },()=>{}));
  }
  if(A.mode==="coop"){
    MP.subs.push(db.collection(`tables/${code}/cases`).onSnapshot(s=>{
      const m={};s.docs.forEach(d=>m[d.id]=d.data());MP.cases=m;onRemote();
    },()=>toast(t("save_fail"))));
  }
  if(A.mode==="race"){
    MP.resultsReady=false;
    MP.subs.push(db.collection(`tables/${code}/results`).onSnapshot(s=>{
      MP.results=s.docs.map(d=>d.data()).filter(r=>r&&typeof r.ms==="number");
      MP.results.forEach(r=>noteNick(r.uid,r.nick));
      if(MP.resultsReady){
        s.docChanges().forEach(ch=>{const r=ch.doc.data();
          if(ch.type==="added"&&r&&r.uid!==CAP.uid&&r.case===C().id&&r.genre===A.genre)toast(t("cracked",{n:nameOf(r.uid),c:C().title,t:fmt(r.ms)}));
        });
      }
      MP.resultsReady=true;renderBoard();
    },()=>{}));
  }
}
function subscribeCase(){
  if(MP.caseSub){MP.caseSub();MP.caseSub=null}
  MP.players={};
  if(A.mode!=="coop")return;
  MP.caseSub=CAP.db.collection(`tables/${A.code}/cases/${C().id}/players`).onSnapshot(s=>{
    const m={};s.docs.forEach(d=>{m[d.id]=d.data();noteNick(d.id,m[d.id].nick)});MP.players=m;onRemote();
  },()=>{});
}
function detachMP(keepRoom){
  MP.subs.forEach(u=>{try{u()}catch(e){}});MP.subs=[];
  if(MP.caseSub){MP.caseSub();MP.caseSub=null}
  if(!keepRoom&&MP.nroom){MP.nroom.leave().catch(()=>{});MP.nroom=null}
  MP.peers=[];MP.cases={};MP.players={};MP.results=[];MP.peerEls={};
}
function writeDoc(path,data){
  if(!CAP.db)return;
  const ref=CAP.db.doc(path);
  MP.writeQ[path]=(MP.writeQ[path]||Promise.resolve()).then(()=>ref.set(data)).catch(()=>toast(t("save_fail")));
}
const nameOf=uid=>uid===CAP.uid?t("you"):(MP.nicks[uid]||t("partner"));
function coatIdx(uid){if(!uid)return 0;let h=0;for(const ch of uid)h=(h*31+ch.charCodeAt(0))>>>0;return h%4}
const coatFor=uid=>PARTNER_COATS[coatIdx(uid)]||LOOKS[DET()].coat;
function pres(patch){
  if(!MP.nroom||A.mode==="solo")return;
  MP.nroom.presence(Object.assign({uid:CAP.uid,nick:P().nick,g:A.genre,c:C().id},patch)).catch(()=>{});
}
function partnersHere(){
  const seen=new Set(),out=[];
  MP.peers.forEach(p=>{const pr=p.presence||{};
    if(pr.g===A.genre&&pr.c===C().id&&typeof pr.uid==="string"&&pr.uid!==CAP.uid&&!seen.has(pr.uid)){seen.add(pr.uid);out.push(p)}});
  return out;
}

/* ================= CASE STATE (per mode) ================= */
function raceStore(){
  const pg=prog(P().id);let r=pg.race[A.code];
  if(!r||r.genre!==A.genre||!Array.isArray(r.cases)){r=pg.race[A.code]={genre:A.genre,cases:freshCases(G().cases.length)};save()}
  return r;
}
function cs(i){
  const g=G();
  if(g.isDaily)return dailyState(g.cases[i]);
  if(A.mode==="solo")return prog(P().id).solo[g.id].cases[i];
  if(A.mode==="race")return raceStore().cases[i];
  const c=g.cases[i],d=MP.cases[c.id]||{},found=[],visited=[],finder={};
  if(i===A.ci){
    Object.entries(MP.players).forEach(([uid,p])=>{
      (Array.isArray(p.found)?p.found:[]).forEach(f=>{if(typeof f==="string"&&!found.includes(f)){found.push(f);finder[f]=uid}});
      (Array.isArray(p.visited)?p.visited:[]).forEach(v=>{if(typeof v==="string"&&!visited.includes(v))visited.push(v)});
    });
  }
  return {found,visited,finder,attempts:+d.attempts||0,hints:+d.hints||0,solved:!!d.solved,verdict:d.verdict||null};
}
const unlocked=i=>!!G().cases[i]&&caseOK(G().cases[i])&&(G().isDaily||i===0||cs(i-1).solved||!caseOK(G().cases[i-1]));
const casePath=()=>`tables/${A.code}/cases/${C().id}`;
const playerPath=()=>`tables/${A.code}/cases/${C().id}/players/${CAP.uid}`;
function myPlayer(){const p=MP.players[CAP.uid]||{};return {nick:P().nick,found:Array.isArray(p.found)?[...p.found]:[],visited:Array.isArray(p.visited)?[...p.visited]:[],vote:p.vote||null}}
function caseUpdate(fn){
  const cur=Object.assign({solved:false,attempts:0,hints:0,verdict:null},MP.cases[C().id]||{});
  const next=fn(cur);MP.cases[C().id]=next;writeDoc(casePath(),next);
}
function recordVisit(tag,clueId){
  if(A.mode==="coop"){
    const me=myPlayer();
    if(!me.visited.includes(tag))me.visited.push(tag);
    if(clueId&&!me.found.includes(clueId))me.found.push(clueId);
    me.at=Date.now();MP.players[CAP.uid]=me;writeDoc(playerPath(),me);return;
  }
  const st=cs(A.ci);
  if(!st.visited.includes(tag))st.visited.push(tag);
  if(clueId&&!st.found.includes(clueId))st.found.push(clueId);
  save();
}
let voteT=null;
function saveVote(){
  if(A.mode!=="coop")return;
  clearTimeout(voteT);
  voteT=setTimeout(()=>{const me=myPlayer();me.vote=ui.suspect?{s:ui.suspect,p:[...ui.picked]}:null;me.at=Date.now();MP.players[CAP.uid]=me;writeDoc(playerPath(),me)},350);
}
function onRemote(){
  if($("game").hidden)return;
  const st=cs(A.ci);
  if(st.solved&&!ui.wasSolved){
    ui.wasSolved=true;ui.justSolved=true;
    awardCoop();
    renderScene();say({who:t("case_closed"),text:C().wrap});
  } else if(!walking)renderScene();
  else pendingScene=true;
  renderPanels();
}

function awardCoop(){
  if(A.mode!=="coop")return;const st=cs(A.ci),key=A.code+"/"+C().id,pg=prog(P().id);
  if(!pg.coop[key]){pg.coop[key]={need:C().need,attempts:st.attempts,hints:st.hints,solved:true,at:Date.now()};save();ptsToast(casePts(C().need,pg.coop[key]).total)}
}
function saveDraft(){if(A.mode==="coop")return;const st=cs(A.ci);st.draft={s:ui.suspect,p:[...ui.picked]};save()}

/* ================= SCENE ================= */
let wren={x:-60,y:510,face:1},walkTimer=null,walking=false,pendingScene=false,reveal=false;
function placeWren(dur){
  const g=$("wren");if(!g)return;
  g.style.transition=dur?`transform ${dur}s linear`:"none";
  g.style.transform=`translate(${wren.x}px,${wren.y}px)`;
  const f=$("wrenFlip");if(f)f.setAttribute("transform",`scale(${wren.face},1)`);
}
function follow(x,dur){
  const sc=$("scene"),svg=sc&&sc.querySelector("svg");if(!svg)return;
  const w=svg.getBoundingClientRect().width;if(w<=sc.clientWidth+2)return;
  const left=Math.max(0,Math.min(w-sc.clientWidth,x/960*w-sc.clientWidth/2));
  sc.scrollTo({left,behavior:RM||!dur?"auto":"smooth"});
}
function walkTo(x,cb){
  clearTimeout(walkTimer);
  const g=$("wren"),dist=Math.abs(x-wren.x);
  if(dist>2)wren.face=x<wren.x?-1:1;
  const dur=RM?0:Math.min(1.8,Math.max(.25,dist/420));
  wren.x=x;follow(x,dur);
  pres({x,f:wren.face,d:Math.round(dur*1000)});
  const done=()=>{walking=false;if(g)g.classList.remove("walking");if(pendingScene){pendingScene=false;renderScene()}cb&&cb()};
  if(dur&&dist>4&&g){walking=true;g.classList.add("walking");placeWren(dur);walkTimer=setTimeout(done,dur*1000)}
  else{placeWren(0);done()}
}
function setReveal(v){reveal=v;const b=$("lookbtn");if(b){b.setAttribute("aria-pressed",v);b.textContent=t(v?"hide_clues":"show_clues")}const svg=$("scene").querySelector("svg");if(svg)svg.classList.toggle("reveal",v)}
function renderScene(){
  const c=C(),sc=sceneOf(c),st=cs(A.ci);
  const hots=c.places.map(p=>{
    const [x,y,w,h]=sc.hot[p.id],seen=st.visited.includes("p:"+p.id),ly=y<50?y+h+22:y-10;
    return `<g class="hot" tabindex="0" role="button" aria-label="${esc(p.name)}" data-place="${p.id}">
      <rect class="hit" x="${x}" y="${y}" width="${w}" height="${h}" rx="6"/>
      ${!seen&&KIDSPARK()?`<g transform="translate(${x+w-4},${y+2})"><path class="spark" d="M0 -11 L3 -3 L11 0 L3 3 L0 11 L-3 3 L-11 0 L-3 -3Z" fill="#FFE07A" stroke="#B9821F" stroke-width="1.2"/></g>`:""}
      ${seen?`<g class="tagmark" transform="translate(${x+w-6},${y+4})"><path d="M0 0 L14 0 L20 7 L14 14 L0 14Z" fill="${p.clue?"#E8B54E":"#9AA6B6"}" stroke="#0B0F15" stroke-width="1.5"/><circle cx="4" cy="7" r="2" fill="#0B0F15"/></g>`:""}
      <text class="lbl" x="${Math.min(Math.max(x+w/2,80),880)}" y="${ly}" text-anchor="middle">${esc(p.name)}</text></g>`;
  }).join("");
  const ppl=c.people.map(p=>{
    const [x,y]=sc.people[p.id],culprit=st.solved&&p.id===c.culprit;
    const k=LOOKS[p.id].s||1;
    return `<g class="person ${culprit?"culprit":""}" id="per-${p.id}" tabindex="0" role="button" aria-label="${esc(p.name)}, ${esc(p.role)}" data-person="${p.id}" transform="translate(${x},${y})">
      <ellipse class="ring" cx="0" cy="2" rx="${Math.round(34*Math.max(k,.75))}" ry="9"/>
      <rect x="-32" y="${-Math.round(172*k)-6}" width="64" height="${Math.round(176*k)+6}" fill="transparent"/>
      ${figure(LOOKS[p.id])}
      <g class="bubble" transform="translate(16,${-Math.round(200*k)})"><path d="M0 0 h36 a8 8 0 0 1 8 8 v14 a8 8 0 0 1 -8 8 h-24 l-8 8 v-8 h-4 a8 8 0 0 1 -8 -8 v-14 a8 8 0 0 1 8 -8z" fill="#F7F5EF" stroke="#0B0F15" stroke-width="2"/><circle cx="12" cy="15" r="2.5" fill="#0B0F15"/><circle cx="22" cy="15" r="2.5" fill="#0B0F15"/><circle cx="32" cy="15" r="2.5" fill="#0B0F15"/></g>
      <text class="lbl" x="0" y="${-Math.round(180*k)}" text-anchor="middle">${esc(p.name)}</text></g>`;
  }).join("");
  const mine=A.mode==="solo"?null:coatFor(CAP.uid);
  $("scene").innerHTML=`<svg viewBox="0 0 960 540" role="img" aria-label="${esc(c.title)}"><defs><radialGradient id="hlvign" cx="50%" cy="45%" r="75%"><stop offset="60%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".28"/></radialGradient></defs>
    ${sc.bg}<rect width="960" height="540" fill="url(#hlvign)" pointer-events="none"/>${hots}${ppl}<g id="peers"></g>
    <g id="wren"><g id="wrenFlip">${figure(LOOKS[DET()],mine)}</g>${A.mode==="solo"?"":`<text class="plabel" x="0" y="${-Math.round(178*(LOOKS[DET()].s||1))}" text-anchor="middle">${esc(t("you"))}</text>`}</g>
  </svg>`;
  wren.y=sc.floor;placeWren(0);
  if(reveal)$("scene").querySelector("svg").classList.add("reveal");
  fitLabels();
  MP.peerEls={};drawPeers();
}
/* keep scene labels inside the picture and apart from each other (they all show in "Show clues") */
function fitLabels(){const svg=$("scene")&&$("scene").querySelector("svg");if(!svg)return;
  const its=[...svg.querySelectorAll(".person > .lbl"),...svg.querySelectorAll(".hot .lbl")].map(e=>{
    if(e.dataset.x0==null){e.dataset.x0=e.getAttribute("x");e.dataset.y0=e.getAttribute("y")}e.setAttribute("x",e.dataset.x0);e.setAttribute("y",e.dataset.y0);
    const g=e.closest(".person"),m=g&&g.transform.baseVal.consolidate();let b;try{b=e.getBBox()}catch(_){b={x:0,y:0,width:0,height:0}}
    return {e,ox:m?m.matrix.e:0,oy:m?m.matrix.f:0,b,dx:0,dy:0}});
  const box=i=>({x:i.b.x+i.ox+i.dx,y:i.b.y+i.oy+i.dy,w:i.b.width,h:i.b.height});
  const hits=(A,Q)=>Math.min(A.x+A.w,Q.x+Q.w)-Math.max(A.x,Q.x)>2&&Math.min(A.y+A.h,Q.y+Q.h)-Math.max(A.y,Q.y)>2;
  const placed=[];
  its.forEach(i=>{if(!i.b.width)return;let B=box(i);
    if(B.x<6)i.dx+=6-B.x;B=box(i);if(B.x+B.w>954)i.dx+=954-B.x-B.w;B=box(i);if(B.y<4)i.dy+=4-B.y;
    for(let k=0;k<8;k++){const A=box(i),h=placed.find(q=>hits(A,box(q)));if(!h)break;const Q=box(h);
      const up=Q.y-(A.y+A.h)-3;if(A.y+up>4)i.dy+=up;else i.dy+=Q.y+Q.h+3-A.y}
    i.e.setAttribute("x",+i.e.dataset.x0+i.dx);i.e.setAttribute("y",+i.e.dataset.y0+i.dy);placed.push(i)});
}
let fitT=null;addEventListener("resize",()=>{clearTimeout(fitT);fitT=setTimeout(fitLabels,150)});
function drawPeers(force){
  const layer=$("peers");if(!layer||A.mode==="solo")return;
  const sc=sceneOf(C()),keep=new Set();
  partnersHere().forEach(p=>{
    const pr=p.presence,x=typeof pr.x==="number"&&isFinite(pr.x)?Math.max(-80,Math.min(1040,pr.x)):(sc.start||110),y=sc.floor-8;
    keep.add(p.peer);
    let el=MP.peerEls[p.peer];
    if(!el||!el.node.isConnected){
      const g=document.createElementNS(SVGNS,"g");g.setAttribute("class","peer");layer.appendChild(g);
      el=MP.peerEls[p.peer]={node:g,x,sig:""};g.style.transform=`translate(${x}px,${y}px)`;
    }
    const f=pr.f===-1?-1:1,nm=nameOf(pr.uid),act=typeof pr.act==="string"?pr.act.slice(0,48):"";
    const sig=[pr.uid,f,nm,act].join("|");
    if(el.sig!==sig||force){
      el.node.innerHTML=`<g transform="scale(${f},1)">${figure(LOOKS[DET()],coatFor(pr.uid))}</g><text class="plabel" x="0" y="${Math.round((act?-192:-178)*(LOOKS[DET()].s||1))-(act?6:0)}" text-anchor="middle"></text>${act?`<text class="pact" x="0" y="${Math.round(-176*(LOOKS[DET()].s||1))}" text-anchor="middle"></text>`:""}`;
      el.node.querySelector(".plabel").textContent=nm;
      if(act)el.node.querySelector(".pact").textContent=act;
      el.sig=sig;
    }
    if(Math.abs(el.x-x)>1){
      const d=Math.min(2500,Math.max(0,+pr.d||600));
      el.node.style.transition=RM?"none":`transform ${d}ms linear`;
      el.node.style.transform=`translate(${x}px,${y}px)`;
      el.node.classList.add("walking");clearTimeout(el.t);
      el.t=setTimeout(()=>el.node.classList.remove("walking"),RM?0:d);el.x=x;
    }
  });
  Object.keys(MP.peerEls).forEach(k=>{if(!keep.has(k)){MP.peerEls[k].node.remove();delete MP.peerEls[k]}});
}

/* case number + "ages · clues" line follow the player's language (story text stays as written) */
function caseNo(k){if(LANG==="en"||!k)return k&&k.no||"";const m=/(\d+)/.exec(k.no||"");return m?t("case_no",{n:m[1]}):k.no}
function caseMeta(c){if(LANG==="en")return c.meta;return t(c.need>1?"meta_n":"meta_1",{a:c.minAge||8,k:c.need})}
/* ================= CHARACTER REACTIONS ================= */
function react(node,cls,ms){if(!node||RM)return;node.classList.remove(cls);void node.getBoundingClientRect();node.classList.add(cls);clearTimeout(node["_"+cls]);if(ms)node["_"+cls]=setTimeout(()=>node.classList.remove(cls),ms)}
/* ================= DIALOGUE ================= */
let typeTimer=null,typeFull="";
function say(o){
  clearInterval(typeTimer);
  document.querySelectorAll(".person.talking").forEach(n=>n.classList.remove("talking"));
  if(o.speaker){const n=$("per-"+o.speaker);if(n)n.classList.add("talking")}
  $("dialog").innerHTML=`<span class="who">${esc(o.who)}${o.role?` <span>· ${esc(o.role)}</span>`:""}</span>
    <p class="line ${o.quote?"quote":""}" id="dline"></p>
    ${o.newClue?`<span class="new">${esc(t("new_clue",{c:o.newClue}))}</span>`:""}
    ${o.tip?`<span class="tip">${esc(o.tip)}</span>`:""}`;
  typeFull=o.quote?`“${o.text}”`:o.text;
  $("live").textContent=`${o.who}: ${o.text}${o.newClue?". "+t("new_clue",{c:o.newClue}):""}`;
  const el=$("dline");
  if(RM){el.textContent=typeFull;return}
  let n=0;typeTimer=setInterval(()=>{n+=2;el.textContent=typeFull.slice(0,n);if(n>=typeFull.length)clearInterval(typeTimer)},16);
}
function skipType(){clearInterval(typeTimer);const el=$("dline");if(el)el.textContent=typeFull}

/* ================= PANELS ================= */
function clueIndex(c){const m={};c.places.forEach(p=>{if(p.clue)m[p.clue.id]={...p.clue,kind:t("evidence"),src:p.name,ev:1}});c.people.forEach(p=>{if(p.clue)m[p.clue.id]={...p.clue,kind:t("testimony"),src:p.name,ev:0}});return m}
function HINTS(c){const idx=clueIndex(c),pid=c.proof[0],st=cs(A.ci);let a;if(st.found.includes(pid))a=t("auto_hint_c",{c:idx[pid].t});else{const src=(c.places.find(p=>p.clue&&p.clue.id===pid)||c.people.find(p=>p.clue&&p.clue.id===pid)||{}).name||"";a=t("auto_hint_p",{p:src})}return c.hints.concat([a])}
function portrait(id){const o=Object.assign({},LOOKS[id],{s:0});return `<svg class="pface" viewBox="-36 -190 72 88" aria-hidden="true">${figure(o)}</svg>`}
function caseSkills(c,st){const out=["observe","read"];const txt=JSON.stringify([c.places,c.people]);if(c.people.some(p=>p.clue))out.push("lie");if(/\d:\d\d|\bbell\b|\bpm\b|\bam\b|o.clock/i.test(txt))out.push("time");if(c.need>1)out.push("reason");if(st.attempts>0)out.push("mistakes");if(A.mode==="coop")out.push("team");const u=[...new Set(out)];return u.length>4?["observe"].concat(u.slice(-3)):u}
function renderTop(){
  if($("game").hidden)return;
  $("gtitle").textContent=G().name;
  $("gmode").textContent=t(A.mode==="solo"?"mode_solo":A.mode==="coop"?"mode_coop":"mode_race");
  if(A.mode==="solo"){$("gright").innerHTML="";return}
  const seen=new Set(),others=[];
  MP.peers.forEach(p=>{const u=p.presence&&p.presence.uid;if(typeof u==="string"&&u!==CAP.uid&&!seen.has(u)){seen.add(u);others.push(p)}});
  $("gright").innerHTML=`<span class="codechip">${esc(t("table"))} <b>${esc(A.code)}</b><button data-act="copy">${esc(t("copy"))}</button></span>
    <span class="who-list"><span class="avatar"><i style="background:${coatFor(CAP.uid)}"></i>${esc(P().nick)}</span>${others.map(p=>{
      const pr=p.presence,cc=G().cases.find(x=>x.id===pr.c);
      return `<span class="avatar"><i style="background:${coatFor(pr.uid)}"></i><span data-name="${esc(pr.uid)}"></span>${pr.g===A.genre&&cc?` <span style="color:var(--muted)">· ${esc(cc.no)}</span>`:""}</span>`}).join("")}</span>`;
  $("gright").querySelectorAll("[data-name]").forEach(n=>n.textContent=nameOf(n.dataset.name));
}
function renderPanels(){
  if($("game").hidden)return;
  const i=A.ci,c=C(),st=cs(i),clues=clueIndex(c);
  renderTop();
  $("folders").innerHTML=G().cases.map((k,j)=>{const s=cs(j),ok=caseOK(k),lock=!unlocked(j);
    const stx=!ok?t("ages",{n:k.minAge}):s.solved?t("st_solved"):lock?t("st_locked"):t("st_open");
    return `<button class="folder ${j===i?"active":""} ${lock?"locked":""} ${s.solved?"solved":""}" data-case="${j}" ${lock?'aria-disabled="true"':""}>
      <span class="no">${esc(caseNo(k))}</span><span class="nm">${lock?esc(t("sealed")):esc(k.title)}</span><span class="st">${esc(stx)}</span></button>`}).join("");
  $("brief").innerHTML=`<h2>${esc(c.title)}</h2><span class="meta">${esc(caseMeta(c))}</span>`;
  updateStats();
  $("mbnb").textContent=`${t("notebook")} (${st.found.length})`;
  $("notebook").innerHTML=st.found.length?st.found.map(id=>{const k=clues[id];if(!k)return "";const on=ui.picked.includes(id);
    const by=A.mode==="coop"&&st.finder&&st.finder[id]&&st.finder[id]!==CAP.uid?`<span class="by" data-name="${esc(st.finder[id])}"></span><br>`:"";
    return `<div class="clue ro ${on?"checked":""} ${ui.freshClue===id?"fresh":""}"><span><span class="kind">${esc(k.kind)} · ${esc(t("from_src",{s:k.src}))}</span><br>${by}<span class="t">${esc(k.t)}</span><br><span class="d">${esc(k.d)}</span></span></div>`}).join("")
    :`<p class="empty">${esc(t("nb_empty"))}</p>`;
  $("notebook").querySelectorAll("[data-name]").forEach(n=>n.textContent=t("found_by",{n:nameOf(n.dataset.name)}));
  ui.freshClue=null;
  $("suspects").innerHTML=c.people.map(p=>`<button class="suspect ${ui.suspect===p.id?"sel":""}" data-suspect="${p.id}" aria-pressed="${ui.suspect===p.id}" ${st.solved?"disabled":""}>${portrait(p.id)}<b>${esc(p.name)}</b><small>${esc(p.role)}</small></button>`).join("");
  $("proofs").classList.toggle("wait",!ui.suspect&&!st.solved);$("proofs").innerHTML=st.found.length?st.found.map(id=>{const k=clues[id];if(!k)return "";const on=ui.picked.includes(id);
    return `<button class="proof ${on?"sel":""}" data-clue="${id}" aria-pressed="${on}" ${st.solved?"disabled":""}><span class="pk ${k.ev?"ev":"tm"}" aria-hidden="true">${k.ev?"🔍":"💬"}</span><span class="pt"><b>${esc(k.t)}</b><small>${esc(k.d)}</small></span><span class="pc" aria-hidden="true">${on?"✓":""}</span></button>`}).join(""):`<p class="empty">${esc(t("no_proofs"))}</p>`;
  const kidT=P()&&ageOf(P())<12;$("thinkh").textContent=t("think_title");$("thinkl").innerHTML=t(kidT?"think_kid":"think").map(q=>`<li>${esc(q)}</li>`).join("");$("st1h").textContent=t("step_who");$("st2h").textContent=t("step_proof");
  renderAccuseState();
  const vt=A.mode==="coop"?(st.verdict&&!st.solved?st.verdict:null):(ui.verdict?{t:ui.verdict}:null);
  $("verdict").innerHTML=vt?`<p class="verdict"><b>${esc(t(A.mode==="coop"?"not_enough_pl":"not_enough"))}</b> ${esc(vt.t)}</p>`:"";
  const HS=HINTS(c);
  $("hintBtn").disabled=st.solved||st.hints>=HS.length;
  $("hintBtn").textContent=t(st.hints>=HS.length?"no_hints":A.mode==="coop"?"hint_shared":"hint");
  $("hints").innerHTML=HS.slice(0,st.hints).map(h=>`<p class="hinttext">${esc(h)}</p>`).join("");
  renderBoard();
  if(st.solved){
    let nx=-1;for(let j=i+1;j<G().cases.length;j++){if(caseOK(G().cases[j])){nx=j;break}}
    const allDone=G().cases.every((k,j)=>!caseOK(k)||cs(j).solved);
    const raceLine=A.mode==="race"&&typeof st.ms==="number"?t("solved_in",{t:fmt(st.ms)}):"";
    $("solvedSlot").innerHTML=`<section class="panel solved-card"><span class="stamp ${ui.justSolved?"anim":""}">${esc(t("solved_stamp"))}</span>
      <h3>${esc(t("did_it",{n:c.people.find(p=>p.id===c.culprit).name}))}</h3><p>${esc(c.wrap)}</p>
      <span class="stats">${esc(t("solved_stats",{w:st.attempts,h:st.hints}))}${esc(raceLine)}</span>
      <div class="skillrow"><span>${esc(t("skills_used"))}</span>${caseSkills(c,st).map(k=>`<i>${esc(t("sk")[k][0])}</i>`).join("")}</div>
      ${(()=>{const q=casePts(c.need,st,G().isDaily);return `<div class="ptsline"><b>${esc(t("plus_pts",{n:q.total}))}</b><span>${esc(t("pts_base"))} ${q.base}</span>${q.pen?`<span>${esc(t("pts_pen"))} −${q.pen}</span>`:""}${q.first?`<span>${esc(t("pts_first"))} +${q.first}</span>`:""}${q.night?`<span>${esc(t("pts_daily"))} +${q.night}</span>`:""}</div>`})()}
      ${nx<0?(()=>{const later=G().cases.findIndex((k,j)=>!caseOK(k)&&!cs(j).solved);if(later>=0)return `<p class="finale">${esc(t("age_later",{c:caseNo(G().cases[later]),a:G().cases[later].minAge}))}</p>`;return allDone?`<p class="finale">${esc(t("all_done",{w:G().name}))}</p>`:""})():`<button class="next" data-case="${nx}">${esc(t("open_case",{c:caseNo(G().cases[nx])}))}</button>`}</section>`;
  } else $("solvedSlot").innerHTML="";
  ui.justSolved=false;
}
function votesAgree(){
  if(A.mode!=="coop")return true;
  return partnersHere().every(p=>{const v=(MP.players[p.presence.uid]||{}).vote;
    return v&&v.s===ui.suspect&&Array.isArray(v.p)&&v.p.length===ui.picked.length&&ui.picked.every(x=>v.p.includes(x))});
}
function renderAccuseState(){
  if($("game").hidden)return;
  const c=C(),st=cs(A.ci),n=ui.picked.length,need=c.need;
  const base=!st.solved&&ui.suspect&&n===need,agree=votesAgree();
  $("go").disabled=!(base&&agree);
  const mb=$("mbac");if(mb)mb.classList.toggle("hl",!!(base&&agree));
  const sn=ui.suspect&&(c.people.find(p=>p.id===ui.suspect)||{}).name;
  let req=st.solved?t("req_closed"):!ui.suspect?t("pick_first"):(need===1?t("proof_q1",{n:sn}):t("proof_qN",{n:sn,k:need,c:n}));
  $("go").textContent=sn&&!st.solved?t("accuse_n",{n:sn}):t("make_acc");
  if(A.mode==="coop"&&base&&!agree)req=t("req_wait");
  $("req").textContent=req;
  if(A.mode!=="coop"||st.solved){$("partners").innerHTML="";return}
  const ps=partnersHere();
  if(!ps.length){$("partners").innerHTML=`<div class="partners"><p class="note">${esc(t("partners_empty"))}</p></div>`;return}
  $("partners").innerHTML=`<div class="partners">${ps.map(p=>{
    const uid=p.presence.uid,v=(MP.players[uid]||{}).vote;
    let desc=t("p_none"),cls="wait",lab=t("p_waiting");
    if(v&&v.s){const s=c.people.find(x=>x.id===v.s);const idx=clueIndex(c);
      desc=`${s?s.name:"?"}${Array.isArray(v.p)&&v.p.length?" · "+v.p.map(x=>idx[x]?idx[x].t:"?").join(", "):""}`;
      const same=v.s===ui.suspect&&Array.isArray(v.p)&&v.p.length===ui.picked.length&&ui.picked.every(x=>v.p.includes(x));
      cls=same?"ok":"no";lab=t(same?"p_agrees":"p_diff");}
    return `<div class="partner"><i style="background:${coatFor(uid)}"></i><span class="v"><b data-name="${esc(uid)}"></b> · ${esc(desc)}</span><span class="s ${cls}">${esc(lab)}</span></div>`;
  }).join("")}</div>`;
  $("partners").querySelectorAll("[data-name]").forEach(n=>n.textContent=nameOf(n.dataset.name));
}
function updateStats(){
  if($("game").hidden)return;
  const c=C(),st=cs(A.ci),tot=Object.keys(clueIndex(c)).length;
  let s=t("stats",{f:st.found.length,t:tot,w:st.attempts,h:st.hints});
  if(A.mode==="race")s+=` · ${fmt(st.solved?st.ms:Date.now()-(st.startedAt||Date.now()))}`;
  $("stats").textContent=s;
}
function renderBoard(){
  if($("game").hidden)return;
  if(A.mode!=="race"){$("board").innerHTML="";return}
  const c=C(),rows=MP.results.filter(r=>r.case===c.id&&r.genre===A.genre)
    .map(r=>({...r,score:r.ms+60000*(+r.wrong||0)+30000*(+r.hints||0)})).sort((a,b)=>a.score-b.score);
  $("board").innerHTML=`<div class="partners"><p class="label">${esc(t("race_board",{c:caseNo(c)}))}</p>
    <p class="note">${esc(t("race_note"))}</p>
    <div class="board">${rows.length?rows.map((r,k)=>`<div class="brow ${r.uid===CAP.uid?"me":""}"><span>${k+1}</span><span data-name="${esc(r.uid)}"></span><span class="t">${fmt(r.score)}</span></div>`).join(""):`<p class="empty">${esc(t("race_none"))}</p>`}</div></div>`;
  $("board").querySelectorAll("[data-name]").forEach(n=>n.textContent=nameOf(n.dataset.name));
}
setInterval(()=>{if(A.mode==="race")updateStats()},1000);

/* ================= FLOW ================= */
function enterGame(){
  applyStatic();show("game");MUSIC.start();
  document.documentElement.style.setProperty("--f-genre",(C()&&C().font)||G().font);
  openCase(A.ci,true);
}
function openCase(j,first){
  if(!unlocked(j))return;
  A.ci=j;
  subscribeCase();
  const st=cs(j);
  if(A.mode==="race"&&!st.startedAt&&!st.solved){st.startedAt=Date.now();save()}
  const mv=A.mode==="coop"?myPlayer().vote:(st.draft||null);
  STORE.app=Object.assign({},STORE.app||{},{genre:A.genre,mode:A.mode,code:A.code,pid:P().id,ci:j,cid:G().cases[j].id,inGame:true});save();
  ui={suspect:mv&&mv.s||null,picked:mv&&Array.isArray(mv.p)?[...mv.p]:[],verdict:null,justSolved:false,freshClue:null,wasSolved:st.solved};
  clearTimeout(walkTimer);walking=false;pendingScene=false;
  wren.x=-60;wren.face=1;
  renderPanels();renderScene();
  const sc=sceneOf(C());
  pres({x:sc.start||110,f:1,d:0,act:""});
  const c=C();
  if(st.solved)say({who:t("case_closed"),text:c.wrap});
  else say({who:t("case_file"),text:c.brief,tip:st.found.length?"":t(A.mode==="coop"?"tip_coop":"tip_solo")});
  requestAnimationFrame(()=>requestAnimationFrame(()=>walkTo(sc.start||110)));
  if(!P().seenHelp)setTimeout(openHelp,900);
  if(!first)window.scrollTo({top:0,behavior:RM?"auto":"smooth"});
}
function examine(id){
  const c=C(),p=c.places.find(x=>x.id===id),sc=sceneOf(c);
  pres({act:t("examining",{p:p.name})});
  walkTo(sc.stand[id],()=>{
    const isNew=!!(p.clue&&!cs(A.ci).found.includes(p.clue.id));
    recordVisit("p:"+id,p.clue&&p.clue.id);
    if(isNew)ui.freshClue=p.clue.id;
    renderPanels();renderScene();
    say({who:(c.examine||G().examine),role:p.name,text:p.text,newClue:isNew?p.clue.t:null});
    if(isNew){react($("wren"),"hop",1100);MUSIC.sting("clue")}
  });
}
function question(id){
  const c=C(),p=c.people.find(x=>x.id===id),[px]=sceneOf(c).people[id];
  pres({act:t("questioning",{p:p.name})});
  walkTo(wren.x<=px?px-72:px+72,()=>{
    wren.face=px<wren.x?-1:1;placeWren(0);pres({f:wren.face});
    const isNew=!!(p.clue&&!cs(A.ci).found.includes(p.clue.id));
    recordVisit("q:"+id,p.clue&&p.clue.id);
    if(isNew)ui.freshClue=p.clue.id;
    renderPanels();
    say({who:p.name,role:p.role,text:p.says,quote:true,newClue:isNew?p.clue.t:null,speaker:id});
    if(isNew){react($("wren"),"hop",1100);MUSIC.sting("clue")}
  });
}
function accuse(){
  const c=C(),st=cs(A.ci),name=c.people.find(p=>p.id===ui.suspect).name,g=G();
  const fail=(msg,line)=>{
    if(A.mode==="coop")caseUpdate(cur=>({...cur,attempts:(+cur.attempts||0)+1,verdict:{t:msg,at:Date.now(),by:CAP.uid}}));
    else{st.attempts++;ui.verdict=msg;save()}
    renderPanels();say({who:name,role:t("accused"),text:line,quote:true,speaker:ui.suspect});react($("wren"),"shrug",1100);MUSIC.sting("wrong");
  };
  const rt=c.retorts||g.retorts;
  if(ui.suspect!==c.culprit){fail(t("wrong_person",{n:name}),rt[0]);return}
  const bad=ui.picked.filter(id=>!c.proof.includes(id));
  if(bad.length){const good=ui.picked.length-bad.length;fail((good>0?t("one_good"):t("wrong_proof"))+" "+(c.herrings[bad[0]]||t("no_connect")),rt[1]);return}
  ui.wasSolved=true;ui.justSolved=true;ui.verdict=null;
  if(A.mode==="coop"){caseUpdate(cur=>({...cur,solved:true,verdict:null,solvedAt:Date.now(),by:CAP.uid}));awardCoop()}
  else{
    st.solved=true;st.solvedAt=Date.now();delete st.draft;
    if(g.isDaily){st.need=c.need;st.date=c.date;st.onTime=dstr(new Date())===c.date}
    ptsToast(casePts(c.need,st,g.isDaily).total);
    if(A.mode==="race"){st.ms=Date.now()-(st.startedAt||Date.now());writeDoc(`tables/${A.code}/results/${g.id}.${c.id}.${CAP.uid}`,{genre:g.id,case:c.id,uid:CAP.uid,nick:P().nick,ms:st.ms,wrong:st.attempts,hints:st.hints,at:Date.now()})}
    save();
  }
  const [px]=sceneOf(c).people[c.culprit];
  walkTo(wren.x<=px?px-72:px+72,()=>{renderPanels();renderScene();say({who:HERO(),text:c.wrap});
    react($("wren"),"cheer",2400);MUSIC.sting("solved");react($("per-"+c.culprit),"busted",0);
    $("solvedSlot").scrollIntoView({behavior:RM?"auto":"smooth",block:"nearest"})});
}

/* ================= EVENTS ================= */
document.addEventListener("click",e=>{
  if(e.target.id==="sheet"){closeSheet();return}
  if(e.target.id==="help"){closeHelp();return}
  const hot=e.target.closest(".hot"),per=e.target.closest(".person");
  if(hot){examine(hot.dataset.place);return}
  if(per){question(per.dataset.person);return}
  if(e.target.closest("#dialog")){skipType();return}
  const tg=e.target.closest("button,input,select");if(!tg)return;
  /* onboarding */
  if(tg.dataset.ob){obNext(tg.dataset.ob,tg);return}
  if(tg.dataset.nick){OB.nick=tg.dataset.nick;const i=$("ob-nick");if(i)i.value="";renderOnb();return}
  /* sheet */
  if(tg.id==="pchip"){openSheet("profiles");return}
  if(tg.dataset.prof){switchProfile(tg.dataset.prof);return}
  if(tg.dataset.sh){const a=tg.dataset.sh;
    if(a==="close"){closeSheet();if(!$("home").hidden)renderHome();return}
    if(a==="add"){needPin(()=>{closeSheet();startOnboarding(true)});return}
    if(a==="parent"){needPin(()=>openSheet("parent"));return}
    if(a==="done"){closeSheet();renderHome();return}
    if(a==="pin"){const v=($("sh-pin")||{}).value||"";tg.disabled=true;
      (async()=>{const ok=await SEC.check(STORE.acct.parent,v);
        if(ok){if(STORE.acct.parent.v!==2&&SEC.ok()){STORE.acct.parent=await SEC.makeParent(STORE.acct.parent.email||"",v);save()}
          const fn=SH.pending;SH.pending=null;fn&&fn()}
        else{SH.err=t("pin_wrong");renderSheet();const i=$("sh-pin");i&&i.focus()}})();
      return}
  }
  if(tg.dataset.kdel){const id=tg.dataset.kdel;
    if(SH.del===id){STORE.acct.profiles=STORE.acct.profiles.filter(p=>p.id!==id);delete STORE.prog[id];if(STORE.acct.current===id)STORE.acct.current=(STORE.acct.profiles[0]||{}).id||null;save();SH.del=null;
      if(!STORE.acct.profiles.length){closeSheet();startOnboarding(false);return}}
    else SH.del=id;
    renderSheet();return}
  if(tg.dataset.kmp||tg.dataset.kcap||tg.id==="sh-lang"||tg.id==="ob-lang")return; /* handled on change */
  /* home */
  if(tg.dataset.genre){home.genre=tg.dataset.genre;home.err="";home.armed=false;renderHome();return}
  if(tg.dataset.mode){home.mode=tg.dataset.mode;home.err="";home.armed=false;renderHome();return}
  const act=tg.dataset.act;
  if(act==="solo")return startSolo();
  if(act==="daily"){const g=buildDaily(),i=g.cases.findIndex(c=>c.id===tg.dataset.cid);if(i<0)return;A={genre:"daily",mode:"solo",code:null,ci:i};enterGame();return}
  if(act==="resume"){const sp=lastSpot();if(!sp)return;if(sp.a.mode==="solo"){A={genre:sp.g.id,mode:"solo",code:null,ci:sp.i};if(unlocked(sp.i))enterGame()}else joinByCode(sp.a.code);return}
  if(act==="create")return createTable();
  if(act==="join")return joinByCode(($("codein")||{}).value);
  if(act==="rejoin")return joinByCode(tg.dataset.code);
  if(act==="resetsolo"){
    if(home.armed){prog(P().id).solo[home.genre]={cases:freshCases(GENRE[home.genre].cases.length)};save();home.armed=false;renderHome();toast(t("erased"))}
    else{home.armed=true;renderHome();setTimeout(()=>{if(home.armed){home.armed=false;if(!$("home").hidden)renderHome()}},3000)}
    return;
  }
  if(act==="copy"){
    const code=A.code;
    try{navigator.clipboard.writeText(code).then(()=>toast(t("copied",{c:code})),()=>toast(t("code_is",{c:code})))}catch(err){toast(t("code_is",{c:code}))}
    return;
  }
  /* game */
  if(tg.id==="back"){if(STORE.app){STORE.app.inGame=false;save()}return goHome()}
  if(tg.id==="helpfab"){openHelp();return}
  if(tg.dataset.help){closeHelp();return}
  if(tg.dataset.case!==undefined){openCase(+tg.dataset.case);return}
  if(tg.dataset.suspect){ui.suspect=ui.suspect===tg.dataset.suspect?null:tg.dataset.suspect;ui.verdict=null;saveVote();saveDraft();renderPanels();return}
  if(tg.dataset.clue){const id=tg.dataset.clue,need=C().need;
    if(ui.picked.includes(id))ui.picked=ui.picked.filter(x=>x!==id);else{ui.picked.push(id);if(ui.picked.length>need)ui.picked.shift()}
    ui.verdict=null;saveVote();saveDraft();renderPanels();return}
  if(tg.id==="musicBtn"){MUSIC.toggle();return}
  if(tg.id==="go")return accuse();
  if(tg.id==="lookbtn")return setReveal(!reveal);
  if(tg.dataset.jump){const el=$(tg.dataset.jump);if(el)el.scrollIntoView({behavior:RM?"auto":"smooth",block:"start"});return}
  if(tg.id==="hintBtn"){
    if(A.mode==="coop")caseUpdate(cur=>({...cur,hints:(+cur.hints||0)+1}));
    else{cs(A.ci).hints++;save()}
    renderPanels();return;
  }
});
document.addEventListener("change",e=>{
  const tg=e.target;
  if(tg.id==="sh-lang"||tg.id==="ob-lang"){LANG=tg.value;OB.lang=LANG;STORE.acct.lang=LANG;save();applyStatic();
    if(tg.id==="ob-lang"){OB.region=$("ob-region").value;renderOnb()}else{renderSheet();if(!$("home").hidden)renderHome();if(!$("game").hidden){renderPanels();renderScene()}}return}
  if(tg.dataset.kmp){const p=STORE.acct.profiles.find(x=>x.id===tg.dataset.kmp);if(p){p.mp=tg.checked;save()}return}
  if(tg.dataset.kcap!==undefined&&tg.dataset.kcap){const p=STORE.acct.profiles.find(x=>x.id===tg.dataset.kcap);if(p){p.cap=tg.value===""?null:+tg.value;save()}return}
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&!$("sheet").hidden){closeSheet();return}
  if(e.key==="Escape"&&!$("help").hidden){closeHelp();return}
  if(e.key==="Enter"&&e.target&&e.target.id==="codein"){joinByCode(e.target.value);return}
  if(e.key==="Enter"&&e.target&&e.target.id==="sh-pin"){const b=document.querySelector('[data-sh="pin"]');b&&b.click();return}
  if(e.key!=="Enter"&&e.key!==" ")return;
  const hot=e.target.closest&&e.target.closest(".hot"),per=e.target.closest&&e.target.closest(".person");
  if(hot){e.preventDefault();examine(hot.dataset.place)}else if(per){e.preventDefault();question(per.dataset.person)}
});

applyStatic();
resumeOrHome();
