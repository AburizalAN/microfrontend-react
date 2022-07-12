import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default function Progress() {
  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Container>
  );
}