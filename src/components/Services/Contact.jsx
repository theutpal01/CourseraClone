function Contact() {
	return (
		<div className="p-8 max-w-md mx-auto"> {/* Centering the form and limiting its width */}
			<h1 className="text-3xl font-bold text-black text-center">Contact Us</h1> {/* Centered heading */}
			<form className="space-y-4 mt-4">
				<input
					type="text"
					placeholder="Your Name"
					className="input input-bordered border-2 w-full bg-white p-2" // Added padding for better touch target
				/>
				<input
					type="email"
					placeholder="Your Email"
					className="input input-bordered border-2 w-full bg-white p-2" // Added padding for better touch target
				/>
				<textarea
					placeholder="Your Message"
					className="textarea textarea-bordered border-2 w-full bg-white p-2" // Added padding for better touch target
					rows="4"
				></textarea>
				<button className="btn btn-success w-full py-2">Submit</button> {/* Added padding for button */}
			</form>
		</div>
	);
}

export default Contact;
