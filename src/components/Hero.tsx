const Hero = () => {
  return (
    <>
      <div className="lg:bg-[url('/hero.png')] bg-[url('/95.png')] h-screen bg-cover bg-center  lg:bg-right-top  bg-gray-100 relative poppins">
        <div className="absolute lg:w-[50%]  mx-5 lg:ml-16 space-y-5 lg:space-y-8 mt-8 lg:top-36">
          <div className="text-center lg:text-left text-4xl lg:text-6xl">
            Stereoverse
          </div>
          <div className="font-light text-center lg:text-left lg:pr-16  lg:text-xl">
            Discover exceptional sound with Stereoverse. Our premium headphones
            blend cutting-edge technology and sleek design, offering
            unparalleled audio experiences. Elevate your listening journey with
            Stereoverse – where quality meets style.
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-green-400 px-3.5 py-2.5 rounded-xl text-xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
