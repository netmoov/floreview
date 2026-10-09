(() => {
  'use strict';
  const grid=document.getElementById('resource-grid');
  if(!grid) return;
  const input=document.getElementById('resource-query');
  const count=document.getElementById('resource-count');
  const empty=document.getElementById('resource-noresults');
  const buttons=[...document.querySelectorAll('[data-resource-filter]')];
  const cards=[...grid.querySelectorAll('.v7-resource-card')];
  const options=new Set(['all','inspiration','skills','international','presse']);
  let category='all';
  const clean=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  function refresh(){
    const terms=clean(input.value).split(/\s+/).filter(Boolean);
    let total=0;
    for(const card of cards){
      const haystack=clean(card.dataset.search);
      const visible=(category==='all'||card.dataset.category===category)&&terms.every(t=>haystack.includes(t));
      card.hidden=!visible;
      if(visible) total++;
    }
    count.textContent=total+' ressource'+(total===1?'':'s')+' affichée'+(total===1?'':'s');
    empty.hidden=total!==0;
    buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.resourceFilter===category)));
  }
  buttons.forEach(button=>button.addEventListener('click',()=>{
    category=button.dataset.resourceFilter;
    const url=new URL(location.href);
    if(category==='all') url.searchParams.delete('theme'); else url.searchParams.set('theme',category);
    history.replaceState(null,'',url);
    refresh();
  }));
  input.addEventListener('input',refresh);
  const requested=new URLSearchParams(location.search).get('theme');
  if(options.has(requested)) category=requested;
  refresh();
})();
