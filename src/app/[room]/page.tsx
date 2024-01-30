"use client"

import { useRouter } from "next/router";
import { useState, useEffect } from "react"
import io from "socket.io-client"
import type { Room } from "../../../pages/api/data"

let socket: any;
const socketListener = async (setter: any) => {
    await fetch("/api/socket")
    console.log("listening")
    socket = io();

    socket.on("sync", (data: Room[]) => {
        console.log(data)
        setter(data)
    })
    return () => socket.disconnect();
}

export default function Room({ params }: any) {

    const [data, setData] = useState([])

    useEffect(() => {socketListener(setData)}, [])

    // Determine if client owns room
    /*
    useEffect(() => {
        setOwner( params.room === window.localStorage.getItem("id") )
    }, [])
    */

    const test = () => {
        console.log("emit")
        socket.emit("sync", data);
    }

    return (
        <div>
            <h1>Room: {params.room}</h1>
            <p onClick={test}>Ping</p>
            <p>{data}</p>
        </div>
    );
};