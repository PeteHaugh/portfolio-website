const socket = new WebSocket('ws://localhost:8000/ws');

let connect = (cb) => {
    console.log("connecting")

    socket.onopen = () => {
        console.log("successfully connected")
    }

    socket.onmessage = (msg) => {
        console.log("Message from websocket:", msg)
        cb(msg);
    }

    socket.onclose = (e) => {
        console.log("socket closed connection:", e)
    }

    socket.onerror = (err) => {
        console.log("socket error:", err)
    }

};

let sendMessage = (msg) => {
    console.log("sending msg:", msg);
    socket.send(msg)
}

export { connect, sendMessage };