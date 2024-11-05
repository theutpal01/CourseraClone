import React, { useState } from "react";
import Button from "../UI/Button";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { FaFacebook } from "react-icons/fa";
import { DialogBody, DialogBox, DialogHeader } from "../UI/DialogBox";

const Login = ({ showLogin, onClose, setUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		console.log("Logging in with:", { email, password });
		onClose();
	};

	const loginWithGoogle = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const userInfoResponse = await fetch(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: {
						Authorization: `Bearer ${tokenResponse.access_token}`,
					},
				}
			);

			if (userInfoResponse.ok) {
				const userInfo = await userInfoResponse.json();
				setUser({ name: userInfo.name, email: userInfo.email });
				localStorage.setItem("UserEmail", userInfo.email);
				localStorage.setItem("UserName", userInfo.name);
				onClose(); // Close the popup after setting the user
			} else {
				console.error("Failed to fetch user info");
			}
		},
		onError: () => {
			console.log("Login Failed");
		},
	});

	const handleFacebookSignIn = () => {
		const appId = "YOUR_FACEBOOK_APP_ID"; // Replace with your Facebook App ID
		const redirectUri = "YOUR_REDIRECT_URI"; // Replace with your redirect URI
		const scope = "public_profile,email";
		const authUrl = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}`;

		window.location.href = authUrl; // Redirect to Facebook OAuth page
	};

	return (
		<DialogBox size="sm" dialog={showLogin} handleClose={onClose}>
			<DialogHeader>
				<h2 className="text-3xl text-center">Welcome Back</h2>
			</DialogHeader>
			<DialogBody>
				<div>
					<label className="text-sm" htmlFor="email">
						Email
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="name@gmail.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="border bg-white p-3 my-2 w-full"
					/>
				</div>
				<div>
					<label className="text-sm" htmlFor="password">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Enter Your Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="border p-3 bg-white my-2 w-full"
					/>
				</div>
				<a className="text-blue-600 text-sm">Forgot Password</a>
				<Button
					size="sm"
					onClick={handleLogin}
					variant="primary"
					className="w-full"
				>
					Login
				</Button>
				<div className="flex flex-col justify-between items-center gap-4">
					<p className="text-neutral-content">or</p>
					<Button
						size="sm"
						onClick={() => loginWithGoogle()}
						className="flex items-center justify-center gap-2 w-full"
						type="outlined"
					>
						<FcGoogle />
						Continue with Google
					</Button>
					<Button
						size="sm"
						onClick={handleFacebookSignIn}
						className="flex items-center justify-center gap-2 w-full"
						type="outlined"
					>
						<FaFacebook />
						Continue with Facebook
					</Button>
				</div>
			</DialogBody>
		</DialogBox>
	);
};

export default Login;
