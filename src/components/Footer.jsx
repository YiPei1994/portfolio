import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className=" mt-auto  flex w-full flex-col items-center gap-5 bg-slate-100 py-10 text-slate-900">
      <div className="flex w-full flex-col items-center gap-5">
        <p className="m-auto w-4/5">
          Developed by Yi Pei Zhu <br /> Copyright © {year}
        </p>
        <div className="flex">
          <span>
            {' '}
            <a href="/">
              <AiFillFacebook className="mx-2 h-6 w-6" />
            </a>{' '}
          </span>
          <span>
            <a href="/">
              <AiFillLinkedin className="mx-2 h-6 w-6" />
            </a>
          </span>
          <span>
            <a href="/">
              <AiFillInstagram className="mx-2 h-6 w-6" />
            </a>
          </span>
          <span>
            {' '}
            <a href="/">
              <AiFillGithub className="mx-2 h-6 w-6" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
