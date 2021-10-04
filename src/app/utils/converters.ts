import { Post } from "../dtos";

export function convertPost(oldPost:any): Post {
    return {
        id:oldPost.id,
        userId:oldPost.userId,
        title:oldPost.title,
        message:oldPost.body
    }
}