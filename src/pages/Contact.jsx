function Contact() {
	return (
		<div className="p-4 md:p-8"> {/* Adjust padding for smaller screens */}
			<h1 className="text-3xl font-bold text-black">Contact Us</h1>
			<form className="space-y-4 mt-4">
				<input
					type="text"
					placeholder="Your Name"
					className="input input-bordered border-2 w-full bg-white"
				/>
				<input
					type="email"
					placeholder="Your Email"
					className="input input-bordered border-2 w-full bg-white"
				/>
				<textarea
					placeholder="Your Message"
					className="textarea textarea-bordered border-2 w-full bg-white"
					rows="4"
				></textarea>
				<button className="btn btn-success w-full">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
