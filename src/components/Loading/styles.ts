import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.BLUE_500,
}))``
