import styled from "styled-components";
import CustomButtom from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
`;

export const CustomButtonContainer = styled(CustomButtom)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
`;