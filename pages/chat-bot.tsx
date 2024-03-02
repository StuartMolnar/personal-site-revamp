import Navbar from "@/components/Navbar";
import LinkButton from "@/components/LinkButton";

function ChatBot() {
    return (
      <div id="screen-top" className="min-h-screen text-black bg-white">
        <Navbar />
          
        <main className="flex flex-col items-center justify-center max-w-[1250px] mx-auto min-h-[80vh] px-6 pt-8 pb-10 font-normal md:px-12 xl:pt-16 xl:px-32">

          <div className="flex flex-col gap-y-6">
            <h1 className="font-heavy text-title md:text-hero">Page Under Construction</h1>

            <p className="">This page will feature a <a href="https://riominerals.com/" className="font-heavy text-red hover:text-black">League of Legends NLP Chat Bot</a> project, utilizing popular tools like <span className="font-heavy text-red">OpenAI&apos;s GPT</span> models, a vector database named <span className="font-heavy text-red">Pinecone</span>, and <span className="font-heavy text-red">web-scraping methods</span> - all containerized within a <span className="font-heavy text-red">microservice architecture</span>.</p>
            <p className="">Feel free the view the <span className="font-heavy text-red">source code</span> below!</p>

            <div className="flex gap-x-2 md:gap-x-4">
            <LinkButton
                href="https://github.com/StuartMolnar/league-nlp-chat"
                imgSrc="GitHub.svg"
                buttonText="GitHub"
              />
            </div>
          </div>
        
      </main>
    </div>
  );
}   

export default ChatBot;
