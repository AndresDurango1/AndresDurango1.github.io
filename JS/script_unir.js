let currentMatch = null;
const infoModal1 = document.getElementById('infoModal1');
const closeModalButtons1 = document.querySelectorAll('.closeModal1');

window.addEventListener('load', () => {
  infoModal1.style.display = 'flex';
});

closeModalButtons1.forEach(closeModalButton1 => {
  closeModalButton1.addEventListener('click', () => {
    infoModal1.style.display = 'none';
  });
});
const itemsA = document.querySelectorAll('#sideA .item');
const itemsB = document.querySelectorAll('#sideB .item');
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.close');
let draggedItem = null;
let matchedItemsCount = 0;
/********************************ESCRITORIO (SE ARRASTRA CON EL CLIC)****************************/
itemsA.forEach(itemA => {
  itemA.addEventListener('dragstart', dragStart);
  itemA.addEventListener('dragend', dragEnd);
  itemA.addEventListener('click', () => {
    if (currentMatch) {
      return; 
    }
    currentMatch = itemA;
    itemA.classList.add('selected');
  });
});
itemsB.forEach(itemB => {
  itemB.addEventListener('dragover', dragOver);
  itemB.addEventListener('dragenter', dragEnter);
  itemB.addEventListener('dragleave', dragLeave);
  itemB.addEventListener('drop', drop);
  itemB.addEventListener('click', () => {
    if (!currentMatch) {
      return; 
    }
    const dataMatchA = currentMatch.getAttribute('data-match');
    const dataMatchB = itemB.getAttribute('data-match');
    if (dataMatchA === dataMatchB) {
      itemB.classList.add('matched');
      currentMatch.classList.add('matched');
      matchedItemsCount++;
      if (matchedItemsCount === itemsA.length) {
        showModal();
      }
    }
    currentMatch.classList.remove('selected');
    currentMatch = null;
  });
});
/********************************MOVIL (SE ARRASTRA CON E TOUCH)****************************/
itemsA.forEach(itemA => {
  itemA.addEventListener('touchstart', () => {
    if (currentMatch) {
      return; 
    }
    currentMatch = itemA;
    itemA.classList.add('selected');
  });
});
itemsB.forEach(itemB => {
  itemB.addEventListener('touchstart', () => {
    if (!currentMatch) {
      return; // No hay ningún elemento seleccionado
    }
    const dataMatchA = currentMatch.getAttribute('data-match');
    const dataMatchB = itemB.getAttribute('data-match');
    if (dataMatchA === dataMatchB) {
      itemB.classList.add('matched');
      currentMatch.classList.add('matched');
      matchedItemsCount++;
      if (matchedItemsCount === itemsA.length) {
        showModal();
      }
    }
    currentMatch.classList.remove('selected');
    currentMatch = null;
  });
});
/*********************************************************************/
function dragStart() {
  draggedItem = this;
  setTimeout(() => (this.style.display = 'none'), 0);
}
function dragEnd() {
  setTimeout(() => (this.style.display = 'block'), 0);
  draggedItem = null;
  checkMatches();
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}
function dragLeave() {
  this.classList.remove('hovered');
}
function drop() {
  this.classList.remove('hovered');
  if (draggedItem) {
    const dataMatch = draggedItem.getAttribute('data-match');
    if (this.getAttribute('data-match') === dataMatch) {
      this.innerHTML = draggedItem.innerHTML;
      draggedItem.classList.add('matched');
      this.classList.add('matched');
      draggedItem = null;
      checkMatches();
    }
  }
}
function checkMatches() {
  let isAllMatched = true; // Variable para rastrear si todos los elementos están emparejados
  itemsA.forEach(itemA => {
    const dataMatch = itemA.getAttribute('data-match');
    const matchedItemB = document.querySelector(`#sideB .item[data-match="${dataMatch}"]`);
    if (matchedItemB && !matchedItemB.classList.contains('matched')) {
      isAllMatched = false;
    }
  });
  if (isAllMatched && matchedItemsCount === 0) {
    matchedItemsCount++;
    showModal();
  }
}
function showModal() {
  modal.style.display = 'flex';
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
