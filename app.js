/* --- Initial class --- */
class cart {
	constructor(img, title, price, id, quantity) {
		this.img = img;
		this.title = title;
		this.price = price;
		this.id = id;
		this.quantity = quantity;
	}

	dataEntry(item, id) {
		const infoItem = {
			image: item.querySelector("img").src,
			title: item.querySelector("h2").textContent,
			price: item.querySelector(".value").textContent,
			id,
			quantity: 1,
		};

		newItems = [...newItems, infoItem];
		document.getElementById("counter").textContent = `${newItems.length}`;
	}

	keepIn(items) {
		const purchase = document.createElement("tr");
		items.forEach((item) => {
			purchase.innerHTML = `
            <td>
                <img src= "${item.image}" style = "width: 100%;"/>
            </td>
            <td> "${item.title}"</td>
            <td> "${item.quantity}" </td>
            <td> "${item.price}" </td>
    
            <td>
                <a href="#" class = "delete" data-id="${item.id}"> x </a>
            </td>`;
		});

		document.querySelector("#list__cart tbody").appendChild(purchase);
	}

	deleteItem(e) {
		if (e.target.classList.contains("delete")) {
			const currentItem = e.target.parentElement.parentElement;
			const itemId = parseInt(currentItem.querySelector("a").getAttribute("data-id"));
			const counter = document.getElementById("counter");
			counter.textContent = `${parseInt(counter.textContent) - 1}`;

			currentItem.remove();

			const removedIndex = newItems.findIndex((item) => item.id === itemId);
			newItems.splice(removedIndex, 1);

			console.info(itemId);
			console.info(document.querySelector(`button[data-id="${itemId}"]`));
			document.querySelector(`button[data-id="${itemId}"]`).removeAttribute("disabled");
		}
	}

	emptyItem(e) {
		e.preventDefault();
		document.querySelector("#list__cart tbody").innerHTML = "";
		document.getElementById("counter").textContent = "0";
		newItems = [];
	}
}

function addItem(e) {
	if (e.target.classList.contains("shopping")) {
		let item = e.target.parentElement.parentElement;

		/*Only once per item */
		let button = e.target;
		button.setAttribute("disabled", "");
		dataEntry(item, button.getAttribute("data-id"));
	}
	const purchaseItem = new cart(img, title, price, id, quantity);
	purchaseItem.addItem();
}

function deleteItem(id) {
	const deleteItemA = new cart(img, title, price, id, quantity);
	deleteItemA.delete();
}

function emptyItem() {
	const deleteAll = new cart(img, title, price, id, quantity);
	deleteAll.emptyItem();
}
