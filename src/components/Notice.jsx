import Box from "./PhotoBox";

const Notice = (props) => {
  return (
    <div className="flex h-52 items-center gap-12">
      <Box styles="w-36 h-36 flex items-center justify-center">
        <img
          className="h-20 w-20"
          src="src/assets/icons/megaphone.svg"
          alt="Notice logo"
        />
      </Box>

      <div className="flex flex-col gap-2">
        <h3 className="text-4xl">{props.title}</h3>
        <p className="flex gap-4 text-xl">
          <img
            className="h-6 w-6"
            src="src/assets/icons/calendar-icon.svg"
            alt="Calendar icon"
          />

          {props.date}
        </p>
        <p className="text-xl text-gray-500">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Notice;
