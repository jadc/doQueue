"use client"

import { useRouter } from "next/router";
import { useState, useEffect } from "react"
import io from "socket.io-client"

let socket: any;
const socketListener = async () => {
    await fetch("/api/socket")
    console.log("listening")
    socket = io();

    socket.on("ping", () => {
        console.log("pong");
    })

    return () => {
        socket.disconnect();
    };
}

export default function Room({ params }: any) {

    const [owner, setOwner] = useState(false)

    useEffect(() => {socketListener()}, [])

    // Determine if client owns room
    useEffect(() => {
        setOwner( params.room === window.localStorage.getItem("id") )
    }, [])

    const test = () => {
        console.log("emit")
        socket.emit('ping');
    }

    return (
        <div>
            <h1>Room: {params.room}</h1>
            <p>Owner? {owner ? "Yes" : "No"}</p>
            <p onClick={test}>Ping</p>
        </div>
    );
};