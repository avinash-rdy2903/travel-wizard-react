import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

const Signup = () => {
	const [data, setData] = useState({
		fn: "",
		ln: "",
		username: "",
		password: "",
		phone: ""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });		//called the data from above and mapped.
	};

	const handleSubmit = async (e) => {
		e.preventDefault();										// to prevent the default behavior of the browser after form submission.
		//Below we handle the form submission ourselvves.
		try {
			const url = "http://localhost:8080/register";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&				//indicates a clinet side errors.
				error.response.status <= 500
			) {
				setError(error.response.data.message);		//to render error message to the user
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="fn"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="ln"
							onChange={handleChange}
							value={data.lastName}
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Username"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							unique
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<input
							type="phone"
							placeholder="Phone Number"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							required
							className={styles.input}
						/>
																									
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
