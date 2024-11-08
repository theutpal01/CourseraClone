import Card from '../UI/Card';

function Browse() {
    const sections = [
        { heading: "Recently Viewed Courses" },
        { heading: "Most Popular Certificates" },
        { heading: "Personalized Specializations for You" },
        { heading: "Explore with a Coursera Plus Subscription" },
        { heading: "Based on Your Recent Views" },
        { heading: "Earn Your Degree" },
        { heading: "Get Started with These Free Courses" },
        { heading: "New on Coursera" },
        { heading: "Popular in Information Technology" },
        { heading: "Personalized Courses for You" },
        { heading: "Guided Projects for You" },
        { heading: "Learn a New Skill in 2 Hours" },
        { heading: "Grow Your Skill Set" },
    ];

    return (
        <div className="p-8">
            {sections.map((section, index) => (
                <div key={index} className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">{section.heading}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> {/* Added sm:grid-cols-2 for better responsiveness on small devices */}
                        <Card title="Course 1" />
                        <Card title="Course 2" />
                        <Card title="Course 3" />
                        <Card title="Course 4" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Browse;
