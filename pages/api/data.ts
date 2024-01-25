type Room = {
    owner_id: string,
    queues: Queue[]
}

type Queue = {
    name: string,
    members: string[]
}

export const data: Room[] = [{
    owner_id: "abc", 
    queues: [
        { 
            name: "my queue", 
            members: ["bob", "alice"]
        }
    ] 
}]

export default data;