import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io5';
import { FaCss3Alt } from 'react-icons/fa6';
import { SiTypescript } from 'react-icons/si';
import { IoIosGitBranch } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { SiVisualstudio } from 'react-icons/si';

function About() {
  return (
    <>
      <div className="mt-32 flex flex-col items-center px-8 py-8 text-left">
        <h1 className="mb-4 text-wrap text-4xl leading-normal">
          Know who <span className="text-yellow-500">I am</span>
        </h1>
        <p className="text-lg">
          Hi everyone, I am Yi Pei Zhu from China, currently residing in the
          Czech Republic. <br />
          I am employed as a junior frontend developer at Virtualzoom. <br />
          <br />
          My fields of interest are building{' '}
          <span className="text-xl italic text-yellow-500">
            Web Technologies and Products
          </span>{' '}
          using{' '}
          <span className="text-xl italic text-yellow-500">JavaScript</span> &{' '}
          <span className="text-xl italic text-yellow-500">TypeScript</span>.
          Whenever possible, I also apply{' '}
          <span className="text-xl italic text-yellow-500">
            Modern JavaScript Libraries and Frameworks{' '}
          </span>{' '}
          like <span className="text-xl italic text-yellow-500">React.js</span>.
        </p>
      </div>
      <div className="flex flex-col items-center px-8 py-8 text-left">
        <h2 className="mb-4 text-wrap text-4xl leading-normal">
          My <span className="text-yellow-500">Stacks</span>{' '}
        </h2>
        <div className="flex w-full flex-wrap justify-between">
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <IoLogoHtml5 className="text-8xl text-yellow-500" />{' '}
          </p>
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <FaCss3Alt className="text-8xl text-yellow-500" />{' '}
          </p>
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <IoLogoJavascript className="text-8xl text-yellow-500" />{' '}
          </p>
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <IoIosGitBranch className="text-8xl text-yellow-500" />{' '}
          </p>
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <FaReact className="text-8xl text-yellow-500" />{' '}
          </p>
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <SiTypescript className="text-8xl text-yellow-500" />{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center px-8 py-8 text-left">
        <h2 className="m-4 text-wrap  text-4xl leading-normal">
          Tools I <span className="text-yellow-500">Use</span>{' '}
        </h2>
        <div className="flex w-full flex-wrap justify-between">
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <FaWindows className="text-8xl text-yellow-500" />{' '}
          </p>
          <p className="m-2 flex w-[42%] items-center justify-center border border-yellow-500 py-5">
            <SiVisualstudio className="text-8xl text-yellow-500" />{' '}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
