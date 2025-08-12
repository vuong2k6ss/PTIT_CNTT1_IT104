class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: Comment) {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public likes: number[];
    public comments: Comment[];
    public userId: number;
    public content: string;

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: number) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment) {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string) {
        const post = new Post(this.posts.length + 1, this.id, content);
        this.posts.push(post);
    }

    comment(post: Post, commentContent: string) {
        const comment = new Comment(post.comments.length + 1, this.id, commentContent);
        post.addComment(comment);
    }

    follow(user: User) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(post: Post) {
        post.addLike(this.id);
    }

    viewFeed() {
        console.log(`Feed của User ${this.id}:`);
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                console.log(`Post #${post.id} từ User ${post.userId}: ${post.content}`);
            });
        });
    }
}

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

user1.createPost("Hello world!");
user2.createPost("TypeScript is awesome!");


user3.follow(user1);
user3.follow(user2);

user3.viewFeed();

user3.likePost(user1.posts[0]);

user3.comment(user2.posts[0], "Agree with you!");

console.log(user2.posts[0]);
