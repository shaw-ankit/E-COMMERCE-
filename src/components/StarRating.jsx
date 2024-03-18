import styled from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({ star, review }) => {
  // console.log("Star:-----",star , "review:----",review);]\
  const ratingStar = Array.from({ length: 5 }, (each, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return <Wrapper>
    <div className="icon-style">
        {ratingStar}
        <p>({review} customer reviews)</p>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
        font-size: 2rem;
        color: tomato;
    }

    .empty-icon {
        font-size: 2.6rem;
    }

    p {
        margin: 0;
        padding-left: 1.2rem;
    }
  }
`;

export default StarRating;
