// ══════════════════════════════════════════
//  HOSNA KIDS — Communes par Wilaya d'Algérie
// ══════════════════════════════════════════

const COMMUNES = {
  "Adrar": ["Adrar","Aoulef","Timiaouine","Zaouiet Kounta","Aougrout","Talmine","Bordj Badji Mokhtar","Fenoughil","Tamentit","Tsabit","Reggane","Sali","Akabli","Tinerkouk","Charouine","Metarfa","Ouled Ahmed Timmi","Bouda","Tit"],
  "Chlef": ["Chlef","Ténès","Benairia","El Karimia","Tadjna","Taougrite","Beni Haoua","Sobha","Harchoun","Ouled Fares","Sidi Akkacha","Boukadir","Beni Rached","Talassa","Herenfa","Oued Goussine","Djendel","Oued Sly","Sendjas","Zeboudja","Bouzghaia","Ouled Abbes","Sidi Abderrahmane","Mezzana","Chettia","Oum Drou","Breira","El Hadjadj","Labiod Medjadja","Oued Fodda","El Marsa"],
  "Laghouat": ["Laghouat","Ksar El Hirane","Benchaiba","Hassi Mefsoukh","Gueltat Sidi Saad","Ain Madhi","Tadjemout","Kheneg","Hassi Delaa","Oued Morra","El Ghicha","Hadj Mechri","Brida","El Assafia","Taouiala","El Haouaita","Aflou","Ain Sidi Ali","Beidha","Sidi Bouzid","Tadjrouna"],
  "Oum El Bouaghi": ["Oum El Bouaghi","Ain Beida","Ain M'lila","El Amiria","Souk Naamane","Zorg","Ain Zitoun","Ouled Hamla","Dhalaa","Ain Babouche","Behir Chergui","El Djazia","Sigus","Ain Kercha","Hanchir Toumghani","El Harmelia","Ouled Zouai","Boulhaf Dyr","Bir Chouhada","Ain Diss","Fkirina","Oued Nini","Ain Fakroun","Rahia","Meskiana","Ain El Bordj","Belala"],
  "Batna": ["Batna","Ghassira","Maafa","Merouana","Seriana","Ain Touta","Tazoult","N'gaous","Guigba","Djerma","Menaa","El Madher","Timgad","Bouzina","Chemora","Oued El Ma","Djezzar","Ain Djasser","Ouled Si Slimane","Fesdis","El Hassi","Lazrou","T'Kout","Arris","Tilatou","Ain Yagout","Barika","Ksar Bellezma","Ichmoul","Foum Toub"],
  "Béjaïa": ["Béjaïa","Amizour","Feraoun","Chellata","Tamokra","Timezrit","Souk El Tenine","Melbou","Akfadou","Kherrata","Adekar","El Kseur","Tizi N'Berber","Beni Maouche","Darguina","Sidi Ayad","Aokas","Ighil Ali","Tazmalt","Ait Smaïl","Tichy","Oued Ghir","Bouhamza","Ouzellaguen","Akbou","Seddouk","Tala Hamza","Boukhelifa","Toudja","Ighram","Amalou","Souk Oufella","Kendira","Sidi Aich","Chemini","Tinebdar","Oued Smail"],
  "Biskra": ["Biskra","Djemorah","Chetma","Oum Laghigh","Ouled Djellal","Ras El Miad","El Haouch","Ain Naga","Ain Zaatout","El Feidh","Lioua","Lichana","Oumache","Foughala","El Ghrous","Ain El Beida","El Hadjeb","Besbes","Sidi Khaled","Doucen","Tolga","M'Rara","Ain Ben Noi","Mekhadma","El Outaya"],
  "Béchar": ["Béchar","Timoudi","Lahmar","Beni Ounif","Boukais","Igli","Tabelbala","Ksabi","Meridja","Abadla","Kerzaz","Beni Abbes","Taghit","El Ouata","Tiout"],
  "Blida": ["Blida","Chebli","Meftah","Hammam Melouane","Ben Khellil","Soumaa","Mouzaia","Oued El Alleug","Ain Romana","Chrea","El Affroun","Bougara","Guerrouaou","Bouinan","Oued Djer","Beni Tamou","Boufarik","Larbaa","Larbaatache","Djebabra","Beni Mered","El Afroun"],
  "Bouira": ["Bouira","El Asnam","Sour El Ghouzlane","Bir Ghbalou","Haizer","Kadiria","Zbarbar","El Adjiba","El Mokrani","Chorfa","Ahl El Ksar","Bouderbala","Taghzout","El Hachimia","Raouraoua","Maamora","Bechloul","Bordj Okhris","Ain Bessem","Ain El Hadjar","Ridane","Djebahia","El Khabouzia","Oued El Bardi","Saharidj","Taguedit"],
  "Tamanrasset": ["Tamanrasset","Abalessa","In Ghar","In Guezzam","Idles","Tazrouk","Tin Zaouatine","Ain Salah","Foggaret Ez Zoua"],
  "Tébessa": ["Tébessa","Bir El Ater","Cheria","Ain Zerga","Negrine","El Kouif","Morsott","El Ogla","Bir Mokkadem","Bekkaria","Boukhadra","Ouenza","El Aouinet","El Ma Labiod","Ferkane","Ain El Karma","Bir Dheheb"],
  "Tlemcen": ["Tlemcen","Nedroma","Maghnia","Ghazaouet","Sebdou","Bab El Assa","Remchi","Ain Tallout","Bensekrane","Ain Fezza","Ouled Riyah","Bou Hanifia","Sidi Djillali","Ain Ghoraba","Chetouane","Mansourah","Beni Snous","Hammam Boughrara","Ain El Hout","Ain Youcef","Zenata","Tienet","El Aricha","Souk El Khemis","Fellaoucene","Ain Fetah"],
  "Tiaret": ["Tiaret","Dahmouni","Rahouia","Mechraa Safa","Ain Dzarit","Guertoufa","Sidi Hosni","Ain Bouchekif","Sebt","Medrissa","Ain El Hadid","Ouled Djerad","Sougueur","Sidi Ali Mellal","Ain Kermes","Ksar Chellala","Mellakou","Ain Deheb","Rechaiga","Hamadia","Takhemaret","Frenda"],
  "Tizi Ouzou": ["Tizi Ouzou","Ain El Hammam","Akbil","Freha","Souamaa","Mechtras","Ouaguenoun","Iboudrarene","Illilten","Beni Zmenzer","Ifigha","Frikat","Beni Aissi","Beni Douala","Makouda","Draa Ben Khedda","Tirmitine","Azazga","Yakouren","Larba Nath Irathen","Tizi Gheniff","Bounouh","Ain Zaouia","Mizrana","Draa El Mizan","Iferhounene","Mekla","Tizi Rached","Ouadhia","Aghribs","Ait Yahia","Maatkas","Bouzguene","El Flaye","Tigzirt","Timizart","Boghni","Iflissen"],
  "Alger": ["Alger Centre","Sidi M'Hamed","El Madania","Belouizdad","Bab El Oued","Bologhine","Casbah","Oued Koriche","Bir Mourad Raïs","El Biar","Bouzaréah","Birkhadem","El Harrach","Baraki","Oued Smar","Bachdjerrah","Hussein Dey","Kouba","Bourouba","Dar El Beida","Bab Ezzouar","Ben Aknoun","Dely Ibrahim","Birtouta","Tessala El Merdja","Ouled Chebel","Sidi Moussa","Ain Taya","Bordj El Bahri","El Marsa","Rouïba","Reghaïa","Ain Benian","Staoueli","Zeralda","Mahelma","Rahmania","Souidania","Cheraga","Ouled Fayet","El Achour","Draria","Douera","Baba Hassen","Khraicia","Saoula"],
  "Djelfa": ["Djelfa","Moudjbara","El Guedid","Hassi Bahbah","Ain Maabed","Sed Rahal","Faidh El Botma","Birine","Bouira Lahdab","Zaccar","El Idrissia","Douis","Hassi El Euch","Messaad","Guernini","Selmana","Oum Ladjoul","El Mekhadma","Ain Oussera","Charef","Sidi Baizid","Leba","Dar Chioukh","Zaafrane","Tadmit","El Omaria","Had Sahary","Ain El Bel","El Haras"],
  "Jijel": ["Jijel","Emdjez El Fdjoudj","Jebleur","Kaous","El Aouana","Texenna","Djimla","El Milia","Ain Abessa","Sidi Marouf","El Ancer","Sidi Abdelaziz","Ouled Yahia Khedrouche","Ziama Mansouria","Taher","Chahna","El Kennar Nouchfi","Erraguene"],
  "Sétif": ["Sétif","Ain El Kebira","Bougaa","Ain Roua","Guenzet","El Ouricia","Bouandas","Salah Bey","Ain Azel","Ain Oulmene","El Eulma","Hamma","El Hammam","Ain Arnat","Medjana","Bir El Arch","Amoucha","El Mahdia","Ain Legradj","Babor","Beni Ourtilane","Djemila","Oued El Barad","Beni Mouhli","Hammam Guergour","Beni Aziz","Draa Kebila","Guidjel","Beni Chebana"],
  "Saïda": ["Saïda","Ain El Hadjar","Ouled Khaled","Moulay Larbi","Ain Soltane","Ouled Brahim","Sidi Boubekeur","El Hassasna","Sidi Ahmed","Youb","Doui Thabet","El Breidj","Hounet","Tircine","Ain Sekhouna"],
  "Skikda": ["Skikda","Ben Azzouz","El Hadaiek","Ramdane Djamel","Hamadi Krouma","Oum Toub","El Arroum","Ain Zouit","Beni Bechir","Ain Bouziane","Tamalous","Beni Oulbane","Oued Zehour","Kerkera","Cheraia","Collo","Beni Zid","Sidi Mezghiche","Fil Fila","El Ghedir","Ain Charchar","Azzaba","Ain Kechra"],
  "Sidi Bel Abbès": ["Sidi Bel Abbès","Tessala","Ain El Berd","Sidi Khaled","Tenira","Hassi Zahana","Ras El Ma","Ain Adden","Marhoum","Sidi Lahcene","Merine","Ben Badis","Mostefa Ben Brahim","Sidi Ali Benyoub","Sidi Ali Boussidi","Boudjebaa","Belarbi","Sidi Hamadouche","Moulay Slissen","Oued Sebaa","Tabia","Sidi Yacoub","Sfissef","Telagh","Sidi Brahim"],
  "Annaba": ["Annaba","Ain Berda","El Bouni","El Hadjar","Cheurfa","Treat","Serraïdi","Chetaïbi","Oued El Aneb"],
  "Guelma": ["Guelma","Nechmaya","Oued Zenati","Tamba","Bouchegouf","Héliopolis","Bordj Sabat","El Fedjoudj","Ain Hessainia","Bendjerrah","Ain Ben Beida","Bou Hamdane","Ain Larbi","Medjez Sfa","Belkheir","Tamlouka","El Hammah","Khezaras","Sellaoua Announa","Boumahra Ahmed","Ain Makhlouf","Ain Sandel","Dahouara","Medjez Amar"],
  "Constantine": ["Constantine","Ain Abid","El Khroub","Ain Smara","Hamma Bouziane","Ibn Badis","Zighoud Youcef","Didouche Mourad","Beni Hamidane","Ibn Ziad"],
  "Médéa": ["Médéa","Ain Boucif","El Omaria","Ouled Antar","Djouab","Chorfa","Aziz","Boughezoul","Meftaha","Zoubiria","El Hamdania","Mihoub","Sidi Naamane","Ain Ouksir","Oued Harbil","Ksar El Boukhari","Boghari","Ouzera","Tablat","Beni Slimane","Berrouaghia","Ben Chicao","Ouled Maaref","Bir Ben Laabed","El Guerrouma","Bouaichoune","Rebaia","Souagui","Sedraia"],
  "Mostaganem": ["Mostaganem","Ain Nouissy","Ain Tedeles","Ain Boudinar","El Hassiane","Nekmaria","Ain Sidi Cherif","Sidi Lakhdar","Mazagran","Hadjadj","Sidi Ali","Oued El Kheir","Sour","Mesra","Abdelmalek Ramdane","Mansourah","Sidi Belattar","Touahria","Fornaka"],
  "M'Sila": ["M'Sila","Ain El Melh","Hammam Dalaa","Ouled Mansour","M'Tarfa","Sidi Ameur","Ain El Hadjel","Sidi Aissa","Ouanougha","Magra","El Houamed","Berhoum","Tarmount","Ben Srour","Bir Foda","Chellal","Beni Ilmane","Ouled Atia","Ben Zouh","Bouaiche","Salaa","Bousaada"],
  "Mascara": ["Mascara","Tizi","Bou Hanifia","Oued El Abtal","Ain Fares","Hacine","Maoussa","Tighennif","El Bordj","Beniane","Sidi Kada","Zahana","El Mamounia","Ain Ferah","Froha","Sedjerara","Oggaz","Oued Taria","Alaimia","Mohammadia","Sig"],
  "Ouargla": ["Ouargla","Ain Beida","El Borma","Rouissat","El Hedjira","N'Goussa","Sidi Slimane","Hassi Messaoud","El Allia","Beni Thour","Temacine","Touggourt","Nezla","El Hadjira","Sidi Khouiled","Taibet","Tebesbest","Megarine"],
  "Oran": ["Oran","Gdyel","Bir El Djir","Hassi Mefsoukh","Hassi Bounif","Es Senia","Arzew","Bethioua","Marsat El Hadjadj","Ain El Turk","El Ancar","El Karma","Oued Tlelat","Tafraoui","Sidi Chami","Boufatis","Mers El Kebir","Boutlelis","Ain Biya","Ben Freha","Messerghin","Bousfer","Misserghine"],
  "El Bayadh": ["El Bayadh","Rogassa","Stitten","Boualem","El Abiodh Sidi Cheikh","Ain El Orak","Ghassoul","Brezina","El Bnoud","Cheguig","Sidi Tifour","Tousmouline","Krakda","Kheither","Boussemghoun","Mehara"],
  "Illizi": ["Illizi","Debdeb","In Amenas","In Guezzam"],
  "Bordj Bou Arréridj": ["Bordj Bou Arréridj","Ain Taghrout","Ras El Oued","El Hamadia","Ain Tesra","Mansourah","Bir Kasdali","Bordj Zemmoura","Teniet En Nasr","Medjana","Ouled Sidi Brahim","Belimour","El Main","El Achir","Ghilassa","Djaafra","Bordj Ghdir","Theniet El Abed","Colla","Khelil","Ouled Dahmane","Hasnaoua"],
  "Boumerdès": ["Boumerdès","Ain Taya","Bordj Menaïel","Baghlia","Souk El Had","Boudouaou","Ouled Moussa","Isser","Zemmouri","Si Mustapha","Djinet","El Kharrouba","Hammedi","Tidjelabine","Chabet El Ameur","Thenia","Timezrit","Corso","Ouled Aïssa","Naciria","Dellys","Ammal","Bouzegza Keddara","Taourga","Sidi Daoud","Beni Amrane"],
  "El Tarf": ["El Tarf","Ben M'Hidi","Dréan","El Kala","Bouchegouf","Ain El Assel","Oum Teboul","El Aioun","Souarekh","Zerizer","Lac des Oiseaux","Berrihane","Chefia","Bouteldja","Ain Kerma"],
  "Tindouf": ["Tindouf","Oum El Assel"],
  "Tissemsilt": ["Tissemsilt","Ain Bouchekif","Bordj Bou Naama","Boucaid","Lardjem","Ouled Bessem","Bordj El Emir Abdelkader","Theniet El Had","Khemisti","Lazharia","Sidi Slimane","Sidi Lantri","Melaab","Beni Chaib","Ammari"],
  "El Oued": ["El Oued","Robbah","Oued El Alenda","Bayadha","Nakhla","Guemar","Kouinine","Trifaoui","Hassani Abdelkrim","Hamraia","Taghzout","Debila","Sidi Aoun","Taleb Larbi","Still","Mihoub"],
  "Khenchela": ["Khenchela","Baghai","El Hamma","Kais","Chechar","Mtoussa","Ain Touila","Tamza","El Mahmal","Djellal","Bouhmama","Remila","Taouziant","Yabous","Ouled Rechache"],
  "Souk Ahras": ["Souk Ahras","Sedrata","Hanancha","Mechroha","Ouillen","Ain Zana","Ain Soltane","Oued Keberit","Tiffech","Taoura","Haddada","Bir Bou Haouch","Ain Bara","Ragouba","Khedara","Mdaourouch"],
  "Tipaza": ["Tipaza","Ain Benian","Hadjout","Cherchell","Nador","Kolea","Ahmar El Ain","Bouharoun","Bou Ismail","Fouka","Messelmoun","Douaouda","Gouraya","Menaceur","Larhat","Sidi Semiane","Aghbal","El Nador","Chaiba","Oued El Alleug"],
  "Mila": ["Mila","Chelghoum Laïd","Ferdjioua","Oued Athmania","Telerghma","Benyahia Abderrahmane","Sidi Khelifa","Rouached","Grarem Gouga","Ain Tine","Hamala","Zeghaia","Ahmed Rachedi","Tessala Lemtaï"],
  "Aïn Defla": ["Ain Defla","El Attaf","Djendel","El Abadia","Boumedfaa","Khemis Miliana","Rouina","Hammam Righa","Miliana","Ain Torki","Ben Allal","Ain Soltane","Bourached","Hoceinia","Oued Chorfa","Bordj Emir Abdelkader","Bir Ould Khelifa","Arib","El Hassania","Oued Djemaa","El Amra"],
  "Naâma": ["Naama","Ain Sefra","Mecheria","Ain Ben Khelil","Sfissifa","Tiout","Moghrar","Asla","Kasdir","El Biodh","El Hamam","Ain El Orak"],
  "Aïn Témouchent": ["Ain Temouchent","Ain El Arbaa","Ain Kihal","Ain Larbaa","Beni Saf","Oulhaça El Gheraba","El Amria","El Malah","El Emir Abdelkader","Hassi El Ghella","Mesra","Chentouf","Sidi Ben Adda","Aghlal","Terga","Ain Tolba","Ain El Assel","Oued Sabah","Hammam Bouhadjar","Sidi Boumediene"],
  "Ghardaïa": ["Ghardaïa","Metlili","El Atteuf","Bounoura","Guerrara","Berriane","Daya Ben Dahoua","Zelfana","El Guerrara","Hassi El Fehal","Mansourah","Sebseb","El Menea","Hassi Gara"],
  "Relizane": ["Relizane","Ain Tarek","Ammi Moussa","Sidi Khettab","Oued Djemaa","Hamri","Djidiouia","Mazouna","Ramka","El Matmar","El Guettar","Mendes","Sidi M'Hamed Benali","El Hassi","Ouarizane","Zemmoura","Ain Rahma","Yellel","Lahlef","Zemmora","Sidi Lazreq"],
  "Timimoun": ["Timimoun","Aougrout","Talmine","Charouine","Metarfa"],
  "Bordj Badji Mokhtar": ["Bordj Badji Mokhtar","Timiaouine"],
  "Ouled Djellal": ["Ouled Djellal","Sidi Khaled","Doucen"],
  "Béni Abbès": ["Beni Abbes","Kerzaz","Ouled Khodeir"],
  "In Salah": ["In Salah","Foggaret Ez Zoua","In Ghar"],
  "In Guezzam": ["In Guezzam","Tin Zaouatine"],
  "Touggourt": ["Touggourt","Temacine","Nezla","Zaouia El Abidia","Taibet","Tebesbest","Megarine"],
  "Djanet": ["Djanet","Bordj El Haouasse"],
  "El M'Ghair": ["El M'Ghair","Djamaa","Sidi Khellil","Tendla","El Hadjira","Still"],
  "El Menia": ["El Menia","Hassi El Gara","Hassi Inifel"]
};

function updateCommunes(wilayaNom) {
  const communes = COMMUNES[wilayaNom] || [];
  const select   = document.getElementById('f-commune');
  if (!select) return;
  select.innerHTML = '<option value="">Commune (optionnel)</option>';
  communes.sort().forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
}
