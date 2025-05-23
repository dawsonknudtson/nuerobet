import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import landingpage from '../frontend/img/landing-page.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Nuerobet - AI Sports Betting Predictions</title>
        <meta name="description" content="AI-powered sports betting predictions and analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900"
          >
            <Link href="/" className="hover:text-gray-700 transition-colors duration-200">
              nuerobet
            </Link>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <Link href="/login">
              <button className="px-4 py-2 text-gray-900 hover:text-gray-700 transition-colors duration-200">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
                Sign Up
              </button>
            </Link>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              AI-Powered Sports Betting
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Leverage artificial intelligence to make smarter betting decisions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Join Waitlist
              </button>
            </motion.div>
          </div>
        </section>

        {/* Separator Line */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-gray-900 my-20"></div>
        </div>

        {/* Hero-2 Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
                Beat the Odds.
              </h2>
              <p className="text-xl text-gray-600">
                Pick a game, get the predictions
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] w-full"
            >
              <Image
                src={landingpage}
                alt="Nuerobet Predictions"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Predictions</h3>
                <p className="text-gray-600">Advanced machine learning models analyze historical data to predict outcomes</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Analysis</h3>
                <p className="text-gray-600">Get instant insights and predictions as games unfold</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Betting</h3>
                <p className="text-gray-600">Make informed decisions with data-driven recommendations</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Nuerobet. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
} 