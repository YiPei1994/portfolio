import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Home() {
  return (
    <div className="mainBlock  flex flex-col items-center gap-8 px-6 py-40 pb-10 xl:flex-row xl:flex-wrap xl:justify-center">
      {/* main block */}
      <div className="flex w-full max-w-screen-xl flex-wrap items-center justify-center xl:mt-20  xl:w-4/5 xl:items-start">
        <h1 className="mb-4 w-full text-3xl	leading-normal xl:mt-12 xl:w-1/2 xl:text-5xl xl:leading-relaxed">
          Hey, I&apos;m{' '}
          <span className="uppercase text-yellow-500">Yi Pei Zhu 👋</span>,
          <br />
          your
          <span className=" text-yellow-500"> Frontend Maestro</span>!
        </h1>
        <div className="mb-12 mt-20 w-full md:m-auto md:w-1/2 xl:mr-10 xl:w-2/5">
          <img src="../src/assets/developer.svg" alt="developer" />
        </div>
      </div>
      {/* introducing */}
      <div className="flex max-w-screen-xl flex-col gap-5 xl:m-auto xl:my-20 xl:flex xl:w-4/5 xl:flex-row-reverse">
        <div className="flex flex-col items-center justify-center md:m-auto md:w-4/5 xl:w-3/5">
          <h2 className="text-3xl xl:text-5xl ">
            {' '}
            Let me <span className="text-yellow-500">Intruduce</span> myself
          </h2>
          <p className="text-md my-5 px-4 leading-normal xl:text-xl">
            Greetings! I&apos;m a self-taught frontend developer fueled by a
            dynamic blend of passion and energy for coding. More than a hobby,
            it&apos;s my driving force. Constantly learning and evolving, I
            thrive on the excitement of discovering new technologies. Join me on
            this confident and energetic journey through the ever-expanding
            world of web development! ✨
          </p>
        </div>

        <div className="m-auto flex w-1/2 justify-center xl:w-1/5">
          <img className="h-auto " src="../src/assets/avatar.svg" alt="logo" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 text-center">
        <h4 className="my-4 text-3xl leading-normal ">Find me on</h4>
        <div className="flex w-full items-center justify-center">
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
        <p className="text-md xl:text-xl">
          Feel free to{' '}
          <a className="text-yellow-500 " href="mailto:studentypz@gmail.com">
            Contact
          </a>{' '}
          with me
        </p>
      </div>
    </div>
  );
}

export default Home;
