const customCarouselTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-center overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    },
    item: {
      wrapper: {
        off: "w-full h-full flex-shrink-0 cursor-default transform snap-center",
        on: "w-full h-full flex-shrink-0 cursor-default transform snap-center",
      },
    },
  },
};

const customButtonTheme = {
  button: {
    color: {
      "dark-gray":
        "bg-gray-400 hover:bg-gray-500 text-white sm:w-36 w-full h-12",
      "dark-gray-fullWidth":
        "bg-gray-400 hover:bg-gray-500 text-white w-full h-12",
      "dark-blue":
        "bg-dark-blue hover:bg-dark-blue/75 text-white sm:w-36 w-full h-12",
    },
    size: {
      md: "text-base px-4 py-2",
    },
  },
};

export { customCarouselTheme, customButtonTheme };
