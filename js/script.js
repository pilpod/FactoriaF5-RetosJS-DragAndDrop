const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart(e) {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    e.dataTransfer.setData('text', e.target.id);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    this.style.backgroundColor = '#ff55cc';
    this.style.border = '3px dashed white';
}

function dragEnter(e) {
    console.log('dragenter');

}

function dragLeave(e) {
    console.log('dragleave');
    this.style.backgroundColor = '#ffffff';
    this.style.border = '3px solid black';

}

function dragDrop(e) {
    console.log('dragdrop');
    e.preventDefault();
    this.style.backgroundColor = '#ffffff';
    this.style.border = '3px solid black';
    let data = e.dataTransfer.getData('text');
    console.log(data);
    e.target.appendChild(document.getElementById(data));

    
}