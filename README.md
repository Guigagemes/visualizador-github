# 🐙 Visualizador GitHub

Um aplicativo web interativo para buscar e visualizar perfis de usuários do GitHub com seus repositórios principais.

## ✨ Funcionalidades

- 🔍 **Busca de Usuários** - Digite o nome de usuário do GitHub e visualize informações do perfil
- 👥 **Dados do Perfil** - Exibe avatar, nome e biografia do usuário
- 📊 **Contadores** - Mostra quantidade de seguidores e usuários que o perfil segue
- 📦 **Repositórios** - Lista dos últimos 10 repositórios criados com:
  - ⭐ Estrelas (stars)
  - 🍴 Forks
  - 👀 Watchers
  - 💻 Linguagem de programação

- ⌨️ **Busca por Enter** - Pressione Enter para buscar ou clique no botão
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile

## 🚀 Como Usar

1. Acesse a aplicação no navegador
2. Digite o nome de um usuário do GitHub no campo de busca
3. Pressione **Enter** ou clique em **Buscar**
4. Visualize os dados do perfil e repositórios

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos com variáveis CSS e design responsivo
- **JavaScript (ES6+)** - Lógica e manipulação do DOM
- **GitHub API** - Dados públicos de usuários e repositórios
- **Devicon** - Ícones de tecnologias

## 📁 Estrutura do Projeto

```
visualizador-github/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── styles.css          # Estilos principais
    │   ├── reset.css           # Reset de estilos padrão
    │   ├── responsive.css      # Media queries responsivas
    │   └── animations.css      # Animações
    └── js/
        ├── script.js           # Lógica principal
        ├── api.js              # Requisições para GitHub API
        └── ui.js               # Renderização de componentes
```

## 💻 Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/Guigagemes/visualizador-github.git
```

2. Entre no diretório:
```bash
cd visualizador-github
```

3. Abra `index.html` no navegador (ou use Live Server)

## 📡 API Utilizada

Utiliza a [GitHub REST API v3](https://docs.github.com/pt/rest) para buscar:
- Dados do usuário: `/users/{username}`
- Repositórios: `/users/{username}/repos?per_page=10&sort=created`

## 🎨 Design

- Fundo com gradiente animado
- Cards com efeito hover
- Paleta de cores moderna (roxo, rosa, laranja)
- Typography clara e hierárquica
- Grid responsivo para repositórios (3 colunas desktop, 2 tablet, 1 mobile)

## 📝 Licença

Este projeto está aberto para uso e modificação.

## 👨‍💻 Autor

**Guigagemes**