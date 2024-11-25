// Sample data for influencers and brands
const influencersData = [
    { name: 'GamerGirl', domain: 'gaming' },
    { name: 'TechMaster', domain: 'tech' },
    { name: 'FitFreak', domain: 'fitness' },
    { name: 'Fashionista', domain: 'fashion' },
    { name: 'ProGamer', domain: 'gaming' },
    { name: 'YogaGuru', domain: 'fitness' },
    { name: 'Innovator', domain: 'tech' },
    { name: 'BeautyQueen', domain: 'fashion' },
    { name: 'FitnessJunkie', domain: 'fitness' },
    { name: 'InfluencerX', domain: 'fashion' },
  ];
  
  const brandsData = [
    { name: 'GamerPro', domain: 'gaming' },
    { name: 'StyleHub', domain: 'fashion' },
    { name: 'FitTech', domain: 'fitness' },
    { name: 'TechVision', domain: 'tech' },
    { name: 'PixelPlay', domain: 'gaming' },
    { name: 'HealthBoost', domain: 'fitness' },
    { name: 'TrendSetter', domain: 'fashion' },
    { name: 'FutureTech', domain: 'tech' },
    { name: 'FashionLab', domain: 'fashion' },
    { name: 'GameOn', domain: 'gaming' },
  ];
  
  // Function to render influencers
  function renderInfluencers(filteredInfluencers) {
    const influencersGrid = document.querySelector('#influencers');
    influencersGrid.innerHTML = '';
    filteredInfluencers.forEach(influencer => {
      const influencerCard = document.createElement('div');
      influencerCard.classList.add('card');
      influencerCard.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="${influencer.name}">
        <h3>${influencer.name}</h3>
        <p>${influencer.domain.charAt(0).toUpperCase() + influencer.domain.slice(1)}</p>
        <a href="#">Visit Profile</a>
      `;
      influencersGrid.appendChild(influencerCard);
    });
  }
  
  // Function to render brands
  function renderBrands(filteredBrands) {
    const brandsGrid = document.querySelector('#brands');
    brandsGrid.innerHTML = '';
    filteredBrands.forEach(brand => {
      const brandCard = document.createElement('div');
      brandCard.classList.add('card');
      brandCard.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="${brand.name}">
        <h3>${brand.name}</h3>
        <p>${brand.domain.charAt(0).toUpperCase() + brand.domain.slice(1)}</p>
        <a href="#">Visit Website</a>
      `;
      brandsGrid.appendChild(brandCard);
    });
  }
  
  // Event listeners for domain buttons
  document.querySelectorAll('.domain-btn').forEach(button => {
    button.addEventListener('click', () => {
      const selectedDomain = button.getAttribute('data-domain');
  
      // Filter influencers and brands by selected domain
      const filteredInfluencers = influencersData.filter(influencer => influencer.domain === selectedDomain);
      const filteredBrands = brandsData.filter(brand => brand.domain === selectedDomain);
  
      // Render the filtered influencers and brands
      renderInfluencers(filteredInfluencers);
      renderBrands(filteredBrands);
    });
  });
  