// مصفوفة الترجمة الكاملة للغات الخمس المعتمدة على الـ CV الخاص بك
const translations = {
    en: {
        navHome: "Home", navAbout: "About", navEdu: "Education", navExp: "Experience", navProj: "Projects",
        welcome: "Welcome to my space, I am",
        title: "Software Engineering Student",
        desc: "Highly driven and results-oriented Software Engineering student with a proven track record of leveraging technology to solve complex healthcare and business challenges.",
        btn: "Learn More",
        aboutTitle: "About Me",
        aboutP: "I blend strong foundational skills in programming (Python, Java) and system infrastructure (Linux) with professional customer-facing experience. Possessing an exceptional aptitude for crisis management and rapid technical adaptability.",
        dob: "Date of Birth:", loc: "Location:", langLabel: "Languages:",
        locVal: "Riyadh, Saudi Arabia", langVal: "Arabic (Native), English (Fluent), Japanese (Intermediate), Korean (Beginner)",
        eduTitle: "Education", eduDegree: "Bachelor of Science in Software Engineering (BSE)", eduUni: "Al Yamamah University, Riyadh | 2023 – Present",
        eduCourses: "Core Coursework: Object-Oriented Programming (Java), Software Architecture, Data Structures & Algorithms, Database Management Systems.",
        expTitle: "Experience",
        exp1Role: "Receptionist", exp1Comp: "Saudi MAS, Riyadh | Mar 2025 – Oct 2025", exp1Desc: "Maintained operational workflow continuity under high-traffic periods, utilizing proactive communication and administrative agility.",
        exp2Role: "Sales Specialist & Consultant", exp2Comp: "Nexfit, Riyadh | Dec 2023 – Jun 2024", exp2Desc: "Acted as a client advisor, analyzing individual customer requirements to deliver tailored consulting advice and service packages.",
        projTitle: "Honors & Projects", projBadge: "3rd Place Winner", projCardTitle: "BioPatch SOS (Healthoon Hackathon)",
        projDesc: "A cutting-edge medical device and software ecosystem designed for chronic disease tracking and emergency response, integrated with Starlink for offline capabilities.",
        footer: "All Rights Reserved © 2026 | Designed & Coded by Zainab Al-Saeed"
    },
    ar: {
        navHome: "الرئيسية", navAbout: "عني", navEdu: "التعليم", navExp: "الخبرات", navProj: "المشاريع",
        welcome: "أهلاً بك في مساحتي الخاصة، أنا",
        title: "طالبة هندسة برمجيات",
        desc: "طالبة هندسة برمجيات طموحة وموجهة نحو تحقيق النتائج، لدي سجل حافل في الاستفادة من التقنيات لحل التحديات الصحية والتجارية المعقدة.",
        btn: "اكتشف المزيد",
        aboutTitle: "نبذة عني",
        aboutP: "أجمع بين المهارات التأسيسية القوية في البرمجة (بايثون، جافا) والبنية التحتية للأنظمة (لينكس) مع خبرة مهنية في التعامل المباشر مع العملاء. أمتلك قدرة استثنائية على إدارة الأزمات والتكيف التقني السريع.",
        dob: "تاريخ الميلاد:", loc: "الموقع:", langLabel: "اللغات:",
        locVal: "الرياض، المملكة العربية السعودية", langVal: "العربية (الأم)، الإنجليزية (طلاقة)، اليابانية (متوسط)، الكورية (مبتدئ)",
        eduTitle: "التعليم", eduDegree: "بكالوريوس العلوم في هندسة البرمجيات", eduUni: "جامعة اليمامة، الرياض | ٢٠٢٣ – الحالي",
        eduCourses: "المقررات الأساسية: البرمجة كائنية التوجه (جافا)، هندسة البرمجيات، هياكل البيانات والخوارزميات، نظم إدارة قواعد البيانات.",
        expTitle: "الخبرات المهنية",
        exp1Role: "موظفة استقبال", exp1Comp: "سعودي ماس، الرياض | مارس ٢٠٢٥ – أكتوبر ٢٠٢٥", exp1Desc: "حافظت على استمرارية سير العمل التشغيلي خلال فترات الازدحام العالي، مع استخدام التواصل الفعال والمرونة الإدارية.",
        exp2Role: "أخصائية مبيعات ومستشارة", exp2Comp: "نيكس فت، الرياض | ديسمبر ٢٠٢٣ – يونيو ٢٠٢٤", exp2Desc: "عملت كمستشارة للعملاء، وتحليل المتطلبات الفردية لتقديم نصائح استشارية وباقات خدمات مخصصة تضمن رضاهم.",
        projTitle: "الجوائز والمشاريع", projBadge: "المركز الثالث وطنياً", projCardTitle: "BioPatch SOS (هاكاثون هيلثون)",
        projDesc: "جهاز طبي متطور ونظام برمجي مصمم لتتبع الأمراض المزمنة والاستجابة لحالات الطوارئ، متكامل مرتبط بنظام ستارلينك للعمل دون إنترنت.",
        footer: "جميع الحقوق محفوظة © ٢٠٢٦ | تصميم وبرمجة زينب آل سعيد"
    },
    zh: {
        navHome: "首页", navAbout: "关于我", navEdu: "教育背景", navExp: "工作经验", navProj: "项目荣誉",
        welcome: "欢迎来到我的空间，我是",
        title: "软件工程专业学生",
        desc: "一位充满动力、以结果为导向的软件工程专业学生，在利用技术解决复杂的医疗保健和业务挑战 locally 方面拥有良好的记录。",
        btn: "了解更多",
        aboutTitle: "关于我",
        aboutP: "我将扎实的编程基础（Python、Java）和系统基础设施（Linux）技能与专业的面向客户经验相结合。具备出色的危机管理能力和快速的技术适应能力。",
        dob: "出生日期:", loc: "地点:", langLabel: "语言能力:",
        locVal: "沙特阿拉伯 利雅德", langVal: "阿拉伯语（母语）、英语（流利）、日语（中级）、韩语（初级）",
        eduTitle: "教育经历", eduDegree: "软件工程理学学士 (BSE)", eduUni: "阿尔雅马马大学，利雅德 | 2023 – 至今",
        eduCourses: "核心课程: 面向对象编程 (Java)、软件架构、数据结构与算法、数据库管理系统。",
        expTitle: "工作经验",
        exp1Role: "前台接待", exp1Comp: "Saudi MAS，利雅德 | 2025年3月 – 2025年10月", exp1Desc: "在高业务量期间保持运营工作流程 continuous，利用主动沟通来精简行政工作。",
        exp2Role: "销售专家兼顾问", exp2Comp: "Nexfit，利雅德 | 2023年12月 – 2024年6月", exp2Desc: "担任客户顾问，分析个人客户需求以提供量身定制 advisory 服务包，实现客户满意度最大化。",
        projTitle: "荣誉与项目", projBadge: "荣获第三名", projCardTitle: "BioPatch SOS (Healthoon 黑客马拉松)",
        projDesc: "尖端的医疗设备和软件生态系统，专为慢性病跟踪和应急响应而设计，集成了 Starlink 以确保离线能力。",
        footer: "版权所有 © 2026 | 由 Zainab Al-Saeed 设计与编码"
    },
    ja: {
        navHome: "ホーム", navAbout: "私について", navEdu: "学歴", navExp: "経歴", navProj: "実績",
        welcome: "ようこそ、私は",
        title: "ソフトウェア工学科の学生",
        desc: "テクノロジーを活用して医療やビジネスの複雑な課題を解決することに強い情熱を持つ、結果重視のソフトウェア工学の学生です。",
        btn: "詳細を見る",
        aboutTitle: "プロフィール",
        aboutP: "プログラミング（Python、Java）やシステムインフラ（Linux）の強固な基礎スキルと、プロフェッショナルな顧客対応経験を兼ね備えています。危機管理能力と高い技術適応力を持っています。",
        dob: "生年月日:", loc: "活動地:", langLabel: "言語:",
        locVal: "サウジアラビア、リヤド", langVal: "アラビア語（母語）、英語（流暢）、日本語（中級）、韓国語（初級）",
        eduTitle: "学歴", eduDegree: "ソフトウェア工学士 (BSE)", eduUni: "アル・ヤママ大学（リヤド） | 2023年 – 在学中",
        eduCourses: "主要科目: オブジェクト指向プログラミング (Java)、ソフトウェアアーキテクチャ、データ構造とアルゴリズム、データベース管理システム。",
        expTitle: "職務経歴",
        exp1Role: "受付係", exp1Comp: "Saudi MAS（リヤド） | 2025年3月 – 2025年10月", exp1Desc: "混雑期においても、積極的なコミュニケーションにより管理業務を効率化し、業務フローの継続性を維持しました。",
        exp2Role: "営業スペシャリスト＆コンサルタント", exp2Comp: "Nexfit（リヤド） | 2023年12月 – 2024年6月", exp2Desc: "クライアントアドバイザーとして顧客の要件を分析し、満足度を最大化する最適な提案とサービスを提供しました。",
        projTitle: "受賞歴・プロジェクト", projBadge: "第3位受賞", projCardTitle: "BioPatch SOS (Healthoon ハッカソン)",
        projDesc: "慢性疾患の追跡と緊急対応のために設計された最先端の医療機器およびソフトウェアエコシステム。Starlinkを統合しオフラインにも対応。",
        footer: "All Rights Reserved © 2026 | Designed & Coded by Zainab Al-Saeed"
    },
    ko: {
        navHome: "홈", navAbout: "소개", navEdu: "학력", navExp: "경력", navProj: "프로젝트",
        welcome: "환영합니다, 저는",
        title: "소프트웨어 엔지니어링 학생",
        desc: "의료 및 비즈니스의 복잡한 과제를 기술을 통해 해결하는 데 입증된 역량을 가진 결과 지향적인 소프트웨어 엔지니어링 전공생입니다.",
        btn: "자세히 보기",
        aboutTitle: "자기소개",
        aboutP: "프로그래밍(Python, Java)과 시스템 인프라(Linux)에 대한 탄탄한 기초 지식과 전문적인 고객 응대 경험을 겸비하고 있습니다. 뛰어난 위기 관리 능력과 빠른 기술 적응력을 보유하고 있습니다.",
        dob: "생년월일:", loc: "위치:", langLabel: "구사 언어:",
        locVal: "사우디아라비아 리야드", langVal: "아랍어 (모국어), 영어 (유창함), 일본어 (중급), 한국어 (초급)",
        eduTitle: "학력 사항", eduDegree: "소프트웨어 엔지니어링 학사 (BSE)", eduUni: "알 야마마 대학교, 리야드 | 2023 – 현재 재학 중",
        eduCourses: "주요 과목: 객체 지향 프로그래밍 (Java), 소프트웨어 아키텍처, 자료구조 및 알고리즘, 데이터베이스 관리 시스템.",
        expTitle: "경력 사항",
        exp1Role: "리셉셔너 (접수원)", exp1Comp: "Saudi MAS, 리야드 | 2025년 3월 – 2025년 10월", exp1Desc: "업무량이 많은 시기에도 행정 업무를 간소화하고 주도적인 소통을 통해 원활한 업무 흐름을 유지했습니다.",
        exp2Role: "영업 전문가 및 컨설턴트", exp2Comp: "Nexfit, 리야드 | 2023년 12월 – 2024년 6월", exp2Desc: "고객 맞춤형 상담 및 서비스 패키지를 제안하여 고객 만족도를 극대화하는 어드바이저 역할을 수행했습니다.",
        projTitle: "수상 및 프로젝트", projBadge: "국가 3위 수상", projCardTitle: "BioPatch SOS (Healthoon 해커톤)",
        projDesc: "만성 질환 추적 및 응급 대응을 위해 설계된 최첨단 의료 기기 및 소프트웨어 생태계로, 오프라인 생존성을 위해 Starlink와 연동되었습니다.",
        footer: "All Rights Reserved © 2026 | Designed & Coded by Zainab Al-Saeed"
    }
};

// دالة تغيير اللغة الديناميكية التلقائية دون تحميل الصفحة
function changeLanguage(lang) {
    const selected = translations[lang];
    
    // تحويل النصوص بناءً على معرفات العناصر (IDs)
    document.getElementById("nav-home").textContent = selected.navHome;
    document.getElementById("nav-about").textContent = selected.navAbout;
    document.getElementById("nav-education").textContent = selected.navEdu;
    document.getElementById("nav-experience").textContent = selected.navExp;
    document.getElementById("nav-projects").textContent = selected.navProj;
    
    document.getElementById("hero-welcome").textContent = selected.welcome;
    document.getElementById("hero-title").textContent = selected.title;
    document.getElementById("hero-desc").textContent = selected.desc;
    document.getElementById("hero-btn").textContent = selected.btn;
    
    document.getElementById("title-about").textContent = selected.aboutTitle;
    document.getElementById("about-p").textContent = selected.aboutP;
    document.getElementById("lbl-dob").innerHTML = `<i class="fas fa-calendar-alt"></i> ${selected.dob}`;
    document.getElementById("lbl-loc").innerHTML = `<i class="fas fa-map-marker-alt"></i> ${selected.loc}`;
    document.getElementById("lbl-lang").innerHTML = `<i class="fas fa-language"></i> ${selected.langLabel}`;
    document.getElementById("val-loc").textContent = selected.locVal;
    document.getElementById("val-lang").textContent = selected.langVal;
    
    document.getElementById("title-edu").textContent = selected.eduTitle;
    document.getElementById("edu-degree").textContent = selected.eduDegree;
    document.getElementById("edu-uni").textContent = selected.eduUni;
    document.getElementById("edu-courses").innerHTML = `<strong>Core Coursework:</strong> ${selected.eduCourses.replace('Core Coursework: ', '')}`;
    
    document.getElementById("title-exp").textContent = selected.expTitle;
    document.getElementById("exp1-role").textContent = selected.exp1Role;
    document.getElementById("exp1-comp").textContent = selected.exp1Comp;
    document.getElementById("exp1-desc").textContent = selected.exp1Desc;
    document.getElementById("exp2-role").textContent = selected.exp2Role;
    document.getElementById("exp2-comp").textContent = selected.exp2Comp;
    document.getElementById("exp2-desc").textContent = selected.exp2Desc;
    
    document.getElementById("title-proj").textContent = selected.projTitle;
    document.getElementById("proj-badge").innerHTML = `<i class="fas fa-trophy"></i> ${selected.projBadge}`;
    document.getElementById("proj-title").textContent = selected.projCardTitle;
    document.getElementById("proj-desc").textContent = selected.projDesc;
    
    document.getElementById("footer-text").textContent = selected.footer;

    // تفعيل وضع التصفح من اليمين لليسار إذا كانت اللغة المحددة هي العربية فقط
    if (lang === "ar") {
        document.body.classList.add("rtl-mode");
    } else {
        document.body.classList.remove("rtl-mode");
    }
}

// --- تأثير الآلة الكاتبة التفاعلية (Typing Effect) ---
const typingText = document.querySelector(".typing-text");
const typingWords = ["| Analytics", "| Innovation", "| Adaptation"]; // تعبيرات نيون تيك توك الشهيرة للمبرمجين
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = typingWords[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typingWords.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});