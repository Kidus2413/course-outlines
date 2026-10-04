'use strict';
let allCourses=[];
let activeTab='outline';
const escapeHTML=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list=items=>`<ul class="topics">${items.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul>`;
function current(){return allCourses.find(c=>c.slug===location.hash.slice(1))||allCourses.find(c=>c.title==='Python')||allCourses[0]}
function render(){
 const c=current();
 if(!c)return;
 document.title=c.title+' Course Outline | Kidus Tesfaye';
 document.querySelector('#courses').innerHTML=allCourses.map((x,i)=>`<a href="#${x.slug}" ${x===c?'aria-current="page"':''}><span class="num">${String(i+1).padStart(2,'0')}</span>${escapeHTML(x.title)}</a>`).join('');
 const tabs=[['outline','Course outline'],['schedule','16-week plan'],['overview','Course details']];
 document.querySelector('#course-content').innerHTML=`<p class="eyebrow">${escapeHTML(c.level)}</p><h2 class="course-title">${escapeHTML(c.title)}</h2><p class="intro">${escapeHTML(c.desc)}</p><div class="facts"><div class="fact"><strong>4 months</strong><span>Course duration</span></div><div class="fact"><strong>16 weeks</strong><span>Teaching schedule</span></div><div class="fact"><strong>96 hours</strong><span>Instructor-led learning</span></div></div><div class="tabs" role="tablist" aria-label="Course sections">${tabs.map(([key,label])=>`<button id="tab-${key}" type="button" role="tab" aria-controls="panel" aria-selected="${key===activeTab}" tabindex="${key===activeTab?'0':'-1'}" data-tab="${key}">${label}</button>`).join('')}</div><section id="panel" role="tabpanel" aria-labelledby="tab-${activeTab}"></section><a class="outline-download" href="outlines/${c.slug}.md" download>Download ${escapeHTML(c.title)} outline</a>`;
 showPanel(c);
 document.querySelectorAll('[data-tab]').forEach(b=>{
  b.addEventListener('click',()=>selectTab(b.dataset.tab));
  b.addEventListener('keydown',e=>{const keys=['ArrowLeft','ArrowRight','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();let n=tabs.findIndex(x=>x[0]===activeTab);n=e.key==='Home'?0:e.key==='End'?2:(n+(e.key==='ArrowRight'?1:2))%3;selectTab(tabs[n][0]);document.querySelector('#tab-'+activeTab).focus()});
 });
}
function selectTab(tab){activeTab=tab;document.querySelectorAll('[data-tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.tab===tab));b.tabIndex=b.dataset.tab===tab?0:-1});document.querySelector('#panel').setAttribute('aria-labelledby','tab-'+tab);showPanel(current())}
function showPanel(c){
 let content='';
 if(activeTab==='outline'){
  if(c.chapters)content=c.chapters.map(([title,topics],i)=>`<section class="chapter"><div class="chapter-heading"><span class="chapter-no">${c.title==='Python'?'CH '+String(i+1).padStart(2,'0'):String(i+1).padStart(2,'0')}</span><h3>${escapeHTML(title)}</h3></div>${list(topics)}</section>`).join('');
  else content=c.modules.map(([title,topics],i)=>`<section class="chapter"><div class="chapter-heading"><span class="chapter-no">${String(i+1).padStart(2,'0')}</span><h3>${escapeHTML(title)}</h3></div><p class="section-lead">${escapeHTML(topics)}</p></section>`).join('');
  if(c.title==='SQL')content+='<p class="section-lead">Main lab dialect: T-SQL. CTAS support varies by platform; SQL Server labs use SELECT INTO where appropriate. Performance improvements are measured, rather than assumed.</p>';
 }else if(activeTab==='schedule'){
  content='<p class="section-lead">Two three-hour sessions per week, plus four to six hours of independent practice. Open a week to see topics and practical work.</p>'+c.modules.map(([title,topics,lab],i)=>`<details class="week" ${i===0?'open':''}><summary><span class="label">Week ${String(i+1).padStart(2,'0')}</span><strong>${escapeHTML(title)}</strong></summary><p>${escapeHTML(topics)}</p><p class="lab"><strong>Practical work:</strong> ${escapeHTML(lab)}</p></details>`).join('');
 }else{
  content=`<div class="overview"><div class="two-col"><section><h3>Prerequisites</h3><p>${escapeHTML(c.pre)}</p></section><section><h3>Tools and environment</h3><p>${escapeHTML(c.tools)}</p></section></div><h3>Learning outcomes</h3>${list(c.out)}<h3>Capstone project</h3><p class="project-title">${escapeHTML(c.cap)}</p><p>${escapeHTML(c.deliver)}</p><h3>Assessment</h3><div class="assessment"><span>Weekly practical work</span><strong>25%</strong><span>Knowledge checks</span><strong>10%</strong><span>Midpoint practical</span><strong>20%</strong><span>Capstone artifact</span><strong>35%</strong><span>Presentation and defense</span><strong>10%</strong></div><p>Suggested course completion: 70% overall and 60% on the capstone, with essential validation requirements met.</p></div>`;
 }
 document.querySelector('#panel').innerHTML=content;
}
window.addEventListener('hashchange',()=>{activeTab='outline';render()});
fetch('courses.json').then(r=>{if(!r.ok)throw Error('Unable to load course outlines');return r.json()}).then(data=>{allCourses=data;render()}).catch(()=>{document.querySelector('#course-content').innerHTML='<div class="error"><h2>Course outlines could not load</h2><p>Reload this page or download the Word handbook above.</p></div>'});
