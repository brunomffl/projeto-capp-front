import { useState } from "react";
import Layout from "../components/Layout";
import { HiBookOpen, HiUsers } from "react-icons/hi";
import AbaProfessores from "../components/painelAdministrativo/AbaProfessores";
import AbaOficinas from "../components/painelAdministrativo/AbaOficinas";

const Administrativo = () => {
  const [activeTab, setActiveTab] = useState("professores");

  return (
    <Layout>
      {/* Navigation Tabs */}
      <div className="bg-white border-none shadow-sm m-10 rounded-lg">
        <div className="px-6">
          <div className="flex space-x-0">
            <button
              onClick={() => setActiveTab("professores")}
              className={`flex cursor-pointer items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "professores"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <HiUsers className="w-4 h-4" />
              <span>PROFESSORES</span>
            </button>
            <button
              onClick={() => setActiveTab("oficinas")}
              className={`flex cursor-pointer items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "oficinas"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <HiBookOpen className="w-4 h-4" />
              <span>OFICINAS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 max-w-4xl mx-auto">
        {activeTab === "professores" && <AbaProfessores />}
        {activeTab === "oficinas" && <AbaOficinas />}
      </div>
    </Layout>
  );
};

export default Administrativo;
