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

export const renderProfile = (data, userRepos) => {
  const repositoriesHTML = userRepos.length > 0 ? userRepos.map(repo => `
    <div class="repository-card">
      <a href="${repo.html_url}" target="_blank">
      <h3>${repo.name}</h3>
      <div class="repository-stats">
        <span>⭐ stars: ${repo.stargazers_count}</span>
        <span>🍴 forks: ${repo.forks_count}</span>
        <span>👀 watchers: ${repo.watchers_count}</span>
        <span>💻 language: ${repo.language || 'não informado'}</span>
      </div>
      </a>
    </div>
  `).join('') : `<p>Nenhum repositório encontrado.</p>`;

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
    </div>

    <div class="profile-repositories">
      <h2>Repositórios</h2>
     <div class="repositories">
        ${repositoriesHTML}
     </div>
    </div>
    `;

}

export const showMessage = (message, className = 'error-message') => {
  profile.innerHTML = `<p class="${className}">${message}</p>`;
  profile.classList.remove('hide');
};
