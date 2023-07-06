import * as S from "./style"

const LineHeader = () => {
    return (
        <S.LineHeaderContainer>
            <S.LineTextAndLinkContainer>

                <S.LineHeaderText>
                    New in
                </S.LineHeaderText>

                <S.LineHeaderLink>
                    <a href="#">
                        Descubra as novidades
                    </a>
                </S.LineHeaderLink>

            </S.LineTextAndLinkContainer>
        </S.LineHeaderContainer>
    );
}

export default LineHeader;