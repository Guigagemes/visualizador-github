const BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (userName) => {
  const response = await fetch(`${BASE_URL}/users/${userName}`);

  if (!response.ok) {
    throw new Error('Usuário não encontrado');
  }

  return await response.json();
};
