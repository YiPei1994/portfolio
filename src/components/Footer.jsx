import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div className=" mt-auto  flex w-full flex-col items-center gap-5 bg-slate-100 py-10 text-slate-900">
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
          Email: <a href="mailto:studentypz@gmail.com">studentypz@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
