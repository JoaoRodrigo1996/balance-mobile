import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
`

export const Content = styled.View`
  flex: 1;
  margin-top: 14px;
`

export const SummaryCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingRight: 24 },
})`
  width: 100%;
`

export const NewTransaction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 14px;
  margin-left: auto;
`

export const Title = styled.Text`
  margin-left: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`
