import Layout from "../components/Layout";
import { HiBookOpen, HiUsers } from "react-icons/hi";

const ProfessorDashboard = () => {
  // Dados mock - substitua com dados reais da API
  const minhaOficina = {
    nome: "Robótica Educacional",
    alunos: 15,
    status: "ativa"
  };

  const alunosInscritos = [
    { id: 1, nome: "João Silva", presente: true },
    { id: 2, nome: "Maria Santos", presente: true },
    { id: 3, nome: "Pedro Costa", presente: false },
    { id: 4, nome: "Ana Oliveira", presente: true },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Painel do Professor</h1>
          <p className="text-gray-600">Gerencie sua oficina e alunos</p>
        </div>

        {/* Minha Oficina */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <HiBookOpen className="w-5 h-5 text-indigo-600" />
              <div>
                <h2 className="text-lg font-medium text-gray-900">Minha Oficina</h2>
                <p className="text-sm text-gray-500">{minhaOficina.nome}</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Alunos Inscritos</p>
                <p className="text-2xl font-bold text-indigo-600">{minhaOficina.alunos}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-2xl font-bold text-green-600 capitalize">{minhaOficina.status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Alunos */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <HiUsers className="w-5 h-5 text-indigo-600" />
              <div>
                <h2 className="text-lg font-medium text-gray-900">Alunos Inscritos</h2>
                <p className="text-sm text-gray-500">Lista de presença</p>
              </div>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {alunosInscritos.map((aluno) => (
              <div key={aluno.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">
                        {aluno.nome.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{aluno.nome}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      aluno.presente 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {aluno.presente ? 'Presente' : 'Ausente'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfessorDashboard;