"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUser = exports.loginControl = exports.userMongooseModel = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userMongooseModel = User_1.default;
const loginControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = req.body;
    try {
        const user = yield exports.userMongooseModel.findOne({ userName: userName });
        if (!user) {
            return res
                .status(400)
                .json({ message: "No account with this Username" });
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ message: "Incorrect password" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, '5:A&:D[h)u{n[]&r');
        res.json({
            token,
            user: {
                id: user._id,
                userName: user.userName,
            }
        });
    }
    catch (error) {
        throw error;
    }
});
exports.loginControl = loginControl;
const generateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt_1.default.genSalt();
        const passwordHash = yield bcrypt_1.default.hash("dana123", salt);
        const newUser = new User_1.default({
            userName: 'dana',
            password: passwordHash,
        });
        const savedUser = yield newUser.save();
        res.json(savedUser);
    }
    catch (err) {
        throw err;
    }
});
exports.generateUser = generateUser;
//# sourceMappingURL=LoginController.js.map