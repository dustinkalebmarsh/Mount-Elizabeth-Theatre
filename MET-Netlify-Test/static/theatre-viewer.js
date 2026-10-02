(()=>{
  const buttons=[...document.querySelectorAll('.theatre-photo-open')];
  const dialog=document.querySelector('.photo-viewer');
  if(!dialog||!buttons.length)return;
  const photo=dialog.querySelector('.photo-viewer-content > img');
  const caption=dialog.querySelector('.photo-viewer-caption');
  const count=dialog.querySelector('.photo-viewer-count');
  let index=0,opener=null;
  function show(next){index=(next+buttons.length)%buttons.length;const source=buttons[index];photo.src=source.dataset.src;photo.alt=source.dataset.caption||`Theatre photo ${index+1}`;caption.textContent=source.dataset.caption||'';count.textContent=`${index+1} / ${buttons.length}`}
  buttons.forEach((button,i)=>button.addEventListener('click',()=>{opener=button;show(i);dialog.showModal()}));
  dialog.querySelector('.photo-viewer-close').addEventListener('click',()=>dialog.close());
  dialog.querySelector('.photo-viewer-prev').addEventListener('click',()=>show(index-1));
  dialog.querySelector('.photo-viewer-next').addEventListener('click',()=>show(index+1));
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
  dialog.addEventListener('close',()=>opener?.focus());
  dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();show(index+1)}if(event.key==='ArrowLeft'){event.preventDefault();show(index-1)}});
})();
