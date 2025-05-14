# Сборка проекта
***

### Создание БД

+ устанавливаем *PostgreSQL*
+ открываем папку **bin** в командной строке и вводим следующие команды:
```
psql --version   
psql -U postgres

Далее вводим пароль (в данном случае root)

\l
сreate database feedback
\l
\connect feedback

Вставляем в командную строку таблицу из файла database.sql:
create TABLE post(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    content VARCHAR(255)
);
```

### Запуск сервера  
Открываем консоль и вводим следующую команду, находясь в директории *project*:
```
npm start
```  

При успешном запуске сервера будет возвращено следующее сообщение:
> Server started at port: 5000

### Запуск приложения 
```
cd .\frontend\
cd .\my-react-site\
npm start 
```
При успешном запуске приложения будет возвращено следующее сообщение:
> *Compiled successfully!*  
> *You can now view my-react-site in the browser.*    
> 
>   Local:            [http://localhost:3000](http://localhost:3000)   
>   On Your Network:  *[Здесь будет адрес Вашей сети](/)*

---


### Главная страница приложения   

![image](https://github.com/user-attachments/assets/ff906656-7cac-4522-af58-bb096b4ed24b)

