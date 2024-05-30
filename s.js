// Show alert
alert("XVR Injected!");

// Create draggable GUI box
(function() {
    // Create the box element
    const box = document.createElement('div');
    box.id = 'xvrBox';
    box.style.position = 'absolute';
    box.style.top = '100px';
    box.style.left = '100px';
    box.style.width = '200px';
    box.style.height = '150px';
    box.style.backgroundColor = '#f0f0f0';
    box.style.border = '1px solid #ccc';
    box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    box.style.borderRadius = '8px';
    box.style.padding = '0'; // Remove padding from the main box
    box.style.zIndex = '1000';
    box.innerHTML = `
        <div id="xvrBoxHeader" style="background: #007bff; color: white; padding: 5px; border-radius: 5px 5px 0 0; cursor: move;">XVR Box</div>
        <div style="padding: 10px;">Draggable Content</div>
    `;
    
    // Append the box to the body
    document.body.appendChild(box);

    // Make the box draggable by the header
    const header = document.getElementById('xvrBoxHeader');
    let isDragging = false;
    let offsetX, offsetY;

    header.onmousedown = function(e) {
        isDragging = true;
        offsetX = e.clientX - box.offsetLeft;
        offsetY = e.clientY - box.offsetTop;
        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;
    };

    function onMouseMove(e) {
        if (isDragging) {
            box.style.left = (e.clientX - offsetX) + 'px';
            box.style.top = (e.clientY - offsetY) + 'px';
        }
    }

    function onMouseUp() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
    }
})();
