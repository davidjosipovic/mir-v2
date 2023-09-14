import React from 'react';

const Services: React.FC = () => {
  return (
    <div id="usluge" className="py-16 my-32 md:my-40">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="text-xl font-medium text-orange-400 mb-2">USLUGE</div>
          <h2 className="text-3xl font-bold text-gray-700 ">POSLOVI KOJE RADIMO</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/1.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Adaptacija</h4>
              <p className="text-gray-700 text-xl">Adaptacija stanova i kuća</p>
            </div>
          </div>


          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/3.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Betonski radovi</h4>
              <p className="text-gray-700 text-xl">Izgradnja betona, ugradnja armaturnog željeza, montiranje otplate...</p>
            </div>
          </div>


          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/7.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Novogradnja</h4>
              <p className="text-gray-700 text-xl">Nova kuća, dogradnja, samostojeća kuća, dvojna kuća...</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/8.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Obnova, sanacija</h4>
              <p className="text-gray-700 text-xl">Sanacija stare kuće, izrada troškovnika</p>
            </div>
          </div>

          

          {/* Card 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/10.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Zidar</h4>
              <p className="text-gray-700 text-xl">Dogradnja kuće, zid, strop s punilima, peć, podrum...</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/11.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Krovopokrivač</h4>
              <p className="text-gray-700 text-xl">Novogradnja krova, zamjena krova, hidroizolacija krova...</p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/11.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Krovovi</h4>
              <p className="text-gray-700 text-xl">Pokrivanje kanalicom, crijepom, trapeznim limom, sendvič panelima...</p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/13.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Bazeni</h4>
              <p className="text-gray-700 text-xl">Izgradnja betonsih bazena, ugradnja gotovih bazena</p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/14.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Uređenje dvorišta</h4>
              <p className="text-gray-700 text-xl">Postava tlakovca za uređenje dvorišta.</p>
            </div>
          </div>

          {/* Card 10 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/15.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Fasade</h4>
              <p className="text-gray-700 text-xl">Izrada klasičnih fasada, ETICS fasade, postava fasadnih skela</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
