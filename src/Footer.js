import React from 'react';

const Footer = () => {
  return (
    <section className='w-[1170px] mx-auto p-5'>
      <h1 className="font-bold text-xl mb-2">INSTRUCTION</h1>
      <div className="container mx-auto p-5 rounded-md bg-white">
        <h2 className="text-lg font-bold mb-3">Points to note for the best benefit of FoodCripton:</h2>
        <ul className="list-inside text-sm text-textColor font-medium ps-2 grid lg:grid-cols-2 gap-y-2">
          <li className="lg:col-start-1 leading-7">1. The Calculated Weight of the food is without Peel.</li>
          <li className="lg:col-start-2 leading-7">2. Chew Properly (32 times approximately) for best Digestion.</li>
          <li className="lg:col-start-1 leading-7">3. Wash Food and Hands properly before consuming.</li>
          <li className="lg:col-start-2 leading-7">4. Boil / Steam vegetables, if needed.</li>
          <li className="lg:col-start-1 leading-7">5. Include more colorful foods, More colors equals more Nutrients.</li>
          <li className="lg:col-start-2 leading-7">6. Eat Mindfully - Do not engage in other activities (TV, Talks) while eating.</li>
          <li className="lg:col-start-1 leading-7">7. Stay Hydrated throughout the day.</li>
        </ul>

        <div className="mt-6 pt-4">
          <h2 className='font-bold'>IMPORTANT NOTE:</h2>
          <p className='text-sm text-textColor font-medium leading-8'>The FoodCription Protocol is inspired and curated from <span className='font-bold underline'>Verified Health Sources</span>. This is not a replacement for Medical Advice and does not work in case of emergency. Consult, Discuss the protocol with your healthcare professional. FoodCripton recommends lifestyle advice protocol backed by research to help address the root cause of diseases.</p>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-sm text-textColor font-medium">
          This advice is not a substitute for professional healthcare diagnosis or treatment. If you are experiencing a life-threatening emergency that requires immediate attention please call 112 or go to your nearest local emergency service.
        </p>
      </div>
    </section>
  );
};

export default Footer;
