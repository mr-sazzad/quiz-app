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
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 5001;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = app_1.default.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
        // Graceful shutdown
        const shutdown = () => __awaiter(this, void 0, void 0, function* () {
            console.log("Shutting down the server...");
            server.close(() => {
                console.log("Server has been gracefully terminated");
                process.exit(0);
            });
            // Forcefully close server after a specific timeout (e.g., 10 seconds)
            setTimeout(() => {
                console.error("Server forcefully terminated after timeout");
                process.exit(1);
            }, 10000);
        });
        // Handle process termination signals
        process.on("SIGTERM", shutdown);
        process.on("SIGINT", shutdown);
        // Handle uncaught exceptions and unhandled promise rejections
        const handleUnexpectedErrors = (error) => {
            console.error("Unexpected error:", error);
            shutdown();
        };
        process.on("uncaughtException", handleUnexpectedErrors);
        process.on("unhandledRejection", handleUnexpectedErrors);
        return server;
    });
}
// Start the server
startServer()
    .then(() => {
    console.log("Server started successfully");
})
    .catch((error) => {
    console.error("Error starting the server:", error);
    process.exit(1);
});
