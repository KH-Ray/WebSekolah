import Box from "./PhotoBox";
import megaphone from "../images/icons/megaphone.svg";
import calendar from "../images/icons/calendar-icon.svg";

const Notice = (props) => {
  return (
    <div className="flex h-full items-center gap-4 py-4 md:gap-12">
      <Box styles="sm:w-36 h-36 sm:flex items-center justify-center grow-0 shrink-0 basis-36 hidden">
        <img className="h-20 w-20" src={megaphone} alt="Notice logo" />
      </Box>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl sm:text-2xl">{props.title}</h3>
        <p className="flex items-center gap-4 sm:text-xl">
          <img
            className="h-4 w-4 sm:h-6 sm:w-6"
            src={calendar}
            alt="Calendar icon"
          />
          {props.date}
        </p>
        <p className="text-justify leading-6 text-gray-500 sm:text-left">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};

export default Notice;
