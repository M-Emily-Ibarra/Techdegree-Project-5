function showPhoto(photo) {
	const galleryDiv = document.getElementById('content');
	galleryDiv.innerHTML = photo;
}

const photos = [
	{
		thumb: 'images/01-thumb.jpg',
		alt: 'Hay Bales',
		src: 'images/01.jpg',
		caption: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
	},
	{
		thumb: 'images/02-thumb.jpg',
		alt: 'Lake',
		src: 'images/02.jpg',
		caption: 'The lake was so calm today. We had a great view of the snow on the mountains from here.',
	},
	{
		thumb: 'images/03-thumb.jpg',
		alt: 'Canyon',
		src: 'images/03.jpg',
		caption: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
	},
	{
		thumb: 'images/04-thumb.jpg',
		alt: 'Iceberg',
		src: 'images/04.jpg',
		caption: 'It was amazing to see an iceberg up close, it was so cold but didn\'t snow today.',
	},
	{
		thumb: 'images/05-thumb.jpg',
		alt: 'Desert',
		src: 'images/05.jpg',
		caption: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
	},
	{
		thumb: 'images/06-thumb.jpg',
		alt: 'Fall',
		src: 'images/06.jpg',
		caption: 'Fall is coming, I love when the leaves on the trees start to change color.',
	},
	{
		thumb: 'images/07-thumb.jpg',
		alt: 'Plantation',
		src: 'images/07.jpg',
		caption: 'I drove past this plantation yesterday, everything is so green!',
	},
	{
		thumb: 'images/08-thumb.jpg',
		alt: 'Dunes',
		src: 'images/08.jpg',
		caption: 'My summer vacation to the Oregon Coast. I love the sandy dunes!',
	},
	{
		thumb: 'images/09-thumb.jpg',
		alt: 'Countryside Lane',
		src: 'images/09.jpg',
		caption: 'We enjoyed a quiet stroll down this countryside lane.',
	},
	{
		thumb: 'images/10-thumb.jpg',
		alt: 'Sunset',
		src: 'images/10.jpg',
		caption: 'Sunset at the coast! The sky turned a lovely shade of orange.',
	},
	{
		thumb: 'images/11-thumb.jpg',
		alt: 'Cave',
		src: 'images/11.jpg',
		caption: 'I did a tour of a cave today and the view of the landscape below was breathtaking.',
	},
	{
		thumb: 'images/12-thumb.jpg',
		alt: 'Bluebells',
		src: 'images/12.jpg',
		caption: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
	},
];

let photoCell = (cell) => {
	for ( prop in cell ) {
		return `
			<a class="img_cell">
				<img src="${cell['thumb']}" alt="${cell['alt']}">
				<div class="img_cell-overlay"><span>Click for large view</span></div>
			</a>
			<figure class="lg_img">
				<img src="${cell['src']}" alt="${cell['alt']}">
				<figcaption>${cell['caption']}</figcaption>
			</figure>
		`;
	}
}

function generateGallery(arr) {
	let cell = '';
	for ( let i = 0; i < arr.length; i++ ) {
		cell += photoCell(arr[i]);
	}
	return cell;
}

showPhoto( generateGallery(photos) );
