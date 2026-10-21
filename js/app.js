'use strict';
const CATEGORIES={brand:['品牌識別與字體','選出喜歡的 Logo 與字體。'],web:['官網視覺與影像風格','選出喜歡的網站與影像氛圍。'],selected:['已選圖片','確認選圖後，分享給設計師。']};
const SUBCATEGORIES={brand:[['1','文字主角','以品牌名稱與字形為主角。'],['2','圖形主角','以獨立圖形為主角，文字為輔。'],['3','字圖融合','讓文字與圖像融為一體。']],web:[['magazine','日系雜誌風','圖文交錯、自然色調，像生活雜誌。'],['country','法式鄉村風','暖色、復古家具與自然光，溫暖悠閒。'],['minimal','無印簡約風','米白木質、整齊留白，樸實安靜。'],['craft','版畫與手作風','手繪線條與紙感紋理，樸實有溫度。']]};
const $=s=>document.querySelector(s),KEY='yuwu-moodboard-v1';let selected=new Set(),filter='brand',subfilter='all',current=null,opener=null,timer;
const valid=v=>Array.isArray(v)?v.map(Number).filter(n=>Number.isInteger(n)&&ITEMS.some(x=>x.id===n)):[];
try{selected=new Set(valid(JSON.parse(localStorage.getItem(KEY)||'[]')))}catch{}
const params=new URLSearchParams(location.search);if(params.has('selected')){selected=new Set(valid(params.get('selected').split(',')));save()}
function save(){try{localStorage.setItem(KEY,JSON.stringify([...selected]))}catch{toast('瀏覽器無法儲存；請在離開前複製清單。')}}
function toast(text){$('#status').textContent=text;clearTimeout(timer);timer=setTimeout(()=>$('#status').textContent='',4200)}
function visible(){return ITEMS.filter(x=>filter==='selected'?selected.has(x.id)&&(subfilter==='all'||x.category===subfilter):x.category===filter&&(subfilter==='all'||x.subcategory===subfilter))}
function toggle(id,on){on?selected.add(id):selected.delete(id);save();render();if(current!==null)$('#detailLike').checked=selected.has(current)}
function render(){
 $('#filters').replaceChildren(...Object.entries(CATEGORIES).map(([key,c])=>{const b=document.createElement('button');b.textContent=c[0]+' '+ITEMS.filter(x=>key==='selected'?selected.has(x.id):x.category===key).length;b.setAttribute('aria-pressed',filter===key);b.onclick=()=>{filter=key;subfilter='all';render()};return b}));
 const subs=filter==='selected'?[['brand','品牌識別與字體','已勾選的品牌 Logo 與字體方向。'],['web','官網視覺與影像風格','已勾選的官網視覺與影像方向。']]:SUBCATEGORIES[filter]||[];$('#subfilters').hidden=!subs.length;$('#subfilters').replaceChildren(...[['all','全部',CATEGORIES[filter][1]],...subs].filter(()=>subs.length).map(([key,name])=>{const b=document.createElement('button');b.textContent=filter==='selected'?name+' '+ITEMS.filter(x=>selected.has(x.id)&&(key==='all'||x.category===key)).length:name;b.setAttribute('aria-pressed',subfilter===key);b.onclick=()=>{subfilter=key;render()};return b}));
 const chosen=subs.find(x=>x[0]===subfilter);$('#sectionNo').textContent=filter==='brand'?'BRAND IDENTITY':filter==='web'?'WEB & VISUAL MOOD':'YOUR SELECTION';$('#sectionTitle').textContent=chosen?chosen[1]:CATEGORIES[filter][0];$('#sectionDesc').textContent=chosen?chosen[2]:CATEGORIES[filter][1];$('#count').textContent=selected.size;
 const list=visible();$('#shown').textContent=list.length+' 張圖片';$('#empty').hidden=list.length>0;$('#empty').textContent=filter==='selected'?'勾選圖片右上角，加入喜歡的圖片。':'此分類目前沒有圖片。';
 $('#grid').replaceChildren(...list.map(x=>{const a=document.createElement('article');a.className='card';const b=document.createElement('button');b.className='imageButton';b.setAttribute('aria-label',`查看 #${String(x.id).padStart(2,'0')} ${x.title}`);const img=document.createElement('img');img.src=x.image;img.width=x.width;img.height=x.height;img.alt=x.title;img.loading='lazy';img.decoding='async';b.append(img);b.onclick=()=>openDetail(x.id,b);const l=document.createElement('label');l.className='like';const check=document.createElement('input');check.type='checkbox';check.checked=selected.has(x.id);check.setAttribute('aria-label',`喜歡 #${String(x.id).padStart(2,'0')} ${x.title}`);check.onchange=()=>{const active=check.checked;toggle(x.id,active);const replacement=[...$('#grid').querySelectorAll('input')].find(el=>el.getAttribute('aria-label')===check.getAttribute('aria-label'));replacement?.focus({preventScroll:true})};l.append(check);a.append(b,l);return a}));
}
function openDetail(id,button){current=id;if(button)opener=button;const x=ITEMS.find(x=>x.id===id);$('#detailImage').src=x.image;$('#detailImage').alt=x.title;$('#detailNo').textContent=`REFERENCE / ${String(id).padStart(2,'0')}`;$('#detailTitle').textContent=x.title;$('#detailCategory').textContent=CATEGORIES[x.category][0]+' ／ '+SUBCATEGORIES[x.category].find(s=>s[0]===x.subcategory)[1];$('#detailDescription').textContent=x.description;$('#detailTags').hidden=x.category==='web';$('#detailTags').replaceChildren(...x.tags.map(t=>{const tag=document.createElement('span');tag.textContent=t;return tag}));$('#detailLike').checked=selected.has(id);if(!$('#detail').open)$('#detail').showModal()}
function step(delta){let list=visible();if(!list.some(x=>x.id===current))list=ITEMS;const i=list.findIndex(x=>x.id===current);if(list.length)openDetail(list[(i+delta+list.length)%list.length].id)}
$('#detailLike').onchange=e=>toggle(current,e.target.checked);$('#prev').onclick=()=>step(-1);$('#next').onclick=()=>step(1);$('.close').onclick=()=>$('#detail').close();$('#detail').addEventListener('close',()=>{if(opener?.isConnected)opener.focus();else $('#viewSelected').focus()});
for(const d of document.querySelectorAll('dialog'))d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}});
$('#detail').addEventListener('keydown',e=>{if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
$('#viewSelected').onclick=()=>{filter='selected';subfilter='all';render();window.scrollTo({top:0,behavior:'smooth'})};$('#clear').onclick=()=>{selected.clear();save();render();if(current!==null)$('#detailLike').checked=false;toast('已清除選擇')};
function selectionText(){return '品牌設計參考圖｜案主喜好選擇\n\n'+ITEMS.filter(x=>selected.has(x.id)).map(x=>`- #${String(x.id).padStart(2,'0')} ${x.title}`).join('\n')+`\n\n共選擇 ${selected.size} 張。`}
async function copy(text,title){try{await navigator.clipboard.writeText(text);toast('已複製，請貼上回傳給設計師')}catch{$('#copyTitle').textContent=title;$('#copyDialog textarea').value=text;$('#copyDialog').showModal();$('#copyDialog textarea').select()}}
$('#closeCopy').onclick=()=>$('#copyDialog').close();
let sharePayload=null;
$('#share').onclick=()=>{
 const web=/^https?:$/.test(location.protocol);const url=new URL(location.href);url.searchParams.set('selected',[...selected].sort((a,b)=>a-b).join(','));url.hash='';
 sharePayload={title:'我的品牌設計方向',text:`共選擇 ${selected.size} 張圖片。`,url:url.href};
 $('#shareSummary').textContent=`已選擇 ${selected.size} 張圖片。`+(selected.size?'':'尚未勾選圖片，可先關閉視窗選圖。');
 $('#shareLink').value=web?`共選擇 ${selected.size} 張圖片。\n${url.href}`:`共選擇 ${selected.size} 張圖片。`; $('#shareFeedback').textContent=web?'請將連結傳給設計師，不會自動回傳。':'本機檔案請複製文字清單回傳。';
 $('#systemShare').hidden=!web||typeof navigator.share!=='function';$('#shareDialog').showModal();
};
$('#copyShareLink').onclick=async()=>{
 try{await navigator.clipboard.writeText($('#shareLink').value);$('#shareFeedback').textContent='已複製！貼給設計師即可。'}
 catch{$('#shareLink').focus();$('#shareLink').select();$('#shareFeedback').textContent='瀏覽器無法自動複製，已選取內容，請長按或按 ⌘C／Ctrl+C 複製。'}
};
$('#systemShare').onclick=async()=>{try{await navigator.share(sharePayload);$('#shareFeedback').textContent='已完成系統分享操作。'}catch(e){$('#shareFeedback').textContent=e.name==='AbortError'?'已取消系統分享，仍可使用「複製連結」。':'無法開啟系統分享，請改用「複製連結」。'}};
$('#closeShare').onclick=()=>$('#shareDialog').close();render();
