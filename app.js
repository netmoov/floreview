(() => {
  'use strict';
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));

  // Menu mobile accessible; works without any external library.
  const toggle = $('.menu-toggle');
  const nav = $('#site-nav');
  if(toggle && nav){
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    $$('#site-nav a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') setOpen(false); });
    document.addEventListener('click', e => { if(!e.target.closest('.header-inner')) setOpen(false); });
  }

  const articles = Array.isArray(window.FLOREVIEW_ARTICLES) ? window.FLOREVIEW_ARTICLES : [];
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function storyCard(article){
    const title=escapeHtml(article.title), cat=escapeHtml(article.category), summary=escapeHtml(article.summary), image=escapeHtml(article.image), url=escapeHtml(article.url), tag=escapeHtml(article.tag);
    return `<a class="story-card reveal is-visible" href="${url}" target="_blank" rel="noopener noreferrer" data-category="${cat}" data-search="${title.toLowerCase()} ${summary.toLowerCase()} ${cat.toLowerCase()}"><div class="story-image"><img src="${image}" alt="Photographie florale d’ambiance" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='assets/floral-illustration.svg'"></div><div class="story-body"><span class="category">${cat} · ${tag}</span><h3>${title}</h3><p>${summary}</p><div class="story-foot"><span>Lire sur Floreview</span><span aria-hidden="true">↗</span></div></div></a>`;
  }
  if($('#home-articles')) $('#home-articles').innerHTML=articles.slice(0,3).map(storyCard).join('');
  if($('#journal-articles')) $('#journal-articles').innerHTML=articles.map(storyCard).join('');

  // Functional filters for both galleries (no fake submit).
  const filterStates={journal:'tous',inspirations:'tous'};
  function updateFilters(type){
    const isJournal=type==='journal';
    const cards=$$(isJournal ? '#journal-articles .story-card' : '#inspo-grid .inspo-card');
    const search=$(isJournal ? '#journal-search' : '#inspiration-search');
    const empty=$(isJournal ? '#journal-empty' : '#inspo-empty');
    const query=(search?.value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
    const filter=filterStates[type];
    let matches=0;
    for(const card of cards){
      const text=(card.dataset.search || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
      const shown=(filter==='tous' || card.dataset.category === filter) && text.includes(query);
      card.hidden=!shown;
      if(shown) matches++;
    }
    if(empty) empty.hidden=matches!==0;
  }
  $$('[data-filter-scope]').forEach(group => {
    const type=group.dataset.filterScope;
    group.addEventListener('click', e => {
      const button=e.target.closest('[data-filter]');if(!button)return;
      filterStates[type]=button.dataset.filter;
      $$('[data-filter]',group).forEach(x=>{const active=x===button;x.classList.toggle('is-selected',active);x.setAttribute('aria-pressed',String(active));});
      updateFilters(type);
    });
  });
  [['journal','#journal-search'],['inspirations','#inspiration-search']].forEach(([type,selector])=>{
    $(selector)?.addEventListener('input', () => updateFilters(type));
  });

  // Light progressive enhancement; content never disappears without JS.
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    }),{threshold:0.08,rootMargin:'0px 0px 70px 0px'});
    $$('.reveal').forEach(el=>observer.observe(el));
  } else { $$('.reveal').forEach(el=>el.classList.add('is-visible')); }
})();
