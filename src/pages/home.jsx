import { motion } from "framer-motion";
import { Header } from "../componats/header";
import { Footer } from "../componats/footer";

export const Home = () => {
  const custom_shadow = {
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Header transparent />

      {/* Fixed Background Section */}
      <div
        className="relative h-screen w-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/header-hero.jpg')",
        }}
      >
        {/* Green Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(82, 94, 94, 0.3), rgba(0, 0, 0, 0.5))",
          }}
        ></div>

        {/* Text on top */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg max-w-3xl leading-snug sm:leading-normal md:leading-normal">
            Journey into the Heart <br className="hidden sm:block" /> of Nature
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg mt-4 drop-shadow-md max-w-2xl leading-relaxed">
            Discover untouched trails, serene landscapes, <br className="hidden md:block" />
            and adventures that breathe with life.
          </p>
        </div>
      </div>

      {/* Scrollable content below */}
      <section className="w-full bg-[#faf8f8] py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 min-h-[700px]">
        {/* Left Side - Overlapping Images */}
        <div className="relative w-full md:w-[65%] flex flex-col items-center md:items-start">
          {/* Nature 1 */}
          <motion.img
            src="/home_p_image1.jpg"
            alt="Nature 1"
            className="block w-[280px] sm:w-[350px] md:w-[420px] h-[300px] sm:h-[380px] md:h-[430px] object-cover mb-6"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            style={custom_shadow}
          />

          {/* Nature 2 */}
          <motion.img
            src="/home_page_e.jpg"
            alt="Nature 2"
            className="block lg:absolute top-10 right-0 w-[300px] md:w-[450px] h-[200px] md:h-[320px] object-cover mb-6 lg:mb-0"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            style={custom_shadow}
          />

          {/* Nature 3 */}
          <motion.img
            src="/nature3.jpg"
            alt="Nature 3"
            className="hidden lg:block absolute bottom-[-40px] left-1/3 w-[150px] md:w-[190px] h-[200px] md:h-[250px] object-cover"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            style={custom_shadow}
          />
        </div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full md:w-[35%] text-center md:text-left"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="italic text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Unseen beauty
          </h2>
          <div className="w-16 h-1 bg-green-500 mb-6 mx-auto md:mx-0"></div>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            The quiet corners where sunlight dances through untouched forests,
            rivers whisper secrets to the wind, and mountains stand timeless
            under starry skies. These hidden places hold stories untold, colors
            unpainted, and peace that feels almost sacred. Traveling here is not
            about distance, but about slowing down, breathing deeply, and
            letting the soul rediscover its connection with the Earth.
          </p>
          <blockquote className="italic text-lg sm:text-xl text-gray-500 mb-8">
            "Travel deep into nature and discover the untouched beauty that
            awakens your soul"
          </blockquote>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300">
            MEET OUR TEAM
          </button>
        </motion.div>
      </section>

      <section className="py-20 bg-[#e6e6e6] overflow-hidden ">
        {/* Heading with animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-extrabold mb-16 
        bg-gradient-to-r from-green-600 to-blue-600 text-transparent 
        bg-clip-text tracking-wide drop-shadow-lg"
        >
          Featured Destinations
        </motion.h2>

        <div className="flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl w-[320px] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src="src/assets/images/mountain/everest.webp"
                  alt="Everest"
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-2xl text-gray-800 tracking-wide">
                  Mount Everest
                </h3>
                <p className="text-gray-600 text-sm font-serif italic">
                  Breathtaking heights and scenic views.
                </p>
                <p className="text-blue-800 text-sm font-medium">
                  <span className="font-semibold">Best time to visit:</span> April to May & September to November
                </p>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Activities:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Trekking</li>
                    <li>Photography</li>
                    <li>Expedition</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl w-[320px] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src="/src/assets/images/forest/amazon_rainforest.jpg"
                  alt="Amazon Rainforest"
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-2xl text-gray-800 tracking-wide">
                  Amazon Rainforest
                </h3>
                <p className="text-gray-600 text-sm font-serif italic">
                  The largest rainforest with unmatched biodiversity.
                </p>
                <p className="text-blue-800 text-sm font-medium">
                  <span className="font-semibold">Best time to visit:</span> June to September
                </p>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Activities:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Wildlife Tours</li>
                    <li>Boat Trips</li>
                    <li>Jungle Trekking</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl w-[320px] overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="overflow-hidden">
                <motion.img
                  src="/src/assets/images/waterfalls/niagara_falls.webp"
                  alt="Niagara Falls"
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-2xl text-gray-800 tracking-wide">
                  Niagara Falls
                </h3>
                <p className="text-gray-600 text-sm font-serif italic">
                  Iconic waterfall and natural wonder.
                </p>
                <p className="text-blue-800 text-sm font-medium">
                  <span className="font-semibold">Best time to visit:</span> June to August
                </p>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Activities:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Boat Tours</li>
                    <li>Sightseeing</li>
                    <li>Photography</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-auto flex flex-col items-center justify-center">
        {/* Fixed Background Image */}
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <img
            src="/bottom_img.jpg"
            alt="Nature Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative w-full flex flex-col items-center justify-center px-4 py-32">
          <p className="text-white font-semibold uppercase tracking-widest mb-4">
            Why Choose Us
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-12 drop-shadow-lg text-center">
            Explore nature, connect, and unwind.
          </h2>

          {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
  <div className="bg-transparent backdrop-blur p-6 rounded-xl shadow-lg border border-white/30 text-white 
                  transform transition duration-300 hover:scale-105">
    <h3 className="font-bold text-xl mb-3">Joyful Experience</h3>
    <p className="text-sm">
      Experience breathtaking landscapes, savor local cuisine,
      and enjoy peaceful surroundings for a truly joyful adventure.
    </p>
  </div>

  <div className="bg-transparent backdrop-blur p-6 rounded-xl shadow-lg border border-white/30 text-white 
                  transform transition duration-300 hover:scale-105">
    <h3 className="font-bold text-xl mb-3">Meet People</h3>
    <p className="text-sm">
      Connect with fellow travelers and nature enthusiasts while exploring scenic
      landscapes and local cultures.
    </p>
  </div>

  <div className="bg-transparent backdrop-blur p-6 rounded-xl shadow-lg border border-white/30 text-white 
                  transform transition duration-300 hover:scale-105">
    <h3 className="font-bold text-xl mb-3">Peaceful & Relaxing</h3>
    <p className="text-sm">
      Enjoy serene landscapes and quiet moments, making your nature escape truly rejuvenating.
    </p>
  </div>
</div>

        </div>
      </section>


      <Footer />
    </>
  );
};
