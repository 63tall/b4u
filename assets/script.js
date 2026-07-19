/* ============================================================
   WAYFINDER — shared behavior
   ============================================================ */

/* ---------- starfield ---------- */
function buildStars(container, count = 70){
  if(!container) return;
  const frag = document.createDocumentFragment();
  for(let i=0;i<count;i++){
    const s = document.createElement('div');
    const big = Math.random() < 0.16;
    s.className = 'star' + (big ? ' big' : '');
    s.style.top = Math.random()*100 + '%';
    s.style.left = Math.random()*100 + '%';
    s.style.animationDelay = (Math.random()*4) + 's';
    s.style.animationDuration = (3 + Math.random()*3) + 's';
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

/* ---------- drifting petals / embers ---------- */
function buildPetals(container, count = 10){
  if(!container) return;
  const colors = ['var(--coral)','var(--gold)','var(--lagoon-light)'];
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'petal';
    const size = 6 + Math.random()*8;
    p.style.left = Math.random()*100 + '%';
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.borderRadius = '40% 60% 60% 40% / 60% 40% 60% 40%';
    p.style.background = colors[i % colors.length];
    p.style.setProperty('--drift', (Math.random()*80-40) + 'px');
    p.style.animationDuration = (10 + Math.random()*10) + 's';
    p.style.animationDelay = (Math.random()*12) + 's';
    container.appendChild(p);
  }
}

/* ---------- word-by-word reveal ---------- */
function wrapWords(el){
  const text = el.textContent.trim();
  el.textContent = '';
  el.classList.add('reveal-line');
  const words = text.split(/\s+/);
  words.forEach((w, i)=>{
    const span = document.createElement('span');
    span.className = 'reveal-word';
    span.style.animationDelay = (i * 0.09) + 's';
    span.textContent = w + (i < words.length-1 ? '\u00A0' : '');
    el.appendChild(span);
  });
}
function initReveal(root = document){
  root.querySelectorAll('[data-reveal]').forEach(wrapWords);
}

/* ---------- promise cards ---------- */
function initPromiseCards(){
  document.querySelectorAll('.promise-card').forEach(card=>{
    card.setAttribute('tabindex','0');
    card.setAttribute('role','button');
    const toggle = () => card.classList.toggle('open');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
    });
  });
}

/* ---------- gentle parallax on scroll for ocean layers ---------- */
function initParallax(){
  const layers = document.querySelectorAll('[data-parallax]');
  if(!layers.length) return;
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    layers.forEach(l=>{
      const speed = parseFloat(l.dataset.parallax) || 0.1;
      l.style.transform = `translateY(${y*speed}px)`;
    });
  }, { passive:true });
}

/* ---------- finale: petal burst ---------- */
function burstCelebration(count = 46){
  const layer = document.querySelector('.burst');
  if(!layer) return;
  const colors = ['var(--coral)','var(--gold)','var(--tefiti-light)','var(--lagoon-light)'];
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className = 'burst-petal';
    const angle = Math.random()*2*Math.PI;
    const dist = 80 + Math.random()*320;
    el.style.setProperty('--tx', Math.cos(angle)*dist + 'px');
    el.style.setProperty('--ty', Math.sin(angle)*dist + 'px');
    el.style.setProperty('--rot', (Math.random()*720-360) + 'deg');
    el.style.background = colors[i % colors.length];
    el.style.animationDelay = (Math.random()*0.35) + 's';
    layer.appendChild(el);
    setTimeout(()=> el.remove(), 2400);
  }
}

/* ---------- the "no" button that gently declines to be pressed ---------- */
function initEvasiveButton(btn){
  if(!btn) return;
  let dodges = 0;
  const move = () => {
    dodges++;
    const rect = btn.getBoundingClientRect();
    const margin = 16;
    const maxX = Math.max(margin, window.innerWidth - rect.width - margin);
    const maxY = Math.max(margin, window.innerHeight - rect.height - margin);
    const x = margin + Math.random() * (maxX - margin);
    const y = margin + Math.random() * (maxY - margin);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.margin = '0';
    if(dodges >= 3){
      const scale = Math.max(0.55, 1 - dodges*0.05);
      btn.style.transform = `scale(${scale})`;
    }
  };
  btn.addEventListener('mouseenter', move);
  btn.addEventListener('touchstart', (e)=>{ e.preventDefault(); move(); }, { passive:false });
  btn.addEventListener('focus', move);
  btn.addEventListener('click', (e)=>{ e.preventDefault(); move(); });
}

document.addEventListener('DOMContentLoaded', ()=>{
  buildStars(document.querySelector('.stars'));
  buildPetals(document.querySelector('.petals'));
  initReveal();
  initPromiseCards();
  initParallax();
});
