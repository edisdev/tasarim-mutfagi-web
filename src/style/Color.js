import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.color.brand[p.color]};
`
