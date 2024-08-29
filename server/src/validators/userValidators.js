import { body, validationResult } from "express-validator";

// Validation middleware
// Validation middleware
const validateRegistration = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long."),

  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Email must be valid."),

  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),

  body("profile_pic")
    .optional()
    .isURL()
    .withMessage("Profile picture must be a valid URL."),

  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array().map((err) => ({
          field: err.param,
          message: err.msg,
        })),
        error: true,
      });
    }
    next();
  },
];
export { validateRegistration };
