//FOR HEADER RELATED WORK
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

//for including images in nextjs we need this
const Header = () => {
  const styleLink =
    "text-gray-200 font-semibold tracking-widest cursor-pointer uppercase transitions";

  //this is called functional component, we include functions in this
  return (
    //we write the html and css code here
    <div className="fixed top-0 max-w-7xl mx-auto z-40">
      <div
        className={`px-6 py-2 h-20 flex transition-all bg-gray-800 duration-300 ease-in-out items-center w-screen justify-between `}
      >
        {/* Image */}
        <div className="flex">
          <div className="flex items-center cursor-pointer space-x-2 md:border-r md:border-gray-600">
            <Image
              src="https://healthladakh.org/wp-content/uploads/elementor/thumbs/HI-logo-400-trans-ojrmefu1bywboe5xz5u82c7dmcf4wtr7b8074zi3fs.png"
              height={40}
              width={40}
              alt="Logo"
            />
            <p className="tracking-widest font-semibold pr-5 text-gray-100 uppercase">
              Health Inc.
            </p>
          </div>
          <div className="md:flex items-center pl-7 hidden space-x-4 md:space-x-10 lg:space-x-12">
            <a href="/" className={styleLink}>
              Home
            </a>
            <Link href="/resources" className={styleLink}>
              Resources
            </Link>
            <Link href="/projects" className={styleLink}>
              Projects
            </Link>
            <Link href="/team" className={styleLink}>
              Team
            </Link>
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Header;
