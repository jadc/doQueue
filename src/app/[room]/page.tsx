"use client"

import { useRouter } from "next/router";
import { useState, useEffect } from "react"

export default function Room({ params }: any) {

    const [owner, setOwner] = useState(false)

    // Determine if client owns room
    useEffect(() => {
        setOwner( params.room === window.localStorage.getItem("id") )
    }, [])

    return (
        <div>
            <h1>Room: {params.room}</h1>
            <p>Owner? {owner ? "Yes" : "No"}</p>
        </div>
    );
};