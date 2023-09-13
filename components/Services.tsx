import React from 'react';

const Services: React.FC = () => {
  return (
    <div id="services" className="py-16 my-32 md:my-40">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="text-xl font-semibold text-gray-800 mb-2">USLUGE</div>
          <h2 className="text-3xl font-bold text-gray-900">POSLOVI KOJE RADIMO</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/1.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Adaptacija kuće</h4>
              <p className="text-gray-700">Description goes here.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/2.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Adaptacija stana</h4>
              <p className="text-gray-700">Description goes here.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/3.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Betoniranje</h4>
              <p className="text-gray-700">Betoniranje temeljne ploče, stepenice od betona, betoniranje...</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/4.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Gradnja kuće, ključ u ruke</h4>
              <p className="text-gray-700">Kuće ključ u ruke, stanovi za useljenje, obnova ključ u ruke.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/5.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Građevinski radovi</h4>
              <p className="text-gray-700">Renovacija okoliša, novogradnja, podporni zid, rušenje kuće...</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/6.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Hidroizolacija temelja, podruma</h4>
              <p className="text-gray-700">Description goes here.</p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/7.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Novogradnja</h4>
              <p className="text-gray-700">Nova kuća, dogradnja, samostojeća kuća, dvojna kuća...</p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/8.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Obnova, sanacija, renoviranje</h4>
              <p className="text-gray-700">Sanacija stare kuće, ponuđač za obnovu.</p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/9.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Specializirani građevinski radovi</h4>
              <p className="text-gray-700">Description goes here.</p>
            </div>
          </div>

          {/* Card 10 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/10.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Zidar</h4>
              <p className="text-gray-700">Dogradnja kuće, zid, strop s punilima, peć, podrum.</p>
            </div>
          </div>

          {/* Card 11 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/11.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Krovopokrivač</h4>
              <p className="text-gray-700">Novogradnja krova, novi krov, zamjena krova, hidroizolacija krova...</p>
            </div>
          </div>

          {/* Card 12 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/12.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Krovovi</h4>
              <p className="text-gray-700">Opečne kritine, betonska krovišta, kovinski krovovi, limena krovišta...</p>
            </div>
          </div>

          {/* Card 13 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/13.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Bazeni</h4>
              <p className="text-gray-700">Jacuzzi, ugradbeni bazen, zidani bazeni, skimmerski bazeni folija...</p>
            </div>
          </div>

          {/* Card 14 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/14.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Uređenje dvorišta</h4>
              <p className="text-gray-700">Košnja trave, rezanje žive ograde, prekopavanje zemlje, polaganje trave.</p>
            </div>
          </div>

          {/* Card 15 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="rounded-full overflow-hidden mx-auto bg-gray-300 w-32 h-32">
              <img src="/Usluge/15.jpg" alt="usluga" className="usluga w-full h-full object-cover" />
            </div>
            <div className="px-6 py-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Fasade</h4>
              <p className="text-gray-700">Izrada fasade, nova fasada na mjesto stare fasade, odstranjivanje završnog sloja postojeće fasade...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
