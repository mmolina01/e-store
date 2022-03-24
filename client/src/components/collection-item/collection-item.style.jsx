import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover{
		.image{
			opacity: 0.8;
		}

		.custom-button{
			opacity: 0.85;
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;

		&:hover{
			.image{
				opacity: unset;
			}
	
			.custom-button{
				opacity: unset;
			}
		}
	}
`;

export const CollectionImageContainer = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({imageUrl}) => `url(${imageUrl})`}
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const CollectionFooterNameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const CollectionFooterPriceContainer = styled.span`
	width: 10%;
`;

export const AddButtonContainer = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;

	@media screen and (max-width: 800px) {
		display: block;
		opacity: 0.9;
		min-width: unset;
		padding: 0 10px 0 10px;
	}
`;