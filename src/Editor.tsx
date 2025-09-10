function Editor() {
  let cubeArray = [];

  const randomHexColor = () =>
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  for (let i = 0; i < 1000; i++) {
    cubeArray.push({ i, color: randomHexColor() });
  }

  return (
    <div className="editor">
      {cubeArray.map((cube, index) => (
        <div
          key={index}
          className="cube"
          style={{ backgroundColor: cube.color }}
        ></div>
      ))}
    </div>
  );
}

export default Editor;
