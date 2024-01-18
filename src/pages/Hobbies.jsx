import { AiFillGithub } from 'react-icons/ai';
import { MdMonitor } from 'react-icons/md';

function Hobbies() {
  return (
    <div className="m-auto my-32 flex max-w-screen-xl flex-col items-center gap-10 px-8 py-8 text-left">
      <h2 className="mb-4 text-wrap text-3xl leading-normal">
        What <span className="text-yellow-500">I</span> do on my free time
      </h2>
      <div className="flex  flex-col items-center justify-center gap-4 p-4 py-6 shadow-md shadow-yellow-400 transition-all duration-500 lg:max-w-[32%] hover:lg:scale-105">
        <h2 className="text-xl">Cooking</h2>
        <div className="flex flex-col gap-3">
          <div>
            <img src="../src/assets/cooking.png" alt="cooking" />
          </div>
          <div className="m-auto my-5 w-[90%]">
            Cooking fills my heart with joy as the kitchen transforms into a
            lively stage for a symphony of sizzling sounds and aromatic
            delights. Each culinary adventure becomes a celebration, crafting
            not just meals but moments of pure happiness.To help myself, i have
            made this web app for Recipes.
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <a
            href="https://forkify-reactversion.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex cursor-pointer items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 text-white transition-all duration-300 hover:bg-yellow-600  ">
              <MdMonitor className="text-2xl" />
              <span>Demo</span>
            </button>
          </a>
          <a
            href="https://github.com/YiPei1994/forktify-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex cursor-pointer items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 text-white transition-all duration-300 hover:bg-yellow-600 ">
              {' '}
              <AiFillGithub className="text-2xl" /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
