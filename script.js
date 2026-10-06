const products = [
  { id: 1, name: '智能清洁机器人', nameEn: 'Smart Cleaning Robot', nameAr: 'روبوت التنظيف الذكي', category: 'home', price: 249, originalPrice: 299, rating: 4.9, reviews: 2450, stock: 15, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80', badge: '热卖', badgeEn: 'Best', badgeAr: 'الأكثر مبيعًا', desc: '适合阿拉伯家庭的高效清洁方案，智能避障，低噪音，支持无线清扫与自动回充。', descEn: 'Efficient cleaning solution for Arabic households with smart obstacle avoidance, low noise, and automatic docking.', descAr: 'حل تنظيف فعال للمنازل العربية مع تجنب العوائق الذكي، وصوت منخفض، وشحن تلقائي.', features: ['智能避障','低噪音设计','自动回充','支持APP控制'], featuresEn: ['Smart obstacle avoidance','Low-noise design','Auto recharge','App control'], featuresAr: ['تجنب العوائق الذكي','تصميم منخفض الضجيج','شحن تلقائي','تحكم عبر التطبيق'] },
  { id: 2, name: '高保湿修护霜', nameEn: 'Hydrating Repair Cream', nameAr: 'كريم ترطيب ومُصلح', category: 'beauty', price: 39, originalPrice: 49, rating: 4.8, reviews: 1820, stock: 120, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80', badge: 'Top', badgeEn: 'Top', badgeAr: 'الأعلى', desc: '针对干燥天气设计，深层保湿，改善皮肤屏障，适合中东地区气候环境。', descEn: 'Designed for dry weather, deeply hydrates and restores the skin barrier for Middle Eastern climates.', descAr: 'مصمم لمناخ جاف، يملأ الرطوبة بعمق ويُصلح حاجز البشرة مناسبًا للمناخ في الشرق الأوسط.', features: ['保湿修护','多重维他命配方','敏感肌适用','轻盈不油腻'], featuresEn: ['Deep hydration','Vitamin-rich formula','Suitable for sensitive skin','Lightweight'], featuresAr: ['ترطيب عميق','صيغة غنية بالفيتامينات','ملائمة للبشرة الحساسة','خفيفة وغير دهنية'] },
  { id: 3, name: '电动搅拌机', nameEn: 'Electric Blender', nameAr: 'خلاط كهربائي', category: 'kitchen', price: 89, originalPrice: 119, rating: 4.7, reviews: 980, stock: 8, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80', badge: '新款', badgeEn: 'New', badgeAr: 'جديد', desc: '小型家用厨房神器，便携、高效率，适合日常烹饪和快速调制。', descEn: 'Compact kitchen helper, portable and efficient for daily cooking and quick mixing.', descAr: 'مساعد مطبخ صغير ومريح، محمول وكفء لطبخ اليومي والخلط السريع.', features: ['高速搅拌','多档位调速','易清洁结构','家用便携'], featuresEn: ['High-speed mixing','Multi-speed control','Easy to clean','Portable'], featuresAr: ['خلط سريع','تحكم متعدد السرعات','هيكل سهل التنظيف','محمول'] },
  { id: 4, name: '蓝牙无线耳机', nameEn: 'Bluetooth Earbuds', nameAr: 'سماعات بلوتوث لاسلكية', category: 'electronics', price: 119, originalPrice: 159, rating: 4.9, reviews: 3150, stock: 45, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80', badge: '爆款', badgeEn: 'Hot', badgeAr: 'رائج', desc: '长续航、运动轻便，可用于通勤、健身与办公场景，支持双设备连接。', descEn: 'Long battery life, lightweight and sporty for commuting, gym, and office use, with dual-device connection.', descAr: 'بطارية طويلة وخفيفة للرياضة، مناسبة للرحلات والعمل، مع اتصال ثنائي الجهاز.', features: ['蓝牙5.3','长续航','防水设计','双麦克风'], featuresEn: ['Bluetooth 5.3','Long battery','Water-resistant','Dual microphone'], featuresAr: ['بلوتوث 5.3','بطارية طويلة','مقاوم للماء','ميكروفونات مزدوجة'] },
  { id: 5, name: '多功能厨房刀具套装', nameEn: 'Multi-Function Knife Set', nameAr: 'مجموعة سكاكين متعددة الوظائف', category: 'kitchen', price: 64, originalPrice: 89, rating: 4.8, reviews: 650, stock: 35, image: 'https://images.unsplash.com/photo-1592150621744-accd7ba5e6ab?auto=format&fit=crop&w=400&q=80', badge: '热销', badgeEn: 'Popular', badgeAr: 'شائع', desc: '高端外观，适合家庭使用，兼顾实用性与展示价值，提升厨房体验。', descEn: 'Premium look and practical design for home kitchens, increasing overall cooking experience.', descAr: 'مظهر فاخر وتصميم عملي للمطابخ المنزلية، مما يرفع تجربة الطهي.', features: ['高耐用刀身','组合套装','易保存收纳','家用推荐'], featuresEn: ['Durable blade','Combo set','Easy storage','Home favorite'], featuresAr: ['شفرة متينة','مجموعة مدمجة','تخزين سهل','مفضل منزلي'] },
  { id: 6, name: '玻尿酸面膜套装', nameEn: 'Hyaluronic Mask Set', nameAr: 'مجموعة أقنعة الهيالورونيك', category: 'beauty', price: 52, originalPrice: 69, rating: 4.9, reviews: 2100, stock: 89, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=400&q=80', badge: '必买', badgeEn: 'Must-buy', badgeAr: 'يجب شراؤه', desc: '深层补水、修护屏障，适合日常保养和旅行携带，适合以清洁和保养为核心的卖点。', descEn: 'Deep hydration and skin barrier repair, suitable for daily care and travel essentials.', descAr: 'ترطيب عميق وإصلاح لحاجز البشرة، مناسب للعناية اليومية والسفر.', features: ['玻尿酸补水','修护屏障','温和配方','旅行装'], featuresEn: ['Hyaluronic hydration','Barrier repair','Gentle formula','Travel pack'], featuresAr: ['ترطيب بالهيالورونيك','إصلاح الحاجز','صيغة لطيفة','حزمة للسفر'] },
  { id: 7, name: '便携式USB风扇', nameEn: 'Portable USB Fan', nameAr: 'مروحة USB محمولة', category: 'electronics', price: 29, originalPrice: 39, rating: 4.6, reviews: 540, stock: 200, image: 'https://images.unsplash.com/photo-1572365992253-3cb3e56dd362?auto=format&fit=crop&w=400&q=80', badge: '促销', badgeEn: 'Sale', badgeAr: 'تخفيض', desc: '轻便高效的桌面/车载风扇，适合夏季通勤和办公室使用。', descEn: 'Portable desk and car fan that offers efficient cooling for commuting and office use.', descAr: 'مروحة محمولة للمنضدة والسيارة توفر تهوية فعالة للاستخدام أثناء التنقل والعمل.', features: ['便携设计','低能耗','车载可用','三档风速'], featuresEn: ['Portable design','Energy-saving','Car-ready','3-speed'], featuresAr: ['تصميم محمول','يستهلك طاقة منخفضة','مناسب للسيارة','3 سرعات'] },
  { id: 8, name: '婴儿护肤套装', nameEn: 'Baby Skin Care Pack', nameAr: 'طقم عناية ببشرة الطفل', category: 'mother', price: 45, originalPrice: 59, rating: 4.8, reviews: 890, stock: 60, image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4d4b3f0?auto=format&fit=crop&w=400&q=80', badge: '安心', badgeEn: 'Safe', badgeAr: 'آمن', desc: '温和、无刺激，针对婴儿皮肤护理的系列组合，帮助呵护日常使用。', descEn: 'Gentle, non-irritating skincare bundle specially designed for baby care and daily use.', descAr: 'مجموعة عناية لطيفة وغير مهيجة مصممة خصيصًا لبشرة الأطفال والاستخدام اليومي.', features: ['温和无刺激','婴儿适用','多重保护','家庭必备'], featuresEn: ['Gentle & non-irritating','Baby-friendly','Multi-protection','Home essential'], featuresAr: ['لطيفة وغير مهيجة','ملائمة للأطفال','حماية متعددة','أساس منزلي'] },
  { id: 9, name: '智能温度计', nameEn: 'Smart Thermometer', nameAr: 'ميزان حرارة ذكي', category: 'electronics', price: 32, originalPrice: 42, rating: 4.7, reviews: 420, stock: 3, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80', badge: '库存少', badgeEn: 'Low stock', badgeAr: 'مخزون محدود', desc: '适合家庭健康检测，显示清晰，操作方便，适合日常健康管理。', descEn: 'Ideal for home health checks, clear display, easy to operate for daily health monitoring.', descAr: 'مثالي لفحوصات الصحة المنزلية، شاشة واضحة وسهلة التشغيل لإدارة الصحة اليومية.', features: ['高速测温','无声设计','家用便捷','稳定精准'], featuresEn: ['Fast reading','Silent design','Home-friendly','Stable accuracy'], featuresAr: ['قراءة سريعة','تصميم هادئ','مناسب للمنزل','دقة مستقرة'] },
  { id: 10, name: '收纳盒套装', nameEn: 'Storage Box Set', nameAr: 'مجموعة صناديق تخزين', category: 'home', price: 28, originalPrice: 38, rating: 4.6, reviews: 730, stock: 150, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80', badge: '热销', badgeEn: 'Popular', badgeAr: 'شائع', desc: '高效整理，适合厨房、卧室、办公桌等空间收纳需求。', descEn: 'Effective organization solution for kitchen, bedroom, and office spaces.', descAr: 'حل تنظيم فعال للمطابخ والغرف والمكاتب.', features: ['空间利用率高','易组合','耐用材质','多尺寸可选'], featuresEn: ['Space-efficient','Modular','Durable material','Multiple sizes'], featuresAr: ['استخدام ممتاز للمساحة','قابل للتجميع','مواد متينة','أحجام متعددة'] },
  { id: 11, name: '洁面仪', nameEn: 'Facial Cleanser Device', nameAr: 'جهاز تنظيف الوجه', category: 'beauty', price: 76, originalPrice: 99, rating: 4.8, reviews: 1250, stock: 42, image: 'https://images.unsplash.com/photo-1631730486211-cbb2c70f6581?auto=format&fit=crop&w=400&q=80', badge: '美妆', badgeEn: 'Beauty', badgeAr: 'تجميل', desc: '帮助深层清洁毛孔，适合日常护肤，提升皮肤精致状态。', descEn: 'Deeply cleanses pores for daily skincare and a cleaner, healthier skin finish.', descAr: 'ينظف المسام بعمق للعناية اليومية ويحسن مظهر البشرة.', features: ['深层清洁','清洁洗脸','轻便操作','护肤好搭档'], featuresEn: ['Deep cleanse','Gentle wash','Lightweight','Skincare partner'], featuresAr: ['تنظيف عميق','غسيل لطيف','عملية خفيفة','شريك للعناية'] },
  { id: 12, name: '水杯热水瓶', nameEn: 'Thermal Water Bottle', nameAr: 'زجاجة الماء الحرارية', category: 'home', price: 35, originalPrice: 45, rating: 4.7, reviews: 890, stock: 78, image: 'https://images.unsplash.com/photo-1497636577773-f1231844b47b?auto=format&fit=crop&w=400&q=80', badge: '实用', badgeEn: 'Useful', badgeAr: 'مفيد', desc: '长时间保温，适合通勤、出行及运动场景，携带方便。', descEn: 'Keeps drinks warm for hours, ideal for commuting, travel, and fitness.', descAr: 'يحافظ على حرارة المشروبات لفترة طويلة، مناسب للتنقل والسفر والتمارين.', features: ['长效保温','防烫设计','可携带','材质环保'], featuresEn: ['Long heat retention','Heat-safe design','Portable','Eco-friendly'], featuresAr: ['حفظ حراري طويل','تصميم آمن ضد الحرارة','قابل للحمل','مواد صديقة للبيئة'] },
  { id: 13, name: '迷你投影仪', nameEn: 'Mini Projector', nameAr: 'مشروع صغير', category: 'electronics', price: 180, originalPrice: 220, rating: 4.9, reviews: 1600, stock: 12, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80', badge: '新趋势', badgeEn: 'Trend', badgeAr: 'اتجاه جديد', desc: '适合家庭娱乐和商务汇报的小型投影设备，画质清晰且易携带。', descEn: 'Compact projector for home entertainment and business presentations with clear picture quality.', descAr: 'مشروع صغير للترفيه المنزلي والعروض التجارية مع جودة صورة واضحة وسهولة الحمل.', features: ['高清投影','便携轻巧','低噪音','多场景使用'], featuresEn: ['HD projection','Portable','Low noise','Multi-scenario use'], featuresAr: ['إسقاط عالي الوضوح','محمول وخفيف','صوت منخفض','استخدام متعدد'] },
  { id: 14, name: '香氛扩香机', nameEn: 'Air Freshener Diffuser', nameAr: 'موزع معطر', category: 'home', price: 58, originalPrice: 79, rating: 4.8, reviews: 990, stock: 55, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80', badge: '新上架', badgeEn: 'New', badgeAr: 'جديد', desc: '让居家空间更温馨舒适，适合卧室、客厅和办公室场景。', descEn: 'Creates a warm and pleasant home atmosphere for bedroom, living room, and office.', descAr: 'يُضفي جوًا دافئًا ومريحًا في المنزل للمساحات مثل الغرف والمكاتب.', features: ['持久香氛','静音运行','节能设计','多种香型'], featuresEn: ['Long-lasting aroma','Quiet operation','Energy saving','Multiple scents'], featuresAr: ['رائحة تدوم','تشغيل هادئ','تصميم موفر للطاقة','مختلفة الروائح'] },
  { id: 15, name: '按摩足疗器', nameEn: 'Foot Massager', nameAr: 'جهاز تدليك القدم', category: 'home', price: 120, originalPrice: 160, rating: 4.9, reviews: 1280, stock: 18, image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80', badge: '热卖', badgeEn: 'Hot', badgeAr: 'رائج', desc: '有效缓解疲劳，适合日常放松和居家保养。', descEn: 'Relieves fatigue and supports relaxation and home wellness routines.', descAr: 'يخفف التعب ويُعزز الاسترخاء والعناية المنزلية.', features: ['按摩多模式','无噪音','智能定时','适合全家'], featuresEn: ['Multiple modes','Silent operation','Smart timer','Family use'], featuresAr: ['أوضاع تدليك متعددة','تشغيل هادئ','مؤقت ذكي','مناسب للعائلة'] },
  { id: 16, name: '无痕口罩', nameEn: 'Invisible Mask', nameAr: 'قناع غير ملحوظ', category: 'beauty', price: 22, originalPrice: 32, rating: 4.7, reviews: 760, stock: 140, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=400&q=80', badge: '日用', badgeEn: 'Daily', badgeAr: 'يومي', desc: '轻薄透气，适合日常通勤和外出使用，兼顾舒适度。', descEn: 'Lightweight and breathable for everyday commuting and outdoor use, with maximum comfort.', descAr: 'خفيف وقابل للتنفس للاستخدام اليومي والخارجي مع راحة عالية.', features: ['透气舒适','轻薄贴合','可重复使用','防尘保暖'], featuresEn: ['Breathable','Light fit','Reusable','Dust protection'], featuresAr: ['قابل للتنفس','ملاءمة خفيفة','قابل لإعادة الاستخدام','حماية من الغبار'] },
  { id: 17, name: '蒸汽清洁机', nameEn: 'Steam Cleaner', nameAr: 'منظف بخاري', category: 'kitchen', price: 130, originalPrice: 175, rating: 4.8, reviews: 640, stock: 24, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80', badge: '强力', badgeEn: 'Power', badgeAr: 'قوي', desc: '高压蒸汽清洁，适合清理厨房和卫生间的难清污渍。', descEn: 'High-pressure steam cleaning for difficult stains in kitchen and bathroom spaces.', descAr: 'تنظيف بالبخار عالي الضغط للبقع الصعبة في المطبخ والحمام.', features: ['高压蒸汽','深层清洁','零化学','快速杀菌'], featuresEn: ['High-pressure steam','Deep cleaning','No chemicals','Fast sanitization'], featuresAr: ['بخار عالي الضغط','تنظيف عميق','بدون كيمياء','تعقيم سريع'] },
  { id: 18, name: '折叠旅行包', nameEn: 'Foldable Travel Bag', nameAr: 'حقيبة سفر قابلة للطي', category: 'home', price: 70, originalPrice: 95, rating: 4.7, reviews: 860, stock: 67, image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=400&q=80', badge: '旅行', badgeEn: 'Travel', badgeAr: 'سفر', desc: '适合出差和旅行，是简洁实用的便携收纳工具。', descEn: 'Perfect for business and travel, combining simplicity with practical storage.', descAr: 'مثالي للسفر والعمل، يجمع بين البساطة والتخزين العملي.', features: ['可折叠','轻便耐用','多口袋设计','旅行必备'], featuresEn: ['Foldable','Light & durable','Multiple pockets','Travel essential'], featuresAr: ['قابل للطي','خفيف ومتين','عدة جيوب','أساس للسفر'] },
  { id: 19, name: '智能手环', nameEn: 'Smart Band', nameAr: 'ساعة ذكية', category: 'electronics', price: 94, originalPrice: 125, rating: 4.9, reviews: 2100, stock: 38, image: 'https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=400&q=80', badge: '健康', badgeEn: 'Health', badgeAr: 'صحة', desc: '一体式健康管理工具，适合运动健康和日常追踪。', descEn: 'All-in-one health tracker for fitness and daily wellness monitoring.', descAr: 'أداة إدارة صحية متكاملة لمتابعة اللياقة والصحة اليومية.', features: ['睡眠监测','心率检测','防水设计','运动追踪'], featuresEn: ['Sleep tracking','Heart rate','Waterproof','Fitness tracking'], featuresAr: ['تتبّع النوم','مراقبة معدل القلب','مقاوم للماء','تتبّع اللياقة'] },
  { id: 20, name: '婴儿推车', nameEn: 'Baby Stroller', nameAr: 'عربة أطفال', category: 'mother', price: 210, originalPrice: 260, rating: 4.8, reviews: 520, stock: 10, image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80', badge: '母婴', badgeEn: 'Baby', badgeAr: 'أطفال', desc: '轻便高效的婴儿推车，适合城市出行和日常散步。', descEn: 'Lightweight and efficient stroller designed for city trips and daily walks.', descAr: 'عربة أطفال خفيفة وفعالة للرحلات في المدينة والمشي اليومي.', features: ['折叠收纳','轻便稳固','防震结构','安全扶手'], featuresEn: ['Foldable','Lightweight','Shock-absorbing','Safety handle'], featuresAr: ['طوي سهلة','خفيفة ومستقرة','هيكل ممتص للصدمات','مقود آمن'] }
];

const i18n = {
  zh: {
    helpCenter: '帮助中心', afterSales: '售后服务', aboutUs: '关于我们', login: '登录', register: '注册',
    allCategories: '全部分类', homeLife: '家居生活', beautyCare: '美妆个护', kitchen: '厨房电器', electronics: '数码配件', motherBaby: '母婴用品',
    heroTitle1: '中东热销产品', heroText1: '发现最受欢迎的跨境电商商品',
    heroTitle2: '品质保证', heroText2: '全球精选，放心购物',
    heroTitle3: '极速配送', heroText3: '快速送达，贴心服务',
    todayRecommend: '🔥 今日推荐', viewAll: '查看全部 →', hotProducts: '热销商品',
    sortHot: '热销排序', sortNew: '最新上架', sortPriceLow: '价格低到高', sortPriceHigh: '价格高到低',
    recommendedStores: '推荐店铺', shop1:'家居生活馆', shop2:'美妆护肤专营', shop3:'厨房电器城', enterShop:'进入店铺',
    footerAbout:'关于我们', aboutIntro:'公司介绍', brandStory:'品牌故事', newsCenter:'新闻中心', jobs:'工作机会',
    service:'服务保障', policyAfter:'售后政策', returnPolicy:'退货政策', feedback:'投诉反馈', privacy:'隐私保护',
    guide:'购物指南', shoppingFlow:'购物流程', payment:'支付方式', shipping:'物流配送', faq:'常见问题',
    contactUs:'联系我们'
  },
  en: {
    helpCenter: 'Help Center', afterSales: 'After-sales', aboutUs: 'About Us', login: 'Login', register: 'Register',
    allCategories: 'All Categories', homeLife: 'Home Living', beautyCare: 'Beauty Care', kitchen: 'Kitchen Appliances', electronics: 'Electronics', motherBaby: 'Mother & Baby',
    heroTitle1: 'Middle East Best Sellers', heroText1: 'Discover the hottest cross-border products',
    heroTitle2: 'Quality Guarantee', heroText2: 'Curated global picks for reliable shopping',
    heroTitle3: 'Fast Shipping', heroText3: 'Speedy delivery and care',
    todayRecommend: '🔥 Today’s Picks', viewAll: 'View All →', hotProducts: 'Hot Products',
    sortHot: 'Top Sellers', sortNew: 'Latest', sortPriceLow: 'Price: Low to High', sortPriceHigh: 'Price: High to Low',
    recommendedStores: 'Recommended Stores', shop1:'Home Living Store', shop2:'Beauty Care Store', shop3:'Kitchen Appliances Hub', enterShop:'Visit Store',
    footerAbout:'About Us', aboutIntro:'Company Intro', brandStory:'Brand Story', newsCenter:'News Center', jobs:'Careers',
    service:'Service', policyAfter:'After-sales Policy', returnPolicy:'Return Policy', feedback:'Support', privacy:'Privacy',
    guide:'Shopping Guide', shoppingFlow:'Shopping Flow', payment:'Payment', shipping:'Shipping', faq:'FAQ',
    contactUs:'Contact Us'
  },
  ar: {
    helpCenter: 'مركز المساعدة', afterSales: 'خدمة ما بعد البيع', aboutUs: 'معلومات عنا', login: 'تسجيل الدخول', register: 'تسجيل',
    allCategories: 'كل الفئات', homeLife: 'المنزل والحياة', beautyCare: 'العناية بالجمال', kitchen: 'أجهزة المطبخ', electronics: 'الإلكترونيات', motherBaby: 'الأم والطفل',
    heroTitle1: 'منتجات الشرق الأوسط الأكثر مبيعًا', heroText1: 'اكتشف المنتجات الأكثر رواجًا عبر الحدود',
    heroTitle2: 'ضمان الجودة', heroText2: 'اختيارات عالمية موثوقة',
    heroTitle3: 'شحن سريع', heroText3: 'تسليم سريع وخدمة مميزة',
    todayRecommend: '🔥 اختيارات اليوم', viewAll: 'عرض الكل →', hotProducts: 'منتجات رائجة',
    sortHot: 'الأكثر مبيعًا', sortNew: 'الأحدث', sortPriceLow: 'السعر: من الأقل إلى الأعلى', sortPriceHigh: 'السعر: من الأعلى إلى الأقل',
    recommendedStores: 'المتاجر الموصى بها', shop1:'متجر المنزل', shop2:'متجر العناية بالجمال', shop3:'مركز الأجهزة المنزلية', enterShop:'زيارة المتجر',
    footerAbout:'معلومات عنا', aboutIntro:'عن الشركة', brandStory:'قصة العلامة', newsCenter:'الأخبار', jobs:'فرص العمل',
    service:'الخدمات', policyAfter:'سياسة ما بعد البيع', returnPolicy:'سياسة الإرجاع', feedback:'الشكاوى', privacy:'الخصوصية',
    guide:'دليل التسوق', shoppingFlow:'دليل الشراء', payment:'الدفع', shipping:'التوصيل', faq:'الأسئلة الشائعة',
    contactUs:'تواصل معنا'
  }
};

let currentLanguage = 'zh';

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === 'ar' ? 'ar' : (lang === 'en' ? 'en' : 'zh');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.placeholder = lang === 'zh' ? '搜索产品、品牌、分类...' : (lang === 'ar' ? 'ابحث عن المنتجات والعلامات والفئات...' : 'Search products, brands, categories...');
  }
}

function toggleLanguage() {
  const order = ['zh', 'en', 'ar'];
  const next = order[(order.indexOf(currentLanguage) + 1) % order.length];
  setLanguage(next);
}

const CART_KEY = 'metrend_cart';

function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cartItems) {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

function openProductPage(productId) {
  localStorage.setItem('selectedProductId', productId);
  window.location.href = 'product.html';
}

function addToCart(productId, productName) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, qty: 1 });
  saveCart(cart);
  updateCartCount();
  showCartPopup(productName);
}

function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) cartCount.textContent = getCart().reduce((sum, item) => sum + item.qty, 0);
}

function showCartPopup(productName) {
  const popup = document.getElementById('cartPopup');
  if (!popup) return;
  document.getElementById('cartMessage').textContent = `${productName} 已加入购物车`;
  popup.classList.add('show');
  setTimeout(() => popup.classList.remove('show'), 2000);
}

function closeCartPopup() {
  const popup = document.getElementById('cartPopup');
  if (popup) popup.classList.remove('show');
}

function addToWishlist() {
  const wishlistCount = document.querySelector('.wishlist-count');
  if (!wishlistCount) return;
  wishlistCount.textContent = Number(wishlistCount.textContent) + 1;
}

function renderProducts(filteredProducts = products) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = filteredProducts.map((product) => {
    const label = currentLanguage === 'en' ? product.badgeEn : (currentLanguage === 'ar' ? product.badgeAr : product.badge);
    const productName = currentLanguage === 'en' ? product.nameEn : (currentLanguage === 'ar' ? product.nameAr : product.name);
    return `
      <div class="product-card">
        <div class="product-image" onclick="openProductPage(${product.id})" style="cursor:pointer;">
          <img src="${product.image}" alt="${productName}" />
          <span class="product-badge">${label}</span>
        </div>
        <div class="product-info">
          <h3 class="product-name" onclick="openProductPage(${product.id})" style="cursor:pointer;">${productName}</h3>
          <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span>${product.rating}</span>
            <span>(${product.reviews})</span>
          </div>
          <div class="product-price">
            <span class="current-price">$${product.price}</span>
            <span class="original-price">$${product.originalPrice}</span>
          </div>
          <div class="product-stock ${product.stock < 10 ? 'low' : ''}">${product.stock > 0 ? `库存: ${product.stock}件` : '缺货'}</div>
          <div class="product-actions">
            <button class="btn-cart" onclick="addToCart(${product.id}, '${productName}')">${currentLanguage === 'en' ? 'Add to Cart' : (currentLanguage === 'ar' ? 'أضف إلى السلة' : '加入购物车')}</button>
            <button class="btn-wishlist" onclick="addToWishlist()">❤️</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderFlashDeal() {
  const grid = document.getElementById('flash-grid');
  if (!grid) return;
  const flashProducts = products.slice(0, 6);
  grid.innerHTML = flashProducts.map((product) => {
    const label = currentLanguage === 'en' ? product.badgeEn : (currentLanguage === 'ar' ? product.badgeAr : product.badge);
    const productName = currentLanguage === 'en' ? product.nameEn : (currentLanguage === 'ar' ? product.nameAr : product.name);
    return `
      <div class="product-card">
        <div class="product-image" onclick="openProductPage(${product.id})" style="cursor:pointer;">
          <img src="${product.image}" alt="${productName}" />
          <span class="product-badge">${label}</span>
        </div>
        <div class="product-info">
          <h3 class="product-name" onclick="openProductPage(${product.id})" style="cursor:pointer;">${productName}</h3>
          <div class="product-price">
            <span class="current-price">$${product.price}</span>
            <span class="original-price">$${product.originalPrice}</span>
          </div>
          <button class="btn-cart" onclick="addToCart(${product.id}, '${productName}')">${currentLanguage === 'en' ? 'Buy Now' : (currentLanguage === 'ar' ? 'اشتري الآن' : '立即抢购')}</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderProductDetail() {
  const id = Number(localStorage.getItem('selectedProductId'));
  const product = products.find((item) => item.id === id) || products[0];
  const root = document.getElementById('product-detail');
  if (!root) return;

  const productName = currentLanguage === 'en' ? product.nameEn : (currentLanguage === 'ar' ? product.nameAr : product.name);
  const productDesc = currentLanguage === 'en' ? product.descEn : (currentLanguage === 'ar' ? product.descAr : product.desc);
  const details = currentLanguage === 'en' ? product.featuresEn : (currentLanguage === 'ar' ? product.featuresAr : product.features);
  const badge = currentLanguage === 'en' ? product.badgeEn : (currentLanguage === 'ar' ? product.badgeAr : product.badge);

  root.innerHTML = `
    <div class="product-detail-card">
      <div class="detail-image-col"><img class="detail-image-large" src="${product.image}" alt="${productName}" /></div>
      <div class="detail-info">
        <div class="detail-badge">${badge}</div>
        <h1>${productName}</h1>
        <div class="detail-rating">
          <span class="stars">★★★★★</span>
          <span>${product.rating}</span>
          <span>(${product.reviews} ${currentLanguage === 'en' ? 'reviews' : (currentLanguage === 'ar' ? 'تقييم' : '条评价')})</span>
        </div>
        <div class="detail-price">
          <span class="current">$${product.price}</span>
          <span class="original">$${product.originalPrice}</span>
        </div>
        <p class="detail-desc">${productDesc}</p>
        <ul class="detail-features">
          ${details.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="detail-actions">
          <button class="primary-btn" onclick="addToCart(${product.id}, '${productName}')">${currentLanguage === 'en' ? 'Add to Cart' : (currentLanguage === 'ar' ? 'أضف إلى السلة' : '加入购物车')}</button>
          <button class="secondary-btn" onclick="window.location.href='cart.html'">${currentLanguage === 'en' ? 'Buy Now' : (currentLanguage === 'ar' ? 'اشترِ الآن' : '立即购买')}</button>
        </div>
        <div class="detail-meta">
          <div class="meta-box"><strong>${currentLanguage === 'en' ? 'Shipping' : (currentLanguage === 'ar' ? 'الشحن' : '发货')}</strong> ${currentLanguage === 'en' ? '1-3 days' : (currentLanguage === 'ar' ? '1-3 أيام' : '1-3天')}</div>
          <div class="meta-box"><strong>${currentLanguage === 'en' ? 'Stock' : (currentLanguage === 'ar' ? 'المخزون' : '库存')}</strong> ${product.stock}</div>
          <div class="meta-box"><strong>${currentLanguage === 'en' ? 'Delivery' : (currentLanguage === 'ar' ? 'التوصيل' : '配送')}</strong> ${currentLanguage === 'en' ? 'Middle East' : (currentLanguage === 'ar' ? 'الشرق الأوسط' : '中东地区')}</div>
        </div>
      </div>
    </div>
  `;
}

function renderCartPage() {
  const root = document.getElementById('cart-root');
  if (!root) return;
  const cart = getCart();
  if (!cart.length) {
    root.innerHTML = '<div class="empty-cart">购物车还是空的，先挑几件好东西吧</div>';
    return;
  }

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return null;
    return { ...product, qty: item.qty };
  }).filter(Boolean);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  root.innerHTML = `
    <div class="cart-list">
      ${cartItems.map((item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <h3>${currentLanguage === 'en' ? item.nameEn : (currentLanguage === 'ar' ? item.nameAr : item.name)}</h3>
            <p>${currentLanguage === 'en' ? item.badgeEn : (currentLanguage === 'ar' ? item.badgeAr : item.badge)}</p>
          </div>
          <div class="qty-box">
            <button onclick="changeQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)">+</button>
          </div>
          <strong>$${item.price * item.qty}</strong>
        </div>
      `).join('')}
    </div>
    <div class="cart-summary">
      <div>商品总数：${cartItems.reduce((sum, item) => sum + item.qty, 0)}</div>
      <div class="total-price">$${total}</div>
      <button class="primary-btn" onclick="alert('下单成功！')">去结算</button>
    </div>
  `;
}

function changeQty(productId, delta) {
  const cart = getCart();
  const target = cart.find((item) => item.id === productId);
  if (!target) return;

  target.qty += delta;
  if (target.qty <= 0) {
    saveCart(cart.filter((item) => item.id !== productId));
  } else {
    saveCart(cart);
  }

  renderCartPage();
  updateCartCount();
}

function initIndexPage() {
  setLanguage(currentLanguage);
  initCarousel();
  renderFlashDeal();
  renderProducts();
  updateCartCount();

  document.querySelectorAll('.nav-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      const filtered = category === 'all' ? products : products.filter((p) => p.category === category);
      renderProducts(filtered);
    });
  });

  document.querySelectorAll('.sort-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const sort = btn.dataset.sort;
      let sorted = [...products];
      if (sort === 'new') sorted.reverse();
      else if (sort === 'price-low') sorted.sort((a, b) => a.price - b.price);
      else if (sort === 'price-high') sorted.sort((a, b) => b.price - a.price);
      renderProducts(sorted);
    });
  });
}

function initCarousel() {
  const dotsContainer = document.querySelector('.carousel-dots');
  if (!dotsContainer) return;
  [0,1,2].forEach((index) => {
    const dot = document.createElement('div');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  if (prev) prev.onclick = prevSlide;
  if (next) next.onclick = nextSlide;
  setInterval(autoSlide, 5000);
}

function showSlide(index) {
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  items.forEach((item) => item.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));
  if (items[index]) items[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
}
function nextSlide() { currentCarouselIndex = (currentCarouselIndex + 1) % 3; showSlide(currentCarouselIndex); }
function prevSlide() { currentCarouselIndex = (currentCarouselIndex - 1 + 3) % 3; showSlide(currentCarouselIndex); }
function goToSlide(index) { currentCarouselIndex = index; showSlide(currentCarouselIndex); }
function autoSlide() { nextSlide(); }

if (document.getElementById('product-grid')) {
  initIndexPage();
}
if (document.getElementById('product-detail')) {
  setLanguage(currentLanguage);
  renderProductDetail();
}
if (document.getElementById('cart-root')) {
  setLanguage(currentLanguage);
  renderCartPage();
  updateCartCount();
}

window.toggleLanguage = function () {
  const order = ['zh', 'en', 'ar'];
  const next = order[(order.indexOf(currentLanguage) + 1) % order.length];
  setLanguage(next);
  if (document.getElementById('product-grid')) renderProducts();
  if (document.getElementById('flash-grid')) renderFlashDeal();
  if (document.getElementById('product-detail')) renderProductDetail();
  if (document.getElementById('cart-root')) renderCartPage();
};
