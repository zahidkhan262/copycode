import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const MainPage = () => {
  return (
    <>
      <div className="heading">
        <h1>
          All Beautiful <span>B</span>ackground <span>C</span>olor and{" "}
          <span>B</span>ox-<span>S</span>hadow are available here..
        </h1>
        <p>
          You can <span>C</span>opy - <span>C</span>ode and paste on your
          website...Thanks for Using this code.
        </p>

        <a href="https://github.com/zahidkhan262" target="_zahid">
          <Button variant="primary">
            Follow me On Github
            <FontAwesomeIcon icon={faGithub} className="git" />
          </Button>
        </a>
      </div>
    </>
  );
};
