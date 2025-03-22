import { create } from "zustand";
import { fetchUser, fetchDashboardData } from "../services/api";

interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
    password: string;
    dob: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
    twoFactorAuth: boolean;
    notifications: boolean;
    darkMode: boolean;
    profilePic: string;
}

interface Card {
    id: number;
    balance: number;
    cardHolder: string;
    validThru: string;
    number: string;
    chip: string;
    logo: string;
    chipLabel: string;
    logoLabel: string;
    bgColor: string;
    textColor: string;
}

interface Transaction {
    id: number;
    name: string;
    date: string;
    amount: string;
    imgSrc: string;
    imgAlt: string;
}

interface ExpenseStats {
    name: string;
    value: number;
    color: string;
}

interface Contact {
    id: number;
    name: string;
    position: string;
    avatar: string;
}

interface BalanceHistory {
    month: string;
    balance: number;
}

interface Dashboard {
    cards: Card[];
    transactions: Transaction[];
    expenseStats: ExpenseStats[];
    weeklyActivity: { day: string, deposit: number, withdraw: number }[];
    balanceHistory: BalanceHistory[];
    quickTransfer: Contact[];
}

interface StoreState {
    user: User | null;
    dashboard: Dashboard | null;
    fetchUserData: () => Promise<void>;
    fetchDashboardData: () => Promise<void>;
    addTransaction: (transaction: Transaction) => void;
}

const useStore = create<StoreState>((set) => ({
    user: null,
    dashboard: null,

    fetchUserData: async () => {
        const data = await fetchUser();
        set({ user: data as User });
    },

    fetchDashboardData: async () => {
        const data = await fetchDashboardData();
        set({ dashboard: data as Dashboard });
    },

    addTransaction: (transaction) => set((state) => ({
        dashboard: {
            ...state.dashboard!,
            transactions: [transaction, ...(state.dashboard?.transactions || [])],
        },
    })),
}));

export default useStore;
