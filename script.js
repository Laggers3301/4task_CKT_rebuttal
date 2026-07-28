// Add .mp4 files under assets/videos/, then replace the empty strings below.
// Keeping a field empty displays a clean placeholder until that clip is ready.
const tasks = [
  { title:'Clothes folding', stages:'Remove distracting clothes · unfold target garment · final fold', success:'assets/videos/clothes-folding-rollout.mp4' },
  { title:'Fruit sorting', stages:'Identify target fruits · place red apple · place pear', success:'assets/videos/fruit-sorting-rollout.mp4' },
  { title:'Drawer & cube', stages:'Open drawer · place purple cube · close drawer', success:'assets/videos/cube-catching-rollout.mp4' },
  { title:'Retail retrieval', stages:'Identify requested drink · reach in clutter · retrieve item', success:'assets/videos/unmanned-retail-rollout.mp4' },
];

const failures = [
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-clutter.mp4', detail:'Failure: clutter is not cleared before the folding sequence.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-grasp.mp4', detail:'Failure: the target garment is not securely grasped.' },
  { title:'Clothes folding', file:'assets/videos/clothes-folding-failure-sleeve.mp4', detail:'Failure: the target sleeve is not reached.' },
  { title:'Drawer & cube', file:'assets/videos/cube-catching-failure-grasp.mp4', detail:'Failure: unsuccessful target-cube grasp.' },
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
