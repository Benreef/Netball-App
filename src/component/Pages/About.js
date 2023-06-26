import DefaultLayout from "../Layout/DefaultLayout";
// import Paragraph from "../Layout/Paragraph";

const AboutPage = () => {
	const aboutMeParagraph = `
		Hi I am a passionate developer who loves CSS and FE development!
	`;

	return (
    <DefaultLayout>
      <h1>About Page</h1>
			    
      <h1>Netball Statistics</h1>
      <p>A full stack application for teams to improve</p>
    </DefaultLayout>
	);
};

export default AboutPage;