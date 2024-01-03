import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mainBlock flex flex-col items-center px-6 py-40 pb-10">
      <h1 className="mb-4 text-3xl leading-normal		">
        Hey, I&apos;m{' '}
        <span className="uppercase text-yellow-500">Yi Pei Zhu 👋</span>,
        <br />
        your
        <span className=" text-yellow-500"> Frontend Maestro</span>!
      </h1>
      <div className="mb-12 mt-28 w-full">
        <img src="../src/assets/developer.svg" alt="developer" />
      </div>
      <p className="my-5">
        A junior to mid-level developer driven by passion and a constant desire
        for self-improvement. Infusing every project with energy and creativity,
        I&apos;m here to redefine the possibilities of frontend development.
        Let&apos;s craft digital dreams together! 🚀✨
      </p>

      <Link
        to="/about"
        className="my-8 block rounded-xl bg-yellow-500 px-6 py-3 hover:bg-yellow-600"
      >
        About Me
      </Link>
    </div>
  );
}

export default Home;
