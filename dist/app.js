'use strict';
let allCourses=[];
let activeTab='outline';
let topicNotes={};
const topicList=items=>`<div class="topic-list">${items.map(t=>`<details class="topic-item"><summary>${escapeHTML(t)}<span aria-hidden="true">+</span></summary><p>${escapeHTML(topicNotes[t])}</p></details>`).join('')}</div>`;
const escapeHTML=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const list=items=>`<ul class="topics">${items.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul>`;
function current(){return allCourses.find(c=>c.slug===location.hash.slice(1))||allCourses.find(c=>c.title==='Python')||allCourses[0]}
function render(){
 if(!location.hash || location.hash==='#home' || location.hash==='#catalog'){renderHome();if(location.hash==='#catalog')document.querySelector('#catalog').scrollIntoView();return;}
 const c=current();
 if(!c)return;
 document.title=c.title+' Course Outline | Kidus Tesfaye';
 const tabs=[['outline','Course outline'],['schedule','16-week plan'],['overview','Course details']];
 document.querySelector('#course-content').innerHTML=`<div class="course-wrap"><a class="back" href="#home">← All courses</a><div class="course-banner"><img src="images/${c.slug}.svg" alt="${escapeHTML(c.title)} illustration"><div><p class="eyebrow">${escapeHTML(c.level)}</p><h2 class="course-title">${escapeHTML(c.title)}</h2><p class="intro">${escapeHTML(c.desc)}</p></div></div><div class="facts"><div class="fact"><strong>4 months</strong><span>Course duration</span></div><div class="fact"><strong>16 weeks</strong><span>Teaching schedule</span></div><div class="fact"><strong>96 hours</strong><span>Instructor-led learning</span></div></div><div class="tabs" role="tablist" aria-label="Course sections">${tabs.map(([key,label])=>`<button id="tab-${key}" type="button" role="tab" aria-controls="panel" aria-selected="${key===activeTab}" tabindex="${key===activeTab?'0':'-1'}" data-tab="${key}">${label}</button>`).join('')}</div><section id="panel" role="tabpanel" aria-labelledby="tab-${activeTab}"></section><a class="outline-download" href="outlines/${c.slug}.md" download>Download ${escapeHTML(c.title)} outline ↗</a></div>`;
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
  content='<div class="section-intro"><h3>Your learning path</h3><p>Open a chapter or module to explore its topics. In Python and SQL, click a topic for a short explanation.</p></div>';

  if(c.chapters)content+=c.chapters.map(([title,topics],i)=>`<details class="chapter"><summary class="chapter-heading"><span class="chapter-no">${c.title==='Python'?'CH '+String(i+1).padStart(2,'0'):String(i+1).padStart(2,'0')}</span><h3>${escapeHTML(title)}</h3></summary>${topicList(topics)}</details>`).join('');
  else content+=c.modules.map(([title,topics],i)=>`<details class="chapter"><summary class="chapter-heading"><span class="chapter-no">${String(i+1).padStart(2,'0')}</span><h3>${escapeHTML(title)}</h3></summary><div class="module-description"><p>${escapeHTML(topics)}</p><p class="lab"><strong>Practical focus:</strong> ${escapeHTML(c.modules[i][2])}</p></div></details>`).join('');
  if(c.title==='SQL')content+='<p class="section-lead">Main lab dialect: T-SQL. CTAS support varies by platform; SQL Server labs use SELECT INTO where appropriate. Performance improvements are measured, rather than assumed.</p>';
 }else if(activeTab==='schedule'){
  content='<p class="section-lead">Two three-hour sessions per week, plus four to six hours of independent practice. Open a week to see topics and practical work.</p>'+c.modules.map(([title,topics,lab],i)=>`<details class="week" ${i===0?'open':''}><summary><span class="label">Week ${String(i+1).padStart(2,'0')}</span><strong>${escapeHTML(title)}</strong></summary><p>${escapeHTML(topics)}</p><p class="lab"><strong>Practical work:</strong> ${escapeHTML(lab)}</p></details>`).join('');
 }else{
  content=`<div class="overview"><div class="two-col"><section><h3>Prerequisites</h3><p>${escapeHTML(c.pre)}</p></section><section><h3>Tools and environment</h3><p>${escapeHTML(c.tools)}</p></section></div><h3>Learning outcomes</h3>${list(c.out)}<h3>Capstone project</h3><p class="project-title">${escapeHTML(c.cap)}</p><p>${escapeHTML(c.deliver)}</p><h3>Assessment</h3><div class="assessment"><span>Weekly practical work</span><strong>25%</strong><span>Knowledge checks</span><strong>10%</strong><span>Midpoint practical</span><strong>20%</strong><span>Capstone artifact</span><strong>35%</strong><span>Presentation and defense</span><strong>10%</strong></div><p>Suggested course completion: 70% overall and 60% on the capstone, with essential validation requirements met.</p></div>`;
 }
 document.querySelector('#panel').innerHTML=content;
}
window.addEventListener('hashchange',()=>{activeTab='outline';render()});
Promise.all(['courses.json','topic-notes.json'].map(url=>fetch(url).then(r=>{if(!r.ok)throw Error('Unable to load course outlines');return r.json()}))).then(([data,notes])=>{allCourses=data;topicNotes=notes;render()}).catch(()=>{document.querySelector('#course-content').innerHTML='<div class="error"><h2>Course outlines could not load</h2><p>Reload this page or download the Word handbook above.</p></div>'});

const categories=['Data & analytics','Programming','Data & analytics','Cloud & engineering','Cloud & engineering','Cloud & engineering','AI & machine learning','Certification'];
function renderHome(){
 document.title='Explore Technology Courses | Kidus Tesfaye';
 document.querySelector('#course-content').innerHTML=`<section class="hero"><div><p class="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h1>Learn the skills.<br><span>Build the future.</span></h1><p class="hero-copy">Explore practical technology courses designed to turn curiosity into capability. Choose your path, explore the curriculum, and start building.</p><a class="primary" href="#catalog">Explore courses ↓</a><div class="hero-stats"><span><strong>8</strong> learning paths</span><span><strong>16</strong> weeks per course</span><span><strong>96</strong> learning hours</span></div></div><div class="terminal"><div class="terminal-top"><i></i><i></i><i></i><span>your_future.py</span></div><pre><span class="purple">from</span> curiosity <span class="purple">import</span> possibility

<span class="cyan">skills</span> = [
    <span class="green">"Python", "SQL", "Cloud",</span>
    <span class="green">"Analytics", "Machine Learning"</span>
]

<span class="purple">for</span> skill <span class="purple">in</span> skills:
    learn(skill)
    build_project(skill)

<span class="muted"># Your next chapter is loading...</span></pre><div class="terminal-foot">● Practical learning. Real projects.</div></div></section><section id="catalog" class="catalog"><div class="catalog-head"><div><p class="eyebrow">FIND YOUR PATH</p><h2>Explore our courses</h2></div><label class="search"><span>Search courses</span><input type="search" id="search" placeholder="Python, SQL, cloud…"></label></div><div class="filters" aria-label="Filter courses">${['All courses',...new Set(categories)].map((x,i)=>`<button class="filter" aria-pressed="${i===0}" data-category="${x}">${x}</button>`).join('')}</div><div id="cards" class="cards"></div></section>`;
 let category='All courses';
 function cards(){const q=document.querySelector('#search').value.toLowerCase();const selected=allCourses.filter((c,i)=>(category==='All courses'||categories[i]===category)&&(c.title+' '+c.desc+' '+categories[i]).toLowerCase().includes(q));document.querySelector('#cards').innerHTML=selected.length?selected.map(c=>`<a class="course-card" href="#${c.slug}"><div class="card-image"><img src="images/${c.slug}.svg" alt="${escapeHTML(c.title)} illustration"><span class="card-tag">${escapeHTML(categories[allCourses.indexOf(c)])}</span></div><div class="card-body"><p class="card-level">${escapeHTML(c.level)}</p><h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(c.desc)}</p><div class="card-meta"><span>◷ 4 months</span><span>16 weeks</span></div><div class="card-link">Explore course <span>↗</span></div></div></a>`).join(''):'<p class="empty">No courses match. Try another search or choose All courses.</p>';}
 document.querySelector('#search').addEventListener('input',cards);document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;document.querySelectorAll('[data-category]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));cards()}));cards();
}
