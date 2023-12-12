import logo from "../images/cropped-bakdhatlogo.svg";

const AdminHeader = () => {
  return (
    <header className="flex items-center gap-4 bg-gradient-to-r from-main-blue to-light-blue px-8 py-4 drop-shadow-md">
      <img className="w-16" src={logo} alt="Logo Sekolah Bakti Idhata" />
      <h1 className="flex flex-col font-antonio text-2xl font-semibold uppercase">
        smp bakti idhata
        <span className="text-sm font-light">cerdas terampil luhur</span>
      </h1>
    </header>
  );
};

export default AdminHeader;
