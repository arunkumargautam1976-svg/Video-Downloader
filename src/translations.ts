export type Language = 'en' | 'fr' | 'de' | 'ko' | 'ja' | 'pt' | 'es' | 'ru' | 'it' | 'tr' | 'vi' | 'id' | 'th' | 'zh-tw' | 'zh-cn' | 'ar' | 'sk' | 'hi' | 'pl' | 'nl' | 'sv' | 'no' | 'da' | 'fi' | 'el' | 'cs' | 'hu' | 'ro' | 'bg' | 'uk' | 'he' | 'fa' | 'ms' | 'tl';

export interface Translation {
  nav: {
    downloader: string;
    mp3: string;
    mp4: string;
    facebook: string;
  };
  hero: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
  };
  howTo: {
    title: string;
    subtitle: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      simple: { title: string; desc: string };
      free: { title: string; desc: string };
      quality: { title: string; desc: string };
      fast: { title: string; desc: string };
      cross: { title: string; desc: string };
      unlimited: { title: string; desc: string };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    q1: { q: string; a: string };
    q2: { q: string; a: string };
    q3: { q: string; a: string };
    q4: { q: string; a: string };
  };
  footer: {
    terms: string;
    privacy: string;
    contact: string;
    copyright: string;
  };
}

export const languages: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  ko: '한국어',
  ja: '日本語',
  pt: 'Português',
  es: 'Español',
  ru: 'Русский',
  it: 'Italiano',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  th: 'ไทย',
  'zh-tw': '繁體中文',
  'zh-cn': '简体中文',
  ar: 'العربية',
  sk: 'Slovenčina',
  hi: 'हिन्दी',
  pl: 'Polski',
  nl: 'Nederlands',
  sv: 'Svenska',
  no: 'Norsk',
  da: 'Dansk',
  fi: 'Suomi',
  el: 'Ελληνικά',
  cs: 'Čeština',
  hu: 'Magyar',
  ro: 'Română',
  bg: 'Български',
  uk: 'Українська',
  he: 'עברית',
  fa: 'فارسی',
  ms: 'Bahasa Melayu',
  tl: 'Tagalog',
};

export const translations: Record<Language, Translation> = {
  en: {
    nav: { downloader: 'YouTube Downloader', mp3: 'Youtube To Mp3', mp4: 'Youtube To Mp4', facebook: 'Facebook Downloader' },
    hero: { title: 'YouTube Video Downloader', subtitle: 'The Best 1080P & 4K YouTube Video Downloader. Download high-quality YouTube videos safely and quickly.', placeholder: 'Paste YouTube video link here...', button: 'Download' },
    howTo: { title: 'How to Download YouTube videos Online', subtitle: 'Follow these 3 simple steps to download your favorite videos.', steps: { step1: { title: 'Copy Link', desc: 'Copy the YouTube video link you want to download.' }, step2: { title: 'Paste & Fetch', desc: 'Paste the link into the search box and click "Download".' }, step3: { title: 'Select & Save', desc: 'Select the target video quality and format to save.' } } },
    features: { title: 'Why Turbo Video Downloader is the best?', subtitle: 'We provide the most reliable and fastest service for our users.', items: { simple: { title: 'Simple Process', desc: 'Extremely easy to use with just a few clicks.' }, free: { title: 'Free Forever', desc: 'Our service is and will always be free to use.' }, quality: { title: 'High Quality', desc: 'Download in Full HD, 4K, and even 8K resolutions.' }, fast: { title: 'Fast and Safe', desc: 'High-speed downloads without any security risks.' }, cross: { title: 'Cross-Device', desc: 'Works perfectly on PC, Mobile, and Tablets.' }, unlimited: { title: 'Unlimited', desc: 'Download as many videos as you want without limits.' } } },
    faq: { title: 'Frequently Asked Questions', subtitle: 'Everything you need to know about Turbo Video Downloader.', q1: { q: 'Is it free to download videos?', a: 'Yes, Turbo Video Downloader is completely free to use. You can download unlimited videos without any subscription or hidden costs.' }, q2: { q: 'What video qualities are supported?', a: 'We support all available YouTube resolutions, including 720p, 1080p (Full HD), 2K, 4K, and even 8K where available.' }, q3: { q: 'Do I need to install any software?', a: 'No, our downloader is a web-based tool. You don\'t need to install any software or browser extensions to use it.' }, q4: { q: 'Is it safe to use Turbo Video Downloader?', a: 'Absolutely. We don\'t store your data, and we provide direct download links from YouTube\'s own servers to ensure safety.' } },
    footer: { terms: 'Terms of Service', privacy: 'Privacy Policy', contact: 'Contact Us', copyright: '© 2026 Turbo Video Downloader • The Best 1080P & 4K YouTube Video Downloader' }
  },
  hi: {
    nav: { downloader: 'यूट्यूब डाउनलोडर', mp3: 'यूट्यूब से Mp3', mp4: 'यूट्यूब से Mp4', facebook: 'फेसबुक डाउनलोडर' },
    hero: { title: 'यूट्यूब वीडियो डाउनलोडर', subtitle: 'सबसे अच्छा 1080P और 4K यूट्यूब वीडियो डाउनलोडर। उच्च गुणवत्ता वाले यूट्यूब वीडियो सुरक्षित और तेज़ी से डाउनलोड करें।', placeholder: 'यूट्यूब वीडियो लिंक यहाँ पेस्ट करें...', button: 'डाउनलोड' },
    howTo: { title: 'यूट्यूब वीडियो ऑनलाइन कैसे डाउनलोड करें', subtitle: 'अपने पसंदीदा वीडियो डाउनलोड करने के लिए इन 3 सरल चरणों का पालन करें।', steps: { step1: { title: 'लिнк कॉपी करें', desc: 'उस यूट्यूब वीडियो का लिंक कॉपी करें जिसे आप डाउनलोड करना चाहते हैं।' }, step2: { title: 'पेस्ट और फेच', desc: 'लिंक को सर्च बॉक्स में पेस्ट करें और "डाउनलोड" पर क्लिक करें।' }, step3: { title: 'चुनें और सहेजें', desc: 'सहेजने के लिए लक्ष्य वीडियो गुणवत्ता और प्रारूप चुनें।' } } },
    features: { title: 'Turbo Video Downloader सबसे अच्छा क्यों है?', subtitle: 'हम अपने उपयोगकर्ताओं के लिए सबसे विश्वसनीय और तेज़ सेवा प्रदान करते हैं।', items: { simple: { title: 'सरल प्रक्रिया', desc: 'बस कुछ ही क्लिक के साथ उपयोग करना बेहद आसान है।' }, free: { title: 'हमेशा के लिए मुफ्त', desc: 'हमारी सेवा हमेशा उपयोग के लिए मुफ्त है और रहेगी।' }, quality: { title: 'उच्च गुणवत्ता', desc: 'फुल एचडी, 4K और यहां तक कि 8K रिज़ॉल्यूशन में डाउनलोड करें।' }, fast: { title: 'तेज़ और सुरक्षित', desc: 'बिना किसी सुरक्षा जोखिम के उच्च गति डाउनलोड।' }, cross: { title: 'क्रॉस-डिवाइस', desc: 'पीसी, मोबाइल और टैबलेट पर पूरी तरह से काम करता है।' }, unlimited: { title: 'असीमित', desc: 'बिना किसी सीमा के जितने चाहें उतने वीडियो डाउनलोड करें।' } } },
    faq: { title: 'अक्सर पूछे जाने वाले प्रश्न', subtitle: 'Turbo Video Downloader के बारे में वह सब कुछ जो आपको जानना चाहिए।', q1: { q: 'क्या वीडियो डाउनलोड करना मुफ्त है?', a: 'हाँ, Turbo Video Downloader उपयोग करने के लिए पूरी तरह से मुफ्त है। आप बिना किसी सदस्यता या छिपी हुई लागत के असीमित वीडियो डाउनलोड कर सकते हैं।' }, q2: { q: 'कौन सी वीडियो गुणवत्ता समर्थित हैं?', a: 'हम 720p, 1080p (फुल एचडी), 2K, 4K और यहां तक कि 8K सहित सभी उपलब्ध यूट्यूब रिज़ॉल्यूशन का समर्थन करते हैं।' }, q3: { q: 'क्या मुझे कोई सॉफ़्टवेयर इंस्टॉल करने की आवश्यकता है?', a: 'नहीं, हमारा डाउनलोडर एक वेब-आधारित टूल है। आपको इसका उपयोग करने के लिए किसी सॉफ़्टवेयर या ब्राउज़र एक्सटेंशन को इंस्टॉल करने की आवश्यकता नहीं है।' }, q4: { q: 'क्या Turbo Video Downloader का उपयोग करना सुरक्षित है?', a: 'बिल्कुल। हम आपका डेटा संग्रहीत नहीं करते हैं, और हम सुरक्षा सुनिश्चित करने के लिए यूट्यूब के अपने सर्वर से सीधे डाउनलोड लिंक प्रदान करते हैं।' } },
    footer: { terms: 'सेवा की शर्तें', privacy: 'गोपनीयता नीति', contact: 'हमसे संपर्क करें', copyright: '© 2026 Turbo Video Downloader • सबसे अच्छा 1080P और 4K यूट्यूब वीडियो डाउनलोडर' }
  },
  es: {
    nav: { downloader: 'Descargador de YouTube', mp3: 'YouTube a Mp3', mp4: 'YouTube a Mp4', facebook: 'Descargador de Facebook' },
    hero: { title: 'Descargador de videos de YouTube', subtitle: 'El mejor descargador de videos de YouTube 1080P y 4K. Descarga videos de YouTube gratis en línea en alta calidad.', placeholder: 'Pega el enlace del video de YouTube aquí...', button: 'Descargar' },
    howTo: { title: 'Cómo descargar videos de YouTube en línea', subtitle: 'Sigue estos 3 sencillos pasos para descargar tus videos favoritos.', steps: { step1: { title: 'Copiar enlace', desc: 'Copia el enlace del video de YouTube que quieres descargar.' }, step2: { title: 'Pegar y buscar', desc: 'Pega el enlace en el cuadro de búsqueda y haz clic en "Descargar".' }, step3: { title: 'Seleccionar y guardar', desc: 'Selecciona la calidad y el formato del video de destino para guardar.' } } },
    features: { title: '¿Por qué Turbo Video Downloader es el mejor?', subtitle: 'Brindamos el servicio más confiable y rápido para nuestros usuarios.', items: { simple: { title: 'Proceso simple', desc: 'Extremadamente fácil de usar con solo unos pocos clics.' }, free: { title: 'Gratis para siempre', desc: 'Nuestro servicio es y será siempre gratuito.' }, quality: { title: 'Alta calidad', desc: 'Descarga en resoluciones Full HD, 4K e incluso 8K.' }, fast: { title: 'Rápido y seguro', desc: 'Descargas de alta velocidad sin riesgos de seguridad.' }, cross: { title: 'Multiplataforma', desc: 'Funciona perfectamente en PC, móviles y tabletas.' }, unlimited: { title: 'Ilimitado', desc: 'Descarga tantos videos como quieras sin límites.' } } },
    faq: { title: 'Preguntas frecuentes', subtitle: 'Todo lo que necesitas saber sobre Turbo Video Downloader.', q1: { q: '¿Es gratis descargar videos?', a: 'Sí, Turbo Video Downloader es completamente gratuito. Puedes descargar videos ilimitados sin suscripción ni costos ocultos.' }, q2: { q: '¿Qué calidades de video son compatibles?', a: 'Admitimos todas las resoluciones de YouTube disponibles, incluidas 720p, 1080p (Full HD), 2K, 4K e incluso 8K.' }, q3: { q: '¿Necesito instalar algún software?', a: 'No, nuestro descargador es una herramienta web. No necesitas instalar software ni extensiones de navegador.' }, q4: { q: '¿Es seguro usar Turbo Video Downloader?', a: 'Absolutamente. No almacenamos tus datos y proporcionamos enlaces de descarga directa desde los servidores de YouTube.' } },
    footer: { terms: 'Términos de servicio', privacy: 'Política de privacidad', contact: 'Contáctenos', copyright: '© 2026 Turbo Video Downloader • El mejor descargador de videos de YouTube 1080P y 4K' }
  },
  fr: {
    nav: { downloader: 'Téléchargeur YouTube', mp3: 'YouTube en Mp3', mp4: 'YouTube en Mp4', facebook: 'Téléchargeur Facebook' },
    hero: { title: 'Téléchargeur de vidéos YouTube', subtitle: 'Le meilleur téléchargeur de vidéos YouTube 1080P & 4K. Téléchargez des vidéos YouTube gratuitement en ligne en haute qualité.', placeholder: 'Collez le lien de la vidéo YouTube ici...', button: 'Télécharger' },
    howTo: { title: 'Comment télécharger des vidéos YouTube en ligne', subtitle: 'Suivez ces 3 étapes simples pour télécharger vos vidéos préférées.', steps: { step1: { title: 'Copier le lien', desc: 'Copiez le lien de la vidéo YouTube que vous souhaitez télécharger.' }, step2: { title: 'Coller et récupérer', desc: 'Collez le lien dans la zone de recherche et cliquez sur "Télécharger".' }, step3: { title: 'Sélectionner et enregistrer', desc: 'Sélectionnez la qualité et le format de la vidéo cible à enregistrer.' } } },
    features: { title: 'Pourquoi Turbo Video Downloader est le meilleur ?', subtitle: 'Nous fournissons le service le plus fiable et le plus rapide pour nos utilisateurs.', items: { simple: { title: 'Processus simple', desc: 'Extrêmement facile à utiliser en quelques clics seulement.' }, free: { title: 'Gratuit pour toujours', desc: 'Notre service est et sera toujours gratuit.' }, quality: { title: 'Haute qualité', desc: 'Téléchargez en résolutions Full HD, 4K et même 8K.' }, fast: { title: 'Rapide et sûr', desc: 'Téléchargements à haute vitesse sans aucun risque de sécurité.' }, cross: { title: 'Multi-appareils', desc: 'Fonctionne parfaitement sur PC, mobile et tablette.' }, unlimited: { title: 'Illimité', desc: 'Téléchargez autant de vidéos que vous le souhaitez, sans limites.' } } },
    faq: { title: 'Foire aux questions', subtitle: 'Tout ce que vous devez savoir sur Turbo Video Downloader.', q1: { q: 'Le téléchargement de vidéos est-il gratuit ?', a: 'Oui, Turbo Video Downloader est totalement gratuit. Vous pouvez télécharger des vidéos illimitées sans abonnement ni frais cachés.' }, q2: { q: 'Quelles qualités vidéo sont prises en charge ?', a: 'Nous prenons en charge toutes les résolutions YouTube disponibles, y compris 720p, 1080p (Full HD), 2K, 4K et même 8K.' }, q3: { q: 'Dois-je installer un logiciel ?', a: 'No, notre téléchargeur est un outil en ligne. Vous n\'avez pas besoin d\'installer de logiciel ou d\'extension de navigateur.' }, q4: { q: 'Est-il sûr d\'utiliser Turbo Video Downloader ?', a: 'Absolument. Nous ne stockons pas vos données et nous fournissons des liens de téléchargement direct depuis les serveurs de YouTube.' } },
    footer: { terms: 'Conditions d\'utilisation', privacy: 'Politique de confidentialité', contact: 'Contactez-nous', copyright: '© 2026 Turbo Video Downloader • Le meilleur téléchargeur de vidéos YouTube 1080P & 4K' }
  },
  ar: {
    nav: { downloader: 'محمل يوتيوب', mp3: 'يوتيوب إلى Mp3', mp4: 'يوتيوب إلى Mp4', facebook: 'محمل فيسبوك' },
    hero: { title: 'محمل فيديوهات يوتيوب', subtitle: 'أفضل محمل فيديوهات يوتيوب بدقة 1080P و 4K. قم بتحميل فيديوهات يوتيوب مجاناً عبر الإنترنت بجودة عالية.', placeholder: 'أدخل رابط فيديو يوتيوب هنا...', button: 'تحميل' },
    howTo: { title: 'كيفية تحميل فيديوهات يوتيوب عبر الإنترنت', subtitle: 'اتبع هذه الخطوات الثلاث البسيطة لتحميل فيديوهاتك المفضلة.', steps: { step1: { title: 'نسخ الرابط', desc: 'انسخ رابط فيديو يوتيوب الذي تريد تحميله.' }, step2: { title: 'لصق وجلب', desc: 'الصق الرابط في مربع البحث وانقر على "تحميل".' }, step3: { title: 'اختيار وحفظ', desc: 'اختر جودة الفيديو المستهدفة والتنسيق للحفظ.' } } },
    features: { title: 'لماذا Turbo Video Downloader هو الأفضل؟', subtitle: 'نحن نقدم الخدمة الأكثر موثوقية وسرعة لمستخدمينا.', items: { simple: { title: 'عملية بسيطة', desc: 'سهل الاستخدام للغاية ببضع نقرات فقط.' }, free: { title: 'مجاني للأبد', desc: 'خدمتنا مجانية وستظل كذلك دائماً.' }, quality: { title: 'جودة عالية', desc: 'تحميل بدقة Full HD و 4K وحتى 8K.' }, fast: { title: 'سريع وآمن', desc: 'تحميل عالي السرعة دون أي مخاطر أمنية.' }, cross: { title: 'متعدد الأجهزة', desc: 'يعمل بشكل مثالي على الكمبيوتر والموبايل والتابلت.' }, unlimited: { title: 'غير محدود', desc: 'قم بتحميل أي عدد تريده من الفيديوهات دون قيود.' } } },
    faq: { title: 'الأسئلة الشائعة', subtitle: 'كل ما تحتاج لمعرفته حول Turbo Video Downloader.', q1: { q: 'هل تحميل الفيديوهات مجاني؟', a: 'نعم، Turbo Video Downloader مجاني تماماً. يمكنك تحميل فيديوهات غير محدودة دون اشتراك أو تكاليف خفية.' }, q2: { q: 'ما هي جودة الفيديو المدعومة؟', a: 'نحن ندعم جميع دقات يوتيوب المتاحة، بما في ذلك 720p و 1080p (Full HD) و 2K و 4K وحتى 8K.' }, q3: { q: 'هل أحتاج إلى تثبيت أي برنامج؟', a: 'لا، المحمل الخاص بنا هو أداة عبر الويب. لا تحتاج إلى تثبيت أي برامج أو إضافات للمتصفح.' }, q4: { q: 'هل استخدام Turbo Video Downloader آمن؟', a: 'بالتأكيد. نحن لا نخزن بياناتك، ونوفر روابط تحميل مباشرة من خوادم يوتيوب لضمان الأمان.' } },
    footer: { terms: 'شروط الخدمة', privacy: 'سياسة الخصوصية', contact: 'اتصل بنا', copyright: '© 2026 Turbo Video Downloader • أفضل محمل فيديوهات يوتيوب بدقة 1080P و 4K' }
  },
  de: {
    nav: { downloader: 'YouTube Downloader', mp3: 'YouTube zu Mp3', mp4: 'YouTube zu Mp4', facebook: 'Facebook Downloader' },
    hero: { title: 'YouTube Video Downloader', subtitle: 'Der beste 1080P & 4K YouTube Video Downloader. Laden Sie YouTube-Videos kostenlos online in hoher Qualität herunter.', placeholder: 'YouTube-Videolink hier einfügen...', button: 'Herunterladen' },
    howTo: { title: 'So laden Sie YouTube-Videos online herunter', subtitle: 'Folgen Sie diesen 3 einfachen Schritten, um Ihre Lieblingsvideos herunterzuladen.', steps: { step1: { title: 'Link kopieren', desc: 'Kopieren Sie den Link des YouTube-Videos, das Sie herunterladen möchten.' }, step2: { title: 'Einfügen und abrufen', desc: 'Fügen Sie den Link in das Suchfeld ein und klicken Sie auf "Herunterladen".' }, step3: { title: 'Auswählen und speichern', desc: 'Wählen Sie die Zielvideoqualität und das Format zum Speichern aus.' } } },
    features: { title: 'Warum ist Turbo Video Downloader der Beste?', subtitle: 'Wir bieten den zuverlässigsten und schnellsten Service für unsere Benutzer.', items: { simple: { title: 'Einfacher Prozess', desc: 'Extrem einfach zu bedienen mit nur wenigen Klicks.' }, free: { title: 'Für immer kostenlos', desc: 'Unser Service ist und bleibt immer kostenlos.' }, quality: { title: 'Hohe Qualität', desc: 'Download in Full HD, 4K und sogar 8K Auflösungen.' }, fast: { title: 'Schnell und sicher', desc: 'Hochgeschwindigkeits-Downloads ohne Sicherheitsrisiken.' }, cross: { title: 'Geräteübergreifend', desc: 'Funktioniert perfekt auf PC, Handy und Tablet.' }, unlimited: { title: 'Unbegrenzt', desc: 'Laden Sie so viele Videos herunter, wie Sie möchten, ohne Einschränkungen.' } } },
    faq: { title: 'Häufig gestellte Fragen', subtitle: 'Alles, was Sie über Turbo Video Downloader wissen müssen.', q1: { q: 'Ist das Herunterladen von Videos kostenlos?', a: 'Ja, Turbo Video Downloader ist völlig kostenlos. Sie können unbegrenzt Videos ohne Abonnement oder versteckte Kosten herunterladen.' }, q2: { q: 'Welche Videoqualitäten werden unterstützt?', a: 'Wir unterstützen alle verfügbaren YouTube-Auflösungen, einschließlich 720p, 1080p (Full HD), 2K, 4K und sogar 8K.' }, q3: { q: 'Muss ich eine Software installieren?', a: 'Nein, unser Downloader ist ein webbasiertes Tool. Sie müssen keine Software oder Browser-Erweiterungen installieren.' }, q4: { q: 'Ist die Nutzung von Turbo Video Downloader sicher?', a: 'Absolut. Wir speichern Ihre Daten nicht und stellen direkte Download-Links von den YouTube-Servern bereit.' } },
    footer: { terms: 'Nutzungsbedingungen', privacy: 'Datenschutzrichtlinie', contact: 'Kontaktieren Sie uns', copyright: '© 2026 Turbo Video Downloader • Der beste 1080P & 4K YouTube Video Downloader' }
  },
  pt: {
    nav: { downloader: 'Downloader do YouTube', mp3: 'YouTube para Mp3', mp4: 'YouTube para Mp4', facebook: 'Downloader do Facebook' },
    hero: { title: 'Downloader de Vídeo do YouTube', subtitle: 'O melhor downloader de vídeo do YouTube 1080P e 4K. Baixe vídeos do YouTube gratuitamente online em alta qualidade.', placeholder: 'Cole o link do vídeo do YouTube aqui...', button: 'Baixar' },
    howTo: { title: 'Como baixar vídeos do YouTube online', subtitle: 'Siga estes 3 passos simples para baixar seus vídeos favoritos.', steps: { step1: { title: 'Copiar Link', desc: 'Copie o link do vídeo do YouTube que você deseja baixar.' }, step2: { title: 'Colar e Buscar', desc: 'Cole o link na caixa de pesquisa e clique em "Baixar".' }, step3: { title: 'Selecionar e Salvar', desc: 'Selecione a qualidade e o formato do vídeo de destino para salvar.' } } },
    features: { title: 'Por que o Turbo Video Downloader é o melhor?', subtitle: 'Oferecemos o serviço mais confiável e rápido para nossos usuários.', items: { simple: { title: 'Processo Simples', desc: 'Extremamente fácil de usar com apenas alguns cliques.' }, free: { title: 'Grátis para Sempre', desc: 'Nosso serviço é e será sempre gratuito.' }, quality: { title: 'Alta Qualidade', desc: 'Baixe em resoluções Full HD, 4K e até 8K.' }, fast: { title: 'Rápido e Seguro', desc: 'Downloads de alta velocidade sem riscos de segurança.' }, cross: { title: 'Multi-dispositivo', desc: 'Funciona perfeitamente em PC, celular e tablet.' }, unlimited: { title: 'Ilimitado', desc: 'Baixe quantos vídeos quiser sem limites.' } } },
    faq: { title: 'Perguntas Frequentes', subtitle: 'Tudo o que você precisa saber sobre o Turbo Video Downloader.', q1: { q: 'O download de vídeos é gratuito?', a: 'Sim, o Turbo Video Downloader é totalmente gratuito. Você pode baixar vídeos ilimitados sem assinatura ou custos ocultos.' }, q2: { q: 'Quais qualidades de vídeo são suportadas?', a: 'Suportamos todas as resoluções do YouTube disponíveis, incluindo 720p, 1080p (Full HD), 2K, 4K e até 8K.' }, q3: { q: 'Preciso instalar algum software?', a: 'Não, nosso downloader é uma ferramenta baseada na web. Você não precisa instalar software ou extensões de navegador.' }, q4: { q: 'É seguro usar o Turbo Video Downloader?', a: 'Absolutamente. Não armazenamos seus dados e fornecemos links de download direto dos servidores do YouTube.' } },
    footer: { terms: 'Termos de Serviço', privacy: 'Política de Privacidade', contact: 'Contate-nos', copyright: '© 2026 Turbo Video Downloader • O melhor downloader de vídeo do YouTube 1080P e 4K' }
  },
  ru: {
    nav: { downloader: 'Загрузчик YouTube', mp3: 'YouTube в Mp3', mp4: 'YouTube в Mp4', facebook: 'Загрузчик Facebook' },
    hero: { title: 'Загрузчик видео с YouTube', subtitle: 'Лучший загрузчик видео с YouTube в 1080P и 4K. Скачивайте видео с YouTube бесплатно онлайн в высоком качестве.', placeholder: 'Вставьте ссылку на видео YouTube здесь...', button: 'Скачать' },
    howTo: { title: 'Как скачать видео с YouTube онлайн', subtitle: 'Выполните эти 3 простых шага, чтобы скачать любимые видео.', steps: { step1: { title: 'Скопировать ссылку', desc: 'Скопируйте ссылку на видео YouTube, которое хотите скачать.' }, step2: { title: 'Вставить и получить', desc: 'Вставьте ссылку в поле поиска и нажмите «Скачать».' }, step3: { title: 'Выбрать и сохранить', desc: 'Выберите качество и формат целевого видео для сохранения.' } } },
    features: { title: 'Почему Turbo Video Downloader лучший?', subtitle: 'Мы предоставляем самый надежный и быстрый сервис для наших пользователей.', items: { simple: { title: 'Простой процесс', desc: 'Чрезвычайно прост в использовании всего в несколько кликов.' }, free: { title: 'Бесплатно навсегда', desc: 'Наш сервис есть и всегда будет бесплатным.' }, quality: { title: 'Высокое качество', desc: 'Скачивайте в разрешениях Full HD, 4K и даже 8K.' }, fast: { title: 'Быстро и безопасно', desc: 'Высокоскоростная загрузка без рисков для безопасности.' }, cross: { title: 'Мультиплатформенность', desc: 'Отлично работает на ПК, мобильных телефонах и планшетах.' }, unlimited: { title: 'Безлимитно', desc: 'Скачивайте столько видео, сколько хотите, без ограничений.' } } },
    faq: { title: 'Часто задаваемые вопросы', subtitle: 'Все, что вам нужно знать о Turbo Video Downloader.', q1: { q: 'Скачивание видео бесплатно?', a: 'Да, Turbo Video Downloader полностью бесплатен. Вы можете скачивать неограниченное количество видео без подписки или скрытых платежей.' }, q2: { q: 'Какие качества видео поддерживаются?', a: 'Мы поддерживаем все доступные разрешения YouTube, включая 720p, 1080p (Full HD), 2K, 4K и даже 8K.' }, q3: { q: 'Нужно ли мне устанавливать какое-либо программное обеспечение?', a: 'Нет, наш загрузчик — это веб-инструмент. Вам не нужно устанавливать программное обеспечение или расширения для браузера.' }, q4: { q: 'Безопасно ли использовать Turbo Video Downloader?', a: 'Безусловно. Мы не храним ваши данные и предоставляем прямые ссылки для скачивания с серверов YouTube.' } },
    footer: { terms: 'Условия использования', privacy: 'Политика конфиденциальности', contact: 'Связаться с нами', copyright: '© 2026 Turbo Video Downloader • Лучший загрузчик видео с YouTube в 1080P и 4K' }
  },
  ko: {
    nav: { downloader: 'YouTube 다운로더', mp3: 'YouTube를 Mp3로', mp4: 'YouTube를 Mp4로', facebook: 'Facebook 다운로더' },
    hero: { title: 'YouTube 비디오 다운로더', subtitle: '최고의 1080P 및 4K YouTube 비디오 다운로더. 온라인에서 고화질로 무료 YouTube 비디오를 다운로드하세요.', placeholder: '여기에 YouTube 비디오 링크를 붙여넣으세요...', button: '다운로드' },
    howTo: { title: '온라인에서 YouTube 비디오를 다운로드하는 방법', subtitle: '좋아하는 비디오를 다운로드하려면 다음 3가지 간단한 단계를 따르세요.', steps: { step1: { title: '링크 복사', desc: '다운로드하려는 YouTube 비디오의 링크를 복사합니다.' }, step2: { title: '붙여넣기 및 가져오기', desc: '검색 상자에 링크를 붙여넣고 "다운로드"를 클릭합니다.' }, step3: { title: '선택 및 저장', desc: '저장할 대상 비디오 품질과 형식을 선택합니다.' } } },
    features: { title: 'Turbo Video Downloader은 왜 최고인가요?', subtitle: '우리는 사용자에게 가장 안정적이고 빠른 서비스를 제공합니다.', items: { simple: { title: '간단한 프로세스', desc: '몇 번의 클릭만으로 매우 쉽게 사용할 수 있습니다.' }, free: { title: '영원히 무료', desc: '우리의 서비스는 항상 무료이며 앞으로도 그럴 것입니다.' }, quality: { title: '고품질', desc: 'Full HD, 4K 및 8K 해상도로 다운로드하세요.' }, fast: { title: '빠르고 안전함', desc: '보안 위험 없는 고속 다운로드.' }, cross: { title: '모든 기기 지원', desc: 'PC, 모바일, 태블릿에서 완벽하게 작동합니다.' }, unlimited: { title: '무제한', desc: '제한 없이 원하는 만큼 많은 비디오를 다운로드하세요.' } } },
    faq: { title: '자주 묻는 질문', subtitle: 'Turbo Video Downloader에 대해 알아야 할 모든 것.', q1: { q: '비디오 다운로드는 무료인가요?', a: '네, Turbo Video Downloader은 완전히 무료입니다. 구독이나 숨겨진 비용 없이 무제한으로 비디오를 다운로드할 수 있습니다.' }, q2: { q: '어떤 비디오 품질이 지원되나요?', a: '720p, 1080p(Full HD), 2K, 4K 및 8K를 포함하여 사용 가능한 모든 YouTube 해상도를 지원합니다.' }, q3: { q: '소프트웨어를 설치해야 하나요?', a: '아니요, 저희 다운로더는 웹 기반 도구입니다. 소프트웨어나 브라우저 확장 프로그램을 설치할 필요가 없습니다.' }, q4: { q: 'Turbo Video Downloader을 사용하는 것이 안전한가요?', a: '물론입니다. 당사는 귀하의 데이터를 저장하지 않으며 보안을 위해 YouTube 서버에서 직접 다운로드 링크를 제공합니다.' } },
    footer: { terms: '서비스 약관', privacy: '개인정보 처리방침', contact: '문의하기', copyright: '© 2026 Turbo Video Downloader • 최고의 1080P 및 4K YouTube 비디오 다운로더' }
  },
  ja: {
    nav: { downloader: 'YouTube ダウンローダー', mp3: 'YouTube から Mp3', mp4: 'YouTube から Mp4', facebook: 'Facebook ダウンローダー' },
    hero: { title: 'YouTube 動画ダウンローダー', subtitle: '最高の 1080P & 4K YouTube 動画ダウンローダー. オン라인で高品質の YouTube 動画を無料でダウンロードできます。', placeholder: 'ここに YouTube 動画のリンクを貼り付けてください...', button: 'ダウンロード' },
    howTo: { title: 'オンラインで YouTube 動画をダウンロードする方法', subtitle: 'お気に入りの動画をダウンロードするには、次の 3 つ의 簡単なステップに従ってください。', steps: { step1: { title: 'リンクをコピー', desc: 'ダウンロードしたい YouTube 動画のリンクをコピーします。' }, step2: { title: '貼り付けて取得', desc: '検索ボックスにリンクを貼り付けて「ダウンロード」をクリックします。' }, step3: { title: '選択して保存', desc: '保存するターゲットの動画品質と形式を選択します。' } } },
    features: { title: 'なぜ Turbo Video Downloader が最高なのですか？', subtitle: '私たちはユーザーに最も信頼性が高く高速なサービスを提供します。', items: { simple: { title: 'シンプルなプロセス', desc: '数回クリックするだけで非常に簡単に使用できます。' }, free: { title: '永久に無料', desc: '私たちのサービスは常に無料であり、今後도そうです。' }, quality: { title: '高品質', desc: 'Full HD、4K、さらには 8K 解像度でダウンロードできます。' }, fast: { title: '高速で安全', desc: '보안 위험 없는 고속 다운로드.' }, cross: { title: 'マルチデバイス対応', desc: 'PC、모바일, 태블릿에서 완벽하게 작동합니다.' }, unlimited: { title: '無制限', desc: '제한 없이 원하는 만큼 많은 비디오를 다운로드하세요.' } } },
    faq: { title: 'よくある質問', subtitle: 'Turbo Video Downloader について知っておくべきことすべて。', q1: { q: '動画のダウンロードは無料ですか？', a: 'はい、Turbo Video Downloader は完全に無料です。サブスクリプションや隠れた費用なしで、無制限に動画をダウンロードできます。' }, q2: { q: 'どのような動画品質がサポートされていますか？', a: '720p、1080p（Full HD）、2K、4K、さらには 8K を含む、利用可能なすべての YouTube 解像度をサポートしています。' }, q3: { q: 'ソフトウェアをインストールする必要がありますか？', a: 'いいえ、当社のダウンローダーはウェブベースのツールです。ソフトウェアやブラウザ拡張機能をインストールする必要はありません。' }, q4: { q: 'Turbo Video Downloader を使用しても安全ですか？', a: 'もちろんです。当社はお客様のデータを保存せず、セキュリティを確保するために YouTube のサーバーから直接ダウンロードリンクを提供します。' } },
    footer: { terms: '利用規約', privacy: 'プライバシーポリシー', contact: 'お問い合わせ', copyright: '© 2026 Turbo Video Downloader • 最高の 1080P & 4K YouTube 動画ダウンローダー' }
  },
  tr: {
    nav: { downloader: 'YouTube İndirici', mp3: 'YouTube\'dan Mp3\'e', mp4: 'YouTube\'dan Mp4\'e', facebook: 'Facebook İndirici' },
    hero: { title: 'YouTube Video İndirici', subtitle: 'En iyi 1080P ve 4K YouTube video indirici. YouTube videolarını yüksek kalitede çevrimiçi olarak ücretsiz indirin.', placeholder: 'YouTube video bağlantısını buraya yapıştırın...', button: 'İndir' },
    howTo: { title: 'YouTube Videoları Çevrimiçi Nasıl İndirilir', subtitle: 'Favori videolarınızı indirmek için bu 3 basit adımı izleyin.', steps: { step1: { title: 'Bağlantıyı Kopyala', desc: 'İndirmek istediğiniz YouTube videosunun bağlantısını kopyalayın.' }, step2: { title: 'Yapıştır ve Getir', desc: 'Bağlantıyı arama kutusuna yapıştırın ve "İndir"e tıklayın.' }, step3: { title: 'Seç ve Kaydet', desc: 'Kaydetmek için hedef video kalitesini ve formatını seçin.' } } },
    features: { title: 'Neden Turbo Video Downloader En İyisi?', subtitle: 'Kullanıcılarımız için en güvenilir ve hızlı hizmeti sunuyoruz.', items: { simple: { title: 'Basit İşlem', desc: 'Sadece several tıklama ile kullanımı son derece kolay.' }, free: { title: 'Sonsuza Kadar Ücretsiz', desc: 'Hizmetimiz her zaman ücretsizdir ve öyle kalacaktır.' }, quality: { title: 'Yüksek Kalite', desc: 'Full HD, 4K ve hatta 8K çözünürlüklerde indirin.' }, fast: { title: 'Hızlı ve Güvenli', desc: 'Güvenlik riski olmadan yüksek hızlı indirmeler.' }, cross: { title: 'Tüm Cihazlarda', desc: 'PC, mobil ve tablette mükemmel çalışır.' }, unlimited: { title: 'Sınırsız', desc: 'Sınır olmadan istediğiniz kadar video indirin.' } } },
    faq: { title: 'Sıkça Sorulan Sorular', subtitle: 'Turbo Video Downloader hakkında bilmeniz gereken her şey.', q1: { q: 'Video indirmek ücretsiz mi?', a: 'Evet, Turbo Video Downloader tamamen ücretsizdir. Abonelik veya gizli maliyetler olmadan sınırsız video indirebilirsiniz.' }, q2: { q: 'Hangi video kaliteleri destekleniyor?', a: '720p, 1080p (Full HD), 2K, 4K ve hatta 8K dahil olmak üzere mevcut tüm YouTube çözünürlüklerini destekliyoruz.' }, q3: { q: 'Herhangi bir yazılım yüklemem gerekiyor mu?', a: 'Herhangi bir yazılım veya tarayıcı uzantısı yüklemenize gerek yoktur.' }, q4: { q: 'Turbo Video Downloader kullanmak güvenli mi?', a: 'Kesinlikle. Verilerinizi saklamıyoruz ve güvenlik için doğrudan YouTube sunucularından indirme bağlantıları sağlıyoruz.' } },
    footer: { terms: 'Kullanım Koşulları', privacy: 'Gizlilik Politikası', contact: 'Bize Ulaşın', copyright: '© 2026 Turbo Video Downloader • En İyi 1080P & 4K YouTube Video İndirici' }
  },
  it: { ...en_fallback() },
  vi: { ...en_fallback() },
  id: { ...en_fallback() },
  th: { ...en_fallback() },
  'zh-tw': { ...en_fallback() },
  'zh-cn': { ...en_fallback() },
  sk: { ...en_fallback() },
  pl: { ...en_fallback() },
  nl: { ...en_fallback() },
  sv: { ...en_fallback() },
  no: { ...en_fallback() },
  da: { ...en_fallback() },
  fi: { ...en_fallback() },
  el: { ...en_fallback() },
  cs: { ...en_fallback() },
  hu: { ...en_fallback() },
  ro: { ...en_fallback() },
  bg: { ...en_fallback() },
  uk: { ...en_fallback() },
  he: { ...en_fallback() },
  fa: { ...en_fallback() },
  ms: { ...en_fallback() },
  tl: { ...en_fallback() },
};

function en_fallback(): Translation {
  return {
    nav: { downloader: 'YouTube Downloader', mp3: 'Youtube To Mp3', mp4: 'Youtube To Mp4', facebook: 'Facebook Downloader' },
    hero: { title: 'YouTube Video Downloader', subtitle: 'The Best 1080P & 4K YouTube Video Downloader. Download high-quality YouTube videos safely and quickly.', placeholder: 'Paste YouTube video link here...', button: 'Download' },
    howTo: { title: 'How to Download YouTube videos Online', subtitle: 'Follow these 3 simple steps to download your favorite videos.', steps: { step1: { title: 'Copy Link', desc: 'Copy the YouTube video link you want to download.' }, step2: { title: 'Paste & Fetch', desc: 'Paste the link into the search box and click "Download".' }, step3: { title: 'Select & Save', desc: 'Select the target video quality and format to save.' } } },
    features: { title: 'Why Turbo Video Downloader is the best?', subtitle: 'We provide the most reliable and fastest service for our users.', items: { simple: { title: 'Simple Process', desc: 'Extremely easy to use with just a few clicks.' }, free: { title: 'Free Forever', desc: 'Our service is and will always be free to use.' }, quality: { title: 'High Quality', desc: 'Download in Full HD, 4K, and even 8K resolutions.' }, fast: { title: 'Fast and Safe', desc: 'High-speed downloads without any security risks.' }, cross: { title: 'Cross-Device', desc: 'Works perfectly on PC, Mobile, and Tablets.' }, unlimited: { title: 'Unlimited', desc: 'Download as many videos as you want without limits.' } } },
    faq: { title: 'Frequently Asked Questions', subtitle: 'Everything you need to know about Turbo Video Downloader.', q1: { q: 'Is it free to download videos?', a: 'Yes, Turbo Video Downloader is completely free to use. You can download unlimited videos without any subscription or hidden costs.' }, q2: { q: 'What video qualities are supported?', a: 'We support all available YouTube resolutions, including 720p, 1080p (Full HD), 2K, 4K, and even 8K where available.' }, q3: { q: 'Do I need to install any software?', a: 'No, our downloader is a web-based tool. You don\'t need to install any software or browser extensions to use it.' }, q4: { q: 'Is it safe to use Turbo Video Downloader?', a: 'Absolutely. We don\'t store your data, and we provide direct download links from YouTube\'s own servers to ensure safety.' } },
    footer: { terms: 'Terms of Service', privacy: 'Privacy Policy', contact: 'Contact Us', copyright: '© 2026 Turbo Video Downloader • The Best 1080P & 4K YouTube Video Downloader' }
  };
}
