import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaChevronRight } from "react-icons/fa";
import { MdOutlineFileDownload, MdOpenInNew } from "react-icons/md";
import BreadCrumbs from "../../components/BreadCrumbs";
import { courseDetails } from "../../data";
import icon_highlight from "../../assets/icon_highlight.svg";
import icon_note from "../../assets/icon_note.svg";

const VideoSection = () => {
	const [toggle, setToggle] = React.useState(true);
	const { name } = useParams();
	const data = courseDetails[name.replace(/^\d+-/, '')];
	const [view, setView] = React.useState(data.content[0].id);
	const [tab, setTab] = React.useState("notes");

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className="h-screen overflow-hidden">
			<div className="flex">
				<div
					className={`${
						toggle ? "w-96 pl-10" : "w-16"
					} text-blue-500 flex flex-col transition-all duration-300 ease-out border-r-2 shadow-lg`}
				>
					<span
						className="flex gap-4 text-2xl p-5 cursor-pointer"
						onClick={handleToggle}
					>
						<FaBars />
						{toggle && <p className="text-xl leading-[1.4]">Hide menu</p>}
					</span>

					<div
						className={`${toggle ? "visible" : "hidden"} overflow-auto h-full`}
					>
						{data?.content.map((item) => {
							return (
								<div
									key={item.id}
									className={`p-5 text-xl flex hover:bg-gray-100 items-center gap-3 border-l-8 hover:border-blue-300 text-slate-800 cursor-pointer ${
										view == item.id
											? "border-blue-400 bg-gray-200"
											: "border-white"
									}`}
									onClick={() => setView(item.id)}
								>
									<div>{item.icon}</div>
									<div className="flex flex-col">
										<h3 className="text-lg">
											<span className="font-semibold">
												{item?.type?.slice(0, 1).toUpperCase() +
													item?.type?.slice(1) +
													": "}
											</span>
											{item.name}
										</h3>
										<p className="text-[16px]">{item.duration}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="relative flex flex-col flex-grow h-screen text-blue-600 p-5 px-10">
					<div className="flex w-full justify-between mb-10">
						<BreadCrumbs>
							<NavLink to="/">
								<FaHome />
							</NavLink>
							<NavLink to="">Module 1</NavLink>
							<NavLink to="">Sample 1</NavLink>
						</BreadCrumbs>
						<NavLink className="flex gap-2 items-center text-xl" to="">
							Next <FaChevronRight />
						</NavLink>
					</div>

					{data?.content.map((item) => {
						if (view === item.id) {
							return (
								<div
									key={item.id}
									className="flex relative flex-col gap-4 h-full"
								>
									<h2 className="text-4xl font-semibold">{item.name}</h2>

									<div className="overflow-y-auto h-full">
										<div className="sticky max-h-[500px] min-h-96 h-full w-auto my-5 bg-slate-100 border-blue-400 border-2 rounded-[30px] flex justify-center overflow-hidden">
											<video
												src={item.vid}
												controls
												className="max-h-[500px] w-auto"
											></video>
										</div>
										<div className="flex flex-col overflow-hidden max-h-80">
											<div className="flex *:p-5 *:text-xl border-b-2 shadow hover:*:bg-gray-100 hover:*:border-blue-300 *:border-b-[5px] *:cursor-pointer">
												<h3
													className={`${
														tab === "notes"
															? "border-blue-400 bg-gray-200 focus:bg-gray-200"
															: "border-white"
													}`}
													onClick={() => setTab("notes")}
												>
													Notes
												</h3>
												<h3
													className={`${
														tab === "downloads"
															? "border-blue-400 bg-gray-200 focus:bg-gray-200"
															: "border-white"
													}`}
													onClick={() => setTab("downloads")}
												>
													Downloads
												</h3>
												<h3
													className={`${
														tab === "discuss"
															? "border-blue-400 bg-gray-200 focus:bg-gray-200"
															: "border-white"
													}`}
													onClick={() => setTab("discuss")}
												>
													Discuss
												</h3>
											</div>
											<div className="w-full overflow-y-auto">
												{tab === "notes" && (
													<>
														<div className="flex gap-2 justify-center p-5 ">
															<img
																className="w-32 h-32"
																src={icon_note}
																alt="note"
															/>
															<img
																className="w-32 h-32"
																src={icon_highlight}
																alt="note"
															/>
														</div>
														<p className="text-center text-slate-700">
															This feature is not available currently. Thank you
															for your patience.
														</p>
													</>
												)}

												{tab === "downloads" && (
													<div>
														<a
															className="flex gap-2 items-center text-xl p-5 text-blue-500"
															href={item.vid}
															download=""
														>
															<MdOutlineFileDownload className="size-7" />
															Download Lecture Video
														</a>
													</div>
												)}

												{tab === "discuss" && (
													<div className="flex flex-col gap-3">
														<p className=" text-slate-700 text-base text-wrap w-3/4">
															You can visit the Forums page to see all the
															different topics and discussions that are
															available. From there, you can post a question,
															start a new discussion, or join an existing
															conversation.
														</p>
														<NavLink
															className="flex text-xl items-center text-blue-500"
															to=""
															target="_blank"
														>
															<MdOpenInNew />
															Discuss
														</NavLink>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default VideoSection;
