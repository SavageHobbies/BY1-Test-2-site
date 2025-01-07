const CaseStudies = () => {
      const caseStudies = [
        {
          title: 'Case Study 1',
          description: 'Description of case study 1.',
          image: 'https://placehold.co/400x200',
        },
        {
          title: 'Case Study 2',
          description: 'Description of case study 2.',
          image: 'https://placehold.co/400x200',
        },
      ];

      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded shadow p-6">
                  <img src={study.image} alt={study.title} className="mb-4 rounded" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{study.title}</h3>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default CaseStudies;
