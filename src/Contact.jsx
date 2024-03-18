import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact us</h2>
      {/* Putting map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.185871685272!2d77.70874497412015!3d12.959955115135413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d3f352b1e1%3A0x4e9d4fbe336eb3db!2sAkshaya%20Temple%20Tree!5e0!3m2!1sen!2sin!4v1709789222429!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xyyrpknj" method="POST" className="contact-inputs">
            <input 
            type="text" 
            placeholder="username" 
            name="username"  
            required
            autoComplete="off"
            />

            <input 
            type="email"
            name="Email"
            placeholder="Email"
            required
            autoComplete="off" 
            />

            <textarea
            name="Message"  
            cols="30" 
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter Your Message"
            ></textarea>
            <input 
            type="submit"
            value="send"
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
