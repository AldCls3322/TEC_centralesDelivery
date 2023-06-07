import styled from "styled-components";

export const TabItem = ({ title, index, active, setActive}) => {
    const className = active ? 'border-b-yellow-400' : 'border-none text-slate-400';

    return (
        <Container>
            <SelectedOption onClick={() => setActive(title)}>
                <TextContainer>{title.toUpperCase()}</TextContainer>
            </SelectedOption>
        </Container>
    )
}

const Container = styled.div`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
    // className="nav-item px-2"
`

const SelectedOption = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
    // className="pt-7 pb-3"
`

const TextContainer = styled.span`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */

    /* Animations and Other */
    &:hover{
        color: ${({ theme }) => theme.color4}
        transition: 0.2s ease-in-out;
        filter: drop-shadow(0 0 1rem ${({ theme }) => theme.body});            /* FF~35 */
        filter: drop-shadow(0 0 0 1rem ${({ theme }) => theme.body});            /* MDN */
    }
`