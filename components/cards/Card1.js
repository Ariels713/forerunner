import styled from "styled-components";
import Image from "next/image";
import startImage from "../../public/images/starImage.jpg";
const Card1Background = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: hsla(273, 65%, 79%, 1); */
  background: linear-gradient(
    120deg,
    hsla(273, 65%, 79%, 1),
    hsla(109, 0%, 96%, 1)
  );
  height: 600px;
  margin-top: -3rem;
`;

const Card1Wrapper = styled.div`
  position: relative;
  width: 260px;
  height: 320px;
  box-shadow: 10px -10px 0 -3px hsla(273, 50%, 90%, 1),
    10px -10px hsla(68, 48%, 90%, 1);
  position: relative;
  isolation: isolate;
`;
const Card1Img = styled.img`
  max-width: 100%;
  height: 100%;
  display: inline-block;
  object-fit: cover;
`;

const Card1Title = styled.p`
  display: block;
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  background-color: hsla(68, 48%, 90%, 1);
  padding: 0.25rem;
  top: 10px;
  left: -10px;
  hyphens: auto;
`;

const Card1Body = styled.p`
  display: block;
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  background-color: hsla(68, 48%, 90%, 1);
  padding: 0.25rem;
  bottom: -10px;
  left: 0px;
  width: 95%;
  hyphens: auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Card1Credit = styled.p`
  display: block;
  /* position: absolute; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  /* background-color: hsla(68, 48%, 90%, 1); */

  font-weight: 200;
  padding: 0.25rem;
`;

const AuthorSpan = styled.span`
  display: block;
  font-weight: 800;
`;

const Card1Image = styled.img`
  max-width: 100%;
  height: 100%;
  display: inline-block;
  object-fit: cover;
`;

function Card1() {
  return (
    <Card1Background>
      <Card1Wrapper>
        <Card1Image
          src="https://images.ctfassets.net/w8xycu8te0c0/2ZTtNXxrmptekgxgrG8AOF/759eeed41a87b52d0c4337c370a3e678/iStock-1243193447.jpg?w=900&h=900"
          alt="intro image"
        />
        <Card1Title>Brain Trust Consumer Insights</Card1Title>
        <Card1Body>
          Service: Why top brands see beyond the cost center
        </Card1Body>
        <Card1Credit>
          <AuthorSpan>ForeRunners Ventures,</AuthorSpan> Team
        </Card1Credit>
      </Card1Wrapper>
      <Card1Wrapper>
        <Card1Image
          src="https://images.fastcompany.net/image/upload/w_1153,ar_16:9,c_fill,g_auto,f_auto,q_auto,fl_lossy/wp-cms/uploads/2021/09/p-1-90671189-why-this-plant-based-ice-cream-tastes-like-dairy.jpg"
          alt="intro image"
        />
        <Card1Title>PortFolio News</Card1Title>
        <Card1Body>
          How this startup gets its plant-based ice cream to taste like dairy
        </Card1Body>
        <Card1Credit>Fast Company</Card1Credit>
      </Card1Wrapper>
      <Card1Wrapper>
        <Card1Image
          src="https://images.ctfassets.net/w8xycu8te0c0/3lFvDTy7wr6HJa9Z2DdFtr/1b5d0c74d28ff3dd341fd630e16e2dfc/MomentHouse--320.JPG?w=900&h=900"
          alt="intro image"
        />
        <Card1Title>Portfolio News</Card1Title>
        <Card1Body>
          Moment House Co-Founder & CEO Arjun Mehta on reaching new creators
          following this week&apos;s Series A
        </Card1Body>
        <Card1Credit>
          <AuthorSpan>JENNA BIRCH,</AuthorSpan>DIRECTOR, CONTENT
        </Card1Credit>
      </Card1Wrapper>
    </Card1Background>
  );
}

export default Card1;
