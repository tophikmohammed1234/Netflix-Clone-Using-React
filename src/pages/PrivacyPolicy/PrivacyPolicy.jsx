import React from "react";
import "./ProvacyPolicy.css";

const PrivacyPolicy = () => {
	return (
		<div className="privacy-policy-container">
			<h1>Privacy Policy</h1>
			<p>
				This privacy policy explains how we collect, use, and protect your
				information when you use our Netflix Clone project.
			</p>

			<h2>Information We Collect</h2>
			<p>
				We collect the following personal information when you register or log
				in to our site:
			</p>
			<ul>
				<li>Email address</li>
				<li>Password (stored securely via Firebase Authentication)</li>
				<li>
					IP address and device information (collected by Firebase for security
					purposes)
				</li>
			</ul>

			<h2>How We Use Your Information</h2>
			<p>
				Your information is used solely for authentication purposes to allow you
				to access our website.
			</p>

			<h2>Security</h2>
			<p>
				We use Firebase, which provides industry-standard security measures to
				protect your data.
			</p>

			<h2>Third-Party Services</h2>
			<p>
				We use Firebase for authentication, and it may collect additional
				information such as IP addresses for security purposes.
			</p>

			<h2>Contact Us</h2>
			<p>
				If you have any questions about this privacy policy, please contact us
				at <br />
				<a href="mailto:tofikmohammed330837@gmail.com">
					tofikmohammed330837@gmail.com
				</a>
				.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
