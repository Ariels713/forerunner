import styled from "styled-components";
import QuoteSVG from "./QuoteSVG";

const Card2Background = styled.div`
  --textColor: hsla(215, 94%, 10%, 1);
  --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: hsla(273, 65%, 79%, 1); */
  background: linear-gradient(
    120deg,
    hsla(72, 83%, 64%, 1),
    hsla(109, 0%, 96%, 1)
  );
  height: 600px;
  margin-top: -3rem;
`;

const Card2Wrapper = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  isolation: isolate;
`;

const Card2Image = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
  object-fit: cover;
  object-position: top;
  transform: scaleX(-1);
`;

const Card2Title = styled.p`
  color: var(--textColor);
  font-family: var(--font);
  font-size: 5rem;
  line-height: 72px;
  position: absolute;
  top: 120px;
  left: -73px;
  -webkit-text-decoration-color: hsla(272, 64%, 81%, 1);
  /* text-decoration-line: underline; */
  text-decoration-color: hsla(272, 64%, 81%, 1);
  letter-spacing: 4px;
`;

const Card2Author = styled.p`
  color: var(--textColor);
  font-family: var(--font);
  font-size: 1rem;
  position: absolute;
  top: 61px;
  left: -65px;
`;

const AuthorSpan = styled.span`
  display: block;
  font-weight: 800;
`;

const Card2SubTitle = styled.p`
  ont-size: 1.25rem;
  position: absolute;
  top: -3px;
  line-height: 23px;
  font-family: var(--font);
`;

const Card2SVGWrapper = styled.div`
  position: absolute;
  top: -43px;
  left: -40px;
`;

const Card2BlockQuote = styled.blockquote`
  width: 225px;

  position: absolute;
  top: 240px;
  right: -60px;
  /* background-color: hsla(109, 0%, 96%, 1); */
  border-radius: 8px;
`;

const Card2Button = styled.button`
  width: 167px;
  height: 34px;
  background-color: hsla(273, 65%, 81%, 1);
  color: var(--textColor);
  border: transparent;
  font-family: var(--font);
  position: absolute;
  top: 290px;
  left: -74px;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 2px;
`;

function Card2() {
  return (
    <Card2Background>
      <Card2Wrapper>
        <Card2Image
          src="https://images.ctfassets.net/w8xycu8te0c0/5Ct9NWqTVIvW8qBqVrTaXI/777006f0371cd19579d7330702938042/Eclipse.png?w=900&h=900"
          alt=""
        />
        <Card2Author>
          <AuthorSpan>Eurie Kim</AuthorSpan>Partner
        </Card2Author>
        <Card2Title>
          Case <br /> Study
        </Card2Title>
        <Card2Button>Learn More</Card2Button>
        <Card2BlockQuote
          className="before_element"
          cite="https://www.highsnobiety.com/p/25-classic-movie-speeches/"
        >
          <Card2SVGWrapper>
            <QuoteSVG color="hsla(273, 65%, 81%, 1.00)" />
          </Card2SVGWrapper>
          <Card2SubTitle>
            {" "}
            Making plant-based dairy indistinguishable from conventional dairy
          </Card2SubTitle>
        </Card2BlockQuote>

        {/* Humphry Slocombe and OddFellows */}
      </Card2Wrapper>
    </Card2Background>
  );
}

export default Card2;
