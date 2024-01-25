import { useRouter } from 'next/router';

export default function Room({ params }) {
    return (
        <h1>Room: {params.room}</h1>
    );
};