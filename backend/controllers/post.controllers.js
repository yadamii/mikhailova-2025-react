// Импорт модуля для работы с базой данных
const db = require('../db')

// Класс контроллера для работы с постами (бизнес-логика)
class PostController {
    // Создание нового поста
    async createPost(req, res) {
        // Деструктуризация тела запроса
        const { name, content } = req.body
        // SQL-запрос с параметризацией для безопасности от инъекций
        const newPost = await db.query(
            'INSERT INTO post (name, content) values ($1, $2) RETURNING *', 
            [name, content]
        )
        // Отправка созданного поста (первой записи из результата)
        res.json(newPost.rows[0])
    }

    // Получение всех постов из базы
    async getPosts(req, res) {
        // Простой SELECT-запрос без условий
        const posts = await db.query('SELECT * FROM post')
        // Отправка всех найденных записей
        res.json(posts.rows)
    }

    // Получение одного поста по ID
    async getOnePost(req, res) {
        // Получение ID из параметров URL
        const id = req.params.id
        // Поиск по первичному ключу с параметризацией
        const post = await db.query('SELECT * FROM post where id = $1', [id])
        // Отправка найденного поста (предполагается существование записи)
        res.json(post.rows[0])
    }

    // Обновление существующего поста
    async updatePost(req, res) {
        // Получение данных из тела запроса
        const { id, name, content } = req.body
        // Использование RETURNING для получения обновленной версии
        const post = await db.query(
            'UPDATE post set name = $1, content = $2 where id = $3 RETURNING *', 
            [name, content, id]
        )
        res.json(post.rows[0])
    }

    // Удаление поста по ID
    async deletePost(req, res) {
        // Получение ID из параметров URL
        const id = req.params.id
        // Запрос на удаление с возвратом удаленной записи
        const post = await db.query('DELETE FROM post where id = $1', [id])
        res.json(post.rows[0])
    }
}

// Экспорт singleton-экземпляра контроллера
module.exports = new PostController()