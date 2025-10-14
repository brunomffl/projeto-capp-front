import { useState, type FormEvent } from "react"
import { PiStudentBold } from "react-icons/pi"
import { auth } from '../../firebase/firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { FirebaseError } from '@firebase/util';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<'professor' | 'admin'>('professor')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log("Usuario logado com sucesso:", user);
      
    } catch (error) {
      console.error("Erro ao logar:", error);
      
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/invalid-email':
            setError('Email inválido');
            break;
          case 'auth/user-disabled':
            setError('Usuário desabilitado');
            break;
          case 'auth/user-not-found':
            setError('Usuário não encontrado');
            break;
          case 'auth/wrong-password':
            setError('Senha incorreta');
            break;
          case 'auth/invalid-credential':
            setError('Email ou senha incorretos');
            break;
          case 'auth/too-many-requests':
            setError('Muitas tentativas. Tente novamente mais tarde');
            break;
          default:
            setError(error.message);
        }
      } else {
        setError("Erro desconhecido ao fazer login.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-indigo-100">
      <div className="flex flex-col items-center mb-6">
        <div className="w-18 h-18 flex items-center justify-center bg-indigo-600 text-white rounded-full mb-4">
          <PiStudentBold size={35}/>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Sistema CAPP</h1>
        <p className="text-md text-gray-500">Gestão de Oficinas Educacionais</p>
      </div>
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">Entrar</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Acesse sua conta para gerenciar as oficinas
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Usuário
            </label>
            <select 
              value={userType}
              onChange={(e) => setUserType(e.target.value as 'professor' | 'admin')}
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-no-repeat bg-right pr-10 disabled:opacity-50 disabled:cursor-not-allowed" 
              style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")', backgroundPosition: 'right 12px center'}}
            >
              <option value="professor">Professor</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Entrando...
              </>
            ) : (
              'Entrar'
            )}
          </button>
        </form>
      </div>
      
      <div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Sistema de Gestão de Oficinas Educacionais
        </p>
      </div>
    </div>
  )
}

export default Login