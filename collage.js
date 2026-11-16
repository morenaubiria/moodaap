/* A playful, browser-local outfit studio. Positions are percentages for mobile. */
const studio={theme:0,face:0,head:{x:48,y:23},selected:0,positions:[[48,48],[48,69],[48,88],[79,53],[19,40]],stickers:[],message:'Tu cama, tu pasarela. Arrastrá las prendas y hacé lío ♡'};
let studioMoveTarget='piece';
const studioThemes=['Rosa chicle','Lila dream','Menta fresh'];
function collageScreen(){return `${backTo('crear','look')}<div class="studio-intro"><span class="mini-label">MOODA PLAY / ESTUDIO 01</span><h2>Hoy me visto de…<br><em>personaje principal.</em></h2></div><div class="retro-window"><div class="retro-title"><span>✿ mooda — outfit sin título</span><span aria-hidden="true">─ □ ×</span></div><div class="studio-menu"><span>Archivo</span><span>Mi mood</span><span>Mucho estilo</span><span>♡</span></div><div class="collage-bed bed-${studio.theme}" aria-label="Collage de outfit"><div class="bed-pillow" aria-hidden="true"></div><span class="bed-note">getting ready…</span>${studioHead(studio,true)}${[3,1,0,2,4].map(i=>`<button class="collage-piece ${studioMoveTarget==='piece'&&studio.selected===i?'piece-selected':''}" data-piece="${i}" style="left:${studio.positions[i][0]}%;top:${studio.positions[i][1]}%" onpointerdown="studioDrag(event)" onkeydown="studioKey(event,${i})" onclick="studioSelect(${i})" aria-label="${esc(clothes[i][idx[i]])}. Usá las flechas del teclado para mover; seleccioná abajo para cambiar.">${garment(i,idx[i])}</button>`).join('')}${studio.stickers.map((s,i)=>`<button class="collage-sticker" data-sticker="${i}" style="left:${s.x}%;top:${s.y}%" onpointerdown="studioDrag(event)" onkeydown="studioStickerKey(event,${i})" ondblclick="studio.stickers.splice(${i},1);render()" aria-label="Sticker ${esc(s.text)}. Flechas para mover, Suprimir para quitar.">${s.text}</button>`).join('')}<span class="bed-label">${esc(occasion)} / MOODA CLUB</span></div><div class="studio-status">Tocá una prenda o la cabeza y arrastrala. También podés usar estas flechas.</div><div class="studio-move-controls"><button type="button" onclick="studioSelectHead()" aria-label="Seleccionar cabeza para mover">Mover cabeza</button><div class="studio-move-arrows" role="group" aria-label="Mover elemento seleccionado"><button type="button" onclick="studioNudge(-1,0)" aria-label="Mover a la izquierda">←</button><button type="button" onclick="studioNudge(0,-1)" aria-label="Mover hacia arriba">↑</button><button type="button" onclick="studioNudge(0,1)" aria-label="Mover hacia abajo">↓</button><button type="button" onclick="studioNudge(1,0)" aria-label="Mover a la derecha">→</button></div></div></div><div class="studio-controls">${studioFacePicker()}<div class="studio-categories">${categoryNames.map((name,i)=>`<button class="${studio.selected===i?'active':''}" onclick="studioSelect(${i});render()" aria-pressed="${studio.selected===i}">${name}</button>`).join('')}</div><div class="studio-picker"><button onclick="studioChange(-1)" aria-label="Prenda anterior">←</button><span>${esc(clothes[studio.selected][idx[studio.selected]])}</span><button onclick="studioChange(1)" aria-label="Prenda siguiente">→</button></div><div class="studio-backgrounds"><span>Tu cama:</span>${studioThemes.map((t,i)=>`<button class="swatch swatch-${i}" onclick="studio.theme=${i};render()" aria-label="${t}" aria-pressed="${studio.theme===i}">${studio.theme===i?'✓':''}</button>`).join('')}<button class="sticker-add" onclick="studioSticker()">＋ sticker</button></div><button class="studio-shuffle" onclick="studioShuffle()">⚄ Sorprendeme (confío… creo)</button><p class="studio-reaction" role="status">${esc(studio.message)}</p><button class="primary full" onclick="studioConfirm()">Guardar este lookazo ↗</button></div>`}
function studioSelect(i){studioMoveTarget='piece';document.querySelector('.character-head[data-head]')?.classList.remove('piece-selected');studio.selected=i;document.querySelectorAll('.collage-piece').forEach(el=>el.classList.toggle('piece-selected',Number(el.dataset.piece)===i));document.querySelectorAll('.studio-categories button').forEach((el,n)=>{el.classList.toggle('active',n===i);el.setAttribute('aria-pressed',n===i)});const label=document.querySelector('.studio-picker span');if(label)label.textContent=clothes[i][idx[i]]}
function studioChange(n){const i=studio.selected;idx[i]=(idx[i]+n+clothes[i].length)%clothes[i].length;render()}
function studioShuffle(){idx=clothes.map((a,i)=>a.length>1?(idx[i]+1+Math.floor(Math.random()*(a.length-1)))%a.length:0);const lines=['¿Demasiado? Esa palabra no está en mi armario.','La silla con ropa acaba de ponerse celosa.','Este look pide una salida, aunque sea al kiosco.','Tu ex no está listo para este outfit.','Vestida para llegar tarde pero icónica.'];studio.message=lines[Math.floor(Math.random()*lines.length)];render()}
function studioSticker(){if(studio.stickers.length>=8)return toast('Ya hay una fiesta de stickers. Doble clic en uno para quitarlo.');const words=['★','♡','fashion emergency','100% yo','main character','✿','qué lookazo','no paparazzi'];studio.stickers.push({text:words[studio.stickers.length],x:20+Math.random()*60,y:25+Math.random()*55});render()}
function studioMove(target,x,y){target.x=Math.max(12,Math.min(88,x));target.y=Math.max(12,Math.min(88,y))}
function studioSelectHead(){
 studioMoveTarget='head';
 document.querySelectorAll('.collage-piece').forEach(el=>el.classList.remove('piece-selected'));
 document.querySelector('.character-head[data-head]')?.classList.add('piece-selected');
}
function studioNudge(dx,dy){
 const head=studioMoveTarget==='head';
 const el=document.querySelector(head?'.character-head[data-head]':`.collage-piece[data-piece="${studio.selected}"]`);
 if(!el)return;
 const p=head?{...studio.head}:{x:studio.positions[studio.selected][0],y:studio.positions[studio.selected][1]};
 studioMove(p,p.x+dx*2,p.y+dy*2);
 if(head)Object.assign(studio.head,p);else studio.positions[studio.selected]=[p.x,p.y];
 el.style.left=p.x+'%';el.style.top=p.y+'%';
}
function studioDrag(e){
 if(e.button!==0||e.isPrimary===false)return;
 e.preventDefault();
 const el=e.currentTarget,rect=el.parentElement.getBoundingClientRect();
 const isHead=el.dataset.head!==undefined,isPiece=el.dataset.piece!==undefined;
 const key=Number(isPiece?el.dataset.piece:el.dataset.sticker);
 if(isHead)studioSelectHead();else if(isPiece)studioSelect(key);
 const original=isHead?{...studio.head}:isPiece?{x:studio.positions[key][0],y:studio.positions[key][1]}:{...studio.stickers[key]};
 const startX=e.clientX,startY=e.clientY;
 el.classList.add('is-dragging');el.focus({preventScroll:true});el.setPointerCapture(e.pointerId);
 const move=ev=>{
  if(ev.pointerId!==e.pointerId)return;
  const p={};studioMove(p,original.x+(ev.clientX-startX)/rect.width*100,original.y+(ev.clientY-startY)/rect.height*100);
  if(isHead)Object.assign(studio.head,p);else if(isPiece)studio.positions[key]=[p.x,p.y];else Object.assign(studio.stickers[key],p);
  el.style.left=p.x+'%';el.style.top=p.y+'%';
 };
 const stop=ev=>{
  if(ev.pointerId!==e.pointerId)return;
  el.classList.remove('is-dragging');
  el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',stop);el.removeEventListener('pointercancel',stop);el.removeEventListener('lostpointercapture',stop);
  if(el.hasPointerCapture(e.pointerId))el.releasePointerCapture(e.pointerId);
 };
 el.addEventListener('pointermove',move);el.addEventListener('pointerup',stop);el.addEventListener('pointercancel',stop);el.addEventListener('lostpointercapture',stop);
}

function studioKey(e,i){if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();const p={};studioMove(p,studio.positions[i][0]+(e.key==='ArrowRight'?2:e.key==='ArrowLeft'?-2:0),studio.positions[i][1]+(e.key==='ArrowDown'?2:e.key==='ArrowUp'?-2:0));studio.positions[i]=[p.x,p.y];e.currentTarget.style.left=p.x+'%';e.currentTarget.style.top=p.y+'%'}
function studioStickerKey(e,i){if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();studio.stickers.splice(i,1);render();return}if(!e.key.startsWith('Arrow'))return;e.preventDefault();const s=studio.stickers[i];studioMove(s,s.x+(e.key==='ArrowRight'?2:e.key==='ArrowLeft'?-2:0),s.y+(e.key==='ArrowDown'?2:e.key==='ArrowUp'?-2:0));e.currentTarget.style.left=s.x+'%';e.currentTarget.style.top=s.y+'%'}
function studioConfirm(){const dialog=document.createElement('dialog');dialog.className='studio-dialog';dialog.innerHTML='<form method="dialog"><div class="retro-title">MOODA — decisión importante ♡</div><p>¿Confirmamos este lookazo?</p><small>Se guarda en Mis outfits, listo para tu próxima salida.</small><div><button value="cancel">Lo sigo pensando</button><button value="save">Obvio, reina ♡</button></div></form>';dialog.addEventListener('close',()=>{if(dialog.returnValue==='save'){const outfit={occasion,favorite:false,items:idx.map((n,i)=>clothes[i][n]),collage:JSON.parse(JSON.stringify(studio))};const next=[...saved,outfit];if(persist('moodaSaved',next)){saved=next;render();toast('Look guardado. El mundo es tu pasarela ♡')}}dialog.remove()});dialog.setAttribute('aria-label','Guardar look');showAppDialog(dialog)}

function studioSavedPreview(o){const c=o.collage;return `<div class="collage-bed studio-saved bed-${Number(c.theme)||0}"><div class="bed-pillow"></div>${c.face!==undefined?studioHead(c,false):''}${[3,1,0,2,4].map(i=>{const n=clothes[i].indexOf(o.items[i]),p=c.positions[i];return n<0?'':`<div class="collage-piece" data-piece="${i}" style="left:${Number(p[0])}%;top:${Number(p[1])}%">${garment(i,n)}</div>`}).join('')}${c.stickers.map(s=>`<span class="collage-sticker" style="left:${Number(s.x)}%;top:${Number(s.y)}%">${esc(s.text)}</span>`).join('')}</div>`}

const moodaCharacters=[{name:'La romántica',mood:'Rosa, pero con actitud.',theme:0},{name:'La pop',mood:'Hoy soy el evento.',theme:1},{name:'La icónica',mood:'Salí así, sin querer (queriendo).',theme:0},{name:'La creativa',mood:'Un cafecito y un lookazo.',theme:2}];
function studioHead(c,interactive){const face=Math.max(0,Math.min(3,Number(c.face)||0)),h=c.head||{x:48,y:23};return interactive?`<button class="character-head ${studioMoveTarget==='head'?'piece-selected':''}" data-head="true" style="--face:${face};left:${Number(h.x)}%;top:${Number(h.y)}%" onpointerdown="studioDrag(event)" onkeydown="studioHeadKey(event)" aria-label="Cara de ${moodaCharacters[face].name}. Arrastrá o mové con las flechas."></button>`:`<span class="character-head" style="--face:${face};left:${Number(h.x)}%;top:${Number(h.y)}%"></span>`}
function studioFacePicker(){return `<div class="character-heading"><span class="mini-label">ELEGÍ TU ALTER EGO</span><span>misma vos, otro mood ♡</span></div><div class="character-picker">${moodaCharacters.map((c,i)=>`<button class="character-option ${studio.face===i?'chosen':''}" onclick="studioChooseFace(${i})" aria-pressed="${studio.face===i}"><span class="character-portrait" style="--face:${i}" aria-hidden="true"></span><strong>${c.name}</strong></button>`).join('')}</div><p class="character-quote">“${moodaCharacters[studio.face].mood}”</p>`}
function studioChooseFace(i){studio.face=i;studio.theme=moodaCharacters[i].theme;render()}
function studioHeadKey(e){if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();studioMove(studio.head,studio.head.x+(e.key==='ArrowRight'?2:e.key==='ArrowLeft'?-2:0),studio.head.y+(e.key==='ArrowDown'?2:e.key==='ArrowUp'?-2:0));e.currentTarget.style.left=studio.head.x+'%';e.currentTarget.style.top=studio.head.y+'%'}
function studioCharacterHome(){return `<div class="character-home"><div><span class="mini-label">LAS CHICAS MOODA</span><p>¿Quién sos hoy?</p></div><div class="character-home-faces">${moodaCharacters.map((c,i)=>`<button onclick="studio.face=${i};studio.theme=${c.theme};go('crear','collage')" aria-label="Armar un look con ${c.name}"><span class="character-portrait" style="--face:${i}"></span></button>`).join('')}</div></div>`}
