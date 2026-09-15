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

```jsonm
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

## Login User

Authenticates an existing user and returns an authentication token and user details.

### Endpoint

```http
POST /users/login
```

The default server URL is:

```text
http://localhost:3000/users/login
```

### Request Headers

```http
Content-Type: application/json
```

### Request Body

Both fields are required:

```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Validation Rules

| Field | Requirement |
| --- | --- |
| `email` | Must be a valid email address |
| `password` | At least 6 characters |

### Successful Response

**Status:** `200 OK`

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

### Error Responses

**Status:** `400 Bad Request`

Returned when the email or password fails validation.

```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid-email",
      "msg": "Invalid Email",
      "path": "email",
      "location": "body"
    }
  ]
}
```

**Status:** `401 Unauthorized`

Returned when the email does not exist or the password is incorrect.

```json
{
  "message": "Invalid email or password"
}
```

## Get User Profile

Returns the profile of the currently authenticated user.

### Endpoint

```http
GET /users/profile
```

### Authentication

Provide the token in either of these ways:

#### Token Cookie

The login endpoint sets a `token` cookie automatically.

#### Authorization Header

```http
Authorization: Bearer JWT_TOKEN
```

### Successful Response

**Status:** `200 OK`

```json
{
  "_id": "USER_ID",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Error Response

**Status:** `401 Unauthorized`

Returned when the token is missing, invalid, expired, or blacklisted.

```json
{
  "message": "Unauthorized access"
}
```

## Register Captain

Creates a captain account with vehicle details and returns an authentication token.

> Note: The current API uses the `/captians` path spelling.

### Endpoint

```http
POST /captians/register
```

The default server URL is:

```text
http://localhost:3000/captians/register
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
  "password": "secret123",
  "vehicle": {
    "color": "black",
    "plate": "AB12CD3456",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Validation Rules

| Field | Requirement |
| --- | --- |
| `fullname.firstname` | At least 3 characters |
| `fullname.lastname` | At least 3 characters |
| `email` | Must be a valid email address |
| `password` | At least 6 characters |
| `vehicle.color` | At least 3 characters |
| `vehicle.plate` | At least 3 characters |
| `vehicle.capacity` | An integer of at least 1 |
| `vehicle.vehicleType` | Must be `car`, `motorcycle`, or `auto` |

### Successful Response

**Status:** `201 Created`

```json
{
  "token": "JWT_TOKEN",
  "captian": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "AB12CD3456",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Error Responses

**Status:** `400 Bad Request`

Returned when a field fails validation or the email is already registered.

Validation error example:

```json
{
  "errors": [
    {
      "type": "field",
      "value": "x",
      "msg": "First name must be at least 3 characters long .",
      "path": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

Duplicate email example:

```json
{
  "message": "Captian already exists !"
}
```

## Captain Login

Authenticates an existing captain and returns an authentication token and captain details.

### Endpoint

```http
POST /captians/login
```

The default server URL is:

```text
http://localhost:3000/captians/login
```

### Request Headers

```http
Content-Type: application/json
```

### Request Body

Both fields are required:

```json
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

#### Validation Rules

| Field | Requirement |
| --- | --- |
| `email` | Must be a valid email address |
| `password` | At least 6 characters |

### Successful Response

**Status:** `200 OK`

The response also sets a `token` cookie.

```json
{
  "token": "JWT_TOKEN",
  "captian": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "AB12CD3456",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Error Responses

**Status:** `400 Bad Request`

Returned when the email or password fails validation.

**Status:** `401 Unauthorized`

Returned when the email does not exist or the password is incorrect.

```json
{
  "message": "Invalid email or password"
}
```

## Captain Profile

Returns the profile of the currently authenticated captain.

### Endpoint

```http
GET /captians/profile
```

### Authentication

Provide the token in either of these ways:

#### Token Cookie

The captain login endpoint sets a `token` cookie automatically.

#### Authorization Header

```http
Authorization: Bearer JWT_TOKEN
```

### Successful Response

**Status:** `200 OK`

```json
{
  "captian": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "black",
      "plate": "AB12CD3456",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Error Response

**Status:** `401 Unauthorized`

Returned when the token is missing, invalid, expired, or blacklisted.

```json
{
  "message": "Unauthorized access"
}
```

## Captain Logout

Logs out the authenticated captain by clearing the `token` cookie and blacklisting the token.

### Endpoint

```http
GET /captians/logout
```

### Authentication

Authentication is required. Use the `token` cookie or the following header:

```http
Authorization: Bearer JWT_TOKEN
```

### Successful Response

**Status:** `200 OK`

```json
{
  "message": "Logged out successfully"
}
```

### Error Response

**Status:** `401 Unauthorized`

Returned when the token is missing, invalid, expired, or blacklisted.

```json
{
  "message": "Unauthorized access"
}
```
