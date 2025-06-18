"use client";
import { useRef, useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export default function History() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Detect desktop screens (md breakpoint and above)

  useEffect(() => {
    if (!isDesktop) return; // Only apply the scroll behavior on desktop screens

    const container = scrollContainerRef.current;

    if (container) {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        container.scrollLeft += event.deltaY; // Scroll horizontally based on vertical wheel movement
      };

      container.addEventListener("wheel", handleWheel);

      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, [isDesktop]);

  return (
    <section className="flex flex-col justify-start items-center border-1 p-6 mt-4">
      {/* History Section */}
      <div
        ref={isDesktop ? scrollContainerRef : null} // Apply ref for horizontal scroll only on desktop screens
        className="flex md:overflow-x-auto md:w-[95%] mx-auto scrollbar-thin scrollbar-thumb-gray-400 whitespace-nowrap items-center p-4"
      >
        <ol className="items-start md:flex">
          <li className="relative mb-6 sm:mb-0 md:w-[25vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden md:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Foundation Date 
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                1834
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
                A group of Williams students led by sophomores Stephen Field, Lewis Lockwood and Francis Tappan, met for the first time on Tuesday, Nov. 4, 1834, at the Freshman Recitation Room of the West College Building to form what they would call the Social Fraternity.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 md:w-[40vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Anti-secret confederation 
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                1847
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
                In 1847, Delta Upsilon’s founders at Williams College joined forces with like-minded non-secret fraternities from Union, Middlebury, and Amherst to form the Anti-Secret Confederation (ACS). United by the motto Ouden Adelon (“Nothing Secret”), they promoted justice and open, liberal education in contrast to the secrecy of other fraternities.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 md:w-[30vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Adoption of Name 
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                1864
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
                Over the next two decades, nine more chapters joined the ACS, though some disbanded by 1864. At that year’s convention, the confederation nearly dissolved due to low attendance—until a last-minute delegate from Rutgers arrived, establishing quorum. This pivotal moment led to renewed discussions and the official adoption of the name Delta Upsilon, already used by several chapters.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 md:w-[25vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Growth
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                1865 - 1898
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
                By 1865, just a year after adopting the name Delta Upsilon, the Fraternity had expanded to 15 chapters across the Northeast. In 1898, it became an international organization with the founding of its first Canadian chapter at McGill University in Montreal.
              </p>
            </div>
          </li>
           <li className="relative mb-6 sm:mb-0 md:w-[40vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Toronto Chapter Founded
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                1899
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
                The Delta Upsilon Toronto Chapter was officially installed in Dec. 15, 1899. Located at the University of Toronto, it played a key role in expanding DU’s presence beyond the United States and reinforcing its commitment to non-secret, merit-based brotherhood across borders.
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 md:w-[35vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Incorporation 
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                1909
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
               Following rapid growth in the early 1900s, Delta Upsilon was officially incorporated in New York in 1909. This led to the creation of a Board of Directors and an Assembly of Graduate Trustees, with Charles Evans Hughes serving as the Fraternity’s first president. That same year, DU also became a founding member of the North-American Interfraternity Conference (NIC).
              </p>
            </div>
          </li>
          <li className="relative mb-6 sm:mb-0 md:w-[25vw] w-[70vw]">
            <div className="items-center hidden md:flex">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold text-textColor">
                Turn of the millinium
              </h3>
              <time className="block mb-2 text-md md:text-xl lg:text-3xl font-normal leading-none text-primary">
                2001 - 2007
              </time>
              <p className="text-base font-normal text-textColor  text-balance">
               At the turn of the millennium, Delta Upsilon had established 148 chapters. Following the installation of its 150th chapter (Northwestern State Chapter) in 2001, the Fraternity focused solely on reopening closed chapters until 2007.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}