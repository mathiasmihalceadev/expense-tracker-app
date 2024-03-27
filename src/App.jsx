import './App.css'
import HeaderInformation from "./components/HeaderInformation.jsx";
import ExpenseSum from "./components/ExpensesSum.jsx";
import BottomToolbar from "./components/BottomToolbar.jsx";
import ExpensesList from "./components/ExpensesList.jsx"
import AddExpensePopup from "./components/AddExpensePopup.jsx";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";

function App() {
    const [totalSum, setTotalSum] = useState(0);

    const handleSumChange = (sum) => {
        setTotalSum(sum);
    }

    const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

    const toggleAddExpenseModal = () => {
        setIsAddExpenseOpen(!isAddExpenseOpen);
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
            </div>
        </>
    )
}

export default App;
