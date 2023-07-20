import { useState } from "react";

import CornerSvg from "./corner.svg";
import LogoSvg from "./death-note-white.svg";

const Content = () => {
  const rules = [
    {
      id: 1,
      rule: "The human whose name is written in this note shall die.",
    },
    {
      id: 2,
      rule: "This note will not take effect unless the writer has the person's face in their mind when writing his/her name. Therefore, people sharing the same name will not be affected.",
    },
    {
      id: 3,
      rule: "If the cause of death is written within the next 40 seconds of writing the person's name, it will happen.",
    },
    {
      id: 4,
      rule: "If the cause of death is not specified, the person will simply die of a heart attack.",
    },
    {
      id: 5,
      rule: "After writing the cause of death, details of the death should be written in the next 6 minutes and 40 seconds.",
    },
  ];

  const [displayedRule, setDisplayedRule] = useState([rules[0]]);
  let ruleId = 0;

  const handleNextRule = () =>
    setDisplayedRule(
      ruleId === rules.length - 1
        ? rules.filter(({ id }) => id === 1)
        : rules.filter(({ id }) => id === ruleId + 1)
    );

  const handlePrevRule = () =>
    setDisplayedRule(
      ruleId === 1
        ? rules.filter(({ id }) => id === rules.length - 1)
        : rules.filter(({ id }) => id === ruleId - 1)
    );

  return (
    <>
      <div className="content">
        <img
          className="content__corner content__corner-1"
          src={CornerSvg}
          alt="corner"
        />
        <img
          className="content__corner content__corner-2"
          src={CornerSvg}
          alt="corner"
        />
        <img
          className="content__corner content__corner-3"
          src={CornerSvg}
          alt="corner"
        />
        <img
          className="content__corner content__corner-4"
          src={CornerSvg}
          alt="corner"
        />
        <img className="content__logo" src={LogoSvg} alt="logo" />

        <div className="content__rules">
          {displayedRule.map(({ id, rule }) => {
            ruleId = id;
            return (
              <p key={id} className="content__rules-para">
                {rule}
              </p>
            );
          })}
        </div>

        <div className="content__btn-container">
          <button
            onClick={handlePrevRule}
            className="content__btn-container-btn content__btn-container-btn--prev"
          >
            Previous
          </button>
          <button
            onClick={handleNextRule}
            className="content__btn-container-btn content__btn-container-btn--nxt"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default Content;
