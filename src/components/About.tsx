const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 text-white text-center">
      <h2 className="text-5xl font-light mb-12">About My</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 max-w-7xl mx-auto">
        {/* Past */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl text-pink-500 mb-4">Past</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            I discovered my passion for programming when I was just 14 years
            old. At first, it was just a hobby, but I quickly became interested
            in web development and the creative possibilities it offered. Over
            the years, I continued to develop my skills and fell more in love
            with building websites.
          </p>
        </div>

        {/* Present */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl text-pink-500 mb-4">Present</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Currently, I am a software engineering and a Software Development
            Engineer, gaining valuable experience in a professional setting. I
            am currently working with Blazor in C# and .NET, developing building
            management systems (BMS) for heat pumps and other applications.In
            free time i also build open source projects and continuously improve
            my frontend skills and backend skills in Javascript.
          </p>
        </div>

        {/* Future */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl text-pink-500 mb-4">Future</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Looking ahead, I’m excited about the future of programming and the
            endless opportunities it presents. I’m confident that my passion and
            skills will allow me to make meaningful contributions to the
            industry in the years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
