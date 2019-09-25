var app = new Vue({
	el: '#app',
	data: {
		product: "Socks",
		image: "navy_socks.png",
		alt: "picture of blue socks",
		inStock: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantID: 2234,
				variantColor: '#02154F',
				variantImage: 'navy_socks.png'
			},
			{
				variantID: 2235,
				variantColor: '#DBD77C',
				variantImage: 'khaki_socks.png'
			}
		],
		cart: 0
	},
	methods: {
		addToCart: function () {
			this.cart += 1
		},
		updateProduct: function (variantImage){
			this.image = variantImage
		}
	}
})
