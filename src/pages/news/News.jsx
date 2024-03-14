import Container from "../../components/shared/Container";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const loaderData = useLoaderData();
  const { img, title, news } = loaderData;
  return <Container>
    <div className="w-2/4 my-5">
        <h3 className="font-semibold text-4 text-3xl">{title}</h3>
        <img className="h-[400px] w-full my-3" src={img} alt="" />
        <p>{news}</p>
    </div>
  </Container>;
};

export default News;
