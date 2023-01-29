import { Component } from "react";

import "./App.css";

class DigitalTimer extends Component {
  state = { limitTime: 25, seconds: 0, isStart: true };

  minusHandle = () => {
    this.setState((prev) => ({ limitTime: prev.limitTime - 1 }));
  };

  plusHandle = () => {
    this.setState((prev) => ({ limitTime: prev.limitTime + 1 }));
  };

  playIconButtonHandler = () => {
    const { limitTime, seconds } = this.state;

    this.timerId = setInterval(() => {
      if (seconds === 0) {
        console.log(seconds);
        this.setState((prev) => ({
          limitTime: prev.limitTime - 1,
          seconds: prev.seconds + 59,
          isStart: false,
        }));
      } else {
        console.log(seconds);
        this.setState((prev) => ({
          seconds: prev.seconds - 1,
          isStart: false,
        }));
      }
    }, 1000);
  };

  pauseIconButtonHandler = () => {
    clearInterval(this.timerId);
    this.setState((prev) => ({
      isStart: !prev.isStart,
    }));
  };

  resetHandleButton = () => {
    clearInterval(this.timerId);
    this.setState({ limitTime: 25, seconds: 60, isStart: true });
  };

  render() {
    const { isStart, limitTime, seconds } = this.state;
    let timingData;
    if (seconds > 10) {
      timingData = (
        <h1 style={{ fontSize: "20px" }}>
          {limitTime}:{seconds}
        </h1>
      );
    } else {
      timingData = (
        <h1 style={{ fontSize: "20px" }}>
          {limitTime}:0{seconds}
        </h1>
      );
    }

    return (
      <div className="first__container__of__digitaltimer">
        <h1>Digital Timer</h1>
        <div className="right__left__container">
          <div className="background__white__image">
            <div className="white__container">
              {timingData}
              <h1 style={{ fontSize: "20px" }}>
                {isStart ? "Paused" : "Running"}
              </h1>
            </div>
          </div>
          <div className="right_part_container" style={{ marginLeft: "20px" }}>
            <div className="play_reset_entire_container">
              <div className="play__icon_reset__container">
                {isStart ? (
                  <>
                    <button
                      type="button"
                      className="button_play_icon_reset"
                      onClick={this.playIconButtonHandler}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                        alt="play icon"
                        className="play__reset_image_icon"
                      />
                    </button>
                    <h1 style={{ fontSize: 20 }}>Start</h1>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="button_play_icon_reset"
                      onClick={this.pauseIconButtonHandler}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png "
                        alt="pause icon"
                        className="play__reset_image_icon"
                      />
                    </button>
                    <h1 style={{ fontSize: 20 }}>Pause</h1>
                  </>
                )}
              </div>
              <div className="play__icon_reset__container">
                <button
                  type="button"
                  className="button_play_icon_reset"
                  onClick={this.resetHandleButton}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="play__reset_image_icon"
                  />
                </button>
                <h1 style={{ fontSize: 20 }}>Reset</h1>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <p style={{ paddingBottom: "10px" }}>Set Timer limit</p>
              <div>
                {isStart ? (
                  <button
                    type="button"
                    className="minus__plus__icon"
                    onClick={this.minusHandle}
                  >
                    -
                  </button>
                ) : (
                  <button type="button" className="minus__plus__icon" disabled>
                    -
                  </button>
                )}
                <button type="button" className="time_limit_setter">
                  {limitTime}
                </button>
                {isStart ? (
                  <button
                    onClick={this.plusHandle}
                    type="button"
                    className="minus__plus__icon"
                    style={{ marginLeft: 10 }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    type="button"
                    className="minus__plus__icon"
                    style={{ marginLeft: 10 }}
                    disabled
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DigitalTimer;
