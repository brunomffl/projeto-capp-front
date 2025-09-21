import React, { useState } from 'react';
import { HiUsers, HiPlus, HiPencil, HiTrash } from 'react-icons/hi';

const AbaProfessores = () => {
  const [activeTab, setActiveTab] = useState('professores');

  const professores = [
    {
      id: 1,
      nome: 'Maria Silva',
      email: 'maria@escola.com',
      oficina: 'Matemática Básica'
    },
    {
      id: 2,
      nome: 'João Santos',
      email: 'joao@escola.com',
      oficina: 'Leitura e Escrita'
    },
    {
      id: 3,
      nome: 'Ana Costa',
      email: 'ana@escola.com',
      oficina: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">   
      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="px-6">
          <div className="flex space-x-0">
            <button
              onClick={() => setActiveTab('professores')}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'professores'
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <HiUsers className="w-4 h-4" />
              <span>PROFESSORES</span>
            </button>
            <button
              onClick={() => setActiveTab('oficinas')}
              className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'oficinas'
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center">📚</div>
              <span>OFICINAS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'professores' && (
          <div className="bg-white rounded-lg shadow-sm border">
            {/* Header do card */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <HiUsers className="w-5 h-5 text-gray-600" />
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Professores</h2>
                    <p className="text-sm text-gray-500">Gerencie os professores do sistema</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <HiPlus className="w-4 h-4" />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>

            {/* Lista de professores */}
            <div className="divide-y divide-gray-200">
              {professores.map((professor) => (
                <div key={professor.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 mb-1">
                        {professor.nome}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {professor.email}
                      </p>
                      <div className="flex items-center">
                        {professor.oficina ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                            {professor.oficina}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                            Sem oficina
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors">
                        <HiPencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <HiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'oficinas' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aba Oficinas</h3>
              <p className="text-gray-500">Esta seção será implementada em breve</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbaProfessores;