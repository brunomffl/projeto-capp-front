import { useAuth } from "./core/auth/AuthContext";
import Login from "./components/Login";
import Administrativo from "./pages/Administrativo";
import ProfessorDashboard from "./pages/Professores";

function App() {
  const { currentUser, userRole, loading } = useAuth();

  // Mostra loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando Sistema...</p>
        </div>
      </div>
    );
  }

  // Se não está logado, mostra tela de login
  if (!currentUser) {
    return <Login />;
  }

  // Se está logado mas não tem role, mostra erro
  if (!userRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">Erro de Autorização</h2>
          <p className="text-gray-600 mb-4">
            Não foi possível determinar suas permissões no sistema.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  switch (userRole) {
    case 'administrador':
      return <Administrativo />;
    case 'professor':
      return <ProfessorDashboard />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-red-600 mb-4">Tipo de usuário desconhecido</h2>
            <p className="text-gray-600">Entre em contato com o administrador.</p>
          </div>
        </div>
      );
  }
}

export default App;