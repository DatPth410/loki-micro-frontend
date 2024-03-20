import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};
// In the case that during development, we need to display this element isolated
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}
// In the case that we display this element inside container

export { mount };
