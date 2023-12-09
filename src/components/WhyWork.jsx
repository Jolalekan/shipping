export const WhyWork = () => {
    return (
        <div className="z-10 bg-[url('./image1.jpg')] h-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg ">
            <div className="bg-black opacity-70 p-4 z-50">
                <div className=" p-14 text-2xl text-white font-extrabold tracking-tight">
                    <h1 className="text-center font-medium text-4xl text-white">What People Said </h1>
                </div>

                <div className="md:mx-20 grid grid-cols-1 gap-8 my-40 text-sm font-medium text-slate-500 lg:grid-cols-2">
                    <article className=" flex flex-col max-w-xl z-50">
                        <div className="flex items-center p-6 ">
                            <span className="text-2xl text-white">Prompt delivery serves always, I recommend famous evergreen</span>
                        </div>

                        <div className="flex justify-center">
                            <img className="h-28 w-28 rounded-full object-cover" src="./image3.jpg" alt="" />
                        </div>
                    </article>
                    <article className=" flex flex-col max-w-xl z-50">
                        <div className="flex items-center p-6 ">
                            <span className="text-2xl text-white">Prompt delivery serves always, I recommend famous evergreen</span>
                        </div>

                        <div className="flex justify-center">
                            <img className="h-28 w-28 rounded-full object-cover" src="./image3.jpg" alt="" />
                        </div>
                    </article>
                 
                </div>

            </div>


        </div>
    )
}