const BlogPostPage = ({ params }) => {
      const { post } = params;
      let title = '';
      let content = '';

      if (post === 'ai-in-marketing') {
        title = 'AI in Marketing';
        content = 'This is a detailed blog post about AI in marketing. AI is revolutionizing how businesses approach marketing, offering new ways to personalize customer experiences, automate tasks, and analyze data. From AI-powered chatbots to predictive analytics, the possibilities are endless. Stay tuned for more insights!';
      } else if (post === 'automation-strategies') {
        title = 'Automation Strategies';
        content = 'This is a detailed blog post about automation strategies. Automation is key to improving efficiency and productivity in any business. By automating repetitive tasks, you can free up valuable time and resources to focus on more strategic initiatives. Learn how to implement effective automation strategies in your organization.';
      } else {
        return <div className="py-12 text-center">Blog post not found</div>;
      }

      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {title}
            </h1>
            <div className="text-gray-700">
              <p>{content}</p>
            </div>
          </div>
        </div>
      );
    };

    export default BlogPostPage;
