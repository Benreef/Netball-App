import DefaultLayout from "../Layout/DefaultLayout";
// import Paragraph from "../Layout/Paragraph";
import TeamList from './TeamList';
const AboutPage = () => {
	
	return (
    <DefaultLayout>
      <h1>About Page</h1>
      <h1>Netball Statistics</h1>
      <p>A full stack application for teams to improve</p>
      <p>Current Teams added:</p>
      <TeamList />
    </DefaultLayout>
	);
};

export default AboutPage;