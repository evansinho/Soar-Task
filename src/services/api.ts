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
                    { name: "Bill Expense", value: 15, color: "#FC7900" },
                    { name: "Entertainment", value: 30, color: "#343C6A" },
                    { name: "Investment", value: 20, color: "#396AFF" },
                    { name: "Others", value: 35, color: "#232323" },
                ],
                weeklyActivity: [
                    { day: "Sat", deposit: 250, withdraw: 450 },
                    { day: "Sun", deposit: 150, withdraw: 350 },
                    { day: "Mon", deposit: 250, withdraw: 300 },
                    { day: "Tue", deposit: 350, withdraw: 450 },
                    { day: "Wed", deposit: 150, withdraw: 250 },
                    { day: "Thu", deposit: 250, withdraw: 400 },
                    { day: "Fri", deposit: 350, withdraw: 400 },
                ],
                balanceHistory: [
                    { month: "Jul", balance: 100 },
                    { month: "Aug", balance: 220 },
                    { month: "Sep", balance: 420 },
                    { month: "Oct", balance: 790 },
                    { month: "Nov", balance: 200 },
                    { month: "Dec", balance: 570 },
                    { month: "Jan", balance: 220 },
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
