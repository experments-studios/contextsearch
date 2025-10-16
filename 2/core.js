    const translations = {
        en: {
            searchPlaceholder: "Search...",
            noResults: "No results found for your search.",
            addCookie: "Add Cookie",
            settings: "Search Wikipedia",
            news: "News",
            categories: { 
                "Technology": "Technology",
                "Design": "Design",
                "Education": "Education",
                "Marketing": "Marketing",
                "E-commerce": "E-commerce",
                "Gaming": "Gaming",
                "Tools": "Tools",
                "Artificial Intelligence": "Artificial Intelligence",
                "Social Media": "Social Media",
                "News": "News",
                "Entertainment": "Entertainment",
                "Health": "Health",
                "Finance": "Finance",
                "Travel": "Travel",
                "Food": "Food",
                "Science": "Science",
                "Sports": "Sports",
                "Photography": "Photography",
                "Music": "Music",
                "Programming": "Programming",
                "Fashion": "Fashion",
                "Home & Garden": "Home & Garden",
                "Automotive": "Automotive",
                "Art": "Art",
                "History": "History",
                "Literature": "Literature",
                "Philosophy": "Philosophy",
                "Environment": "Environment",
                "Business": "Business",
                "Personal Development": "Personal Development"
            }
        },
        az: {
            searchPlaceholder: "Axtarış edin...",
            noResults: "Axtarışınıza uyğun nəticə tapılmadı.",
            addCookie: "Kuki Əlavə Et",
            settings: "Tənzimləmələr",
            news: "Xəbərlər",
            categories: {
                "Technology": "Texnologiya",
                "Design": "Dizayn",
                "Education": "Təhsil",
                "Marketing": "Marketinq",
                "E-commerce": "E-ticarət",
                "Gaming": "Oyun",
                "Tools": "Alətlər",
                "Artificial Intelligence": "Süni İntellekt",
                "Social Media": "Sosial Media",
                "News": "Xəbərlər",
                "Entertainment": "Əyləncə",
                "Health": "Sağlamlıq",
                "Finance": "Maliyyə",
                "Travel": "Səyahət",
                "Food": "Qida",
                "Science": "Elm",
                "Sports": "İdman",
                "Photography": "Fotoqrafiya",
                "Music": "Musiqi",
                "Programming": "Proqramlaşdırma",
                "Fashion": "Moda",
                "Home & Garden": "Ev və Bağ",
                "Automotive": "Avtomobil",
                "Art": "İncəsənət",
                "History": "Tarix",
                "Literature": "Ədəbiyyat",
                "Philosophy": "Fəlsəfə",
                "Environment": "Ətraf Mühit",
                "Business": "Biznes",
                "Personal Development": "Şəxsi İnkişaf"
            }
        },
        tr: {
            searchPlaceholder: "Ara...",
            noResults: "Aramanıza uygun sonuç bulunamadı.",
            addCookie: "Çerez Ekle",
            settings: "Ayarlar",
            news: "Haberler",
            categories: { 
                "Technology": "Teknoloji",
                "Design": "Tasarım",
                "Education": "Eğitim",
                "Marketing": "Pazarlama",
                "E-commerce": "E-ticaret",
                "Gaming": "Oyun",
                "Tools": "Araçlar",
                "Artificial Intelligence": "Yapay Zeka",
                "Social Media": "Sosyal Medya",
                "News": "Haberler",
                "Entertainment": "Eğlence",
                "Health": "Sağlık",
                "Finance": "Finans",
                "Travel": "Seyahat",
                "Food": "Yemek",
                "Science": "Bilim",
                "Sports": "Spor",
                "Photography": "Fotoğrafçılık",
                "Music": "Müzik",
                "Programming": "Programlama",
                "Fashion": "Moda",
                "Home & Garden": "Ev ve Bahçe",
                "Automotive": "Otomotiv",
                "Art": "Sanat",
                "History": "Tarih",
                "Literature": "Edebiyat",
                "Philosophy": "Felsefe",
                "Environment": "Çevre",
                "Business": "İş",
                "Personal Development": "Kişisel Gelişim"
            }
        }
    };

   
    const sites = [
      { category: "Technology", title: "Vercel", description: { en: "A fast and efficient frontend platform.", az: "Hızlı və səmərəli cəbhə platforması.", tr: "Hızlı ve verimli bir ön uç platformu." }, url: "https://vercel.com" },
      { category: "Design", title: "Dribbble", description: { en: "A portfolio and discovery platform for designers.", az: "Tasarımcılar üçün bir portföy və kəşf platforması.", tr: "Tasarımcılar için bir portföy ve keşif platformu." }, url: "https://dribbble.com" },
      { category: "Design", title: "Awwwards", description: { en: "A platform that awards the best web designs.", az: "Ən yaxşı veb dizaynlarını mükafatlandıran platforma.", tr: "En iyi web tasarımlarını ödüllendiren platform." }, url: "https://awwwards.com" },
      { category: "Technology", title: "CSS-Tricks", description: { en: "Web development and design tips.", az: "Veb inkişafı və dizayn məsləhətləri.", tr: "Web geliştirme ve tasarım ipuçları." }, url: "https://css-tricks.com" },
      { category: "Design", title: "Adobe Portfolio", description: { en: "Adobe's tool for creating portfolios.", az: "Adobe-nin portfel yaratmaq üçün vasitəsi.", tr: "Adobe'nin portföy oluşturma aracı." }, url: "https://portfolio.adobe.com" },
      { category: "Design", title: "Behance", description: { en: "A portfolio platform for artists and designers.", az: "Rəssamlar və dizaynerlər üçün portfel platforması.", tr: "Sanatçılar ve tasarımcılar için bir portföy platformu." }, url: "https://behance.net" },
      { category: "Technology", title: "CodePen", description: { en: "Code sharing and web design programs.", az: "Kod paylaşımı və veb dizayn proqramları.", tr: "Kod paylaşımı ve web tasarım programları." }, url: "https://codepen.io" },
      { category: "Technology", title: "GitHub", description: { en: "A platform for sharing open-source projects.", az: "Açıq mənbəli layihələrin paylaşıldığı platforma.", tr: "Açık kaynak projelerin paylaşıldığı platform." }, url: "https://github.com" },
      { category: "Technology", title: "Stack Overflow", description: { en: "A Q&A platform for developers.", az: "Geliştiriciler üçün sual-cavab platforması.", tr: "Geliştiriciler için bir soru-cevap platformu." }, url: "https://stackoverflow.com" },
      { category: "Education", title: "MDN Web Docs", description: { en: "Mozilla's web development documentation.", az: "Mozilla-nın veb inkişaf sənədləri.", tr: "Mozilla'nın web geliştirme dokümantasyonları." }, url: "https://developer.mozilla.org" },
      { category: "Technology", title: "Smashing Magazine", description: { en: "Resources related to web design and development.", az: "Veb dizaynı və inkişafı ilə əlaqədar resurslar.", tr: "Web tasarımı ve geliştirme ile ilgili kaynaklar." }, url: "https://smashingmagazine.com" },
      { category: "Design", title: "UX Design", description: { en: "User experience design resources and articles.", az: "İstifadəçi təcrübəsi dizaynı resursları və məqalələr.", tr: "Kullanıcı deneyimi tasarımı kaynakları ve makaleler." }, url: "https://uxdesign.cc" },
      { category: "Design", title: "Figma", description: { en: "A web-based design and prototyping tool.", az: "Veb əsaslı dizayn və prototip aləti.", tr: "Web tabanlı bir tasarım ve prototipleme aracı." }, url: "https://figma.com" },
      { category: "Design", title: "Canva", description: { en: "A user-friendly graphic design tool.", az: "İstifadəçi dostu qrafik dizayn aləti.", tr: "Kullanıcı dostu bir grafik tasarım aracı." }, url: "https://canva.com" },
      { category: "Technology", title: "Webflow", description: { en: "A platform that allows you to design websites without writing code.", az: "Kod yazmadan veb sayt dizayn etməyə imkan verən platforma.", tr: "Kod yazmadan web sitesi tasarlamanızı sağlayan platform." }, url: "https://webflow.com" },
      { category: "Technology", title: "Trello", description: { en: "A project management and task tracking platform.", az: "Layihə idarəetməsi və tapşırıq izləmə platforması.", tr: "Proje yönetimi ve görev takibi platformu." }, url: "https://trello.com" },
      { category: "Technology", title: "Notion", description: { en: "A digital note-taking and organization platform.", az: "Rəqəmsal qeyd alma və təşkilat platforması.", tr: "Dijital not alma ve organizasyon platformu." }, url: "https://notion.so" },
      { category: "Design", title: "Google Fonts", description: { en: "Free fonts for the web.", az: "Veb üçün pulsuz şriftlər.", tr: "Web için ücretsiz yazı tipleri." }, url: "https://fonts.google.com" },
      { category: "News", title: "Medium", description: { en: "Content sharing and blogging platform.", az: "Məzmun paylaşımı və bloq platforması.", tr: "İçerik paylaşımı ve blog platformu." }, url: "https://medium.com" },
      { category: "Technology", title: "Envato Market", description: { en: "Web design and software resources platform.", az: "Veb dizayn və proqram resursları platforması.", tr: "Web tasarım ve yazılım kaynakları platformu." }, url: "https://envato.com" },
      {
    category: "Entertainment",
    title: "YouTube - PewDiePie",
    description: {
        en: "A Swedish YouTuber primarily known for his Let's Play videos and comedic formatted shows. He is one of the most subscribed individuals on the platform.",
        az: "Əsasən Let's Play videoları və komediya formatlı şouları ilə tanınan İsveçli YouTuber. Platformada ən çox abunə olan şəxslərdən biridir.",
        tr: "Başta Let's Play videoları ve komedi formatlı şovlarıyla tanınan İsveçli bir YouTuber. Platformdaki en çok aboneye sahip kişilerden biridir."
    },
    url: "https://www.youtube.com/user/PewDiePie"
},
{
    category: "Music",
    title: "YouTube - Despacito - Luis Fonsi",
    description: {
        en: "The official music video for 'Despacito' by Luis Fonsi featuring Daddy Yankee. It was one of the first videos to reach billions of views on the platform.",
        az: "Luis Fonsi'nin Daddy Yankee ilə birlikdə ifa etdiyi 'Despacito' mahnısının rəsmi musiqi videosu. Platformada milyardlarla baxışa çatan ilk videolardan biri idi.",
        tr: "Luis Fonsi'nin Daddy Yankee ile birlikte seslendirdiği 'Despacito' şarkısının resmi müzik videosu. Platformda milyarlarca izlenmeye ulaşan ilk videolardan biriydi."
    },
    url: "https://www.youtube.com/watch?v=UCQg99qha8g"
},
{
    category: "Education",
    title: "YouTube - Kurzgesagt – In a Nutshell",
    description: {
        en: "A German-based YouTube channel that produces short, animated, educational videos on scientific, technological, political, philosophical, and psychological subjects.",
        az: "Elmi, texnoloji, siyasi, fəlsəfi və psixoloji mövzularda qısa, animasiyalı, maarifləndirici videolar hazırlayan Almaniya mənşəli YouTube kanalı.",
        tr: "Bilimsel, teknolojik, politik, felsefi ve psikolojik konular hakkında kısa, animasyonlu, eğitici videolar üreten Almanya merkezli YouTube kanalı."
    },
    url: "https://www.youtube.com/@kurzgesagt"
},
{
    category: "Gaming",
    title: "YouTube - Minecraft Diamond Nasıl Bulunur?",
    description: {
        en: "A tutorial video guiding players on the most efficient and strategic ways to find Diamond Ore within the popular sandbox game Minecraft.",
        az: "Məşhur sandbox oyunu Minecraft daxilində Almaz Filizini tapmaq üçün oyunçulara ən səmərəli və strateji yolları göstərən təlimat videosu.",
        tr: "Popüler sandbox oyunu Minecraft içinde Elmas Cevheri'ni bulmanın en verimli ve stratejik yollarını oyunculara gösteren bir eğitim videosu."
    },
    url: "https://www.youtube.com/watch?v=3-5e_7tX1J8"
},
{
    category: "Sports",
    title: "YouTube - En İyi 10 Basketbol Alley-Oop Smaç",
    description: {
        en: "A compilation video showcasing the top 10 most spectacular and memorable alley-oop dunks in professional basketball history.",
        az: "Peşəkar basketbol tarixində ən möhtəşəm və yaddaqalan 10 alley-oop smaçı nümayiş etdirən bir kompilyasiya videosu.",
        tr: "Profesyonel basketbol tarihinin en muhteşem ve unutulmaz 10 alley-oop smaçını sergileyen bir derleme videosu."
    },
    url: "https://www.youtube.com/watch?v=sI9f-X_iS4Q"
},
{
    category: "Cooking",
    title: "YouTube - Kolay Tiramisu Tarifi",
    description: {
        en: "A detailed and easy-to-follow recipe video for making the classic Italian dessert, Tiramisu, suitable for beginner bakers.",
        az: "Yeni başlayan aşpazlar üçün uyğun olan klassik İtalyan deserti Tiramisu hazırlamaq üçün ətraflı və asan başa düşülən resept videosu.",
        tr: "Başlangıç seviyesindeki aşçılar için uygun, klasik İtalyan tatlısı Tiramisu'nun yapılışına dair ayrıntılı ve kolay takip edilebilir bir tarif videosu."
    },
    url: "https://www.youtube.com/watch?v=KUeXdmptens"
},
{
    category: "News",
    title: "YouTube - BBC News Türkçe",
    description: {
        en: "The official YouTube channel of the BBC's Turkish service, providing news coverage, analysis, and interviews from Turkey and around the world.",
        az: "Türkiyədən və dünyadan xəbərləri, təhlilləri və müsahibələri təqdim edən BBC-nin Türk xidmətinin rəsmi YouTube kanalı.",
        tr: "BBC'nin Türkçe servisinin resmi YouTube kanalı olup, Türkiye'den ve dünyadan haberler, analizler ve röportajlar sunar."
    },
    url: "https://www.youtube.com/@bbcnewsturkce"
},
{
    category: "Technology",
    title: "YouTube - Marques Brownlee (MKBHD)",
    description: {
        en: "A popular technology-focused channel known for in-depth reviews of smartphones, gadgets, and consumer electronics, hosted by Marques Brownlee.",
        az: "Marques Brownlee tərəfindən idarə olunan, smartfonlar, cihazlar və məişət elektronikası haqqında ətraflı rəyləri ilə tanınan populyar texnologiyaya yönəlmiş kanal.",
        tr: "Marques Brownlee'nin sunduğu, akıllı telefonlar, cihazlar ve tüketici elektroniği hakkında derinlemesine incelemeleriyle tanınan popüler bir teknoloji kanalı."
    },
    url: "https://www.youtube.com/@MKBHD"
},
{
    category: "DIY & Crafts",
    title: "YouTube - Eskimiş Mobilyaları Yenileme Rehberi",
    description: {
        en: "A do-it-yourself (DIY) video demonstrating how to restore and refinish old or worn-out furniture, giving tips on sanding, painting, and varnishing.",
        az: "Köhnə və ya köhnəlmiş mebellərin necə bərpa ediləcəyini və yenidən işlənəcəyini nümayiş etdirən, zımparalama, boyama və laklama mövzusunda məsləhətlər verən özün-et (DIY) videosu.",
        tr: "Eski veya yıpranmış mobilyaların nasıl restore edileceğini ve yeniden bitirileceğini gösteren, zımparalama, boyama ve vernikleme hakkında ipuçları veren bir kendin yap (DIY) videosu."
    },
    url: "https://www.youtube.com/watch?v=1u-7963xL2U"
},
{
    category: "Finance",
    title: "YouTube - Basitçe Borsa Nasıl Çalışır?",
    description: {
        en: "An educational video that simplifies the complex workings of the stock market, explaining concepts like shares, indexes, and investment strategies for beginners.",
        az: "Səhmlər, indekslər və yeni başlayanlar üçün investisiya strategiyaları kimi anlayışları izah edərək, fond bazarının mürəkkəb iş prinsiplərini sadələşdirən maarifləndirici video.",
        tr: "Hisse senetleri, endeksler ve yeni başlayanlar için yatırım stratejileri gibi kavramları açıklayarak, borsa piyasasının karmaşık işleyişini basitleştiren eğitici bir video."
    },
    url: "https://www.youtube.com/watch?v=7X5zN6c9p9c"
},
{
    category: "Science",
    title: "YouTube - NASA",
    description: {
        en: "The official channel for the National Aeronautics and Space Administration (NASA), featuring live streams from space, mission updates, and educational content about the universe.",
        az: "Kosmosdan canlı yayımlar, missiya yenilikləri və kainat haqqında maarifləndirici məzmunu təqdim edən Milli Aeronavtika və Kosmos İdarəsinin (NASA) rəsmi kanalı.",
        tr: "Ulusal Havacılık ve Uzay İdaresi'nin (NASA) resmi kanalı, uzaydan canlı yayınlar, görev güncellemeleri ve evren hakkında eğitici içerikler sunar."
    },
    url: "https://www.youtube.com/@NASA"
},
{
    category: "Tutorial",
    title: "YouTube - Photoshop'ta Temel Görüntü Düzenleme",
    description: {
        en: "A video guide on essential image editing techniques in Adobe Photoshop, covering layers, masks, and basic color correction.",
        az: "Adobe Photoshop-da əsas şəkil redaktə üsulları, laylar, maskalar və əsas rəng korreksiyasını əhatə edən video bələdçi.",
        tr: "Adobe Photoshop'ta katmanlar, maskeler ve temel görüntü düzenleme tekniklerini kapsayan bir video rehberi."
    },
    url: "https://www.youtube.com/watch?v=tPSEaOeNOQI"
},
{
    category: "Comedy",
    title: "YouTube - En Komik Kedi Videoları Derlemesi",
    description: {
        en: "A compilation of humorous clips featuring cats in various funny and unexpected situations, providing light entertainment.",
        az: "Pişiklərin müxtəlif məzəli və gözlənilməz vəziyyətlərini əks etdirən yumoristik kliplərin toplusu, yüngül əyləncə təmin edir.",
        tr: "Kedilerin çeşitli komik ve beklenmedik durumlarda yer aldığı, eğlenceli ve mizahi kliplerin derlemesi."
    },
    url: "https://www.youtube.com/watch?v=uaFQn9EdbeY"
},
{
    category: "Travel",
    title: "YouTube - Tokyo Gezi Rehberi: Görülmesi Gereken Yerler",
    description: {
        en: "A travel guide video exploring the city of Tokyo, Japan, highlighting must-see landmarks, local cuisine, and cultural spots.",
        az: "Yaponiyanın Tokio şəhərini araşdıran, mütləq görülməli yerləri, yerli mətbəxi və mədəniyyət ocaqlarını vurğulayan səyahət bələdçisi videosu.",
        tr: "Japonya'nın Tokyo şehrini keşfeden, mutlaka görülmesi gereken yerleri, yerel mutfağı ve kültürel noktaları öne çıkaran bir seyahat rehberi videosu."
    },
    url: "https://www.youtube.com/watch?v=f8QXxkBs6gc"
},
{
    category: "Health & Fitness",
    title: "YouTube - 20 Dakika Tam Vücut Ev Egzersizi",
    description: {
        en: "A full-body workout video designed to be performed at home in 20 minutes, requiring no equipment and suitable for all fitness levels.",
        az: "Heç bir avadanlıq tələb etməyən və bütün fitnes səviyyələri üçün uyğun olan, 20 dəqiqə ərzində evdə yerinə yetirilmək üçün nəzərdə tutulmuş tam bədən məşqi videosu.",
        tr: "Hiçbir ekipman gerektirmeyen ve tüm fitness seviyeleri için uygun olan, 20 dakikada evde yapılmak üzere tasarlanmış bir tam vücut antrenman videosu."
    },
    url: "https://www.youtube.com/watch?v=fN56PocaBvk"
},
{
    category: "History",
    title: "YouTube - Antik Roma İmparatorluğu'nun Yükselişi ve Çöküşü",
    description: {
        en: "A documentary-style video providing a historical overview of the Roman Empire, detailing its expansion, key figures, and eventual collapse.",
        az: "Roma İmperiyasına tarixi bir baxış təqdim edən, onun genişlənməsini, əsas şəxslərini və nəticədə süqutunu ətraflı izah edən sənədli film tipli video.",
        tr: "Roma İmparatorluğu'nun tarihi bir genel bakışını sunan, genişlemesini, kilit figürlerini ve nihai çöküşünü detaylandıran belgesel tarzı bir video."
    },
    url: "https://www.youtube.com/watch?v=oV8C4F61sAE"
},
{
    category: "Music",
    title: "YouTube - Chill Study Jazz Müzik (Playlist)",
    description: {
        en: "A live-streamed or long-form playlist featuring calm, instrumental jazz music, often used by students and remote workers for concentration.",
        az: "Tələbələr və uzaqdan işləyənlər tərəfindən konsentrasiya üçün tez-tez istifadə edilən sakit, instrumental caz musiqisini əks etdirən canlı yayımlanan və ya uzun formalı pleylist.",
        tr: "Öğrenciler ve uzaktan çalışanlar tarafından odaklanmak için sıklıkla kullanılan, sakin, enstrümantal caz müziği içeren bir canlı yayın veya uzun biçimli çalma listesi."
    },
    url: "https://www.youtube.com/watch?v=lJg90Yn-vQo"
},
{
    category: "Automotive",
    title: "YouTube - Tesla Model 3 Kapsamlı İnceleme",
    description: {
        en: "A thorough video review of the Tesla Model 3 electric vehicle, covering its performance, interior features, battery range, and self-driving capabilities.",
        az: "Tesla Model 3 elektrikli avtomobilinin performansını, daxili xüsusiyyətlərini, batareya məsafəsini və özünü idarə etmə imkanlarını əhatə edən ətraflı video icmalı.",
        tr: "Tesla Model 3 elektrikli aracının performansını, iç mekan özelliklerini, batarya menzilini ve otonom sürüş yeteneklerini kapsayan kapsamlı bir video incelemesi."
    },
    url: "https://www.youtube.com/watch?v=L2G57yN_e7M"
},
{
    category: "Nature",
    title: "YouTube - National Geographic",
    description: {
        en: "The official channel for National Geographic, dedicated to showcasing stunning nature, wildlife, science, and exploration documentaries and clips.",
        az: "Heyrətamiz təbiəti, vəhşi həyatı, elmi və kəşfiyyat sənədli filmlərini və kliplərini nümayiş etdirməyə həsr olunmuş National Geographic-in rəsmi kanalı.",
        tr: "Çarpıcı doğa, vahşi yaşam, bilim ve keşif belgeselleri ve kliplerini sergilemeye adanmış National Geographic'in resmi kanalı."
    },
    url: "https://www.youtube.com/@NatGeo"
},
{
    category: "Education",
    title: "YouTube - CrashCourse",
    description: {
        en: "An educational YouTube channel created by Hank and John Green, offering fast-paced, high-quality courses in various subjects, including history, science, and literature.",
        az: "Hank və John Green tərəfindən yaradılmış, tarix, elm və ədəbiyyat da daxil olmaqla müxtəlif mövzularda sürətli, yüksək keyfiyyətli kurslar təklif edən maarifləndirici YouTube kanalı.",
        tr: "Hank ve John Green tarafından oluşturulan, tarih, bilim ve edebiyat dahil olmak üzere çeşitli konularda hızlı tempolu, yüksek kaliteli dersler sunan eğitici bir YouTube kanalı."
    },
    url: "https://www.youtube.com/user/crashcourse"
},
{
    category: "Film",
    title: "YouTube - Yeni Çıkan Film Fragmanları",
    description: {
        en: "A compilation or single video featuring trailers for the most anticipated upcoming movies across various genres (action, drama, sci-fi).",
        az: "Müxtəlif janrlarda (ekşn, dram, elmi-fantastik) ən çox gözlənilən qarşıdan gələn filmlərin treylerlərini əks etdirən bir kompilyasiya və ya tək video.",
        tr: "Çeşitli türlerde (aksiyon, dram, bilim kurgu) en çok beklenen yeni filmlerin fragmanlarını içeren bir derleme veya tek video."
    },
    url: "https://www.youtube.com/watch?v=sO0uW282wJ8"
},
{
    category: "Gaming",
    title: "YouTube - League of Legends Dünya Şampiyonası Finali (Canlı Yayın)",
    description: {
        en: "A live stream or highlight reel of the final match of the annual League of Legends World Championship e-sports tournament.",
        az: "Hər il keçirilən League of Legends Dünya Çempionatı e-idman turnirinin final matçının canlı yayımı və ya əsas məqamları.",
        tr: "Yıllık League of Legends Dünya Şampiyonası e-spor turnuvasının final maçının canlı yayını veya özet makarası."
    },
    url: "https://www.youtube.com/watch?v=x7E2F1v8gW0"
},
{
    category: "Health & Fitness",
    title: "YouTube - Yoga With Adriene",
    description: {
        en: "A popular channel featuring free yoga practices, offering routines for beginners, stress relief, and specific physical needs.",
        az: "Yeni başlayanlar, stressin aradan qaldırılması və xüsusi fiziki ehtiyaclar üçün rutinlər təklif edən pulsuz yoqa təcrübələrini əks etdirən populyar kanal.",
        tr: "Yeni başlayanlar, stres giderme ve özel fiziksel ihtiyaçlar için rutinler sunan, ücretsiz yoga uygulamalarını içeren popüler bir kanal."
    },
    url: "https://www.youtube.com/@yogawithadriene"
},
{
    category: "Art",
    title: "YouTube - Bob Ross'un Resim Dersleri",
    description: {
        en: "Classic episodes of 'The Joy of Painting' by Bob Ross, where he teaches viewers how to paint landscapes using his wet-on-wet technique.",
        az: "Bob Ross'un 'Rəsm Sevinci' klassik epizodları, burada o, tamaşaçılara yaş-üstü-yaş texnikasından istifadə edərək mənzərələri necə rəngləməyi öyrədir.",
        tr: "Bob Ross'un, izleyicilere ıslak üstüne ıslak tekniğini kullanarak manzara resimleri yapmayı öğrettiği 'Resim Yapmanın Neşesi' programının klasik bölümleri."
    },
    url: "https://www.youtube.com/watch?v=mT0RNrTDHkI"
},
{
    category: "Science",
    title: "YouTube - Evrenin Boyutu (Animasyonlu Açıklama)",
    description: {
        en: "An animated video that visually explains the vast scales of the universe, comparing the sizes of planets, stars, and galaxies.",
        az: "Planetlərin, ulduzların və qalaktikaların ölçülərini müqayisə edərək, kainatın geniş miqyaslarını vizual olaraq izah edən animasiyalı video.",
        tr: "Gezegenlerin, yıldızların ve galaksilerin boyutlarını karşılaştırarak evrenin devasa ölçeklerini görsel olarak açıklayan animasyonlu bir video."
    },
    url: "https://www.youtube.com/watch?v=lJpYQYg1k0s"
},
{
    category: "Tutorial",
    title: "YouTube - Python ile Web Geliştirmeye Giriş",
    description: {
        en: "A coding tutorial introducing web development concepts using the Python programming language, focusing on frameworks like Django or Flask.",
        az: "Django və ya Flask kimi freymvörklərə diqqət yetirərək, Python proqramlaşdırma dilindən istifadə edərək veb inkişafı konsepsiyalarını təqdim edən kodlaşdırma təlimatı.",
        tr: "Django veya Flask gibi çerçevelere odaklanarak Python programlama dilini kullanarak web geliştirme kavramlarını tanıtan bir kodlama eğitimi."
    },
    url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
},
{
    category: "Vlog",
    title: "YouTube - Casey Neistat",
    description: {
        en: "A channel known for high-energy vlogs, cinematic storytelling, and videos about technology, life experiences, and entrepreneurial ventures.",
        az: "Yüksək enerjili vloqları, kinematik hekayəçiliyi və texnologiya, həyat təcrübələri və sahibkarlıq təşəbbüsləri haqqında videoları ilə tanınan kanal.",
        tr: "Yüksek enerjili vlog'ları, sinematik hikaye anlatımı ve teknoloji, yaşam deneyimleri ve girişimcilik maceraları hakkındaki videolarıyla tanınan bir kanal."
    },
    url: "https://www.youtube.com/user/caseyneistat"
},
{
    category: "News",
    title: "YouTube - TED",
    description: {
        en: "The official TED channel, featuring 'ideas worth spreading' through short, powerful talks on technology, design, science, and global issues.",
        az: "Texnologiya, dizayn, elm və qlobal məsələlər haqqında qısa, güclü çıxışlar vasitəsilə 'yayılmağa dəyər ideyaları' təqdim edən rəsmi TED kanalı.",
        tr: "Teknoloji, tasarım, bilim ve küresel sorunlar üzerine kısa, etkili konuşmalar aracılığıyla 'yayılmaya değer fikirler' sunan resmi TED kanalı."
    },
    url: "https://www.youtube.com/@TED"
},
{
    category: "Music",
    title: "YouTube - Billie Eilish - Bad Guy (Official Video)",
    description: {
        en: "The official music video for Billie Eilish's hit single 'Bad Guy,' known for its minimalist and quirky visual style.",
        az: "Billie Eilish'in minimalist və qəribə vizual üslubu ilə tanınan hit sinqlı 'Bad Guy' üçün rəsmi musiqi videosu.",
        tr: "Billie Eilish'in minimalist ve ilginç görsel stiliyle tanınan hit single'ı 'Bad Guy'ın resmi müzik videosu."
    },
    url: "https://www.youtube.com/watch?v=DyDfgMOUjCI"
},
{
    category: "Gaming",
    title: "YouTube - The Game Theorists",
    description: {
        en: "A channel dedicated to analyzing video game lore, mechanics, and culture, often using scientific, mathematical, and historical facts to form complex theories.",
        az: "Video oyunlarının loru, mexanikası və mədəniyyətini təhlil etməyə həsr olunmuş, mürəkkəb nəzəriyyələr formalaşdırmaq üçün tez-tez elmi, riyazi və tarixi faktlardan istifadə edən kanal.",
        tr: "Video oyunu bilgisi, mekanikleri ve kültürünü analiz etmeye adanmış, karmaşık teoriler oluşturmak için genellikle bilimsel, matematiksel ve tarihi gerçekleri kullanan bir kanal."
    },
    url: "https://www.youtube.com/user/MatthewPatrick13"
},
{
    category: "Entertainment",
    title: "YouTube - MrBeast",
    description: {
        en: "An American YouTuber known for his expensive stunts and philanthropic videos. His content often involves giving large amounts of money away.",
        az: "Bahalı kaskadlar və xeyriyyəçilik videoları ilə tanınan Amerikalı YouTuber. Onun məzmunu tez-tez böyük miqdarda pul paylamağı əhatə edir.",
        tr: "Pahalı gösterileri ve hayırseverlik videolarıyla tanınan Amerikalı bir YouTuber. İçeriği genellikle büyük miktarda para dağıtmayı içerir."
    },
    url: "https://www.youtube.com/@MrBeast"
},

      { category: "Education", title: "W3Schools", description: { en: "A resource for learning web development.", az: "Veb inkişafını öyrənmək üçün resurs.", tr: "Web geliştirme öğrenmek için bir kaynak." }, url: "https://w3schools.com" },
      { category: "Marketing", title: "Moz", description: { en: "SEO and digital marketing tools.", az: "SEO və rəqəmsal marketinq alətləri.", tr: "SEO ve dijital pazarlama araçları." }, url: "https://moz.com" },
      { category: "Marketing", title: "Mailchimp", description: { en: "Email marketing platform.", az: "E-poçt marketinq platforması.", tr: "E-posta pazarlama platformu." }, url: "https://mailchimp.com" },
      { category: "Technology", title: "Zapier", description: { en: "A tool that automates workflows.", az: "İş axınlarını avtomatlaşdıran alət.", tr: "İş akışlarını otomatikleştiren araç." }, url: "https://zapier.com" },
      { category: "E-commerce", title: "Shopify", description: { en: "An e-commerce store creation platform.", az: "Elektron ticarət mağazası yaratma platforması.", tr: "E-ticaret mağazası oluşturma platformu." }, url: "https://shopify.com" },
      { category: "Technology", title: "DigitalOcean", description: { en: "A platform that provides cloud servers.", az: "Bulud serverləri təmin edən platforma.", tr: "Bulut sunucuları sağlayan platform." }, url: "https://digitalocean.com" },
      { category: "Technology", title: "Heroku", description: { en: "Cloud platform and application hosting service.", az: "Bulud platforması və tətbiq yerləşdirmə xidməti.", tr: "Bulut platformu ve uygulama barındırma hizmeti." }, url: "https://heroku.com" },
      { category: "Technology", title: "WordPress", description: { en: "A globally popular content management system.", az: "Qlobal miqyasda məşhur məzmun idarəetmə sistemi.", tr: "Dünya genelinde popüler bir içerik yönetim sistemi." }, url: "https://wordpress.com" },
      { category: "Technology", title: "Apple", description: { en: "A company that produces technological products and software.", az: "Texnoloji məhsullar və proqram təminatı istehsal edən şirkət.", tr: "Teknolojik ürünler ve yazılımlar üreten şirket." }, url: "https://apple.com" },
      { category: "E-commerce", title: "Amazon", description: { en: "E-commerce and technology company.", az: "E-ticarət və texnologiya şirkəti.", tr: "E-ticaret ve teknoloji şirketi." }, url: "https://amazon.com" },
      { category: "Gaming", title: "exemplesoft engine", description: { en: "Game development engine.", az: "Oyun inkişaf etdirmə mühərriki.", tr: "Oyun geliştirme motoru." }, url: "https://theprocramer.github.io/exemplesoft-engine" },
      { category: "Tools", title: "werarew sheet", description: { en: "Spreadsheet application.", az: "Cədvəl tətbiqi (hesabat proqramı).", tr: "Hesap tablosu uygulaması." }, url: "https://theprocramer.github.io/werarew-sheet/" },
      { category: "Artificial Intelligence", title: "ChatGPT", description: { en: "The best AI chatbot.", az: "Ən yaxşı süni intellekt çatbotu.", tr: "En iyi yapay zeka sohbet botu." }, url: "https://chatgpt.com" },
      { category: "Social Media", title: "Quora", description: { en: "Q&A platform where users ask and answer questions.", az: "İstifadəçilərin sual verib cavab aldığı sual-cavab platforması.", tr: "Kullanıcıların soru sorup cevap aldığı soru-cevap platformu." }, url: "https://quora.com" },
      { category: "Social Media", title: "LinkedIn", description: { en: "A professional networking and job search platform.", az: "Peşəkar şəbəkə qurma və iş axtarışı platforması.", tr: "Profesyonel ağ kurma ve iş arama platformu." }, url: "https://linkedin.com" },
      { category: "Social Media", title: "Instagram", description: { en: "Visual and video sharing platform.", az: "Görsel və video paylaşım platforması.", tr: "Görsel ve video paylaşım platformu." }, url: "https://instagram.com" },
      { category: "Social Media", title: "Pinterest", description: { en: "Idea sharing and visual discovery platform.", az: "Fikir paylaşımı və görsel kəşf platforması.", tr: "Fikir paylaşımı ve görsel keşif platformu." }, url: "https://pinterest.com" },
      { category: "News", title: "Reddit", description: { en: "News and community platform.", az: "Xəbər və icma platforması.", tr: "Haber ve topluluk platformu." }, url: "https://reddit.com" },
      { category: "Social Media", title: "Twitter", description: { en: "Short messaging and news platform.", az: "Qısa mesajlaşma və xəbərləşmə platforması.", tr: "Kısa mesajlaşma ve haberleşme platformu." }, url: "https://twitter.com" },
      { category: "Social Media", title: "Facebook", description: { en: "Social media and messaging platform.", az: "Sosial media və mesajlaşma platforması.", tr: "Sosyal medya ve mesajlaşma platformu." }, url: "https://facebook.com" },
      { category: "Entertainment", title: "YouTube", description: { en: "Video sharing and streaming platform.", az: "Video paylaşım və yayım platforması.", tr: "Video paylaşım ve yayın platformu." }, url: "https://www.youtube.com/" }, 
      { category: "Entertainment", title: "Netflix", description: { en: "Digital movie and series streaming platform.", az: "Rəqəmsal film və serial axını platforması.", tr: "Dijital film ve dizi akış platformu." }, url: "https://netflix.com" },
      { category: "Entertainment", title: "Spotify", description: { en: "Music listening platform.", az: "Musiqi dinləmə platforması.", tr: "Müzik dinleme platformu." }, url: "https://spotify.com" }, 
      { category: "Education", title: "vikipedia AZ", description: { en: "Open Azerbaijani encyclopedia.", az: "Açıq Azərbaycan ensiklopediyası.", tr: "Açık Azerbaycan ansiklopedisi." }, url: "https://az.wikipedia.org" },
      { category: "Education", title: "vikipedia TR", description: { en: "Free Turkish encyclopedia.", az: "Özgür Türk ensiklopediyası.", tr: "Özgür Türk ansiklopedisi." }, url: "https://tr.wikipedia.org" },
      { category: "Education", title: "Wikipedia EN", description: { en: "Free English encyclopedia.", az: "Pulsuz İngilis ensiklopediyası.", tr: "Ücretsiz İngiliz ansiklopedisi." }, url: "https://en.wikipedia.org" },
      { category: "Technology", title: "Google", description: { en: "A global technology company specializing in internet-related services and products.", az: "İnternetlə əlaqəli xidmətlər və məhsullar üzrə ixtisaslaşan qlobal texnologiya şirkəti.", tr: "İnternetle ilgili hizmetler ve ürünler konusunda uzmanlaşmış küresel bir teknoloji şirketi." }, url: "https://www.google.com" },
      { category: "Technology", title: "Microsoft", description: { en: "A multinational technology corporation producing computer software, consumer electronics, personal computers, and related services.", az: "Kompüter proqramları, istehlakçı elektronikası, fərdi kompüterlər və əlaqədar xidmətlər istehsal edən transmilli texnologiya korporasiyası.", tr: "Bilgisayar yazılımı, tüketici elektroniği, kişisel bilgisayarlar ve ilgili hizmetler üreten çok uluslu bir teknoloji şirketi." }, url: "https://www.microsoft.com" },
      { category: "Technology", title: "IBM", description: { en: "A leading global hybrid cloud and AI company that helps clients in more than 175 countries.", az: "175-dən çox ölkədə müştərilərə kömək edən qlobal hibrid bulud və AI şirkəti.", tr: "175'ten fazla ülkede müşterilerine yardımcı olan lider bir küresel hibrit bulut ve yapay zeka şirketi." }, url: "https://www.ibm.com" },
      { category: "Technology", title: "Oracle", description: { en: "Provides a vast array of cloud applications, platform services, and engineered systems.", az: "Geniş çeşidli bulud tətbiqləri, platforma xidmətləri və mühəndislik sistemləri təmin edir.", tr: "Çok çeşitli bulut uygulamaları, platform hizmetleri ve mühendislik sistemleri sunar." }, url: "https://www.oracle.com" },
      { category: "Technology", title: "SAP", description: { en: "Market leader in enterprise application software, helping companies of all sizes and industries run better.", az: "Müəssisə tətbiqi proqram təminatında bazar lideri, hər ölçüdə və sənayedə olan şirkətlərin daha yaxşı işləməsinə kömək edir.", tr: "Her büyüklükteki ve sektördeki şirketlerin daha iyi çalışmasına yardımcı olan kurumsal uygulama yazılımında pazar lideri." }, url: "https://www.sap.com" },
      { category: "Technology", title: "Intel", description: { en: "World's largest semiconductor chip manufacturer by revenue, supplies microprocessors for computer system products.", az: "Gəlirə görə dünyanın ən böyük yarımkeçirici çip istehsalçısı, kompüter sistem məhsulları üçün mikroprosessorlar təmin edir.", tr: "Gelir açısından dünyanın en büyük yarı iletken çip üreticisi, bilgisayar sistem ürünleri için mikroişlemciler tedarik eder." }, url: "https://www.intel.com" },
      { category: "Technology", title: "Qualcomm", description: { en: "Designs and markets wireless telecommunications products and services.", az: "Simsiz telekommunikasiya məhsulları və xidmətlərini dizayn edir və bazara çıxarır.", tr: "Kablosuz telekomünikasyon ürünleri ve hizmetleri tasarlar ve pazarlar." }, url: "https://www.qualcomm.com" },
      { category: "Technology", title: "Cisco", description: { en: "Designs and sells networking equipment, telecommunications equipment, and other high-technology services and products.", az: "Şəbəkə avadanlığı, telekommunikasiya avadanlığı və digər yüksək texnologiyalı xidmət və məhsulları dizayn edir və satır.", tr: "Ağ ekipmanları, telekomünikasyon ekipmanları ve diğer yüksek teknoloji hizmetleri ve ürünleri tasarlar ve satar." }, url: "https://www.cisco.com" },
      { category: "Technology", title: "NVIDIA", description: { en: "A global leader in visual computing technologies and the inventor of the GPU.", az: "Görsel hesablama texnologiyalarında qlobal lider və GPU-nun ixtiraçısı.", tr: "Görsel bilgi işlem teknolojilerinde küresel bir lider ve GPU'nun mucidi." }, url: "https://www.nvidia.com" },
      { category: "Technology", title: "Salesforce", description: { en: "A cloud-based software company providing customer relationship management (CRM) services.", az: "Müştəri əlaqələri idarəetməsi (CRM) xidmətləri təqdim edən bulud əsaslı proqram şirkəti.", tr: "Müşteri ilişkileri yönetimi (CRM) hizmetleri sunan bulut tabanlı bir yazılım şirketi." }, url: "https://www.salesforce.com" },
      { category: "Technology", title: "Adobe", description: { en: "A multinational computer software company, best known for its creative and multimedia software products.", az: "Yaradıcı və multimedia proqram məhsulları ilə tanınan transmilli kompüter proqram şirkəti.", tr: "Yaratıcı ve multimedya yazılım ürünleriyle tanınan çok uluslu bir bilgisayar yazılım şirketi." }, url: "https://www.adobe.com" },
      { category: "Technology", title: "VMware", description: { en: "A cloud computing and virtualization technology company.", az: "Bulud hesablama və virtuallaşdırma texnologiyası şirkəti.", tr: "Bulut bilişim ve sanallaştırma teknolojisi şirketi." }, url: "https://www.vmware.com" },
      { category: "Technology", title: "Palo Alto Networks", description: { en: "A global cybersecurity leader, continually innovating to enable secure digital transformation.", az: "Təhlükəsiz rəqəmsal transformasiyanı təmin etmək üçün daim yenilik edən qlobal kiber təhlükəsizlik lideri.", tr: "Güvenli dijital dönüşümü sağlamak için sürekli yenilik yapan küresel bir siber güvenlik lideri." }, url: "https://www.paloaltonetworks.com" },
      { category: "Technology", title: "ServiceNow", description: { en: "Provides a cloud-based platform to help companies manage digital workflows for enterprise operations.", az: "Şirkətlərə müəssisə əməliyyatları üçün rəqəmsal iş axınlarını idarə etməyə kömək edən bulud əsaslı platforma təmin edir.", tr: "Şirketlerin kurumsal operasyonlar için dijital iş akışlarını yönetmelerine yardımcı olan bulut tabanlı bir platform sunar." }, url: "https://www.servicenow.com" },
      { category: "Technology", title: "Splunk", description: { en: "Develops software for searching, monitoring, and analyzing machine-generated big data.", az: "Maşın tərəfindən yaradılmış böyük məlumatları axtarmaq, izləmək və təhlil etmək üçün proqram təminatı inkişaf etdirir.", tr: "Makine tarafından oluşturulan büyük verileri aramak, izlemek ve analiz etmek için yazılım geliştirir." }, url: "https://www.splunk.com" },
      { category: "Technology", title: "DocuSign", description: { en: "Provides e-signature technology and Digital Transaction Management services.", az: "Elektron imza texnologiyası və Rəqəmsal Əməliyyat İdarəetmə xidmətləri təmin edir.", tr: "E-imza teknolojisi ve Dijital İşlem Yönetimi hizmetleri sunar." }, url: "https://www.docusign.com" },
      { category: "Technology", title: "Zoom Video Communications", description: { en: "A remote conferencing services company.", az: "Uzaqdan konfrans xidmətləri şirkəti.", tr: "Uzaktan konferans hizmetleri şirketi." }, url: "https://zoom.us" },
      { category: "Technology", title: "Okta", description: { en: "An identity and access management company.", az: "Identifikasiya və giriş idarəetmə şirkəti.", tr: "Kimlik ve erişim yönetimi şirketi." }, url: "https://www.okta.com" },
      { category: "Technology", title: "Atlassian", description: { en: "Enterprise software company that develops products for software developers, project managers, and content management.", az: "Proqram təminatı tərtibatçıları, layihə menecerləri və məzmun idarəetməsi üçün məhsullar hazırlayan müəssisə proqram şirkəti.", tr: "Yazılım geliştiricileri, proje yöneticileri ve içerik yönetimi için ürünler geliştiren kurumsal yazılım şirketi." }, url: "https://www.atlassian.com" },
      { category: "Technology", title: "Twilio", description: { en: "Provides programmable communication tools for making and receiving phone calls, sending and receiving text messages, and performing other communication functions.", az: "Telefon zəngləri etmək və qəbul etmək, mətn mesajları göndərmək və qəbul etmək və digər ünsiyyət funksiyalarını yerinə yetirmək üçün proqramlaşdırıla bilən rabitə alətləri təmin edir.", tr: "Telefon aramaları yapmak ve almak, kısa mesaj göndermek ve almak ve diğer iletişim işlevlerini gerçekleştirmek için programlanabilir iletişim araçları sunar." }, url: "https://www.twilio.com" },
      { category: "Technology", title: "Square", description: { en: "Provides payment processing solutions for small and medium businesses.", az: "Kiçik və orta müəssisələr üçün ödəniş emal həlləri təmin edir.", tr: "Küçük ve orta ölçekli işletmeler için ödeme işleme çözümleri sunar." }, url: "https://squareup.com" },
      { category: "Technology", title: "Stripe", description: { en: "An online payment processing platform for internet businesses.", az: "İnternet biznesləri üçün onlayn ödəniş emal platforması.", tr: "İnternet işletmeleri için çevrimiçi bir ödeme işleme platformu." }, url: "https://stripe.com" },
      { category: "Technology", title: "Red Hat", description: { en: "Provides open-source software products to the enterprise community.", az: "Müəssisə icmasına açıq mənbəli proqram məhsulları təqdim edir.", tr: "Kurumsal topluluğa açık kaynak yazılım ürünleri sunar." }, url: "https://www.redhat.com" },
      { category: "Technology", title: "Cloudflare", description: { en: "Provides web infrastructure and website security services.", az: "Veb infrastruktur və veb sayt təhlükəsizliyi xidmətləri təmin edir.", tr: "Web altyapısı ve web sitesi güvenlik hizmetleri sunar." }, url: "https://www.cloudflare.com" },
      { category: "Technology", title: "Unity Technologies", description: { en: "Develops a real-time 3D development platform for games, architecture, automotive, film, and more.", az: "Oyunlar, memarlıq, avtomobil, film və daha çox sahələr üçün real vaxt 3D inkişaf platforması inkişaf etdirir.", tr: "Oyunlar, mimari, otomotiv, film ve daha fazlası için gerçek zamanlı bir 3B geliştirme platformu geliştirir." }, url: "https://unity.com" },
      { category: "Technology", title: "Epic Games", description: { en: "An American video game and software developer and publisher, best known for Fortnite and Unreal Engine.", az: "Fortnite və Unreal Engine ilə tanınan Amerika videooyun və proqram təminatı inkişaf etdiricisi və nəşrçisi.", tr: "Fortnite ve Unreal Engine ile tanınan, Amerikalı bir video oyunu ve yazılım geliştiricisi ve yayıncısı." }, url: "https://www.epicgames.com" },
      { category: "Technology", title: "Roblox", description: { en: "An online game platform and game creation system.", az: "Onlayn oyun platforması və oyun yaratma sistemi.", tr: "Çevrimiçi bir oyun platformu ve oyun oluşturma sistemi." }, url: "https://www.roblox.com" },
      { category: "Technology", title: "Valve Corporation", description: { en: "An American video game developer, publisher, and digital distribution company.", az: "Amerika videooyun inkişaf etdiricisi, nəşrçisi və rəqəmsal paylama şirkəti.", tr: "Amerikalı bir video oyunu geliştiricisi, yayıncısı ve dijital dağıtım şirketi." }, url: "https://www.valvesoftware.com" },
      { category: "Technology", title: "Electronic Arts (EA)", description: { en: "A leading global interactive entertainment software company.", az: "Qlobal interaktiv əyləncə proqram təminatı şirkətinin lideri.", tr: "Lider bir küresel interaktif eğlence yazılım şirketi." }, url: "https://www.ea.com" },
      { category: "Technology", title: "Ubisoft", description: { en: "A French video game company, best known for Assassin's Creed and Far Cry.", az: "Assassin's Creed və Far Cry ilə tanınan Fransız videooyun şirkəti.", tr: "Assassin's Creed ve Far Cry ile tanınan bir Fransız video oyunu şirketi." }, url: "https://www.ubisoft.com" },
      { category: "Technology", title: "Nintendo", description: { en: "A Japanese multinational consumer electronics and video game company.", az: "Yaponiya transmilli istehlakçı elektronikası və videooyun şirkəti.", tr: "Japon çok uluslu bir tüketici elektroniği ve video oyunu şirketi." }, url: "https://www.nintendo.com" },
      { category: "Technology", title: "Sony", description: { en: "A Japanese multinational conglomerate corporation, known for PlayStation.", az: "PlayStation ilə tanınan Yapon transmilli konqlomerat korporasiyası.", tr: "PlayStation ile tanınan Japon çok uluslu bir holding şirketi." }, url: "https://www.sony.com" },
      { category: "Technology", title: "Samsung", description: { en: "A South Korean multinational manufacturing conglomerate, known for electronics.", az: "Elektronika ilə tanınan Cənubi Koreya transmilli istehsalat konqlomeratı.", tr: "Elektronik ürünleriyle tanınan Güney Koreli çok uluslu bir üretim holdingi." }, url: "https://www.samsung.com" },
      { category: "Technology", title: "Huawei", description: { en: "A Chinese multinational technology corporation, providing telecommunications equipment and consumer electronics.", az: "Telekommunikasiya avadanlıqları və istehlakçı elektronikası təmin edən Çin transmilli texnologiya korporasiyası.", tr: "Telekomünikasyon ekipmanları ve tüketici elektroniği sağlayan Çinli çok uluslu bir teknoloji şirketi." }, url: "https://www.huawei.com" },
      { category: "Technology", title: "Xiaomi", description: { en: "A Chinese electronics company that produces smartphones, mobile apps, laptops, and more.", az: "Smartfonlar, mobil tətbiqlər, noutbuklar və s. istehsal edən Çin elektronika şirkəti.", tr: "Akıllı telefonlar, mobil uygulamalar, dizüstü bilgisayarlar ve daha fazlasını üreten Çinli bir elektronik şirketi." }, url: "https://www.mi.com" },
      { category: "Technology", title: "Lenovo", description: { en: "A Chinese multinational technology company specializing in designing, manufacturing, and marketing consumer electronics, personal computers, software, business solutions, and related services.", az: "İstehlakçı elektronikası, fərdi kompüterlər, proqram təminatı, biznes həlləri və əlaqədar xidmətlərin dizaynı, istehsalı və marketinqi üzrə ixtisaslaşan Çin transmilli texnologiya şirkəti.", tr: "Tüketici elektroniği, kişisel bilgisayarlar, yazılım, iş çözümleri ve ilgili hizmetlerin tasarımı, üretimi ve pazarlamasında uzmanlaşmış Çinli çok uluslu bir teknoloji şirketi." }, url: "https://www.lenovo.com" },
      { category: "Technology", title: "HP Inc.", description: { en: "An American multinational information technology company, best known for its printers and personal computers.", az: "Printerləri və fərdi kompüterləri ilə tanınan Amerika transmilli informasiya texnologiyaları şirkəti.", tr: "Yazıcıları ve kişisel bilgisayarlarıyla tanınan Amerikalı çok uluslu bir bilgi teknolojisi şirketi." }, url: "https://www.hp.com" },
      { category: "Technology", title: "Dell Technologies", description: { en: "An American multinational information technology company, develops, sells, repairs, and supports computers and related products and services.", az: "Kompüterlər və əlaqədar məhsul və xidmətləri inkişaf etdirən, satan, təmir edən və dəstəkləyən Amerika transmilli informasiya texnologiyaları şirkəti.", tr: "Bilgisayarlar ve ilgili ürünleri ve hizmetleri geliştiren, satan, onaran ve destekleyen Amerikalı çok uluslu bir bilgi teknolojisi şirketi." }, url: "https://www.dell.com" },
      { category: "Technology", title: "ASUS", description: { en: "A Taiwanese multinational computer hardware and electronics company.", az: "Tayvan transmilli kompüter avadanlığı və elektronika şirkəti.", tr: "Tayvanlı çok uluslu bir bilgisayar donanımı ve elektronik şirketidir." }, url: "https://www.asus.com" },
      { category: "Technology", title: "Acer", description: { en: "A Taiwanese multinational hardware and electronics corporation specializing in advanced electronics technology.", az: "Qabaqcıl elektronika texnologiyasında ixtisaslaşan Tayvan transmilli avadanlıq və elektronika korporasiyası.", tr: "Gelişmiş elektronik teknolojisinde uzmanlaşmış Tayvanlı çok uluslu bir donanım ve elektronik şirketidir." }, url: "https://www.acer.com" },
      { category: "Technology", title: "Logitech", description: { en: "A Swiss-American multinational manufacturer of computer peripherals and software.", az: "Kompüter periferik cihazları və proqram təminatı istehsalçısı olan İsveçrə-Amerika transmilli şirkəti.", tr: "Bilgisayar çevre birimleri ve yazılımı üreten İsviçre-Amerikan çok uluslu bir üretici." }, url: "https://www.logitech.com" },
      { category: "Technology", title: "Canon", description: { en: "A Japanese multinational corporation specializing in optical, imaging, and industrial products.", az: "Optik, görüntü və sənaye məhsullarında ixtisaslaşan Yapon transmilli korporasiyası.", tr: "Optik, görüntüleme ve endüstriyel ürünlerde uzmanlaşmış Japon çok uluslu bir şirket." }, url: "https://global.canon" },
      { category: "Technology", title: "Nikon", description: { en: "A Japanese multinational corporation specializing in optics and imaging products.", az: "Optika və görüntü məhsullarında ixtisaslaşan Yapon transmilli korporasiyası.", tr: "Optik ve görüntüleme ürünlerinde uzmanlaşmış Japon çok uluslu bir şirket." }, url: "https://www.nikon.com" },
      { category: "Technology", title: "GoPro", description: { en: "An American company that manufactures action cameras and develops its own mobile apps and video-editing software.", az: "Fəaliyyət kameraları istehsal edən və öz mobil tətbiqlərini və video-redaktə proqram təminatını inkişaf etdirən Amerika şirkəti.", tr: "Aksiyon kameraları üreten ve kendi mobil uygulamalarını ve video düzenleme yazılımını geliştiren Amerikalı bir şirket." }, url: "https://gopro.com" },
      { category: "Technology", title: "DJI", description: { en: "A Chinese technology company that manufactures commercial unmanned aerial vehicles (drones) for aerial photography and videography.", az: "Hava fotoqrafiyası və videoqrafiyası üçün kommersiya pilotsuz uçan aparatlar (dronlar) istehsal edən Çin texnologiya şirkəti.", tr: "Hava fotoğrafçılığı ve videografi için ticari insansız hava araçları (drone) üreten Çinli bir teknoloji şirketi." }, url: "https://www.dji.com" },
      { category: "Technology", title: "Sony PlayStation", description: { en: "A brand of gaming consoles and accessories from Sony.", az: "Sony-dən oyun konsolları və aksesuarlar markası.", tr: "Sony'den oyun konsolları ve aksesuarları markası." }, url: "https://www.playstation.com" },
      { category: "Technology", title: "Xbox (Microsoft)", description: { en: "A video gaming brand created and owned by Microsoft.", az: "Microsoft tərəfindən yaradılmış və sahib olduğu video oyun markası.", tr: "Microsoft tarafından oluşturulan ve sahip olunan bir video oyun markası." }, url: "https://www.xbox.com" },
      { category: "Technology", title: "Google Cloud", description: { en: "A suite of cloud computing services that runs on the same infrastructure that Google uses internally.", az: "Google-ın daxili olaraq istifadə etdiyi infrastrukturda işləyən bulud hesablama xidmətləri dəsti.", tr: "Google'ın dahili olarak kullandığı aynı altyapı üzerinde çalışan bir bulut bilişim hizmetleri paketi." }, url: "https://cloud.google.com" },
      { category: "Technology", title: "AWS (Amazon Web Services)", description: { en: "The world's most comprehensive and broadly adopted cloud platform.", az: "Dünyanın ən əhatəli və geniş yayılmış bulud platforması.", tr: "Dünyanın en kapsamlı ve en yaygın kullanılan bulut platformu." }, url: "https://aws.amazon.com" },
      { category: "Technology", title: "Azure (Microsoft)", description: { en: "A cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.", az: "Tətbiqləri və xidmətləri qurmaq, sınaqdan keçirmək, yerləşdirmək və idarə etmək üçün Microsoft tərəfindən yaradılmış bulud hesablama xidməti.", tr: "Uygulamaları ve hizmetleri oluşturmak, test etmek, dağıtmak ve yönetmek için Microsoft tarafından oluşturulan bir bulut bilişim hizmeti." }, url: "https://azure.microsoft.com" },
      { category: "Technology", title: "DigitalOcean Community", description: { en: "Tutorials and resources for developers and system administrators.", az: "Proqramçılar və sistem administratorları üçün dərsliklər və resurslar.", tr: "Geliştiriciler ve sistem yöneticileri için öğreticiler ve kaynaklar." }, url: "https://www.digitalocean.com/community" },
      { category: "Technology", title: "Linode", description: { en: "Provides cloud hosting solutions for developers.", az: "Proqramçılar üçün bulud hostinq həlləri təmin edir.", tr: "Geliştiriciler için bulut barındırma çözümleri sunar." }, url: "https://www.linode.com" },
      { category: "Technology", title: "Vultr", description: { en: "High-performance cloud servers, bare metal, and storage.", az: "Yüksək performanslı bulud serverləri, bare metal və saxlama.", tr: "Yüksek performanslı bulut sunucuları, çıplak metal ve depolama." }, url: "https://www.vultr.com" },
      { category: "Technology", title: "Google Developers", description: { en: "Resources for developers using Google products and platforms.", az: "Google məhsul və platformalarından istifadə edən proqramçılar üçün resurslar.", tr: "Google ürünlerini ve platformlarını kullanan geliştiriciler için kaynaklar." }, url: "https://developers.google.com" },
      { category: "Technology", title: "Apple Developer", description: { en: "Resources for developers building apps for Apple platforms.", az: "Apple platformları üçün tətbiqlər quran proqramçılar üçün resurslar.", tr: "Apple platformları için uygulama geliştiren geliştiriciler için kaynaklar." }, url: "https://developer.apple.com" },
      { category: "Technology", title: "Android Developers", description: { en: "The official site for Android app developers.", az: "Android tətbiq proqramçıları üçün rəsmi sayt.", tr: "Android uygulama geliştiricileri için resmi site." }, url: "https://developer.android.com" },
      { category: "Technology", title: "Mozilla Developer Network (MDN)", description: { en: "A learning platform for web technologies and software that powers the web.", az: "Veb texnologiyaları və vebə güc verən proqram təminatı üçün öyrənmə platforması.", tr: "Web teknolojileri ve web'i güçlendiren yazılım için bir öğrenme platformu." }, url: "https://developer.mozilla.org/en-US/" },
      { category: "Technology", title: "W3C", description: { en: "The World Wide Web Consortium (W3C) develops open standards to ensure the long-term growth of the Web.", az: "Ümumdünya Veb Konsorsiumu (W3C) Vebin uzunmüddətli inkişafını təmin etmək üçün açıq standartlar hazırlayır.", tr: "World Wide Web Consortium (W3C), Web'in uzun vadeli büyümesini sağlamak için açık standartlar geliştirir." }, url: "https://www.w3.org/" },
      { category: "Technology", title: "ReactJS", description: { en: "A JavaScript library for building user interfaces.", az: "İstifadəçi interfeysləri qurmaq üçün JavaScript kitabxanası.", tr: "Kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi." }, url: "https://react.dev/" },
      { category: "Technology", title: "Angular", description: { en: "A platform and framework for building single-page client applications using HTML and TypeScript.", az: "HTML və TypeScript istifadə edərək tək səhifəli müştəri tətbiqləri qurmaq üçün bir platforma və çərçivə.", tr: "HTML ve TypeScript kullanarak tek sayfalık istemci uygulamaları oluşturmak için bir platform ve çerçeve." }, url: "https://angular.io/" },
      { category: "Technology", title: "Vue.js", description: { en: "The progressive JavaScript framework for building user interfaces.", az: "İstifadəçi interfeysləri qurmaq üçün proqressiv JavaScript çərçivəsi.", tr: "Kullanıcı arayüzleri oluşturmak için ilerleyici JavaScript çerçevesi." }, url: "https://vuejs.org/" },
      { category: "Technology", title: "Node.js", description: { en: "A JavaScript runtime built on Chrome's V8 JavaScript engine.", az: "Chrome-un V8 JavaScript mühərriki üzərində qurulmuş JavaScript runtime.", tr: "Chrome'un V8 JavaScript motoru üzerine kurulu bir JavaScript çalışma zamanı." }, url: "https://nodejs.org/en" },
      { category: "Technology", title: "Python.org", description: { en: "The official home of the Python programming language.", az: "Python proqramlaşdırma dilinin rəsmi evi.", tr: "Python programlama dilinin resmi ana sayfası." }, url: "https://www.python.org/" },
      { category: "Technology", title: "Java (Oracle)", description: { en: "The official site for Java Platform, Standard Edition (Java SE) documentation and downloads.", az: "Java Platform, Standard Edition (Java SE) sənədləri və yükləmələri üçün rəsmi sayt.", tr: "Java Platform, Standard Edition (Java SE) belgeleri ve indirmeleri için resmi site." }, url: "https://www.oracle.com/java/" },
      { category: "Technology", title: "C# (Microsoft)", description: { en: "A modern, object-oriented programming language, part of the .NET platform.", az: "Müasir, obyekt yönümlü proqramlaşdırma dili, .NET platformasının bir hissəsi.", tr: ".NET platformunun bir parçası olan modern, nesne yönelimli bir programlama dili." }, url: "https://dotnet.microsoft.com/languages/csharp" },
      { category: "Technology", title: "Go (Golang)", description: { en: "An open source programming language that makes it easy to build simple, reliable, and efficient software.", az: "Sadə, etibarlı və səmərəli proqram təminatı qurmağı asanlaşdıran açıq mənbəli proqramlaşdırma dili.", tr: "Basit, güvenilir ve verimli yazılımlar oluşturmayı kolaylaştıran açık kaynaklı bir programlama dili." }, url: "https://go.dev/" },
      { category: "Technology", title: "Rust Programming Language", description: { en: "A language that empowers everyone to build reliable and efficient software.", az: "Hər kəsə etibarlı və səmərəli proqram təminatı qurmaq imkanı verən bir dil.", tr: "Herkese güvenilir ve verimli yazılım oluşturma gücü veren bir dil." }, url: "https://www.rust-lang.org/" },
      { category: "Technology", title: "Kubernetes", description: { en: "An open-source system for automating deployment, scaling, and management of containerized applications.", az: "Konteynerləşdirilmiş tətbiqlərin yerləşdirilməsi, miqyaslandırılması və idarə edilməsini avtomatlaşdırmaq üçün açıq mənbəli sistem.", tr: "Kapsayıcılı uygulamaların dağıtımını, ölçeklendirmesini ve yönetimini otomatikleştirmek için açık kaynaklı bir sistem." }, url: "https://kubernetes.io/" },
      { category: "Technology", title: "Docker", description: { en: "A platform for developers and sysadmins to develop, deploy, and run applications with containers.", az: "Proqram tərtibatçıları və sistem administratorları üçün konteynerlərlə tətbiqləri inkişaf etdirmək, yerləşdirmək və işə salmaq üçün bir platforma.", tr: "Geliştiriciler ve sistem yöneticileri için uygulamaları kapsayıcılarla geliştirmek, dağıtmak ve çalıştırmak için bir platform." }, url: "https://www.docker.com/" },
      { category: "Design", title: "Sketch", description: { en: "A vector graphics editor for macOS, primarily used for user interface and user experience design.", az: "macOS üçün vektor qrafika redaktoru, əsasən istifadəçi interfeysi və istifadəçi təcrübəsi dizaynı üçün istifadə olunur.", tr: "macOS için bir vektör grafik düzenleyici, öncelikli olarak kullanıcı arayüzü ve kullanıcı deneyimi tasarımı için kullanılır." }, url: "https://www.sketch.com/" },
      { category: "Design", title: "InVision", description: { en: "A digital product design platform for creating interactive prototypes.", az: "İnteraktiv prototiplər yaratmaq üçün rəqəmsal məhsul dizayn platforması.", tr: "Etkileşimli prototipler oluşturmak için dijital bir ürün tasarım platformu." }, url: "https://www.invisionapp.com/" },
      { category: "Design", title: "Miro", description: { en: "An online collaborative whiteboard platform.", az: "Onlayn birgə işləmə lövhəsi platforması.", tr: "Çevrimiçi bir işbirliği beyaz tahta platformu." }, url: "https://miro.com/" },
      { category: "Design", title: "Framer", description: { en: "A design tool that helps teams build interactive prototypes.", az: "Komandalara interaktiv prototiplər qurmağa kömək edən bir dizayn aləti.", tr: "Ekiplerin etkileşimli prototipler oluşturmasına yardımcı olan bir tasarım aracı." }, url: "https://www.framer.com/" },
      { category: "Design", title: "Webflow University", description: { en: "Free lessons, courses, and resources for learning Webflow and web design.", az: "Webflow və veb dizayn öyrənmək üçün pulsuz dərslər, kurslar və resurslar.", tr: "Webflow ve web tasarım öğrenmek için ücretsiz dersler, kurslar ve kaynaklar." }, url: "https://university.webflow.com/" },
      { category: "Design", title: "Unsplash", description: { en: "A website dedicated to sharing stock photography under the Unsplash license.", az: "Unsplash lisenziyası altında stok fotoqrafiyasını paylaşmağa həsr olunmuş bir veb sayt.", tr: "Unsplash lisansı altında stok fotoğrafçılığını paylaşmaya adanmış bir web sitesi." }, url: "https://unsplash.com/" },
      { category: "Design", title: "Pexels", description: { en: "Free stock photos, royalty free images & videos shared by creators.", az: "Yaradıcılar tərəfindən paylaşılan pulsuz stok fotoşəkilləri, müəllif hüquqları olmayan şəkillər və videolar.", tr: "Yaratıcılar tarafından paylaşılan ücretsiz stok fotoğraflar, telifsiz görseller ve videolar." }, url: "https://www.pexels.com/" },
      { category: "Design", title: "Pixabay", description: { en: "Vibrant community of creatives, sharing royalty-free images, videos and music.", az: "Kral haqqı olmayan şəkillər, videolar və musiqi paylaşan yaradıcıların canlı icması.", tr: "Telif hakkı olmayan görseller, videolar ve müzikler paylaşan canlı bir yaratıcı topluluğu." }, url: "https://pixabay.com/" },
      { category: "Design", title: "The Noun Project", description: { en: "Millions of icons and photos for everything.", az: "Hər şey üçün milyonlarla ikon və fotoşəkil.", tr: "Her şey için milyonlarca simge ve fotoğraf." }, url: "https://thenounproject.com/" },
      { category: "Design", title: "Font Awesome", description: { en: "The internet's most popular icon toolkit.", az: "İnternetin ən populyar ikon dəsti.", tr: "İnternet'in en popüler simge araç seti." }, url: "https://fontawesome.com/" },
      { category: "Design", title: "Flaticon", description: { en: "Free vector icons and stickers for your projects.", az: "Layihələriniz üçün pulsuz vektor ikonlar və stikerlər.", tr: "Projeleriniz için ücretsiz vektör simgeler ve çıkartmalar." }, url: "https://www.flaticon.com/" },
      { category: "Education", title: "Coursera", description: { en: "Online courses and degrees from leading universities and companies.", az: "Aparıcı universitetlər və şirkətlərdən onlayn kurslar və dərəcələr.", tr: "Lider üniversitelerden ve şirketlerden çevrimiçi kurslar ve dereceler." }, url: "https://www.coursera.org/" },
      { category: "Education", title: "edX", description: { en: "Online courses from the world's best universities and institutions.", az: "Dünyanın ən yaxşı universitet və qurumlarından onlayn kurslar.", tr: "Dünyanın en iyi üniversitelerinden ve kurumlarından çevrimiçi kurslar." }, url: "https://www.edx.org/" },
      { category: "Education", title: "Khan Academy", description: { en: "A non-profit organization providing free, world-class education for anyone, anywhere.", az: "Hər kəs üçün, hər yerdə pulsuz, dünya səviyyəli təhsil təmin edən qeyri-kommersiya təşkilatı.", tr: "Herkes için, her yerde ücretsiz, dünya standartlarında eğitim sağlayan kar amacı gütmeyen bir kuruluş." }, url: "https://www.khanacademy.org/" },
      { category: "Education", title: "Udemy", description: { en: "An online learning and teaching marketplace with over 200000 courses.", az: "200000-dən çox kursu olan onlayn öyrənmə və tədris bazarı.", tr: "200.000'den fazla kursu olan çevrimiçi bir öğrenme ve öğretme pazarı." }, url: "https://www.udemy.com/" },
      { category: "Education", title: "Coursera for Business", description: { en: "Develop your workforce with Coursera's industry-leading learning platform.", az: "Coursera-nın sənaye lideri öyrənmə platforması ilə işçi qüvvənizi inkişaf etdirin.", tr: "Coursera'nın sektör lideri öğrenme platformuyla iş gücünüzü geliştirin." }, url: "https://www.coursera.org/business" },
      { category: "Education", title: "Codecademy", description: { en: "Learn to code interactively, for free.", az: "İnteraktiv şəkildə, pulsuz kod yazmağı öyrənin.", tr: "Etkileşimli olarak, ücretsiz kod öğrenin." }, url: "https://www.codecademy.com/" },
      { category: "Education", title: "freeCodeCamp", description: { en: "Learn to code for free. Build projects. Earn certifications.", az: "Pulsuz kod yazmağı öyrənin. Layihələr qurun. Sertifikatlar qazanın.", tr: "Ücretsiz kod öğrenin. Projeler oluşturun. Sertifikalar kazanın." }, url: "https://www.freecodecamp.org/" },
      { category: "Education", title: "Harvard University", description: { en: "Official website of Harvard University.", az: "Harvard Universitetinin rəsmi saytı.", tr: "Harvard Üniversitesi'nin resmi web sitesi." }, url: "https://www.harvard.edu/" },
      { category: "Education", title: "Stanford University", description: { en: "Official website of Stanford University.", az: "Stanford Universitetinin rəsmi saytı.", tr: "Stanford Üniversitesi'nin resmi web sitesi." }, url: "https://www.stanford.edu/" },
      { category: "Education", title: "MIT (Massachusetts Institute of Technology)", description: { en: "Official website of MIT.", az: "MIT-nin rəsmi saytı.", tr: "MIT'nin resmi web sitesi." }, url: "https://www.mit.edu/" },
      { category: "Education", title: "Oxford University", description: { en: "Official website of Oxford University.", az: "Oksford Universitetinin rəsmi saytı.", tr: "Oxford Üniversitesi'nin resmi web sitesi." }, url: "https://www.ox.ac.uk/" },
      { category: "Education", title: "Cambridge University", description: { en: "Official website of Cambridge University.", az: "Cambridge Universitetinin rəsmi saytı.", tr: "Cambridge Üniversitesi'nin resmi web sitesi." }, url: "https://www.cam.ac.uk/" },
      { category: "News", title: "BBC News", description: { en: "Breaking news, analysis, and debate from the BBC.", az: "BBC-dən son xəbərlər, təhlillər və müzakirələr.", tr: "BBC'den son dakika haberleri, analizler ve tartışmalar." }, url: "https://www.bbc.com/news" },
      { category: "News", title: "CNN", description: { en: "Breaking news, U.S. and world news.", az: "Son xəbərlər, ABŞ və dünya xəbərləri.", tr: "Son dakika haberleri, ABD ve dünya haberleri." }, url: "https://edition.cnn.com/" },
      { category: "News", title: "The New York Times", description: { en: "Breaking news, multimedia, reviews & opinions.", az: "Son xəbərlər, multimedia, icmallar və rəylər.", tr: "Son dakika haberleri, multimedya, incelemeler ve görüşler." }, url: "https://www.nytimes.com/" },
      { category: "News", title: "The Guardian", description: { en: "Latest news, sport, business, comment and reviews from the Guardian.", az: "Guardian-dan son xəbərlər, idman, biznes, şərhlər və icmallar.", tr: "Guardian'dan son haberler, spor, iş, yorum ve incelemeler." }, url: "https://www.theguardian.com/international" },
      { category: "News", title: "Reuters", description: { en: "Global news, breaking news and world news.", az: "Qlobal xəbərlər, son xəbərlər və dünya xəbərləri.", tr: "Küresel haberler, son dakika haberleri ve dünya haberleri." }, url: "https://www.reuters.com/" },
      { category: "News", title: "Anadolu Agency (AA)", description: { en: "Official news agency of Turkey.", az: "Türkiyənin rəsmi xəbər agentliyi.", tr: "Türkiye'nin resmi haber ajansı." }, url: "https://www.aa.com.tr/en" },
      { category: "News", title: "Trend News Agency (AZ)", description: { en: "Azerbaijani news agency.", az: "Azərbaycan xəbər agentliyi.", tr: "Azerbaycan haber ajansı." }, url: "https://en.trend.az/" },
      { category: "News", title: "Bloomberg", description: { en: "Global business and financial news.", az: "Qlobal biznes və maliyyə xəbərləri.", tr: "Küresel iş ve finans haberleri." }, url: "https://www.bloomberg.com/" },
      { category: "News", title: "Forbes", description: { en: "Business, technology, finance, and lifestyle news.", az: "Biznes, texnologiya, maliyyə və həyat tərzi xəbərləri.", tr: "İş, teknoloji, finans ve yaşam tarzı haberleri." }, url: "https://www.forbes.com/" },
      { category: "News", title: "The Wall Street Journal", description: { en: "Breaking news, business, and financial news.", az: "Son xəbərlər, biznes və maliyyə xəbərləri.", tr: "Son dakika haberleri, iş ve finans haberleri." }, url: "https://www.wsj.com/" },
      { category: "Entertainment", title: "IMDb", description: { en: "The Internet Movie Database – movies, TV, and celebrities.", az: "İnternet Film Verilənlər Bazasında – filmlər, TV və məşhurlar.", tr: "İnternet Film Veritabanı – filmler, TV ve ünlüler." }, url: "https://www.imdb.com/" },
      { category: "Entertainment", title: "Rotten Tomatoes", description: { en: "Movie and TV show reviews, trailers, and release dates.", az: "Film və TV şou icmalları, treylerlər və buraxılış tarixləri.", tr: "Film ve TV şovu incelemeleri, fragmanlar ve yayın tarihleri." }, url: "https://www.rottentomatoes.com/" },
      { category: "Entertainment", title: "Vulture", description: { en: "Culture news, criticism, and commentary from New York Magazine.", az: "New York Magazine-dən mədəniyyət xəbərləri, tənqidlər və şərhlər.", tr: "New York Magazine'den kültür haberleri, eleştiriler ve yorumlar." }, url: "https://www.vulture.com/" },
      { category: "Entertainment", title: "Pitchfork", description: { en: "The most trusted voice in music.", az: "Musiqidə ən etibarlı səs.", tr: "Müzikte en güvenilir ses." }, url: "https://pitchfork.com/" },
      { category: "Entertainment", title: "Bandcamp", description: { en: "Discover amazing new music and directly support the artists who make it.", az: "Möhtəşəm yeni musiqi kəşf edin və onu yaradan sənətçiləri birbaşa dəstəkləyin.", tr: "Harika yeni müzikler keşfedin ve onları yapan sanatçıları doğrudan destekleyin." }, url: "https://bandcamp.com/" },
      { category: "Entertainment", title: "Twitch", description: { en: "Live streaming video platform for gamers.", az: "Oyunçular üçün canlı yayımlanan video platforması.", tr: "Oyuncular için canlı yayın video platformu." }, url: "https://www.twitch.tv/" },
      { category: "Entertainment", title: "Steam", description: { en: "The ultimate online gaming platform by Valve.", az: "Valve tərəfindən ən mükəmməl onlayn oyun platforması.", tr: "Valve tarafından nihai çevrimiçi oyun platformu." }, url: "https://store.steampowered.com/" },
      { category: "Social Media", title: "Snapchat", description: { en: "A multimedia messaging app.", az: "Multimedia mesajlaşma tətbiqi.", tr: "Bir multimedya mesajlaşma uygulaması." }, url: "https://www.snapchat.com/" },
      { category: "Social Media", title: "TikTok", description: { en: "A short-form video hosting service.", az: "Qısa formalı video hostinq xidməti.", tr: "Kısa biçimli bir video barındırma hizmeti." }, url: "https://www.tiktok.com/en/" },
      { category: "Social Media", title: "Tumblr", description: { en: "A microblogging and social networking website.", az: "Mikrobloqqinq və sosial şəbəkə saytı.", tr: "Bir mikro bloglama ve sosyal ağ web sitesi." }, url: "https://www.tumblr.com/" },
      { category: "Social Media", title: "VK (Vkontakte)", description: { en: "The largest European online social media and social networking service.", az: "Avropanın ən böyük onlayn sosial media və sosial şəbəkə xidməti.", tr: "Avrupa'nın en büyük çevrimiçi sosyal medya ve sosyal ağ hizmeti." }, url: "https://vk.com/" },
      { category: "Social Media", title: "Mastodon", description: { en: "A free and open-source distributed social network.", az: "Pulsuz və açıq mənbəli paylanmış sosial şəbəkə.", tr: "Ücretsiz ve açık kaynaklı dağıtılmış bir sosyal ağ." }, url: "https://joinmastodon.org/" },
      { category: "Health", title: "WebMD", description: { en: "Provides valuable health information, tools for managing your health, and support to those who seek information.", az: "Qiymətli sağlamlıq məlumatları, sağlamlığınızı idarə etmək üçün alətlər və məlumat axtaranlara dəstək təmin edir.", tr: "Değerli sağlık bilgileri, sağlığınızı yönetmek için araçlar ve bilgi arayanlara destek sağlar." }, url: "https://www.webmd.com/" },
      { category: "Health", title: "Mayo Clinic", description: { en: "Provides expert care and health information.", az: "Mütəxəssis qayğısı və sağlamlıq məlumatları təqdim edir.", tr: "Uzman bakımı ve sağlık bilgileri sunar." }, url: "https://www.mayoclinic.org/" },
      { category: "Health", title: "Healthline", description: { en: "Provides health and wellness information.", az: "Sağlamlıq və rifah məlumatları təqdim edir.", tr: "Sağlık ve zindelik bilgileri sunar." }, url: "https://www.healthline.com/" },
      { category: "Finance", title: "Investopedia", description: { en: "Financial education website with articles, tutorials, and a dictionary of financial terms.", az: "Maliyyə şərtləri ilə bağlı məqalələr, dərsliklər və lüğət olan maliyyə təhsili veb-saytı.", tr: "Makaleler, öğreticiler ve finansal terimler sözlüğü içeren finansal eğitim web sitesi." }, url: "https://www.investopedia.com/" },
      { category: "Finance", title: "Yahoo Finance", description: { en: "Financial news, data, and commentary.", az: "Maliyyə xəbərləri, məlumatları və şərhləri.", tr: "Finans haberleri, veriler ve yorumlar." }, url: "https://finance.yahoo.com/" },
      { category: "Finance", title: "Fidelity", description: { en: "Investment and wealth management services.", az: "İnvestisiya və sərvət idarəetmə xidmətləri.", tr: "Yatırım ve servet yönetimi hizmetleri." }, url: "https://www.fidelity.com/" },
      { category: "Finance", title: "Charles Schwab", description: { en: "Investment services, wealth management, and banking.", az: "İnvestisiya xidmətləri, sərvət idarəetməsi və bankçılıq.", tr: "Yatırım hizmetleri, servet yönetimi ve bankacılık." }, url: "https://www.schwab.com/" },
      { category: "Travel", title: "TripAdvisor", description: { en: "Travel reviews, comparisons, and booking for hotels, flights, and restaurants.", az: "Otellər, uçuşlar və restoranlar üçün səyahət icmalları, müqayisələr və sifarişlər.", tr: "Oteller, uçuşlar ve restoranlar için seyahat incelemeleri, karşılaştırmalar ve rezervasyon." }, url: "https://www.tripadvisor.com/" },
      { category: "Travel", title: "Booking.com", description: { en: "Accommodation booking service.", az: "Yerləşmə sifariş xidməti.", tr: "Konaklama rezervasyon hizmeti." }, url: "https://www.booking.com/" },
      { category: "Travel", title: "Airbnb", description: { en: "Online marketplace for lodging, primarily homestays, or tourism experiences.", az: "Əsasən evdə qalma və ya turizm təcrübələri üçün onlayn yaşayış bazarı.", tr: "Başta evde konaklama veya turizm deneyimleri için çevrimiçi pazar yeri." }, url: "https://www.airbnb.com/" },
      { category: "Travel", title: "Expedia", description: { en: "Online travel agency for flights, hotels, car rentals, and vacation packages.", az: "Uçuşlar, otellər, avtomobil icarəsi və tətil paketləri üçün onlayn səyahət agentliyi.", tr: "Uçuşlar, oteller, araç kiralama ve tatil paketleri için çevrimiçi seyahat acentesi." }, url: "https://www.expedia.com/" },
      { category: "Food", title: "Allrecipes", description: { en: "Recipe sharing community.", az: "Resept paylaşım cəmiyyəti.", tr: "Tarif paylaşım topluluğu." }, url: "https://www.allrecipes.com/" },
      { category: "Food", title: "Food Network", description: { en: "Recipes, shows, and cooking tips.", az: "Reseptlər, şoular və yemək bişirmə məsləhətləri.", tr: "Tarifler, şovlar ve yemek pişirme ipuçları." }, url: "https://www.foodnetwork.com/" },
      { category: "Food", title: "Serious Eats", description: { en: "Trusted recipes, culinary techniques, and food science.", az: "Etibarlı reseptlər, kulinariya texnikaları və qida elmi.", tr: "Güvenilir tarifler, mutfak teknikleri ve gıda bilimi." }, url: "https://www.seriouseats.com/" },
      { category: "Science", title: "National Geographic", description: { en: "Exploration and science content.", az: "Kəşfiyyat və elm məzmunu.", tr: "Keşif ve bilim içeriği." }, url: "https://www.nationalgeographic.com/" },
      { category: "Science", title: "NASA", description: { en: "Official website of the National Aeronautics and Space Administration.", az: "Milli Aeronavtika və Kosmos İdarəsinin rəsmi saytı.", tr: "Ulusal Havacılık ve Uzay Dairesi'nin resmi web sitesi." }, url: "https://www.nasa.gov/" },
      { category: "Science", title: "Science.org (AAAS)", description: { en: "Breaking science news and articles from AAAS.", az: "AAAS-dan son elm xəbərləri və məqalələr.", tr: "AAAS'tan son bilim haberleri ve makaleler." }, url: "https://www.science.org/" },
      { category: "Science", title: "Scientific American", description: { en: "Science news, articles, and scientific discussion.", az: "Elm xəbərləri, məqalələr və elmi müzakirələr.", tr: "Bilim haberleri, makaleler ve bilimsel tartışma." }, url: "https://www.scientificamerican.com/" },
      { category: "Sports", title: "ESPN", description: { en: "Sports news, scores, highlights, and commentary.", az: "İdman xəbərləri, nəticələr, əsas məqamlar və şərhlər.", tr: "Spor haberleri, skorlar, önemli anlar ve yorumlar." }, url: "https://www.espn.com/" },
      { category: "Sports", title: "FIFA", description: { en: "Official website of the International Federation of Association Football.", az: "Beynəlxalq Futbol Federasiyası Assosiasiyasının rəsmi saytı.", tr: "Uluslararası Futbol Federasyonları Birliği'nin resmi web sitesi." }, url: "https://www.fifa.com/" },
      { category: "Sports", title: "NBA.com", description: { en: "Official site of the National Basketball Association.", az: "Milli Basketbol Assosiasiyasının rəsmi saytı.", tr: "Ulusal Basketbol Birliği'nin resmi sitesi." }, url: "https://www.nba.com/" },
      { category: "Sports", title: "NFL.com", description: { en: "Official site of the National Football League.", az: "Milli Futbol Liqasının rəsmi saytı.", tr: "Ulusal Futbol Ligi'nin resmi sitesi." }, url: "https://www.nfl.com/" },
      { category: "Photography", title: "500px", description: { en: "A community for photographers to share and discover photos.", az: "Fotoqrafların fotoşəkilləri paylaşmaq və kəşf etmək üçün bir icma.", tr: "Fotoğrafçıların fotoğraf paylaştığı ve keşfettiği bir topluluk." }, url: "https://500px.com/" },
      { category: "Photography", title: "Flickr", description: { en: "Image and video hosting service.", az: "Şəkil və video hostinq xidməti.", tr: "Resim ve video barındırma hizmeti." }, url: "https://www.flickr.com/" },
      { category: "Music", title: "Apple Music", description: { en: "A music streaming service developed by Apple Inc.", az: "Apple Inc. tərəfindən hazırlanmış musiqi axın xidməti.", tr: "Apple Inc. tarafından geliştirilen bir müzik akışı hizmeti." }, url: "https://www.apple.com/apple-music/" },
      { category: "Music", title: "Deezer", description: { en: "A music streaming service available in over 180 countries.", az: "180-dən çox ölkədə mövcud olan musiqi axın xidməti.", tr: "180'den fazla ülkede kullanılabilen bir müzik akışı hizmeti." }, url: "https://www.deezer.com/" },
      { category: "Music", title: "SoundCloud", description: { en: "An online audio distribution platform and music sharing website.", az: "Onlayn audio paylama platforması və musiqi paylaşım veb-saytı.", tr: "Çevrimiçi bir ses dağıtım platformu ve müzik paylaşım web sitesi." }, url: "https://soundcloud.com/" },
      { category: "Programming", title: "Stack Exchange", description: { en: "A network of Q&A sites on a variety of topics, including programming.", az: "Proqramlaşdırma daxil olmaqla, müxtəlif mövzularda Sual-Cavab saytları şəbəkəsi.", tr: "Programlama da dahil olmak üzere çeşitli konularda Soru-Cevap sitelerinden oluşan bir ağ." }, url: "https://stackexchange.com/" },
      { category: "Programming", title: "GeeksforGeeks", description: { en: "A computer science portal for geeks.", az: "Geeklər üçün kompüter elmləri portalı.", tr: "Geekler için bir bilgisayar bilimi portalı." }, url: "https://www.geeksforgeeks.org/" },
      { category: "Programming", title: "LeetCode", description: { en: "Platform to improve your coding skills and prepare for technical interviews.", az: "Kodlaşdırma bacarıqlarınızı inkişaf etdirmək və texniki müsahibələrə hazırlaşmaq üçün platforma.", tr: "Kodlama becerilerinizi geliştirmek ve teknik mülakatlara hazırlanmak için bir platform." }, url: "https://leetcode.com/" },
      { category: "Programming", title: "HackerRank", description: { en: "A platform for competitive programming challenges and technical interviews.", az: "Rəqabətli proqramlaşdırma problemləri və texniki müsahibələr üçün platforma.", tr: "Rekabetçi programlama zorlukları ve teknik mülakatlar için bir platform." }, url: "https://www.hackerrank.com/" },
      { category: "Fashion", title: "Vogue", description: { en: "International fashion and lifestyle magazine.", az: "Beynəlxalq moda və həyat tərzi jurnalı.", tr: "Uluslararası moda ve yaşam tarzı dergisi." }, url: "https://www.vogue.com/" },
      { category: "Fashion", title: "H&M", description: { en: "Global fashion retailer.", az: "Qlobal moda pərakəndə satışçısı.", tr: "Küresel moda perakendecisi." }, url: "https://www2.hm.com/en_us/index.html" },
      { category: "Fashion", title: "Zara", description: { en: "Spanish fast fashion retailer.", az: "İspan sürətli moda pərakəndə satışçısı.", tr: "İspanyol hızlı moda perakendecisi." }, url: "https://www.zara.com/us/" },
      { category: "Home & Garden", title: "Houzz", description: { en: "Home design and renovation ideas.", az: "Ev dizaynı və təmir ideyaları.", tr: "Ev tasarımı ve tadilat fikirleri." }, url: "https://www.houzz.com/" },
      { category: "Home & Garden", title: "HGTV", description: { en: "Home & Garden Television - shows and ideas for home improvement.", az: "Ev və Bağ Televiziyası - ev təkmilləşdirmə üçün şoular və ideyalar.", tr: "Ev ve Bahçe Televizyonu - ev geliştirme için şovlar ve fikirler." }, url: "https://www.hgtv.com/" },
      { category: "Automotive", title: "Car and Driver", description: { en: "Car reviews, news, and comparison tests.", az: "Avtomobil icmalları, xəbərlər və müqayisə testləri.", tr: "Araba incelemeleri, haberler ve karşılaştırma testleri." }, url: "https://www.caranddriver.com/" },
      { category: "Automotive", title: "MotorTrend", description: { en: "Automotive news, reviews, and videos.", az: "Avtomobil xəbərləri, icmallar və videolar.", tr: "Otomotiv haberleri, incelemeler ve videolar." }, url: "https://www.motortrend.com/" },
      { category: "Art", title: "DeviantArt", description: { en: "The world's largest online social community for artists and art enthusiasts.", az: "Rəssamlar və sənət həvəskarları üçün dünyanın ən böyük onlayn sosial icması.", tr: "Sanatçılar ve sanat meraklıları için dünyanın en büyük çevrimiçi sosyal topluluğu." }, url: "https://www.deviantart.com/" },
      { category: "Art", title: "ArtStation", description: { en: "Showcase platform for artists in the games, film, media & entertainment industries.", az: "Oyun, film, media və əyləncə sənayelərindəki rəssamlar üçün vitrin platforması.", tr: "Oyun, film, medya ve eğlence sektörlerindeki sanatçılar için vitrin platformu." }, url: "https://www.artstation.com/" },
      { category: "History", title: "History.com", description: { en: "Articles, videos, and facts on historical events.", az: "Tarixi hadisələrə dair məqalələr, videolar və faktlar.", tr: "Tarihi olaylar hakkında makaleler, videolar ve gerçekler." }, url: "https://www.history.com/" },
      { category: "History", title: "Ancient History Encyclopedia", description: { en: "A non-profit educational website providing free articles on history and archaeology.", az: "Tarix və arxeologiya mövzusunda pulsuz məqalələr təqdim edən qeyri-kommersiya təhsil veb-saytı.", tr: "Tarih ve arkeoloji hakkında ücretsiz makaleler sunan kar amacı gütmeyen bir eğitim web sitesi." }, url: "https://www.worldhistory.org/" },
      { category: "Literature", title: "Goodreads", description: { en: "A social cataloging website for books.", az: "Kitablar üçün sosial kataloq saytı.", tr: "Kitaplar için sosyal bir kataloglama web sitesi." }, url: "https://www.goodreads.com/" },
      { category: "Literature", title: "Project Gutenberg", description: { en: "A library of over 60,000 free eBooks.", az: "60.000-dən çox pulsuz elektron kitabdan ibarət kitabxana.", tr: "60.000'den fazla ücretsiz e-kitap içeren bir kütüphane." }, url: "https://www.gutenberg.org/" },
      { category: "Philosophy", title: "Stanford Encyclopedia of Philosophy", description: { en: "An online encyclopedia of philosophy.", az: "Fəlsəfə üzrə onlayn ensiklopediya.", tr: "Çevrimiçi bir felsefe ansiklopedisi." }, url: "https://plato.stanford.edu/" },
      { category: "Environment", title: "National Geographic Environment", description: { en: "News and information on environmental issues.", az: "Ətraf mühit məsələləri ilə bağlı xəbərlər və məlumatlar.", tr: "Çevre sorunları hakkında haberler ve bilgiler." }, url: "https://www.nationalgeographic.com/environment/" },
      { category: "Environment", title: "Environmental Protection Agency (EPA)", description: { en: "Official website of the U.S. Environmental Protection Agency.", az: "ABŞ Ətraf Mühitin Mühafizəsi Agentliyinin rəsmi saytı.", tr: "ABD Çevre Koruma Ajansı'nın resmi web sitesi." }, url: "https://www.epa.gov/" },
      { category: "Business", title: "Harvard Business Review", description: { en: "Insights and best practices for leading organizations.", az: "Aparıcı təşkilatlar üçün anlayışlar və ən yaxşı təcrübələr.", tr: "Önde gelen kuruluşlar için içgörüler ve en iyi uygulamalar." }, url: "https://hbr.org/" },
      { category: "Business", title: "Inc.com", description: { en: "Resources for entrepreneurs and business owners.", az: "Sahibkarlar və biznes sahibləri üçün resurslar.", tr: "Girişimciler ve işletme sahipleri için kaynaklar." }, url: "https://www.inc.com/" },
      { category: "Personal Development", title: "Lifehack", description: { en: "Tips and tricks for productivity, organization, and self-improvement.", az: "Məhsuldarlıq, təşkilatçılıq və özünü təkmilləşdirmə üçün məsləhətlər.", tr: "Verimlilik, organizasyon ve kişisel gelişim için ipuçları." }, url: "https://www.lifehack.org/" },
      { category: "Personal Development", title: "Mindbodygreen", description: { en: "Wellness website covering health, food, movement, and lifestyle.", az: "Sağlamlıq, qida, hərəkət və həyat tərzini əhatə edən sağlamlıq veb-saytı.", tr: "Sağlık, yiyecek, hareket ve yaşam tarzını kapsayan sağlık web sitesi." }, url: "https://www.mindbodygreen.com/" },
      { category: "Programming", title: "Codeforces", description: { en: "A platform for competitive programming contests.", az: "Rəqabətli proqramlaşdırma yarışmaları üçün platforma.", tr: "Rekabetçi programlama yarışmaları için bir platform." }, url: "https://codeforces.com/" },
      { category: "Programming", title: "Topcoder", description: { en: "Global community of designers, developers, and data scientists.", az: "Dizaynerlər, tərtibatçılar və məlumat alimlərinin qlobal icması.", tr: "Tasarımcılar, geliştiriciler ve veri bilimcilerinden oluşan küresel topluluk." }, url: "https://www.topcoder.com/" },
      { category: "Technology", title: "Ars Technica", description: { en: "News and reviews on technology, science, and more.", az: "Texnologiya, elm və digər sahələrdə xəbərlər və icmallar.", tr: "Teknoloji, bilim ve daha fazlası hakkında haberler ve incelemeler." }, url: "https://arstechnica.com/" },
      { category: "Technology", title: "TechCrunch", description: { en: "News and analysis on startups and technology.", az: "Startuplar və texnologiya ilə bağlı xəbərlər və təhlillər.", tr: "Startup'lar ve teknoloji hakkında haberler ve analizler." }, url: "https://techcrunch.com/" },
      { category: "Technology", title: "The Verge", description: { en: "Technology news, reviews, and videos.", az: "Texnologiya xəbərləri, icmallar və videolar.", tr: "Teknoloji haberleri, incelemeler ve videolar." }, url: "https://www.theverge.com/" },
      { category: "News", title: "Al Jazeera", description: { en: "International news and current affairs.", az: "Beynəlxalq xəbərlər və cari hadisələr.", tr: "Uluslararası haberler ve güncel olaylar." }, url: "https://www.aljazeera.com/" },
      { category: "News", title: "BBC Sport", description: { en: "Sports news, results, and live coverage.", az: "İdman xəbərləri, nəticələr və canlı yayımlar.", tr: "Spor haberleri, sonuçlar ve canlı yayın." }, url: "https://www.bbc.com/sport" },
      { category: "Sports", title: "Sky Sports", description: { en: "Sports news, transfers, and live scores.", az: "İdman xəbərləri, transferlər və canlı nəticələr.", tr: "Spor haberleri, transferler ve canlı skorlar." }, url: "https://www.skysports.com/" },
      { category: "Sports", title: "Bleacher Report", description: { en: "Sports news, rumors, and highlights.", az: "İdman xəbərləri, şayiələr və əsas məqamlar.", tr: "Spor haberleri, dedikodular ve önemli anlar." }, url: "https://bleacherreport.com/" },
      { category: "Health", title: "NHS (UK National Health Service)", description: { en: "Official health information for the UK.", az: "Böyük Britaniya üçün rəsmi sağlamlıq məlumatları.", tr: "Birleşik Krallık için resmi sağlık bilgileri." }, url: "https://www.nhs.uk/" },
      { category: "Health", title: "CDC (Centers for Disease Control and Prevention)", description: { en: "Official U.S. public health agency.", az: "ABŞ-ın rəsmi ictimai sağlamlıq agentliyi.", tr: "ABD'nin resmi halk sağlığı kurumu." }, url: "https://www.cdc.gov/" },
      { category: "Finance", title: "Investopedia Academy", description: { en: "Online courses for finance and investing.", az: "Maliyyə və investisiya üçün onlayn kurslar.", tr: "Finans ve yatırım için çevrimiçi kurslar." }, url: "https://academy.investopedia.com/" },
      { category: "Finance", title: "Morningstar", description: { en: "Investment research and investment management.", az: "İnvestisiya tədqiqatı və investisiya idarəetməsi.", tr: "Yatırım araştırması ve yatırım yönetimi." }, url: "https://www.morningstar.com/en-us" },
      { category: "Travel", title: "Lonely Planet", description: { en: "Travel guides and advice.", az: "Səyahət bələdçiləri və məsləhətləri.", tr: "Seyahat rehberleri ve tavsiyeler." }, url: "https://www.lonelyplanet.com/" },
      { category: "Travel", title: "Kayak", description: { en: "Travel search engine for flights, hotels, cars.", az: "Uçuşlar, otellər, avtomobillər üçün səyahət axtarış sistemi.", tr: "Uçuşlar, oteller, arabalar için seyahat arama motoru." }, url: "https://www.kayak.com/" },
      { category: "Food", title: "Epicurious", description: { en: "Recipes, cooking tips, and food videos.", az: "Reseptlər, bişirmə məsləhətləri və yemək videoları.", tr: "Tarifler, yemek pişirme ipuçları ve yemek videoları." }, url: "https://www.epicurious.com/" },
      { category: "Food", title: "Bon Appétit", description: { en: "Recipes, cooking, and restaurant news.", az: "Reseptlər, yemək bişirmə və restoran xəbərləri.", tr: "Tarifler, yemek pişirme ve restoran haberleri." }, url: "https://www.bonappetit.com/" },
      { category: "Science", title: "Space.com", description: { en: "News and information on space exploration and astronomy.", az: "Kosmosun kəşfiyyatı və astronomiya ilə bağlı xəbərlər və məlumatlar.", tr: "Uzay keşfi ve astronomi hakkında haberler ve bilgiler." }, url: "https://www.space.com/" },
      { category: "Science", title: "Live Science", description: { en: "Science news, articles, and amazing discoveries.", az: "Elm xəbərləri, məqalələr və heyrətamiz kəşflər.", tr: "Bilim haberleri, makaleler ve şaşırtıcı keşifler." }, url: "https://www.livescience.com/" },
      { category: "Art", title: "MoMA (Museum of Modern Art)", description: { en: "Official website of the Museum of Modern Art.", az: "Müasir İncəsənət Muzeyinin rəsmi saytı.", tr: "Modern Sanat Müzesi'nin resmi web sitesi." }, url: "https://www.moma.org/" },
      { category: "Art", title: "Google Arts & Culture", description: { en: "Explore collections from around the world.", az: "Dünyanın hər yerindən kolleksiyaları kəşf edin.", tr: "Dünyanın dört bir yanından koleksiyonları keşfedin." }, url: "https://artsandculture.google.com/" },
      { category: "History", title: "Smithsonian Magazine", description: { en: "Explore history, science, nature, and art.", az: "Tarix, elm, təbiət və incəsənəti kəşf edin.", tr: "Tarihi, bilimi, doğayı ve sanatı keşfedin." }, url: "https://www.smithsonianmag.com/" },
      { category: "History", title: "National Archives", description: { en: "Official repository of U.S. government records.", az: "ABŞ hökumət qeydlərinin rəsmi anbarı.", tr: "ABD hükümet kayıtlarının resmi deposu." }, url: "https://www.archives.gov/" },
      { category: "Literature", title: "Poetry Foundation", description: { en: "Read poems, explore poetry, and find poets.", az: "Şeirləri oxuyun, poeziyanı kəşf edin və şairlər tapın.", tr: "Şiirleri okuyun, şiiri keşfedin ve şairleri bulun." }, url: "https://www.poetryfoundation.org/" },
      { category: "Literature", title: "LitHub", description: { en: "Daily literary news and essays.", az: "Gündəlik ədəbi xəbərlər və esselər.", tr: "Günlük edebi haberler ve denemeler." }, url: "https://lithub.com/" },
      { category: "Philosophy", title: "iep.utm.edu (Internet Encyclopedia of Philosophy)", description: { en: "Peer-reviewed academic resource on philosophy.", az: "Fəlsəfə üzrə rəyçilər tərəfindən nəzərdən keçirilmiş akademik resurs.", tr: "Felsefe üzerine hakemli akademik kaynak." }, url: "https://iep.utm.edu/" },
      { category: "Environment", title: "World Wildlife Fund (WWF)", description: { en: "Global conservation organization.", az: "Qlobal mühafizə təşkilatı.", tr: "Küresel koruma kuruluşu." }, url: "https://www.worldwildlife.org/" },
      { category: "Environment", title: "Greenpeace", description: { en: "Environmental activism and campaigns.", az: "Ətraf mühit fəallığı və kampaniyaları.", tr: "Çevre aktivizmi ve kampanyaları." }, url: "https://www.greenpeace.org/international/" },
      { category: "Business", title: "Business Insider", description: { en: "Financial and business news.", az: "Maliyyə və biznes xəbərləri.", tr: "Finans ve iş haberleri." }, url: "https://www.businessinsider.com/" },
      { category: "Business", title: "Entrepreneur", description: { en: "Advice, insight, and inspiration for entrepreneurs.", az: "Sahibkarlar üçün məsləhət, anlayış və ilham.", tr: "Girişimciler için tavsiye, içgörü ve ilham." }, url: "https://www.entrepreneur.com/" },
      { category: "Personal Development", title: "TED", description: { en: "Ideas worth spreading - talks on a wide range of subjects.", az: "Yayımlanmağa dəyər ideyalar - geniş mövzulara dair danışıqlar.", tr: "Yaymaya değer fikirler - geniş bir konu yelpazesinde konuşmalar." }, url: "https://www.ted.com/" },
      { category: "Personal Development", title: "Psychology Today", description: { en: "A vast collection of articles on psychology and mental health.", az: "Psixologiya və ruhi sağlamlıq haqqında geniş məqalələr toplusu.", tr: "Psikoloji ve ruh sağlığı üzerine geniş bir makale koleksiyonu." }, url: "https://www.psychologytoday.com/us" },
      { category: "Social Media", title: "Weibo", description: { en: "A Chinese microblogging website.", az: "Çin mikrobloqqinq veb-saytı.", tr: "Çinli bir mikro bloglama web sitesi." }, url: "https://www.weibo.com/" },
      { category: "Social Media", title: "Douyin (TikTok China)", description: { en: "The Chinese version of TikTok, very popular in China.", az: "TikTok-un Çin versiyası, Çində çox populyardır.", tr: "TikTok'un Çin versiyonu, Çin'de çok popüler." }, url: "https://www.douyin.com/" },
      { category: "E-commerce", title: "Etsy", description: { en: "Global marketplace for unique and creative goods.", az: "Unikal və yaradıcı mallar üçün qlobal bazar.", tr: "Eşsiz ve yaratıcı ürünler için küresel pazar yeri." }, url: "https://www.etsy.com/" },
      { category: "E-commerce", title: "Alibaba", description: { en: "Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology.", az: "E-ticarət, pərakəndə satış, İnternet və texnologiya sahəsində ixtisaslaşan Çin transmilli texnologiya şirkəti.", tr: "E-ticaret, perakende, İnternet ve teknoloji alanında uzmanlaşmış Çinli çok uluslu bir teknoloji şirketi." }, url: "https://www.alibaba.com/" },
      { category: "E-commerce", title: "eBay", description: { en: "Online auction and shopping website.", az: "Onlayn hərrac və alış-veriş veb-saytı.", tr: "Çevrimiçi açık artırma ve alışveriş web sitesi." }, url: "https://www.ebay.com/" },
      { category: "E-commerce", title: "Walmart", description: { en: "American multinational retail corporation.", az: "Amerika transmilli pərakəndə satış korporasiyası.", tr: "Amerikalı çok uluslu perakende şirketi." }, url: "https://www.walmart.com/" },
      { category: "E-commerce", title: "Target", description: { en: "American retail corporation.", az: "Amerika pərakəndə satış korporasiyası.", tr: "Amerikalı perakende şirketi." }, url: "https://www.target.com/" },
      { category: "Tools", title: "Google Docs", description: { en: "Free online word processor, part of Google Workspace.", az: "Pulsuz onlayn mətn prosessoru, Google Workspace-in bir hissəsi.", tr: "Google Workspace'in bir parçası olan ücretsiz çevrimiçi kelime işlemci." }, url: "https://docs.google.com/" },
      { category: "Tools", title: "Google Sheets", description: { en: "Free online spreadsheet program, part of Google Workspace.", az: "Pulsuz onlayn cədvəl proqramı, Google Workspace-in bir hissəsi.", tr: "Google Workspace'in bir parçası olan ücretsiz çevrimiçi e-tablo programı." }, url: "https://docs.google.com/spreadsheets/" },
      { category: "Tools", title: "Google Slides", description: { en: "Free online presentation program, part of Google Workspace.", az: "Pulsuz onlayn təqdimat proqramı, Google Workspace-in bir hissəsi.", tr: "Google Workspace'in bir parçası olan ücretsiz çevrimiçi sunum programı." }, url: "https://docs.google.com/presentation/" },
      { category: "Tools", title: "Grammarly", description: { en: "Online writing assistant that checks grammar, spelling, and plagiarism.", az: "Qrammatika, orfoqrafiya və plagiata nəzarət edən onlayn yazı köməkçisi.", tr: "Dilbilgisi, yazım ve intihal kontrolü yapan çevrimiçi yazı asistanı." }, url: "https://www.grammarly.com/" },
      { category: "Tools", title: "LastPass", description: { en: "A freemium password manager that stores encrypted passwords online.", az: "Şifrələnmiş şifrələri onlayn saxlayan freemium şifrə meneceri.", tr: "Şifrelenmiş şifreleri çevrimiçi olarak saklayan ücretsiz bir şifre yöneticisi." }, url: "https://www.lastpass.com/" },
      { category: "Tools", title: "Evernote", description: { en: "An app designed for note taking, organizing, task management, and archiving.", az: "Qeyd alma, təşkilatçılıq, tapşırıq idarəetməsi və arxivləşdirmə üçün nəzərdə tutulmuş proqram.", tr: "Not alma, organize etme, görev yönetimi ve arşivleme için tasarlanmış bir uygulama." }, url: "https://evernote.com/" },
      { category: "Tools", title: "Todoist", description: { en: "A task manager and to-do list app.", az: "Tapşırıq meneceri və görüləcək işlər siyahısı tətbiqi.", tr: "Bir görev yöneticisi ve yapılacaklar listesi uygulaması." }, url: "https://todoist.com/" },
      { category: "Artificial Intelligence", title: "DeepMind", description: { en: "An AI company acquired by Google, focused on solving intelligence.", az: "Google tərəfindən satın alınan, zəka problemlərinin həllinə yönəlmiş bir AI şirkəti.", tr: "Google tarafından satın alınan, zekayı çözmeye odaklanmış bir yapay zeka şirketi." }, url: "https://deepmind.google/?" },
      { category: "Artificial Intelligence", title: "OpenAI", description: { en: "An AI research and deployment company behind ChatGPT and DALL-E.", az: "ChatGPT və DALL-E-nin arxasında duran AI tədqiqat və yerləşdirmə şirkəti.", tr: "ChatGPT ve DALL-E'nin arkasındaki bir yapay zeka araştırma ve dağıtım şirketi." }, url: "https://openai.com/" },
      { category: "Artificial Intelligence", title: "IBM Watson", description: { en: "An AI platform for business from IBM.", az: "IBM-dən biznes üçün bir AI platforması.", tr: "IBM'den işletmeler için bir yapay zeka platformu." }, url: "https://www.ibm.com/watson" },
      { category: "Artificial Intelligence", title: "Google AI", description: { en: "Google's division for artificial intelligence research.", az: "Google-ın süni intellekt tədqiqatları üzrə şöbəsi.", tr: "Google'ın yapay zeka araştırmaları bölümü." }, url: "https://ai.google/" },
      { category: "Artificial Intelligence", title: "Midjourney", description: { en: "An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.", az: "Yeni düşüncə vasitələrini araşdıran və insan növünün təxəyyül güclərini genişləndirən müstəqil tədqiqat laboratoriyası.", tr: "Yeni düşünce ortamlarını keşfeden ve insan türünün hayal gücünü genişleten bağımsız bir araştırma laboratuvarı." }, url: "https://www.midjourney.com/" },
      { category: "Artificial Intelligence", title: "RunwayML", description: { en: "A platform for next-generation content creation powered by AI.", az: "AI tərəfindən idarə olunan yeni nəsil məzmun yaratmaq üçün platforma.", tr: "Yapay zeka destekli yeni nesil içerik oluşturma platformu." }, url: "https://runwayml.com/" },
      { category: "Gaming", title: "IGN", description: { en: "Leading source for video game news, reviews, and walkthroughs.", az: "Videooyun xəbərləri, icmalları və keçidləri üçün aparıcı mənbə.", tr: "Video oyunu haberleri, incelemeleri ve oynanış videoları için lider kaynak." }, url: "https://www.ign.com/" },
      { category: "Gaming", title: "GameSpot", description: { en: "Video game news, reviews, and trailers.", az: "Videooyun xəbərləri, icmalları və treylerləri.", tr: "Video oyunu haberleri, incelemeleri ve fragmanları." }, url: "https://www.gamespot.com/" },
      { category: "Gaming", title: "PC Gamer", description: { en: "The world's biggest-selling PC games magazine.", az: "Dünyanın ən çox satılan PC oyunları jurnalı.", tr: "Dünyanın en çok satan PC oyunları dergisi." }, url: "https://www.pcgamer.com/" },
      { category: "Gaming", title: "Kotaku", description: { en: "Video game news, reviews, and commentary.", az: "Videooyun xəbərləri, icmalları və şərhləri.", tr: "Video oyunu haberleri, incelemeleri ve yorumları." }, url: "https://kotaku.com/" },
      { category: "Tools", title: "Asana", description: { en: "Work management platform for teams.", az: "Komandalar üçün iş idarəetmə platforması.", tr: "Ekipler için iş yönetimi platformu." }, url: "https://asana.com/" },
      { category: "Tools", title: "Jira (Atlassian)", description: { en: "Software development tool for agile teams.", az: "Çevik komandalar üçün proqram təminatı inkişaf aləti.", tr: "Çevik ekipler için yazılım geliştirme aracı." }, url: "https://www.atlassian.com/software/jira" },
      { category: "Tools", title: "Slack", description: { en: "A channel-based messaging platform.", az: "Kanal əsaslı mesajlaşma platforması.", tr: "Kanal tabanlı bir mesajlaşma platformu." }, url: "https://slack.com/" },
      { category: "Tools", title: "Microsoft Teams", description: { en: "A collaboration platform integrating workplace chat, video meetings, file storage, and application integration.", az: "İş yeri çat, video görüşlər, fayl saxlama və tətbiq inteqrasiyasını birləşdirən əməkdaşlıq platforması.", tr: "İş yeri sohbeti, video toplantıları, dosya depolama ve uygulama entegrasyonunu entegre eden bir işbirliği platformu." }, url: "https://www.microsoft.com/en-us/microsoft-teams/" },
      { category: "Tools", title: "Google Meet", description: { en: "Secure video meetings for teams and businesses.", az: "Komandalar və bizneslər üçün təhlükəsiz video görüşlər.", tr: "Ekipler ve işletmeler için güvenli video toplantıları." }, url: "https://meet.google.com/" },
      { category: "Tools", title: "Canva Pro", description: { en: "Premium features for Canva's graphic design tool.", az: "Canva-nın qrafik dizayn aləti üçün premium funksiyalar.", tr: "Canva'nın grafik tasarım aracı için premium özellikler." }, url: "https://www.canva.com/pro/" },
      { category: "Design", title: "Adobe Photoshop", description: { en: "The industry standard for digital image manipulation and graphic design.", az: "Rəqəmsal şəkil manipulyasiyası və qrafik dizayn üçün sənaye standartı.", tr: "Dijital görüntü manipülasyonu ve grafik tasarım için endüstri standardı." }, url: "https://www.adobe.com/products/photoshop.html" },
      { category: "Design", title: "Adobe Illustrator", description: { en: "Vector graphics software for creating logos, icons, drawings, typography, and complex illustrations.", az: "Loqolar, ikonlar, rəsmlər, tipoqrafiya və mürəkkəb illüstrasiyalar yaratmaq üçün vektor qrafika proqram təminatı.", tr: "Logolar, simgeler, çizimler, tipografi ve karmaşık illüstrasyonlar oluşturmak için vektör grafik yazılımı." }, url: "https://www.adobe.com/products/illustrator.html" },
      { category: "Design", title: "Adobe XD", description: { en: "Vector-based user experience design tool for web and mobile apps.", az: "Veb və mobil tətbiqlər üçün vektor əsaslı istifadəçi təcrübəsi dizayn aləti.", tr: "Web ve mobil uygulamalar için vektör tabanlı kullanıcı deneyimi tasarım aracı." }, url: "https://www.adobe.com/products/xd.html" },
      { category: "Design", title: "Affinity Designer", description: { en: "Professional creative software for vector graphic design.", az: "Vektor qrafik dizaynı üçün peşəkar yaradıcı proqram təminatı.", tr: "Vektör grafik tasarımı için profesyonel yaratıcı yazılım." }, url: "https://affinity.serif.com/en-us/designer/" },
      { category: "Design", title: "Affinity Photo", description: { en: "Professional photo editing software.", az: "Peşəkar foto redaktə proqram təminatı.", tr: "Profesyonel fotoğraf düzenleme yazılımı." }, url: "https://affinity.serif.com/en-us/photo/" },
      { category: "Education", title: "The Great Courses Plus", description: { en: "Subscription service for online courses across various subjects.", az: "Müxtəlif fənlər üzrə onlayn kurslar üçün abunə xidməti.", tr: "Çeşitli konularda çevrimiçi kurslar için abonelik hizmeti." }, url: "https://www.thegreatcoursesplus.com/" },
      { category: "Education", title: "MasterClass", description: { en: "Online classes taught by experts in various fields.", az: "Müxtəlif sahələrdə mütəxəssislər tərəfindən tədris olunan onlayn dərslər.", tr: "Çeşitli alanlarda uzmanlar tarafından verilen çevrimiçi dersler." }, url: "https://www.masterclass.com/" },
      { category: "Education", title: "Duolingo", description: { en: "Learn a new language for free.", az: "Yeni bir dil öyrənin, pulsuz.", tr: "Yeni bir dil öğrenin, ücretsiz." }, url: "https://www.duolingo.com/" },
      { category: "Education", title: "Rosetta Stone", description: { en: "Language learning software.", az: "Dil öyrənmə proqram təminatı.", tr: "Dil öğrenme yazılımı." }, url: "https://www.rosettastone.com/" },
      { category: "News", title: "The Economist", description: { en: "International news and analysis of current affairs.", az: "Beynəlxalq xəbərlər və cari hadisələrin təhlili.", tr: "Uluslararası haberler ve güncel olayların analizi." }, url: "https://www.economist.com/" },
      { category: "News", title: "Financial Times", description: { en: "Global business news and analysis.", az: "Qlobal biznes xəbərləri və təhlilləri.", tr: "Küresel iş haberleri ve analizleri." }, url: "https://www.ft.com/" },
      { category: "News", title: "NPR (National Public Radio)", description: { en: "Public radio news, audio, and podcasts.", az: "İctimai radio xəbərləri, audio və podkastlar.", tr: "Kamu radyo haberleri, ses ve podcast'ler." }, url: "https://www.npr.org/" },
      { category: "News", title: "The Washington Post", description: { en: "News, analysis, and opinion from Washington D.C.", az: "Vaşinqton D.C.-dən xəbərlər, təhlillər və rəylər.", tr: "Washington D.C.'den haberler, analizler ve görüşler." }, url: "https://www.washingtonpost.com/" },
      { category: "Entertainment", title: "Hulu", description: { en: "Streaming service for TV shows and movies.", az: "TV şouları və filmlər üçün axın xidməti.", tr: "TV şovları ve filmler için akış hizmeti." }, url: "https://www.hulu.com/" },
      { category: "Entertainment", title: "Disney+", description: { en: "Streaming service for Disney, Pixar, Marvel, Star Wars, and National Geographic.", az: "Disney, Pixar, Marvel, Star Wars və National Geographic üçün axın xidməti.", tr: "Disney, Pixar, Marvel, Star Wars ve National Geographic için akış hizmeti." }, url: "https://www.disneyplus.com/" },
      { category: "Entertainment", title: "HBO Max (Max)", description: { en: "Streaming service from Warner Bros. Discovery.", az: "Warner Bros. Discovery-dən axın xidməti.", tr: "Warner Bros. Discovery'den akış hizmeti." }, url: "https://www.max.com/" },
      { category: "Entertainment", title: "Crunchyroll", description: { en: "Anime streaming service.", az: "Anime axın xidməti.", tr: "Anime akış hizmeti." }, url: "https://www.crunchyroll.com/" },
      { category: "Entertainment", title: "Vimeo", description: { en: "Video sharing platform for creators.", az: "Yaradıcılar üçün video paylaşım platforması.", tr: "Yaratıcılar için video paylaşım platformu." }, url: "https://vimeo.com/" },
      { category: "Entertainment", title: "SoundCloud Go+", description: { en: "Premium music streaming service from SoundCloud.", az: "SoundCloud-dan premium musiqi axın xidməti.", tr: "SoundCloud'dan premium müzik akışı hizmeti." }, url: "https://soundcloud.com/go" },
      { category: "Social Media", title: "Reddit (Subreddits)", description: { en: "Communities focused on specific topics.", az: "Müəyyən mövzulara yönəlmiş icmalar.", tr: "Belirli konulara odaklanmış topluluklar." }, url: "https://www.reddit.com/subreddits/" },
      { category: "Social Media", title: "Discord", description: { en: "VoIP, instant messaging and digital distribution platform for communities.", az: "İcmalar üçün VoIP, ani mesajlaşma və rəqəmsal paylama platforması.", tr: "Topluluklar için VoIP, anlık mesajlaşma ve dijital dağıtım platformu." }, url: "https://discord.com/" },
      { category: "Social Media", title: "Telegram", description: { en: "Cloud-based instant messaging and voice over IP service.", az: "Bulud əsaslı ani mesajlaşma və IP üzərindən səs xidməti.", tr: "Bulut tabanlı anlık mesajlaşma ve IP üzerinden ses hizmeti." }, url: "https://telegram.org/" },
      { category: "Social Media", title: "WhatsApp", description: { en: "Free messaging and video calling app.", az: "Pulsuz mesajlaşma və video zəng tətbiqi.", tr: "Ücretsiz mesajlaşma ve görüntülü arama uygulaması." }, url: "https://www.whatsapp.com/" },
      { category: "Health", title: "MyFitnessPal", description: { en: "Calorie counter and diet tracker app.", az: "Kalori sayğacı və pəhriz izləyici tətbiq.", tr: "Kalori sayacı ve diyet takip uygulaması." }, url: "https://www.myfitnesspal.com/" },
      { category: "Health", title: "Headspace", description: { en: "Meditation and mindfulness app.", az: "Meditasiya və şüurluluq tətbiqi.", tr: "Meditasyon ve farkındalık uygulaması." }, url: "https://www.headspace.com/" },
      { category: "Health", title: "Calm", description: { en: "Meditation, sleep, and relaxation app.", az: "Meditasiya, yuxu və rahatlama tətbiqi.", tr: "Meditasyon, uyku ve rahatlama uygulaması." }, url: "https://www.calm.com/" },
      { category: "Finance", title: "Mint", description: { en: "Free personal finance software to manage your money.", az: "Pulunuzu idarə etmək üçün pulsuz fərdi maliyyə proqram təminatı.", tr: "Paranızı yönetmek için ücretsiz kişisel finans yazılımı." }, url: "https://www.intuit.com/mint/" },
      { category: "Finance", title: "Credit Karma", description: { en: "Free credit scores, reports, and monitoring.", az: "Pulsuz kredit skorları, hesabatları və monitorinqi.", tr: "Ücretsiz kredi puanları, raporları ve izleme." }, url: "https://www.creditkarma.com/" },
      { category: "Travel", title: "Google Flights", description: { en: "Flight search engine.", az: "Uçuş axtarış sistemi.", tr: "Uçuş arama motoru." }, url: "https://www.google.com/flights" },
      { category: "Travel", title: "Google Hotels", description: { en: "Hotel search engine.", az: "Otel axtarış sistemi.", tr: "Otel arama motoru." }, url: "https://www.google.com/hotels" },
      { category: "Food", title: "Yelp", description: { en: "Local business reviews, including restaurants.", az: "Restoranlar da daxil olmaqla yerli biznes icmalları.", tr: "Restoranlar dahil yerel işletme incelemeleri." }, url: "https://www.yelp.com/" },
      { category: "Food", title: "OpenTable", description: { en: "Online restaurant reservations.", az: "Onlayn restoran rezervasiyaları.", tr: "Çevrimiçi restoran rezervasyonları." }, url: "https://www.opentable.com/" },
      { category: "Science", title: "National Geographic Kids", description: { en: "Science, nature, and adventure for kids.", az: "Uşaqlar üçün elm, təbiət və macəra.", tr: "Çocuklar için bilim, doğa ve macera." }, url: "https://kids.nationalgeographic.com/" },
      { category: "Science", title: "Discovery.com", description: { en: "Official site of Discovery Channel.", az: "Discovery Channel-in rəsmi saytı.", tr: "Discovery Channel'ın resmi sitesi." }, url: "https://www.discovery.com/" },
      { category: "Sports", title: "UEFA.com", description: { en: "Official website of European football.", az: "Avropa futbolunun rəsmi saytı.", tr: "Avrupa futbolunun resmi web sitesi." }, url: "https://www.uefa.com/" },
      { category: "Sports", title: "F1 (Formula 1)", description: { en: "Official website of Formula 1.", az: "Formula 1-in rəsmi saytı.", tr: "Formula 1'in resmi web sitesi." }, url: "https://www.formula1.com/" },
      { category: "Photography", title: "Adobe Lightroom", description: { en: "Cloud-based service for photo organization, editing, and sharing.", az: "Fotoşəkillərin təşkili, redaktəsi və paylaşılması üçün bulud əsaslı xidmət.", tr: "Fotoğraf organizasyonu, düzenlemesi ve paylaşımı için bulut tabanlı hizmet." }, url: "https://www.adobe.com/products/photoshop-lightroom.html" },
      { category: "Photography", title: "VSCO", description: { en: "Mobile photography and editing app.", az: "Mobil fotoqrafiya və redaktə tətbiqi.", tr: "Mobil fotoğrafçılık ve düzenleme uygulaması." }, url: "https://vsco.co/" },
      { category: "Music", title: "Shazam", description: { en: "Music recognition app.", az: "Musiqi tanıma tətbiqi.", tr: "Müzik tanıma uygulaması." }, url: "https://www.shazam.com/en" },
      { category: "Music", title: "Genius", description: { en: "Lyrics and musical knowledge.", az: "Mahnı sözləri və musiqi bilikləri.", tr: "Şarkı sözleri ve müzik bilgisi." }, url: "https://genius.com/" },
      { category: "Programming", title: "MDN Web Docs (JavaScript)", description: { en: "Comprehensive documentation for JavaScript.", az: "JavaScript üçün hərtərəfli sənədlər.", tr: "JavaScript için kapsamlı dokümantasyon." }, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { category: "Programming", title: "freeCodeCamp (Python)", description: { en: "Learn Python programming for free.", az: "Pulsuz Python proqramlaşdırmasını öyrənin.", tr: "Ücretsiz Python programlama öğrenin." }, url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
      { category: "Fashion", title: "ASOS", description: { en: "Online fashion retailer.", az: "Onlayn moda pərakəndə satışçısı.", tr: "Çevrimiçi moda perakendecisi." }, url: "https://www.asos.com/" },
      { category: "Fashion", title: "Net-a-Porter", description: { en: "Luxury fashion online retailer.", az: "Lüks moda onlayn pərakəndə satışçısı.", tr: "Lüks moda çevrimiçi perakendecisi." }, url: "https://www.net-a-porter.com/en-us/" },
      { category: "Home & Garden", title: "IKEA", description: { en: "Swedish multinational conglomerate that designs and sells ready-to-assemble furniture, kitchen appliances and home accessories.", az: "Hazır yığılmış mebel, mətbəx avadanlığı və ev aksesuarları dizayn edən və satan İsveç transmilli konqlomeratı.", tr: "Hazır montaj mobilyaları, mutfak eşyaları ve ev aksesuarları tasarlayan ve satan İsveçli çok uluslu bir şirket." }, url: "https://www.ikea.com/" },
      { category: "Home & Garden", title: "The Home Depot", description: { en: "American home improvement retail company.", az: "Amerika ev təkmilləşdirmə pərakəndə şirkəti.", tr: "Amerikalı ev geliştirme perakende şirketi." }, url: "https://www.homedepot.com/" },
      { category: "Automotive", title: "Edmunds", description: { en: "Car buying guides and car reviews.", az: "Avtomobil alma bələdçiləri və avtomobil icmalları.", tr: "Araba satın alma rehberleri ve araba incelemeleri." }, url: "https://www.edmunds.com/" },
      { category: "Automotive", title: "Autocar", description: { en: "UK's oldest car magazine, providing news, reviews, and tests.", az: "Böyük Britaniyanın ən qədim avtomobil jurnalı, xəbərlər, icmallar və testlər təqdim edir.", tr: "İngiltere'nin en eski araba dergisi, haberler, incelemeler ve testler sunar." }, url: "https://www.autocar.co.uk/" },
      { category: "Art", title: "Saatchi Art", description: { en: "Online art gallery for original art.", az: "Orijinal sənət əsərləri üçün onlayn sənət qalereyası.", tr: "Orijinal sanat eserleri için çevrimiçi sanat galerisi." }, url: "https://www.saatchart.com/" },
      { category: "Art", title: "Tate", description: { en: "Britain's national collection of British art and international modern and contemporary art.", az: "Böyük Britaniyanın Britaniya sənəti və beynəlxalq müasir sənət kolleksiyası.", tr: "Britanya'nın ulusal Britanya sanatı ve uluslararası modern ve çağdaş sanat koleksiyonu." }, url: "https://www.tate.org.uk/" },
      { category: "History", title: "BBC History", description: { en: "Articles, podcasts, and videos on history.", az: "Tarixə dair məqalələr, podkastlar və videolar.", tr: "Tarih hakkında makaleler, podcast'ler ve videolar." }, url: "https://www.historyextra.com/" },
      { category: "History", title: "National Geographic History", description: { en: "Explore ancient civilizations, historical events, and more.", az: "Qədim sivilizasiyaları, tarixi hadisələri və daha çoxunu kəşf edin.", tr: "Antik uygarlıkları, tarihi olayları ve daha fazlasını keşfedin." }, url: "https://www.nationalgeographic.com/history/" },
      { category: "Literature", title: "Goodreads (Reviews)", description: { en: "Read and write book reviews.", az: "Kitab icmallarını oxuyun və yazın.", tr: "Kitap incelemelerini okuyun ve yazın." }, url: "https://www.goodreads.com/reviews" },
      { category: "Literature", title: "Project Gutenberg (Audio Books)", description: { en: "Free audio books based on public domain works.", az: "İctimai domen əsərlərinə əsaslanan pulsuz audio kitablar.", tr: "Kamu malı eserlere dayalı ücretsiz sesli kitaplar." }, url: "https://www.gutenberg.org/browse/categories/2" },
      { category: "Philosophy", title: "Stanford Encyclopedia of Philosophy (Browse)", description: { en: "Browse philosophical topics.", az: "Fəlsəfi mövzulara baxın.", tr: "Felsefi konulara göz atın." }, url: "https://plato.stanford.edu/contents.html" },
      { category: "Environment", title: "Conservation.org (Conservation International)", description: { en: "Working to save the planet.", az: "Planeti xilas etmək üçün çalışır.", tr: "Gezegeni kurtarmak için çalışıyor." }, url: "https://www.conservation.org/" },
      { category: "Environment", title: "Nature Conservancy", description: { en: "Protecting nature, preserving life.", az: "Təbiəti qorumaq, həyatı qorumaq.", tr: "Doğayı korumak, yaşamı korumak." }, url: "https://www.nature.org/" },
      { category: "Business", title: "Forbes Billionaires", description: { en: "List of the world's billionaires.", az: "Dünyanın milyarderləri siyahısı.", tr: "Dünyanın milyarderler listesi." }, url: "https://www.forbes.com/billionaires/" },
      { category: "Business", title: "Small Business Administration (SBA)", description: { en: "U.S. government agency providing support to entrepreneurs and small businesses.", az: "ABŞ hökumət agentliyi, sahibkarlara və kiçik bizneslərə dəstək verir.", tr: "ABD hükümet ajansı, girişimcilere ve küçük işletmelere destek sağlıyor." }, url: "https://www.sba.gov/" },
      { category: "Personal Development", title: "Success.com", description: { en: "Inspiration, motivation, and self-improvement.", az: "İlham, motivasiya və özünü təkmilləşdirmə.", tr: "İlham, motivasyon ve kişisel gelişim." }, url: "https://www.success.com/" },
      { category: "Personal Development", title: "Greater Good Magazine", description: { en: "Science-based insights for a meaningful life.", az: "Mənəvi bir həyat üçün elmə əsaslanan anlayışlar.", tr: "Anlamlı bir yaşam için bilim tabanlı içgörüler." }, url: "https://greatergood.berkeley.edu/magazine" },
      { category: "Gaming", title: "IGN Guides", description: { en: "Video game walkthroughs and guides.", az: "Videooyun keçidləri və bələdçiləri.", tr: "Video oyunu rehberleri ve kılavuzları." }, url: "https://www.ign.com/wikis/guides" },
      { category: "Gaming", title: "GameFAQs", description: { en: "Video game FAQs, walkthroughs, and guides.", az: "Videooyun FAQ, keçidlər və bələdçilər.", tr: "Video oyunu SSS, oynanış videoları ve rehberleri." }, url: "https://gamefaqs.gamespot.com/" },
      { category: "Tools", title: "Trello (Templates)", description: { en: "Ready-to-use templates for various projects.", az: "Müxtəlif layihələr üçün hazır şablonlar.", tr: "Çeşitli projeler için kullanıma hazır şablonlar." }, url: "https://trello.com/templates" },
      { category: "Tools", title: "Notion (Templates)", description: { en: "Gallery of free templates for Notion workspace.", az: "Notion iş sahəsi üçün pulsuz şablonlar qalereyası.", tr: "Notion çalışma alanı için ücretsiz şablon galerisi." }, url: "https://www.notion.so/templates" },
      { category: "Artificial Intelligence", title: "Hugging Face", description: { en: "The AI community building the future.", az: "Gələcəyi quran AI icması.", tr: "Geleceği inşa eden yapay zeka topluluğu." }, url: "https://huggingface.co/" },
      { category: "Artificial Intelligence", title: "Kaggle", description: { en: "Your Home for Data Science.", az: "Məlumat Elmi üçün Eviniz.", tr: "Veri Bilimi İçin Eviniz." }, url: "https://www.kaggle.com/" },
      { category: "Artificial Intelligence", title: "Gemini", description: { en: "A family of multimodal models.", az: "Multimodal modellər ailəsi.", tr: "Çok modlu modellerden oluşan bir aile." }, url: "https://gemini.google.com/" },
      {
    "category": "Technology",
    "title": "Wikipedia - Google",
    "description": {
        "en": "An American multinational technology company that specializes in Internet-related services and products, which include search engine, cloud computing, and software.",
        "az": "Axtarış sistemi, bulud hesablama və proqram təminatı daxil olmaqla, İnternetlə bağlı xidmətlər və məhsullar üzrə ixtisaslaşan Amerika transmilli texnologiya şirkəti.",
        "tr": "Arama motoru, bulut bilişim ve yazılım dahil olmak üzere İnternet ile ilgili hizmetler ve ürünler konusunda uzmanlaşmış Amerikan çok uluslu teknoloji şirketi."
    },
    "url": "https://en.wikipedia.org/wiki/Google"
},
{
    "category": "History",
    "title": "Wikipedia - World War II",
    "description": {
        "en": "A global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries, forming two opposing military alliances: the Allies and the Axis.",
        "az": "1939-cu ildən 1945-ci ilə qədər davam edən qlobal müharibə. Dünyanın ölkələrinin böyük əksəriyyətini əhatə edirdi, iki əks hərbi ittifaq yaratmışdı: Müttəfiqlər və Ox Dövlətləri.",
        "tr": "1939'dan 1945'e kadar süren küresel bir savaş. Dünyanın ülkelerinin büyük çoğunluğunu içine almış, iki karşıt askeri ittifak oluşturmuştu: Müttefikler ve Mihver Devletleri."
    },
    "url": "https://en.wikipedia.org/wiki/World_War_II"
},
{
    "category": "Science",
    "title": "Wikipedia - Black Hole",
    "description": {
        "en": "A region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.",
        "az": "Fəza-zamanın elə bir bölgəsidir ki, cazibə qüvvəsi o qədər güclüdür ki, heç nə – heç bir zərrəcik, hətta işıq kimi elektromaqnit şüalanması da oradan qaça bilməz.",
        "tr": "Kütleçekiminin o kadar güçlü olduğu bir uzay zaman bölgesi ki, hiçbir şey - hiçbir parçacık, hatta ışık gibi elektromanyetik radyasyon bile - ondan kaçamaz."
    },
    "url": "https://en.wikipedia.org/wiki/Black_hole"
},
{
    "category": "Art",
    "title": "Wikipedia - Impressionism",
    "description": {
        "en": "A 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light.",
        "az": "Nisbətən kiçik, incə, lakin görünən fırça vuruşları, açıq kompozisiya, işığın dəqiq təsvirinə vurğu ilə xarakterizə olunan 19-cu əsr sənət hərəkatı.",
        "tr": "Nispeten küçük, ince, ancak görünür fırça darbeleri, açık kompozisyon, ışığın doğru tasvirine vurgu ile karakterize edilen 19. yüzyıl sanat akımı."
    },
    "url": "https://en.wikipedia.org/wiki/Impressionism"
},
{
    "category": "Literature",
    "title": "Wikipedia - Homer",
    "description": {
        "en": "The legendary author of the Iliad and the Odyssey, two epic poems that are the central works of ancient Greek literature.",
        "az": "Qədim yunan ədəbiyyatının mərkəzi əsərləri olan İlyada və Odisseya dastanlarının əfsanəvi müəllifi.",
        "tr": "Antik Yunan edebiyatının merkezi eserleri olan İlyada ve Odysseia'nın efsanevi yazarı."
    },
    "url": "https://en.wikipedia.org/wiki/Homer"
},
{
    "category": "Geography",
    "title": "Wikipedia - Sahara Desert",
    "description": {
        "en": "The largest hot desert in the world, covering much of North Africa. Its area is over 9,200,000 square kilometres.",
        "az": "Şimali Afrikanın çox hissəsini əhatə edən dünyanın ən böyük isti səhrası. Onun sahəsi 9,200,000 kvadrat kilometrdən çoxdur.",
        "tr": "Kuzey Afrika'nın büyük bir bölümünü kapsayan dünyanın en büyük sıcak çölü. Alanı 9.200.000 kilometrekareden fazladır."
    },
    "url": "https://en.wikipedia.org/wiki/Sahara_Desert"
},
{
    "category": "Sports",
    "title": "Wikipedia - Basketball",
    "description": {
        "en": "A team sport in which two teams, most commonly of five players each, oppose one another on a rectangular court.",
        "az": "Hər biri adətən beş oyunçudan ibarət iki komandanın düzbucaqlı meydançada bir-biri ilə qarşılaşdığı komanda idman növü.",
        "tr": "Her biri genellikle beş oyuncudan oluşan iki takımın dikdörtgen bir sahada birbirine karşı yarıştığı bir takım sporu."
    },
    "url": "https://en.wikipedia.org/wiki/Basketball"
},
{
    "category": "Music",
    "title": "Wikipedia - Jazz",
    "description": {
        "en": "A music genre that originated in the African-American communities of New Orleans, Louisiana, in the late 19th and early 20th centuries.",
        "az": "19-cu əsrin sonu və 20-ci əsrin əvvəllərində Luiziana ştatının Nyu Orlean şəhərinin Afrika-Amerikalı icmalarında yaranan musiqi janrı.",
        "tr": "19. yüzyılın sonları ve 20. yüzyılın başlarında Louisiana, New Orleans'taki Afrika kökenli Amerikalı topluluklarında ortaya çıkan bir müzik türü."
    },
    "url": "https://en.wikipedia.org/wiki/Jazz"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Immanuel Kant",
    "description": {
        "en": "A German philosopher who is considered the central figure of modern philosophy. Known for his work 'Critique of Pure Reason'.",
        "az": "Müasir fəlsəfənin mərkəzi fiquru hesab edilən alman filosofu. 'Xalis Ağlın Tənqidi' əsəri ilə tanınır.",
        "tr": "Modern felsefenin merkezi figürü olarak kabul edilen Alman filozof. 'Saf Aklın Eleştirisi' eseriyle tanınır."
    },
    "url": "https://en.wikipedia.org/wiki/Immanuel_Kant"
},
{
    "category": "Biology",
    "title": "Wikipedia - Photosynthesis",
    "description": {
        "en": "The process used by plants, algae, and some bacteria to convert light energy into chemical energy that can be later released to fuel the organisms' activities.",
        "az": "Bitkilər, yosunlar və bəzi bakteriyalar tərəfindən işıq enerjisini kimyəvi enerjiyə çevirmək üçün istifadə olunan prosesdir ki, bu enerji sonradan orqanizmlərin fəaliyyətini təmin etmək üçün buraxıla bilər.",
        "tr": "Bitkiler, yosunlar ve bazı bakteriler tarafından ışık enerjisini, daha sonra organizmaların faaliyetlerini desteklemek için serbest bırakılabilen kimyasal enerjiye dönüştürmek için kullanılan süreç."
    },
    "url": "https://en.wikipedia.org/wiki/Photosynthesis"
},
{
    "category": "Technology",
    "title": "Wikipedia - Blockchain",
    "description": {
        "en": "A decentralized, distributed, and often public digital ledger that is composed of cryptographically linked blocks.",
        "az": "Kriptoqrafik olaraq əlaqəli bloklardan ibarət olan mərkəzləşdirilməmiş, paylanmış və çox vaxt ictimai rəqəmsal dəftər.",
        "tr": "Kriptografik olarak birbirine bağlanmış bloklardan oluşan, merkezi olmayan, dağıtılmış ve genellikle halka açık bir dijital defter."
    },
    "url": "https://en.wikipedia.org/wiki/Blockchain"
},
{
    "category": "History",
    "title": "Wikipedia - Cleopatra",
    "description": {
        "en": "The last active ruler of the Ptolemaic Kingdom of Egypt. She was a member of the Ptolemaic dynasty, a Greek family of Macedonian origin.",
        "az": "Misirin Ptolomey Krallığının sonuncu aktiv hökmdarı. Makedoniyalı yunan ailəsi olan Ptolomey sülaləsinin üzvü idi.",
        "tr": "Mısır'daki Ptolemaios Krallığı'nın son aktif hükümdarı. Makedonya kökenli bir Yunan ailesi olan Ptolemaios hanedanının bir üyesiydi."
    },
    "url": "https://en.wikipedia.org/wiki/Cleopatra"
},
{
    "category": "Science",
    "title": "Wikipedia - Gravity",
    "description": {
        "en": "A fundamental force of nature that causes masses to be attracted to one another. It is most familiar as the force that gives weight to physical objects.",
        "az": "Kütlələrin bir-birinə cəzb olunmasına səbəb olan təbiətin fundamental qüvvəsi. Ən çox fiziki cisimlərə çəki verən qüvvə kimi tanınır.",
        "tr": "Kütlelerin birbirini çekmesine neden olan temel bir doğa kuvveti. En çok fiziksel nesnelere ağırlık veren kuvvet olarak bilinir."
    },
    "url": "https://en.wikipedia.org/wiki/Gravity"
},
{
    "category": "Art",
    "title": "Wikipedia - Pablo Picasso",
    "description": {
        "en": "A Spanish painter, sculptor, printmaker, ceramicist, and theatre designer who spent most of his adult life in France. Co-founder of the Cubist movement.",
        "az": "Yetkin həyatının çox hissəsini Fransada keçirən ispan rəssam, heykəltaraş, qravüraçı, keramikaçı və teatr dizayneri. Kubizm hərəkatının həmtəsisçisi.",
        "tr": "Yetişkin yaşamının çoğunu Fransa'da geçiren İspanyol ressam, heykeltıraş, baskı resimci, seramikçi ve tiyatro tasarımcısı. Kübizm hareketinin kurucu ortağı."
    },
    "url": "https://en.wikipedia.org/wiki/Pablo_Picasso"
},
{
    "category": "Literature",
    "title": "Wikipedia - Jane Austen",
    "description": {
        "en": "An English novelist whose works of romantic fiction, set among the landed gentry, earned her a place as one of the most widely read writers in English literature.",
        "az": "Romantik bədii əsərləri ingilis ədəbiyyatında ən çox oxunan yazıçılardan biri kimi yer qazanan ingilis romançısı.",
        "tr": "Romantik kurgu eserleri İngiliz edebiyatında en çok okunan yazarlardan biri olarak ona bir yer kazandıran İngiliz romancı."
    },
    "url": "https://en.wikipedia.org/wiki/Jane_Austen"
},
{
    "category": "Geography",
    "title": "Wikipedia - Amazon River",
    "description": {
        "en": "A large river in South America. It is the largest river by volume of water discharged and the longest in the world.",
        "az": "Cənubi Amerikada böyük bir çay. Boşaltdığı suyun həcminə görə ən böyük və dünyanın ən uzun çayıdır.",
        "tr": "Güney Amerika'da büyük bir nehir. Boşalttığı su hacmine göre dünyanın en büyük ve en uzun nehridir."
    },
    "url": "https://en.wikipedia.org/wiki/Amazon_River"
},
{
    "category": "Sports",
    "title": "Wikipedia - Formula 1",
    "description": {
        "en": "The highest class of international racing for open-wheel single-seater formula racing cars. Sanctioned by the Fédération Internationale de l'Automobile (FIA).",
        "az": "Açıq təkərli tək oturacaqlı formula yarış avtomobilləri üçün ən yüksək beynəlxalq yarış sinfi. Fédération Internationale de l'Automobile (FIA) tərəfindən sanksiyalaşdırılmışdır.",
        "tr": "Açık tekerlekli tek kişilik formül yarış arabaları için en yüksek uluslararası yarış sınıfı. Fédération Internationale de l'Automobile (FIA) tarafından onaylanmıştır."
    },
    "url": "https://en.wikipedia.org/wiki/Formula_One"
},
{
    "category": "Music",
    "title": "Wikipedia - Wolfgang Amadeus Mozart",
    "description": {
        "en": "A prolific and influential composer of the Classical period. He composed over 600 works, many of which are acknowledged as pinnacles of symphonic, concertante, operatic, and choral music.",
        "az": "Klassik dövrün məhsuldar və nüfuzlu bəstəkarı. 600-dən çox əsər bəstələmişdir ki, onların bir çoxu simfonik, konsert, opera və xor musiqisinin zirvələri kimi tanınır.",
        "tr": "Klasik dönemin üretken ve etkili bestecisi. Çoğu senfonik, konçertant, opera ve koro müziğinin zirvesi olarak kabul edilen 600'den fazla eser bestelemiştir."
    },
    "url": "https://en.wikipedia.org/wiki/Wolfgang_Amadeus_Mozart"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Rationalism",
    "description": {
        "en": "The view that 'reason' is the chief source and test of knowledge. It holds that reality itself has an inherently logical structure.",
        "az": "'Ağlın' biliklərin əsas mənbəyi və sınağı olduğu fikri. Reallığın özünün daxili məntiqi quruluşa malik olduğunu iddia edir.",
        "tr": "'Akıl'ın bilginin temel kaynağı ve testi olduğu görüşü. Gerçekliğin kendisinin doğuştan mantıksal bir yapıya sahip olduğunu savunur."
    },
    "url": "https://en.wikipedia.org/wiki/Rationalism"
},
{
    "category": "Biology",
    "title": "Wikipedia - Evolution",
    "description": {
        "en": "The change in the heritable characteristics of biological populations over successive generations. This process gives rise to biodiversity.",
        "az": "Bioloji populyasiyaların irsi xüsusiyyətlərinin ardıcıl nəsillər üzərində dəyişməsi. Bu proses biomüxtəlifliyə səbəb olur.",
        "tr": "Biyolojik popülasyonların kalıtsal özelliklerindeki ardışık nesiller boyunca meydana gelen değişiklik. Bu süreç biyolojik çeşitliliğe yol açar."
    },
    "url": "https://en.wikipedia.org/wiki/Evolution"
},
{
    "category": "Technology",
    "title": "Wikipedia - Virtual Reality (VR)",
    "description": {
        "en": "A simulated experience that can be similar to or completely different from the real world. Applications include entertainment, education, and business.",
        "az": "Həqiqi dünyaya bənzər və ya ondan tamamilə fərqli ola bilən simulyasiya edilmiş təcrübə. Tətbiqlərə əyləncə, təhsil və iş daxildir.",
        "tr": "Gerçek dünyaya benzer veya tamamen farklı olabilen simüle edilmiş bir deneyim. Uygulamaları eğlence, eğitim ve işi içerir."
    },
    "url": "https://en.wikipedia.org/wiki/Virtual_reality"
},
{
    "category": "History",
    "title": "Wikipedia - Ancient Greece",
    "description": {
        "en": "The period of Greek history lasting from the Archaic period of the 8th to 6th centuries BC to 146 BC. It laid the foundations of Western civilization.",
        "az": "Yunan tarixinin eramızdan əvvəl 8-ci əsrdən 6-cı əsrə qədər olan Arxayik dövründən eramızdan əvvəl 146-cı ilə qədər davam edən dövrü. Qərb sivilizasiyasının əsasını qoydu.",
        "tr": "Yunan tarihinin MÖ 8. yüzyıldan 6. yüzyıla kadar olan Arkaik dönemden MÖ 146 yılına kadar süren dönemi. Batı medeniyetinin temellerini attı."
    },
    "url": "https://en.wikipedia.org/wiki/Ancient_Greece"
},
{
    "category": "Science",
    "title": "Wikipedia - Quantum Mechanics",
    "description": {
        "en": "A fundamental theory in physics which provides a description of the physical properties of nature at the scale of atoms and subatomic particles.",
        "az": "Fizikada təbiətin atomlar və atomaltı hissəciklər miqyasında fiziki xüsusiyyətlərinin təsvirini verən fundamental nəzəriyyə.",
        "tr": "Fizikte, doğanın fiziksel özelliklerinin atomlar ve atom altı parçacıklar ölçeğinde bir açıklamasını sağlayan temel bir teori."
    },
    "url": "https://en.wikipedia.org/wiki/Quantum_mechanics"
},
{
    "category": "Art",
    "title": "Wikipedia - Renaissance",
    "description": {
        "en": "A period in European history, from the 14th to the 16th century, marked by a revival of classical learning and wisdom.",
        "az": "Avropa tarixində 14-cü əsrdən 16-cı əsrə qədər davam edən, klassik bilik və müdrikliyin dirçəlişi ilə əlamətdar olan dövr.",
        "tr": "Avrupa tarihinde 14. yüzyıldan 16. yüzyıla kadar süren, klasik öğrenme ve bilgeliğin yeniden canlanmasıyla işaretlenen bir dönem."
    },
    "url": "https://en.wikipedia.org/wiki/Renaissance"
},
{
    "category": "Literature",
    "title": "Wikipedia - To Kill a Mockingbird",
    "description": {
        "en": "A novel by the American author Harper Lee, published in 1960. It won the Pulitzer Prize and became a classic of modern American literature.",
        "az": "Amerikalı yazıçı Harper Li tərəfindən 1960-cı ildə nəşr olunan roman. Pulitser mükafatını qazandı və müasir Amerika ədəbiyyatının klassikinə çevrildi.",
        "tr": "Amerikalı yazar Harper Lee'nin 1960 yılında yayınlanan romanı. Pulitzer Ödülü'nü kazandı ve modern Amerikan edebiyatının klasiği oldu."
    },
    "url": "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird"
},
{
    "category": "Geography",
    "title": "Wikipedia - Pacific Ocean",
    "description": {
        "en": "The largest and deepest of Earth's five oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south.",
        "az": "Yerin beş okean bölməsindən ən böyük və ən dərinidir. Şimalda Arktik Okeandan cənubda Cənub Okeanına qədər uzanır.",
        "tr": "Dünya'nın beş okyanus bölümünün en büyük ve en derinidir. Kuzeyde Arktik Okyanusu'ndan güneyde Güney Okyanusu'na kadar uzanır."
    },
    "url": "https://en.wikipedia.org/wiki/Pacific_Ocean"
},
{
    "category": "Sports",
    "title": "Wikipedia - Cricket",
    "description": {
        "en": "A bat-and-ball game played between two teams of 11 players on a field at the center of which is a 20-metre (22-yard) pitch.",
        "az": "Mərkəzində 20 metrlik (22 yard) meydança olan sahədə 11 oyunçudan ibarət iki komanda arasında oynanılan taxta və top oyunu.",
        "tr": "Ortasında 20 metrelik (22 yard) bir saha bulunan alanda 11 oyuncudan oluşan iki takım arasında oynanan bir sopa ve top oyunu."
    },
    "url": "https://en.wikipedia.org/wiki/Cricket"
},
{
    "category": "Music",
    "title": "Wikipedia - The Beatles",
    "description": {
        "en": "An English rock band formed in Liverpool in 1960. They are regarded as the most influential band of all time and central to the development of counterculture.",
        "az": "1960-cı ildə Liverpulda qurulan İngilis rok qrupu. Bütün zamanların ən nüfuzlu qrupu hesab olunur və əks-mədəniyyətin inkişafında mərkəzidir.",
        "tr": "1960 yılında Liverpool'da kurulan bir İngiliz rock grubu. Tüm zamanların en etkili grubu olarak kabul edilir ve karşı kültürün gelişiminde merkezidir."
    },
    "url": "https://en.wikipedia.org/wiki/The_Beatles"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Existentialism",
    "description": {
        "en": "A form of philosophical inquiry that explores the problem of human existence and centers on the experience of thinking, feeling, and acting.",
        "az": "İnsan varlığının problemini araşdıran və düşünmək, hiss etmək və hərəkət etmək təcrübəsi üzərində cəmləşən fəlsəfi sorğu forması.",
        "tr": "İnsan varoluşu sorununu araştıran ve düşünme, hissetme ve eylemde bulunma deneyimi üzerine odaklanan bir felsefi sorgulama biçimi."
    },
    "url": "https://en.wikipedia.org/wiki/Existentialism"
},
{
    "category": "Biology",
    "title": "Wikipedia - Cell (Biology)",
    "description": {
        "en": "The basic structural, functional, and biological unit of all known organisms. A cell is the smallest unit of life.",
        "az": "Bütün məlum orqanizmlərin əsas struktur, funksional və bioloji vahidi. Hüceyrə həyatın ən kiçik vahididir.",
        "tr": "Bilinen tüm organizmaların temel yapısal, işlevsel ve biyolojik birimi. Bir hücre, yaşamın en küçük birimidir."
    },
    "url": "https://en.wikipedia.org/wiki/Cell_(biology)"
},
{
    "category": "Technology",
    "title": "Wikipedia - 5G",
    "description": {
        "en": "The fifth generation technology standard for broadband cellular networks. Its main goals are higher speeds and lower latency.",
        "az": "Genişzolaqlı mobil şəbəkələr üçün beşinci nəsil texnologiya standartı. Əsas məqsədləri daha yüksək sürət və daha aşağı gecikmədir.",
        "tr": "Geniş bant hücresel ağlar için beşinci nesil teknoloji standardı. Ana hedefleri daha yüksek hızlar ve daha düşük gecikmedir."
    },
    "url": "https://en.wikipedia.org/wiki/5G"
},
{
    "category": "History",
    "title": "Wikipedia - Cold War",
    "description": {
        "en": "A period of geopolitical tension between the Soviet Union and the United States and their respective allies, the Eastern Bloc and the Western Bloc, after World War II.",
        "az": "İkinci Dünya Müharibəsindən sonra Sovet İttifaqı ilə ABŞ və onların müvafiq müttəfiqləri, Şərq Bloku və Qərb Bloku arasında geosiyasi gərginlik dövrü.",
        "tr": "İkinci Dünya Savaşı'ndan sonra Sovyetler Birliği ile Amerika Birleşik Devletleri ve onların müttefikleri olan Doğu Bloku ve Batı Bloku arasındaki jeopolitik gerginlik dönemi."
    },
    "url": "https://en.wikipedia.org/wiki/Cold_War"
},
{
    "category": "Science",
    "title": "Wikipedia - Thermodynamics",
    "description": {
        "en": "A branch of physics that deals with heat and its relation to other forms of energy and work. It defines the macroscopic variables.",
        "az": "İstilik və onun digər enerji və iş formaları ilə əlaqəsini öyrənən fizika sahəsi. Makroskopik dəyişənləri müəyyən edir.",
        "tr": "Isı ve ısının diğer enerji ve iş biçimleriyle ilişkisiyle ilgilenen bir fizik dalı. Makroskopik değişkenleri tanımlar."
    },
    "url": "https://en.wikipedia.org/wiki/Thermodynamics"
},
{
    "category": "Art",
    "title": "Wikipedia - Surrealism",
    "description": {
        "en": "A 20th-century avant-garde movement in art and literature that sought to release the unbridled imagination of the subconscious.",
        "az": "Şüuraltının cilovsuz təxəyyülünü azad etməyə çalışan 20-ci əsr avanqard sənət və ədəbiyyat hərəkatı.",
        "tr": "Bilinçaltının dizginsiz hayal gücünü serbest bırakmayı amaçlayan 20. yüzyıl avangard sanat ve edebiyat hareketi."
    },
    "url": "https://en.wikipedia.org/wiki/Surrealism"
},
{
    "category": "Literature",
    "title": "Wikipedia - Leo Tolstoy",
    "description": {
        "en": "A Russian writer who is regarded as one of the greatest authors of all time. Known for the novels 'War and Peace' and 'Anna Karenina'.",
        "az": "Bütün zamanların ən böyük yazıçılarından biri kimi qəbul edilən rus yazıçısı. 'Hərb və Sülh' və 'Anna Karenina' romanları ilə tanınır.",
        "tr": "Tüm zamanların en büyük yazarlarından biri olarak kabul edilen Rus yazar. 'Savaş ve Barış' ve 'Anna Karenina' romanlarıyla tanınır."
    },
    "url": "https://en.wikipedia.org/wiki/Leo_Tolstoy"
},
{
    "category": "Geography",
    "title": "Wikipedia - Great Wall of China",
    "description": {
        "en": "A series of fortifications that were historically built across the northern borders of China to protect the Chinese states and empires.",
        "az": "Çin dövlətlərini və imperiyalarını qorumaq üçün Çinin şimal sərhədlərində tarixən tikilmiş bir sıra istehkamlar.",
        "tr": "Çin eyaletlerini ve imparatorluklarını korumak için tarihsel olarak Çin'in kuzey sınırları boyunca inşa edilmiş bir dizi tahkimat."
    },
    "url": "https://en.wikipedia.org/wiki/Great_Wall_of_China"
},
{
    "category": "Sports",
    "title": "Wikipedia - Olympic Games",
    "description": {
        "en": "Leading international sporting events featuring summer and winter sports competitions in which thousands of athletes participate in a variety of competitions.",
        "az": "Minlərlə idmançının müxtəlif yarışlarda iştirak etdiyi yay və qış idman yarışlarını əhatə edən aparıcı beynəlxalq idman tədbirləri.",
        "tr": "Binlerce sporcunun çeşitli yarışmalarda yer aldığı yaz ve kış sporları müsabakalarını içeren önde gelen uluslararası spor etkinlikleri."
    },
    "url": "https://en.wikipedia.org/wiki/Olympic_Games"
},
{
    "category": "Music",
    "title": "Wikipedia - Pop Music",
    "description": {
        "en": "A genre of popular music that originated in its modern form in the mid-1950s in the United States and the United Kingdom.",
        "az": "Müasir formasında 1950-ci illərin ortalarında ABŞ və Böyük Britaniyada yaranan populyar musiqi janrı.",
        "tr": "Modern formunda 1950'lerin ortalarında Amerika Birleşik Devletleri ve Birleşik Krallık'ta ortaya çıkan popüler müzik türü."
    },
    "url": "https://en.wikipedia.org/wiki/Pop_music"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Ethics",
    "description": {
        "en": "A branch of philosophy that involves systematizing, defending, and recommending concepts of right and wrong behavior.",
        "az": "Doğru və yanlış davranış konsepsiyalarını sistemləşdirməyi, müdafiə etməyi və tövsiyə etməyi əhatə edən fəlsəfə sahəsi.",
        "tr": "Doğru ve yanlış davranış kavramlarını sistemleştirmeyi, savunmayı ve tavsiye etmeyi içeren bir felsefe dalı."
    },
    "url": "https://en.wikipedia.org/wiki/Ethics"
},
{
    "category": "Biology",
    "title": "Wikipedia - Virology",
    "description": {
        "en": "The scientific study of viruses, submicroscopic, parasitic particles of genetic material contained in a protein coat and a lipid envelope.",
        "az": "Virusların, zülal qabığı və lipid zərfi içərisində olan genetik materialın submikroskopik, parazit hissəciklərinin elmi tədqiqi.",
        "tr": "Virüslerin, bir protein kılıfı ve bir lipid zarfı içinde bulunan genetik materyalin submikroskopik, parazitik parçacıklarının bilimsel çalışması."
    },
    "url": "https://en.wikipedia.org/wiki/Virology"
},
{
    "category": "Technology",
    "title": "Wikipedia - Augmented Reality (AR)",
    "description": {
        "en": "An interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information.",
        "az": "Real dünyadakı obyektlərin kompüter tərəfindən yaradılan qavrayış məlumatları ilə gücləndirildiyi real dünya mühitinin interaktiv təcrübəsi.",
        "tr": "Gerçek dünyadaki nesnelerin bilgisayar tarafından üretilen algısal bilgilerle geliştirildiği, gerçek dünya ortamının etkileşimli bir deneyimi."
    },
    "url": "https://en.wikipedia.org/wiki/Augmented_reality"
},
{
    "category": "History",
    "title": "Wikipedia - Industrial Revolution",
    "description": {
        "en": "The transition to new manufacturing processes in Great Britain, continental Europe, and the United States, in the period from about 1760 to sometime between 1820 and 1840.",
        "az": "Təxminən 1760-cı ildən 1820-ci illə 1840-cı illər arasında Böyük Britaniya, kontinental Avropa və ABŞ-da yeni istehsal proseslərinə keçid.",
        "tr": "Yaklaşık 1760'tan 1820 ile 1840 arasında Büyük Britanya, kıta Avrupası ve Amerika Birleşik Devletleri'nde yeni üretim süreçlerine geçiş."
    },
    "url": "https://en.wikipedia.org/wiki/Industrial_Revolution"
},
{
    "category": "Science",
    "title": "Wikipedia - General Relativity",
    "description": {
        "en": "Albert Einstein's geometric theory of gravitation, which supersedes Newton's law of universal gravitation. It describes gravity as a property of spacetime.",
        "az": "Albert Eynşteynin cazibə qüvvəsinin Nyutonun ümumdünya cazibə qanununu əvəz edən həndəsi nəzəriyyəsi. Cazibə qüvvəsini fəza-zamanın bir xüsusiyyəti kimi təsvir edir.",
        "tr": "Albert Einstein'ın Newton'un evrensel çekim yasasının yerini alan geometrik çekim teorisi. Kütleçekimini uzay zamanın bir özelliği olarak tanımlar."
    },
    "url": "https://en.wikipedia.org/wiki/General_relativity"
},
{
    "category": "Art",
    "title": "Wikipedia - Gothic Architecture",
    "description": {
        "en": "A style of architecture that flourished during the high and late medieval period in Europe. Characterized by pointed arches and ribbed vaults.",
        "az": "Avropada yüksək və son orta əsrlərdə çiçəklənən memarlıq tərzi. Sivri tağlar və qabırğalı tonozlarla xarakterizə olunur.",
        "tr": "Avrupa'da yüksek ve geç orta çağ döneminde gelişen bir mimari tarz. Sivri kemerler ve nervürlü tonozlarla karakterizedir."
    },
    "url": "https://en.wikipedia.org/wiki/Gothic_architecture"
},
{
    "category": "Literature",
    "title": "Wikipedia - Fyodor Dostoevsky",
    "description": {
        "en": "A Russian novelist, philosopher, short story writer, essayist, and journalist. His works explore human psychology in the context of the tumultuous political, social, and spiritual atmosphere of 19th-century Russia.",
        "az": "Rus romançısı, filosof, qısa hekayə yazıçısı, esseist və jurnalist. Əsərləri 19-cu əsr Rusiyasının çətin siyasi, sosial və mənəvi atmosferi kontekstində insan psixologiyasını araşdırır.",
        "tr": "Rus romancı, filozof, kısa öykü yazarı, denemeci ve gazeteci. Eserleri, 19. yüzyıl Rusya'sının çalkantılı siyasi, sosyal ve manevi atmosferi bağlamında insan psikolojisini araştırır."
    },
    "url": "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"
},
{
    "category": "Geography",
    "title": "Wikipedia - Nile River",
    "description": {
        "en": "A major north-flowing river in northeastern Africa. It is generally regarded as the longest river in the world, stretching for 6,650 km.",
        "az": "Şimal-şərqi Afrikada şimala doğru axan böyük bir çay. Ümumiyyətlə, 6,650 km uzanan dünyanın ən uzun çayı hesab olunur.",
        "tr": "Kuzeydoğu Afrika'da kuzeye doğru akan büyük bir nehir. Genellikle 6.650 km uzunluğunda olan dünyanın en uzun nehri olarak kabul edilir."
    },
    "url": "https://en.wikipedia.org/wiki/Nile"
},
{
    "category": "Sports",
    "title": "Wikipedia - Tennis",
    "description": {
        "en": "A racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles).",
        "az": "Ya tək bir rəqibə qarşı fərdi (tək) və ya hər biri iki oyunçudan ibarət iki komanda arasında (cüt) oynanılan raket idmanı.",
        "tr": "Ya tek bir rakibe karşı bireysel (tekler) ya da her biri iki oyuncudan oluşan iki takım arasında (çiftler) oynanan bir raket sporu."
    },
    "url": "https://en.wikipedia.org/wiki/Tennis"
},
{
    "category": "Music",
    "title": "Wikipedia - Opera",
    "description": {
        "en": "An art form in which singers and musicians perform a dramatic work combining text (libretto) and musical score, usually in a theatrical setting.",
        "az": "Müğənnilərin və musiqiçilərin mətn (libretto) və musiqi notlarını birləşdirən dramatik əsəri, adətən teatr şəraitində ifa etdiyi sənət növü.",
        "tr": "Şarkıcılar ve müzisyenlerin, metin (libretto) ve müzik notalarını birleştiren dramatik bir eseri, genellikle tiyatro ortamında sahnelediği bir sanat formu."
    },
    "url": "https://en.wikipedia.org/wiki/Opera"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Utilitarianism",
    "description": {
        "en": "A family of normative ethical theories that prescribe actions that maximize happiness and well-being for all affected individuals.",
        "az": "Təsirə məruz qalan bütün fərdlər üçün xoşbəxtliyi və rifahı maksimum dərəcədə artıran hərəkətləri təyin edən normativ etik nəzəriyyələr ailəsi.",
        "tr": "Etkilenen tüm bireyler için mutluluğu ve refahı en üst düzeye çıkaran eylemleri öngören normatif etik teoriler ailesi."
    },
    "url": "https://en.wikipedia.org/wiki/Utilitarianism"
},
{
    "category": "Biology",
    "title": "Wikipedia - Climate Change",
    "description": {
        "en": "A long-term shift in global or regional climate patterns. The primary cause is the burning of fossil fuels, which increases greenhouse gas concentrations.",
        "az": "Qlobal və ya regional iqlim modellərində uzunmüddətli dəyişiklik. Əsas səbəb istixana qazlarının konsentrasiyasını artıran qalıq yanacaqların yandırılmasıdır.",
        "tr": "Küresel veya bölgesel iklim modellerinde uzun vadeli bir kayma. Birincil neden, sera gazı konsantrasyonlarını artıran fosil yakıtların yakılmasıdır."
    },
    "url": "https://en.wikipedia.org/wiki/Climate_change"
},
{
    "category": "Technology",
    "title": "Wikipedia - Cybersecurity",
    "description": {
        "en": "The practice of protecting systems, networks, and programs from digital attacks. It aims to reduce the risk of cyber attacks.",
        "az": "Sistemləri, şəbəkələri və proqramları rəqəmsal hücumlardan qorumaq təcrübəsi. Kiber hücumlar riskini azaltmağı hədəfləyir.",
        "tr": "Sistemleri, ağları ve programları dijital saldırılardan koruma uygulaması. Siber saldırı riskini azaltmayı amaçlar."
    },
    "url": "https://en.wikipedia.org/wiki/Cybersecurity"
},
{
    "category": "History",
    "title": "Wikipedia - Middle Ages",
    "description": {
        "en": "The period in European history from the 5th century to the 15th century. It began with the collapse of the Western Roman Empire and merged into the Renaissance and the Age of Discovery.",
        "az": "Avropa tarixində 5-ci əsrdən 15-ci əsrə qədər olan dövr. Qərbi Roma İmperiyasının süqutu ilə başladı və İntibah və Böyük Coğrafi Kəşflər Dövrünə qovuşdu.",
        "tr": "Avrupa tarihinde 5. yüzyıldan 15. yüzyıla kadar olan dönem. Batı Roma İmparatorluğu'nun çöküşüyle başladı ve Rönesans ve Keşif Çağı'na karıştı."
    },
    "url": "https://en.wikipedia.org/wiki/Middle_Ages"
},
{
    "category": "Science",
    "title": "Wikipedia - Electromagnetism",
    "description": {
        "en": "A branch of physics involving the study of the electromagnetic force, a type of physical interaction that occurs between electrically charged particles.",
        "az": "Elektrik yüklü zərrəciklər arasında baş verən fiziki qarşılıqlı təsir növü olan elektromaqnit qüvvəsinin öyrənilməsini əhatə edən fizika sahəsi.",
        "tr": "Elektrik yüklü parçacıklar arasında meydana gelen bir tür fiziksel etkileşim olan elektromanyetik kuvvetin incelenmesini içeren bir fizik dalı."
    },
    "url": "https://en.wikipedia.org/wiki/Electromagnetism"
},
{
    "category": "Art",
    "title": "Wikipedia - Photography",
    "description": {
        "en": "The art, application, and practice of creating durable images by recording light or other electromagnetic radiation, either electronically by means of an image sensor, or chemically by means of a light-sensitive material.",
        "az": "İşığı və ya digər elektromaqnit şüalanmasını elektron şəkildə bir görüntü sensoru vasitəsilə, yaxud kimyəvi olaraq işığa həssas bir material vasitəsilə qeyd etməklə davamlı şəkillər yaratmaq sənəti, tətbiqi və təcrübəsi.",
        "tr": "Işığı veya diğer elektromanyetik radyasyonu elektronik olarak bir görüntü sensörü aracılığıyla veya kimyasal olarak ışığa duyarlı bir malzeme aracılığıyla kaydederek kalıcı görüntüler oluşturma sanatı, uygulaması ve pratiği."
    },
    "url": "https://en.wikipedia.org/wiki/Photography"
},
{
    "category": "Literature",
    "title": "Wikipedia - George Orwell",
    "description": {
        "en": "An English novelist, essayist, journalist, and critic. He is best known for the allegorical novella Animal Farm and the dystopian novel Nineteen Eighty-Four.",
        "az": "İngilis romançı, esseist, jurnalist və tənqidçi. Ən çox alleqorik novella 'Heyvanıstan' və distopik roman 'Min doqquz yüz səksən dörd' ilə tanınır.",
        "tr": "İngiliz romancı, denemeci, gazeteci ve eleştirmen. En çok alegorik kısa romanı 'Hayvan Çiftliği' ve distopik romanı 'Bin Dokuz Yüz Seksen Dört' ile tanınır."
    },
    "url": "https://en.wikipedia.org/wiki/George_Orwell"
},
{
    "category": "Geography",
    "title": "Wikipedia - Grand Canyon",
    "description": {
        "en": "A steep-sided canyon carved by the Colorado River in Arizona, United States. It is 277 miles (446 km) long, up to 18 miles (29 km) wide and a mile (1,857 meters) deep.",
        "az": "ABŞ-ın Arizona ştatında Kolorado çayı tərəfindən oyulmuş dərin kanyon. 277 mil (446 km) uzunluğunda, 18 milə (29 km) qədər enində və bir mil (1,857 metr) dərinliyindədir.",
        "tr": "Amerika Birleşik Devletleri, Arizona'da Colorado Nehri tarafından oyulmuş dik yamaçlı bir kanyon. 277 mil (446 km) uzunluğunda, 18 mil (29 km) genişliğe kadar ve bir mil (1.857 metre) derinliğindedir."
    },
    "url": "https://en.wikipedia.org/wiki/Grand_Canyon"
},
{
    "category": "Sports",
    "title": "Wikipedia - Boxing",
    "description": {
        "en": "A combat sport in which two people, usually wearing protective gloves, punch each other for a predetermined amount of time in a boxing ring.",
        "az": "İki nəfərin, adətən qoruyucu əlcək geyinərək, boks rinqində əvvəlcədən təyin edilmiş müddət ərzində bir-birini yumruqladığı döyüş idman növü.",
        "tr": "Genellikle koruyucu eldiven giyen iki kişinin, önceden belirlenmiş bir süre boyunca bir boks ringinde birbirine yumruk attığı bir dövüş sporu."
    },
    "url": "https://en.wikipedia.org/wiki/Boxing"
},
{
    "category": "Music",
    "title": "Wikipedia - Hip hop music",
    "description": {
        "en": "A genre of music developed in the United States by inner-city African Americans in the 1970s. It consists of stylized rhythmic music that commonly accompanies rapping.",
        "az": "1970-ci illərdə ABŞ-da daxili şəhər Afrika Amerikalıları tərəfindən inkişaf etdirilən musiqi janrı. Adətən rep ifasına müşayiət edən stilizə edilmiş ritmik musiqidən ibarətdir.",
        "tr": "1970'lerde Amerika Birleşik Devletleri'nde şehir içi Afrika kökenli Amerikalılar tarafından geliştirilen bir müzik türü. Genellikle raple eşlik eden stilize ritmik müzikten oluşur."
    },
    "url": "https://en.wikipedia.org/wiki/Hip_hop_music"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Epistemology",
    "description": {
        "en": "The branch of philosophy concerned with knowledge. Epistemologists study the nature, origin, and scope of knowledge.",
        "az": "Biləklə əlaqəli fəlsəfə sahəsi. Epistemoloqlar biliklərin təbiətini, mənşəyini və əhatə dairəsini öyrənirlər.",
        "tr": "Bilgiyle ilgili felsefe dalı. Epistemologlar bilginin doğasını, kökenini ve kapsamını incelerler."
    },
    "url": "https://en.wikipedia.org/wiki/Epistemology"
},
{
    "category": "Biology",
    "title": "Wikipedia - Genetics",
    "description": {
        "en": "The study of genes, genetic variation, and heredity in organisms. It is a subfield of biology.",
        "az": "Orqanizmlərdə genlərin, genetik dəyişkənliyin və irsiyyətin öyrənilməsi. Biologiyanın alt sahəsidir.",
        "tr": "Organizmalarda genlerin, genetik varyasyonun ve kalıtımın incelenmesi. Biyolojinin bir alt alanıdır."
    },
    "url": "https://en.wikipedia.org/wiki/Genetics"
},
{
    "category": "Technology",
    "title": "Wikipedia - E-commerce",
    "description": {
        "en": "The buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions.",
        "az": "İnternetdən istifadə edərək mal və ya xidmətlərin alqı-satqısı, bu əməliyyatları həyata keçirmək üçün pul və məlumatların köçürülməsi.",
        "tr": "İnternet kullanarak mal veya hizmetlerin alınıp satılması ve bu işlemleri gerçekleştirmek için para ve verilerin transferi."
    },
    "url": "https://en.wikipedia.org/wiki/E-commerce"
},
{
    "category": "History",
    "title": "Wikipedia - French Revolution",
    "description": {
        "en": "A period of far-reaching social and political upheaval in France and its colonies, lasting from 1789 until 1799.",
        "az": "1789-cu ildən 1799-cu ilə qədər davam edən Fransa və onun koloniyalarında geniş sosial və siyasi çevriliş dövrü.",
        "tr": "1789'dan 1799'a kadar süren Fransa ve kolonilerinde geniş kapsamlı sosyal ve siyasi kargaşa dönemi."
    },
    "url": "https://en.wikipedia.org/wiki/French_Revolution"
},
{
    "category": "Science",
    "title": "Wikipedia - Particle Physics",
    "description": {
        "en": "The study of the fundamental constituents of matter and radiation, and the interactions between them. Also called high energy physics.",
        "az": "Maddə və şüalanmanın fundamental tərkib hissələrinin və onların arasındakı qarşılıqlı təsirlərin öyrənilməsi. Həm də yüksək enerji fizikası adlanır.",
        "tr": "Madde ve radyasyonun temel bileşenlerinin ve bunlar arasındaki etkileşimlerin incelenmesi. Aynı zamanda yüksek enerji fiziği olarak da adlandırılır."
    },
    "url": "https://en.wikipedia.org/wiki/Particle_physics"
},
{
    "category": "Art",
    "title": "Wikipedia - Dadaism",
    "description": {
        "en": "An art movement of the European avant-garde in the early 20th century. It was a reaction to the horrors of World War I.",
        "az": "20-ci əsrin əvvəllərində Avropa avanqardının bir sənət hərəkatı. Bu, Birinci Dünya Müharibəsinin dəhşətlərinə bir reaksiya idi.",
        "tr": "20. yüzyılın başlarında Avrupa avangardının bir sanat hareketi. Birinci Dünya Savaşı'nın dehşetine bir tepkiydi."
    },
    "url": "https://en.wikipedia.org/wiki/Dada"
},
{
    "category": "Literature",
    "title": "Wikipedia - One Hundred Years of Solitude",
    "description": {
        "en": "A 1967 novel by Colombian author Gabriel García Márquez. It tells the story of the Buendía family through seven generations in the fictional town of Macondo.",
        "az": "Kolumbiyalı yazıçı Qabriel Qarsiya Markesin 1967-ci ildə yazdığı roman. Makondo adlı uydurma şəhərdə Buendía ailəsinin yeddi nəsil ərzindəki hekayəsini danışır.",
        "tr": "Kolombiyalı yazar Gabriel García Márquez'in 1967 tarihli romanı. Macondo adlı kurgusal kasabada yedi nesil boyunca Buendía ailesinin hikayesini anlatır."
    },
    "url": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude"
},
{
    "category": "Geography",
    "title": "Wikipedia - Mount Fuji",
    "description": {
        "en": "The highest mountain in Japan, an active volcano that last erupted from 1707 to 1708. It is one of Japan's 'Three Holy Mountains'.",
        "az": "Yaponiyanın ən hündür dağı, sonuncu dəfə 1707-ci ildən 1708-ci ilə qədər püskürmüş aktiv vulkan. Yaponiyanın 'Üç Müqəddəs Dağından' biridir.",
        "tr": "Japonya'nın en yüksek dağı, son olarak 1707'den 1708'e kadar patlayan aktif bir volkan. Japonya'nın 'Üç Kutsal Dağı'ndan biridir."
    },
    "url": "https://en.wikipedia.org/wiki/Mount_Fuji"
},
{
    "category": "Sports",
    "title": "Wikipedia - Golf",
    "description": {
        "en": "A club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course using the fewest possible strokes.",
        "az": "Oyunçuların müxtəlif çubuqlardan istifadə edərək topları kursdakı bir sıra dəliklərə mümkün qədər az zərbə ilə vurmağa çalışdıqları çubuq və top idman növü.",
        "tr": "Oyuncuların çeşitli sopalar kullanarak topları bir kurstaki bir dizi deliğe mümkün olan en az vuruşla sokmaya çalıştığı bir sopa ve top sporu."
    },
    "url": "https://en.wikipedia.org/wiki/Golf"
},
{
    "category": "Music",
    "title": "Wikipedia - Blues",
    "description": {
        "en": "A music genre and musical form which originated in the Deep South of the United States around the 1870s by African Americans from spirituals, work songs, and folk music.",
        "az": "1870-ci illərdə ABŞ-ın Dərin Cənubunda Afrika Amerikalıları tərəfindən spirituals, iş mahnıları və xalq musiqisindən yaranan musiqi janrı və musiqi forması.",
        "tr": "1870'ler civarında Amerika Birleşik Devletleri'nin Derin Güneyinde Afrika kökenli Amerikalılar tarafından ilahiler, çalışma şarkıları ve halk müziğinden ortaya çıkan bir müzik türü ve müzik biçimi."
    },
    "url": "https://en.wikipedia.org/wiki/Blues"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Stoicism",
    "description": {
        "en": "An ancient Greek school of philosophy founded by Zeno of Citium. It teaches the development of self-control and fortitude as a means of overcoming destructive emotions.",
        "az": "Kitionlu Zeno tərəfindən qurulan qədim yunan fəlsəfə məktəbi. Dağıdıcı emosiyaların öhdəsindən gəlmək üçün özünə nəzarət və dözümlülüyün inkişafını öyrədir.",
        "tr": "Kıbrıslı Zenon tarafından kurulan antik bir Yunan felsefe okulu. Yıkıcı duyguların üstesinden gelmek için öz kontrol ve metanetin geliştirilmesini öğretir."
    },
    "url": "https://en.wikipedia.org/wiki/Stoicism"
},
{
    "category": "Biology",
    "title": "Wikipedia - Neuroscience",
    "description": {
        "en": "The scientific study of the nervous system. It is a multidisciplinary science that works with biology, chemistry, computer science, engineering, and more.",
        "az": "Sinir sisteminin elmi tədqiqi. Biologiya, kimya, kompüter elmləri, mühəndislik və daha çox sahələrlə işləyən çoxsahəli bir elmdir.",
        "tr": "Sinir sisteminin bilimsel çalışması. Biyoloji, kimya, bilgisayar bilimi, mühendislik ve daha fazlasıyla çalışan çok disiplinli bir bilimdir."
    },
    "url": "https://en.wikipedia.org/wiki/Neuroscience"
},
{
    "category": "Technology",
    "title": "Wikipedia - Cloud Computing",
    "description": {
        "en": "The on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.",
        "az": "Kompüter sistem resurslarının, xüsusən də məlumatların saxlanması və hesablama gücünün istifadəçi tərəfindən birbaşa aktiv idarəetmə olmadan tələb üzrə mövcudluğu.",
        "tr": "Bilgisayar sistemi kaynaklarının, özellikle veri depolama ve bilgi işlem gücünün, kullanıcı tarafından doğrudan aktif yönetim olmadan isteğe bağlı olarak kullanılabilirliği."
    },
    "url": "https://en.wikipedia.org/wiki/Cloud_computing"
},
{
    "category": "History",
    "title": "Wikipedia - Genghis Khan",
    "description": {
        "en": "The founder and first Great Khan (Emperor) of the Mongol Empire, which became the largest contiguous empire in history after his death.",
        "az": "Monqol İmperiyasının qurucusu və ilk Böyük Xanı (İmperatoru), ölümündən sonra tarixdə ən böyük bitişik imperiyaya çevrildi.",
        "tr": "Ölümünden sonra tarihin en büyük bitişik imparatorluğu haline gelen Moğol İmparatorluğu'nun kurucusu ve ilk Büyük Han'ı (İmparatoru)."
    },
    "url": "https://en.wikipedia.org/wiki/Genghis_Khan"
},
{
    "category": "Science",
    "title": "Wikipedia - Asteroid",
    "description": {
        "en": "A minor planet of the inner Solar System. They are rocky, airless worlds that orbit the sun, but are too small to be called planets.",
        "az": "Günəş sisteminin daxili hissəsinin kiçik planeti. Onlar günəşin ətrafında fırlanan, qayalı, havasız dünyalardır, lakin planet adlandırılmaq üçün çox kiçikdirlər.",
        "tr": "İç Güneş Sistemi'nin küçük bir gezegeni. Güneşin etrafında dönen, kayalık, havasız dünyalardır, ancak gezegen olarak adlandırılamayacak kadar küçüktürler."
    },
    "url": "https://en.wikipedia.org/wiki/Asteroid"
},
{
    "category": "Art",
    "title": "Wikipedia - Cubism",
    "description": {
        "en": "An early-20th-century avant-garde art movement that revolutionized European painting and sculpture. Objects are analyzed, broken up and reassembled in an abstracted form.",
        "az": "Avropa rəssamlığını və heykəltaraşlığını inqilab edən 20-ci əsrin əvvəllərindəki avanqard sənət hərəkatı. Obyektlər abstrakt formada təhlil edilir, parçalanır və yenidən yığılır.",
        "tr": "Avrupa resmini ve heykelini devrim yaratan 20. yüzyılın başlarındaki avangard sanat hareketi. Nesneler analiz edilir, parçalanır ve soyutlanmış bir biçimde yeniden bir araya getirilir."
    },
    "url": "https://en.wikipedia.org/wiki/Cubism"
},
{
    "category": "Literature",
    "title": "Wikipedia - Pride and Prejudice",
    "description": {
        "en": "A romantic novel of manners written by Jane Austen in 1813. It follows the main character Elizabeth Bennet as she deals with issues of manners, education, marriage, and morality.",
        "az": "Ceyn Ostin tərəfindən 1813-cü ildə yazılmış romantik əxlaq romanı. Baş qəhrəman Elizabet Bennetin ədəb, təhsil, evlilik və əxlaq məsələləri ilə məşğul olmasından bəhs edir.",
        "tr": "Jane Austen tarafından 1813 yılında yazılmış romantik bir görgü romanı. Baş kahraman Elizabeth Bennet'in görgü, eğitim, evlilik ve ahlak konularıyla uğraşmasını konu alır."
    },
    "url": "https://en.wikipedia.org/wiki/Pride_and_Prejudice"
},
{
    "category": "Geography",
    "title": "Wikipedia - Tokyo",
    "description": {
        "en": "The capital and most populous city of Japan. It is the most populous metropolitan area in the world, with over 37 million residents.",
        "az": "Yaponiyanın paytaxtı və ən sıx əhalisi olan şəhəri. 37 milyondan çox sakini ilə dünyanın ən sıx əhalisi olan metropoliten sahəsidir.",
        "tr": "Japonya'nın başkenti ve en kalabalık şehri. 37 milyondan fazla sakini ile dünyanın en kalabalık metropol alanıdır."
    },
    "url": "https://en.wikipedia.org/wiki/Tokyo"
},
{
    "category": "Sports",
    "title": "Wikipedia - Swimming",
    "description": {
        "en": "The self-propulsion of a person through water, usually for recreation, sport, survival, or exercise. It is a major competitive sport in the Olympic Games.",
        "az": "Bir insanın adətən istirahət, idman, sağ qalma və ya məşq üçün su vasitəsilə özünü irəlilətməsi. Olimpiya Oyunlarında əsas rəqabət idman növüdür.",
        "tr": "Bir kişinin, genellikle eğlence, spor, hayatta kalma veya egzersiz için, su yoluyla kendini itmesi. Olimpiyat Oyunlarında önemli bir rekabet sporudur."
    },
    "url": "https://en.wikipedia.org/wiki/Swimming"
},
{
    "category": "Music",
    "title": "Wikipedia - Rock Music",
    "description": {
        "en": "A broad genre of popular music that originated as 'rock and roll' in the United States during the late 1940s and early 1950s.",
        "az": "1940-cı illərin sonu və 1950-ci illərin əvvəllərində ABŞ-da 'rok-n-roll' olaraq yaranan populyar musiqinin geniş janrı.",
        "tr": "1940'ların sonları ve 1950'lerin başlarında Amerika Birleşik Devletleri'nde 'rock and roll' olarak ortaya çıkan geniş bir popüler müzik türü."
    },
    "url": "https://en.wikipedia.org/wiki/Rock_music"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Logic",
    "description": {
        "en": "The systematic study of valid inference. An inference is valid if, when its premises are true, its conclusion must also be true.",
        "az": "Düzgün çıxarışın sistemli öyrənilməsi. Çıxarışın binası doğru olduqda, onun nəticəsi də doğru olmalıdırsa, o zaman çıxarış düzgündür.",
        "tr": "Geçerli çıkarımın sistematik çalışması. Bir çıkarım, öncülleri doğru olduğunda sonucunun da doğru olması gerekiyorsa geçerlidir."
    },
    "url": "https://en.wikipedia.org/wiki/Logic"
},
{
    "category": "Biology",
    "title": "Wikipedia - Ecology",
    "description": {
        "en": "The study of the relationships between living organisms, including humans, and their physical environment. It is a multidisciplinary science.",
        "az": "Yaşayan orqanizmlər, o cümlədən insanlar və onların fiziki mühiti arasındakı əlaqələrin öyrənilməsi. Çoxsahəli bir elmdir.",
        "tr": "İnsanlar da dahil olmak üzere canlı organizmalar ve fiziksel çevreleri arasındaki ilişkilerin incelenmesi. Çok disiplinli bir bilimdir."
    },
    "url": "https://en.wikipedia.org/wiki/Ecology"
},
{
    "category": "Technology",
    "title": "Wikipedia - Machine Learning",
    "description": {
        "en": "A branch of artificial intelligence (AI) and computer science that focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.",
        "az": "Süni intellektin (Sİ) və kompüter elmlərinin bir sahəsi olub, insanların öyrənmə tərzini təqlid etmək üçün məlumat və alqoritmlərin istifadəsinə fokuslanır, tədricən dəqiqliyini artırır.",
        "tr": "Yapay zeka (YZ) ve bilgisayar bilimlerinin bir dalı olup, insanların öğrenme biçimini taklit etmek için veri ve algoritmaların kullanımına odaklanır, doğruluğunu kademeli olarak artırır."
    },
    "url": "https://en.wikipedia.org/wiki/Machine_learning"
},
{
    "category": "History",
    "title": "Wikipedia - Ming Dynasty",
    "description": {
        "en": "The ruling dynasty of China from 1368 to 1644, following the collapse of the Mongol-led Yuan dynasty. It is described by some as 'one of the greatest eras of orderly government and social stability in human history'.",
        "az": "Monqol rəhbərliyindəki Yuan sülaləsinin süqutundan sonra 1368-ci ildən 1644-cü ilə qədər Çinə rəhbərlik edən sülalə. Bəziləri tərəfindən 'insan tarixində nizamlı hökumətin və sosial sabitliyin ən böyük dövrlərindən biri' kimi təsvir edilir.",
        "tr": "Moğol liderliğindeki Yuan hanedanının çöküşünden sonra 1368'den 1644'e kadar Çin'e hükmeden hanedan. Bazıları tarafından 'insanlık tarihindeki düzenli hükümet ve sosyal istikrarın en büyük dönemlerinden biri' olarak tanımlanır."
    },
    "url": "https://en.wikipedia.org/wiki/Ming_dynasty"
},
{
    "category": "Science",
    "title": "Wikipedia - Geology",
    "description": {
        "en": "The study of Earth, its structure, physical processes, and history. It is concerned with the solid Earth, the rocks and processes by which they change over time.",
        "az": "Yer kürəsinin, onun quruluşunun, fiziki proseslərinin və tarixinin öyrənilməsi. Bərk Yer, süxurlar və onların zamanla dəyişmə prosesləri ilə maraqlanır.",
        "tr": "Dünya'nın, yapısının, fiziksel süreçlerinin ve tarihinin incelenmesi. Katı Dünya, kayalar ve zamanla değişim süreçleri ile ilgilenir."
    },
    "url": "https://en.wikipedia.org/wiki/Geology"
},
{
    "category": "Art",
    "title": "Wikipedia - Baroque",
    "description": {
        "en": "A style of architecture, music, dance, painting, sculpture, and other arts that flourished in Europe from the early 17th century until the 1740s. It emphasized exaggerated motion and clear, easily interpreted detail.",
        "az": "17-ci əsrin əvvəllərindən 1740-cı illərə qədər Avropada çiçəklənən memarlıq, musiqi, rəqs, rəsm, heykəltaraşlıq və digər sənət növlərinin üslubu. Həddindən artıq hərəkətə və aydın, asanlıqla şərh edilə bilən detallara diqqət yetirirdi.",
        "tr": "17. yüzyılın başlarından 1740'lara kadar Avrupa'da gelişen bir mimari, müzik, dans, resim, heykel ve diğer sanatlar tarzı. Abartılı hareketi ve net, kolayca yorumlanabilen detayları vurguluyordu."
    },
    "url": "https://en.wikipedia.org/wiki/Baroque"
},
{
    "category": "Literature",
    "title": "Wikipedia - Gabriel García Márquez",
    "description": {
        "en": "A Colombian novelist, short-story writer, screenwriter, and journalist, known affectionately as Gabo. Considered one of the most significant authors of the 20th century.",
        "az": "Kolumbiyalı romançı, qısa hekayə yazıçısı, ssenarist və jurnalist, sevgiylə Gabo kimi tanınır. 20-ci əsrin ən əhəmiyyətli müəlliflərindən biri hesab olunur.",
        "tr": "Sevgiyle Gabo olarak bilinen Kolombiyalı romancı, kısa öykü yazarı, senarist ve gazeteci. 20. yüzyılın en önemli yazarlarından biri olarak kabul edilir."
    },
    "url": "https://en.wikipedia.org/wiki/Gabriel_Garc%C3%ADa_M%C3%A1rquez"
},
{
    "category": "Geography",
    "title": "Wikipedia - Kilimanjaro",
    "description": {
        "en": "A dormant volcano in Tanzania, the highest mountain in Africa and the highest single free-standing mountain in the world. Its summit is 5,895 meters (19,341 feet) above sea level.",
        "az": "Tanzaniyada yatan vulkan, Afrikanın ən yüksək dağı və dünyanın ən yüksək tək dayaq dağ. Zirvəsi dəniz səviyyəsindən 5,895 metr (19,341 fut) yüksəklikdədir.",
        "tr": "Tanzanya'da sönmüş bir yanardağ, Afrika'nın en yüksek dağı ve dünyanın en yüksek tek başına duran dağı. Zirvesi deniz seviyesinden 5.895 metre (19.341 fit) yüksekliktedir."
    },
    "url": "https://en.wikipedia.org/wiki/Mount_Kilimanjaro"
},
{
    "category": "Sports",
    "title": "Wikipedia - Ice Hockey",
    "description": {
        "en": "A contact team sport played on ice, usually between two teams of skaters. It is one of the world's fastest team sports.",
        "az": "Buz üzərində oynanılan, adətən iki xizəkçi komanda arasında olan təmas komanda idman növü. Dünyanın ən sürətli komanda idman növlərindən biridir.",
        "tr": "Buz üzerinde oynanan, genellikle iki patenci takımı arasındaki temaslı takım sporu. Dünyanın en hızlı takım sporlarından biridir."
    },
    "url": "https://en.wikipedia.org/wiki/Ice_hockey"
},
{
    "category": "Music",
    "title": "Wikipedia - Heavy Metal",
    "description": {
        "en": "A genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States. It is characterized by loud, distorted guitars, emphatic rhythms, and dense bass-and-drum sound.",
        "az": "1960-cı illərin sonu və 1970-ci illərin əvvəllərində, əsasən Böyük Britaniya və ABŞ-da inkişaf edən rok musiqisinin bir janrı. Yüksək, təhrif olunmuş gitara səsləri, vurğulu ritmlər və sıx bas-və-təbil səsi ilə xarakterizə olunur.",
        "tr": "1960'ların sonları ve 1970'lerin başlarında, büyük ölçüde Birleşik Krallık ve Amerika Birleşik Devletleri'nde gelişen bir rock müzik türü. Yüksek, bozuk gitarlar, vurgulu ritimler ve yoğun bas-davul sesi ile karakterizedir."
    },
    "url": "https://en.wikipedia.org/wiki/Heavy_metal_music"
},
{
    "category": "Philosophy",
    "title": "Wikipedia - Socrates",
    "description": {
        "en": "A Greek philosopher from Athens who is credited as the founder of Western philosophy. He is known for the Socratic method of inquiry.",
        "az": "Qərb fəlsəfəsinin qurucusu kimi qəbul edilən Afinadan olan yunan filosofu. Sokratik sorğu metodu ilə tanınır.",
        "tr": "Batı felsefesinin kurucusu olarak kabul edilen Atinalı bir Yunan filozof. Sokratik sorgulama yöntemiyle tanınır."
    },
    "url": "https://en.wikipedia.org/wiki/Socrates"
},
{
    "category": "Biology",
    "title": "Wikipedia - Vaccine",
    "description": {
        "en": "A biological preparation that provides active acquired immunity to a particular infectious disease. A vaccine typically contains an agent that resembles a disease-causing microorganism.",
        "az": "Müəyyən bir yoluxucu xəstəliyə qarşı aktiv əldə edilmiş immunitet təmin edən bioloji preparat. Peyvənd adətən xəstəlik törədən mikroorqanizmə bənzəyən bir agent ehtiva edir.",
        "tr": "Belirli bir bulaşıcı hastalığa karşı aktif kazanılmış bağışıklık sağlayan biyolojik bir preparat. Bir aşı tipik olarak hastalığa neden olan bir mikroorganizmaya benzeyen bir ajan içerir."
    },
    "url": "https://en.wikipedia.org/wiki/Vaccine"
},
{

    category: "Gaming",
    title: "Google Play - PUBG Mobile",
    description: {
        en: "A free-to-play battle royale video game developed by Tencent Games. Up to 100 players parachute onto an island to scavenge and fight for survival.",
        az: "Tencent Games tərəfindən hazırlanmış pulsuz oynana bilən döyüş royali video oyunu. 100-ə qədər oyunçu sağ qalmaq üçün əşyalar toplamaq və döyüşmək üçün bir adaya paraşütlə enir.",
        tr: "Tencent Games tarafından geliştirilen, oynaması ücretsiz bir battle royale video oyunu. 100'e kadar oyuncu, hayatta kalmak için eşya toplamak ve savaşmak üzere bir adaya paraşütle atlar."
    },
    url: "https://play.google.com/store/apps/details?id=com.tencent.ig"
},
{
    category: "Social Media",
    title: "Google Play - Instagram",
    description: {
        en: "A photo and video sharing social networking service owned by Meta Platforms. Allows users to upload media that can be edited with filters.",
        az: "Meta Platforms'a məxsus foto və video paylaşma sosial şəbəkə xidməti. İstifadəçilərə filtrlərlə redaktə edilə bilən media yükləməyə imkan verir.",
        tr: "Meta Platforms'a ait bir fotoğraf ve video paylaşım sosyal ağ hizmeti. Kullanıcıların filtrelerle düzenlenebilen medyaları yüklemesine olanak tanır."
    },
    url: "https://play.google.com/store/apps/details?id=com.instagram.android"
},
{
    category: "Productivity",
    title: "Google Play - Microsoft Word",
    description: {
        en: "A word processor developed by Microsoft. It is a key component of the Microsoft Office suite.",
        az: "Microsoft tərəfindən hazırlanmış söz prosessoru. Microsoft Office paketinin əsas tərkib hissəsidir.",
        tr: "Microsoft tarafından geliştirilen bir kelime işlemci. Microsoft Office paketinin temel bir bileşenidir."
    },
    url: "https://play.google.com/store/apps/details?id=com.microsoft.office.word"
},
{
    category: "Utilities",
    title: "Google Play - Google Maps",
    description: {
        en: "A web mapping service developed by Google. It offers satellite imagery, aerial photography, street maps, 360° panoramic views of streets (Street View), and real-time traffic conditions.",
        az: "Google tərəfindən hazırlanmış veb xəritəçəkmə xidməti. Peyk şəkilləri, aerofotoqrafiya, küçə xəritələri, küçələrin 360° panoramik görüntülərini (Street View) və real vaxt rejimində yol hərəkəti şəraitini təklif edir.",
        tr: "Google tarafından geliştirilen bir web haritalama hizmeti. Uydu görüntüleri, hava fotoğrafçılığı, sokak haritaları, sokakların 360° panoramik görünümlerini (Street View) ve gerçek zamanlı trafik koşullarını sunar."
    },
    url: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps"
},
{
    category: "Education",
    title: "Google Play - Duolingo",
    description: {
        en: "A language learning platform that offers short, gamified lessons to make learning new languages fun and engaging.",
        az: "Yeni dilləri öyrənməyi əyləncəli və cəlbedici etmək üçün qısa, oyunlaşdırılmış dərslər təklif edən dil öyrənmə platforması.",
        tr: "Yeni dilleri öğrenmeyi eğlenceli ve ilgi çekici hale getirmek için kısa, oyunlaştırılmış dersler sunan bir dil öğrenme platformu."
    },
    url: "https://play.google.com/store/apps/details?id=com.duolingo"
},
{
    category: "Finance",
    title: "Google Play - PayPal",
    description: {
        en: "An online payment system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.",
        az: "Onlayn pul köçürmələrini dəstəkləyən və çeklər və pul köçürmələri kimi ənənəvi kağız üsullarına elektron alternativ kimi xidmət edən onlayn ödəniş sistemi.",
        tr: "Çevrimiçi para transferlerini destekleyen ve çekler ve havaleler gibi geleneksel kağıt yöntemlerine elektronik bir alternatif olarak hizmet veren çevrimiçi ödeme sistemi."
    },
    url: "https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile"
},
{
    category: "Entertainment",
    title: "Google Play - Netflix",
    description: {
        en: "A subscription streaming service that offers a library of films and television programs, including those produced in-house.",
        az: "Öz istehsalı olanlar da daxil olmaqla, filmlər və televiziya proqramları kitabxanasını təklif edən abunə axın xidməti.",
        tr: "Kendi yapımları da dahil olmak üzere bir film ve televizyon programları kitaplığı sunan bir abonelik akış hizmeti."
    },
    url: "https://play.google.com/store/apps/details?id=com.netflix.mediaclient"
},
{
    category: "Health & Fitness",
    title: "Google Play - Strava",
    description: {
        en: "An internet service that primarily tracks and analyzes athletic activities using GPS, including running and cycling.",
        az: "Əsasən GPS istifadə edərək qaçış və velosiped idmanları daxil olmaqla atletik fəaliyyətləri izləyən və təhlil edən internet xidməti.",
        tr: "Öncelikle GPS kullanarak koşu ve bisiklet dahil olmak üzere atletik aktiviteleri izleyen ve analiz eden bir internet hizmeti."
    },
    url: "https://play.google.com/store/apps/details?id=com.strava"
},
{
    category: "Shopping",
    title: "Google Play - Amazon Shopping",
    description: {
        en: "The mobile application for Amazon's e-commerce platform, allowing users to browse, search, and purchase products online.",
        az: "Amazon-un e-ticarət platforması üçün mobil tətbiq, istifadəçilərə məhsulları onlayn gözdən keçirməyə, axtarmağa və almağa imkan verir.",
        tr: "Amazon'un e-ticaret platformu için mobil uygulama, kullanıcıların ürünleri çevrimiçi olarak göz atmasına, aramasına ve satın almasına olanak tanır."
    },
    url: "https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping"
},
{
    category: "Communication",
    title: "Google Play - Telegram",
    description: {
        en: "A cloud-based instant messaging service. It also provides end-to-end encrypted video calling, VoIP, and file sharing.",
        az: "Bulud əsaslı ani mesajlaşma xidməti. Həmçinin ucdan-uca şifrələnmiş video zənglər, VoIP və fayl paylaşımı təmin edir.",
        tr: "Bulut tabanlı bir anlık mesajlaşma hizmeti. Ayrıca uçtan uca şifrelenmiş görüntülü arama, VoIP ve dosya paylaşımı da sağlar."
    },
    url: "https://play.google.com/store/apps/details?id=org.telegram.messenger"
},
{
    category: "Gaming",
    title: "Google Play - Candy Crush Saga",
    description: {
        en: "A free-to-play match-three puzzle video game released by King. Players complete levels by swapping colored candies on a game board to make a match of three or more.",
        az: "King tərəfindən buraxılmış pulsuz oynana bilən 'üçünü birləşdir' tapmaca video oyunu. Oyunçular oyun lövhəsindəki rəngli konfetləri dəyişdirərək üç və ya daha çoxunu uyğunlaşdıraraq səviyyələri tamamlayırlar.",
        tr: "King tarafından yayınlanan, oynaması ücretsiz bir üçlü eşleştirme bulmaca video oyunu. Oyuncular, oyun tahtasındaki renkli şekerleri değiştirerek üç veya daha fazlasını eşleştirerek seviyeleri tamamlarlar."
    },
    url: "https://play.google.com/store/apps/details?id=com.king.candycrushsaga"
},
{
    category: "Utilities",
    title: "Google Play - Adobe Acrobat Reader",
    description: {
        en: "The standard application for viewing, printing, and annotating PDF files. Developed by Adobe Systems.",
        az: "PDF fayllarını gözdən keçirmək, çap etmək və annotasiya etmək üçün standart proqram. Adobe Systems tərəfindən hazırlanmışdır.",
        tr: "PDF dosyalarını görüntülemek, yazdırmak ve not eklemek için standart uygulama. Adobe Systems tarafından geliştirilmiştir."
    },
    url: "https://play.google.com/store/apps/details?id=com.adobe.reader"
},
{
    category: "News",
    title: "Google Play - BBC News",
    description: {
        en: "The official app from the BBC for news coverage from around the world. It provides personalized news feeds and live video streaming.",
        az: "Dünya xəbərlərinin işıqlandırılması üçün BBC-dən rəsmi tətbiq. Fərdiləşdirilmiş xəbər lentləri və canlı video axını təmin edir.",
        tr: "Dünyanın dört bir yanından haberler için BBC'nin resmi uygulaması. Kişiselleştirilmiş haber akışları ve canlı video akışı sağlar."
    },
    url: "https://play.google.com/store/apps/details?id=bbc.mobile.news.ww"
},
{
    category: "Music",
    title: "Google Play - Spotify",
    description: {
        en: "A Swedish audio streaming and media services provider. It is the largest music streaming service in the world.",
        az: "İsveç audio axını və media xidmətləri təminatçısı. Dünyanın ən böyük musiqi axını xidmətidir.",
        tr: "İsveçli bir ses akışı ve medya hizmetleri sağlayıcısı. Dünyanın en büyük müzik akışı hizmetidir."
    },
    url: "https://play.google.com/store/apps/details?id=com.spotify.music"
},
{
    category: "Education",
    title: "Google Play - TED",
    description: {
        en: "The official app for TED Talks, offering inspiring speeches and lectures from experts on technology, entertainment, and design.",
        az: "Texnologiya, əyləncə və dizayn mövzularında mütəxəssislərin ilhamverici çıxışları və mühazirələrini təklif edən TED danışıqları üçün rəsmi tətbiq.",
        tr: "Teknoloji, eğlence ve tasarım konularında uzmanlardan ilham verici konuşmalar ve dersler sunan TED Konuşmaları için resmi uygulama."
    },
    url: "https://play.google.com/store/apps/details?id=com.ted.android.ted"
},
{
    category: "Health & Fitness",
    title: "Google Play - Calm",
    description: {
        en: "A popular mindfulness and meditation app. It includes guided meditations, sleep stories, breathing programs, and relaxing music.",
        az: "Populyar şüurluluq və meditasiya tətbiqi. Rəhbərli meditasiyalar, yuxu hekayələri, nəfəs proqramları və rahatlaşdırıcı musiqi daxildir.",
        tr: "Popüler bir farkındalık ve meditasyon uygulaması. Rehberli meditasyonlar, uyku hikayeleri, nefes programları ve rahatlatıcı müzik içerir."
    },
    url: "https://play.google.com/store/apps/details?id=com.calm.android"
},
{
    category: "Photography",
    title: "Google Play - Snapseed",
    description: {
        en: "A professional photo editor developed by Google. It offers a wide range of tools for tuning, cropping, and perfecting photos.",
        az: "Google tərəfindən hazırlanmış peşəkar foto redaktoru. Şəkilləri tənzimləmək, kəsmək və mükəmməlləşdirmək üçün geniş alətlər təklif edir.",
        tr: "Google tarafından geliştirilen profesyonel bir fotoğraf düzenleyici. Fotoğrafları ayarlamak, kırpmak ve mükemmelleştirmek için geniş bir araç yelpazesi sunar."
    },
    url: "https://play.google.com/store/apps/details?id=com.niksoftware.snapseed"
},
{
    category: "Social Media",
    title: "Google Play - TikTok",
    description: {
        en: "A short-form video hosting service owned by the Chinese company ByteDance. It hosts a variety of short-form user videos, from genres like dance, comedy, and education.",
        az: "Çin şirkəti ByteDance-ə məxsus qısa formalı video hostinq xidməti. Rəqs, komediya və təhsil kimi janrlardan müxtəlif qısa formalı istifadəçi videolarını yerləşdirir.",
        tr: "Çin şirketi ByteDance'a ait kısa biçimli bir video barındırma hizmeti. Dans, komedi ve eğitim gibi türlerden çeşitli kısa biçimli kullanıcı videolarına ev sahipliği yapar."
    },
    url: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically"
},
{
    category: "Productivity",
    title: "Google Play - Zoom",
    description: {
        en: "A proprietary video telephony software program developed by Zoom Video Communications. It is used for teleconferencing, telecommuting, and distance education.",
        az: "Zoom Video Communications tərəfindən hazırlanmış xüsusi video telefon proqramı. Telekomfrans, tele-iş və distant təhsil üçün istifadə olunur.",
        tr: "Zoom Video Communications tarafından geliştirilen tescilli bir video telefon yazılım programı. Telekonferans, tele çalışma ve uzaktan eğitim için kullanılır."
    },
    url: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
},
{
    category: "Finance",
    title: "Google Play - Revolut",
    description: {
        en: "A financial technology company that offers banking services, including a prepaid debit card, currency exchange, cryptocurrency exchange, and peer-to-peer payments.",
        az: "Əvvəlcədən ödənilmiş debet kartı, valyuta mübadiləsi, kriptovalyuta mübadiləsi və peer-to-peer ödənişləri daxil olmaqla bank xidmətləri təklif edən maliyyə texnologiyası şirkəti.",
        tr: "Ön ödemeli banka kartı, döviz bozdurma, kripto para birimi değişimi ve eşler arası ödemeler dahil olmak üzere bankacılık hizmetleri sunan bir finansal teknoloji şirketi."
    },
    url: "https://play.google.com/store/apps/details?id=com.revolut.revolut"
},
{
    category: "Gaming",
    title: "Google Play - Clash of Clans",
    description: {
        en: "A free-to-play mobile strategy video game developed and published by Supercell. Players build a community, train troops, and attack other players to earn resources.",
        az: "Supercell tərəfindən hazırlanmış və nəşr edilmiş pulsuz oynana bilən mobil strategiya video oyunu. Oyunçular resurs qazanmaq üçün icma qurur, qoşun hazırlayır və digər oyunçulara hücum edirlər.",
        tr: "Supercell tarafından geliştirilen ve yayınlanan, oynaması ücretsiz bir mobil strateji video oyunu. Oyuncular kaynak kazanmak için bir topluluk inşa eder, birlikleri eğitir ve diğer oyunculara saldırır."
    },
    url: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans"
},
{
    category: "Utilities",
    title: "Google Play - Google Drive",
    description: {
        en: "A file storage and synchronization service developed by Google. It allows users to store files in the cloud, synchronize files across devices, and share files.",
        az: "Google tərəfindən hazırlanmış fayl saxlama və sinxronizasiya xidməti. İstifadəçilərə faylları buludda saxlamağa, cihazlar arasında sinxronlaşdırmağa və faylları paylaşmağa imkan verir.",
        tr: "Google tarafından geliştirilen bir dosya depolama ve senkronizasyon hizmeti. Kullanıcıların dosyaları bulutta depolamasına, cihazlar arasında senkronize etmesine ve dosyaları paylaşmasına olanak tanır."
    },
    url: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs"
},
{
    category: "News",
    title: "Google Play - The New York Times",
    description: {
        en: "The mobile application for one of the most prominent newspapers in the world, providing in-depth news, opinion, and analysis.",
        az: "Dünyanın ən görkəmli qəzetlərindən biri üçün mobil tətbiq, ətraflı xəbərlər, rəy və təhlillər təqdim edir.",
        tr: "Dünyanın en önde gelen gazetelerinden biri için mobil uygulama, derinlemesine haberler, görüşler ve analizler sunar."
    },
    url: "https://play.google.com/store/apps/details?id=com.nytimes.android"
},
{
    category: "Music",
    title: "Google Play - YouTube Music",
    description: {
        en: "A music streaming service developed by YouTube. It provides a tailored interface for the service oriented toward music streaming, allowing users to browse songs and music videos on YouTube.",
        az: "YouTube tərəfindən hazırlanmış musiqi axını xidməti. O, YouTube-da mahnılara və musiqi videolarına baxmağa imkan verən musiqi axınına yönəlmiş xidmət üçün xüsusi interfeys təmin edir.",
        tr: "YouTube tarafından geliştirilen bir müzik akışı hizmeti. Kullanıcıların YouTube'daki şarkılara ve müzik videolarına göz atmasına olanak tanıyan, müzik akışına yönelik özel bir arayüz sağlar."
    },
    url: "https://play.google.com/store/apps/details?id=com.google.android.apps.youtube.music"
},
{
    category: "Education",
    title: "Google Play - Coursera",
    description: {
        en: "An online learning platform that offers massive open online courses (MOOCs), specializations, and degrees from universities and companies.",
        az: "Universitetlər və şirkətlərdən kütləvi açıq onlayn kurslar (MOOCs), ixtisaslaşmalar və dərəcələr təklif edən onlayn öyrənmə platforması.",
        tr: "Üniversitelerden ve şirketlerden kitlesel açık çevrimiçi kurslar (MOOC'lar), uzmanlıklar ve dereceler sunan bir çevrimiçi öğrenme platformu."
    },
    url: "https://play.google.com/store/apps/details?id=org.coursera.android"
},
{
    category: "Health & Fitness",
    title: "Google Play - Google Fit",
    description: {
        en: "A health tracking platform developed by Google for the Android operating system. It provides users with a complete record of their fitness activities.",
        az: "Android əməliyyat sistemi üçün Google tərəfindən hazırlanmış sağlamlıq izləmə platforması. İstifadəçilərə fitnes fəaliyyətlərinin tam qeydini təqdim edir.",
        tr: "Android işletim sistemi için Google tarafından geliştirilen bir sağlık izleme platformu. Kullanıcılara fitness aktivitelerinin tam bir kaydını sunar."
    },
    url: "https://play.google.com/store/apps/details?id=com.google.android.apps.fitness"
},
{
    category: "Photography",
    title: "Google Play - VSCO",
    description: {
        en: "A photography mobile app for iOS and Android devices. The app allows users to capture photos, edit them with preset filters, and share them on a community platform.",
        az: "iOS və Android cihazları üçün fotoqrafiya mobil tətbiqi. Tətbiq istifadəçilərə fotoşəkillər çəkməyə, onları əvvəlcədən təyin edilmiş filtrlərlə redaktə etməyə və bir icma platformasında paylaşmağa imkan verir.",
        tr: "iOS ve Android cihazlar için bir fotoğrafçılık mobil uygulaması. Uygulama, kullanıcıların fotoğraf çekmesine, önceden ayarlanmış filtrelerle düzenlemesine ve bunları bir topluluk platformunda paylaşmasına olanak tanır."
    },
    url: "https://play.google.com/store/apps/details?id=com.vsco.cam"
},
{
    category: "Social Media",
    title: "Google Play - Pinterest",
    description: {
        en: "A social media service designed to enable saving and discovery of information on the World Wide Web using images and, on a smaller scale, animated GIFs and videos.",
        az: "Şəkillər və daha kiçik miqyasda animasiyalı GIF-lər və videolar istifadə edərək Dünya Çapında Veb-də məlumatların saxlanmasını və kəşf edilməsini təmin etmək üçün nəzərdə tutulmuş sosial media xidməti.",
        tr: "Görüntüler ve daha küçük ölçekte hareketli GIF'ler ve videolar kullanarak World Wide Web'deki bilgileri kaydetmeyi ve keşfetmeyi sağlamak için tasarlanmış bir sosyal medya hizmeti."
    },
    url: "https://play.google.com/store/apps/details?id=com.pinterest"
},
{
    category: "Productivity",
    title: "Google Play - Evernote",
    description: {
        en: "An app designed for note-taking, organizing, task management, and archiving. It allows the creation of notes in various formats, including text, drawings, photographs, audio, or saved web content.",
        az: "Qeyd götürmə, təşkil etmə, tapşırıqların idarə edilməsi və arxivləşdirmə üçün nəzərdə tutulmuş proqram. Mətn, rəsmlər, fotoşəkillər, audio və ya saxlanmış veb məzmunu daxil olmaqla müxtəlif formatlarda qeydlər yaratmağa imkan verir.",
        tr: "Not alma, düzenleme, görev yönetimi ve arşivleme için tasarlanmış bir uygulama. Metin, çizimler, fotoğraflar, ses veya kaydedilmiş web içeriği dahil olmak üzere çeşitli formatlarda notlar oluşturmaya olanak tanır."
    },
    url: "https://play.google.com/store/apps/details?id=com.evernote"
},
{
    category: "Finance",
    title: "Google Play - XE Currency",
    description: {
        en: "A popular mobile application for currency conversion and foreign exchange rate information. It offers live exchange rates and charts.",
        az: "Valyuta çevrilməsi və xarici valyuta məzənnəsi məlumatları üçün populyar mobil tətbiq. Canlı məzənnələr və qrafiklər təklif edir.",
        tr: "Döviz çevirme ve döviz kuru bilgileri için popüler bir mobil uygulama. Canlı döviz kurları ve grafikler sunar."
    },
    url: "https://play.google.com/store/apps/details?id=com.xe.android"
    },
    {
    category: "Programming",
    title: "Youtube - Kodla",
    description: {
        en: "A YouTube channel that produces videos about software and software development. Keywords: kodla youtube, kodla youtube, kodla, software",
        az: "YouTube-da proqram təminatı və proqram təminatının inkişafı haqqında videolar hazırlayan kanal. Açar sözlər: kodla youtube, kodla Youtube, kodla, proqram təminatı",
        tr: "youtube de yazılım ve yazılım geliştirme hakkında videolar yapan kanal  anahtar kelimeler: kodla youtube , Kodla Youtube , Kodla , yazılım" 
  },
  url: "https://www.youtube.com/@Kodla_dev"
},
{
    category: "Programming",
    title: "Discord - Kodla",
    description: {
        en: "A YouTube channel that produces videos about software and software development. Keywords: kodla youtube, kodla youtube, kodla, software",
        az: "YouTube-da proqram təminatı və proqram təminatının inkişafı haqqında videolar hazırlayan kanal. Açar sözlər: kodla youtube, kodla Youtube, kodla, proqram təminatı",
        tr: "youtube de yazılım ve yazılım geliştirme hakkında videolar yapan kanal  anahtar kelimeler: kodla youtube , Kodla Youtube , Kodla , yazılım" 
  },
  url: "https://discord.gg/vvYfGjxMHB"
}, 
{
    category: "Programming",
    title: "Github - Kodla",
    description: {
        en: "A YouTube channel that produces videos about software and software development. Keywords: kodla youtube, kodla youtube, kodla, software",
        az: "YouTube-da proqram təminatı və proqram təminatının inkişafı haqqında videolar hazırlayan kanal. Açar sözlər: kodla youtube, kodla Youtube, kodla, proqram təminatı",
        tr: "youtube de yazılım ve yazılım geliştirme hakkında videolar yapan kanal  anahtar kelimeler: kodla youtube , Kodla Youtube , Kodla , yazılım" 
  },
  url: "https://github.com/Kodla-devs"
  
},

    ];

    let currentLang = "en"; 

   
    function updateUI(lang) {
        const t = translations[lang];

        document.getElementById('search').placeholder = t.searchPlaceholder;
        document.getElementById('addCookieBtn').textContent = t.addCookie;
        document.getElementById('settingsBtn').textContent = t.settings;
        document.getElementById('newsBtn').textContent = t.news;

      
        createCategories(lang);

      
        const currentQuery = document.getElementById('search').value.toLowerCase().trim();
        searchSites(currentQuery, '', lang);
    }

    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang; 
        updateUI(lang);
    }

    
    function searchSites(query, category = '', lang = currentLang) {
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';

      let filteredSites = [];
      if (category) {
        filteredSites = sites.filter(site => site.category.toLowerCase() === category.toLowerCase());
      } else {
        filteredSites = sites.filter(site => 
          site.title.toLowerCase().includes(query) || 
          (site.description[lang] || site.description.en).toLowerCase().includes(query) || // Search in selected lang description or English fallback
          (translations[lang].categories[site.category] || site.category).toLowerCase().includes(query) // Search in translated category name or original
        );
      }

      if (filteredSites.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align: center; margin-top: 30px; color: var(--text-color);">${translations[lang].noResults}</p>`;
        return;
      }

      filteredSites.forEach(site => {
        const card = document.createElement('div');
        card.className = 'site-card';
        card.innerHTML = `
          <h2>${site.title}</h2>
          <p>${site.description[lang] || site.description.en}</p> <a href="${site.url}" target="_blank">open</a>
        `;
        resultsContainer.appendChild(card);
      });
    }

    function handleSearchInput(event) {
      const searchInput = document.getElementById('search');
      const query = searchInput.value.toLowerCase().trim();
      
      searchSites(query, '', currentLang); 

      if (event.key === 'ENTER' && query) {
        window.open(`https://contextsearch.pages.dev?q=${encodeURIComponent(query)}`, '_blank'); 
        window.open(`https://contextsearch.pages.dev?q=${encodeURIComponent(query)}`, '_blank');
        
        const newUrl = new URL(window.location.origin + window.location.pathname);
        newUrl.searchParams.set('q', encodeURIComponent(searchInput.value.trim()));
        window.history.pushState({ path: newUrl.href }, '', newUrl.href);
      } else if (event.key !== 'Enter') {
          if (query === '' && window.location.search.includes('?q=')) {
              const newUrl = new URL(window.location.origin + window.location.pathname);
              window.history.pushState({ path: newUrl.href }, '', newUrl.href);
          } else if (query !== '') {
              const newUrl = new URL(window.location.origin + window.location.pathname);
              newUrl.searchParams.set('q', encodeURIComponent(searchInput.value.trim()));
              window.history.replaceState({ path: newUrl.href }, '', newUrl.href); 
          }
      }
    }

   
    function searchByCategory(categoryOriginalName) { 
      document.getElementById('search').value = '';
      searchSites('', categoryOriginalName, currentLang); 

      const newUrl = new URL(window.location.origin + window.location.pathname);
      window.history.pushState({ path: newUrl.href }, '', newUrl.href);
    }

    
    function createCategories(lang = currentLang) {
        const categoriesContainer = document.getElementById('siteCategories');
        categoriesContainer.innerHTML = ''; 
        const uniqueCategoriesOriginal = [...new Set(sites.map(site => site.category))]; 

        uniqueCategoriesOriginal.forEach(categoryOriginalName => {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'category-item';
            categoryItem.textContent = translations[lang].categories[categoryOriginalName] || categoryOriginalName;
            categoryItem.onclick = () => searchByCategory(categoryOriginalName);
            categoriesContainer.appendChild(categoryItem);
        });
    }

    function toggleTheme() {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      // Apply saved theme
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
      }

      const savedLang = localStorage.getItem('language') || 'en';
      document.getElementById('language-select').value = savedLang;
      setLanguage(savedLang); 

      
      const urlParams = new URLSearchParams(window.location.search);
      const queryFromUrl = urlParams.get('q');

      if (queryFromUrl) {
        const searchInput = document.getElementById('search');
        searchInput.value = decodeURIComponent(queryFromUrl);
        searchSites(queryFromUrl, '', currentLang); 
      } else {
        displaySites(sites.map(site => ({ 
            ...site,
            description: site.description[currentLang] || site.description.en 
        })));
      }
    });
    window.addEventListener('popstate', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryFromUrl = urlParams.get('q');
        const searchInput = document.getElementById('search');

        if (queryFromUrl) {
            searchInput.value = decodeURIComponent(queryFromUrl);
            searchSites(queryFromUrl, '', currentLang);
        } else {
            searchInput.value = '';
            displaySites(sites.map(site => ({ 
                ...site,
                description: site.description[currentLang] || site.description.en 
            })));
        }

    });