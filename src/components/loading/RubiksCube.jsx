/**
 * @name
 * @param {Object} props
 */
export const RubiksCube = (props) => {
  return (
    <>
      <div className="">
        <div className="rubiks-loader">
          <div className="cube">
            {/* <!-- base position --> */}
            <div className="face front piece row-top    col-left   yellow"></div>
            <div className="face front piece row-top    col-center green "></div>
            <div className="face front piece row-top    col-right  white "></div>
            <div className="face front piece row-center col-left   blue  "></div>
            <div className="face front piece row-center col-center green "></div>
            <div className="face front piece row-center col-right  blue  "></div>
            <div className="face front piece row-bottom col-left   green "></div>
            <div className="face front piece row-bottom col-center yellow"></div>
            <div className="face front piece row-bottom col-right  red   "></div>

            {/* <!-- first step: E', equator inverted --> */}
            <div className="face down  piece row-top    col-center green "></div>
            <div className="face down  piece row-center col-center red   "></div>
            <div className="face down  piece row-bottom col-center white "></div>

            {/* <!-- second step: M, middle --> */}
            <div className="face right piece row-center col-left   yellow"></div>
            <div className="face right piece row-center col-center green "></div>
            <div className="face right piece row-center col-right  blue  "></div>

            {/* <!-- third step: L, left --> */}
            <div className="face up    piece row-top    col-left   yellow"></div>
            <div className="face up    piece row-center col-left   blue  "></div>
            <div className="face up    piece row-bottom col-left   green "></div>

            {/* <!-- fourth step: D, down --> */}
            <div className="face left  piece row-bottom col-left   green "></div>
            <div className="face left  piece row-bottom col-center yellow"></div>
            <div className="face left  piece row-bottom col-right  red   "></div>
          </div>
        </div>
        <style jsx>
          {`
            // Change CSS colour key to:
            // $grey:  #e2e8e7;
            // $neon: #A597FA;
            // $purple:   #4C249F;
            // $teal:  #35F0D0;
            // $white:    #FFFFFF;
            // $muted: #BBB2CE;

            /* Box model */
            div .rubiks-loader *,
            div .rubiks-loader *::before,
            div .rubiks-loader *::after {
              box-sizing: border-box;
              transform: scale(1);
            }

            /* Constants */
            /* Functions */
            /* Inheritance basis */
            div .rubiks-loader {
              width: 80px;
              height: 80px;
              position: relative;
              perspective: 80px;
            }

            /* Main */
            div .rubiks-loader .cube {
              display: inline-block;
              width: 100%;
              height: 100%;
              font-size: 0;
              transform-style: preserve-3d;
            }
            div .rubiks-loader .cube .piece {
              display: inline-block;
              width: 30px;
              height: 30px;
              position: absolute;
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
            div .rubiks-loader .cube .piece.row-top {
              top: 10px;
            }
            div .rubiks-loader .cube .piece.row-center {
              top: 50px;
            }
            div .rubiks-loader .cube .piece.row-bottom {
              top: 90px;
            }
            div .rubiks-loader .cube .piece.col-left {
              left: 10px;
            }
            div .rubiks-loader .cube .piece.col-center {
              left: 50px;
            }
            div .rubiks-loader .cube .piece.col-right {
              left: 90px;
            }
            div .rubiks-loader .cube .piece.col-left.row-top {
              transform-origin: 55px 55px -55px;
            }
            div .rubiks-loader .cube .piece.col-center.row-top {
              transform-origin: 15px 55px -55px;
            }
            div .rubiks-loader .cube .piece.col-right.row-top {
              transform-origin: -25px 55px -55px;
            }
            div .rubiks-loader .cube .piece.col-left.row-center {
              transform-origin: 55px 15px -55px;
            }
            div .rubiks-loader .cube .piece.col-center.row-center {
              transform-origin: 15px 15px -55px;
            }
            div .rubiks-loader .cube .piece.col-right.row-center {
              transform-origin: -25px 15px -55px;
            }
            div .rubiks-loader .cube .piece.col-left.row-bottom {
              transform-origin: 55px -25px -55px;
            }
            div .rubiks-loader .cube .piece.col-center.row-bottom {
              transform-origin: 15px -25px -55px;
            }
            div .rubiks-loader .cube .piece.col-right.row-bottom {
              transform-origin: -25px -25px -55px;
            }
            div .rubiks-loader .cube .piece.yellow {
              background-color: #a597fa;
            }
            div .rubiks-loader .cube .piece.blue {
              background-color: #4c249f;
            }
            div .rubiks-loader .cube .piece.green {
              background-color: #35f0d0;
            }
            div .rubiks-loader .cube .piece.white {
              background-color: #ffffff;
            }
            div .rubiks-loader .cube .piece.red {
              background-color: #bbb2ce;
            }
            div .rubiks-loader .cube .piece.orange {
              background-color: #fc9f39;
            }
            div .rubiks-loader .cube .face.back {
              transform: rotateY(180deg);
            }
            div .rubiks-loader .cube .face.right {
              transform: rotateY(90deg);
            }
            div .rubiks-loader .cube .face.left {
              transform: rotateY(-90deg);
            }
            div .rubiks-loader .cube .face.up {
              transform: rotateX(90deg);
            }
            div .rubiks-loader .cube .face.down {
              transform: rotateX(-90deg);
            }

            /* Animations */
            /* This begins to become messy & dirty... */
            div .rubiks-loader .piece {
              -webkit-animation-duration: 1.5s;
              animation-duration: 1.5s;
              -webkit-animation-iteration-count: infinite;
              animation-iteration-count: infinite;
            }

            @-webkit-keyframes step-1-front-to-up {
              0% {
                transform: rotateX(0deg);
              }
              25%,
              100% {
                transform: rotateX(90deg);
              }
            }

            @keyframes step-1-front-to-up {
              0% {
                transform: rotateX(0deg);
              }
              25%,
              100% {
                transform: rotateX(90deg);
              }
            }
            div .rubiks-loader .face.front.piece.col-center {
              -webkit-animation-name: step-1-front-to-up;
              animation-name: step-1-front-to-up;
            }

            @-webkit-keyframes step-1-down-to-front {
              0% {
                transform: rotateX(-90deg);
              }
              25%,
              100% {
                transform: rotateX(0deg);
              }
            }

            @keyframes step-1-down-to-front {
              0% {
                transform: rotateX(-90deg);
              }
              25%,
              100% {
                transform: rotateX(0deg);
              }
            }
            div .rubiks-loader .face.down.piece.col-center {
              -webkit-animation-name: step-1-down-to-front;
              animation-name: step-1-down-to-front;
            }

            @-webkit-keyframes step-2-front-to-left {
              25% {
                transform: rotateY(0deg);
              }
              50%,
              100% {
                transform: rotateY(-90deg);
              }
            }

            @keyframes step-2-front-to-left {
              25% {
                transform: rotateY(0deg);
              }
              50%,
              100% {
                transform: rotateY(-90deg);
              }
            }
            div .rubiks-loader .face.piece.front.row-center.col-left,
            div .rubiks-loader .face.piece.down.row-center.col-center,
            div .rubiks-loader .face.piece.front.row-center.col-right {
              -webkit-animation-name: step-2-front-to-left;
              animation-name: step-2-front-to-left;
            }

            @-webkit-keyframes step-2-right-to-front {
              25% {
                transform: rotateY(90deg);
              }
              50%,
              100% {
                transform: rotateY(0deg);
              }
            }

            @keyframes step-2-right-to-front {
              25% {
                transform: rotateY(90deg);
              }
              50%,
              100% {
                transform: rotateY(0deg);
              }
            }
            div .rubiks-loader .face.right.piece.row-center {
              -webkit-animation-name: step-2-right-to-front;
              animation-name: step-2-right-to-front;
            }

            @-webkit-keyframes step-3-front-to-down {
              50% {
                transform: rotateX(0deg);
              }
              75%,
              100% {
                transform: rotateX(-90deg);
              }
            }

            @keyframes step-3-front-to-down {
              50% {
                transform: rotateX(0deg);
              }
              75%,
              100% {
                transform: rotateX(-90deg);
              }
            }
            @-webkit-keyframes step-2-3-right-to-front-to-down {
              25% {
                transform: rotateY(90deg);
              }
              50% {
                transform: rotateX(0deg);
              }
              75%,
              100% {
                transform: rotateX(-90deg);
              }
            }
            @keyframes step-2-3-right-to-front-to-down {
              25% {
                transform: rotateY(90deg);
              }
              50% {
                transform: rotateX(0deg);
              }
              75%,
              100% {
                transform: rotateX(-90deg);
              }
            }
            div .rubiks-loader .face.piece.front.row-top.col-left,
            div .rubiks-loader .face.piece.front.row-bottom.col-left {
              -webkit-animation-name: step-3-front-to-down;
              animation-name: step-3-front-to-down;
            }
            div .rubiks-loader .face.piece.right.row-center.col-left {
              -webkit-animation-name: step-2-3-right-to-front-to-down;
              animation-name: step-2-3-right-to-front-to-down;
            }

            @-webkit-keyframes step-3-up-to-front {
              50% {
                transform: rotateX(90deg);
              }
              75%,
              100% {
                transform: rotateX(0deg);
              }
            }

            @keyframes step-3-up-to-front {
              50% {
                transform: rotateX(90deg);
              }
              75%,
              100% {
                transform: rotateX(0deg);
              }
            }
            div .rubiks-loader .face.up.piece.col-left {
              -webkit-animation-name: step-3-up-to-front;
              animation-name: step-3-up-to-front;
            }

            @-webkit-keyframes step-4-front-to-right {
              75% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(90deg);
              }
            }

            @keyframes step-4-front-to-right {
              75% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(90deg);
              }
            }
            @-webkit-keyframes step-1-4-down-to-front-to-right {
              0% {
                transform: rotateX(-90deg);
              }
              25% {
                transform: rotateX(0deg);
              }
              75% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(90deg);
              }
            }
            @keyframes step-1-4-down-to-front-to-right {
              0% {
                transform: rotateX(-90deg);
              }
              25% {
                transform: rotateX(0deg);
              }
              75% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(90deg);
              }
            }
            @-webkit-keyframes step-3-4-up-to-front-to-right {
              50% {
                transform: rotateX(90deg);
              }
              75% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(90deg);
              }
            }
            @keyframes step-3-4-up-to-front-to-right {
              50% {
                transform: rotateX(90deg);
              }
              75% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(90deg);
              }
            }
            div .rubiks-loader .face.piece.front.row-bottom.col-right {
              -webkit-animation-name: step-4-front-to-right;
              animation-name: step-4-front-to-right;
            }
            div .rubiks-loader .face.piece.down.row-bottom.col-center {
              -webkit-animation-name: step-1-4-down-to-front-to-right;
              animation-name: step-1-4-down-to-front-to-right;
            }
            div .rubiks-loader .face.piece.up.row-bottom.col-left {
              -webkit-animation-name: step-3-4-up-to-front-to-right;
              animation-name: step-3-4-up-to-front-to-right;
            }

            @-webkit-keyframes step-4-left-to-front {
              75% {
                transform: rotateY(-90deg);
              }
              100% {
                transform: rotateY(0deg);
              }
            }

            @keyframes step-4-left-to-front {
              75% {
                transform: rotateY(-90deg);
              }
              100% {
                transform: rotateY(0deg);
              }
            }
            div .rubiks-loader .face.left.piece.row-bottom {
              -webkit-animation-name: step-4-left-to-front;
              animation-name: step-4-left-to-front;
            }
          `}
        </style>
      </div>
    </>
  );
};
export default RubiksCube;
