function History() {
  return (
    <>
      
        <div>
          <img
            className="h-[200px] flex mx-auto justify-center items-center"
            src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
            alt="Rick and Morty Logo"
          />
        </div>
        <div className="mb-[250px] flex mx-auto text-white max-w-[90%] bg-zinc-900 p-16 rounded-3xl bg-opacity-90 shadow-lg shadow-green-500/50">          <div className="flex flex-col">
            <div className="col-span-2 ">
              <ul className="grid grid-cols-2 gap-4">
                <span>
                  <div className="col-span-2">
                    <span className="text-green-500 text-4xl">Genre:</span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">Adventure</li>
                      <li className="text-xl text-white">Science Fiction</li>
                      <li className="text-xl text-white">Comedy</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <span className="text-green-500 text-4xl">
                      Project Designer:
                    </span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">Justin Roiland</li>
                      <li className="text-xl text-white">Dan Harmon</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <span className="text-green-500 text-4xl">
                      Vocalization:
                    </span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">Justin Roiland</li>
                      <li className="text-xl text-white">Chris Parnel</li>
                      <li className="text-xl text-white">Spencer Grammer</li>
                      <li className="text-xl text-white">Sarah Chalke</li>
                    </ul>
                  </div>
                </span>
                <span className="flex flex-col mx-auto my-auto">
                  <div className="col-span-2 mb-5">
                    <span className="text-green-500 text-4xl">Composer:</span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">Ryan Elder</li>
                    </ul>
                  </div>
                  <div className="col-span-2 mb-5">
                    <span className="text-green-500 text-4xl">Country:</span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">USA</li>
                    </ul>
                  </div>
                  <div className="col-span-2 mb-5">
                    <span className="text-green-500 text-4xl">Language:</span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">English</li>
                    </ul>
                  </div>
                  <div className="col-span-2 mb-5">
                    <span className="text-green-500 text-4xl">Seasons:</span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">6</li>
                    </ul>
                  </div>
                  <div className="col-span-2 mb-5">
                    <span className="text-green-500 text-4xl">Episode:</span>
                    <ul className="list-disc ml-10">
                      <li className="text-xl text-white">61</li>
                    </ul>
                  </div>
                </span>
              </ul>
            </div>
          </div>
          <p className="w-[50%] mx-auto text-2xl flex justify-center items-center">
            Rick and Morty, which deals with the extraordinary events of a crazy
            scientist with his grandson, contains many adventures. Although we
            describe Rick and Morty's interesting and "quite dangerous journeys"
            as interdimensional travel, they continue their adventures in human
            anatomy without slowing down.
          </p>
        </div>
    </>
  );
}

export default History;
