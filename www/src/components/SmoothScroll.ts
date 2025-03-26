import { useCallback, useEffect, useState } from 'react';

export const useScrollNavigation = (refsArray) => {
	const [navigatorIndex, setNavigatorIndex] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);

	const jumpTo = useCallback(
		(targetRef) => {
			const targetRefObject =
				typeof targetRef === 'number'
					? refsArray[Math.max(0, Math.min(targetRef, refsArray.length - 1))]
					: targetRef;

			if (targetRefObject && targetRefObject.current) {
				// Prevent multiple simultaneous scrolls
				if (isScrolling) return;
				setIsScrolling(true);

				if (targetRefObject.current.tagName === 'VIDEO') {
					const videoElement = targetRefObject.current;
					videoElement.currentTime = 0;
				}

				targetRefObject.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center',
				});

				const newIndex = refsArray.findIndex((ref) => ref === targetRefObject);
				if (newIndex !== -1) {
					setNavigatorIndex(newIndex);
				}

				setTimeout(() => {
					setIsScrolling(false);
				}, 800);
			}
		},
		[refsArray, isScrolling],
	);

	useEffect(() => {
		const handleWheel = (e) => {
			e.preventDefault();
			if (isScrolling) return;

			const direction = e.deltaY > 0 ? 1 : -1;
			const nextIndex = Math.max(
				0,
				Math.min(refsArray.length - 1, navigatorIndex + direction),
			);

			if (nextIndex === navigatorIndex) return;
			jumpTo(nextIndex);
		};

		window.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [jumpTo, navigatorIndex, refsArray, isScrolling]);

	return {
		navigatorIndex,
		jumpTo,
	};
};
