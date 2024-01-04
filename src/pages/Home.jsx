import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Home() {
  return (
    <div className="mainBlock  flex flex-col items-center px-6 py-40 pb-10">
      <h1 className="mb-4 text-3xl leading-normal		">
        Hey, I&apos;m{' '}
        <span className="uppercase text-yellow-500">Yi Pei Zhu 👋</span>,
        <br />
        your
        <span className=" text-yellow-500"> Frontend Maestro</span>!
      </h1>
      <div className="mb-12 mt-20 w-full">
        <img src="../src/assets/developer.svg" alt="developer" />
      </div>
      <p className="my-5 px-4 text-xl">
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

      <div className="m-auto w-2/5">
        <img className="h-auto " src="../src/assets/avatar.svg" alt="logo" />
      </div>
      <div className="flex flex-col items-center gap-5 text-center">
        <h4 className="text-2xl">Find me on</h4>
        <div className="flex w-full items-center">
          <span>
            {' '}
            <a href="/">
              <AiFillFacebook className="h-12 w-20" />
            </a>{' '}
          </span>
          <span>
            <a href="/">
              <AiFillLinkedin className="h-12 w-20" />
            </a>
          </span>
          <span>
            <a href="/">
              <AiFillInstagram className="h-12 w-20" />
            </a>
          </span>
          <span>
            {' '}
            <a href="/">
              <AiFillGithub className="h-12 w-20" />
            </a>
          </span>
        </div>
        <p>
          <a href="mailto:studentypz@gmail.com">studentypz@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
