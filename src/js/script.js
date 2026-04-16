import { fetchGitHubUser } from './api.js';
import { elements, renderProfile, setLoadingState, showMessage } from './ui.js';

const handleSearch = async () => {
  const userName = elements.inputSearch.value.trim();

  if (!userName) {
    showMessage('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  setLoadingState(true);

  try {
    const data = await fetchGitHubUser(userName);
    renderProfile(data);
  } catch (error) {
    showMessage('Usuário não encontrado!');
  } finally {
    setLoadingState(false);
  }
};

elements.btnSearch.addEventListener('click', handleSearch);
