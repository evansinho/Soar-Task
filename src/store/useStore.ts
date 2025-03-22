import { create } from 'zustand';

interface User {
    name: string;
    email: string;
    password: string;
    dob: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
}

interface Card {
    balance: number;
    cardHolder: string;
    validThru: string;
    number: string;
}

interface Transaction {
    id: number;
    type: string;
    method: string;
    amount: number;
    date: string;
    status: string;
}

interface ExpenseStats {
    entertainment: number;
    investment: number;
    bills: number;
    others: number;
}

interface Dashboard {
    cards: Card[];
    transactions: Transaction[];
    expenseStats: ExpenseStats;
    weeklyActivity: number[];
    balanceHistory: number[];
}

interface StoreState {
    user: User;
    dashboard: Dashboard;
    updateUser: (newUserData: Partial<User>) => void;
    addTransaction: (transaction: Transaction) => void;
}

const useStore = create<StoreState>((set) => ({
    // User Profile Data
    user: {
        name: "Charlene Reed",
        email: "charlenereed@gmail.com",
        password: "********",
        dob: "25 January 1990",
        presentAddress: "San Jose, California, USA",
        permanentAddress: "San Jose, California, USA",
        city: "San Jose",
        postalCode: "45992",
        country: "USA",
    },

    // Transactions & Dashboard Data
    dashboard: {
        cards: [
            { balance: 5756, cardHolder: "Eddy Cusuma", validThru: "12/22", number: "3778 **** 1234" },
            { balance: 5756, cardHolder: "Eddy Cusuma", validThru: "12/22", number: "3778 **** 1234" },
        ],
        transactions: [
            { id: 1, type: "Deposit", method: "PayPal", amount: 1500, date: "25 Jan 2025", status: "success" },
            { id: 2, type: "Withdrawal", method: "My Card", amount: -850, date: "23 Jan 2025", status: "failed" },
            { id: 3, type: "Deposit", method: "Bank Transfer", amount: 500, date: "21 Jan 2025", status: "success" },
        ],
        expenseStats: {
            entertainment: 30,
            investment: 20,
            bills: 15,
            others: 35,
        },
        weeklyActivity: [400, 500, 300, 450, 600, 500, 550],
        balanceHistory: [200, 300, 500, 700, 600, 800, 750],
    },

    // Actions
    updateUser: (newUserData) => set((state) => ({ user: { ...state.user, ...newUserData } })),
    addTransaction: (transaction) => set((state) => ({
        dashboard: { ...state.dashboard, transactions: [transaction, ...state.dashboard.transactions] },
    })),
}));

export default useStore;
