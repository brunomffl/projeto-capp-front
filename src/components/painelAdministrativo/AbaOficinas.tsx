import { HiPlus, HiPencil, HiTrash, HiBookOpen } from 'react-icons/hi';

type StatusOficina = 'ativa' | 'pausada' | 'inativa';

interface Oficina {
  id: number;
  nome: string;
  professor: string | null;
  alunos: number;
  status: StatusOficina;
}

const AbaOficinas = () => {
  const oficinas: Oficina[] = [
    {
      id: 1,
      nome: 'Robótica Educacional',
      professor: 'Prof. Cleiton',
      alunos: 15,
      status: 'ativa'
    },
    {
      id: 2,
      nome: 'Matemática Básica',
      professor: 'Maria Silva',
      alunos: 20,
      status: 'ativa'
    },
    {
      id: 3,
      nome: 'Física Experimental',
      professor: 'João Santos',
      alunos: 12,
      status: 'pausada'
    },
    {
      id: 4,
      nome: 'Artes e Criatividade',
      professor: null,
      alunos: 0,
      status: 'inativa'
    }
  ];

  const getStatusColor = (status: StatusOficina) => {
    switch (status) {
      case 'ativa':
        return 'bg-green-100 text-green-800';
      case 'pausada':
        return 'bg-yellow-100 text-yellow-800';
      case 'inativa':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border-none">
      {/* Header do card */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <HiBookOpen className="w-5 h-5 text-gray-600" />
            <div>
              <h2 className="text-lg font-medium text-gray-900">Oficinas</h2>
              <p className="text-sm text-gray-500">Gerencie as oficinas do sistema</p>
            </div>
          </div>
          <button className="flex cursor-pointer items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <HiPlus className="w-4 h-4" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>

      {/* Lista de oficinas */}
      <div className="divide-y divide-gray-200">
        {oficinas.map((oficina) => (
          <div key={oficina.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  {oficina.nome}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {oficina.professor || 'Sem professor designado'}
                </p>
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(oficina.status)}`}>
                    {oficina.status.charAt(0).toUpperCase() + oficina.status.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {oficina.alunos} alunos
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-yellow-600 cursor-pointer hover:bg-yellow-50 rounded-lg transition-colors">
                  <HiPencil className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 cursor-pointer hover:bg-red-50 rounded-lg transition-colors">
                  <HiTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbaOficinas;