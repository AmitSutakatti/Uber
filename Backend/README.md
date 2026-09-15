# Backend API

## Register User

Creates a new user account and returns an authentication token.

### Endpoint

```http
POST /users/register
```

The default server URL is:

```text
http://localhost:3000/users/register
```

### Request Headers

```http
Content-Type: application/json
```

### Request Body

All fields are required:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Validation Rules

| Field | Requirement |
| --- | --- |
| `fullname.firstname` | At least 3 characters |
| `fullname.lastname` | At least 3 characters |
| `email` | Must be a valid email address |
| `password` | At least 6 characters |

### Successful Response

**Status:** `201 Created`

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

The `token` can be used to authenticate the user in subsequent requests.

### Validation Error Response

**Status:** `400 Bad Request`

Returned when one or more request fields fail validation.

```json
{
  "errors": [
    {
      "type": "field",
      "value": "a",
      "msg": "First name must be at least 3 characters long .",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
```
