import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  return (
    <Card
      className="flex h-full w-full flex-col overflow-hidden border border-solid border-gray-400 shadow-none sm:max-w-sm"
      renderImage={() => (
        <img className="h-full" src={props.imgSrc} alt={props.imgAlt} />
      )}
    >
      <h5 className="-mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title.length > 80
          ? `${props.title.slice(0, 80)}...`
          : props.title}
      </h5>
      <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
        {props.subtitle}
      </p>
      <Link
        className="mt-auto text-sm font-semibold text-deep-purple-600"
        to={`/berita/${props.id}`}
      >
        See more &gt;
      </Link>
    </Card>
  );
};

export default NewsCard;
