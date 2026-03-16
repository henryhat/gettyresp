// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const container = document.querySelector("#container");
//ASYCHRONOUS FUNCTION
const getProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    const cheap = data.products.filter((x) => x.price < 10);
    cheap.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-card");
      // productElement.classList = "product-card"
      productElement.innerHTML = `
            <img src="${product.thumbnail}" alt="product-images"/>
            <h3>${product.title}<h3/>
            <p>${product.description}<p/>
            <strong>${"$" + product.price}</strong>
            <button>Add to Cart</button>
            <h5>${product.category}</h5>
            `;
      container.appendChild(productElement);
    });
  } catch (error) {
    console.log("error", error);
  }
};
getProduct();
