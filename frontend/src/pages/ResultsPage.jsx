import Filters from '../components/Filters';
import Results from '../components/Results';

const ResultsPage = () => {
    const prices = {
        title: 'Precio x noche',
        items: [
            'Entre $4000 y 6000',
            'Entre $6000 y 8000',
            'Entre $8000 y 10000',
            'Más de $10000',
        ],
        menuOpen: false,
    };

    const features = {
        title: 'Características',
        items: [
            'Aire Acondicionado',
            'Calefacción',
            'Garage',
            'Wifi',
            'Acepta mascotas',
            'Pileta',
            'Parrilla',
        ],
        menuOpen: false,
    };
    const amountOfPeople = {
        title: 'Cantidad de personas',
        items: ['1', '2', '3', '4', '5', '6', '7', 'Otro'],
        menuOpen: true,
    };

    return (
        <section className='min-h-screen bg-gray pt-[100px] mb-6 '>
            <div className='grid grid-cols-4 min-h-screen md:container gap-4 '>
                <div className='col-span-1 bg-white'>
                    <Filters data={prices} />
                    <Filters data={features} />
                    <Filters data={amountOfPeople} />
                </div>
                <div className='col-span-3 '>
                    <Results />
                </div>
            </div>
        </section>
    );
};
export default ResultsPage;
