import logo from "../images/cropped-bakdhatlogo.svg";
import phone from "../images/icons/phone-flip.svg";
import envelope from "../images/icons/envelope.svg";

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
];

const [description, links, contact] = [...footerContent];

const Footer = () => {
  return (
    <footer className="bg-main-blue font-poppins">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 py-6 text-justify md:scale-90 md:grid-cols-[auto_auto_auto] md:py-6 md:text-left lg:max-w-7xl lg:py-12 lg:pr-40">
          <div className="flex flex-col items-center justify-between gap-4 md:items-start">
            <img className="w-32" src={logo} alt="Logo Sekolah Bakti Idhata" />
            <p className="px-4 leading-6 md:px-0">{description.content}</p>
          </div>
          <div className="flex flex-col items-center justify-between md:items-start">
            <p className="mb-8 text-4xl font-extrabold md:mb-12">
              {links.heading}
            </p>
            <ul className="flex list-disc flex-col gap-4 pl-6 leading-6">
              {links.content.map((link, i) => {
                return <li key={i}>{link}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-8 text-4xl font-extrabold md:mb-12">
              {contact.heading}
            </p>
            <div className="flex flex-col gap-6 px-4 md:px-0">
              <p className="leading-6">{contact.content}</p>
              <p className="flex items-center gap-4">
                <img src={envelope} alt="Envelope icon" />
                SekolahXX@address.com
              </p>
              <p className="flex items-center gap-4">
                <img src={phone} alt="Phone icon" />
                (021) XXXXXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
