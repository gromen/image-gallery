import styles from './ImageGallery.module.css'

function ImageGallery ({ images }) {
	return (
		<>
			{images.map(image => {
				return (
					<img
						className={styles.img}
						src={`${image.download_url}`}
						alt="image"
						key={image.download_url}
					/>
				)
			})}
		</>
	)
}


export default ImageGallery;
