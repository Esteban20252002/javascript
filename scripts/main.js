document.addEventListener('DOMContentLoaded', () => {
    // Configuración del SVG
    const width = 800;
    const height = 600;
    
    // Crear el elemento SVG
    const svg = d3.select('#escena-bosque')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Agregar el suelo (césped)
    svg.append('rect')
        .attr('x', 0)
        .attr('y', height - 100)
        .attr('width', width)
        .attr('height', 100)
        .attr('fill', '#2d5a27'); // Verde oscuro para el suelo
    
    // Función para crear un árbol simple
    function crearArbol(x, altura) {
        // Tronco
        svg.append('rect')
            .attr('x', x - 10)
            .attr('y', height - altura - 100)
            .attr('width', 20)
            .attr('height', altura - 60)
            .attr('fill', '#8B4513'); // Marrón
        
        // Copa del árbol (triángulo)
        svg.append('path')
            .attr('d', d3.symbol().type(d3.symbolTriangle).size(5000))
            .attr('fill', '#228B22') // Verde forestall
            .attr('transform', `translate(${x}, ${height - altura - 80}) scale(2,-2)`);
        
        svg.append('path')
            .attr('d', d3.symbol().type(d3.symbolTriangle).size(4000))
            .attr('fill', '#228B22')
            .attr('transform', `translate(${x}, ${height - altura - 120}) scale(1.8,-1.8)`);
    }
    
    // Crear varios árboles
    const numArboles = 8;
    for(let i = 0; i < numArboles; i++) {
        const x = 100 + (width - 200) * (i / (numArboles - 1));
        const altura = 120 + Math.random() * 60;
        crearArbol(x, altura);
    }
});
