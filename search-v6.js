(() => {
  'use strict';
  const overlay = document.getElementById('site-search');
  if (!overlay) return;
  const input = document.getElementById('site-search-input');
  const suggestions = document.getElementById('site-search-suggestions');
  const matches = document.getElementById('site-search-matches');
  const results = document.getElementById('site-search-results');
  const count = document.getElementById('site-search-count');
  const empty = document.getElementById('site-search-empty');
  const openers = document.querySelectorAll('[data-search-open]');
  let previousFocus = null;
  let items = [];
  let selected = -1;

  const pages = [
    {title:'Presse & médias', subtitle:'Actualités, interviews et contacts presse', kind:'Rubrique', url:'presse.html', keywords:'communication medias newsroom communiqué journalistes presse dossiers'},
    {title:'Commerce international', subtitle:'Marchés floraux, échanges et tendances mondiales', kind:'Rubrique', url:'international.html', keywords:'marchés commerce trade fleurs monde import export réseau international'},
    {title:'Skills & savoir-faire', subtitle:'Techniques, métiers et transmission', kind:'Rubrique', url:'savoir-faire.html', keywords:'skills formation apprentissage compétences fleuristes méthodes métiers'},
    {title:'Fleurs et plantes', subtitle:'Fiches du site officiel Floreview', kind:'Fleurs & plantes', url:'https://floreview.com/fr/fleurs-et-plantes/', keywords:'fleurs plantes botanique végétaux fleuriste'} ,
    {title:'Inspirations', subtitle:'Créations, idées et art floral', kind:'Page', url:'inspirations.html', keywords:'fleurs bouquets tendances créations design floral'},
    {title:'Le journal', subtitle:'Actualités et regards sur le monde floral', kind:'Page', url:'journal.html', keywords:'presse journalistes actualités nouvelles articles'},
    {title:'Agenda', subtitle:'Rendez-vous de la filière', kind:'Page', url:'agenda.html', keywords:'salons salons professionnels événements événements internationaux'},
    {title:'Nos univers', subtitle:'Les trois univers de Floreview', kind:'Page', url:'univers.html', keywords:'fleurs métiers nature univers inspiration'},
    {title:'Notre mission', subtitle:'Les valeurs et l’esprit de Floreview', kind:'Page', url:'apropos.html', keywords:'qui sommes nous entreprise presse vocation mission'},
    {title:'Devenir membre', subtitle:'Découvrir la communauté et les avantages', kind:'Page', url:'adhesion.html', keywords:'adhésion communauté membre'},
    {title:'Contact', subtitle:'Entrer en relation avec Floreview', kind:'Page', url:'contact.html', keywords:'email adresse rédaction partenariat contacter'}
  ];
  const articles = (Array.isArray(window.FLOREVIEW_ARTICLES) ? window.FLOREVIEW_ARTICLES : []).map(a => ({
    title: a.title,
    subtitle: a.summary,
    kind: 'Article du journal',
    url: a.url,
    keywords: [a.tag,a.category].filter(Boolean).join(' ')
  }));
  const entries = [...pages,...articles];
  const clean = s => String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr').trim();
  const escapeHtml = s => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  function score(item, query){
    const tokens = clean(query).split(/\s+/).filter(Boolean);
    const title=clean(item.title), subtitle=clean(item.subtitle), keywords=clean(item.keywords);
    if(!tokens.length || !tokens.every(t => title.includes(t)||subtitle.includes(t)||keywords.includes(t))) return 0;
    return tokens.reduce((value,t) => value+(title.startsWith(t)?14:0)+(title.includes(t)?8:0)+(keywords.includes(t)?4:0)+(subtitle.includes(t)?2:0),0);
  }
  function chooseActive(index){
    selected=index;
    items.forEach((item,i)=>{ item.classList.toggle('is-keyboard-active',i===index); item.setAttribute('aria-selected',String(i===index)); });
    if(index>=0){input.setAttribute('aria-activedescendant', items[index].id);items[index].scrollIntoView({block:'nearest'});}
    else input.removeAttribute('aria-activedescendant');
  }
  function refresh(){
    const query=input.value.trim();
    selected=-1;
    input.removeAttribute('aria-activedescendant');
    if(!query){suggestions.hidden=false;matches.hidden=true;input.setAttribute('aria-expanded','false');items=[];return;}
    const ranked=entries.map(item=>({item,rank:score(item,query)})).filter(x=>x.rank>0).sort((a,b)=>b.rank-a.rank||a.item.title.localeCompare(b.item.title,'fr')).slice(0,7);
    suggestions.hidden=true;matches.hidden=false;input.setAttribute('aria-expanded',String(ranked.length>0));
    count.textContent = ranked.length===0 ? 'Aucune suggestion' : `${ranked.length} suggestion${ranked.length>1?'s':''}`;
    empty.hidden = ranked.length>0;
    results.innerHTML = ranked.map(({item},i)=>`<a class="search-result" id="search-result-${i}" role="option" aria-selected="false" href="${escapeHtml(item.url)}" ${/^https?:\/\//.test(item.url)?'target="_blank" rel="noopener noreferrer"':''}><span><small class="search-result__kind">${escapeHtml(item.kind)}</small><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.subtitle)}</small></span><span class="search-result__go" aria-hidden="true">↗</span></a>`).join('');
    items=Array.from(results.querySelectorAll('.search-result'));
  }
  function openSearch(){
    if(!overlay.hidden)return;
    previousFocus=document.activeElement;
    overlay.hidden=false;
    document.body.classList.add('site-search-open');
    input.value='';refresh();
    input.focus({preventScroll:true});
  }
  function closeSearch(){
    if(overlay.hidden)return;
    overlay.hidden=true;
    document.body.classList.remove('site-search-open');
    if(previousFocus && previousFocus.isConnected) previousFocus.focus({preventScroll:true});
  }
  openers.forEach(button=>button.addEventListener('click',openSearch));
  overlay.querySelectorAll('[data-search-close]').forEach(x=>x.addEventListener('click',closeSearch));
  overlay.querySelectorAll('[data-search-query]').forEach(x=>x.addEventListener('click',()=>{input.value=x.dataset.searchQuery;refresh();input.focus();}));
  input.addEventListener('input',refresh);
  input.addEventListener('keydown',event=>{
    if(!items.length)return;
    if(event.key==='ArrowDown'){event.preventDefault();chooseActive((selected+1)%items.length);}
    if(event.key==='ArrowUp'){event.preventDefault();chooseActive(selected<1?items.length-1:selected-1);}
    if(event.key==='Enter'){event.preventDefault();const destination=items[selected<0?0:selected];if(destination)destination.click();}
  });
  overlay.addEventListener('keydown',event=>{
    if(event.key==='Escape'){event.preventDefault();closeSearch();}
    if(event.key==='Tab'){
      const focusable=[...overlay.querySelectorAll('a[href],button:not([disabled]),input:not([disabled])')].filter(el=>el.getClientRects().length>0);
      if(!focusable.length)return;
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  document.addEventListener('keydown',event=>{
    if(!overlay.hidden)return;
    const isEditing = event.target.closest('input, textarea, select, [contenteditable="true"]');
    if(!isEditing && ((event.key==='/' && !event.ctrlKey && !event.metaKey)||(event.key.toLowerCase()==='k' && (event.ctrlKey||event.metaKey)))){
      event.preventDefault();openSearch();
    }
  });
  window.FloreviewSearch = Object.freeze({open:openSearch, close:closeSearch});
})();
