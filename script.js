/* ================= DATA ================= */
const UI = {
  en:{logo:'Astronomy for Kids',navPlanets:'Planets',navMoon:'Moon',navDefs:'Definitions',navPdf:'Read the PDF',music:'Music',
    heroTitle:'Astronomy for Kids',heroSub:'Journey through the Solar System, meet the 8 planets, and learn what stars, galaxies and black holes really are.',start:'Start the journey',
    pTitle:'The 8 Planets',pLead:'The Solar System is the Sun and everything that orbits around it. Pick a planet.',
    mTitle:'The Phases of the Moon',mLead:"The Moon is Earth's natural satellite. It shines because it reflects the Sun's light.",
    gTitle:'Definitions',search:'Search a word, like galaxy',empty:'No matching word. Try another one.',
    dTitle:'Read the Document',dLead:'The full book, right here on the page.',dNote:'The book itself is in English.',dl:'Download the PDF',
    foot:'Astronomy for Kids, part 1, by Meddah Safaâ',noAudio:'Add your music file at audio/space.mp3 to hear it.'},
  fr:{logo:'Astronomie pour les enfants',navPlanets:'Planètes',navMoon:'Lune',navDefs:'Définitions',navPdf:'Lire le PDF',music:'Musique',
    heroTitle:'Astronomie pour les enfants',heroSub:'Voyage à travers le Système solaire, découvre les 8 planètes et apprends ce que sont vraiment les étoiles, les galaxies et les trous noirs.',start:'Commencer le voyage',
    pTitle:'Les 8 planètes',pLead:'Le Système solaire, c’est le Soleil et tout ce qui tourne autour de lui. Choisis une planète.',
    mTitle:'Les phases de la Lune',mLead:'La Lune est le satellite naturel de la Terre. Elle brille parce qu’elle reflète la lumière du Soleil.',
    gTitle:'Définitions',search:'Cherche un mot, comme galaxie',empty:'Aucun mot trouvé. Essaie un autre mot.',
    dTitle:'Lire le document',dLead:'Le livre complet, ici même sur la page.',dNote:'Le livre est en anglais.',dl:'Télécharger le PDF',
    foot:'Astronomie pour les enfants, partie 1, par Meddah Safaâ',noAudio:'Ajoute ton fichier de musique dans audio/space.mp3 pour l’entendre.'},
  ar:{logo:'علم الفلك للأطفال',navPlanets:'الكواكب',navMoon:'القمر',navDefs:'التعريفات',navPdf:'اقرأ الكتاب',music:'موسيقى',
    heroTitle:'علم الفلك للأطفال',heroSub:'رحلة عبر المجموعة الشمسية، تعرّف على الكواكب الثمانية، واكتشف ما هي النجوم والمجرات والثقوب السوداء.',start:'ابدأ الرحلة',
    pTitle:'الكواكب الثمانية',pLead:'المجموعة الشمسية هي الشمس وكل ما يدور حولها. اختر كوكباً.',
    mTitle:'أطوار القمر',mLead:'القمر هو التابع الطبيعي للأرض. يلمع لأنه يعكس ضوء الشمس.',
    gTitle:'التعريفات',search:'ابحث عن كلمة، مثل مجرة',empty:'لا توجد كلمة مطابقة. جرّب كلمة أخرى.',
    dTitle:'اقرأ الكتاب',dLead:'الكتاب كاملاً هنا في الصفحة.',dNote:'الكتاب نفسه مكتوب بالإنجليزية.',dl:'حمّل ملف PDF',
    foot:'علم الفلك للأطفال، الجزء الأول، من تأليف مداح صفاء',noAudio:'ضع ملف الموسيقى في audio/space.mp3 لتسمعها.'}
};

const planets = [
 {c:'#9c8f85',g:'radial-gradient(circle at 32% 30%,#d8cfc6,#8a7d72 55%,#4d443d)',s:110,
  en:{n:'Mercury',t:'Closest to the Sun and the smallest planet',f:['Rocky, with no thick atmosphere.','Its surface looks a lot like the Moon, with many craters.','Its temperature changes a lot between day and night.']},
  fr:{n:'Mercure',t:'La planète la plus proche du Soleil et la plus petite',f:['Rocheuse, sans atmosphère épaisse.','Sa surface ressemble beaucoup à la Lune, avec de nombreux cratères.','Sa température change énormément entre le jour et la nuit.']},
  ar:{n:'عطارد',t:'أقرب كوكب إلى الشمس وأصغر الكواكب',f:['صخري وليس له غلاف جوي كثيف.','يشبه سطحه القمر كثيراً، وفيه فوهات عديدة.','تتغير درجة حرارته كثيراً بين النهار والليل.']}},
 {c:'#e3b877',g:'radial-gradient(circle at 32% 30%,#f7dfae,#d9a45c 55%,#7a5426)',s:170,
  en:{n:'Venus',t:'The second planet and the hottest planet',f:['Very thick atmosphere made mostly of carbon dioxide, causing a strong greenhouse effect.','Covered by thick clouds of sulfuric acid.','Sometimes called Earth\'s "evil twin".']},
  fr:{n:'Vénus',t:'La deuxième planète et la plus chaude',f:['Une atmosphère très épaisse, surtout de dioxyde de carbone, qui provoque un fort effet de serre.','Couverte d’épais nuages d’acide sulfurique.','On l’appelle parfois le « jumeau maléfique » de la Terre.']},
  ar:{n:'الزهرة',t:'ثاني كوكب وأشدّ الكواكب حرارة',f:['غلاف جوي كثيف جداً معظمه ثاني أكسيد الكربون، مما يسبب تأثير احتباس حراري قوي.','تغطيها سحب كثيفة من حمض الكبريتيك.','تُسمى أحياناً «التوأم الشرير» للأرض.']}},
 {c:'#4ea3ff',g:'radial-gradient(circle at 32% 30%,#8fd0ff,#2a74d6 45%,#1e8f4e 70%,#0b3a6e)',s:180,
  en:{n:'Earth',t:'The third planet, the only one known to support life',f:['An atmosphere rich in oxygen, liquid water and a varied climate.','Its surface is made up of continents, oceans and great biodiversity.']},
  fr:{n:'Terre',t:'La troisième planète, la seule connue pour abriter la vie',f:['Une atmosphère riche en oxygène, de l’eau liquide et un climat varié.','Sa surface comprend des continents, des océans et une grande biodiversité.']},
  ar:{n:'الأرض',t:'ثالث كوكب، والوحيد المعروف بوجود الحياة عليه',f:['غلاف جوي غني بالأكسجين وماء سائل ومناخ متنوع.','يتكوّن سطحه من قارات ومحيطات وتنوع حيوي كبير.']}},
 {c:'#ff7a45',g:'radial-gradient(circle at 32% 30%,#ffb083,#c1440e 55%,#5b1c06)',s:140,
  en:{n:'Mars',t:'The fourth planet, the "Red Planet"',f:['Its iron-rich surface gives it the red color.','Rocky, colder than Earth, with polar ice caps and ancient riverbeds.','Many missions explore Mars to look for signs of past life.']},
  fr:{n:'Mars',t:'La quatrième planète, la « planète rouge »',f:['Sa surface riche en fer lui donne sa couleur rouge.','Rocheuse, plus froide que la Terre, avec des calottes polaires et d’anciens lits de rivières.','De nombreuses missions explorent Mars à la recherche de traces de vie passée.']},
  ar:{n:'المريخ',t:'رابع كوكب، «الكوكب الأحمر»',f:['سطحه الغني بالحديد يمنحه لونه الأحمر.','صخري وأبرد من الأرض، وفيه قمم جليدية قطبية ومجارٍ نهرية قديمة.','تستكشف مهمات كثيرة المريخ بحثاً عن علامات حياة سابقة.']}},
 {c:'#e0a86f',g:'linear-gradient(170deg,#f2d7b0 0 12%,#c98a50 12% 24%,#f0d0a0 24% 38%,#b5703a 38% 50%,#e9c592 50% 66%,#c98a50 66% 80%,#efd2a8 80%)',s:270,
  en:{n:'Jupiter',t:'The fifth planet and the largest in the Solar System',f:['A gas giant made mostly of hydrogen and helium.','It has a huge storm called the Great Red Spot.','More than 90 moons, including some icy and rocky ones.']},
  fr:{n:'Jupiter',t:'La cinquième planète et la plus grande du Système solaire',f:['Une géante gazeuse composée surtout d’hydrogène et d’hélium.','Elle a une énorme tempête appelée la Grande Tache rouge.','Plus de 90 lunes, dont certaines glacées et rocheuses.']},
  ar:{n:'المشتري',t:'خامس كوكب وأكبر كواكب المجموعة الشمسية',f:['عملاق غازي يتكوّن معظمه من الهيدروجين والهيليوم.','فيه عاصفة ضخمة تُسمى البقعة الحمراء العظيمة.','له أكثر من 90 قمراً، بعضها جليدي وبعضها صخري.']}},
 {c:'#f0d28a',g:'linear-gradient(170deg,#f7e6b8 0 20%,#d9b878 20% 40%,#f1dca4 40% 62%,#c9a566 62% 80%,#eed9a0 80%)',s:220,ring:1,
  en:{n:'Saturn',t:'The sixth planet, famous for its beautiful rings',f:['A gas giant like Jupiter, made mostly of hydrogen and helium.','Its rings are made of ice and rock particles.','More than 140 moons. Titan is one of the largest moons in the Solar System.']},
  fr:{n:'Saturne',t:'La sixième planète, célèbre pour ses magnifiques anneaux',f:['Une géante gazeuse comme Jupiter, faite surtout d’hydrogène et d’hélium.','Ses anneaux sont faits de particules de glace et de roche.','Plus de 140 lunes. Titan est l’une des plus grandes lunes du Système solaire.']},
  ar:{n:'زحل',t:'سادس كوكب، مشهور بحلقاته الجميلة',f:['عملاق غازي مثل المشتري، معظمه هيدروجين وهيليوم.','حلقاته مصنوعة من جسيمات الجليد والصخور.','له أكثر من 140 قمراً، وتيتان من أكبر أقمار المجموعة الشمسية.']}},
 {c:'#7de3e0',g:'radial-gradient(circle at 32% 30%,#c4fbf8,#5fc9d0 55%,#1f6e7a)',s:170,
  en:{n:'Uranus',t:'The seventh planet, an ice giant',f:['Made mostly of gas and ice, with an atmosphere rich in methane that gives it a blue-green color.','It rotates almost on its side, with a very tilted axis of rotation.']},
  fr:{n:'Uranus',t:'La septième planète, une géante de glace',f:['Faite surtout de gaz et de glace, avec une atmosphère riche en méthane qui lui donne une couleur bleu-vert.','Elle tourne presque sur le côté, avec un axe de rotation très incliné.']},
  ar:{n:'أورانوس',t:'سابع كوكب، عملاق جليدي',f:['يتكوّن معظمه من الغاز والجليد، وغلافه الجوي غني بالميثان مما يمنحه لوناً أزرق مخضراً.','يدور تقريباً على جانبه، بمحور دوران شديد الميل.']}},
 {c:'#5b8cff',g:'radial-gradient(circle at 32% 30%,#8fb2ff,#2f5fdc 55%,#0c1f6b)',s:170,
  en:{n:'Neptune',t:'The eighth and last planet, an ice giant',f:['Very cold, with an atmosphere of hydrogen, helium and methane that gives it a deep blue color.','Very strong winds and several moons, including Triton.']},
  fr:{n:'Neptune',t:'La huitième et dernière planète, une géante de glace',f:['Très froide, avec une atmosphère d’hydrogène, d’hélium et de méthane qui lui donne un bleu profond.','Des vents très violents et plusieurs lunes, dont Triton.']},
  ar:{n:'نبتون',t:'ثامن وآخر كوكب، عملاق جليدي',f:['شديد البرودة، وغلافه من الهيدروجين والهيليوم والميثان مما يمنحه لوناً أزرق داكناً.','رياح قوية جداً وعدة أقمار، منها تريتون.']}}
];

const phaseIcons = ['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'];
const phases = {
  en:[['New Moon','The Moon is not visible because it is between Earth and the Sun.'],['Waxing Crescent','A small part of the Moon becomes visible as a crescent.'],['First Quarter','The right half of the Moon is lit and visible.'],['Waxing Gibbous','More than half of the Moon is visible, but it is not yet complete.'],['Full Moon','The whole Moon is lit and visible in the sky.'],['Waning Gibbous','The Moon is almost full, but the lit part decreases.'],['Last (Third) Quarter','The left half of the Moon is lit and visible.'],['Waning Crescent','A small part of the Moon is still visible as a crescent.']],
  fr:[['Nouvelle Lune','La Lune n’est pas visible car elle est entre la Terre et le Soleil.'],['Premier croissant','Une petite partie de la Lune devient visible en forme de croissant.'],['Premier quartier','La moitié droite de la Lune est éclairée et visible.'],['Gibbeuse croissante','Plus de la moitié de la Lune est visible, mais elle n’est pas encore complète.'],['Pleine Lune','Toute la Lune est éclairée et visible dans le ciel.'],['Gibbeuse décroissante','La Lune est presque pleine, mais la partie éclairée diminue.'],['Dernier quartier','La moitié gauche de la Lune est éclairée et visible.'],['Dernier croissant','Une petite partie de la Lune est encore visible en croissant.']],
  ar:[['المحاق (قمر جديد)','القمر غير مرئي لأنه بين الأرض والشمس.'],['الهلال المتزايد','جزء صغير من القمر يصبح مرئياً على شكل هلال.'],['التربيع الأول','النصف الأيمن من القمر مضاء ومرئي.'],['الأحدب المتزايد','أكثر من نصف القمر مرئي، لكنه لم يكتمل بعد.'],['البدر','القمر كله مضاء ومرئي في السماء.'],['الأحدب المتناقص','القمر شبه مكتمل، لكن الجزء المضاء يتناقص.'],['التربيع الأخير','النصف الأيسر من القمر مضاء ومرئي.'],['الهلال المتناقص','جزء صغير من القمر ما زال مرئياً على شكل هلال.']]
};

const termColors = ['#ff4fa0','#8a4fff','#ffd93b','#ff9d2e','#4ea3ff','#b9b5e6','#ffd93b','#ff4fa0','#8a4fff','#ff7a45','#e0a86f','#7de3e0'];
const terms = {
  en:[['Astronomy','The science that studies stars, planets, and the universe. It helps us understand our place in the cosmos.'],['Milky Way','The galaxy in which our solar system is located. It is a spiral galaxy made of hundreds of billions of stars, plus gas, dust, and dark matter.'],['Solar System','A group that includes the Sun and all the objects that orbit around it.'],['Sun','A yellow dwarf star at the center of the Solar System. It is made mainly of hydrogen and helium and holds more than 99% of the Solar System\'s mass.'],['Planet','There are 8 planets that orbit around the Sun, from Mercury to Neptune.'],['Moon','Earth\'s natural satellite. It shines by reflecting the Sun\'s light and helps create the ocean tides.'],['Star','An enormous ball of very hot gas that produces its own light and heat through nuclear reactions. The Sun is a star.'],['Black hole','A region in space where gravity is so strong that nothing can escape, not even light. It forms when a very massive star dies and collapses.'],['Galaxy','A huge group of stars, gas, and dust. There are billions of galaxies in the Universe.'],['Asteroid','A small rocky body that orbits the Sun. Most are found in the asteroid belt between Mars and Jupiter.'],['Gas giant','A planet made mostly of hydrogen and helium, like Jupiter and Saturn.'],['Ice giant','A planet made mostly of gas and ice, like Uranus and Neptune.']],
  fr:[['Astronomie','La science qui étudie les étoiles, les planètes et l’univers. Elle nous aide à comprendre notre place dans le cosmos.'],['Voie lactée','La galaxie où se trouve notre système solaire. C’est une galaxie spirale de centaines de milliards d’étoiles, avec du gaz, de la poussière et de la matière noire.'],['Système solaire','Un ensemble qui comprend le Soleil et tous les objets qui tournent autour de lui.'],['Soleil','Une naine jaune au centre du Système solaire, faite surtout d’hydrogène et d’hélium. Elle représente plus de 99 % de sa masse.'],['Planète','Il y a 8 planètes qui tournent autour du Soleil, de Mercure à Neptune.'],['Lune','Le satellite naturel de la Terre. Elle brille en reflétant la lumière du Soleil et aide à créer les marées.'],['Étoile','Une énorme boule de gaz très chaud qui produit sa propre lumière et sa chaleur grâce à des réactions nucléaires. Le Soleil est une étoile.'],['Trou noir','Une région de l’espace où la gravité est si forte que rien ne peut s’échapper, même pas la lumière. Il se forme quand une étoile très massive meurt et s’effondre.'],['Galaxie','Un immense groupe d’étoiles, de gaz et de poussière. Il y a des milliards de galaxies dans l’Univers.'],['Astéroïde','Un petit corps rocheux qui tourne autour du Soleil. La plupart se trouvent dans la ceinture d’astéroïdes entre Mars et Jupiter.'],['Géante gazeuse','Une planète faite surtout d’hydrogène et d’hélium, comme Jupiter et Saturne.'],['Géante de glace','Une planète faite surtout de gaz et de glace, comme Uranus et Neptune.']],
  ar:[['علم الفلك','العلم الذي يدرس النجوم والكواكب والكون. يساعدنا على فهم مكاننا في الكون.'],['درب التبانة','المجرة التي توجد فيها مجموعتنا الشمسية. مجرة حلزونية من مئات المليارات من النجوم، مع الغاز والغبار والمادة المظلمة.'],['المجموعة الشمسية','مجموعة تضم الشمس وكل الأجرام التي تدور حولها.'],['الشمس','نجم قزم أصفر في مركز المجموعة الشمسية، يتكوّن أساساً من الهيدروجين والهيليوم، وتمثّل أكثر من 99% من كتلتها.'],['الكوكب','هناك 8 كواكب تدور حول الشمس، من عطارد إلى نبتون.'],['القمر','التابع الطبيعي للأرض. يلمع لأنه يعكس ضوء الشمس ويساعد على حدوث المد والجزر.'],['النجم','كرة ضخمة من الغاز شديد الحرارة تنتج ضوءها وحرارتها بالتفاعلات النووية. الشمس نجم.'],['الثقب الأسود','منطقة في الفضاء جاذبيتها قوية لدرجة أن لا شيء يستطيع الهروب منها، حتى الضوء. يتكوّن عندما يموت نجم ضخم جداً وينهار على نفسه.'],['المجرة','مجموعة هائلة من النجوم والغاز والغبار. هناك مليارات المجرات في الكون.'],['الكويكب','جرم صخري صغير يدور حول الشمس. معظمها في حزام الكويكبات بين المريخ والمشتري.'],['العملاق الغازي','كوكب يتكوّن معظمه من الهيدروجين والهيليوم، مثل المشتري وزحل.'],['العملاق الجليدي','كوكب يتكوّن معظمه من الغاز والجليد، مثل أورانوس ونبتون.']]
};

/* ================= STATE ================= */
let lang = 'en', curPlanet = 2, curPhase = 4, busy = false;
try { const s = localStorage.getItem('lang'); if (UI[s]) lang = s; } catch (e) {}

const $ = id => document.getElementById(id);
const picker = $('picker'), planet = $('planet'), info = $('info');
const phaseBox = $('phases'), phaseText = $('phaseText'), termBox = $('terms');

/* ================= SPACE DECORATIONS ================= */
(function decorate() {
  const sky = $('sky');
  for (let i = 0; i < 110; i++) {
    const s = document.createElement('i');
    s.className = 'star';
    const z = Math.random() * 2.4 + .8;
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${z}px;height:${z}px;--d:${2+Math.random()*4}s;--l:${Math.random()*5}s`;
    sky.appendChild(s);
  }
  for (let i = 0; i < 4; i++) {
    const s = document.createElement('i');
    s.className = 'shoot';
    s.style.cssText = `--x:${40+Math.random()*55}%;--t:${Math.random()*40}%;--d:${9+Math.random()*8}s;--l:${i*3+Math.random()*3}s`;
    sky.appendChild(s);
  }
  const icons = ['🧑‍🚀','🚀','🛰️','☄️','🪐','🌌','🌠','👨‍🚀','🔭','🌍','🌙','⭐'];
  icons.forEach((ic, i) => {
    const f = document.createElement('span');
    f.className = 'float';
    f.textContent = ic;
    f.style.cssText = `left:${(i*8.7+Math.random()*6)%94}%;top:${(i*13+Math.random()*20)%88}%;--s:${1.6+Math.random()*1.8}rem;--d:${18+Math.random()*18}s;--l:${-Math.random()*15}s`;
    sky.appendChild(f);
  });
})();

/* ================= HERO ORBITS ================= */
planets.forEach((p, i) => {
  const size = 24 + i * 9.5, dot = 6 + Math.round(p.s / 26);
  const o = document.createElement('div');
  o.className = 'orbit';
  o.style.cssText = `width:${size}%;height:${size}%;animation-duration:${9 + i * 6}s`;
  o.innerHTML = `<i style="width:${dot}px;height:${dot}px;background:${p.g}"></i>`;
  $('system').appendChild(o);
});

/* ================= PLANETS ================= */
function paintPlanet() {
  const p = planets[curPlanet], t = p[lang];
  planet.style.setProperty('--bg-planet', p.g);
  planet.style.setProperty('--size', p.s + 'px');
  planet.style.setProperty('--glow', p.c + '55');
  planet.classList.toggle('ring', !!p.ring);
  $('pName').textContent = (curPlanet + 1) + '. ' + t.n;
  $('pName').style.setProperty('--pc', p.c);
  $('pTag').textContent = t.t;
  $('pFacts').innerHTML = t.f.map(f => `<li>${f}</li>`).join('');
}
function buildPicker() {
  picker.innerHTML = '';
  planets.forEach((p, i) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === curPlanet);
    b.innerHTML = `<span class="dot" style="background:${p.g}"></span>${p[lang].n}`;
    b.onclick = () => selectPlanet(i);
    picker.appendChild(b);
  });
}
function selectPlanet(i) {
  if (busy || i === curPlanet) return;
  busy = true; curPlanet = i;
  picker.querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-selected', k === i));
  planet.classList.add('out'); info.classList.add('out');
  setTimeout(() => {
    paintPlanet();
    planet.classList.remove('out'); planet.classList.add('in'); info.classList.remove('out');
    setTimeout(() => { planet.classList.remove('in'); busy = false; }, 600);
  }, 450);
}

/* ================= MOON ================= */
function buildPhases() {
  phaseBox.innerHTML = '';
  phases[lang].forEach(([name], i) => {
    const b = document.createElement('button');
    b.innerHTML = `<span>${phaseIcons[i]}</span>${name}`;
    b.setAttribute('aria-pressed', i === curPhase);
    b.onclick = () => { curPhase = i; showPhase(); };
    phaseBox.appendChild(b);
  });
  showPhase();
}
function showPhase() {
  phaseBox.querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-pressed', k === curPhase));
  const [name, text] = phases[lang][curPhase];
  phaseText.innerHTML = `<strong>${name}:</strong> ${text}`;
}

/* ================= GLOSSARY ================= */
function buildTerms() {
  termBox.innerHTML = '';
  terms[lang].forEach(([w, d], i) => {
    const el = document.createElement('div');
    el.className = 'term';
    el.tabIndex = 0;
    el.style.setProperty('--c', termColors[i]);
    el.dataset.w = (w + ' ' + d).toLowerCase();
    el.innerHTML = `<h3>${w}</h3><p>${d}</p>`;
    const toggle = () => el.classList.toggle('open');
    el.onclick = toggle;
    el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } };
    termBox.appendChild(el);
  });
  filterTerms();
}
function filterTerms() {
  const q = $('search').value.trim().toLowerCase();
  let shown = 0;
  termBox.querySelectorAll('.term').forEach(t => {
    const hit = t.dataset.w.includes(q);
    t.hidden = !hit;
    if (q.length > 1) t.classList.toggle('open', hit);
    if (hit) shown++;
  });
  $('empty').hidden = shown > 0;
}
$('search').addEventListener('input', filterTerms);

/* ================= LANGUAGE ================= */
function setLang(l) {
  lang = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = UI[l][el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = UI[l][el.dataset.i18nPh]; });
  document.querySelectorAll('.lang').forEach(b => b.classList.toggle('on', b.dataset.lang === l));
  document.title = UI[l].logo;
  buildPicker(); paintPlanet(); buildPhases(); buildTerms();
}
document.querySelectorAll('.lang').forEach(b => b.onclick = () => setLang(b.dataset.lang));

/* ================= MUSIC ================= */
const bgm = $('bgm'), musicBtn = $('music');
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4500);
}
musicBtn.onclick = () => {
  if (bgm.paused) {
    bgm.volume = .5;
    bgm.play().then(() => musicBtn.setAttribute('aria-pressed', 'true'))
      .catch(() => { musicBtn.setAttribute('aria-pressed', 'false'); toast(UI[lang].noAudio); });
  } else {
    bgm.pause(); musicBtn.setAttribute('aria-pressed', 'false');
  }
};
bgm.addEventListener('error', () => { musicBtn.setAttribute('aria-pressed', 'false'); toast(UI[lang].noAudio); });

setLang(lang);
