import React, { useState } from "react";
import Icon from "./components/icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  AiOutlineReload,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [dualPlayer, setDualPlayer] = useState(null);

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    // setTurns(9);
    itemArray.fill("empty", 0, 9);
  };

  const lSearch = () => {
    for (let i = 0; i < 9; i++) {
      if (itemArray[i] === "empty") {
        return false;
      }
    }
    return true;
  };

  const checkIsWinner = () => {
    if (winMessage === "") {
      if (
        itemArray[0] === itemArray[1] &&
        itemArray[0] === itemArray[2] &&
        itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} wins`);
        return true;
      } else if (
        itemArray[3] !== "empty" &&
        itemArray[3] === itemArray[4] &&
        itemArray[3] === itemArray[5]
      ) {
        setWinMessage(`${itemArray[3]} wins`);
        return true;
      } else if (
        itemArray[6] !== "empty" &&
        itemArray[6] === itemArray[7] &&
        itemArray[6] === itemArray[8]
      ) {
        setWinMessage(`${itemArray[6]} wins`);
        return true;
      } else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[3] &&
        itemArray[0] === itemArray[6]
      ) {
        setWinMessage(`${itemArray[0]} wins`);
        return true;
      } else if (
        itemArray[1] !== "empty" &&
        itemArray[1] === itemArray[4] &&
        itemArray[1] === itemArray[7]
      ) {
        setWinMessage(`${itemArray[1]} wins`);
        return true;
      } else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[5] &&
        itemArray[2] === itemArray[8]
      ) {
        setWinMessage(`${itemArray[2]} wins`);
        return true;
      } else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[4] &&
        itemArray[0] === itemArray[8]
      ) {
        setWinMessage(`${itemArray[0]} wins`);
        return true;
      } else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[4] &&
        itemArray[2] === itemArray[6]
      ) {
        setWinMessage(`${itemArray[2]} wins`);
        return true;
      } else if (lSearch()) {
        setWinMessage(`Match Tied`);
        return true;
      }
    } else {
      return false;
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "info" });
    }
    if (itemArray[itemNumber] === "empty") {
      // setTurns(turns--);
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      // console.log(turns);
      setIsCross(!isCross);
      checkIsWinner();
      if (!checkIsWinner() && dualPlayer === false) {
        setTimeout(() => {
          cpuTurns();
        }, 1000);
      }
    }
  };

  const getRandom = () => {
    return Math.floor(Math.random() * 9);
  };

  const cpuTurns = () => {
    // checkUnique();
    let randomIndex = getRandom();
    // let randomIndex = Math.floor(Math.random() * 9);
    if (itemArray[randomIndex] === "empty") {
      if (winMessage) {
        return toast(winMessage, { type: "success" });
      }
      // setTurns(turns--);
      itemArray[randomIndex] = isCross ? "circle" : "cross";
      // console.log(turns);
      setIsCross(isCross);
      getSPUI();
      checkIsWinner();
    } else {
      cpuTurns();
    }
  };

  const handleHome = () => {
    setDualPlayer(null);
    reloadGame();
  };

  const getSPUI = () => {
    // console.log(isCross ? "Cross" : "Circle");
    return (
      <div className="grid">
        {itemArray.map((item, index) => (
          <Card key={index} color="alert" onClick={() => changeItem(index)}>
            <CardBody className="box">
              <Icon name={item} />
            </CardBody>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Container className="p-5">
      <h1 className="text-center text-white">Tic Tac Toe</h1>
      <ToastContainer position="bottom-center" />
      {dualPlayer === null ? (
        <div>
          <Row>
            <Col md={6} className="offset-md-3 mt-5">
              <Button
                block
                size="lg"
                color="info"
                onClick={() => setDualPlayer(false)}
              >
                <AiOutlineUser style={{ margin: "0 10px" }} />
                Single Player
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="offset-md-3 mt-5">
              <Button
                block
                color="primary"
                size="lg"
                onClick={() => setDualPlayer(true)}
              >
                <AiOutlineUsergroupAdd style={{ margin: "0 10px" }} />
                Dual Player
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h2 className="text-success text-center text-uppercase">
                  {winMessage}
                </h2>
                <Button block onClick={reloadGame} color="info">
                  <AiOutlineReload style={{ margin: "0 10px" }} />
                  Reload Game
                </Button>
              </div>
            ) : (
              <div>
                {isCross ? (
                  <h2 className="mb-5 text-center text-primary">Cross Turns</h2>
                ) : (
                  <h2 className="mb-5 text-center text-warning">
                    Circle Turns
                  </h2>
                )}
              </div>
            )}
            {getSPUI()}

            <Row>
              <Col md={6} className="offset-md-3 mt-5">
                <Button block onClick={handleHome} color="danger">
                  <AiOutlineArrowLeft style={{ margin: "0 10px" }} />
                  Back to Home
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
      <p className="mt-5 text-white text-center">github.com/suhailzone</p>
    </Container>
  );
};

export default App;
