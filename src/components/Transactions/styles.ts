import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 6px;
`

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`

type PriceProps = {
  type: 'INCOME' | 'OUTCOME'
}

export const Price = styled.Text<PriceProps>`
  color: ${({ theme, type }) =>
    type === 'INCOME' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`
