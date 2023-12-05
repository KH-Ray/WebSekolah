import Box from "./PhotoBox";
import megaphone from "../images/icons/megaphone.svg";
import calendar from "../images/icons/calendar-icon.svg";

const Notice = (props) => {
  return (
    <div className="flex h-52 items-center gap-4 md:gap-12">
      <Box styles="w-36 h-36 flex items-center justify-center">
        <img className="h-20 w-20" src={megaphone} alt="Notice logo" />
      </Box>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl sm:text-4xl">{props.title}</h3>
        <p className="flex items-center gap-4 sm:text-xl">
          <img
            className="h-4 w-4 sm:h-6 sm:w-6"
            src={calendar}
            alt="Calendar icon"
          />
          {props.date}
        </p>
        <p className="text-gray-500 sm:text-xl">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default Notice;
