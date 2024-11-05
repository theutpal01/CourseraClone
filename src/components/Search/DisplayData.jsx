import CourseCard from "../Views/CourseCard";
import Pagination from "../UI/Pagination";
import { useEffect, useState } from "react";

const DisplayData = ({ data }) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPge, SetPostsPerPage] = useState(9);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			setPosts(data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	const indexOfLastPost = currentPage * postsPerPge;
	const indexOfFirstPost = indexOfLastPost - postsPerPge;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto py-3">
				{!loading &&
					currentPosts.map((course) => (
						<CourseCard key={course.id} course={course} />
					))}
			</div>

			<div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
				{!loading && (
					<Pagination
						length={posts.length}
						postsPerPage={postsPerPge}
						currentPage={currentPage}
						handlePagination={handlePagination}
					/>
				)}
			</div>
		</>
	);
};

export default DisplayData;
