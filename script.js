const teams = ["U8", "U9", "U10 Red", "U10 Black", "U12/13 Girls"];
const days = [{label:"Saturday 24 October",short:"Sat 24 Oct"},{label:"Sunday 25 October",short:"Sun 25 Oct"},{label:"Monday 26 October",short:"Mon 26 Oct"}];
const fixtures = [
  {day:0,time:'9:00 AM',team:'U10 Black',opponent:'Christchurch United',pitch:'Pitch 7'},
  {day:0,time:'10:00 AM',team:'U8',opponent:'Cambridge FC Reds',pitch:'Pitch 4'},
  {day:0,time:'10:00 AM',team:'U12/13 Girls',opponent:'Havelock North Wanderers AFC',pitch:'Pitch 17'},
  {day:0,time:'11:00 AM',team:'U10 Black',opponent:'Franklin United',pitch:'Pitch 8'},
  {day:0,time:'12:00 PM',team:'U8',opponent:'90+',pitch:'Pitch 4'},
  {day:0,time:'1:00 PM',team:'U10 Black',opponent:'FFC Blue',pitch:'Pitch 7'},
  {day:0,time:'1:00 PM',team:'U10 Red',opponent:'Cambridge FC Black',pitch:'Pitch 13'},
  {day:0,time:'1:00 PM',team:'U12/13 Girls',opponent:'Hamilton Wanderers',pitch:'Pitch 11'},
  {day:0,time:'2:00 PM',team:'U9',opponent:'90+ White',pitch:'Pitch 13'},
  {day:0,time:'3:00 PM',team:'U10 Red',opponent:'90+ Gold',pitch:'Pitch 12'},
  {day:0,time:'4:00 PM',team:'U9',opponent:'All Stars FA',pitch:'Pitch 12'},
  {day:0,time:'5:00 PM',team:'U10 Red',opponent:'The Pro Project White',pitch:'Pitch 12'},
  {day:1,time:'8:00 AM',team:'U10 Red',opponent:'New Plymouth Rangers AFC',pitch:'Pitch 8'},
  {day:1,time:'9:00 AM',team:'U12/13 Girls',opponent:'Cambridge FC',pitch:'Pitch 16'},
  {day:1,time:'9:00 AM',team:'U8',opponent:'Tamahere School',pitch:'Pitch 4'},
  {day:1,time:'10:00 AM',team:'U9',opponent:'Patagonia FC',pitch:'Pitch 13'},
  {day:1,time:'11:00 AM',team:'U12/13 Girls',opponent:'UFA TE PUKE',pitch:'Pitch 15'},
  {day:1,time:'2:00 PM',team:'U12/13 Girls',opponent:'Two Touch Football',pitch:'Pitch 17'}
];
function miniFixtures(team){return days.map((day,dayIndex)=>{const matches=fixtures.filter(f=>f.day===dayIndex&&f.team===team);const rows=matches.length?matches.map(f=>`<div class="mini-game"><strong>${f.time}</strong><span>vs ${f.opponent} · ${f.pitch}</span></div>`).join(''):`<div class="mini-game"><strong>TBC</strong><span>${dayIndex===2?'Knockout fixtures depend on group-stage standings':'No confirmed group-stage fixture'}</span></div>`;return `<div class="mini-day"><div class="mini-day-title">${day.label}</div>${rows}</div>`;}).join('');}
document.querySelectorAll('.team-card').forEach((card,index)=>{const el=card.querySelector('.mini-days');if(el)el.innerHTML=miniFixtures(teams[index]);});
function renderSchedule(dayIndex=0){const matches=fixtures.filter(f=>f.day===dayIndex);if(!matches.length){document.querySelector('#full-schedule').innerHTML=`<div class="schedule-notice"><strong>Monday knockout fixtures are TBC.</strong><br>All currently confirmed fixtures are group-stage fixtures. The knockout phase will be loaded after the group stage is completed and will depend on final group standings.</div>`;return;}const rows=matches.map(f=>`<tr><td>${f.time}</td><td><strong>${f.team}</strong></td><td>${f.team} vs ${f.opponent}</td><td>${f.opponent}</td><td><span class="tbc">${f.pitch}</span></td></tr>`);document.querySelector('#full-schedule').innerHTML=`<table class="schedule-table"><thead><tr><th>Kick-off</th><th>Warkworth Team</th><th>Fixture</th><th>Opponent</th><th>Pitch</th></tr></thead><tbody>${rows.join('')}</tbody></table><p class="schedule-notice">These are confirmed group-stage fixtures. Knockout fixtures will be confirmed after the group stage and will depend on final standings.</p>`;}
renderSchedule();
document.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderSchedule(Number(btn.dataset.day));}));
const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('#nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
