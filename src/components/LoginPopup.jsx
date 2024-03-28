import closeIcon from "../assets/x.svg";
import {motion} from "framer-motion";
import {useState} from "react";

function LoginPopup({closeLoginModal}) {
    const [userName, setUserName] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setUserName(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Works!');

        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        localStorage.setItem("Username", JSON.stringify(userName));

        closeLoginModal();
    }

    return (
        <div>
            <motion.div
                className="children-div pt-8 w-full right-0 left-0 h-auto absolute bottom-0 rounded-t-2xl px-6 pb-6 animate__animated animate__slideInUp animate__faster z-10 bg-white"
                initial={{opacity: 1, y: "100%"}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 1, y: "100%"}}
                transition={{duration: 0.4}}
            >
                <h2 className="text-2xl font-semibold mb-1">Hello!</h2>
                <p className="mb-6 text-gray-500 leading-5 text-sm">Enter your name to track your expenses.</p>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="expense-amount" className="font-semibold">
                            Your name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="expense-amount"
                                name="amount"
                                value={userName}
                                onChange={handleInputChange}
                                className="h-12 w-full rounded-xl pl-4 font-medium focus:outline-blue-500 bg-gray-100"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-gray-50 font-semibold bg-gradient-to-br from-gray-950 to-gray-700 py-4 rounded-xl"
                    >
                        Log in
                    </button>
                </form>
            </motion.div>
            <motion.div
                className="w-full right-0 left-0 h-full bg-gray-600/60 absolute bottom-0 animate__animated animate__fadeIn z-1 backdrop-blur-sm"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                key="div"
            ></motion.div>
        </div>
    )
}

export default LoginPopup;