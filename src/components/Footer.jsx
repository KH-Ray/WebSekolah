import logo from "../images/cropped-bakdhatlogo.svg";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/outline";
import { Element } from "react-scroll";

const pageLinks = [
  "Halaman #1",
  "Halaman #2",
  "Halaman #3",
  "Halaman #4",
  "Halaman #5",
  "Halaman #6",
  "Halaman #7",
];

const footerContent = [
  {
    heading: "Description",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique iaculis ipsum id facilisis. Ut euismod scelerisque massa, eget varius velit gravida pretium. Maecenas facilisis eros a arcufeugiat, ac sodales massa ultricies. Phasellus",
  },
  {
    heading: "Halaman",
    content: pageLinks,
  },
  {
    heading: "Hubungi Kami",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique iaculis ipsum id facilisis. Ut euismod scelerisque massa, eget varius velit gravida pretium.",
  },
  {
    heading: "Social Media",
    content: {
      tiktok: "Tiktok Bakti Idhata",
      xTwitter: "X Bakti Idhata",
      instagram: "Instagram Bakti Idhata",
      facebook: "Facebook Bakti Idhata",
    },
  },
];

const [description, links, contact, social] = [...footerContent];

const Footer = () => {
  return (
    <footer className="whitespace-normal bg-main-blue font-poppins">
      <Element name="footer">
        <div className="mx-auto max-w-7xl lg:px-6">
          <div className="grid grid-cols-1 gap-8 py-6 text-justify md:scale-90 md:grid-cols-2 md:py-6 md:text-left lg:max-w-7xl lg:grid-cols-4 lg:py-12">
            <div className="flex flex-col items-center justify-between gap-4 sm:gap-0 md:items-start">
              <img
                className="w-32"
                src={logo}
                alt="Logo Sekolah Bakti Idhata"
              />
              <p className="px-4 leading-6 md:px-0">{description.content}</p>
            </div>

            <div className="flex w-full flex-col items-center justify-between justify-self-center md:items-start lg:items-center">
              <p className="mb-8 text-4xl font-extrabold md:mb-12">
                {links.heading}
              </p>
              <ul className="flex list-disc flex-col gap-4 pl-6 leading-6">
                {links.content.map((link, i) => {
                  return <li key={i}>{link}</li>;
                })}
              </ul>
            </div>

            <div className="flex flex-col items-start px-4 md:px-0">
              <p className="mb-8 self-center text-4xl font-extrabold md:mb-12 md:self-start">
                {contact.heading}
              </p>
              <div className="flex flex-col gap-6">
                <p className="leading-6">{contact.content}</p>
                <p className="flex items-center gap-4">
                  <EnvelopeIcon className="h-7 w-7 fill-black stroke-main-blue" />{" "}
                  <a
                    href="mailto:smpbaktiidhata20106935@gmail.com"
                    className="whitespace-pre-wrap break-all text-blue-900 hover:underline"
                  >
                    smpbaktiidhata20106935@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <PhoneIcon className="h-7 w-7 fill-black" />
                  <a
                    href="https://wa.me/628118252530"
                    className="whitespace-pre-wrap break-all text-blue-900 hover:underline"
                  >
                    https://wa.me/628118252530
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <MapIcon className="h-7 w-7 fill-black stroke-main-blue" />
                  <a
                    href="https://maps.app.goo.gl/k52QLnhq5A1bwjgK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-pre-wrap break-all text-blue-900 hover:underline"
                  >
                    Bakti Idhata
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col px-4 md:px-0">
              <p className="mb-8 self-center text-4xl font-extrabold md:mb-12 md:self-start">
                {social.heading}
              </p>

              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/icons/tiktok.svg"
                    alt="tiktok logo"
                    className="h-7 w-7"
                  />
                  <p>{social.content.tiktok}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/icons/x-twitter.svg"
                    alt="X logo"
                    className="h-7 w-7"
                  />
                  <p>{social.content.xTwitter}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/icons/instagram.svg"
                    alt="Instagram logo"
                    className="h-7 w-7"
                  />
                  <p>{social.content.instagram}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="src/images/icons/facebook.svg"
                    alt="Facebook logo"
                    className="h-7 w-7"
                  />
                  <p>{social.content.facebook}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </footer>
  );
};

export default Footer;
