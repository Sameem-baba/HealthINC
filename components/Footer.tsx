/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto">
      <Image
        src="https://healthladakh.org/wp-content/uploads/elementor/thumbs/HI-logo-400-trans-ojrmefu1bywboe5xz5u82c7dmcf4wtr7b8074zi3fs.png"
        height={100}
        width={100}
        className="object-contain"
        alt="Logo"
        unoptimized={true}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-y-10 pl-20
        py-14 text-gray-300 flex-1"
      >
        <div className="space-y-4 text-xs text-gray-200">
          <p>HEALTH Inc</p>
          <p>PO Box 33</p>
          <p>Leh, Ladakh UT 194 101</p>
          <p>India</p>
        </div>
        <div className="space-y-4 text-xs text-gray-200">
          <h5 className="font-bold">SITEMAP</h5>
          <p>Home</p>
          <p>Resources</p>
          <p>Projects</p>
          <p>Team</p>
        </div>
        <div className="space-y-4 text-xs text-gray-200">
          <h5 className="font-bold">Our Work</h5>
          <p>Winter Camps</p>
          <p>Ability Networks</p>
          <p>Seeds</p>
        </div>
        <div className="space-y-4 text-xs text-gray-200">
          <h5 className="font-bold">SOCIAL</h5>
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
