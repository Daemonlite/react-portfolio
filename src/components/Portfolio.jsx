import air from "../assets/portfolio/air.png";
import watch from "../assets/portfolio/watch.png";
import sign from "../assets/portfolio/sign.png";
import newl from "../assets/portfolio/new.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: air,
    },
    {
      id: 2,
      src: watch,
    },
    {
      id: 3,
      src: sign,
    },
    {
      id: 4,
      src: newl
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-48">
          <p className="text-4xl font-bold inline border-b-1 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here,these are just some side projects that I have
           done there are more projects on Github</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;