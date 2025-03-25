'use client';

const style = `
.skeleton-image {
    width: 100%;
    border-radius: 8px;
    animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
    0% {
        background-position: 100%;
    }
    100% {
        background-position: -100%;
    }
}

.skeleton-image {
    background: linear-gradient(90deg, #1e1e1f 25%, rgb(34, 34, 34) 50%,#1e1e1f 75%); 
    background-size: 200% 100%;
}`;

const ShowThemeSkeletonCards = ({ cardHeight }) => {
	const cards = Array.from({ length: 10 }, (_, index) => <div className="skeleton-image" key={`skeleton-image${index}`} style={{ height: cardHeight + 'px' }}></div>);

	return (
		<>
			<style>{style}</style>
			{cards}
		</>
	);
};

export default ShowThemeSkeletonCards;
