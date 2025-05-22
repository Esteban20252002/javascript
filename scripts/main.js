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
        .attr('fill', '#1a3a1a'); // Verde más oscuro para el atardecer
    
    // Función para crear un árbol detallado
    function crearArbol(x, altura) {
        const troncoGroup = svg.append('g');
        
        // Tronco principal
        troncoGroup.append('rect')
            .attr('x', x - 12)
            .attr('y', height - 100 - altura)
            .attr('width', 24)
            .attr('height', altura)
            .attr('fill', '#6B4423'); // Marrón más oscuro para el atardecer
        
        // Detalles del tronco (textura)
        for (let i = 0; i < 4; i++) {
            troncoGroup.append('rect')
                .attr('x', x - 10 + i * 6)
                .attr('y', height - 100 - altura)
                .attr('width', 3)
                .attr('height', altura)
                .attr('fill', '#5C3A21')
                .attr('opacity', 0.7);
        }
        
        // Raíces visibles
        troncoGroup.append('path')
            .attr('d', `M ${x-12} ${height-100} 
                       Q ${x-20} ${height-95} ${x-24} ${height-100}`)
            .attr('stroke', '#6B4423')
            .attr('stroke-width', 4)
            .attr('fill', 'none');
            
        troncoGroup.append('path')
            .attr('d', `M ${x+12} ${height-100} 
                       Q ${x+20} ${height-95} ${x+24} ${height-100}`)
            .attr('stroke', '#6B4423')
            .attr('stroke-width', 4)
            .attr('fill', 'none');
        
        // Copa del árbol (un solo triángulo mediano)
        const triangleHeight = 120; // Altura proporcional al tronco
        const triangleWidth = 80; // Ancho proporcional
        
        // Crear un triángulo personalizado
        const trianglePath = `
            M ${x} ${height - altura - triangleHeight}
            L ${x - triangleWidth/2} ${height - altura - 15}
            L ${x + triangleWidth/2} ${height - altura - 15}
            Z
        `;
        
        svg.append('path')
            .attr('d', trianglePath)
            .attr('fill', '#1B4B1B'); // Verde más oscuro para el atardecer
    }
    
    // Crear exactamente 3 árboles
    const posicionesX = [200, 400, 600];
    posicionesX.forEach(x => {
        const altura = 120; // Altura mediana para los árboles
        crearArbol(x, altura);
    });
});
