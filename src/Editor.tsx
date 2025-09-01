

function Editor() {

    let cubeArray = [];

    for (let i = 0; i < 1000; i++) {
        cubeArray.push({i, color: '#861a1aff'});
    }

    return (
        <div className="main-components editor">
            {cubeArray.map((cube, index) => (
                <div key={index} className="cube" style={{backgroundColor: cube.color}}></div>
            ))}
        </div>
    )
}

export default Editor;