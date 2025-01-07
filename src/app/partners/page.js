
    const PartnersPage = () => {
      const partners = [
        {
          name: 'Partner 1',
          logo: 'https://placehold.co/150x100',
        },
        {
          name: 'Partner 2',
          logo: 'https://placehold.co/150x100',
        },
      ];

      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Partners
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded shadow p-6 text-center">
                  <img src={partner.logo} alt={partner.name} className="mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{partner.name}</h2>
                </div>
              ))}
