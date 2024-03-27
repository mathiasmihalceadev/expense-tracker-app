import closeIcon from "../assets/x.svg";
import chevronIcon from "../assets/chevron-right.svg"

import carIcon from '../assets/car.png';
import foodIcon from '../assets/food.png';
import shoppingIcon from '../assets/shopping.png';
import travelIcon from '../assets/travel.png';
import othersIcon from '../assets/others.png';
import healthIcon from '../assets/health.png';
import utilitiesIcon from '../assets/utilities.png';
import entertainmentIcon from '../assets/entertainment.png';

import './AddExpensePopup.css'

import {AnimatePresence, motion} from "framer-motion"
import {useState} from "react";

function AddExpensePopup({closeModal}) {
    const [data, setData] = useState({
        amount: "",
        description: "",
        category: "shopping",
    })

    const [category, setCategory] = useState('shopping');
    const [categorySrc, setCategorySrc] = useState(shoppingIcon);
    const [isCategoryPopup, setIsCategoryPopup] = useState(false);
    const [error, setError] = useState(false);

    const toggleIsCategoryPopup = () => {
        setError(false);
        setIsCategoryPopup(!isCategoryPopup);
    }

    const handleInputChange = (e) => {
        setError(false);
        const {name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const selectCategory = (e) => {
        const {name} = e.target;
        let categorySrc;
        switch (name) {
            case 'food':
                setCategory('food');
                categorySrc = foodIcon;
                break;
            case 'transportation':
                setCategory('car');
                categorySrc = carIcon;
                break;
            case 'shopping':
                setCategory('shopping');
                categorySrc = shoppingIcon;
                break;
            case 'travel':
                setCategory('travel');
                categorySrc = travelIcon;
                break;
            case 'others':
                setCategory('others');
                categorySrc = othersIcon;
                break;
            case 'health':
                setCategory('health');
                categorySrc = healthIcon;
                break;
            case 'utilities':
                setCategory('utilities');
                categorySrc = utilitiesIcon;
                break;
            case 'entertainment':
                setCategory('entertainment');
                categorySrc = entertainmentIcon;
                break;
            default:
                setCategory('others');
                categorySrc = othersIcon;
                break;
        }

        setData(prevData => ({
            ...prevData,
            category: name
        }));

        setCategorySrc(categorySrc);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            ...data,
            id: new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}),
            time: new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}),
        };

        if (data.amount === '' || data.category === '' || data.description === '') {
            setError(true);
            return;
        }

        const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

        existingExpenses.push(newExpense);

        localStorage.setItem("expenses", JSON.stringify(existingExpenses));

        closeModal();
    };

    return (
        <div>
            <motion.div
                className="children-div w-full right-0 left-0 h-auto absolute bottom-0 rounded-t-2xl px-6 pb-6 animate__animated animate__slideInUp animate__faster z-10 bg-white"
                initial={{opacity: 1, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 1, y: "100%"}}
                transition={{duration: 0.4}}
            >
                <div className="flex justify-end mt-4">
                    <div className="p-2 rounded-full bg-gray-100">
                        <img onClick={closeModal} className="w-7 cursor-pointer" src={closeIcon} alt=""/>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Add new expense</h2>
                <p className="mb-6 text-gray-500 font-medium">Enter the details of your expense to help you track your
                    spending.</p>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="expense-amount" className="font-bold">
                            Enter amount
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="expense-amount"
                                name="amount"
                                value={data.amount}
                                onChange={handleInputChange}
                                className="h-12 w-full rounded-xl pl-4 font-medium focus:outline-blue-500 bg-gray-100"
                            />
                            <p className="absolute top-3 right-4 font-bold">LEI</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="expense-description" className="font-bold">
                            Description
                        </label>
                        <input
                            type="text"
                            id="expense-description"
                            name="description"
                            value={data.description}
                            onChange={handleInputChange}
                            className="h-12 rounded-xl pl-4 font-medium focus:outline-blue-500 bg-gray-100"
                        />
                    </div>
                    <div className="flex flex-col gap-2" onClick={toggleIsCategoryPopup}>
                        <label htmlFor="expense-category" className="font-bold">
                            Category
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="expense-category"
                                name="category"
                                value={data.category}
                                onChange={handleInputChange}
                                readOnly={true}
                                className="h-12 w-full rounded-xl pl-12 font-semibold focus:outline-blue-500 bg-gray-100"
                            />
                            <img
                                alt="chevron-icon"
                                src={chevronIcon}
                                className={`absolute top-3 right-4 ${isCategoryPopup ? 'chevron-up' : 'chevron-down'}`}
                            />

                            <img src={categorySrc} className="absolute w-8 top-2 left-2"/>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-gray-50 font-semibold bg-gradient-to-br from-gray-950 to-gray-800 py-4 rounded-xl"
                    >
                        Add expense
                    </button>
                </form>
            </motion.div>
            <motion.div
                className="w-full right-0 left-0 h-full bg-gray-600/60 absolute bottom-0 animate__animated animate__fadeIn z-1"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                key="div"
            ></motion.div>
            <AnimatePresence mode="wait">
                {isCategoryPopup && <motion.div
                    initial={{y: '0', opacity: 0}}
                    animate={{y: '20%', opacity: 1}}
                    exit={{y: '0', opacity: 0}}
                    transition={{duration: 0.4}}
                    onClick={toggleIsCategoryPopup}
                    className="absolute grid grid-cols-8 gap-4 z-20 bg-white shadow-2xl left-0 rounded-xl mx-6 p-2 top-4">
                    <img onClick={selectCategory} name="food" src={foodIcon} alt="food-icon"/>
                    <img onClick={selectCategory} name="transportation" src={carIcon} alt="transportation-icon"/>
                    <img onClick={selectCategory} name="utilities" src={utilitiesIcon} alt="utilities-icon"/>
                    <img onClick={selectCategory} name="entertainment" src={entertainmentIcon}
                         alt="entertainment-icon"/>
                    <img onClick={selectCategory} name="health" src={healthIcon} alt="health-icon"/>
                    <img onClick={selectCategory} name="shopping" src={shoppingIcon} alt="shopping-icon"/>
                    <img onClick={selectCategory} name="travel" src={travelIcon} alt="travel-icon"/>
                    <img onClick={selectCategory} name="others" src={othersIcon} alt="others-icon"/>
                </motion.div>}
            </AnimatePresence>
            <AnimatePresence mode="wait">
                {error && <motion.div
                    initial={{y: '0', opacity: 0}}
                    animate={{y: '20%', opacity: 1}}
                    exit={{y: '0', opacity: 0}}
                    transition={{duration: 0.4}}
                    className="absolute z-20 bg-white shadow-2xl left-0 rounded-xl mx-6 p-2 top-4">
                    <p className="font-semibold">Please, fill out all fields.</p>
                </motion.div>}
            </AnimatePresence>
        </div>
    );
}

export default AddExpensePopup;