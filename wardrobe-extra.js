/* Transparent PNG clothing atlas. One cutout in each equal 4 × 3 cell. */
const extraWardrobe=[
{name:'Baby tee Club MOODA',category:0,cell:0,shopId:'tee'},
{name:'Buzo Star Crush MOODA',category:3,cell:1,shopId:'hoodie'},
{name:'Tote City Girl MOODA',category:4,cell:2,shopId:'tote'},
{name:'Mini bag Drama Queen MOODA',category:4,cell:3,shopId:'bag'},
{name:'Collar Cherry Baby MOODA',category:4,cell:4,shopId:'charms'},
{name:'Jean flare con strass',category:1,cell:5},
{name:'Mini plisada rosa',category:1,cell:6},
{name:'Top menta con encaje',category:0,cell:7},
{name:'Campera biker negra',category:3,cell:8},
{name:'Mary Janes plateadas',category:2,cell:9},
{name:'Mini cargo denim',category:1,cell:10},
{name:'Zapatillas chunky rosas',category:2,cell:11}
].map(item=>({...item,sprite:'mooda-flower-drop-clean.png'}));
extraWardrobe.push(...[
{name:'Corset satén rosa',category:0,cell:0},
{name:'Bolero blanco de encaje',category:3,cell:1},
{name:'Baby tee mariposa strass',category:0,cell:2},
{name:'Buzo menta de plush',category:3,cell:3},
{name:'Pantalón cargo negro',category:1,cell:4},
{name:'Mini plisada lila con cadena',category:1,cell:5},
{name:'Bermuda denim con lazos',category:1,cell:6},
{name:'Top halter animal print',category:0,cell:7},
{name:'Botinetas plataforma negras',category:2,cell:8},
{name:'Mini bag plateada',category:4,cell:10},
{name:'Lentes Y2K con strass',category:4,cell:11}
].map(item=>({...item,sprite:'mooda-y2k-vol2.png'})));
// La colección anterior dependía de recortes manuales sobre láminas de looks.
// Usar únicamente la colección transparente, sin fondos ni piezas vecinas.
function installExtraWardrobe(){for(let i=0;i<wardrobe.length;i++)wardrobe[i].splice(0,wardrobe[i].length,...extraWardrobe.filter(item=>item.category===i))}
function wardrobeSprite(item){const x=item.cell%4,y=Math.floor(item.cell/4),id='extra-cut-'+(++cutoutId),file=item.sprite.split('/').pop();let shapes=[extraContours[file]?.[item.cell]].filter(Boolean);const pair=(file==='mooda-flower-drop-clean.png'&&[9,11].includes(item.cell))||(file==='mooda-y2k-vol2.png'&&item.cell===9);if(pair&&shapes.length)shapes.push(shapes[0].split(' ').map(p=>{const [a,b]=p.split(',').map(Number);return `${100-a},${b}`}).join(' '));const holes=extraHoles[file]?.[item.cell]||[];const path=points=>'M'+points.split(' ').map(p=>{const [a,b]=p.split(',').map(Number);return `${x+a/100},${y+b/100}`}).join(' L')+' Z';return `<div class="garment garment-photo"><svg viewBox="${x} ${y} 1 1" role="img" aria-label="${esc(item.name)}" preserveAspectRatio="xMidYMid meet" style="overflow:hidden"><defs><clipPath id="${id}">${shapes.length?shapes.map(points=>`<path d="${path(points)}"/>`).join(''):`<rect x="${x}" y="${y}" width="1" height="1"/>`}</clipPath>${holes.length?`<mask id="${id}-holes" maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="1" height="1"><rect x="${x}" y="${y}" width="1" height="1" fill="white"/>${holes.map(points=>`<path d="${path(points)}" fill="black"/>`).join('')}</mask>`:''}</defs><image clip-path="url(#${id})" ${holes.length?`mask="url(#${id}-holes)"`:''} href="${item.sprite}" width="4" height="3"/></svg></div>`}
function wearWardrobe(i,n){idx[i]=n;studio.selected=i;go('crear','collage');toast('Lista para combinar: '+clothes[i][n]+' ♡')}
function wearMerch(id){const item=extraWardrobe.find(x=>x.shopId===id);if(!item)return;const n=wardrobe[item.category].findIndex(x=>x.name===item.name);if(n<0)return;document.querySelectorAll('.shop-dialog').forEach(d=>{d.close();d.remove()});wearWardrobe(item.category,n)}

const extraContours={
 'mooda-flower-drop-clean.png':[
 '10,32 24,19 34,14 40,15 50,17 60,15 66,13 79,19 94,32 85,45 77,45 73,59 77,80 84,89 79,94 53,96 27,94 15,90 21,75 23,59 21,46 15,45',
 '27,24 26,18 30,10 40,4 49,2 60,4 68,11 73,23 79,28 85,46 96,76 94,87 87,95 77,96 72,87 69,95 29,95 27,89 21,96 13,96 6,89 5,78 12,56 19,34',
 '13,34 28,33 28,21 30,11 36,5 44,3 52,5 58,11 60,25 67,26 73,25 78,29 87,30 91,41 91,53 86,55 84,49 83,72 81,92 74,96 19,96 14,92',
 '8,67 15,43 19,32 24,23 28,14 36,7 47,5 57,8 68,18 75,31 82,42 88,52 94,58 98,86 95,92 84,95 24,95 12,92 8,83',
 '6,39 14,31 24,18 36,10 49,6 60,9 72,12 82,22 87,31 88,45 95,53 91,62 85,65 80,72 70,77 67,88 61,93 49,94 38,92 32,88 33,77 25,70 18,67 12,59 10,52 6,48',
 '31,5 67,5 71,12 74,32 79,54 82,69 87,86 80,94 64,97 52,95 49,89 42,96 25,97 15,92 23,70 27,43',
 '23,24 80,24 86,43 96,66 98,72 90,77 65,82 40,82 17,77 4,72 8,61 18,40',
 '23,8 26,7 28,13 28,31 41,35 50,39 60,35 70,31 72,11 75,7 78,9 75,33 88,40 90,48 84,61 85,75 90,91 82,94 60,94 35,94 12,91 17,75 19,63 14,51 14,44 19,38',
 '30,5 42,4 56,5 64,9 70,13 80,25 88,49 94,81 92,97 83,97 77,79 73,62 72,93 27,93 25,66 21,82 19,98 10,98 7,85 9,65 13,46 19,25',
 '28,10 37,8 44,12 48,20 47,58 48,79 44,92 36,96 24,96 16,92 14,82 14,63 17,47 19,31 22,17 28,10',
 '19,15 35,16 50,18 69,15 80,18 83,31 92,56 97,71 95,87 82,94 53,97 29,97 9,91 3,83 7,59 14,38',
 '22,9 29,8 33,16 40,12 47,16 49,28 48,46 49,68 48,86 44,92 36,94 24,93 13,90 10,82 13,62 17,39 18,18'
 ],
 'mooda-y2k-vol2.png':[
 '12,9 20,6 31,7 43,13 52,12 66,6 78,6 88,12 88,24 81,33 77,47 77,65 83,79 89,84 85,90 69,94 54,98 43,94 28,94 15,90 11,84 18,76 22,63 22,45 16,31 12,20',
 '28,10 38,6 40,3 59,3 63,6 75,10 83,18 86,37 89,61 97,95 86,98 78,96 75,69 70,49 65,50 61,49 55,49 48,48 40,49 35,50 28,50 22,75 19,97 5,97 4,93 12,59 15,36 21,18',
 '10,23 24,13 36,7 42,7 50,10 59,7 67,7 79,13 92,23 85,36 77,36 74,58 80,89 75,94 54,96 30,94 21,90 26,61 24,39 18,38',
 '21,10 29,5 40,2 63,2 74,5 81,13 87,32 89,54 97,86 96,96 84,97 79,84 76,70 74,87 72,88 28,88 25,83 23,71 20,87 16,97 5,96 8,75 12,55 16,31',
 '33,4 65,4 69,16 77,52 80,83 77,95 62,97 52,95 50,84 50,38 47,39 44,71 43,94 30,97 20,95 20,86 24,55 28,23',
 '23,21 82,21 85,42 92,61 99,76 92,81 77,85 51,87 27,84 10,80 3,75 13,51 19,34',
 '24,6 46,6 69,5 79,9 82,24 88,57 93,67 93,91 84,97 63,97 51,95 49,47 46,47 44,96 28,97 10,95 7,91 11,62 17,30',
 '35,6 43,5 51,6 58,6 65,9 68,14 60,16 64,29 70,40 73,44 79,57 82,81 84,96 70,98 34,98 24,97 29,77 30,58 34,40 40,28 43,14 34,14',
 '7,10 94,10 96,98 4,98',
 '27,9 38,8 44,12 48,20 46,32 43,51 49,66 51,83 48,91 39,97 22,97 5,91 4,79 10,64 13,54 13,33 18,17',
 '8,64 20,47 28,29 36,13 44,4 51,1 60,4 70,14 77,30 85,49 90,63 95,86 90,95 75,98 28,98 9,94 4,88',
 '4,45 13,40 23,35 31,35 40,40 48,47 56,43 65,38 78,35 90,40 98,49 97,61 89,69 76,73 66,69 58,58 51,55 46,58 39,68 29,72 17,68 9,61'
 ]
};

const extraHoles={
'mooda-flower-drop-clean.png':{
2:['37,31 38,18 40,12 44,10 49,12 52,18 54,30'],
3:['24,44 28,30 36,18 44,12 52,13 61,19 69,31 76,44 71,49 58,51 44,51 31,48'],
4:['25,35 31,25 41,19 51,18 61,21 69,27 72,39 68,50 60,56 47,59 35,54 27,47']
},
'mooda-y2k-vol2.png':{
7:['47,18 54,18 60,33 63,43 56,49 45,49 38,45 43,31'],
10:['23,55 34,34 42,19 49,10 55,10 63,19 70,34 77,53 66,57 42,59 30,57']
}};
