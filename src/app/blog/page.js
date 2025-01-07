const BlogPage = () => {
      const blogPosts = [
        {
          title: 'AI in Marketing',
          slug: 'ai-in-marketing',
          excerpt: 'Explore how AI is transforming the marketing landscape.',
        },
        {
          title: 'Automation Strategies',
          slug: 'automation-strategies',
          excerpt: 'Learn effective automation strategies for your business.',
        },
      ];

      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.slug} className="bg-white rounded shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-700">Read More</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

    export default BlogPage;
