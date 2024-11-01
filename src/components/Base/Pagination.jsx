import { data } from "autoprefixer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Pagination = ({
	variant = "primary",
	postsPerPage,
	length,
	handlePagination,
	currentPage,
}) => {
	const variants = {
		primary: "bg-primary",
		secondary: "bg-secondary",
		tertiary: "bg-tertiary",
	};

	let paginationNumber = [];
	for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
		paginationNumber.push(i);
	}

	function handleClick(pageNum) {
		if (pageNum >= 1 && pageNum <= paginationNumber.length) {
			handlePagination(pageNum);
			window.scroll({ behavior: "smooth", top: 0 });
		}
	}

	return (
		<div className="flex items-center justify-between w-full">
			<p className="text-sm *:text-neutral">
				Showing <span>{paginationNumber[0]}</span> to{" "}
				<span>{paginationNumber[paginationNumber.length - 1]}</span> of <span>{length}</span> results
			</p>
			<nav
				aria-label="Pagination"
				className="isolate inline-flex -space-x-px rounded-md shadow-sm"
			>
				<NavLink
					className={`${
						currentPage === 1
							? "bg-gray-50 cursor-default text-gray-300"
							: "cursor-pointer text-gray-400"
					} relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
					onClick={() => handleClick(currentPage - 1)}
				>
					<span className="sr-only">Previous</span>
					<MdChevronLeft aria-hidden="true" className="h-5 w-5" />
				</NavLink>
				{paginationNumber.map((data) => (
					<NavLink
						key={data}
						onClick={() => handleClick(data)}
						aria-current="page"
						className={`${
							currentPage === data
								? `${variants[variant]} text-white`
								: "text-black border-t border-b"
						} relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
					>
						{data}
					</NavLink>
				))}

				<NavLink
					className={`${
						currentPage === paginationNumber.length
							? "bg-gray-50 cursor-default text-gray-300"
							: "cursor-pointer text-gray-400"
					} relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
					onClick={() => handleClick(currentPage + 1)}
				>
					<span className="sr-only">Next</span>
					<MdChevronRight aria-hidden="true" className="h-5 w-5" />
				</NavLink>
			</nav>
		</div>
	);
};

export default Pagination;
