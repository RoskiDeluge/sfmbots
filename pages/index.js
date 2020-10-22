import YouTube from "react-youtube-embed";

export default function Home() {
  return (
    <div className="bg-blue-100 py-20 px-10 text-blue-900">
      <div className="container mx-auto">
        {/* <img className="w-12" src="img/gb_icon.png" /> */}
        <h1 className="mb-12 text-5xl font-bold text-center bg-gradient-to-br from-blue-700 to-red-400 text-transparent bg-clip-text">
          Scheduling Chatbot
        </h1>
        <h2 className="mb-20 text-2xl">
          <em>
            We help you build a chatbot experience that delights your customers
            and saves you time.
          </em>{" "}
          - ChatBert{" "}
          <span>
            <img className="w-10 inline-block" src="img/gb_icon.png" />
          </span>
        </h2>
        <div>
          <YouTube id="pxo92HED7uo" />
        </div>
        {/* Sales Copy: Dream/Pain/Fix */}
        <div className="my-20 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* <div className=" bg-white border-2 rounded-lg shadow p-4 text-gray-700 text-xl space-x-3">
            <a href="https://m.me/sfirstm?ref=book_call" target="_blank">
              <span className="inline-block py-1 px-3 rounded bg-yellow-400 text-blue-900">
                Demo link
              </span>
            </a>
            <span>
              <br />A button or link on your site starts the conversation with
              the scheduling chatbot in Facebook Messenger.
            </span>
          </div> */}
          <div className=" bg-white border-2 rounded-lg shadow p-4 text-gray-700 text-xl space-x-3">
            <span className="inline-block py-1 px-3 rounded bg-red-600 text-red-100">
              <a
                href="https://roberto309082.typeform.com/to/jEEURXrN"
                target="_blank"
              >
                Sign up for the course
              </a>
            </span>
            <span>
              <br />
              We will teach you how to build the chatbot step by step.
            </span>
          </div>
          <div className=" bg-white border-2 rounded-lg shadow p-4 text-gray-700 text-xl space-x-3">
            <span className="inline-block py-1 px-3 rounded bg-red-600 text-red-100">
              <a
                href="https://roberto309082.typeform.com/to/ASsuyb3Y"
                target="_blank"
              >
                Buy a chatbot
              </a>
            </span>
            <span>
              <br />
              We build and manage your scheduling chatbot.
            </span>
          </div>
        </div>
        <div className="prose">
          <h2>Why use a chatbot?</h2>
          <p>
            A chatbot is a program that mimics human interaction. Chatbots are a
            great way to interact with your audience even when you're not
            around.
          </p>
          <h2>Where are they used?</h2>
          <p>
            Chatbots can be created from scratch and offered as a stand alone
            application. Or they can be created on the main instant messaging
            platforms, like Facebook Messenger.
          </p>
          <h2>Benefits of using a scheduling chatbot:</h2>
          <ul>
            <li>Saves you time and frees up staff for other work.</li>
            <li>
              Automatically sends appointment reminders so customers keep their
              appointments.
            </li>
            <li>
              Simple and easy to use interface that customers are used to.
            </li>
            <li>
              You can receive realtime notifications everytime a visitor
              schedules an appointment within your specified working hours.
            </li>
            <li>Manage your appointments through Google calendar.</li>
          </ul>
        </div>
        {/* Features */}
        {/* Buy Button */}
        {/* Testimonials */}
        {/* FAQ's */}
      </div>
      <div className="text-xs text-blue-500 my-10 flex justify-center">
        Made by
        <span className="text-blue-500 underline px-1">
          <a href="https://sfirstm.com/" targe="_blank">
            SFM
          </a>
        </span>
      </div>
    </div>
  );
}
