import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const check = localStorage.getItem("details");

    if (check) {
      setDetails(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();

      localStorage.setItem("details", JSON.stringify(detailData));
      setDetails(detailData);
      // console.log(details)
      console.log(detailData);
      // array olmayacağı için detailData.results yapmaya gerek yok
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <Left>
        <h2>{details.title}</h2>
        <Image src={details.image} alt={details.title} />
      </Left>
      <div>
        <Buttons>
          <Button
            className={activeTab === "instructions" && "active"}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" && "active"}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </Buttons>
        {activeTab === "instructions" && (
          <div>
            {/* <h3>{details.summary}</h3> */}
            {/* normalde üstteki gibi yazılır ancak gelen veride html formatında yazılar var ve bunları düz yazı olarak alabilmek için aşağıdaki formatta yazacağız */}
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 10rem 0 5rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 1200px) {
    margin: 5rem 0;
    flex-direction: column;
    align-items: center;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li,
  p,
  ul {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 1rem;

    @media (max-width: 450px) {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 580px) {
    gap: 1rem;
  }
`;

const Image = styled.img`
  @media (max-width: 580px) {
    width: 330px;
  }
`;

const Left = styled.div`
  @media (max-width: 580px) {
    text-align: center;
  }
`;

export default Recipe;
