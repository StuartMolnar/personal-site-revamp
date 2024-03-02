import Navbar from "@/components/Navbar";
import LinkButton from "@/components/LinkButton";

function RioMinerals() {
    return (
      <div id="screen-top" className="min-h-screen text-black bg-white">
        <Navbar />
          
        <main className="flex flex-col items-center justify-center max-w-[1250px] mx-auto min-h-[80vh] px-6 pt-8 pb-10 font-normal md:px-12 xl:pt-16 xl:px-32">

          <div className="flex flex-col gap-y-6">
            <h1 className="font-heavy text-title md:text-hero">Page Under Construction</h1>

            <p className="">This page will feature <a href="https://riominerals.com/" className="font-heavy text-red hover:text-black">riominerals.com</a>, a full-scale rebrand of the established mining company's website.</p>
            <p className="">Feel free the view the <span className="font-heavy text-red">live site</span> or the <span className="font-heavy text-red">source code</span> below!</p>

            <div className="flex gap-x-2 md:gap-x-4">
              <LinkButton
                href="https://riominerals.com/"
                imgSrc="Live.svg"
                buttonText="Live Site"
              />
            <LinkButton
                href="https://github.com/StuartMolnar/Rio-Minerals-Site"
                imgSrc="GitHub.svg"
                buttonText="GitHub"
              />
            </div>
          </div>
        
      </main>
    </div>
  );
}   

export default RioMinerals;
