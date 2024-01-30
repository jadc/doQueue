import { Server } from "socket.io"

const SocketHandler = (req: any, res: any) => {
    if (!res.socket.server.io) {
        console.log("Initializing socket");
        const io = new Server(res.socket.server);

        // Listen for connection events
        io.on("connection", (socket) => {
            console.log(`Socket ${socket.id} connected.`);

            // Listen for incoming messages and broadcast to all clients
            socket.on("ping", () => {
                io.emit("ping");
            });

            // Clean up the socket on disconnect
            socket.on("disconnect", () => {
                console.log(`Socket ${socket.id} disconnected.`);
            });
        });
        res.socket.server.io = io;
    }
    res.end();
}

export default SocketHandler;