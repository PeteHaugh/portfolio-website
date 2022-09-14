import React from 'react'
import styled from 'styled-components';

type LayoutProps = {
    children: React.ReactNode; // 👈️ type children
};

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    /* min-height: 100vh; */
`;

const Layout = (props: LayoutProps) => {
  return (
    <StyledLayout>
        <>asdadsfasd
        </>
    </StyledLayout>
  )
}

export default Layout