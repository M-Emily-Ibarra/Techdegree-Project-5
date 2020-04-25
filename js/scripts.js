function showPhoto(photo) {
	const galleryDiv = document.getElementById('content');
	galleryDiv.innerHTML = photo;
}

const photos = [
	[
		'images/01-thumb.jpg',
		'Hay Bales',
		'images/01.jpg',
		'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
	],
	[
		'images/02-thumb.jpg',
		'Lake',
		'images/02.jpg',
		'The lake was so calm today. We had a great view of the snow on the mountains from here.',
	],
	[
		'images/03-thumb.jpg',
		'Canyon',
		'images/03.jpg',
		'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
	],
	[
		'images/04-thumb.jpg',
		'Iceberg',
		'images/04.jpg',
		'It was amazing to see an iceberg up close, it was so cold but didn\'t snow today.',
	],
	[
		'images/05-thumb.jpg',
		'Desert',
		'images/05.jpg',
		'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
	],
	[
		'images/06-thumb.jpg',
		'Fall',
		'images/06.jpg',
		'Fall is coming, I love when the leaves on the trees start to change color.',
	],
	[
		'images/07-thumb.jpg',
		'Plantation',
		'images/07.jpg',
		'I drove past this plantation yesterday, everything is so green!',
	],
	[
		'images/08-thumb.jpg',
		'Dunes',
		'images/08.jpg',
		'My summer vacation to the Oregon Coast. I love the sandy dunes!',
	],
	[
		'images/09-thumb.jpg',
		'Countryside Lane',
		'images/09.jpg',
		'We enjoyed a quiet stroll down this countryside lane.',
	],
	[
		'images/10-thumb.jpg',
		'Sunset',
		'images/10.jpg',
		'Sunset at the coast! The sky turned a lovely shade of orange.',
	],
	[
		'images/11-thumb.jpg',
		'Cave',
		'images/11.jpg',
		'I did a tour of a cave today and the view of the landscape below was breathtaking.',
	],
	[
		'images/12-thumb.jpg',
		'Bluebells',
		'images/12.jpg',
		'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
	],
];

function photoCell(arr) {
	let cell = '';
	for ( let i = 0; i < arr.length; i++ ) {
		cell += `
			<a class="img_cell">
				<img src="${arr[i][0]}" alt="${arr[i][1]}">
				<div class="img_cell-overlay"><span>Click for large view</span></div>
			</a>
			<figure class="lg_img">
				<img src="${arr[i][2]}" alt="${arr[i][1]}">
				<figcaption>${arr[i][3]}</figcaption>
			</figure>
		`;
	}
	return cell;
}

showPhoto( photoCell(photos) );
