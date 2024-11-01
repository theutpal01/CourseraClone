export const user = {
	name: "John Doe",
	profile:
		"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
	email: "johndoe@gmail.com",
	isd: "+91",
	phno: "76384927479",
	bio: "",
	password: "johndoe1234",
	location: "",
	pronouns: "",
	gender: "",
	workPref: {
		role: "",
		industry: "",
		remote: null,
		relocate: null,
	},
	courses: {
		recent: [
			"60f5b704fc13ae34d201c6f6",
			"60f5b704fc13ae34d201c6f3",
			"60f5b704fc13ae34d201c6f7",
			"60f5b704fc13ae34d201c706",
			"60f5b704fc13ae34d201c700",
			"60f5b704fc13ae34d201c702",
		],
		ongoing: ["60f5b704fc13ae34d201c703", "60f5b704fc13ae34d201c701"],
		completed: ["60f5b704fc13ae34d201c704", "60f5b704fc13ae34d201c700"],
		recomended: [
			"60f5b704fc13ae34d201c6f3",
			"60f5b704fc13ae34d201c6f5",
			"60f5b704fc13ae34d201c6fc",
			"60f5b704fc13ae34d201c706",
		],
	},
};

export const courses = [
	{
		id: "60f5b704fc13ae34d201c6f3",
		course_title:
			"English for Common Interactions in the Workplace: Basic Level",
		course_cover:
			"https://cdni.iconscout.com/illustration/premium/thumb/english-language-course-illustration-download-in-svg-png-gif-file-formats--courses-class-learning-school-pack-education-illustrations-5319568.png",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/english-common-interactions-workplace-basic-level",
		description:
			"This course equips learners with essential English communication skills for common workplace interactions.",
		language: "English",
		duration: {
			total_hours: 8,
			weeks: 3,
			weekly_effort_hours: 2,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Basic English communication",
			"Workplace etiquette",
			"Making and receiving phone calls",
		],
		learn: [
			"Communicate effectively in basic workplace scenarios",
			"Use appropriate language for making and receiving phone calls",
			"Understand and follow workplace etiquette",
			"Engage in simple conversations and interactions with colleagues",
		],
		instructors: [
			{
				name: "James Gibbons",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/jamesgibbons",
			},
			{
				name: "Paula Ross",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/paulaross",
			},
		],
		ratings: {
			average_rating: 4.5,
			number_of_reviews: 150,
			enrollment: 1200,
			liked_percent: 90,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6f4",
		course_title: "Machine Learning",
		course_cover:
			"https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=462",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/machine-learning",
		description:
			"Learn the fundamentals of machine learning, data mining, and statistical pattern recognition.",
		language: "English",
		duration: {
			total_hours: 55,
			weeks: 11,
			weekly_effort_hours: 5,
		},
		difficulty_level: "Intermediate",
		skills_covered: [
			"Supervised learning",
			"Unsupervised learning",
			"Reinforcement learning",
			"Data analysis",
		],
		learn: [
			"Implement machine learning algorithms from scratch",
			"Apply supervised and unsupervised learning techniques",
			"Analyze and interpret data using statistical tools",
			"Build models for data prediction and classification",
			"Understand the foundations of reinforcement learning",
		],
		instructors: [
			{
				name: "Andrew Ng",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/andrewyng",
			},
		],
		ratings: {
			average_rating: 4.8,
			number_of_reviews: 1500,
			enrollment: 800,
			liked_percent: 96,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$79",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6f5",
		course_title: "Data Science Specialization",
		course_cover: "https://www.cdmi.in/courses@2x/data-science.webp",
		platform: "Coursera",
		url: "https://www.coursera.org/specializations/jhu-data-science",
		description:
			"A comprehensive introduction to data science, covering R programming, data analysis, and machine learning.",
		language: "English",
		duration: {
			total_hours: 70,
			weeks: 12,
			weekly_effort_hours: 5,
		},
		difficulty_level: "Intermediate",
		skills_covered: [
			"R programming",
			"Statistical inference",
			"Machine learning",
			"Data visualization",
		],
		learn: [
			"Analyze and visualize data using R programming",
			"Apply statistical inference methods for data analysis",
			"Implement machine learning algorithms for data-driven insights",
			"Develop reproducible data science projects",
			"Explore and clean data for real-world applications",
		],
		instructors: [
			{
				name: "Jeff Leek",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/jtleek",
			},
			{
				name: "Roger D. Peng",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/rogerpeng",
			},
		],
		ratings: {
			average_rating: 4.5,
			number_of_reviews: 87987,
			enrollment: 9867,
			liked_percent: 87,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$399",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6f6",
		course_title: "The Science of Well-Being",
		course_cover:
			"https://www.parenthub.co.uk/app/uploads/2017/02/Wellbeing.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/the-science-of-well-being",
		description:
			"Learn about the science of happiness and how to apply it to improve your own well-being.",
		language: "English",
		duration: {
			total_hours: 19,
			weeks: 10,
			weekly_effort_hours: 2,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Positive psychology",
			"Mindfulness",
			"Happiness strategies",
		],
		learn: [
			"Understand the science behind happiness and well-being",
			"Apply mindfulness techniques to enhance daily life",
			"Develop personalized strategies for increased happiness",
			"Identify and counteract common misconceptions about happiness",
		],
		instructors: [
			{
				name: "Laurie Santos",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/lauriesantos",
			},
		],
		ratings: {
			average_rating: 4.1,
			number_of_reviews: 1250,
			enrollment: 9200,
			liked_percent: 93,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6f7",
		course_title:
			"Introduction to Computer Science and Programming Using Python",
		course_cover: "https://img-c.udemycdn.com/course/750x422/433798_1de9_4.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/python",
		description:
			"An introduction to computer science as a tool to solve real-world analytical problems.",
		language: "English",
		duration: {
			total_hours: 50,
			weeks: 9,
			weekly_effort_hours: 5,
		},
		difficulty_level: "Beginner",
		skills_covered: ["Python programming", "Data analysis", "Algorithm design"],
		learn: [
			"Write and understand Python code for solving computational problems",
			"Develop algorithms to approach complex problem-solving",
			"Analyze and visualize data using Python libraries",
			"Apply foundational computer science concepts in programming",
		],
		instructors: [
			{
				name: "Eric Grimson",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/egrimson",
			},
			{
				name: "John Guttag",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/jguttag",
			},
		],
		ratings: {
			average_rating: 4.0,
			number_of_reviews: 650,
			enrollment: 5200,
			liked_percent: 85,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$75",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6f8",
		course_title: "Digital Marketing Specialization",
		course_cover:
			"https://courses.iid.org.in/public//uploads/media_manager/628.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/specializations/digital-marketing",
		description:
			"Learn digital marketing concepts and skills, including analytics, social media, and content marketing.",
		language: "English",
		duration: {
			total_hours: 20,
			weeks: 5,
			weekly_effort_hours: 4,
		},
		difficulty_level: "Intermediate",
		skills_covered: [
			"SEO",
			"Social media marketing",
			"Email marketing",
			"Content strategy",
		],
		learn: [
			"Develop and implement effective social media marketing strategies",
			"Apply SEO techniques to improve online visibility",
			"Create engaging content for various digital channels",
			"Utilize analytics to optimize digital marketing campaigns",
			"Design email marketing campaigns to boost customer engagement",
		],
		instructors: [
			{
				name: "Dhruv Grewal",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/dhruvgrewal",
			},
		],
		ratings: {
			average_rating: 4.4,
			number_of_reviews: 987,
			enrollment: 9878,
			liked_percent: 94,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$199",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6f9",
		course_title: "Introduction to Psychology",
		course_cover:
			"https://cognizavest.com/wp-content/uploads/2024/05/image-4.webp",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/psychology",
		description:
			"Explore the science of psychology and understand how it impacts human behavior.",
		language: "English",
		duration: {
			total_hours: 12,
			weeks: 4,
			weekly_effort_hours: 3,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Cognitive psychology",
			"Behavioral psychology",
			"Social psychology",
		],
		learn: [
			"Understand the fundamental principles of psychology",
			"Explore the biological basis of behavior and cognition",
			"Analyze psychological research and its implications",
			"Identify factors that influence human thought, emotion, and behavior",
		],
		instructors: [
			{
				name: "Paul Bloom",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/paulbloom",
			},
		],
		ratings: {
			average_rating: 4.7,
			number_of_reviews: 5580,
			enrollment: 9807,
			liked_percent: 89,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6fa",
		course_title: "Artificial Intelligence for Everyone",
		course_cover:
			"https://cdn.prod.website-files.com/62d9b9c78f111f03f778e150/66a75fa901284db3241a196c_Hero%20image%20AI.png",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/ai-for-everyone",
		description:
			"An introduction to artificial intelligence and its impact on society and business.",
		language: "English",
		duration: {
			total_hours: 6,
			weeks: 4,
			weekly_effort_hours: 1.5,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"AI concepts",
			"Business applications of AI",
			"Ethics in AI",
		],
		learn: [
			"Understand the basics of artificial intelligence and machine learning",
			"Identify the potential of AI in transforming business operations",
			"Evaluate ethical concerns and societal impacts of AI",
			"Communicate effectively with AI professionals and stakeholders",
		],
		instructors: [
			{
				name: "Andrew Ng",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/andrewyng",
			},
		],
		ratings: {
			average_rating: 4.8,
			number_of_reviews: 1500,
			enrollment: 800,
			liked_percent: 96,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6fb",
		course_title: "Financial Markets",
		course_cover:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVczzOH_FugLgszNyWTPBtkkglITW4HpW3w&s",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/financial-markets",
		description:
			"Learn about the role of financial markets in the economy and how to invest wisely.",
		language: "English",
		duration: {
			total_hours: 37,
			weeks: 7,

			weekly_effort_hours: 5,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Investment strategies",
			"Risk management",
			"Market analysis",
		],
		learn: [
			"Understand the fundamental principles of financial markets",
			"Identify key investment strategies and risk management techniques",
			"Analyze different types of financial instruments",
			"Evaluate the economic impact of financial markets on a global scale",
		],
		instructors: [
			{
				name: "Robert Shiller",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/shiller",
			},
		],
		ratings: {
			average_rating: 4.4,
			number_of_reviews: 987,
			enrollment: 9878,
			liked_percent: 94,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6fc",
		course_title: "Programming for Everybody (Getting Started with JavaScript)",
		course_cover:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybbqWd_lLJD3kBBXYKIJDn_bZLKQ9MTNI8g&s",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/javascript",
		description:
			"An introduction to programming using JavaScript, focusing on the basics of programming and problem-solving.",
		language: "English",
		duration: {
			total_hours: 20,
			weeks: 4,
			weekly_effort_hours: 5,
		},
		difficulty_level: "Beginner",
		skills_covered: ["JavaScript basics", "Problem-solving", "Web development"],
		learn: [
			"Write and understand basic JavaScript code",
			"Develop problem-solving skills using programming logic",
			"Create simple web applications using JavaScript",
			"Understand foundational programming concepts such as variables, loops, and functions",
		],
		instructors: [
			{
				name: "Charles Severance",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/drchuck",
			},
		],
		ratings: {
			average_rating: 4.9,
			number_of_reviews: 67876,
			enrollment: 97546,
			liked_percent: 98,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6fd",
		course_title: "Graphic Design Specialization",
		course_cover:
			"https://images.shiksha.com/mediadata/images/articles/1717577137phptbycRI.jpeg",
		platform: "Coursera",
		url: "https://www.coursera.org/specializations/graphic-design",
		description:
			"Learn the fundamentals of graphic design, including typography, color theory, and visual hierarchy.",
		language: "English",
		duration: {
			total_hours: 45,
			weeks: 5,
			weekly_effort_hours: 6,
		},
		difficulty_level: "Intermediate",
		skills_covered: [
			"Graphic design principles",
			"Visual communication",
			"Adobe Photoshop",
		],
		learn: [
			"Understand and apply the principles of graphic design",
			"Utilize typography effectively in design projects",
			"Master color theory and its application in visual design",
			"Create compelling visual compositions using Adobe Photoshop",
		],
		instructors: [
			{
				name: "David Kelley",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/davidkelley",
			},
		],
		ratings: {
			average_rating: 4.7,
			number_of_reviews: 5580,
			enrollment: 9807,
			liked_percent: 89,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$199",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6fe",
		course_title: "Digital Product Management",
		course_cover:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM66O-hsDHwaHDKu1Istx44s_ONnG-4s2K7w&s",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/digital-product-management",
		description:
			"Learn the key principles of digital product management and how to build successful products.",
		language: "English",
		duration: {
			total_hours: 16,
			weeks: 4,
			weekly_effort_hours: 4,
		},
		difficulty_level: "Intermediate",
		skills_covered: [
			"Product lifecycle",
			"Agile development",
			"User-centered design",
		],
		learn: [
			"Understand the digital product lifecycle from conception to launch",
			"Apply agile development principles to product management",
			"Utilize user-centered design techniques to create effective products",
			"Measure product success using key performance indicators (KPIs)",
		],
		instructors: [
			{
				name: "Christian Terwiesch",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/terwiesch",
			},
		],
		ratings: {
			average_rating: 4.4,
			number_of_reviews: 987,
			enrollment: 9878,
			liked_percent: 94,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$79",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c6ff",
		course_title: "Cybersecurity Specialization",
		course_cover:
			"https://media.istockphoto.com/id/1339203360/photo/cyber-security-inscription-against-laptop-and-code.jpg?s=612x612&w=0&k=20&c=Tf9AB_vCLVO40ocTWRHN8DUDW5B9vSgtAxG1kRkWlJM=",
		platform: "Coursera",
		url: "https://www.coursera.org/specializations/cyber-security",
		description:
			"Gain foundational skills in cybersecurity, including risk assessment, cryptography, and security principles.",
		language: "English",
		duration: {
			total_hours: 40,
			weeks: 5,
			weekly_effort_hours: 8,
		},
		difficulty_level: "Intermediate",
		skills_covered: [
			"Network security",
			"Security protocols",
			"Risk management",
		],
		learn: [
			"Understand the fundamentals of network security and its importance",
			"Learn about cryptography and its applications in securing data",
			"Develop skills for assessing and managing security risks",
			"Gain insights into various security protocols and their implementations",
		],
		instructors: [
			{
				name: "R. Kevin McCarthy",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/rkevinmccarthy",
			},
		],
		ratings: {
			average_rating: 4.8,
			number_of_reviews: 1500,
			enrollment: 800,
			liked_percent: 96,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$199",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c700",
		course_title: "Python for Everybody",
		course_cover:
			"https://d3s1xydsbc15sr.cloudfront.net/media/elearning/skill/Python-min.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/specializations/python",
		description:
			"Learn to program in Python and improve your data analysis skills.",
		language: "English",
		duration: {
			total_hours: 40,
			weeks: 5,
			weekly_effort_hours: 8,
		},
		difficulty_level: "Beginner",
		skills_covered: ["Python programming", "Data manipulation", "Web scraping"],
		learn: [
			"Fundamentals of Python programming and syntax",
			"How to manipulate and analyze data using Python",
			"Techniques for web scraping and working with APIs",
			"Basic concepts of data visualization and reporting",
		],
		instructors: [
			{
				name: "Charles Severance",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/drchuck",
			},
		],
		ratings: {
			average_rating: 4.7,
			number_of_reviews: 5580,
			enrollment: 9807,
			liked_percent: 89,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c701",
		course_title: "Introduction to Quantum Computing",
		course_cover:
			"https://elearn.nptel.ac.in/wp-content/uploads/2024/02/Quantum-Computing-580x309.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/quantum-computing",
		description:
			"Learn the fundamentals of quantum computing and its applications in modern technology.",
		language: "English",
		duration: {
			total_hours: 20,
			weeks: 4,
			weekly_effort_hours: 5,
		},
		difficulty_level: "Intermediate",
		skills_covered: ["Quantum mechanics", "Quantum algorithms", "Cryptography"],
		learn: [
			"Basic principles of quantum mechanics and their relevance to computing",
			"Understanding quantum algorithms and their advantages",
			"Applications of quantum computing in cryptography and data security",
			"Exploration of current research and developments in quantum technology",
		],
		instructors: [
			{
				name: "John Preskill",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/jpreskill",
			},
		],
		ratings: {
			average_rating: 4.6,
			number_of_reviews: 15687,
			enrollment: 8659,
			liked_percent: 95,
		},
		certificate: {
			offered: true,
			type: "Shareable Certificate",
			price: "$49",
			financial_aid: true,
		},
	},
	{
		id: "60f5b704fc13ae34d201c702",
		course_title: "Introduction to Data Science",
		course_cover:
			"https://nearlearn.com/public/images/data-science-python-course-in-bangalore.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/data-science",
		description:
			"Explore the field of data science, including data analysis and visualization techniques.",
		language: "English",
		duration: {
			total_hours: 40,
			weeks: 4,
			weekly_effort_hours: 10,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Data analysis",
			"Data visualization",
			"Statistical inference",
		],
		learn: [
			"Fundamental concepts of data science and its applications",
			"Techniques for data collection and cleaning",
			"Data visualization tools and methodologies",
			"Statistical methods for data analysis and interpretation",
		],
		instructors: [
			{
				name: "Marta N. N. Mendes",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/martanm",
			},
		],
		ratings: {
			average_rating: 4.4,
			number_of_reviews: 987,
			enrollment: 9878,
			liked_percent: 94,
		},
		certificate: {
			offered: false,
		},
	},
	{
		id: "60f5b704fc13ae34d201c703",
		course_title: "COVID-19 Contact Tracing",
		course_cover:
			"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2020/6/shutterstock_1710910393.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/covid-19-contact-tracing",
		description:
			"Learn about the principles of contact tracing and its role in controlling the COVID-19 pandemic.",
		language: "English",
		duration: {
			total_hours: 4,
			weeks: 1,
			weekly_effort_hours: 4,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Epidemiology",
			"Contact tracing",
			"Public health strategies",
		],
		learn: [
			"Fundamentals of contact tracing and its importance in public health",
			"Methods and techniques used in effective contact tracing",
			"Understanding the role of contact tracing in controlling the spread of COVID-19",
			"Ethical considerations and privacy concerns in contact tracing",
		],
		instructors: [
			{
				name: "Yale University",
				title: "Institution",
				profile_url: "https://www.coursera.org/instructor/yale",
			},
		],
		ratings: {
			average_rating: 4.8,
			number_of_reviews: 1500,
			enrollment: 800,
			liked_percent: 96,
		},
		certificate: {
			offered: false,
		},
	},
	{
		id: "60f5b704fc13ae34d201c704",
		course_title: "AI For Everyone",
		course_cover:
			"https://cdn.prod.website-files.com/62d9b9c78f111f03f778e150/66a75fa901284db3241a196c_Hero%20image%20AI.png",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/ai-for-everyone",
		description:
			"An introduction to artificial intelligence, its applications, and how it affects our lives.",
		language: "English",
		duration: {
			total_hours: 8,
			weeks: 4,
			weekly_effort_hours: 2,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Understanding AI",
			"Machine learning concepts",
			"AI applications",
		],
		learn: [
			"Basic concepts of artificial intelligence and machine learning",
			"Real-world applications of AI across various industries",
			"Impact of AI on society and ethical considerations",
			"How to think about AI in a business context",
		],
		instructors: [
			{
				name: "Andrew Ng",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/andrewwng",
			},
		],
		ratings: {
			average_rating: 4.7,
			number_of_reviews: 5500,
			enrollment: 8089,
			liked_percent: 90,
		},
		certificate: {
			offered: false,
		},
	},
	{
		id: "60f5b704fc13ae34d201c705",
		course_title: "The Science of Well-Being",
		course_cover:
			"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/de/e250c02c7f11e4a56e09598f8b6c89/PFA.png",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/the-science-of-well-being",
		description:
			"Learn about the psychology of happiness and how to build a fulfilling life.",
		language: "English",
		duration: {
			total_hours: 19,
			weeks: 10,
			weekly_effort_hours: 2,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Positive psychology",
			"Behavioral science",
			"Habit formation",
		],
		learn: [
			"Understanding the concepts of happiness and well-being",
			"Strategies to improve mental health and life satisfaction",
			"How to build and maintain positive habits",
			"Evidence-based practices for increasing happiness",
		],
		instructors: [
			{
				name: "Laurie Santos",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/lauriesantos",
			},
		],
		ratings: {
			average_rating: 4.4,
			number_of_reviews: 987,
			enrollment: 9878,
			liked_percent: 94,
		},
		certificate: {
			offered: false,
		},
	},
	{
		id: "60f5b704fc13ae34d201c706",
		course_title: "Learning How to Learn",
		course_cover:
			"https://images.ctfassets.net/aq13lwl6616q/6VWcUgLgG0SU55ORlILe2S/e186361aeb48561bcd19ae6486577022/Learning_to_Learn.jpg",
		platform: "Coursera",
		url: "https://www.coursera.org/learn/learning-how-to-learn",
		description:
			"Learn effective learning techniques from neuroscience and cognitive psychology.",
		language: "English",
		duration: {
			total_hours: 15,
			weeks: 4,
			weekly_effort_hours: 3.5,
		},
		difficulty_level: "Beginner",
		skills_covered: [
			"Study techniques",
			"Memory enhancement",
			"Time management",
		],
		learn: [
			"Techniques to improve learning efficiency",
			"How to tackle procrastination and distractions",
			"Strategies for better memory retention",
			"Understanding the science behind how we learn",
		],
		instructors: [
			{
				name: "Barbara Oakley",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/barbaraoakley",
			},
			{
				name: "Terrence Sejnowski",
				title: "Instructor",
				profile_url: "https://www.coursera.org/instructor/terrysejnowski",
			},
		],
		ratings: {
			average_rating: 4.7,
			number_of_reviews: 5580,
			enrollment: 9807,
			liked_percent: 89,
		},
		certificate: {
			offered: false,
		},
	},
];
