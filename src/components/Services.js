import Link from 'next/link';
    import { servicesData } from '../data/services';

    const Services = () => {
      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.map((service) => (
                <Link key={service.name} href={`/services/${service.slug}`} className="bg-white p-6 rounded shadow hover:shadow-md transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600">Learn more about our {service.name} services.</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default Services;
