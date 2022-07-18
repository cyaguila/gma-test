/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Image from 'next/Image'

export default function SectionImage({subtitle, title, blurb, buttonText, imageSrc, alt, active}) {
    const visible = "relative overflow-hidden lg:flex lg:py-28"
    const invisible = "relative overflow-hidden hidden lg:py-10"
    return (
      <>      
        <aside className={active ? visible : invisible}>
          <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-28 lg:text-left">
            <div className="max-w-xl mx-auto lg:ml-0">
              <p className="text-sm font-medium">{subtitle}</p>

              <p className="mt-2 text-2xl font-bold sm:text-3xl">
                {title}
              </p>

              <p className="hidden lg:mt-4 lg:block">
                {blurb}
              </p>

              <a
                href=""
                className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                {buttonText}
              </a>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
            <img
              src={imageSrc}
              alt={alt}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </aside>

      </>


    )
}