import { Card } from "flowbite-react";

const NewsCard = (props) => {
  return (
    <Card
      className="w-full sm:max-w-sm"
      imgAlt={props.imgAlt}
      imgSrc={props.imgSrc}
    >
      <h5 className="-mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
        {props.subtitle}
      </p>
      <a className="text-sm font-semibold text-deep-purple-600" href="#">
        See more &gt;
      </a>
    </Card>
  );
};

export default NewsCard;
