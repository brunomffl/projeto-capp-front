import type { User } from 'firebase/auth';

export type UserRole = 'administrador' | 'professor' | 'aluno' | null;

export interface AuthContextType {
  currentUser: User | null; 
  userRole: UserRole;
  loading: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode; 
}

export interface RoleResponse {
    papel: UserRole;
}