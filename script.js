const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

// открытие модального окна
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";

  // появление кнопки закрытия через 1с
  setTimeout(() => {
    closeModalBtn.style.visibility = "visible";
  }, 1000);
});

// -------------------

// Обработчик закрытия (постоянный, не удаляем)
closeModalBtn.addEventListener("click", closeModal);

// -------------------

// закрытие модального окна
function closeModal() {
  modal.style.display = "none";
  // Сбрасываем видимость кнопки для следующего открытия
  closeModalBtn.style.visibility = "hidden";
}

// закрытие по клику вне модалки
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// закрытие по ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// функция удаления обработчика ???
function deleteAddEventListener() {
  closeModalBtn.removeEventListener("click", closeModal);
}
