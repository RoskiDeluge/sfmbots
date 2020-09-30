export default function Home() {
  return (
    <div className="bg-blue-100 py-20 px-10 text-blue-900">
      <div className="container mx-auto">
        <h1 className="mb-12 text-5xl font-bold text-center bg-gradient-to-br from-blue-700 to-red-400 text-transparent bg-clip-text">
          Good Bots
        </h1>
        <h2 className="mb-8 text-2xl">
          We help you build a chatbot experience that will grow your audience
          and drive conversions within your existing marketing campaigns.
        </h2>
        {/* Sales Copy: Dream/Pain/Fix */}
        <div className="mb-10 text-1xl relative">
          <div className="absolute text-3xl top-0 left-o select-none transform -translate-y-5 -translate-x-0 opacity-25">
            🤖 💙 💻 📱
          </div>
          <p>
            Grow your audience naturally and conversationally. Go where your
            audience is and talk to them. Gather specific insights about the
            type of content that your audience likes.
          </p>
        </div>
        <p></p>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className=" bg-white border-2 rounded-lg shadow p-4 text-gray-700 text-xl space-x-3">
            <span className="inline-block py-1 px-3 rounded bg-red-600 text-red-100">
              Step 1
            </span>
            <span>Create a bot</span>
          </div>
          <div className=" bg-white border-2 rounded-lg shadow p-4 text-gray-700 text-xl space-x-3">
            <span className="inline-block py-1 px-3 rounded bg-red-600 text-red-100">
              Step 2
            </span>
            <span>Link your bot with your Facebook page</span>
          </div>
          <div className=" bg-white border-2 rounded-lg shadow p-4 text-gray-700 text-xl space-x-3">
            <span className="inline-block py-1 px-3 rounded bg-red-600 text-red-100">
              Step 3
            </span>
            <span>Create a welcome sequence for your audience</span>
          </div>
        </div>
        <div className="prose">
          <h2>This is a new section</h2>
          <p>
            XOXO pour-over shaman, squid listicle gastropub lyft typewriter
            selfies whatever sustainable chillwave. Polaroid farm-to-table
            kombucha etsy leggings.
          </p>
          <p>
            Kogi hexagon pug palo santo forage post-ironic squid kitsch echo
            park williamsburg. Beard 8-bit humblebrag YOLO, raw denim mumblecore
            semiotics whatever copper mug hoodie live-edge quinoa trust fund
            post-ironic paleo.
          </p>
        </div>
        {/* Features */}
        {/* Buy Button */}
        {/* Testimonials */}
        {/* FAQ's */}
      </div>
    </div>
  );
}
