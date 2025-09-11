import {
  TransformWrapper,
  TransformComponent,
//   useControls,
} from "react-zoom-pan-pinch";

import { useWindowSize } from "@uidotdev/usehooks";

// const Controls = () => {
//   const { zoomIn, zoomOut, resetTransform } = useControls();

//   return (
//     <div className="tools">
//       <button onClick={() => zoomIn()}>+</button>
//       <button onClick={() => zoomOut()}>-</button>
//       <button onClick={() => resetTransform()}>x</button>
//     </div>
//   );
// };

function Editor() {
  const size = useWindowSize();
  let cubeArray = [];

  const randomHexColor = () =>
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  for (let i = 0; i < 10000; i++) {
    cubeArray.push({ i, color: randomHexColor() });
  }

  return (
    // <div className="editor-container">
    <TransformWrapper
      limitToBounds={true}
      alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
      centerZoomedOut={true}
      minScale={1}
      maxScale={3}
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      panning={{ disabled: false, velocityDisabled: false }}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          {/* <Controls /> */}
          <TransformComponent>
            <div className="editor">
              {cubeArray.map((cube, index) => (
                <span
                  key={index}
                  className="cube"
                  style={{ backgroundColor: cube.color }}
                ></span>
              ))}
            </div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}

export default Editor;
