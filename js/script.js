document.addEventListener('DOMContentLoaded', () => {

    // --- Language Switching Logic ---

    const translations = {
        // --- English (en) ---
        en: {
            // Meta
            page_title: "A Home Where You're the Main Character",
            // Header
            site_title_short: "Lisi Homes",
            // Hero
            hero_title: "Discover Lisi Homes",
            hero_subtitle: "A Home Where You're the Main Character",
           hero_button: "Download Brochure",
            // About
            about_title: "Welcome Home",
            about_intro: "A Home That Doesn't Try to Impress (But Effortlessly Does)",
            about_detail_1: "This home doesn't need to shout about its status—its perfection lies in the details. Clean lines, natural materials, and expansive windows create a space where every moment is meant to be savored. The architecture isn't here to persuade; it simply performs its function beautifully: ushering in light, framing the views, and cultivating a sense of open space.",
            about_detail_2: "This is a choice for those who value substance over show, who recognize the true worth of meticulous detail. A home like this speaks for itself. All it needs is you.",
            // Gallery Titles
            gallery_overview_title: "Home Overview",
            gallery_parking_title: "Parking Area",
            gallery_backyard_title: "Courtyard",
            gallery_interior_title: "Interior Design",
            gallery_plans_title: "Floor Plans",
            // Features
            features_title: "Key Features & Amenities",
            features_intro: "A home designed with you at its heart. And that's not just a claim. Every element, from the intuitive bathroom layouts to the precise height of each step, has been thoughtfully crafted for your comfort.",
            feature_1_title: "Timeless Architectural & Design Solutions",
            feature_1_desc: "Comfortable, stylish, or energy-efficient? Why choose? The principles of modernism and rationalism in architecture are timeless. Established nearly a century ago, their core tenets remain profoundly relevant, especially when they prioritize human experience over abstract ideas.",
            feature_2_title: "Your Personal Ecosystem",
            feature_2_desc: "Forget fences. Here, your gaze is free to wander, taking in your home and the lush greenery that surrounds it. Our landscape designers have carefully selected Thuja varieties to create a natural screen, ensuring your privacy. Minimum upkeep, maximum immersion in nature.",
            feature_3_title: "Tailored Individual Design",
            feature_3_desc: "While we offer thoughtfully curated interior design solutions, we believe true beauty lies in individual expression. That's why you're empowered to customize the existing design project or envision something entirely new from the ground up.",
            feature_4_title: "Premium Location",
            feature_4_desc: "Experience the perfect blend of urban convenience and countryside tranquility. Enjoy spacious living, your own private land, the serenity of nature, all with seamless access to city life.",
            // Location
            location_title: "Premium Location",
            location_intro: "Ideally positioned for every lifestyle.",
            location_desc: "A mere 10–15 minute drive brings you to the mall or the beach. And in just 30 minutes, you can be in the vibrant heart of the city – Freedom Square!",
            // CTA
            cta_title: "Ready to Discover More?",
            cta_desc: "Download our comprehensive brochure to delve into floor plans, pricing, and all the details of this exceptional project.",
            cta_button: "Download Brochure Now",
            // Footer
            footer_text: "© 2024 Lisi Homes. All Rights Reserved."
        },
        // --- Georgian (ka) ---
        ka: {
            // Meta
            page_title: "სახლი, სადაც მთავარი თქვენ ხართ.",
            // Header
            site_title_short: "Lisi Homes",
            // Hero
            hero_title: "აღმოაჩინეთ Lisi Homes",
            hero_subtitle: "სახლი, სადაც მთავარი თქვენ ხართ.",
            hero_button: "ბროშურის გადმოწერა",
            // About
            about_title: "კეთილი იყოს თქვენი მობრძანება სახლში",
            about_intro: "სახლი, რომელიც არ ცდილობს თქვენზე შთაბეჭდილების მოხდენას (მაგრამ მაინც ახერხებს ამას)",
            about_detail_1: "სახლი არ ყვირის თავის სტატუსზე — ის უბრალოდ იდეალურია დეტალებში. ლაკონიური ხაზები, ბუნებრივი მასალები და დიდი ფანჯრები ქმნიან სივრცეს, სადაც მომენტით ტკბობა გინდება. აქ არქიტექტურა არ ცდილობს თქვენს დარწმუნებას, ის უბრალოდ თავის საქმეს აკეთებს: უშვებს სინათლეს, ხსნის ხედს და გაძლევთ სივრცის შეგრძნებას.",
            about_detail_2: "ეს არის არჩევანი მათთვის, ვინც აფასებს არსს და იცის დეტალების ფასი. ასეთი სახლი სიტყვებს არ საჭიროებს. მხოლოდ თქვენს მობრძანებას.",
             // Gallery Titles
            gallery_overview_title: "სახლის მიმოხილვა",
            gallery_parking_title: "საპარკინგე ზონა",
            gallery_backyard_title: "შიდა ეზო",
            gallery_interior_title: "ინტერიერის დიზაინი",
            gallery_plans_title: "სართულების გეგმარება",
            // Features
            features_title: "ძირითადი მახასიათებლები და კეთილმოწყობა",
            features_intro: "სახლი, სადაც თქვენზე იზრუნეს. ეს ცარიელი სიტყვები არ არის. ყველაფერი, სველი წერტილების განლაგებიდან დაწყებული კიბეების საფეხურების სიმაღლით დამთავრებული, მომავალი მობინადრეების კომფორტისთვის არის შემუშავებული.",
            feature_1_title: "თანამედროვე არქიტექტურული და დიზაინერული გადაწყვეტილებები",
            feature_1_desc: "კომფორტული, სტილური თუ ენერგოეფექტური? არჩევანის გაკეთება არ გჭირდებათ. მოდერნიზმი და რაციონალიზმი არქიტექტურაში სულაც არ დაძველებულა. თითქმის 100 წლის წინ ჩაყრილი საფუძვლები კვლავ აქტუალურია, განსაკუთრებით მაშინ, თუ ცენტრში იდეა კი არა, ადამიანი დგას.",
            feature_2_title: "საკუთარი ეკოსისტემა",
            feature_2_desc: "დაივიწყეთ ღობეები, თქვენი მზერა მხოლოდ საკუთარი სახლითა და გარშემო არსებული სიმწვანით ტკბება. ლანდშაფტის დიზაინერებმა შეარჩიეს ტუიას იდეალურად შესაფერისი ჯიშები თქვენი პრივატულობის უზრუნველსაყოფად. მინიმალური საზრუნავი, მაქსიმალური ბუნება.",
            feature_3_title: "გააზრებული ინდივიდუალური დიზაინი",
            feature_3_desc: "ჩვენ გთავაზობთ ინტერიერის მზა დიზაინერულ გადაწყვეტილებებს. მაგრამ გვესმის, რომ ინდივიდუალობაზე უკეთესი არაფერია. ამიტომ, თქვენ უფლება გაქვთ შეიტანოთ ნებისმიერი ცვლილება დიზაინ-პროექტში ან თავიდან შეიმუშაოთ იგი.",
            feature_4_title: "პრემიუმ კლასის მდებარეობა",
            feature_4_desc: "შეუთავსეთ ქალაქური და ქალაქგარე ცხოვრების საუკეთესო მხარეები. ფართო საცხოვრებელი, საკუთარი მიწა, ბუნებასთან განმარტოება და მუდმივი კავშირი ქალაქურ ცხოვრებასთან.",
            // Location
            location_title: "პრემიუმ კლასის მდებარეობა",
            location_intro: "იდეალურად განლაგებული ნებისმიერი ცხოვრების წესისთვის.",
            location_desc: "მანქანით სულ რაღაც 10-15 წუთი — და თქვენ უკვე სავაჭრო ცენტრში ან პლაჟზე ხართ. ხოლო 30 წუთში ქალაქის გულში — თავისუფლების მოედანზე აღმოჩნდებით!",
            // CTA
            cta_title: "მზად ხართ მეტი გაიგოთ?",
            cta_desc: "ჩამოტვირთეთ ჩვენი დეტალური ბროშურა, რათა გაეცნოთ სართულების გეგმებს, ფასებს და პროექტის სრულ ინფორმაციას.",
            cta_button: "ბროშურის გადმოწერა ახლავე",
            // Footer
            footer_text: "© 2024 Lisi Homes. ყველა უფლება დაცულია."
        },
        // --- Russian (ru) ---
        ru: {
             // Meta
            page_title: "Lisi Homes - Эксклюзивная Жизнь",
            // Header
            site_title_short: "Lisi Homes",
            // Hero
            hero_title: "Откройте для себя Lisi Homes",
            hero_subtitle: "Дом, в котором главное — вы.",
            hero_button: "Скачать брошюру",
            // About
            about_title: "Добро пожаловать домой",
            about_intro: "Дом, который не пытается вас впечатлить (но всё равно это делает)",
            about_detail_1: "Дом не кричит о своём статусе — он просто идеален в мелочах. Лаконичные линии, натуральные материалы и большие окна создают пространство, где хочется наслаждаться моментом. Архитектура здесь не пытается вас убедить, она просто делает свою работу: впускает свет, открывает вид и даёт ощущение простора.",
            about_detail_2: "Это выбор тех, кто ценит суть и знает цену деталям. Такой дом не требует слов. Только вашего присутствия.",
             // Gallery Titles
            gallery_overview_title: "Обзор дома",
            gallery_parking_title: "Парковочная зона",
            gallery_backyard_title: "Внутренний дворик",
            gallery_interior_title: "Дизайн интерьера",
            gallery_plans_title: "Планировки этажей",
            // Features
            features_title: "Ключевые особенности и удобства",
            features_intro: "Дом, в котором о вас позаботились. Это не пустые слова. Всё, начиная с расположения санузлов и заканчивая высотой ступеней лестниц, разработано для комфорта будущих жильцов.",
            feature_1_title: "Современные архитектурные и дизайнерские решения",
            feature_1_desc: "Удобный, стильный или энергоэффективный? Вам не нужно выбирать. Модернизм и рационализм в архитектуре нисколько не устарели. Основы, заложенные практически 100 лет назад, всё ещё актуальны, особенно если ставят в центре не идею, но человека.",
            feature_2_title: "Своя экосистема",
            feature_2_desc: "Забудьте о заборах, ваш взгляд наслаждается только своим домом и окружающей вас зеленью. Ландшафтные дизайнеры подобрали идеально подходящие сорта туи для обеспечения вашей приватности. Минимум забот, максимум природы.",
            feature_3_title: "Продуманный индивидуальный дизайн",
            feature_3_desc: "Мы предлагаем готовые дизайнерские решения интерьера. Но мы понимаем, что нет ничего прекраснее индивидуальности. Поэтому вы вправе внести любые изменения в дизайн-проект или переработать его с нуля.",
            feature_4_title: "Премиальное расположение",
            feature_4_desc: "Совместите лучшее из городского и загородного образа жизни. Просторное жилье, своя земля, уединение с природой и постоянный контакт с городской жизнью.",
            // Location
            location_title: "Премиальное расположение",
            location_intro: "Идеально расположен для любого образа жизни.",
            location_desc: "Всего 10–15 минут на машине — и вы уже в торговом центре или на пляже. А через 30 минут вы в самом сердце города — на площади Свободы!",
            // CTA
            cta_title: "Готовы узнать больше?",
            cta_desc: "Загрузите нашу подробную брошюру, чтобы ознакомиться с планами этажей, ценами и полной информацией о проекте.",
            cta_button: "Скачать брошюру сейчас",
            // Footer
            footer_text: "© 2024 Lisi Homes. Все права защищены."
        }
    };

    const languageButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    const htmlElement = document.documentElement; // Target the <html> tag

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found in translations.`);
            return;
        }

        // Update text content
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                 // Use innerHTML for keys that might contain HTML like the footer
                 if (key === 'footer_text') {
                     element.innerHTML = translations[lang][key];
                 } else {
                     element.textContent = translations[lang][key];
                 }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}".`);
            }
        });

         // Update page title
        if (translations[lang]['page_title']) {
            document.title = translations[lang]['page_title'];
        }

        // Update html lang attribute
        htmlElement.setAttribute('lang', lang);

        // Update active button state
        languageButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Store preference
        localStorage.setItem('preferredLanguage', lang);
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');            
            setLanguage(lang);
        });
    });

    // Set initial language on load
    const savedLang = localStorage.getItem('preferredLanguage');
    // Check browser language as a fallback, default to 'en'
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (translations[browserLang] ? browserLang : 'en');
    setLanguage(initialLang);


    // --- Swiper Slider Initialization ---

    // Common options for all Swiper instances
    const commonSwiperOptions = {
        loop: true, // Enable continuous loop mode
        autoplay: {
          delay: 4000, // Delay between transitions (in ms)
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
          pauseOnMouseEnter: true, // Pause autoplay when mouse enters the slider
        },
        pagination: {
          el: '.swiper-pagination', // CSS selector for pagination container
          clickable: true, // Allow clicking on pagination bullets to navigate
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      };
  
      // Options specific to the overview Swiper
      const swiperOverviewOptions = {
        ...commonSwiperOptions
      };
      
      // Options specific to the parking Swiper
      const swiperParkingOptions = {
        ...commonSwiperOptions
      };
      
      // Options specific to the backyard Swiper
      const swiperBackyardOptions = {
        ...commonSwiperOptions
      };
      
      // Options specific to the interior Swiper
      const swiperInteriorOptions = {
        ...commonSwiperOptions
      };
      
      // Options specific to the plans Swiper
      const swiperPlansOptions = {
        ...commonSwiperOptions
      };

    // Initialize each Swiper instance
    try {
        const swiperOverview = new Swiper('#swiper-overview', swiperOverviewOptions);
        const swiperParking = new Swiper('#swiper-parking', swiperParkingOptions);
        const swiperBackyard = new Swiper('#swiper-backyard', swiperBackyardOptions);
        const swiperInterior = new Swiper('#swiper-interior', swiperInteriorOptions);
        const swiperPlans = new Swiper('#swiper-plans', swiperPlansOptions);
    } catch (error) {
        console.error("Swiper initialization failed: ", error);
        // Display a message to the user?
    }


    // --- Smooth Scroll for anchor links (Keep as is) ---
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                // Adjust for fixed header height
                const headerOffset = 60; // Height of your fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- REMOVED Lightbox Functionality ---

});