import React from 'react'
import { BsPersonWorkspace } from "react-icons/bs";

const Testemonials = () => {
    const Test = [
        {
            from: "Anonymous...",
            text: " Their commitment to delivering a seamless and robust backend for our application was evident at every stage of the project."
        },
        {
            from: "Anonymous...",
            text: " Their commitment to delivering a seamless and robust backend for our application was evident at every stage of the project."
        },
        {
            from: "Anonymous...",
            text: " Their commitment to delivering a seamless and robust backend for our application was evident at every stage of the project."
        }
    ];
  return (
    <div className="mb-12 mt-12 px-12 py-4">
            <h2 className="text-4xl font-semibold text-center">Testimonials.</h2>
            <h3 className="text-xl font-medium text-center">Here are some testimonials for our clients.</h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-24">
                {/* services list */}
                {
                    Test.map((service, idx) => {
                        return (
                            <div key={idx} className="flex flex-col gap-8 md:mt-10 lg:mt-0 mt-5 text-xl font-medium text-center bg-[#d9d9d9] p-4 rounded-lg">
                                <span className="flex justify-center md:-mt-16 -mt-8"><BsPersonWorkspace className="md:text-8xl text-6xl border-4 border-white rounded-full" /></span>
                                <span className="text-base">{service.text}</span>
                                <span className="">{service.from}</span>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>

  )
}

export default Testemonials
