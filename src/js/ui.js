const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profile = document.querySelector('.profile-results');

export const elements = {
  inputSearch,
  btnSearch,
  profile,
};

export const setLoadingState = (isLoading) => {
  btnSearch.disabled = isLoading;
  inputSearch.disabled = isLoading;

  if (isLoading) {
    profile.innerHTML = '<p class="loading-message">Carregando...</p>';
    profile.classList.remove('hide');
  }
};

export const renderProfile = (data) => {
  profile.innerHTML = `
    <div class="profile-card">
      <img src="${data.avatar_url}" alt="Avatar de ${data.name || data.login}" class="profile-avatar">
      <div class="profile-info">
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || 'Não possui bio cadastrada 😢.'}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
         <h4>👥 Seguidores</h4>
         <span>${data.followers}</span>
      </div>
      <div class="folowing">
         <h4>👥 Seguindo</h4>
         <span>${data.following}</span>
      </div>
    </div>`;
};

export const showMessage = (message, className = 'error-message') => {
  profile.innerHTML = `<p class="${className}">${message}</p>`;
  profile.classList.remove('hide');
};
