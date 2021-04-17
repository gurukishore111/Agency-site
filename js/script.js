const toogle = document.querySelector(".toogle");
const navigation = document.querySelector(".navigation");

toogle.addEventListener("click", () => {
  toogle.classList.toggle("active");
  navigation.classList.toggle("active");
});
