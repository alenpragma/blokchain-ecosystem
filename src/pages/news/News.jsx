import Container from "../../components/shared/Container";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const loaderData = useLoaderData();
  const { img, title, news } = loaderData;
  return <Container>
    <div className="md:w-3/4 w-full mx-3 my-5 md:mx-auto">
        <img className="md:h-[500px] h-[300px] object-cover w-full" src={img} alt="" />
        <h3 className="font-semibold text-4 text-3xl my-3">{title}</h3>
        <p>{news}</p>
    </div>
  </Container>;
};

export default News;
