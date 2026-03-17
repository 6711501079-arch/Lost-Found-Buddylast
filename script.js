const samplePosts = [
  {
    id: 1,
    name: 'iPhone 15',
    category: 'electronics',
    location: 'สยาม',
    emoji: '📱'
  },
  {
    id: 2,
    name: 'กระเป๋า',
    category: 'bags',
    location: 'BTS',
    emoji: '👜'
  }
];

let activeCategory = 'all';

// render cards
function renderCards(filter = 'all') {
  const container = document.getElementById('cardsContainer');

  let filtered = samplePosts;

  if (filter !== 'all') {
    filtered = filtered.filter(p => p.category === filter);
  }

  container.innerHTML = filtered.map(p => `
    <div class="item-card">
      ${p.emoji} ${p.name} - ${p.location}
    </div>
  `).join('');
}

// filter chips
document.getElementById('chipsContainer').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;

  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');

  activeCategory = chip.dataset.category;
  renderCards(activeCategory);
});

// buttons
document.getElementById('btnLost').onclick = () => alert('แจ้งของหาย');
document.getElementById('btnFound').onclick = () => alert('แจ้งของที่พบ');

// init
renderCards();
