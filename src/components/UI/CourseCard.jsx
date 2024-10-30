import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CourseCard = ({
	id,
	images,
	name,
	skills,
	rating,
	reviews,
	level,
	type,
	duration,
}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/course/${id}`);
	};

	return (
		<div
			className="max-w-72 p-1 w-full rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
			onClick={handleRedirect}
		>
			<img
				src={images.path}
				alt=""
				className="h-44 w-full object-contain bg-white p-3 rounded-xl"
			/>
			<div className="px-5 py-2 flex flex-col ">
				<div className="text-neutral">
					<h2 className="font-semibold leading-relaxed">{name}</h2>
					<p className="py-2 text-sm">
						<span className="font-semibold">Skills you'll gain: </span>
						{skills.join(", ")}
					</p>
				</div>
				<div className="text-xs text-neutral">
					<p className="mt-5 flex items-center gap-2">
						<FaStar className="text-yellow-400" /> {rating} ({reviews})
					</p>
					<p>
						{level} · {type} · {duration}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
