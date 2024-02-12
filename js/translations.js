/* Website Language Toggler */
const languageTogglers = document.querySelectorAll(".language-toggler");

languageTogglers.forEach(toggler => {
  toggler.addEventListener("click", (e) => {
    location.reload();
    e.target.textContent === "English" ? updateWebsiteLanguage('en') : updateWebsiteLanguage('ar');
  });
});

//  Website Content Translations Object
const contentTranslations = {
  en: {
    mainSlogan: "Riyadh Season - Big Time!",
    languageToggler: "تصفح بالعربية",
    bookTickets: "Book Tickets",

    introText: "Welcome to Riyadh Season 2023",
    explore: "Explore",

    zonesHeading: "12 Zones to Explore",
    presentedBy: "Presented by",
    upcommingEvents: "Upcoming Events",

    balootChallenge: "BALOOT Challenge",
    balootChallengeDate: "3 December 2023",

    alhilalVSAlnassr: "Al-Hilal vs Al-Nassr",
    alhilalVSAlnassrDate: "8 February 2024",
    alhilalVSAlnassrPrice: "From 375 SAR",
    vatIncluded: "VAT included",

    ahlamNight: "Ahlam Night",
    ahlamNightDate: "9 February 2024",
    ahlamNightPrice: "From 350 SAR",

    seeMore: "See More",
    shows: "Shows",

    montahiBelTahleek: "Montahi bel Tahleek",
    montahiBelTahleekDate: "6 February 2024",
    montahiBelTahleekPrice: "From 50 SAR",

    anistona: "Anistona",
    anistonaDate: "30 January 2024",
    anistonaPrice: "From 100 SAR",

    lastSeasonRecapHeading: "Watch Riyadh Season 2022 Recap",
    watchMoreMomments: "Watch more moments",

    aboutRiyadhSeason: "About Riyadh Season",
    riyadhSeasonDesc: "Riyadh Season is one of the world’s largest winter entertainment event. Variety of food from around the world, courtesy of exclusive restaurants — plus countless exciting surprises. The festivities capture the essence of Saudi, from its Najdi heritage to its present-day dynamism.",
    bigTime: "Big Time!",
    starts: "Starts",
    riyadhSeasonDay: "28",
    riyadhSeasonMonth: "October",

    downloadAppParagraph: "You will be able to download the Riyadh Season 2023 App Soon!",
    
    platinumPartnersHeading: "OFFICIAL PLATINUM PARTNERS",
    airlinePartnerHeading: "OFFICIAL AIRLINE PARTNER",
    premiumPartnersHeading: "OFFICIAL PREMIUM PARTNERS",
    strategicPartnersHeading: "OFFICIAL STRATEGIC PARTNER",
    mainPartnersHeading: "OFFICIAL MAIN PARTNERS",
    hospitalityPartnersHeading: "OFFICIAL HOSPITALITY PARTNERS",
    restaurantPartnerHeading: "OFFICIAL RESTAURANTS RESERVATION PARTNER",
    coSponsorHeading: "OFFICIAL CO SPONSOR",

    privacyPolicy: "PRIVACY POLICY",
    termsAndConditions: "TERMS & CONDITIONS",
    copyrightMessage: "Copyright © 2023 RIYADH SEASON. All rights reserved.",
    poweredBy: "Powered by",

    boulevardCityTitle: "Boulevard City | Riyadh Season",
    boulevardCity: "Boulevard City",
    boulevardSubHeading: "Enjoy new level of fun and entertainment",
    boulevardCityParagraph: "No tickets needed for entry. The Boulevard City is one of the most important destinations of the Riyadh season, located in the north of Riyadh. It contains several events. It is the largest sustainable Entertainment hub in the season. It includes gardens, a dance fountain, several cafes, local and global restaurants,BLVD Square area hosts top local and global brand stores. The Garden hub zone contains many fast-food restaurants and many theatres for artistic and singing performances.",
    readMore: "Read More",

    boulevardCityTime: "From 00:00 am to 03:00 am",
    boulevardCityDate: "Starting from 28 October",
    boulevardCityEvents: "1+ Upcoming Events",
    boulevardCityExperiences: "1+ Experiences",

    getDirections: "Get directions",
    openFrom: "Open From",
    events: "Events",
    experiences: "Experiences",
    restaurants: "Restaurants",
    exploreAndBook: "Explore & book",

    josephAttieh: "Joseph Attieh",
    josephAttiehDate: "26 Jenuary 2024",
    josephAttiehPrice: "From 375 SAR",

    boudchartConcert: "Boudchart Concert",
    boudchartConcertDate: "26 Jenuary 2024",
    boudchartConcertPrice: "From 150 SAR",

    djRodge: "DJ Rodge",
    djRodgeDate: "2 February 2024",
    djRodgePrice: "From 275 SAR",
  
    nancyMiamiConcert: "Nancy & Miami Band Concert",
    nancyMiamiConcertDate: "2 February 2024",
    nancyMiamiConcertPrice: "From 150 SAR",

    djCosmicat: "DJ Cosmicat",
    djCosmicatDate: "31 Jenuary 2024",
    djCosmicatPrice: "From 150 SAR",

    djMortero: "DJ Mortero",
    djMorteroDate: "27 Jenuary 2024",
    djMorteroPrice: "From 75 SAR",

    dishDash: "Dish Dash",
    dishDashDate: "25 Jenuary 2024",
    dishDashPrice: "From 199 SAR",

    exploreMoreZones: "Explore More Zones",

    boulevardWorldTitle: "Boulevard World | Riyadh Season",
    boulevardWorld: "Boulevard World",
    boulevardWorldParagraph: "Boulevard World offers its visitors the delight of exploring world civilizations and cultures, wandering through its fantastical facilities, and experiencing numerous exceptional adventures in each unique area. Enjoy exclusive privileges and magical experience throughout your visit when you purchase entry packages to Boulevard World. Note: The packages do not include the following experiences: The Wheel, Super Fly, CocoMelon, Playocity, BLVD Lagoon Rides, skill games and all experiences.",
  
    boulevardWorldTime: "From 04:00 pm to 03:00 am",
    boulevardWorldDate: "Starting from 02 November",

    termsAndConditionsText: `In purchasing this ticket, you agree to abide by all the terms and conditions and adhere to any other responsible terms and conditions or restrictions provided by the organizer before or during the event: - Every attendee must purchase a separate ticket (adult/child above 3 years old) - Free entry for children younger than 3 years old. - companion holding separate ticket. - Tickets prices are non-refundable. - In case of reselling the ticket outside webook platform, the tickets will be cancelled without any refund. - In case of event cancellation, postponing or changing the date by the event organizer, the ticket price will be refunded. - The ticket holder is solely responsible for checking the date, time, location, and the age restriction of the event. Early arrival is a must, and the organizer shall have the right to refuse any late entries and the ticket holder shall not have the right to claim for a refund of the ticket price or any compensation whatsoever. - In case of leaving the venue, you are not allowed to return. - All tickets holders and their belongings may be subject to search when entering the venue. Prohibited and dangerous items will be confiscated. Any item which the organizer or venue security personnel consider as security risk or that may be used to damage the venue or interfere with the event will be confiscated. - Food and beverages from outside are not allowed. Food trucks will be available. - Animals are not allowed. - No professional cameras and video recorders are permitted at the venue. - The ticket holder consents to photographs, video, audio recordings of ticket holder be captured and used in printed and electronics media, including the internet as an attendee at the venue. - Smoking is strictly prohibited on the premises, including e-cigarettes. The use of lighters and matches is also prohibited inside the site, except in areas designated for smoking. - The organizer accepts no liability for bodily injury, illness, or death of any visitor (including ticket holder) and / or loss of or damage to personal effects arising out of or in connection with the event. - The organizer has the right to remove whoever commits an act that, in the opinion of the organizer, is a contrary behavior. - Adherence to the rules of public taste in line with the culture, values, ​​and tradition of the Kingdom of Saudi Arabia. - In case of a complaint, must be submitted to "Tarfeeh Portal" by visiting (cx.gea.gov.sa), within maximum 3 days of the occurring date. -`,
  
    laserTag: "Laser Tag",
    laserTagPrice: "From 93 SAR",

    lineOfFire: "Line Of Fire",
    lineOfFirePrice: "From 116 SAR",

    survivorRace: "Survivor Race",
    survivorRacePrice: "From 90 SAR",

    escapeRoom: "Escape Room",
    escapeRoomPrice: "From 92 SAR",

    unlimitedMetaWorld: "Unlimited Meta World",
    unlimitedMetaWorldPrice: "From 80 SAR",

    dollsIsland: "The Island Of The Dolls",
    dollsIslandPrice: "From 92 SAR",

    cyberSlime: "Cyber Slime",
    cyberSlimePrice: "From 92 SAR",

    monopoly: "Monopoly Lifesized",
    monopolyPrice: "From 95 SAR",

    mummyQuest: "Mummy Quest",
    mummyQuestPrice: "From 92 SAR",

    blvdForest: "BLVD Forest",
    blvdForestPrice: "From 82 SAR",

    cocomelonPlayDate: "Cocomelon Play Date",
    cocomelonPlayDatePrice: "From 160 SAR",

    foodTrucksTitle: "Riyadh Food Trucks Park | Riyadh Season",
    foodTrucks: "Food Truck Park",
    foodTrucksParagraph: "Riyadh Food Truck Festival is an amazing experience you won't forget! The best food trucks from all over the world offer delicious and creatively flavored dishes. Enjoy tasty food and fun atmosphere. Bring your friends and family and have a great time trying out the best food and entertainment at the Riyadh Food Truck Festival! Entry is not permitted after 11:00 PM Truck orders closes at 11:30 PM",
  
    foodTrucksTime: "From 04:00 pm to 00:00 am",
    foodTrucksDate: "Starting from 21 December",

    kingdomArenaTitle: "Kingdom Arena | Riyadh Season",
    kingdomArena: "Kingdom Arena",
    kingdomArenaParagraph: "Kingdom Arena: Built in 60 days and accommodates more than 40,000 people. An internationally approved technical and artistic standards.",
  
    kingdomArenaTime: "From 05:00 pm to 03:00 am",
    kingdomArenaDate: "Starting from 28 October",

    ringOfFire: "Ring Of Fire",
    ringOfFireDate: "17 Frbruary 2024",
    ringOfFirePrice: "From 70 SAR",

    nassrVSMiami: "Al-Nassr VS Inter Miami",
    nassrVSMiamiDate: "1 Frbruary 2024",
    nassrVSMiamiPrice: "From 375 SAR",

    hilasVSMiami: "Al-Hilal VS Inter Miami",
    hilasVSMiamiDate: "29 Jenuary 2024",
    hilasVSMiamiPrice: "From 375 SAR",

    rsTennisCup: "RS TENNIS CUP",
    rsTennisCupDate: "26 December 2023",
    rsTennisCupPrice: "From 100 SAR",

    rsTennisCupMales: "RS TENNIS CUP (Males)",
    rsTennisCupMalesDate: "27 December 2023",
    rsTennisCupMalesPrice: "From 100 SAR",

    riyadhMotorShow: "Riyadh Motor Show",
    riyadhMotorShowDate: "5 December 2023",

    dayOfReckoning: "Day Of Reckoning",
    dayOfReckoningDate: "23 December 2023",
    dayOfReckoningPrice: "From 100 SAR",

    ramlaTerrazaTitle: "Ramla Terraza | Riyadh Season", 
    ramlaTerraza: "Ramla Terraza", 
    ramlaTerrazaParagraph: "A lifestyle destination with four upscale restaurants - Clap, Iris Café - Brute - Jones the Grocer - offers a diverse range of culinary experiences, where visitors can indulge in extraordinary flavors and enjoy memorable dining experiences in a vibrant and upscale setting.", 
  
    ramlaTerrazaTime: "From 08:00 am to 03:00 am",
    ramlaTerrazaDate: "Starting from 28 October",

    brute: "Brute",
    jonesTheGrocer: "Jones the Grocer",
    clap: "Clap",
    irisCafe: "Iris Cafe",

    riyadhZooTitle: "Riyadh Zoo | Riyadh Season",
    riyadhZoo: "Riyadh Zoo",
    riyadhZooParagraph: "We are back with a larger capacity, uniting the marvels of wildlife under one roof. You'll enjoy incredible experiences across 6 subzones and witness the endangered Red Panda in a genuinely astonishing reality for the first time in the Middle East. Entry is not permitted after 3PM.",
  
    riyadhZooTime: "From 09:00 am to 00:00 am",
    riyadhZooDate: "Starting from 12 November",

    farmExperience: "Farm Experience",
    lionExperience: "Lion Experience",
    houseOfPongos: "House Of Pongos",
    theOwlHouse: "The Owl House",
    elephantFeedingExperience: "Elephant Feeding Experience",
    kangarooFeeding: "Kangaroo Feeding",
    feedingGirrafe: "Feeding Girrafe",
    feedingMonkeys: "Feeding Monkeys",
    feedingTheTigers: "Feeding The Tigers",
    redPandaExperience: "Red Panda Experience",
    theGarden: "The Garden",

    roshnFrontTitle: "Roshn Front | Riyadh Season",
    roshnFront: "Roshn Front",
    roshnFrontSubtitle: "YOUR PLACE TO EXPLORE CONNECT AND THRIVE",
    roshnFrontParagraph: "Roshn Front is an extraordinary urban experience that re-imagines how we Work. Play. Dine. Shop and share space in the heart of Riyadh. Integrating human-centered design and social spaces, Riyadh Front isn't just a place - it's a living hub of Connection. Curiosity and Innovation.",
  
    roshnFrontTime: "From 05:00 pm to 03:00 am",
    roshnFrontDate: "Starting from 28 October",

    anaArabia: "Ana Arabia",
    anaArabiaDate: "17 December 2023",
    anaArabiaPrice: "From 50 SAR",

    souqAlawaleenTitle: "Souq AlAwaleen | Riyadh Season",
    souqAlawaleen: "Souq AlAwaleen",
    souqAlawaleenParagraph: "Visiting Souq AlAwaleen is a remarkable experience that promises to immerse you in the charm of an old Najdi market. As you explore the souq, you’ll experience performances, events, and stores selling traditional goods. The souq is not just a place to shop; it’s a living testament to the region’s rich past.",
  
    souqAlawaleenTime: "From 04:00 pm to 03:00 am",
    souqAlawaleenDate: "Starting from 01 December",

    littleOnesShop: "Little ones' shop",
    najdiHorrorHouse: "Najdi Horror House",
    souqExperience: "Najdi Horror House",

    suwadiParkTitle: "Suwadi Park | Riyadh Season",
    suwadiPark: "Suwadi Park",
    suwadiParkParagraph: "Al-Suwaidi Park aims to host seven different cultures in seven weeks in a fun way to create a unique and distinctive entertainment experience in one of the biggest parks in Riyadh, as it allows visitors to explore different cultures through a trip full of various activities that include: Food, music, entertainment shows, and folk dances for each country",
    book: "Book",

    suwadiParkTime: "From 04:00 pm to 00:00 am",
    suwadiParkDate: "Starting from 29 October",

    gamesAndCarnivals: "Games And Carnivals",
    coloursOasis: "Colours Oasis",
    nepalWeek: "Nepal Week",
    adventureGames: "Adventure Games",
    bangladeshWeek: "Bangladesh Games",

    theGrovesTitle: "The Groves | Riyadh Season",
    theGroves: "The Groves",
    theGrovesParagraph: "The Groves returns, but this year we are permanent and in an all new venue with a fresh and innovative experience, just as you’ve always expected from us",

    theGrovesTime: "From 05:30 pm to 03:00 am",
    theGrovesDate: "Starting from 28 October",

    viaRiyadhTitle: "Via Riyadh | Riyadh Season",
    viaRiyadh: "Via Riyadh",
    viaRiyadhParagraph: "Designed in the Salmani style, this complex features a five-star hotel, a luxury cinema, and exclusive boutiques, restaurants, and cafes.",
  
    viaRiyadhTime: "From 00:00 pm to 03:00 am",
    viaRiyadhDate: "Starting from 28 October",

    westerly: "WESTERLY",
    ferdi: "Ferdi",
    yakinikumafia: "Yakinikumafia",
    raouls: "Raoul's",
    viaMercato: "Via Mercato",
    lesDeuxMagots: "Les Deux Magots",
    wagyumafia: "Wagyumafia",

    wonderGardenTitle: "Wonder Garden | Riyadh Season",
    wonderGarden: "Wonder Garden",
    wonderGardenParagraph: "An amusement park that will take you through a whole imaginative and whimsical experience. To keep you in wonder, it is made up of three different zones where you can go on unique rides, watch pink flamingos, and explore areas full of beautiful butterflies and exquisite trees. Entry is not permitted after 11 PM on weekdays. Entry is not permitted after 12 AM on weekends.",
  
    wonderGardenTime: "From 04:00 pm to 00:00 am",
    wonderGardenDate: "Starting from 15 November",

    xScapeReality: "XSCAPE REALITY",
    butterflyHouse: "Butterfly House",
    theBombVR: "THE BOMB VR",
    theFarm: "The Farm",
    wonderGardenBouquet: "Wonder Garden Bouquet",

    riyadExitTitle: "Riyadh Exit | Riyadh Season",
    riyadExit: "Riyadh Exit",
    riyadExitParagraph: "Riyadh Exit, a tranquil refuge located 45 minutes northwest of Riyadh, offers diverse and engaging activities for a unique winter experience. Divided into two zones, the freely accessible food and coffee shops zone that provides a variety of dining experiences. Meanwhile, the camps and activities zone, which requires pre-booking, is designed for those seeking solitude and distinctive atmospheres.",
  
    riyadExitTime: "From 04:00 pm to 03:00 am",
    riyadExitDate: "Starting from 21 January",

    vipCampRiyadhExit: "VIP Camp Riyadh Exit",
    regularCampRiyadhExit: "Regular Camp Riyadh Exit",
    royalCampRiyadhExit: "Royal Camp Riyadh Exit",
  },

  ar: {
    mainSlogan: "موسم الرياض",
    languageToggler: "English",
    bookTickets: "حجز التذاكر",

    introText: "اهلاً وسهلاً بكم في موسم الرياض 2023",
    explore: "اكتشف",

    zonesHeading: "١٢ منطقة",
    presentedBy: "برعاية",
    upcommingEvents: "الفعاليات القادمة",

    balootChallenge: "تحدي البلوت",
    balootChallengeDate: "3 ديسمبر 2023",

    alhilalVSAlnassr: "نادي الهلال ضد نادي النصر",
    alhilalVSAlnassrDate: "8 فبراير 2024",
    alhilalVSAlnassrPrice: "يبدأ من 375 ر.س",
    vatIncluded: "شامل ضريبة القيمة المضافة",

    ahlamNight: "ليلة احلام",
    ahlamNightDate: "9 فبراير 2024",
    ahlamNightPrice: "يبدأ من 350 ر.س",

    seeMore: "اظهر المزيد",
    shows: "المسرحيات",

    montahiBelTahleek: "مسرحية منتهي بالتهليك",
    montahiBelTahleekDate: "6 فبراير 2024",
    montahiBelTahleekPrice: "يبدأ من 50 ر.س",

    anistona: "أنستونا",
    anistonaDate: "30 يناير 2024",
    anistonaPrice: "يبدأ من 100 ر.س",

    lastSeasonRecapHeading: "شاهد ملخص الموسم السابق",
    watchMoreMomments: "شاهد المزيد",

    aboutRiyadhSeason: "عن موسم الرياض",
    riyadhSeasonDesc: 'بعد أقل من شهر، عاصمة المملكة "الرياض" تحتضن أكبر الفعاليات الترفيهية الشتوية بالعالم! #موسم_الرياض بنسخته الرابعة، الذي سيوفر مجموعة متنوعة لأرقى المطاعم العالمية، وعدد كبير من المفاجآت الكبرى التي تعكس مدى التمكين والدعم اللامحدود الذي يحظى به قطاع الترفيه بدءًا من تراثها النجدي وصولًا لتطورها الحالي.',
    bigTime: "Big Time!",
    starts: "يبدأ",
    riyadhSeasonDay: "13",
    riyadhSeasonMonth: "ربيع الآخر",

    downloadAppParagraph: "ستتمكن قريباً من تحميل تطبيق موسم الرياض ٢٠٢٣",
    
    platinumPartnersHeading: "OFFICIAL PLATINUM PARTNERS",
    airlinePartnerHeading: "OFFICIAL AIRLINE PARTNER",
    premiumPartnersHeading: "OFFICIAL PREMIUM PARTNERS",
    strategicPartnersHeading: "OFFICIAL STRATEGIC PARTNER",
    mainPartnersHeading: "OFFICIAL MAIN PARTNERS",
    hospitalityPartnersHeading: "OFFICIAL HOSPITALITY PARTNERS",
    restaurantPartnerHeading: "OFFICIAL RESTAURANTS RESERVATION PARTNER",
    coSponsorHeading: "OFFICIAL CO SPONSOR",

    privacyPolicy: "سياسة الخصوصية",
    termsAndConditions: "شروط الإستخدام",
    copyrightMessage: "ⓒ 2023 موسم الرياض 2023. جميع الحقوق محفوظة",
    poweredBy: "بواسطة",

    boulevardCityTitle: "بوليفارد سيتي | موسم الرياض",
    boulevardCity: "بوليفارد سيتي",
    boulevardSubHeading: "استمتع بمستوى جديد من المرح والتسلية",
    boulevardCityParagraph: "لا تحتاج لتذاكر لدخول بوليفارد سيتي. إنّ منطقة بوليفارد رياض سيتي، تعدّ واحدةً من أهم وجهات الموسم، والتي تقع في شمال الرياض، وهي مركز الترفيه الأكبر والمستدام في الموسم، إذ تضمّ الكثير من الفعاليات؛ وذلك لما تتمتّع به من حدائق ومقاهٍ، ومطاعم ومحلات لأشهر الماركات المحلية والعالمية الكائنة بمنطقة بوليفارد سكوير، بجانب احتوائها للمشهد الخلّاب للنافورة الراقصة. كذلك وتحوي منطقة جاردن هب على العديد من مطاعم الوجبات السريعة والمسارح ذات العروض الفنية والغنائية،",
    readMore: "قراءة المزيد",

    boulevardCityTime: "من الساعة 12:00 ص إلى الساعة 3:00 ص",
    boulevardCityDate: "ابتداءً من 28 أكتوبر",
    boulevardCityEvents: "1+ فعاليات قادمة",
    boulevardCityExperiences: "1+ تجارب",

    getDirections: "الموقع",
    openFrom: "ابتداءً من",
    events: "الفعاليات",
    experiences: "التجارب",
    restaurants: "المطاعم",
    exploreAndBook: "استكشف واحجز",

    josephAttieh: "جوزيف عطية",
    josephAttiehDate: "26 يناير 2024",
    josephAttiehPrice: "يبدأ من 375 ر.س",

    boudchartConcert: "حفلة بودشارت",
    boudchartConcertDate: "26 يناير 2024",
    boudchartConcertPrice: "يبدأ من 150 ر.س",

    djRodge: "دي جي رودج",
    djRodgeDate: "2 فبراير 2024",
    djRodgePrice: "يبدأ من 275 ر.س",
  
    nancyMiamiConcert: "حفلة نانسي وفرقة ميامي",
    nancyMiamiConcertDate: "2 فبراير 2024",
    nancyMiamiConcertPrice: "يبدأ من 150 ر.س",

    djCosmicat: "دي جي كوزميكات",
    djCosmicatDate: "31 يناير 2024",
    djCosmicatPrice: "يبدأ من 150 ر.س",

    djMortero: "دي جي مورتيرو",
    djMorteroDate: "27 يناير 2024",
    djMorteroPrice: "يبدأ من 75 ر.س",

    dishDash: "دش داش",
    dishDashDate: "25 يناير 2024",
    dishDashPrice: "يبدأ من 199 ر.س",

    exploreMoreZones: "اكتشف مناطق أخرى",

    boulevardWorldTitle: "بوليڤارد وورلد | موسم الرياض",
    boulevardWorld: "بوليڤارد وورلد",
    boulevardWorldParagraph: "تمنح منطقة بوليڤارد وورلد زوارها متعة التعرّف على حضارات وثقافات العالم، والتجوّل بين مرافقها الخيالية، بالإضافة إلى العديد من التجارب والمغامرات الاستثنائية في كل منطقة من مناطقها الفريدة. استمتع بمزايا حصرية وتجربة خيالية ترافقك طوال تجربتك عند شرائك من باقات دخول بوليڤارد وورلد. ملاحظة: الباقات لا تشمل تجربة ألعاب ذا ويل وسوبر فلاي وكوكوميلون وهاسبرو وجميع التجارب وقوارب بوليڤارد لاجون وألعاب المهارة.",
  
    boulevardWorldTime: "من الساعة 4:00 م إلى الساعة 3:00 ص",
    boulevardWorldDate: "ابتداءً من 02 نوفمبر",

    termsAndConditionsText: `بشراء هذه التذكرة، فأنت توافق على جميع الشروط والأحكام والقيود التي قد يضعها المنظم قبل أو اثناء الفعالية: - يجب شراء تذكرة لكل شخص منفرد (بالغ / طفل من 3 سنوات وأكبر) - دخول الأطفال تحت الـ 3 سنوات مجاني. - سعر التذكرة غير مسترد. - في حال تم بيع التذكرة خارج إطار منصة Webook سيتم إلغاء التذكرة دون إرجاع المبالغ - في حالة تم إلغاء، تأجيل، أو تغيير تاريخ الفعالية من قِبل الجهة المنظمة فإنه سيتم إعادة قيمة التذكرة. - حامل التذكرة مسؤول عن التحقق من تاريخ الفعالية ووقتها ومكانها والعمر المفروض لحضورها كما يجب على حاملي التذكرة الوصول باكراً إلى موقع الفعالية، ويحق للجهة المنظمة أن ترفض دخول الأشخاص المتأخرين، وفي هذه الحالة لن يجوز لحامل التذكرة أن يطالب باسترداد سعر التذكرة أو طلب تعويض من أي نوع كان. - في حال مغادرة المبنى، لا يسمح بالعودة مجدداً. - قد يتم تفتيش حاملي التذاكر ومقتنياتهم الشخصية عند دخول موقع الفعالية، وسوف يتم مصادرة المواد المحظورة والخطرة، كما ستتم مصادرة كل مادة ترى الجهة المنظمة أو الجهاز الأمني في مقر الفعالية أنها خطرة أو يمكن أن يتم استخدامها لإلحاق الضرر بالمكان أو إفساد الفعالية. - لا يسمح بدخول المأكولات والمشروبات من الخارج. سيتم توفير عربات بيع الطعام والشراب داخل الفعالية. - لا يسمح باصطحاب الحيوانات. - لا يسمح باستخدام آلات التصوير والتسجيل المتخصصة في موقع الفعالية. - يوافق حامل التذكرة بصفته الحاضر لمكان الفعالية على الصور الفوتوغرافية ومقاطع الفيديو والمقاطع الصوتية المسجلة التي قد يتم استخدامها كمطبوعات أو نسخ الكترونية أو نشرها على شبكة الأنترنت. - التدخين غير مسموح به في المبنى، بما في ذلك السجائر الإلكترونية. ولا يسمح أيضاُ باستخدام القداحات وأعواد الكبريت داخل الموقع، الى في الموقع المخصصة للتدخين. - لا تتحمل الجهة المنظمة مسؤولية الإصابات الجسدية أو الأمراض أو وفاة أي زائر (بما في ذلك حامل التذكرة) أو فقدان أو تضرر المقتنيات لأسباب ناجمة عن الفعالية أو مرتبطة بها. - للجهة المنظمة الحق في إخراج من يصدر عنه تصرف يعتبر برأي الجهة المنظمة مخالف. - الالتزام بقواعد الذوق العام بما يتماشى مع ثقافة وقيم وتقليد المملكة العربية السعودية. - في حال وجود شكوى، يجب تقديمها إلى "بوابة الترفيه" بزيارة الموقع الالكتروني (cx.gea.gov.sa) خلال 3 أيام كحد أقصى من تاريخ وقوعها. -`,
    
    laserTag: "ليزر تاج - باتل دوم",
    laserTagPrice: "يبدأ من 93 ر.س",

    lineOfFire: "خط النار",
    lineOfFirePrice: "يبدأ من 116 ر.س",

    survivorRace: "سرڤايڤور ريس",
    survivorRacePrice: "يبدأ من 90 ر.س",

    escapeRoom: "غرفة الهروب",
    escapeRoomPrice: "يبدأ من 92 ر.س",

    unlimitedMetaWorld: "ميتاوورلد بلا حدود",
    unlimitedMetaWorldPrice: "يبدأ من 80 ر.س",

    dollsIsland: "جزيرة الدمي",
    dollsIslandPrice: "يبدأ من 92 ر.س",

    cyberSlime: "سايبر سلايم",
    cyberSlimePrice: "يبدأ من 92 ر.س",

    monopoly: "مونوبولي",
    monopolyPrice: "يبدأ من 95 ر.س",

    mummyQuest: "التنقيب عن المومياء",
    mummyQuestPrice: "يبدأ من 92 ر.س",

    blvdForest: "غابة البوليفارد",
    blvdForestPrice: "يبدأ من 82 ر.س",

    cocomelonPlayDate: "كوكوميلون بلاي ديت",
    cocomelonPlayDatePrice: "يبدأ من 160 ر.س",

    foodTrucksTitle: "مهرجان الرياض لعربات الطعام | موسم الرياض",
    foodTrucks: "مهرجان الرياض للفود ترك",
    foodTrucksParagraph: "مهرجان الرياض لعربات الطعام، تجربة لا تُنسى! أفضل عربات الطعام من جميع أنحاء العالم تقدم أشهى المأكولات بنكهات مبتكرة. استمتعوا بالنكهات الشهية والأجواء الترفيهية. احضروا أصدقاءكم وعائلتكم واستمتعوا بأفضل المأكولات والترفيه في مهرجان الرياض لعربات الطعام! اخر وقت لدخول المنطقة الساعة ١١:٠٠ مساءً تغلق الطلبات من الترك الساعة ١١:٣٠ مساء",
  
    foodTrucksTime: "من الساعة 4:00 م إلى الساعة 12:00 ص",
    foodTrucksDate: "ابتداءً من 21 ديسمبر",

    kingdomArenaTitle: "المملكة ارينا | موسم الرياض",
    kingdomArena: "المملكة ارينا",
    kingdomArenaParagraph: "مبنى بمساحة شاسعة تزيد عن ٢٠٠ ألف متر مربع، تم بناءه وتجهيزه بأحدث التقنيات التي تخدم جميع الفعاليات المقامة والمعتمدة عالميا، خلال ٦٠ يوماً ليتسع إلى أكثر من ٤٠ ألف زائر",
  
    kingdomArenaTime: "من الساعة 5:00 م إلى الساعة 3:00 ص",
    kingdomArenaDate: "ابتداءً من 28 أكتوبر",

    ringOfFire: "حلبة النار",
    ringOfFireDate: "17 فبراير 2024",
    ringOfFirePrice: "يبدأ من 70 ر.س",

    nassrVSMiami: "نادي النصر ضد نادي انتر ميامي",
    nassrVSMiamiDate: "1 فبراير 2024",
    nassrVSMiamiPrice: "يبدأ من 375 ر.س",

    hilasVSMiami: "نادي الهلال ضد نادي انتر ميامي",
    hilasVSMiamiDate: "29 يناير 2024",
    hilasVSMiamiPrice: "يبدأ من 375 ر.س",

    rsTennisCup: "كأس موسم الرياض للتنس",
    rsTennisCupDate: "26 ديسمبر 2023",
    rsTennisCupPrice: "يبدأ من 100 ر.س",

    rsTennisCupMales: "كأس موسم الرياض للتنس (رجال)",
    rsTennisCupMalesDate: "27 ديسمبر 2023",
    rsTennisCupMalesPrice: "يبدأ من 100 ر.س",

    riyadhMotorShow: "معرض الرياض للسيارات",
    riyadhMotorShowDate: "5 ديسمبر 2023",

    dayOfReckoning: "اليوم الحاسم",
    dayOfReckoningDate: "23 ديسمبر 2023",
    dayOfReckoningPrice: "يبدأ من 100 ر.س",

    ramlaTerrazaTitle: "رملة تيرازا | موسم الرياض", 
    ramlaTerraza: "رملة تيرازا", 
    ramlaTerrazaParagraph: "وجهة مفعمة بالحياة تضم أربعة مطاعم راقية - قلاب، ايرس كافيه، بروت، جونز ذا كروسر - حيث يمكن للزوار الاستمتاع بتجارب طعام لا تُنسى في أجواء راقية ونابضة بالحياة.", 
  
    ramlaTerrazaTime: "من الساعة 8:00 ص إلى الساعة 3:00 ص",
    ramlaTerrazaDate: "ابتداءً من 28 أكتوبر",
  
    brute: "بروت",
    jonesTheGrocer: "جونز ذا جروسر",
    clap: "قلاب",
    irisCafe: "ايرس كافي",

    riyadhZooTitle: "حديقة الحيوانات بالرياض | موسم الرياض",
    riyadhZoo: "حديقة الحيوانات بالرياض",
    riyadhZooParagraph: "رجعنا لكم بطاقة استيعابية أكبر، وجمعنا روائع الحياة البرية تحت سقف واحد، راح تستمتعون بتجارب مذهلة من خلال 6 مناطق فرعية، وراح تشوفون الحيوان المهدد بالانقراض، الباندا الأحمر، في واقع مثير للدهشة لأول مرة في منطقة الشرق الأوسط. لا يسمح بالدخول بعد الساعة ٣ عصراً.",
  
    riyadhZooTime: "من الساعة 9:00 ص إلى الساعة 12:00 ص",
    riyadhZooDate: "ابتداءً من 12 نوفمبر",
  
    farmExperience: "تجربة المزرعة",
    lionExperience: "تجربة الأسد",
    houseOfPongos: "بيت البونغو",
    theOwlHouse: "بيت البومة",
    elephantFeedingExperience: "تجربة إطعام الفيل",
    kangarooFeeding: "تجربة إطعام الكنغر",
    feedingGirrafe: "تجربة إطعام الزرافة",
    feedingMonkeys: "إطعام القرود",
    feedingTheTigers: "تجربة إطعام النمر",
    redPandaExperience: "تجربة الباندا الحمراء",
    theGarden: "الحديقة",

    roshnFrontTitle: "واجهة روشن | موسم الرياض",
    roshnFront: "واجهة روشن",
    roshnFrontSubtitle: "واجهة روشن وجهتك للتواصل.. التطور.. والنمو..",
    roshnFrontParagraph: "واجهة روشن حيث تُعيد اكتشاف شغفك، وطريقة عملك، وكيفية الترفيه عن نفسك، من خلال التصميم الذي يمنحك تجربة مختلفة تتوافق مع متطلباتك. وحيث الحياة العملية والحياة الاجتماعية تندمجان معًا بطريقة مبتكرة. صُمّمت واجهة الرياض لتُثري حياتك اليومية عبر تجارب استثنائية متمثلة في المطاعم والأسواق والمساحات المفتوحة، مما يمنحك نمط الحياة الأجمل في قلب مدينة الرياض.",
  
    roshnFrontTime: "من الساعة 5:00 م إلى الساعة 3:00 ص",
    roshnFrontDate: "ابتداءً من 28 أكتوبر",
  
    anaArabia: "أنا عربية",
    anaArabiaDate: "17 ديسمبر 2023",
    anaArabiaPrice: "يبدأ من 50 ر.س",

    souqAlawaleenTitle: "سوق الأولين | موسم الرياض",
    souqAlawaleen: "سوق الأولين",
    souqAlawaleenParagraph: "استمتـع بتجربـة السوق الشعبي وتراث ماضـي نجـد فـي سـوق الأولين، حيـث العـديـد مــن العــروض الحماسية والفعاليات التي تعكـس الثقافة المحلية والمحال التي تبيع المنتجات التقليدية القديمة، في كل ركن وزاوية تتعرف فيها أكثر على هوية السوق النجدي القديم.",
  
    souqAlawaleenTime: "من الساعة 4:00 م إلى الساعة 3:00 ص",
    souqAlawaleenDate: "ابتداءً من 01 ديسمبر",

    littleOnesShop: "دكان الصغيرين",
    najdiHorrorHouse: "ليلة التحول",
    souqExperience: "تجربة السوق",

    suwadiParkTitle: "حديقة السويدي | موسم الرياض",
    suwadiPark: "حديقة السويدي",
    suwadiParkParagraph: "تهدف فعاليات حديقة السويدي إلى إستضافة سبعة ثقافات مختلفة خلال سبعة اسابيع بطريقة ممتعة لإبتكار تجربة ترفيهية فريدة ومميزة في واحد من اكبر المنتزهات حيث تتيح للزوار إكتشاف الثقافات المختلفة من خلال رحلة مليئة بالأنشطة المتنوعة وتشمل: الأكل والموسيقى, والعروض الترفيهية والرقصات الشعبية لكل دولة.",
    book: "احجز",

    suwadiParkTime: "من الساعة 4:00 م إلى الساعة 12:00 ص",
    suwadiParkDate: "ابتداءً من 29 أكتوبر",
  
    gamesAndCarnivals: "الألعاب والكرنفال",
    coloursOasis: "واحة الألوان",
    nepalWeek: "الأسبوع النيبالي",
    adventureGames: "العاب الحماس والمغامرات",
    bangladeshWeek: "الأسبوع البنغالي",

    theGrovesTitle: "ذا جروفز | موسم الرياض",
    theGroves: "ذا جروفز",
    theGrovesParagraph: "ذا جروفز يعود إليكم للمرة الثالثة على التوالي، ولكن هذا العام في موقع جديد و دائم مع تجربة جديدة ومبتكرة، كما عهدتم منا دائما إثارة وابتكار",

    theGrovesTime: "من الساعة 5:30 م إلى الساعة 3:00 ص",
    theGrovesDate: "ابتداءً من 28 أكتوبر",

    viaRiyadhTitle: "ڤيا رياض | موسم الرياض",
    viaRiyadh: "ڤيا رياض",
    viaRiyadhParagraph: "منطقة مصممة على الطراز السلماني يتواجد فيها أحد أشهر فنادق الخمس نجوم وسبع صالات سينما راقية والعديد من المطاعم والمقاهي العالمية والبوتيكات",
  
    viaRiyadhTime: "من الساعة 12:00 م إلى الساعة 3:00 ص",
    viaRiyadhDate: "ابتداءً من 28 أكتوبر",
  
    westerly: "ويسترلي",
    ferdi: "فيردي",
    yakinikumafia: "ياكينيكو مافيا",
    raouls: "راؤول",
    viaMercato: "ڤيا ميركاتو",
    lesDeuxMagots: "لي دو ماغو",
    wagyumafia: "واچيو مافيا",
  
    wonderGardenTitle: "وندر چاردن | موسم الرياض",
    wonderGarden: "وندر چاردن",
    wonderGardenParagraph: "مدينة ترفيهية مكونة من ٣ مناطق مليئة بالمتعة، حيث يمكن لزوارها الاستمتاع بمشاهدة طيور الفلامنجو، والفراشات الملونة والأشجار الخلابة في عالم أشبه ما يكون بالخيال! لا يسمح بالدخول بعد الساعه 11 مساءاً لأيام الأسبوع. لا يسمح بالدخول بعد الساعه 12 صباحاً لأيام نهاية الأسبوع.",
  
    wonderGardenTime: "من الساعة 4:00 م إلى الساعة 12:00 ص",
    wonderGardenDate: "ابتداءً من 15 نوفمبر",
  
    xScapeReality: "اكس اسكايب رياليتي",
    butterflyHouse: "بيت الفراشات",
    theBombVR: "ذا بومب ڤي ار",
    theFarm: "المزرعة",
    wonderGardenBouquet: "باقة وندر جاردن",
  
    riyadExitTitle: "كشتة الرياض | موسم الرياض",
    riyadExit: "كشتة الرياض",
    riyadExitParagraph: "الرياض اكزت، ملجأ هادئ يبعد 45 دقيقة شمال غرب الرياض، يقدم أنشطة متنوعة وجذابة لتجربة شتوية فريدة. مُقسم إلى منطقتين، منطقة المطاعم والمقاهي التي توفر دخول مجاني وتجارب تناول طعام متنوعة. ومنطقة المخيمات والأنشطة والتي تتطلب حجزًا مسبقًا، وهي مصممة لمن يبحثون عن العزلة والأجواء المميزة.",
  
    riyadExitTime: "من الساعة 4:00 م إلى الساعة 3:00 ص",
    riyadExitDate: "ابتداءً من 21 يناير",

    vipCampRiyadhExit: "كشتة الرياض VIP",
    regularCampRiyadhExit: "كشتة الرياض العادية",
    royalCampRiyadhExit: "كشتة الرياض الملكية",
  }
}

// Functionality
function updateWebsiteLanguage(lang) {
  const allContentElements = document.querySelectorAll("[data-content]");

  allContentElements.forEach((ele) => {
    let content = ele.getAttribute('data-content');

    if (contentTranslations[lang][content]) {
      ele.textContent = contentTranslations[lang][content];
    }
  });

  // Update Website Direction
  updateWebsiteDirection(lang);
  // Store Selected Language In The Local Storage
  storeLanguage(lang);
}

function updateWebsiteDirection(lang) {
  if (lang === "en") {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.body.style.setProperty("font-family", "'Inter', sans-serif");
    
    languageTogglers.forEach(toggler => {
      toggler.style.setProperty("font-family", "'Rubik', sans-serif");
    });
  } else {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    document.body.style.setProperty("font-family", "'Rubik', sans-serif");
    
    languageTogglers.forEach(toggler => {
      toggler.style.setProperty("font-family", "'Inter', sans-serif");
    });
  }
}

function storeLanguage(lang) {
  localStorage.setItem("language", lang);
}

function getLanguage() {
  if (localStorage.getItem("language")) {
    updateWebsiteLanguage(localStorage.getItem("language"));
  } else {
    updateWebsiteLanguage("en");
  }
}

// Apply Local Storage Data To The Page
window.addEventListener("load", getLanguage);