const db = require('../db')

class PostController {
    async createPost(req, res) {
        const { name, content } = req.body
        const newPost = await db.query('INSERT INTO post (name, content) values ($1, $2) RETURNING *', [name, content])
        res.json(newPost.rows[0])
    }
    async getPosts(req, res) {
        const posts = await db.query('SELECT * FROM post')
        res.json(posts.rows)
    }
    async getOnePost(req, res) {
        const id = req.params.id
        const post = await db.query('SELECT * FROM post where id = $1', [id])
        res.json(post.rows[0])
    }
    async updatePost(req, res) {
        const { id, name, content } = req.body
        const post = await db.query('UPDATE post set name = $1, content = $2 where id = $3 RETURNING *', [name, content, id])
        res.json(post.rows[0])
    }
    async deletePost(req, res) {
        const id = req.params.id
        const post = await db.query('DELETE FROM post where id = $1', [id])
        res.json(post.rows[0])
    }
}
module.exports = new PostController()