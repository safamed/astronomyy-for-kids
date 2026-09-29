const planets = [
  {n:'Mercury',c:'#9c8f85',g:'radial-gradient(circle at 32% 30%,#d8cfc6,#8a7d72 55%,#4d443d)',s:110,t:'Closest to the Sun and the smallest planet',
   f:['Rocky, with no thick atmosphere.','Its surface looks a lot like the Moon, with many craters.','Its temperature changes a lot between day and night.']},
  {n:'Venus',c:'#e3b877',g:'radial-gradient(circle at 32% 30%,#f7dfae,#d9a45c 55%,#7a5426)',s:170,t:'The second planet and the hottest planet',
   f:['Very thick atmosphere made mostly of carbon dioxide, causing a strong greenhouse effect.','Covered by thick clouds of sulfuric acid.','Sometimes called Earth\'s "evil twin".']},
  {n:'Earth',c:'#4ea3ff',g:'radial-gradient(circle at 32% 30%,#8fd0ff,#2a74d6 45%,#1e8f4e 70%,#0b3a6e)',s:180,t:'The third planet, the only one known to support life',
   f:['An atmosphere rich in oxygen, liquid water and a varied climate.','Its surface is made up of continents, oceans and great biodiversity.']},
  {n:'Mars',c:'#ff7a45',g:'radial-gradient(circle at 32% 30%,#ffb083,#c1440e 55%,#5b1c06)',s:140,t:'The fourth planet, the "Red Planet"',
   f:['Its iron-rich surface gives it the red color.','Rocky, colder than Earth, with polar ice caps and ancient riverbeds.','Many missions explore Mars to look for signs of past life.']},
  {n:'Jupiter',c:'#e0a86f',g:'linear-gradient(170deg,#f2d7b0 0 12%,#c98a50 12% 24%,#f0d0a0 24% 38%,#b5703a 38% 50%,#e9c592 50% 66%,#c98a50 66% 80%,#efd2a8 80%)',s:270,t:'The fifth planet and the largest in the Solar System',
   f:['A gas giant made mostly of hydrogen and helium.','It has a huge storm called the Great Red Spot.','More than 90 moons, including some icy and rocky ones.']},
  {n:'Saturn',c:'#f0d28a',g:'linear-gradient(170deg,#f7e6b8 0 20%,#d9b878 20% 40%,#f1dca4 40% 62%,#c9a566 62% 80%,#eed9a0 80%)',s:220,ring:1,t:'The sixth planet, famous for its beautiful rings',
   f:['A gas giant like Jupiter, made mostly of hydrogen and helium.','Its rings are made of ice and rock particles.','More than 140 moons. Titan is one of the largest moons in the Solar System.']},
  {n:'Uranus',c:'#7de3e0',g:'radial-gradient(circle at 32% 30%,#c4fbf8,#5fc9d0 55%,#1f6e7a)',s:170,t:'The seventh planet, an ice giant',
   f:['Made mostly of gas and ice, with an atmosphere rich in methane that gives it a blue-green color.','It rotates almost on its side, with a very tilted axis of rotation.']},
  {n:'Neptune',c:'#5b8cff',g:'radial-gradient(circle at 32% 30%,#8fb2ff,#2f5fdc 55%,#0c1f6b)',s:170,t:'The eighth and last planet, an ice giant',
   f:['Very cold, with an atmosphere of hydrogen, helium and methane that gives it a deep blue color.','Very strong winds and several moons, including Triton.']}
];

const phases = [
  ['🌑','New Moon','The Moon is not visible because it is between Earth and the Sun.'],
  ['🌒','Waxing Crescent','A small part of the Moon becomes visible as a crescent.'],
  ['🌓','First Quarter','The right half of the Moon is lit and visible.'],
  ['🌔','Waxing Gibbous','More than half of the Moon is visible, but it is not yet complete.'],
  ['🌕','Full Moon','The whole Moon is lit and visible in the sky.'],
  ['🌖','Waning Gibbous','The Moon is almost full, but the lit part decreases.'],
  ['🌗','Last (Third) Quarter','The left half of the Moon is lit and visible.'],
  ['🌘','Waning Crescent','A small part of the Moon is still visible as a crescent.']
];

const terms = [
  ['Astronomy','The science that studies stars, planets, and the universe. It helps us understand our place in the cosmos.','#ff4fa0'],
  ['Milky Way','The galaxy in which our solar system is located. It is a spiral galaxy made of hundreds of billions of stars, plus gas, dust, and dark matter.','#8a4fff'],
  ['Solar System','A group that includes the Sun and all the objects that orbit around it.','#ffd93b'],
  ['Sun','A yellow dwarf star at the center of the Solar System. It is made mainly of hydrogen and helium and holds more than 99% of the Solar System\'s mass.','#ff9d2e'],
  ['Planet','There are 8 planets that orbit around the Sun, from Mercury to Neptune.','#4ea3ff'],
  ['Moon','Earth\'s natural satellite. It shines by reflecting the Sun\'s light and helps create the ocean tides.','#b9b5e6'],
  ['Star','An enormous ball of very hot gas that produces its own light and heat through nuclear reactions. The Sun is a star.','#ffd93b'],
  ['Black hole','A region in space where gravity is so strong that nothing can escape, not even light. It forms when a very massive star dies and collapses.','#ff4fa0'],
  ['Galaxy','A huge group of stars, gas, and dust. There are billions of galaxies in the Universe.','#8a4fff'],
  ['Asteroid','A small rocky body that orbits the Sun. Most are found in the asteroid belt between Mars and Jupiter.','#ff7a45'],
  ['Gas giant','A planet made mostly of hydrogen and helium, like Jupiter and Saturn.','#e0a86f'],
  ['Ice giant','A planet made mostly of gas and ice, like Uranus and Neptune.','#7de3e0']
];

// Hero: orbiting planets
const sys = document.getElementById('system');
planets.forEach((p, i) => {
  const size = 24 + i * 9.5, dot = 6 + Math.round(p.s / 26);
  const o = document.createElement('div');
  o.className = 'orbit';
  o.style.cssText = `width:${size}%;height:${size}%;animation-duration:${9 + i * 6}s`;
  o.innerHTML = `<i style="width:${dot}px;height:${dot}px;background:${p.g}"></i>`;
  sys.appendChild(o);
});

// Planet explorer
const picker = document.getElementById('picker');
const planet = document.getElementById('planet');
const info = document.getElementById('info');
let current = -1, busy = false;

function paint(i) {
  const p = planets[i];
  planet.style.setProperty('--bg-planet', p.g);
  planet.style.setProperty('--size', p.s + 'px');
  planet.style.setProperty('--glow', p.c + '55');
  planet.classList.toggle('ring', !!p.ring);
  document.getElementById('pName').textContent = i + 1 + '. ' + p.n;
  document.getElementById('pName').style.setProperty('--pc', p.c);
  document.getElementById('pTag').textContent = p.t;
  document.getElementById('pFacts').innerHTML = p.f.map(f => `<li>${f}</li>`).join('');
}

function select(i) {
  if (busy || i === current) return;
  picker.querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-selected', k === i));
  if (current < 0) { current = i; paint(i); return; }
  busy = true; current = i;
  planet.classList.add('out'); info.classList.add('out');
  setTimeout(() => {
    paint(i);
    planet.classList.remove('out');
    planet.classList.add('in'); info.classList.remove('out');
    setTimeout(() => { planet.classList.remove('in'); busy = false; }, 600);
  }, 450);
}

planets.forEach((p, i) => {
  const b = document.createElement('button');
  b.setAttribute('role', 'tab');
  b.innerHTML = `<span class="dot" style="background:${p.g}"></span>${p.n}`;
  b.onclick = () => select(i);
  picker.appendChild(b);
});
select(2);

// Moon phases
const pw = document.getElementById('phases');
const pt = document.getElementById('phaseText');
phases.forEach(([icon, name, text], i) => {
  const b = document.createElement('button');
  b.innerHTML = `<span>${icon}</span>${name}`;
  b.onclick = () => {
    pw.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    pt.innerHTML = `<strong>${name}:</strong> ${text}`;
  };
  pw.appendChild(b);
  if (i === 4) b.click();
});

// Glossary
const box = document.getElementById('terms');
terms.forEach(([w, d, c]) => {
  const el = document.createElement('div');
  el.className = 'term';
  el.tabIndex = 0;
  el.style.setProperty('--c', c);
  el.dataset.w = (w + ' ' + d).toLowerCase();
  el.innerHTML = `<h3>${w}</h3><p>${d}</p>`;
  const toggle = () => el.classList.toggle('open');
  el.onclick = toggle;
  el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } };
  box.appendChild(el);
});
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  let shown = 0;
  box.querySelectorAll('.term').forEach(t => {
    const hit = t.dataset.w.includes(q);
    t.hidden = !hit;
    t.classList.toggle('open', hit && q.length > 1);
    if (hit) shown++;
  });
  document.getElementById('empty').hidden = shown > 0;
});
