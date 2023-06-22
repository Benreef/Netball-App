import DefaultLayout from "../Layout/DefaultLayout";
// import Spline from '@splinetool/react-spline'
// import { Application } from '@splinetool/runtime';

const HomePage = () => {
	const aboutMeParagraph = `
		Hi I am a passionate developer who loves CSS and FE development!
	`;

	return (
    <DefaultLayout>
      <h1>Netball Statistics</h1>
      <p>A full stack application for teams to improve</p>
      
      {/* <Spline scene="https://prod.spline.design/QpWM6EpdU6xHc8zu/scene.splinecode" /> */}
    </DefaultLayout>

	);
};

export default HomePage;