import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
`

export const Form = styled.View`
  margin-top: 32px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 8px;
  `}
`

export const TransactionType = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`
