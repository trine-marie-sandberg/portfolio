import { ContentWrap, GridWrap } from "./style";

export default function FlexContent({children}) {
    return(
        <ContentWrap>{children}</ContentWrap>
    )
}

export function GridContent({children}) {
    return(
        <GridWrap>{children}</GridWrap>
    )
}