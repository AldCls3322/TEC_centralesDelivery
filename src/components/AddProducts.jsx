
import styled from "styled-components"

export const AddProducts = ({ onAddProduct }) => {
    return (
        <BtnMenu onClick={onAddProduct}>AGREGAR</BtnMenu>
    )
}

//default AddProducts

const BtnMenu = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */
    width: 90%;
    height: 50%;
    max-width: 180px;
    max-height: 40px;
    display: flex;
    text-align: center;
    vertical-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 600;
    margin-bottom: 60px;

    /* Color, Background & Text */
    background: ${({ theme }) => theme.color3};
    color: ${({ theme }) => theme.body};

    /* Animations and Other */
    transition: 0.2s ease-out;
    &:hover {
        background: ${({ theme }) => theme.color2};
        transition: 0.2s ease-out;
        cursor: pointer;
        color: ${({ theme }) => theme.color7};
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.color9});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.color9});            /* MDN */
    }
`