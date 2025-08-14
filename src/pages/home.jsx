import { motion } from "framer-motion";
import { Header } from "../componats/header";

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
      <Header />

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
      <section className="w-full bg-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 min-h-[700px]">
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
    </>
  );
};
