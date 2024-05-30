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
    box.style.width = '250px';
    box.style.height = '250px';
    box.style.backgroundColor = '#f0f0f0';
    box.style.border = '1px solid #ccc';
    box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    box.style.borderRadius = '8px';
    box.style.zIndex = '1000';
    box.style.overflow = 'hidden'; // Ensure the content stays within the box
    box.innerHTML = `
        <div id="xvrBoxHeader" style="background: #007bff; color: white; padding: 5px; border-radius: 5px 5px 0 0; cursor: move;">XVR Box</div>
        <div style="padding: 10px;">
            <input type="text" id="numberInput" placeholder="Enter a number"><br><br>
            <button id="btnAlert">Show Alert</button>
            <button id="btnClear">Clear Input</button>
            <div style="margin-top: 10px;">
                <input type="checkbox" id="chk1"><label for="chk1"> Checkbox 1</label><br>
                <input type="checkbox" id="chk2"><label for="chk2"> Checkbox 2</label>
            </div>
        </div>
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

    // Placeholder actions for buttons and checkboxes
    document.getElementById('btnAlert').addEventListener('click', function() {
        const numberInput = document.getElementById('numberInput').value.trim();
        if (!isNaN(numberInput) && numberInput !== '') {
            alert('You entered: ' + numberInput);
        } else {
            alert('Please enter a valid number.');
        }
    });

    document.getElementById('btnClear').addEventListener('click', function() {
        document.getElementById('numberInput').value = '';
    });

    document.getElementById('chk1').addEventListener('change', function() {
        alert(`Checkbox 1 is now ${this.checked ? 'checked' : 'unchecked'}`);
    });

    document.getElementById('chk2').addEventListener('change', function() {
        alert(`Checkbox 2 is now ${this.checked ? 'checked' : 'unchecked'}`);
    });

})();
