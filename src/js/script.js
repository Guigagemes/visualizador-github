const inputSearch = document.getElementById("input-search")
const btnSearch = document.getElementById("btn-search")
const profile = document.querySelector(".profile-results")

const BASE_URL = 'https://api.github.com';

const setLoadingState = (isLoading) => {
  btnSearch.disabled = isLoading;
  inputSearch.disabled = isLoading;

  if (isLoading) {
    profile.innerHTML = '<p class="loading-message">Carregando...</p>';
    profile.classList.remove('hide');
  }
};

const renderProfile = (data) => {
  profile.innerHTML = `
    <div class="profile-card">
      <img src="${data.avatar_url}" alt="Avatar de ${data.name || data.login}" class="profile-avatar">
      <div class="profile-info">
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || 'Não possui bio cadastrada 😢.'}</p>
      </div>
    </div>`;
};

const showMessage = (message, className = 'error-message') => {
  profile.innerHTML = `<p class="${className}">${message}</p>`;
  profile.classList.remove('hide');
};

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value.trim();

  if (!userName) {
    showMessage('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  setLoadingState(true);

  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);

    if (!response.ok) {
      throw new Error('Usuário não encontrado');
    }

    const data = await response.json();
    renderProfile(data);
  } catch (error) {
    showMessage('Usuário não encontrado!');
  } finally {
    setLoadingState(false);
  }
});