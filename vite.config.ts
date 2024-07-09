import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), "");
    return {
        // vite config
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        build: {
            // sourcemap: false,
            minify: false,
        },
        plugins: [
            laravel({
                hotFile: 'public/vendor/processton-client/processton-client.hot', // Most important lines
                buildDirectory: 'vendor/processton-client', // Most important lines
                input: [
                    "./resources/assets/js/app.tsx",
                    "./resources/assets/css/app.css"
                ],
                // ssr: ["./resources/js/ssr.tsx"],
                refresh: true,
            }),
            react(),
            
        ],
    };
});
