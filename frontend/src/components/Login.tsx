import { PiStudentBold } from "react-icons/pi"

function Login() {
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

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Usuário
            </label>
            <select 
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-no-repeat bg-right pr-10" 
              style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")', backgroundPosition: 'right 12px center'}}
            >
              <option value="Professor">Professor</option>
              <option value="Administrador">Administrador</option>
              <option value="Aluno">Aluno</option>
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
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Entrar
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