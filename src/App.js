import "./App.css";
import styled from "styled-components";
import mobileImage from "./assets/img/image-product-mobile.jpg";
import desktopImage from "./assets/img/image-product-desktop.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  width: 100%;
  height: 100vh;
  background-color: #f3eae3;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 2rem 10px;
  overflow: hidden;
`;

const Card = styled.div`
  background: white;
  width: 350px;
  border-radius: 12px;
  display: grid;
  grid-auto-flow: row;
  @media only screen and (min-width: 426px) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    width: 650px;
  }

  img {
    width: 100%;
    border-radius: 12px 12px 0 0;
    height: 100%;
    @media only screen and (min-width: 426px) {
      content: url(${desktopImage});
      border-radius: 12px 0 0 12px;
    }
  }

  @media only screen and (min-width: 426px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;

  > * {
    margin-top: 0;
  }

  h2,
  p {
    font-size: 16px;
    color: #71747e;
    font-weight: 500;
    line-height: 1.3rem;
  }

  h2 {
    letter-spacing: 5px;
  }

  h1 {
    font-family: "Fraunces", serif;
  }

  .prices {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 12px;
  }

  .sales-price {
    color: #3d8269;
    font-weight: 700;
    font-size: 2rem;
    font-family: "Fraunces", serif;
  }

  .original-price {
    color: gray;
    text-decoration: line-through;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 426px) {
    padding: 1.7rem 2rem;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: #3d8269;
  color: white;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 9px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  gap: 0.7rem;

  &:hover {
    background-color: #1a4031;
  }

  .cart-icon {
    font-size: 1.3em;
  }
`;
function App() {
  return (
    <Wrapper>
      <Card>
        <div>
          <img src={mobileImage} alt=""></img>
        </div>
        <Content>
          <h2>PERFUME</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <label className="sales-price">$149.99</label>
            <label className="original-price">$169.99</label>
          </div>
          <Button>
            <AiOutlineShoppingCart className="cart-icon" />
            Add to Cart
          </Button>
        </Content>
      </Card>
    </Wrapper>
  );
}

export default App;
