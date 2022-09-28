// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

/*
window.onload = () => {
    // Get the WebGL context
    var canvas = document.getElementById('canvas');
    var gl = canvas.getContext('experimental-webgl');

    // Pipeline setup
    gl.clearColor(0, 0, 0, 1);//RGB der Hintergrundfarbe

    // Compile a vertex shader ==> Knoten des kleinen Vierecks
    var vsSource = 'attribute vec2 pos;' +
        'void main(){gl_Position = vec4(pos *0.5,0, 1); }';
    var vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);

    // Compile a fragment shader  ==> Farbe des kleinen Vierecks
    fsSouce = 'void main() { gl_FragColor = vec4(1); }'; // RGB, nur ein Wert, dann für alle
    var fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSouce);
    gl.compileShader(fs);

    // Link together into a program  ==> Zusammenführen und ein Programm erzeugen und laden
    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Load vertex data into a buffer ==> Laden der konkreten Daten in einen Buffer
    //var vertices = new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]); // Dreiecke
    var vertices = new Float32Array([1, 1, -1, 1, -1, -1, 1, -1]); // nicht überschneidende Linien
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Bind vertex buffer to attribute variable   ==> Konkrete Daten an Eigenschaft pos übergeben
    var posAttrib = gl.getAttribLocation(prog, 'pos');
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(posAttrib);

    // Clear framebuffer and render primitives
    gl.clear(gl.COLOR_BUFFER_BIT);
    //gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Dreiecke
    gl.drawArrays(gl.LINE_LOOP, 0, 4); // Linien
}
*/

/*
window.onload = () => {
    // Get the WebGL context
    var canvas = document.getElementById('canvas');
    var gl = canvas.getContext('webgl2');

    // Pipeline setup
    gl.clearColor(0.9, 0.9, 0.9, 1);//RGB der Hintergrundfarbe

    // Compile a vertex shader ==> Knoten des kleinen Vierecks
    var vsSource = '' +
        'attribute vec2 pos;' +
        'void main(){' +
        'gl_Position = vec4(pos, 0, 1);' +
        'gl_PointSize = 10.0; ' +
        '}';

    var vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);

    // Compile a fragment shader ==> Farbe des kleinen Vierecks
    fsSouce =
        'void main() { ' +
        'gl_FragColor = vec4(0,0,0,1); ' +
        '}';

    var fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSouce);
    gl.compileShader(fs);

    // Link together into a program  ==> Zusammenführen und ein Programm erzeugen und laden
    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Load vertex data into a buffer ==> Laden der konkreten Daten in einen Buffer
    var vertices = new Float32Array([
        -0.5, -0.5,
        -0.5, 0.5,
        0.5, -0.5,
        0.5, 0.5,
        -0.5, -0.5,
        0.5, -0.5,
        -0.5, 0.5,
        0.5, 0.5,
        -0.5, -0.5,
        0.5, 0.5,
        0.5, -0.5,
        -0.5, 0.5,
        -0.5, 0.5,
        0, 0.75,
        0.5, 0.5,
        0, 0.75]); // nicht überschneidende Linien
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Bind vertex buffer to attribute variable   ==> Konkrete Daten an Eigenschaft pos übergeben
    var posAttrib = gl.getAttribLocation(prog, 'pos');
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(posAttrib);

    // Clear framebuffer and render primitives
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.LINES, 0, 16);
}
*/

/**
 * Erzeugt einen WebGL Kontext mit dem als RGB übergebenen Farbwert als Hintergrund
 * und gibt diesen zurück.
 * @param redVal Der Rotwert
 * @param greenVal Der Grünwert
 * @param blueVal Der Blauwert
 * @param alphaVal Der Aplhawert
 * @returns {*} Einen WebGL Kontext
 */
function getContext(redVal, greenVal, blueVal, alphaVal) {
    // Get the WebGL context
    var canvas = document.getElementById('canvas');
    var gl = canvas.getContext('webgl2');

    gl.clearColor(0.9, 0.9, 0.9, 1);//RGB der Hintergrundfarbe

    return gl;
}

/**
 * Definiert die zur Ausgabe benötigten Punkte und gibt diese als Float32Array zurück
 * @returns {Float32Array} Ein Array mit definierten Punkten
 */
function getVerticesArray() {
    var vertices = new Float32Array([
        -0.5, 0.5,
        -0.5, -0.5,
        0.5, -0.5,
        0.5, 0.5,
        0, 0.75]);

    return vertices;
}

window.onload = () => {
    var gl = getContext(0.9, 0.9, 0.9, 1);

    // Compile a vertex shader ==> Knoten des kleinen Vierecks
    var vsSource = '' +
        'attribute vec2 pos;' +
        'void main(){' +
        'gl_Position = vec4(pos, 0, 1);' +
        'gl_PointSize = 10.0; ' +
        '}';

    var vsShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vsShader, vsSource);
    gl.compileShader(vsShader);

    // Compile a fragment shader ==> Farbe des kleinen Vierecks
    fsSouce =
        'void main() { ' +
        'gl_FragColor = vec4(1,0,0,1); ' +
        '}';

    var fsShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fsShader, fsSouce);
    gl.compileShader(fsShader);

    // Link together into a program  ==> Zusammenführen und ein Programm erzeugen und laden
    var prog = gl.createProgram();
    gl.attachShader(prog, vsShader);
    gl.attachShader(prog, fsShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Default CCW, ist daher optional
    gl.frontFace(gl.CCW);     // Wie ist die Anwordnung? CCW oder CW?
    // Default Back, ist daher optional
    gl.cullFace(gl.BACK);       // Was soll gecullt werden? Back oder Front Face

    gl.enable(gl.CULL_FACE);        // Einschalten des Culling
    //gl.disable(gl.CULL_FACE);        // Ausschalten des Culling

    // Load vertex data into a buffer ==> Laden der konkreten Daten in einen Buffer
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, getVerticesArray(), gl.STATIC_DRAW);

    // Bind vertex buffer to attribute variable   ==> Konkrete Daten an Eigenschaft pos übergeben
    var posAttrib = gl.getAttribLocation(prog, 'pos');
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(posAttrib);

    // Clear framebuffer and render primitives
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 5);
}