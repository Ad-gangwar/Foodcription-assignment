import React from 'react';

export default function Header() {
    const date = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    return (
        <section className='w-[1170px] h-[67px] mx-auto py-5'>
            <div className='container flex px-0'>
                <div className='relative'>
                    <div className='text-7xl font-black text-gradient'>R</div>
                    <div className=' absolute top-[48%] left-[48%]'>
                        <div className='text-7xl font-black relative text-gradient'>X
                            <div className='border-b-8 border-gradient absolute w-[1113px] bottom-[12.3%] left-[71%]'>
                                <h3 className=' text-end font-semibold py-1 text-lg text-black'>Date: {date}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
