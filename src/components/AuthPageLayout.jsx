import { motion } from "framer-motion";

export default function AuthPageLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Left: form (animated) */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full lg:w-1/2 bg-gray-900 text-white flex justify-center items-center px-6"
      >
        <div className="w-full max-w-md">{children}</div>
      </motion.div>

      {/* Right: image */}
      <div
        className="
          hidden 
          w-1/2 
          bg-auth-mobile 
          sm:bg-auth-tablet 
          lg:bg-auth-desktop 
          bg-cover 
          bg-center 
          lg:block
        "
      />
    </div>
  );
}
