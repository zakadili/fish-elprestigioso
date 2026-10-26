'use strict';
const TRANSLATIONS = {
fr: {
 skip:'Aller au contenu principal',brandSub:'MOROCCAN SEAFOOD EXPORT',home:'Accueil',products:'Produits',gallery:'Galerie',packaging:'Conditionnement',export:'Export',contact:'Contact',quote:'Demander un devis',
 heroEyebrow:'DE DAKHLA VERS LE MONDE',heroTitle:"L'excellence des produits de la mer <em>marocains.</em>",heroText:"Poissons frais et congelés, céphalopodes et crustacés pour les importateurs, grossistes et professionnels à l'international.",explore:'Découvrir nos produits',bulk:'Volumes professionnels',freshFrozen:'Frais et congelé',fromDakhla:'Dakhla, Maroc',heroArtTag:"L'ATLANTIQUE, NOTRE HORIZON",factQuality:'Sélection des produits',factCold:'Solutions de conservation',factPack:'Conditionnement en gros',factTrade:'Commerce international',
 productsKicker:'NOTRE SÉLECTION',productsTitle:'Nos produits de la mer',productsIntro:'Des produits sélectionnés pour répondre aux besoins des professionnels. Les disponibilités, calibres, conditionnements et volumes sont à confirmer sur demande.',product1:'Thon & bonite',product2:'Poulpe',product3:'Poissons rouges',product4:'Daurade',product5:'Découpes & filets',productMeta:'Sur demande · Selon disponibilité',availabilityNote:'Photographies réelles fournies pour le projet. Elles ne constituent pas un inventaire en temps réel.',
 galleryKicker:'DES PRODUITS. DES LOTS. DES EXPÉDITIONS.',galleryTitle:'Galerie terrain',galleryIntro:'Découvrez une sélection de photographies de poissons, fruits de mer, préparation et conditionnement pour le commerce professionnel.',filterAll:'Tout voir',filterFish:'Poissons',filterSeafood:'Fruits de mer',filterProcessing:'Préparation',filterPackaging:'Conditionnement',galleryMore:'Voir davantage de photos',galleryLess:'Afficher moins',
 packageKicker:'PRÉPARATION & CONDITIONNEMENT',packageTitle:"Des volumes pensés pour l'export.",packageText:"Préparation de lots, emballage en cartons et organisation des expéditions : les caractéristiques de chaque commande sont définies avec l'acheteur, selon le produit et la destination.",packageCta:'Discuter de votre commande',packageOverlay:'Cartons & palettes',packageOverlaySub:'Conditionnement commercial',packagePoint1:'État du produit',packagePoint1Sub:'Frais ou congelé, selon la référence',packagePoint2:'Formats et cartons',packagePoint2Sub:'Spécifications à convenir',packagePoint3:'Documents',packagePoint3Sub:'Selon les exigences applicables',packagePoint4:'Coordination logistique',packagePoint4Sub:'Options à étudier selon la destination',
 exportKicker:'DAKHLA · MAROC · INTERNATIONAL',exportTitle:'De notre côte atlantique à vos marchés.',exportText:"Fish El Prestigioso s'adresse aux importateurs, grossistes, distributeurs et acheteurs souhaitant étudier un approvisionnement en produits de la mer. Parlons espèces, quantités, emballage, délais et destination.",exportStep1:'01 · Votre besoin',exportStep2:'02 · Notre proposition',exportStep3:"03 · Organisation de l'expédition",exportCta:'Devenir partenaire',
 contactKicker:'VOTRE PARTENAIRE COMMERCIAL',contactTitle:'Construisons votre prochain approvisionnement.',contactIntro:'Vous achetez des produits de la mer en volumes professionnels ? Indiquez les espèces, quantités et pays de destination pour préparer votre demande.',location:'Zone industrielle, Dakhla, Maroc',formHeading:'Demande de cotation',formName:'Nom complet',formCompany:'Entreprise',formEmail:'E-mail professionnel',formCountry:'Pays de destination',formDetails:'Produits, volumes et conditionnement souhaités',formButton:'Préparer ma demande',formNote:"Bêta : aucune adresse commerciale n'est encore configurée. Le formulaire prépare votre message, sans l'envoyer automatiquement.",formReady:'Votre message est préparé ci-dessous. Copiez-le pour le transmettre à votre contact commercial.',copyMessage:'Copier la demande',copied:'Copié !',copyFail:'Sélectionnez et copiez le texte ci-dessus.',footerTagline:'Produits de la mer · Commerce de gros · Export international',footerBottom:'Projet bêta · Informations commerciales à confirmer',
 galleryNames:['Thon & bonite','Poulpe','Poissons rouges','Daurades','Poisson préparé','Entrepôt frigorifique','Lot de maquereaux','Crevettes','Crabes','Préparation du poisson','Port de pêche et export','Gros poissons au marché','Caisse de produits de la mer','Poissons pélagiques','Filets & découpes','Produits en cours de préparation','Bonites conditionnées','Préparation en atelier','Produits congelés','Poissons entiers']
},
en: {
 skip:'Skip to main content',brandSub:'MOROCCAN SEAFOOD EXPORT',home:'Home',products:'Products',gallery:'Gallery',packaging:'Packaging',export:'Export',contact:'Contact',quote:'Request a quote',
 heroEyebrow:'FROM DAKHLA TO THE WORLD',heroTitle:'Premium Moroccan <em>seafood export.</em>',heroText:'Fresh and frozen fish, cephalopods and crustaceans for importers, wholesalers and professional buyers worldwide.',explore:'Explore our products',bulk:'Wholesale volumes',freshFrozen:'Fresh and frozen',fromDakhla:'Dakhla, Morocco',heroArtTag:'THE ATLANTIC IS OUR HORIZON',factQuality:'Seafood selection',factCold:'Storage & temperature options',factPack:'Bulk packaging',factTrade:'International trade',
 productsKicker:'PREMIUM SELECTION',productsTitle:'Our seafood products',productsIntro:'Carefully selected seafood for professional buyers. Availability, grades, packaging and quantities are confirmed on request.',product1:'Tuna & bonito',product2:'Octopus',product3:'Red fish',product4:'Sea bream',product5:'Fish cuts & fillets',productMeta:'On request · Subject to availability',availabilityNote:'Real photographs supplied for the project. They do not represent live inventory.',
 galleryKicker:'REAL PRODUCTS. REAL SHIPMENTS.',galleryTitle:'Seafood gallery',galleryIntro:'Explore selected photos of fish, seafood, preparation and packaging for wholesale trade.',filterAll:'View all',filterFish:'Fish',filterSeafood:'Seafood',filterProcessing:'Preparation',filterPackaging:'Packaging',galleryMore:'See more photos',galleryLess:'Show fewer',
 packageKicker:'PACKAGING & ORDER PREPARATION',packageTitle:'Wholesale quantities for export.',packageText:'Order preparation, carton packing and shipment coordination: specifications are discussed with each buyer based on the product and destination.',packageCta:'Discuss your order',packageOverlay:'Cartons & pallets',packageOverlaySub:'Wholesale packaging',packagePoint1:'Product condition',packagePoint1Sub:'Fresh or frozen, depending on product',packagePoint2:'Cartons & formats',packagePoint2Sub:'Agreed to order specifications',packagePoint3:'Documentation',packagePoint3Sub:'Subject to applicable requirements',packagePoint4:'Logistics coordination',packagePoint4Sub:'Options discussed per destination',
 exportKicker:'DAKHLA · MOROCCO · INTERNATIONAL',exportTitle:'From our Atlantic coast to your markets.',exportText:'Fish El Prestigioso welcomes discussions with importers, wholesalers, distributors and other buyers sourcing seafood. Share your target species, quantities, packaging, timing and destination.',exportStep1:'01 · Your requirements',exportStep2:'02 · Our quotation',exportStep3:'03 · Shipment coordination',exportCta:'Become a partner',
 contactKicker:'YOUR SEAFOOD SUPPLY PARTNER',contactTitle:'Plan your next supply order.',contactIntro:'Buying seafood in wholesale quantities? Tell us the species, volumes and destination country to prepare your enquiry.',location:'Industrial Zone, Dakhla, Morocco',formHeading:'Request for quotation',formName:'Full name',formCompany:'Company',formEmail:'Business email',formCountry:'Destination country',formDetails:'Products, volumes and packaging needs',formButton:'Prepare my enquiry',formNote:'Beta: no sales email has been configured yet. This form prepares your message without sending it automatically.',formReady:'Your enquiry is ready below. Copy it to send to your sales contact.',copyMessage:'Copy enquiry',copied:'Copied!',copyFail:'Select and copy the text above.',footerTagline:'Seafood products · Wholesale supply · International trade',footerBottom:'Beta website · Commercial details to be confirmed',
 galleryNames:['Tuna & bonito','Octopus','Red fish','Sea bream','Prepared fish','Cold storage warehouse','Mackerel lot','Prawns','Crabs','Fish handling','Fishing and export port','Large tuna at market','Seafood assortment','Pelagic fish','Cuts & fillets','Seafood preparation','Packed bonito','Seafood processing','Frozen seafood','Whole fish']
},
ar: {
 skip:'انتقل إلى المحتوى الرئيسي',brandSub:'تصدير المنتجات البحرية المغربية',home:'الرئيسية',products:'المنتجات',gallery:'معرض الصور',packaging:'التعبئة والتجهيز',export:'التصدير',contact:'اتصل بنا',quote:'طلب عرض سعر',
 heroEyebrow:'من الداخلة إلى العالم',heroTitle:'منتجات بحرية مغربية <em>للأسواق العالمية.</em>',heroText:'أسماك طازجة ومجمدة وأخطبوط وقشريات للمستوردين وتجار الجملة والمشترين المهنيين في الأسواق الدولية.',explore:'اكتشف منتجاتنا',bulk:'كميات تجارية',freshFrozen:'طازج ومجمد',fromDakhla:'الداخلة، المغرب',heroArtTag:'المحيط الأطلسي آفاقنا',factQuality:'اختيار المنتجات',factCold:'حلول الحفظ والتبريد',factPack:'التعبئة بالجملة',factTrade:'التجارة الدولية',
 productsKicker:'تشكيلتنا',productsTitle:'منتجاتنا البحرية',productsIntro:'منتجات بحرية مختارة لتلبية احتياجات المهنيين. يتم تأكيد التوفر والأحجام والتعبئة والكميات عند الطلب.',product1:'التونة والبونيتو',product2:'الأخطبوط',product3:'الأسماك الحمراء',product4:'الدنيس',product5:'قطع وفيليه السمك',productMeta:'حسب الطلب · وفق التوفر',availabilityNote:'صور حقيقية مقدمة للمشروع ولا تعكس المخزون المتاح في الوقت الفعلي.',
 galleryKicker:'منتجات حقيقية. شحنات حقيقية.',galleryTitle:'معرض الصور',galleryIntro:'اكتشف صوراً مختارة للأسماك والمأكولات البحرية وتجهيز المنتجات وتعبئتها للتجارة بالجملة.',filterAll:'عرض الكل',filterFish:'الأسماك',filterSeafood:'المنتجات البحرية',filterProcessing:'التجهيز',filterPackaging:'التعبئة',galleryMore:'عرض المزيد من الصور',galleryLess:'عرض صور أقل',
 packageKicker:'التجهيز والتعبئة',packageTitle:'كميات مخصصة للتصدير.',packageText:'تحضير الطلبات والتعبئة في الكراتين وتنسيق الشحن: يتم الاتفاق على مواصفات كل طلب حسب المنتج وبلد الوجهة.',packageCta:'ناقش طلبك معنا',packageOverlay:'كراتين ومنصات تحميل',packageOverlaySub:'تعبئة للكميات التجارية',packagePoint1:'حالة المنتج',packagePoint1Sub:'طازج أو مجمد حسب المنتج',packagePoint2:'التعبئة والكراتين',packagePoint2Sub:'وفق مواصفات الطلب',packagePoint3:'الوثائق',packagePoint3Sub:'حسب المتطلبات المعمول بها',packagePoint4:'تنسيق الخدمات اللوجستية',packagePoint4Sub:'خيارات تناسب بلد الوجهة',
 exportKicker:'الداخلة · المغرب · العالم',exportTitle:'من سواحلنا الأطلسية إلى أسواقكم.',exportText:'تستقبل شركة فيش إل بريستيجيـوسو طلبات المستوردين وتجار الجملة والموزعين والمشترين المهتمين بالمنتجات البحرية. شاركونا الأنواع والكميات والتعبئة والمواعيد وبلد الوجهة.',exportStep1:'01 · متطلباتكم',exportStep2:'02 · عرضنا التجاري',exportStep3:'03 · تنسيق الشحن',exportCta:'كن شريكاً لنا',
 contactKicker:'شريككم في التوريد',contactTitle:'لنخطط لطلبكم القادم.',contactIntro:'هل ترغبون في شراء منتجات بحرية بكميات تجارية؟ أرسلوا الأنواع والكميات وبلد الوجهة لإعداد طلبكم.',location:'المنطقة الصناعية، الداخلة، المغرب',formHeading:'طلب عرض سعر',formName:'الاسم الكامل',formCompany:'الشركة',formEmail:'البريد الإلكتروني المهني',formCountry:'بلد الوجهة',formDetails:'المنتجات والكميات والتعبئة المطلوبة',formButton:'إعداد طلبي',formNote:'نسخة تجريبية: لم يتم ربط بريد المبيعات بعد. يتم إعداد الرسالة دون إرسالها تلقائياً.',formReady:'رسالتكم جاهزة أدناه. يمكنكم نسخها وإرسالها إلى جهة التواصل التجارية.',copyMessage:'نسخ الطلب',copied:'تم النسخ!',copyFail:'حددوا النص أعلاه وانسخوه.',footerTagline:'منتجات بحرية · تجارة بالجملة · تصدير دولي',footerBottom:'نسخة تجريبية · تفاصيل تجارية قيد التأكيد',
 galleryNames:['التونة والبونيتو','الأخطبوط','الأسماك الحمراء','الدنيس','أسماك مجهزة','مستودع التبريد','دفعة من الماكريل','الروبيان','السرطان البحري','تجهيز السمك','كراتين محملة','أسماك كبيرة بالسوق','تشكيلة منتجات بحرية','أسماك سطحية','قطع وفيليه','تجهيز منتجات بحرية','بونيتو معبأ','تجهيز بالمصنع','منتجات مجمدة','أسماك كاملة']
}
};
const ITEMS = [
{img:'tuna-bonito.webp',category:'fish'},
{img:'octopus.webp',category:'seafood'},
{img:'red-fish.webp',category:'fish'},
{img:'sea-bream.webp',category:'fish'},
{img:'processing.webp',category:'processing'},
{img:'export-cartons.webp',category:'packaging'},
{img:'mackerel.webp',category:'fish'},
{img:'prawns.webp',category:'seafood'},
{img:'crabs.webp',category:'seafood'},
{img:'shrimp-handling.webp',category:'processing'},
{img:'truck-loading.webp',category:'packaging'},
{img:'large-tuna.webp',category:'fish'},
{img:'fish-assortment.webp',category:'fish'},
{img:'pelagic-fish.webp',category:'fish'},
{img:'frozen-fillets.webp',category:'processing'},
{img:'fish-line.webp',category:'processing'},
{img:'bonito-pack.webp',category:'packaging'},
{img:'fishing-market.webp',category:'processing'},
{img:'bonito-frozen.webp',category:'packaging'},
{img:'whole-fish.webp',category:'fish'}
];
const categoryTexts = {fr:{fish:'POISSONS',seafood:'FRUITS DE MER',processing:'PRÉPARATION',packaging:'CONDITIONNEMENT'},en:{fish:'FISH',seafood:'SEAFOOD',processing:'PREPARATION',packaging:'PACKAGING'},ar:{fish:'أسماك',seafood:'مأكولات بحرية',processing:'تجهيز',packaging:'تعبئة'}};
let language='fr', activeFilter='all', showAll=false, visibleIndices=[], currentLightboxIndex=0;
const el=(id)=>document.getElementById(id);
function translate(code){
 language=TRANSLATIONS[code]?code:'fr';
 const t=TRANSLATIONS[language];
 document.documentElement.lang=language;
 document.documentElement.dir=language==='ar'?'rtl':'ltr';
 document.title=language==='fr'?'Fish El Prestigioso | Produits de la mer & export international':language==='ar'?'فيش إل بريستيجيـوسو | تصدير المنتجات البحرية':'Fish El Prestigioso | Moroccan Seafood Export';
 document.querySelectorAll('[data-t]').forEach(node=>{const value=t[node.dataset.t];if(value!==undefined){node.innerHTML=value;}});
 document.querySelectorAll('.lang').forEach(button=>{const pressed=button.dataset.lang===language;button.classList.toggle('active',pressed);button.setAttribute('aria-pressed',String(pressed));});
 const placeholders={name:['Votre nom','Full name','الاسم الكامل'],company:['Entreprise','Company','الشركة'],country:['Pays','Country','البلد'],details:['Espèces, volumes, frais/congelé, emballage…','Species, volume, fresh/frozen, packaging…','الأنواع والكميات والتعبئة…']};
 for(const [field,labels] of Object.entries(placeholders)){const input=document.querySelector(`[name="${field}"]`);if(input)input.placeholder=labels[['fr','en','ar'].indexOf(language)];}
 renderGallery();
 try{localStorage.setItem('fish-elprestigioso-lang',language);}catch(err){}
}
function filtered(){return ITEMS.map((item,i)=>i).filter(i=>activeFilter==='all'||ITEMS[i].category===activeFilter);}
function renderGallery(){
 const filteredItems=filtered();
 visibleIndices=showAll?filteredItems:filteredItems.slice(0,10);
 const container=el('galleryGrid');container.replaceChildren();
 const fragment=document.createDocumentFragment();
 visibleIndices.forEach((index,pos)=>{
 const item=ITEMS[index]; const button=document.createElement('button');button.type='button';button.className='gallery-item';button.setAttribute('aria-label',TRANSLATIONS[language].galleryNames[index]);
 const img=document.createElement('img');img.src='assets/images/'+item.img;img.loading='lazy';img.decoding='async';img.alt=TRANSLATIONS[language].galleryNames[index];
 const caption=document.createElement('span');caption.className='gallery-caption';
 const textWrap=document.createElement('span');const title=document.createElement('strong');title.textContent=TRANSLATIONS[language].galleryNames[index];const category=document.createElement('small');category.textContent=categoryTexts[language][item.category];textWrap.append(title,category);
 const expand=document.createElement('span');expand.className='zoom';expand.textContent='↗';caption.append(textWrap,expand);button.append(img,caption);
 button.addEventListener('click',()=>openLightbox(pos));fragment.append(button);
 });container.append(fragment);
 const more=el('moreGallery');more.hidden=filteredItems.length<=10;more.querySelector('[data-t]').textContent=showAll?TRANSLATIONS[language].galleryLess:TRANSLATIONS[language].galleryMore;
}
function setFilter(filter){activeFilter=filter;showAll=false;document.querySelectorAll('.gallery-filter').forEach(btn=>{const isActive=btn.dataset.filter===filter;btn.classList.toggle('active',isActive);btn.setAttribute('aria-pressed',String(isActive));});renderGallery();}
function openLightbox(pos){currentLightboxIndex=pos;showLightboxImage();const dialog=el('lightbox');if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');}
function showLightboxImage(){const idx=visibleIndices[currentLightboxIndex];if(idx===undefined)return;el('lightboxImage').src='assets/images/'+ITEMS[idx].img;el('lightboxImage').alt=TRANSLATIONS[language].galleryNames[idx];el('lightboxCaption').textContent=TRANSLATIONS[language].galleryNames[idx]+' — '+categoryTexts[language][ITEMS[idx].category];}
function navigateLightbox(n){currentLightboxIndex=(currentLightboxIndex+n+visibleIndices.length)%visibleIndices.length;showLightboxImage();}
function prepareInquiry(event){
 event.preventDefault();const f=new FormData(event.currentTarget);
 const message=`FISH EL PRESTIGIOSO — REQUEST FOR QUOTATION\n\nName / Nom: ${f.get('name')}\nCompany / Entreprise: ${f.get('company')}\nEmail: ${f.get('email')}\nDestination / Pays: ${f.get('country')}\n\nProducts / Quantities / Packaging:\n${f.get('details')}`;
 const result=el('formResult');result.hidden=false;el('formResultText').textContent=TRANSLATIONS[language].formReady;el('preparedMessage').value=message;result.scrollIntoView({behavior:'smooth',block:'nearest'});
}
async function copyMessage(){const message=el('preparedMessage').value;const copy=el('copyMessage');try{await navigator.clipboard.writeText(message);copy.textContent=TRANSLATIONS[language].copied;}catch(err){el('preparedMessage').focus();el('preparedMessage').select();copy.textContent=TRANSLATIONS[language].copyFail;}}
function bind(){
 document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>translate(btn.dataset.lang)));
 document.querySelector('.menu-toggle').addEventListener('click',e=>{const isOpen=el('primary-nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(isOpen));});
 document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{el('primary-nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');}));
 document.querySelectorAll('.gallery-filter').forEach(btn=>btn.addEventListener('click',()=>setFilter(btn.dataset.filter)));
 el('moreGallery').addEventListener('click',()=>{showAll=!showAll;renderGallery();});
 document.querySelector('.lightbox-close').addEventListener('click',()=>el('lightbox').close());
 document.querySelector('.lightbox-nav.prev').addEventListener('click',()=>navigateLightbox(-1));
 document.querySelector('.lightbox-nav.next').addEventListener('click',()=>navigateLightbox(1));
 el('lightbox').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close();});
 document.addEventListener('keydown',e=>{if(!el('lightbox').open)return;if(e.key==='ArrowLeft')navigateLightbox(-1);if(e.key==='ArrowRight')navigateLightbox(1);});
 el('quoteForm').addEventListener('submit',prepareInquiry);el('copyMessage').addEventListener('click',copyMessage);
 el('year').textContent=new Date().getFullYear();
 let initial='fr';try{initial=localStorage.getItem('fish-elprestigioso-lang')||'fr';}catch(e){}translate(initial);
 const visual=el('fishVisual');const area=document.querySelector('.hero-art');const reducedMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(visual&&area&&!reducedMotion){
  area.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=area.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;visual.style.animationPlayState='paused';visual.style.transform=`translate(${(-1+x*2).toFixed(1)}%,${(1+y*2).toFixed(1)}%) rotateZ(${-3+x*3}deg) rotateY(${x*14}deg) rotateX(${-y*7}deg)`;});
  area.addEventListener('pointerleave',()=>{visual.style.animationPlayState='running';visual.style.transform='';});
 }
}
document.addEventListener('DOMContentLoaded',bind);
