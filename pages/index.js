import { useState } from 'react';
import { GET_IMAGES_URL } from '../utils/endpoints';
import ImageGallery from '../components/ImageGallery/ImageGallery';

import styles from '../styles/Home.module.css';

export default function Home({ imageGallery }) {
	const [nextImages, setNextImages] = useState();
	const [counterPage, setCounterPage] = useState(2);
	const [isLoadingImages, setIsLoadingImages] = useState(false);

	const showNextThreeImages = async () => {
		setIsLoadingImages(true);

		const response = await fetch(`${GET_IMAGES_URL}?page=${counterPage}&limit=3`);
		const data = await response.json();

		setNextImages(data);
		setCounterPage(prevCounterPage => prevCounterPage + 1);

		if (data) setIsLoadingImages(false);
	}

  return (
		<>
			<div className={styles.container}>
				{!nextImages && <ImageGallery images={imageGallery}/>}
				{nextImages && <ImageGallery images={nextImages}/>}
			</div>

			<div className={styles.alignCenter}>
				<button
					className={styles.button}
					type="button"
					onClick={showNextThreeImages}
				>
					{isLoadingImages ? 'loading' : ''} Show next three images
				</button>
			</div>

		</>
  );
}

export async function getStaticProps(){
	const response = await fetch(`${GET_IMAGES_URL}?page=1&limit=3`);

	return {
		props: {
			imageGallery: await response.json()
		}
	}
}
