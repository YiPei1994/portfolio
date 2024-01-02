import GitHubCalendar from 'react-github-calendar';

function About() {
  return (
    <div className="w-full">
      <GitHubCalendar
        className="m-w w-full"
        username="YiPei1994"
        blockSize={8}
        blockMargin={4}
        color="#fbd214"
        fontSize={12}
      />
    </div>
  );
}

export default About;
