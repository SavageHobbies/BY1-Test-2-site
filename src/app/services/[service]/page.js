import { servicesData } from '../../data/services';

    const ServicePage = ({ params }) => {
      const { service } = params;
      const currentService = servicesData.find((s) => s.slug === service);

      if (!currentService) {
        return <div className="py-12 text-center">Service not found</div>;
      }

      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {currentService.name}
            </h1>
            <p className="text-gray-700 mb-8">{currentService.description}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              {currentService.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              {currentService.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

    export default ServicePage;
