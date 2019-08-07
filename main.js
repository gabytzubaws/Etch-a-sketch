const div = document.querySelector('.container');

//initially build a 16x16 grid.
createGrid(16);
var rows = 16;

var btn = document.getElementById('reset');
btn.addEventListener("click", function(rows){
    var n = document.querySelectorAll('.grids');
    var i = 0;
    while( i < n.length)
    {
        div.removeChild(n[i]);
        i++;
    }
    rows = prompt("Enter new grid size: ");
    createGrid(rows);
});

function createGrid(rows){
    for(i = 1 ; i <= rows * rows; i++)
    {
        const n = document.createElement('div');
        n.classList.add('grids');
        n.textContent = i;
        div.appendChild(n);
        n.addEventListener("mouseenter", function(){
            n.style.backgroundColor = "lightblue";
            //resets color after a short delay
            setTimeout(function(){
                n.style.backgroundColor = "";
            }, 500);
        }, false);
    }
    div.style.display = "grid";
    div.style.gridTemplateColumns = "repeat(" + rows + ",  1fr)";
    div.style.gridTemplateRows = "repeat(" + rows + ",  1fr)";
    //test

}
