import homeIcon from "../assets/home.svg"
import plusIcon from "../assets/plus.svg"
import chartIcon from "../assets/bar-chart-2.svg"

function bottomToolbar({onModalToggle}) {
    return (
        <div className="fixed bottom-0 left-0 w-full">
            <div onClick={onModalToggle} className="flex justify-center mb-[-36px]">
                <div
                    className="bg-gradient-to-br from-gray-950 to-gray-700 p-5 rounded-full shadow-lg inline-flex cursor-pointer">
                    <img className="w-7" src={plusIcon} alt=""/>
                </div>
            </div>
            <div className="flex justify-between bg-white px-12 py-4">
                <div className="flex flex-col items-center gap-2 self-end">
                    <img className="w-6" src={homeIcon} alt=""/>
                    <p className="text-xs font-semibold">Home</p>
                </div>
                <div className="flex flex-col items-center gap-2 self-end">
                    <img className="w-6" src={chartIcon} alt=""/>
                    <p className="text-xs font-semibold">Insights</p>
                </div>
            </div>
        </div>
    )
}

export default bottomToolbar;