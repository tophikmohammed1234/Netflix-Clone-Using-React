import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/Netflix-Clone-Using-React/",
	plugins: [react()],
	define: {
		"process.env": process.env,
	},
});
