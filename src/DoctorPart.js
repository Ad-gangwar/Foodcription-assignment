import React from 'react'
import docImage from './assets/hero-img03.png';
import { Icon } from '@iconify/react';

export default function DoctorPart() {
    const prescriptions = [
        { id: 1, description: 'Lorem ipsum dolor sit amet consectetur.', duration: '100 g' },
        { id: 2, description: 'Lorem ipsum dolor sit amet consectetur.', duration: '100 g' },
        { id: 3, description: 'Lorem ipsum dolor sit amet consectetur.', duration: '100 g' },
        { id: 4, description: 'Lorem ipsum dolor sit amet consectetur.', duration: '100 g' }
    ];
    return (
        <section className='w-[1170px] mx-auto bg-[#FFFFFF] mt-[90px] p-6 rounded-md'>
            <div className='flex justify-between gap-10 mb-[30px] border-b-[2px] border-[#e0f1bb] pb-7'>
                <div className='flex gap-3'>
                    <figure className='w-[50px]'>
                        <img className='w-full rounded-full' src={docImage} alt='' />
                    </figure>
                    <div>
                        <h5 className='text-[16px] leading-6 to-primaryColor font-bold'>
                            Dr. Darlene Roberston
                        </h5>
                        <p className='text-[14px] leading-6 text-textColor'>
                            Nutritionist
                        </p>
                    </div>
                </div>

                <div className='flex gap-7 items-center'>
                    <span className='text-[14px] text-[#a6ce5f] font-medium'>Lorem ipsum dolor sit amet conjectur.</span>
                    <Icon icon="heroicons-solid:dots-vertical" fontSize={40} />
                </div>
            </div>

            <div className="overflow-hidden bg-[#ECFAD3] p-5 rounded-xl">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-md font-bold">
                                Rx
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-md font-bold">
                                Duration
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-md font-bold"></th>
                            <th scope="col" className="px-6 py-3 text-left text-md font-bold">
                                Duration
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#a6ce5f]">
                        {prescriptions.map((item, index) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 text-sm font-medium text-textColor border-r-[1px] border-[#a6ce5f]">{index + 1}. {item.description}</td>
                                <td className="px-6 py-4 text-sm font-medium text-textColor border-r-[1px] border-black">{item.duration}</td>
                                <td className="px-6 py-4 text-sm font-medium text-textColor border-r-[1px] border-black">{index + 5}. {item.description}</td>
                                <td className="px-6 py-4 text-sm font-medium text-textColor">{item.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='bg-[#ECFAD3] p-5 mt-7 rounded-xl'>
                <h3 className=' text-headingColor font-bold mb-3'>Advice</h3>
                <div className='text-sm text-textColor font-medium p-5 bg-white rounded-md pb-[50px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat augue.
                </div>
            </div>
        </section>
    )
}
