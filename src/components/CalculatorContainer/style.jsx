import styled from "styled-components";

export const ContainerStyle = styled.div`
  background-color: #f1f1f1dc;
  width: 100vw;
  height: 100vh;

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffffcb;
  }
  .calculator {
    margin-top: 20px;
    border-bottom: 2px solid lightgray;
  }
  .calculator h1 {
    margin-bottom: 20px;
  }
  .calculator form {
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .calculator form label {
    width: 250px;
    text-align: start;
    font-weight: bold;
  }
  .calculator form input {
    font-size: 14px;
    border-style: none;
    border-bottom: 1px solid lightgray;
    width: 250px;
    padding: 3px 5px;
  }
  .calculator form input:hover {
    border-bottom: 1px solid #3d75bb;
  }
  .calculator form button {
    width: 250px;
    border-style: none;
    font-size: 14px;
    padding: 10px 0px;
    color: white;
    background-color: #598fd1;
    border-radius: 3px;
  }
  .calculator form button:hover {
    background-color: #3d75bb;
  }
  .result-calculator {
    color: #3c6598;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    gap: 20px;
  }
  .result-calculator h3 {
    color: #598fd1;
  }
  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      box-shadow: 0px 0px 40px -10px rgba(0, 0, 0, 0.75);
      align-items: center;
      flex-direction: row;
      width: 600px;
      height: 500px;
      background-color: #ffff;
    }
    .calculator h1 {
      margin-bottom: 20px;
    }
    .calculator {
      width: 60%;
      height: 350px;
      border-bottom: none;
    }
    .content .result-calculator {
      width: 40%;
      padding-top: none;
      display: flex;
      background-color: #f7f9fa;
      justify-content: center;
      height: 100%;
    }
  }
  @media (min-width: 900px) {
    .content {
      width: 700px;
    }
    .calculator {
      height: 400px;
    }
  }
`;
