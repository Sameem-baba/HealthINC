/* eslint-disable react/no-unescaped-entities */
type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <div className="container mx-auto md:h-screen min-h-fit px-8 mt-20 md:mt-0 w-full flex flex-col text-white md:flex-row justify-between items-center">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-medium bg-cyan-100 text-cyan-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Coming soon
        </p>
        <p className="text-6xl font-bold">
          Get Notified <br /> When we Launch{" "}
        </p>
        <p className="text-base">"Don't Worry we will not spam you ."</p>
        <div className="flex gap-5">
          <input
            placeholder="Enter you email..."
            type="email"
            className="border border-gray-200 text-black rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4"
          />
          <button className="px-6 py-3 bg-gradient-to-r text-xs from-[#aacee0] to-[#b2eded] rounded-2xl hover:scale-95 duration-300 transition text-cyan-800 shadow-xl font-medium">
            Notify Me
          </button>
        </div>
      </div>
      <img src="/travel.png" className="max-w-xl w-full " alt="" />
    </div>
  );
};

export default ComingSoon;
