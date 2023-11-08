import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE_900};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
