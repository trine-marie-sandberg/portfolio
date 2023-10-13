import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  filter: blur(8px);
  pointer-events: none;
  user-select: none;
  overflow: hidden;
    &::before {
	  content: "";
	  position: absolute;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
	  background: #000;
	  z-index: 1;
	  opacity: 0.8;
    }
      &__image {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) translateX(var(--image-translate-offset, 0));
		width: 180%;
		height: 180%;
		transition: transform 1000ms ease, opacity 1000ms ease;
		overflow: hidden;

		img {
		  width: 100%;
		  height: 100%;
		  object-fit: cover;
		}
		&.current--image {
		  opacity: 1;
		  --image-translate-offset: 0;
		}
		&.previous--image,
		&.next--image {
		  opacity: 0;
		}
		&.previous--image {
		  --image-translate-offset: -25%;
		}
		&.next--image {
		  --image-translate-offset: 25%;
		}
	  }
`;