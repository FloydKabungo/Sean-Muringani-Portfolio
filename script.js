const projects = [
  {title:'Forge Fit — Run',category:'Campaign / Poster Design',image:'assets/forge-fit-run.jpg',description:'An energetic sportswear campaign using high-impact typography, warm colour and movement to communicate performance and durability.'},
  {title:'Muringani Films',category:'Logo Design / Brand Identity',image:'assets/muringani-films.jpg',description:'A minimal film-inspired identity featuring a flowing film-strip motif, monochrome tones and cinematic typography.'},
  {title:'ABC Nurture & Co.',category:'Logo Design / Children’s Brand',image:'assets/abc-nurture.jpg',description:'A cheerful, approachable logo concept using playful lettering, bright primary colours and child-friendly illustrations.'},
  {title:'Kids Innovative Africa',category:'User Interface / Dashboard',image:'assets/kids-innovative-dashboard.jpg',description:'A colourful learning dashboard concept that brings course progress, educational content and achievements into one easy-to-navigate interface.'},
  {title:'Forge Fit — Collection',category:'Editorial / Fashion Design',image:'assets/forge-fit-editorial.jpg',description:'A two-panel editorial concept featuring men’s and women’s activewear, contrasting backgrounds and confident fashion presentation.'},
  {title:'Forge Fit — Kids',category:'Poster / Campaign Design',image:'assets/forge-fit-kids.jpg',description:'A playful kidswear campaign filled with energetic colours, expressive type and animated visual references.'},
  {title:'What’s In These Shoes?',category:'Editorial / Poster Design',image:'assets/forge-fit-shoes.jpg',description:'An editorial footwear concept exploring product storytelling through strong contrast, athletic imagery and dramatic type.'},
  {title:'Forge Fit — Identity',category:'Logo / Brand Identity',image:'assets/forge-fit-logo.jpg',description:'A dynamic sportswear identity built around a bold wordmark, running imagery and an angular monogram.'}
];
const filters=document.querySelectorAll('.filter');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(f=>f.classList.remove('active'));btn.classList.add('active');const category=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('is-hidden',category!=='all'&&card.dataset.category!==category));}));
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',()=>{const p=projects[Number(card.dataset.index)];dialog.querySelector('.modal-image img').src=p.image;dialog.querySelector('.modal-image img').alt=p.title;dialog.querySelector('.modal-count').textContent='PROJECT '+String(Number(card.dataset.index)+1).padStart(2,'0')+' / 08';dialog.querySelector('h2').textContent=p.title;dialog.querySelector('p').textContent=p.description;dialog.querySelector('.modal-tag').textContent=p.category.toUpperCase();dialog.showModal();}));
dialog.querySelector('.modal-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();document.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px');});
document.querySelector('[data-placeholder-email]').addEventListener('click',e=>{e.preventDefault();window.alert('Sean’s contact email has not been added yet. Replace YOUR-EMAIL@example.com in index.html with Sean’s actual email address to activate this button.');});

// Normalize marquee speed to approximately 85 CSS pixels per second across screens.
const tickerGroup = document.querySelector('.ticker-group');
const tickerTrack = document.querySelector('.ticker-track');
if (tickerGroup && tickerTrack) {
  const updateTickerSpeed = () => {
    const distance = tickerGroup.getBoundingClientRect().width;
    if (distance > 0) tickerTrack.style.setProperty('--ticker-duration', `${distance / 85}s`);
  };
  updateTickerSpeed();
  if ('ResizeObserver' in window) new ResizeObserver(updateTickerSpeed).observe(tickerGroup);
  document.fonts?.ready?.then(updateTickerSpeed);
  window.addEventListener('resize', updateTickerSpeed, {passive:true});
}
