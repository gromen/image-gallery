import styles from './ImageGallery.module.css'

function ImageGallery ({ images }) {
	return (
		<>
			{images.map(image => {
				const { download_url, author } = image;

				return (
					<img
						className={styles.img}
						src={`${download_url}`}
						alt={`Image captured by ${author}`}
						key={download_url}
					/>
				)
			})}
		</>
	)
}


export default ImageGallery;
