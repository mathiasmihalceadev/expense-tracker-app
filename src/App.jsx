import './App.css'
import HeaderInformation from "./components/HeaderInformation.jsx";
import ExpenseSum from "./components/ExpensesSum.jsx";
import BottomToolbar from "./components/BottomToolbar.jsx";
import ExpensesList from "./components/ExpensesList.jsx"
import AddExpensePopup from "./components/AddExpensePopup.jsx";
import {useState, useEffect} from "react";
import {AnimatePresence} from "framer-motion";
import LoginPopup from "./components/LoginPopup.jsx";

function App() {
    const [totalSum, setTotalSum] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedInLocalStorage = JSON.parse(localStorage.getItem('isLoggedIn'));
        if (isLoggedInLocalStorage) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSumChange = (sum) => {
        setTotalSum(sum);
    }

    const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

    const toggleAddExpenseModal = () => {
        setIsAddExpenseOpen(!isAddExpenseOpen);
    }

    const closeIsLoginOpen = () => {
        setIsLoggedIn(true);
    }

    return (
        <>
            <div className="px-6">
                <HeaderInformation></HeaderInformation>
                <ExpenseSum total={totalSum}></ExpenseSum>
                <BottomToolbar onModalToggle={toggleAddExpenseModal}></BottomToolbar>
                <ExpensesList onSumChange={handleSumChange}></ExpensesList>
                <AnimatePresence mode="wait">
                    {isAddExpenseOpen && <AddExpensePopup closeModal={toggleAddExpenseModal}/>}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    {!isLoggedIn && <LoginPopup closeLoginModal={closeIsLoginOpen}></LoginPopup>}
                </AnimatePresence>
            </div>
        </>
    )
}

export default App;
