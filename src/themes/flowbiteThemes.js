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
      "dark-gray": "bg-gray-400 hover:bg-gray-500 text-white",
    },
    size: {
      md: "text-base px-4 py-2",
    },
  },
};

export { customCarouselTheme, customButtonTheme };
