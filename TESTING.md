

1.  `POST /api/resources` - 201 Created
2.  `GET /api/resources` - 200 OK - "id": "1", "title": "Lesson Express"
3.  `GET /api/resources/999` - 404 Not Found
4.  `PUT /api/resources/1` - 200 OK
5.  `DELETE /api/resources/1` - 200 OK
6.  `GET /api/resources` - 200 OK