export async function generateStaticParams() {
    return [
        {
            id: "portfolio",
        },
        {
            id: "blog",
        },
    ];
}

export default function Page({ params }: { params: { id: string } }) {
    return <div>{params.id}</div>;
}