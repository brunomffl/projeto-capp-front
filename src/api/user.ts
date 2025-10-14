import type { RoleResponse, UserRole } from "../core/auth/AuthTypes";

// URL do backend - Ajuste conforme necessário
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

/**
 * Envia o ID Token do Firebase para o backend para validação e busca do papel.
 * @param idToken O ID Token JWT obtido do Firebase User (seguro).
 * @returns O papel do usuário ('administrador', 'professor', 'aluno') ou null.
 */
export async function fetchUserRole(idToken: string): Promise<UserRole> {
    try {
        const response = await fetch(`${BACKEND_URL}/auth/role`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            if (response.status === 401) {
                console.error("Token de autenticação inválido ou expirado.");
            } else if (response.status === 404) {
                console.error("Usuário não encontrado no banco de dados.");
            } else {
                console.error(`Backend falhou ao retornar o papel. Status: ${response.status}`);
            }
            return null;
        }

        const data: RoleResponse = await response.json();
        
        if (!data.papel || !['admin', 'professor'].includes(data.papel)) {
            console.error("Papel inválido retornado pelo backend:", data.papel);
            return null;
        }
        
        return data.papel; 
        
    } catch (error) {
        console.error("Erro na comunicação de rede com o backend:", error);
        
        // Se estiver em desenvolvimento, você pode retornar um papel padrão
        // para testar sem backend (REMOVA ISSO EM PRODUÇÃO!)
        if (import.meta.env.DEV) {
            console.warn("⚠️ MODO DESENVOLVIMENTO: Retornando papel 'administrador' como fallback");
            // return 'administrador'; // Descomente para testar sem backend
        }
        
        return null; 
    }
}