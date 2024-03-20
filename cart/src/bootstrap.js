import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};

// In the case that during development, we need to display this element isolated
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");

  if (el) {
    mount(el);
  }
}
// In the case that we display this element inside container

export { mount };
