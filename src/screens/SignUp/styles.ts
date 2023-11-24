import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Form = styled.View`
  flex: 1;
  margin-top: 52px;
  width: 100%;
`

export const Label = styled.Text`
  margin-bottom: 6px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const LinkContainer = styled.View`
  margin-top: 32px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Link = styled.TouchableOpacity``

export const LinkText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-decoration: underline;
  margin-left: 4px;
`
