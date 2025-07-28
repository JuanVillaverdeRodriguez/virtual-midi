

export default function Layout({ topBar, body, footer }: { topBar?: React.ReactNode, body?: React.ReactNode, footer?: React.ReactNode }) {
    return (
        <div className="rounded-lg bg-background ">
            {topBar}
            {body}
            {footer}
        </div>
    );
}

