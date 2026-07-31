// Representative clips from the four-task evaluation. Source filenames are
// never exposed by the website.
const tasks = [
  { title:'Clothes folding', stages:'Remove distracting clothes · unfold target garment · final fold', success:'assets/videos/clothes-folding-success-01.mp4' },
  { title:'Clothes folding', stages:'Remove distracting clothes · unfold target garment · final fold', success:'assets/videos/clothes-folding-success-02.mp4' },
  { title:'Fruit sorting', stages:'Identify target fruits · place red apple · place pear', success:'assets/videos/fruit-sorting-success-01.mp4' },
  { title:'Drawer & cube', stages:'Open drawer · grasp cube · place cube · close drawer', success:'assets/videos/cube-catching-success-01.mp4' },
  { title:'Drawer & cube', stages:'Open drawer · grasp cube · place cube · close drawer', success:'assets/videos/cube-catching-success-02.mp4' },
  { title:'Retail retrieval', stages:'Identify requested drink · reach in clutter · retrieve item', success:'assets/videos/unmanned-retail-success-01.mp4' },
];

const failures = [
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-01.mp4', detail:'Failure: the initial clutter-removal attempt does not complete.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-02.mp4', detail:'Failure: the garment is not reached securely.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-03.mp4', detail:'Failure: grasp instability during the folding sequence.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-04.mp4', detail:'Failure: sleeve alignment prevents completion of the final fold.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-05.mp4', detail:'Failure: clutter remains after the first subgoal.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-06.mp4', detail:'Failure: the target garment is not acquired for folding.' },
  { title:'Drawer & cube', file:'assets/videos/cube-catching-failure-01.mp4', detail:'Failure: pre-grasp/contact misalignment during cube acquisition.' },
  { title:'Drawer & cube', file:'assets/videos/cube-catching-failure-02.mp4', detail:'Failure: unsuccessful target-cube grasp.' },
  { title:'Drawer & cube', file:'assets/videos/cube-catching-failure-03.mp4', detail:'Failure: drawer-opening collision or subgoal-transition error.' },
];

function frame(file, label) {
  return `<div class="video-frame">${file ? `<video controls muted playsinline preload="metadata"><source src="${file}" type="video/mp4" />Your browser does not support HTML5 video.</video>` : `<div class="placeholder">${label}</div>`}</div>`;
}
function videoCard(item, type) {
  const isFailure = type === 'failure';
  const file = isFailure ? item.file : item.success;
  const detail = isFailure ? item.detail : item.stages;
  return `<article class="video-card">${frame(file, isFailure ? 'FAILURE CLIP — ADD MP4' : 'FULL ROLLOUT — ADD MP4')}<div class="card-body"><div><p class="card-title">${item.title}</p><p class="card-detail">${detail}</p></div><span class="tag">${isFailure ? 'failure' : 'uncut'}</span></div></article>`;
}
document.querySelector('#success-grid').innerHTML = tasks.map(t => videoCard(t, 'success')).join('');
document.querySelector('#failure-grid').innerHTML = failures.map(t => videoCard(t, 'failure')).join('');
document.querySelector('#date').textContent = new Date().toISOString().slice(0, 10);
