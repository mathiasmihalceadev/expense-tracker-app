import carIcon from '../assets/car.png';
import foodIcon from '../assets/food.png';
import shoppingIcon from '../assets/shopping.png';
import travelIcon from '../assets/travel.png';
import othersIcon from '../assets/others.png';
import healthIcon from '../assets/health.png';
import utilitiesIcon from '../assets/utilities.png';
import entertainmentIcon from '../assets/entertainment.png';

function ExpensesItem({item}) {
    let iconSrc;
    switch (item.category) {
        case 'transportation':
            iconSrc = carIcon;
            break;
        case 'food':
            iconSrc = foodIcon;
            break;
        case 'shopping':
            iconSrc = shoppingIcon;
            break;
        case 'travel':
            iconSrc = travelIcon;
            break;
        case 'others':
            iconSrc = othersIcon;
            break;
        case 'health':
            iconSrc = healthIcon;
            break;
        case 'utilities':
            iconSrc = utilitiesIcon;
            break;
        case 'entertainment':
            iconSrc = entertainmentIcon;
            break;
    }


    return (
        <div className="flex justify gap-4 items-center bg-white py-2 pr-4 pl-2 rounded-md mb-3">
            <div>
                <img className="w-10" src={iconSrc} alt=""/>
            </div>
            <div className="flex flex-col">
                <p className="font-semibold">{item.description}</p>
                <p className="text-xs text-gray-500 font">{item.time}</p>
            </div>
            <div className="ml-auto font-semibold">
                <p>{item.amount} LEI</p>
            </div>
        </div>
    )
}

export default ExpensesItem;