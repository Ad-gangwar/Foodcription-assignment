import React, { useState } from 'react'
import listImage from './assets/img2.jpg';
import img1 from './assets/li-image1.png'
import img2 from './assets/li-image2.png'
import img3 from './assets/li-image3.png'
import img4 from './assets/li-image4.png'
import img5 from './assets/li-image5.png'
import img6 from './assets/li-image6.png'
import img7 from './assets/li-image7.png'

export default function GroceryList() {

    const options = {
        daily: 1,
        weekly: 7,
        monthly: 28,
    };

    const items = [
        { name: 'Fruits', quantity: 1000, imgURL: img1 },
        { name: 'Vegetables', quantity: 500, imgURL: img2 },
        { name: 'Millets', quantity: -1, imgURL: img3 },
        { name: 'Coconut Fruit', quantity: -1, imgURL: img4 },
        { name: 'Sprouts/Green Leaves', quantity: 100, imgURL: img5 },
        { name: 'Dry Fruits', quantity: 100, imgURL: img6 },
        { name: 'Hunza tea', quantity: -1, imgURL: img7 },
    ];
    const [timeframe, setTimeframe] = useState('weekly');
    const [quantities, setQuantities] = useState(items.map(item => ({ ...item })));

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setTimeframe(value);

        const multiplier = options[value];
        if (multiplier) {
            const updatedQuantities = items.map(item => ({
                ...item,
                quantity: item.quantity * multiplier
            }));
            setQuantities(updatedQuantities);
        }
    };

    return (
        <section className='w-[1170px] mx-auto py-5'>
            <div className='flex gap-5 justify-center items-center'>
                <h1 className="font-bold text-xl mb-2">HEALTHY GROCERY LIST</h1>
                <select
                    className="mb-4 p-2 border rounded"
                    value={timeframe}
                    onChange={handleDropdownChange}
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            <div className="flex gap-3">
                <div className="w-[70%]">
                    {quantities.map((item) => (
                        <div
                            key={item.name}
                            className="bg-[#eefff5] my-3 p-2 px-3 rounded-md border-2 border-gray-150 flex justify-between items-center"
                        >
                            <div className="flex items-center">
                                <img src={item.imgURL} className="h-10 w-10" alt={item.name} />
                                <div className="ml-2 font-bold">{item.name}:</div>
                            </div>
                            <div className='font-medium'>
                                {item.quantity < 0 ? 'As Needed' : `${item.quantity} Grams`}
                            </div>
                        </div>
                    ))}
                </div>
                <figure className="w-[30%]">
                    <img src={listImage} className="h-full w-full py-3 rounded-md" alt="List" />
                </figure>
            </div>



            <div className='w-full flex justify-center'><button className='btn rounded-md bg-[#a6cc39]'>BUY NOW</button></div>
        </section>
    )
}
