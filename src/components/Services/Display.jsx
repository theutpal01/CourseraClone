import Card from '../UI/Card';

function Display() {
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
        <div className="flex flex-col gap-5 px-5 lg:px-16 xl:px-28 py-10">
            {sections.map((section, index) => (
                <div key={index} className="mb-12">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">{section.heading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

export default Display;