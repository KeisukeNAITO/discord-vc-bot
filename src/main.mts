import { config } from "dotenv";

config();

console.log(
	`${process.env.npm_package_name} ver ${process.env.npm_package_version}/${process.env.LOG_LEVEL}`,
);
