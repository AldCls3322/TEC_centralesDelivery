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
    //transition: 0.2s ease-in-out;

    /* Animations and Other */
    // className="nav-item px-2"
`

const SelectedOption = styled.button`
    /* Positioning */

    /* Display & Box Model | Sizing */
    border: none;

    /* Color, Background & Text */
    background: transparent;
    color: ${( { theme } ) => theme.color8};
    border-bottom: solid transparent;

    /* Animations and Other */
    // className="pt-7 pb-3"
    &:hover{
        transition: 0.5s ease-in-out;
        color: ${({ theme }) => theme.color10};
        border-bottom: solid ${( { theme } ) => theme.color5};
    }

    :active, :focus {
        color: ${({ theme }) => theme.color10};
        font-weight: 600;
        border-bottom: solid ${( { theme } ) => theme.color5};
    }
`

const TextContainer = styled.span`
    /* Positioning */

    /* Display & Box Model | Sizing */

    /* Color, Background & Text */
    font-size: 1.5rem;

    /* Animations and Other */
`