import ChipCardWhite from '../assets/Chip_Card_white.svg';
import MasterLogoWhite from '../assets/masterLogo_white.svg';
import ChipCardBlack from '../assets/Chip_Card_black.svg';
import MasterLogoBlack from '../assets/masterLogo_black.svg';
import DepositsIcon from '../assets/deposits.svg';
import PayPalIcon from '../assets/paypalIcon.svg';
import DollarsIcon from '../assets/dollarsIcon.svg';
import LiviaAvatar from '../assets/liviaAvatar.svg';
import RandyAvatar from '../assets/randyAvatar.svg';
import WorkmanAvatar from '../assets/workmanAvatar.svg';
import ProfilePic from '../assets/profileIcon.svg';


export const fetchUser = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Charlene Reed",
                email: "charlenereed@gmail.com",
                userName: "charlenereed",
                password: "********",
                dob: "25 January 1990",
                presentAddress: "San Jose, California, USA",
                permanentAddress: "San Jose, California, USA",
                city: "San Jose",
                postalCode: "45992",
                country: "USA",
                profilePic: ProfilePic,
                notifications: true,
                darkMode: false,
                twoFactorAuth: true,
            });
        }, 1000); // Simulating network delay
    });
};

export const fetchDashboardData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                cards: [
                    { 
                        id: 1, 
                        balance: 5756, 
                        cardHolder: "Eddy Cusuma", 
                        validThru: "12/22", 
                        number: "3778 **** 1234",
                        chip: ChipCardWhite,
                        logo: MasterLogoWhite,
                        chipLabel: "White Card Chip",
                        logoLabel: "White Master Logo",
                        bgColor: "linear-gradient(135deg, #5B5A6F 0%, #1C1C1C 100%)",
                        textColor: "text-white"
                    },
                    { 
                        id: 2, 
                        balance: 3450, 
                        cardHolder: "Eddy Cusuma", 
                        validThru: "11/23", 
                        number: "3778 **** 1234",
                        chip: ChipCardBlack,
                        logo: MasterLogoBlack,
                        chipLabel: "Black Card Chip",
                        logoLabel: "Black Master Logo",
                        bgColor: "#FAFAFA",
                        textColor: "text-black"
                    },
                ],
                transactions: [
                    { id: 1, name: "Deposit from my Card", date: "25 Jan 2021", amount: "-$850", imgSrc: DepositsIcon, imgAlt: "Deposit Icon" },
                    { id: 2, name: "Deposit PayPal", date: "25 Jan 2021", amount: "+$1,200", imgSrc: PayPalIcon, imgAlt: "PayPal Icon" },
                    { id: 3, name: "Jeni Wilson", date: "21 Jan 2021", amount: "+$5,400", imgSrc: DollarsIcon, imgAlt: "Dollars Icon" },
                ],
                expenseStats: [
                    { name: "Entertainment", value: 30, color: "#f97316" },
                    { name: "Bill Expense", value: 15, color: "#eab308" },
                    { name: "Investment", value: 20, color: "#3b82f6" },
                    { name: "Others", value: 35, color: "#64748b" },
                ],
                weeklyActivity: [
                    { day: "Sat", deposit: 300, withdraw: 100 },
                    { day: "Sun", deposit: 400, withdraw: 200 },
                    { day: "Mon", deposit: 500, withdraw: 300 },
                    { day: "Tue", deposit: 200, withdraw: 100 },
                    { day: "Wed", deposit: 600, withdraw: 400 },
                    { day: "Thu", deposit: 700, withdraw: 500 },
                    { day: "Fri", deposit: 450, withdraw: 250 },
                ],
                balanceHistory: [
                    { month: "Jan", balance: 5000 },
                    { month: "Feb", balance: 4800 },
                    { month: "Mar", balance: 5200 },
                    { month: "Apr", balance: 5100 },
                    { month: "May", balance: 5300 },
                    { month: "Jun", balance: 5500 },
                ],
                quickTransfer: [
                    { id: 1, name: "Livia Bator", position: "CEO", avatar: LiviaAvatar },
                    { id: 2, name: "Randy Press", position: "Director", avatar: RandyAvatar },
                    { id: 3, name: "Workman", position: "Designer", avatar: WorkmanAvatar },
                ],
            });
        }, 1000);
    });
};
