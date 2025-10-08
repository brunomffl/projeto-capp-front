import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import { useState } from 'react';

const Header = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (window.confirm('Deseja realmente sair do sistema?')) {
      setLoading(true);
      try {
        await signOut(auth);
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
        alert('Erro ao sair do sistema');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <header className="w-full flex justify-between items-center px-10 py-3 shadow-md bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 rounded-lg p-1">
            <IoSettingsOutline size={25} className="text-white"/>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Painel Administrativo</h1>
            <p className="text-sm text-gray-500 font-medium">Sistema CAPP</p>
          </div>
        </div>
        <div 
          className="flex items-center gap-2 cursor-pointer justify-center shadow-md border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-100 transition-colors disabled:opacity-50"
          onClick={handleLogout}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-bold">Saindo...</span>
            </>
          ) : (
            <>
              <IoExitOutline size={20} />
              <span className="text-sm font-bold">Sair</span>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;