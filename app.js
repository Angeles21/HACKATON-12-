/// --- Class container  --- ///
class cart {
	/* Requested items */
	constructor(image, price, title, id) {
		this.image = image;
		this.price = price;
		this.title = title;
		this.id = id;
	}

	constructElement() {
		/* --- */
		const tr = document.createElement("tr");
		const td1 = document.createElement("td");
		const img1 = document.createElement("img");
		const td2 = document.createElement("td");
		const td3 = document.createElement("td");
		const td4 = document.createElement("td");
		const i4 = document.createElement("i");
		const a4 = document.createElement("a");
		/*---*/

		img1.src = this.image;
		td1.appendChild(img1);
		td2.textContent = this.title;
		td3.textContent = this.price;
		a4.setAttribute("onClick", "deleteItemID(" + this.id + ")");
		i4.setAttribute("class", "fas fa-trash-alt");
		a4.appendChild(i4);
		td4.appendChild(a4);
		tr.setAttribute("id", this.id);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		/* Location */

		const container = document.querySelector("tbody");
		container.appendChild(tr);
		this.getInfoItem();
	}

	/* Product Information */

	getInfoItem() {
		const infoItem = {
			image: this.image,
			price: this.price,
			title: this.title,
			id: this.id,
		};
		infoItems = [...infoItems, infoItem];
		infoItems = infoItems.filter((item, index) => {
			return infoItems.indexOf(item) === index;
		});
		counter.textContent = infoItems.length;
	}
	/* Delete only one */
	deleteItemID() {
		var elemento = document.getElementById(this.id);
		if (!elemento) {
		} else {
			elemento.remove();
		}
		infoItems = infoItems.filter((cd) => cd.id != this.id);
		counter.textContent = infoItems.length;
	}

	deleteItemTotaly() {
		infoItems.forEach((infoItem, index) => {
			deleteItemID(infoItem.id);
		});
		counter.textContent = infoItems.length;
	}
}

/* --- APPLICATION ---  */

const father = document.getElementById("father");
/* Empty array */
let infoItems = [];
const start = new cart(null, null, null, null);

/* Finding the elements for the cart  */
father.addEventListener("click", (e) => {
	if (e.target.classList.contains("shopping")) {
		purchase = e.target.parentElement.parentElement;
		image = purchase.firstElementChild.src;
		title = purchase.children[1].textContent;
		price = purchase.children[3].children[1].firstElementChild.textContent;
		id = purchase.children[4].textContent;

		/* Validation  */

		const idSearch = id;
		const result = infoItems.find((infoItem) => infoItem.id === idSearch);
		if (result) {
			//console.log(result);
		} else {
			//console.log('Empty');
			const newItem = new cart(image, price, title, id);
			newItem.constructElement();
		}
	}
});

function deleteItemID(id) {
	const trash = new cart(image, price, title, id);
	trash.deleteItemID();
}

function deleteAll() {
	const trashAll = new cart(image, price, title, id);
	trashAll.deleteAll();
}
