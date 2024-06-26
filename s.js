alert("Menu Loaded!");

(function() {
    const box = document.createElement('div');
    box.id = 'menuBox';
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
    box.style.overflow = 'hidden'; 
    box.innerHTML = `
        <div id="menuBoxHeader" style="background: #007bff; color: white; padding: 5px; border-radius: 5px 5px 0 0; cursor: move;">Menu Box
            <button id="closeButton" style="float: right; background: none; border: none; color: white; cursor: pointer;">&times;</button>
        </div>
        <div style="padding: 10px;">
            <input type="text" id="numberInput" placeholder="Input"><br><br>
            <button id="btnAlert">Show Alert</button>
            <button id="btnClear">Clear Input</button>
            <div style="margin-top: 10px;">
                <input type="checkbox" id="chk1"><label for="chk1"> Checkbox 1</label><br>
                <input type="checkbox" id="chk2"><label for="chk2"> Checkbox 2</label>
                <button id="btn1">Button 1</button>
                <button id="btn2">Button 2</button>
            </div>
        </div>
        <div style="position: absolute; bottom: 10px; width: 100%; text-align: center;">
            <a href="https://github.com/zix92i89451" target="_blank" style="color: #007bff; text-decoration: none;">Developed by Zix</a>
        </div>
    `;
    
    // Append the box to the body
    document.body.appendChild(box);

    // Make the box draggable by the header
    const header = document.getElementById('menuBoxHeader');
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

    // Close button functionality
    document.getElementById('closeButton').addEventListener('click', function() {
        document.body.removeChild(box);
    });

    // Placeholder actions for buttons and checkboxes
    document.getElementById('btnAlert').addEventListener('click', function() {
        const numberInput = document.getElementById('numberInput').value.trim();
        if (!isNaN(numberInput) && numberInput !== '') {
            alert('You entered: ' + numberInput);
        } else {
            alert('Please enter a valid number.');
        }
    });

    document.getElementById('btn1').addEventListener('click', function() {
        alert('Button 1 clicked!');
    });

    document.getElementById('btn2').addEventListener('click', function() {
        alert('Button 2 clicked!');
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
