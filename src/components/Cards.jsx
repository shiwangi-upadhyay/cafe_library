import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    } from "@material-tailwind/react";
    
    export function Cards({ image, category, title, description, link }) {
        return (
        <Card className="w-full max-w-[48rem] h-[19rem] flex-row flex-wrap lg:flex-nowrap">
            <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full lg:w-2/5 shrink-0 rounded-lg"
            >
            <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
            />
            </CardHeader>
            <CardBody className=" flex flex-col justify-between p-4">
            <Typography variant="h6" color="gray" className=" mb-2 text-sm lg:text-base uppercase">
                {category}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2 text-lg lg:text-2xl font-semibold line-clamp-2">
                {title}
            </Typography>
            <Typography color="gray" className="font-normal text-sm lg:text-base line-clamp-3 mb-4">
                {description}
            </Typography>
            <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                    Rent Now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
                </Button>
            </a>
        </CardBody>
      </Card>
    );
  }