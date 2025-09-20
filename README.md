# 🎓 Future Skills - Frontend
> Sistema de Gestão de Oficinas Educacionais - Interface Web

## 📋 Sobre o Projeto

O Future Skills é uma plataforma educacional voltada para oficinas de robótica, matemática, física, artes e tecnologia, com foco em aprendizagem prática para crianças e adolescentes.

### 🔗 Links Importantes
- [🎨 Mockups](https://preview-image-analysis-kzmqjdmogju1m08iefsa.vusercontent.net/)
- [📋 Jira](https://unochapeco-team-fv4k68oc.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog)
- [⚙️ Backend](link-do-repositorio-backend)

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Firebase** - Autenticação
- **Vite** - Build tool e dev server

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd projeto-capp-front
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   VITE_API_URL=http://localhost:3000
   VITE_FIREBASE_API_KEY=sua_api_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
   VITE_FIREBASE_PROJECT_ID=seu_project_id
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

O projeto estará disponível em `http://localhost:5173`

## 👥 Perfis de Usuário

- **👨‍🏫 Professor** - Gerencia suas oficinas e alunos
- **👩‍💼 Administrador** - Controle completo do sistema

## 📦 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 🔧 Configurações de Desenvolvimento

### Tailwind CSS
O projeto utiliza Tailwind CSS para estilização. As configurações estão em `tailwind.config.js`.

### TypeScript
Configurações de TypeScript em `tsconfig.json` e `tsconfig.node.json`.

### ESLint
Regras de linting configuradas para React e TypeScript.
