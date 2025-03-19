const About: React.FC = () => {
  return (
    <section className="p-8 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold text-white">About Me</h2>
      <div className="w-full h-full">
        <div className="w-1/3">
          <h2>Past</h2>
        </div>
        <div className="w-1/3">
          <h2>Present</h2>
        </div>
        <div className="w-1/3">
          <h2>Future</h2>
        </div>
      </div>
    </section>
  );
};
export default About;
