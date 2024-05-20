"use client"
import { redirect } from "next/navigation";

export default function Home() {
    // Generate unique identifier and room for new user
    const clientRoom = (Math.random() + 1).toString(36).substring(2);
    //window.localStorage.setItem("id", clientRoom);
    return (redirect(clientRoom));
}
