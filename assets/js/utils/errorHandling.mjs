export class NameError extends Error {
  constructor(message) {
    super(message);
    this.name = "NameError";
    this.regex = /^[a-zA-Z0-9_]+$/;
  }
}

export class EmailError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailError";
    this.regex = /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/;
  }
}

export class PasswordError extends Error {
  constructor(message) {
    super(message);
    this.name = "PasswordError";
  }
}

export class APIError extends Error {
  constructor(message) {
    super(message);
    this.name = "APIError";
  }
}
