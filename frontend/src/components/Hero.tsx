import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative isolate pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                AI-Powered Potato Leaf Disease Detection
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Upload a potato leaf image and instantly identify diseases using our trained deep learning model.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
                <span className="glass px-4 py-2 rounded-full border-blue-500/20">Fast Predictions</span>
                <span className="glass px-4 py-2 rounded-full border-emerald-500/20">CNN Classification</span>
                <span className="glass px-4 py-2 rounded-full border-purple-500/20">High Accuracy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
  );
};
