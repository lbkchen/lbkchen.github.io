import classNames from "classnames";
import React from "react";

import P from "./typography/paragraph";
import theme from "../styles/theme";

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false
    };
  }

  setHovering = () => {
    this.setState({ isHovering: true });
  };

  unsetHovering = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { imgUrl, leftText, rightText, title, description } = this.props;
    return (
      <div
        className="card"
        onMouseEnter={this.setHovering}
        onMouseLeave={this.unsetHovering}
      >
        <div className="image-container">
          <img
            className="image"
            src={imgUrl || "/static/images/montane-online.jpg"}
            alt="image"
          />

          <div
            className={classNames("image-overlay", {
              "image-overlay--visible": this.state.isHovering
            })}
          >
            <P>
              <b>{title.toUpperCase()}</b>
            </P>
            <P>{description}</P>
          </div>
        </div>

        <div className="content-container">
          <div className="content content--left">{leftText}</div>
          <div className="content content--right">{rightText}</div>
        </div>

        <style jsx>{`
          .card {
            width: 300px;
            height: 360px;
            padding: 18px;
            margin: 8px;
            transition: 120ms;
            transform-origin: center 8px;
          }

          .card:hover {
            background-color: ${theme.colors.white};
            box-shadow: 4px 4px 32px 10px rgba(0, 0, 0, 0.08);
            transform: rotate(1.6deg) scale(1.02, 1.02);
            cursor: pointer;
          }

          .image-container {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 252px;
            color: white;
          }

          .image {
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }

          .image-overlay {
            width: 100%;
            height: 100%;
            padding: 32px;
            background: rgba(36, 37, 43, 0.7);
            z-index: 999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 120ms;
            opacity: 0;
            text-align: center;
          }

          .image-overlay--visible {
            opacity: 1;
          }

          .content-container {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 12px;
          }

          .content {
            max-width: 40%;
            font-size: 12px;
            font-weight: bold;
            line-height: 16px;
            letter-spacing: -0.32px;
          }

          .content--content-left {
            text-align: left;
          }

          .content--content-right {
            text-align: right;
          }
        `}</style>
      </div>
    );
  }
}
