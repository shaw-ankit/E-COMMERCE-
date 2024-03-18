import styled from "styled-components";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two--column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* main footer */}
      <footer>
        <div className="container grid grid-four--column">
          <div className="footer-about">
            <h3>Ankit shaw [Frontend Developer]</h3>
            <p>This is my E-commerce Website</p>
          </div>

          <div className="footer-subscribe">
            <h3>Register to get more updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="register" />
            </form>
          </div>
        
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
              <a 
              href="https://github.com/shaw-ankit" 
              target="blank">
                <FaGithub className="icons"/>
              </a> 
              </div>
              <div>
              <a 
              href="https://www.linkedin.com/in/ankit-shaw-836844268/" 
              target="blank">
                <FaLinkedin className="icons"/>
              </a> 
              </div>
              <div>
              <a 
              href="https://www.instagram.com/ak_shaw22/" 
              target="blank">
                <FaInstagram  className="icons"/>
              </a> 
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            {/* <a href="tel:8637229043">+91 8637229043</a> */}
            <h3>+91 8637229043</h3>
          </div>
        </div>

        {/* bottom footer */}

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two--column">
            <p>
              @{new Date().getFullYear()} Ankit Shaw. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITION</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-items: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
export default Footer;
