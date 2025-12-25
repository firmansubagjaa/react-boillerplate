import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// Define the state interface
interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    // Actions
    login: (user: User, token: string) => void;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}

// User type
interface User {
    id: string;
    name: string;
    email: string;
}

// Create the store with TypeScript
export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                // Initial state
                user: null,
                token: null,
                isAuthenticated: false,

                // Actions
                login: (user, token) => {
                    localStorage.setItem('token', token);
                    set({ user, token, isAuthenticated: true }, false, 'auth/login');
                },

                logout: () => {
                    localStorage.removeItem('token');
                    set(
                        { user: null, token: null, isAuthenticated: false },
                        false,
                        'auth/logout'
                    );
                },

                updateUser: (userData) =>
                    set(
                        (state) => ({
                            user: state.user ? { ...state.user, ...userData } : null,
                        }),
                        false,
                        'auth/updateUser'
                    ),
            }),
            {
                name: 'auth-storage', // name of item in localStorage
                partialize: (state) => ({
                    user: state.user,
                    token: state.token,
                    isAuthenticated: state.isAuthenticated,
                }),
            }
        ),
        { name: 'AuthStore' }
    )
);
