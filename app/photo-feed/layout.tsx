export default function PhotoFeedLayout({ children, slots }:
    { children: React.ReactNode, slots: React.ReactNode }
) {
    return (
        <div style={{textAlign:"center", margin: "auto"}}>
            {children}
            <div style={{display: "flex"}}>
            {/* {slots} */}
            </div>
        </div>
    )
}