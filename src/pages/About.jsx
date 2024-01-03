function About() {
  return (
    <div className="mt-28 flex flex-col items-center px-8 py-8 text-left">
      <h1 className="mb-4 text-wrap text-4xl leading-normal">
        Know who <span className="text-yellow-500">I am</span>
      </h1>
      <p className="text-lg">
        Hi everyone, I am Yi Pei Zhu from China, currently residing in the Czech
        Republic. <br />
        I am employed as a junior frontend developer at Virtualzoom. <br />
        <br />
        My fields of interest are building{' '}
        <span className="text-xl italic text-yellow-500">
          Web Technologies and Products
        </span>{' '}
        using <span className="text-xl italic text-yellow-500">JavaScript</span>{' '}
        & <span className="text-xl italic text-yellow-500">TypeScript</span>.
        Whenever possible, I also apply{' '}
        <span className="text-xl italic text-yellow-500">
          Modern JavaScript Libraries and Frameworks{' '}
        </span>{' '}
        like <span className="text-xl italic text-yellow-500">React.js</span>.
      </p>
    </div>
  );
}

export default About;
