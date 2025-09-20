import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div>
        <header className="w-full flex justify-between items-center px-10 py-3 shadow-md">
            <div className="flex items-center gap-2">
                <div className="bg-indigo-600 rounded-lg p-1">
                    <IoSettingsOutline size={25} className="text-white"/>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">Painel Administrativo</h1>
                    <p className="text-sm text-gray-500 font-medium">Sistema CAP</p>
                </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer justify-center shadow-md border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-100 transition-colors">
                <IoExitOutline size={20} />
                <button className="text-sm font-bold">Sair</button>
            </div>
        </header>
    </div>
  )
}

export default Header