# React DadataFio
React-компонент для подсказок ФИО с помощью сервиса DaData.ru

![Demo Pic](../assets/reactdadatafio.png?raw=true)

### Установка
```
npm install react-dadata-fio
```
или
```
yarn react-dadata-fio
```

### Пример
```javascript
import { ReactDadataFio } from 'react-dadata-fio';

// ...

<ReactDadataFio token="API_KEY" query="Александр Сергеевич Пушкин" placeholder="" />
```

### Свойства

| Свойство  | Обязательный | Тип | Описание |
| ------------- | ------------- | ------------- | ------------- |
| token  | Да  | string  | Авторизационный токен DaData.ru  |
| placeholder  | Нет  | string  | Текст placeholder  |
| query  | Нет  | string  | Начальное значение поля ввода  |
| autoload  | Нет  | boolean  | Если `true`, то запрос на получение подсказок будет инициирован в фоне сразу, после монтирования компонента  |
| onChange  | Нет  | function(suggestion: ReactDadataFio.DadataSuggestion)  | Функция, вызываемая при выборе подсказки  |

### Лицензия

```
The MIT License

Copyright (c) 2018 Genotek <gusev@genotek.ru>, genotek.ru

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
