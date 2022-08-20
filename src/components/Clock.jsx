import React from "react";

const Clock = ({ seconds, hours = 0, minutes = 0 }) => {
  return (
    <div className="countDown-container">
      {!(minutes || seconds || hours) ? (
        ""
      ) : (
        <p>
          {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
      {/* {!(mins || secs) ? (
        ""
      ) : (
        <p>
          {hours}:{mins}:{secs < 10 ? `0${secs}` : secs}
        </p>
      )} */}
    </div>
  );
};

export default Clock;
